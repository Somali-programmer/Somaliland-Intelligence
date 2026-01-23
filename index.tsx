
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log(">> SYSTEM BOOT: Intelligence Platform Entry Point Executing");

const rootElement = document.getElementById('root');

if (!rootElement) {
  const errorMsg = "CRITICAL ERROR: DOM node with id='root' was not found.";
  console.error(errorMsg);
} else {
  try {
    console.log(">> SYSTEM BOOT: Initializing React Root...");
    const root = ReactDOM.createRoot(rootElement);
    
    // Rendering App without StrictMode for maximum compatibility in this environment
    root.render(<App />);
    
    console.log(">> SYSTEM ONLINE: UI Root Render Initiated Successfully");
  } catch (err) {
    console.error(">> CRITICAL FAILURE: React Mount Failed", err);
    const errorOverlay = document.getElementById('error-overlay');
    if (errorOverlay) {
      errorOverlay.style.display = 'block';
      errorOverlay.innerHTML = `
        <div style="background: #020617; color: #ef4444; padding: 25px; border-radius: 12px; font-family: monospace; border: 1px solid rgba(239, 68, 68, 0.2);">
          <h2 style="margin-top:0; font-size: 18px;">Mount Failure</h2>
          <p style="font-size: 14px; color: #fecaca;">React failed to initialize the component tree.</p>
          <pre style="background: #000; padding: 15px; border: 1px solid #333; margin-top: 15px; font-size: 11px; white-space: pre-wrap; color: #9ca3af;">${err instanceof Error ? err.stack || err.message : String(err)}</pre>
          <button onclick="location.reload()" style="margin-top: 20px; padding: 12px 24px; background: #10B981; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">Force Restart</button>
        </div>
      `;
    }
  }
}
