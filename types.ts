
export interface NewsItem {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

export interface SentimentData {
  status: 'Tense' | 'Stable' | 'Developing' | 'Crisis';
  score: number; // 0 to 100
  lastUpdated: string;
}

export interface CityTooltip {
  name: string;
  coordinates: { x: number; y: number };
  info: string;
}
