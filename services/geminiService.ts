
import { GoogleGenAI, Type } from "@google/genai";

// We instantiate inside functions to ensure the latest process.env.API_KEY is used
// as per the requirement for environments that use openSelectKey().

export const getGeopoliticalSummary = async (): Promise<string[]> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Generate 3 concise, high-impact bullet points summarizing the current geopolitical trends and 2026 outlook for Somaliland. Focus on diplomatic recognition efforts, Berbera Port developments, and regional security stability.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            bullets: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Three concise intelligence bullet points."
            }
          },
          required: ["bullets"]
        }
      }
    });

    const data = JSON.parse(response.text || '{"bullets": []}');
    return data.bullets.length > 0 ? data.bullets : [
      "Diplomatic momentum building ahead of the 2026 recognition strategy milestones.",
      "Strategic expansion of Berbera Port continues to reshape East African trade corridors.",
      "Security apparatus maintains high stability amidst shifting regional maritime alliances."
    ];
  } catch (error: any) {
    console.error("Error fetching Gemini summary:", error);
    if (error.message?.includes("Requested entity was not found")) {
      // This usually means the API key project is invalid/unselected
      if (window.aistudio) window.aistudio.openSelectKey();
    }
    return [
      "Strategic diplomatic initiatives are intensifying regional integration efforts.",
      "Berbera Corridor infrastructure reaching critical operational capacity.",
      "Enhanced security protocols ensuring maritime stability in the Red Sea zone."
    ];
  }
};

export interface LocationIntel {
  text: string;
  links: Array<{ title: string; uri: string }>;
}

export const getLocationIntel = async (locationName: string): Promise<LocationIntel> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    // Try to get user coordinates for better grounding context
    let latLng = undefined;
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 3000 });
      });
      latLng = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
    } catch (e) {
      console.warn("Geolocation not available/timed out, proceeding with general grounding.");
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Provide a strategic geopolitical briefing about the city of ${locationName}, Somaliland. Focus on its economic importance, current infrastructure status, and regional security relevance.`,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: latLng
          }
        }
      },
    });

    const text = response.text || "Strategic intelligence data is currently unavailable for this specific sector.";
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    const links = groundingChunks
      .filter(chunk => chunk.maps)
      .map(chunk => ({
        title: chunk.maps?.title || "View on Maps",
        uri: chunk.maps?.uri || "#"
      }));

    return { text, links };
  } catch (error: any) {
    console.error("Error fetching Maps Intel:", error);
    if (error.message?.includes("Requested entity was not found")) {
       if (window.aistudio) window.aistudio.openSelectKey();
    }
    return {
      text: `Tactical overview for ${locationName} is undergoing maintenance. Primary hubs include administrative centers and logistics corridors vital for the 2026 outlook.`,
      links: []
    };
  }
};
