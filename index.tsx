
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log(">> SYSTEM BOOT: Intelligence Platform Entry Point Executing");

const rootElement = document.getElementById('root');

if (!rootElement) {
  const errorMsg = "CRITICAL: UI Root (id='root') was not found in the DOM.";
  console.error(errorMsg);
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    
    // Mount the application
    root.render(<App />);
    
    console.log(">> SYSTEM ONLINE: UI Root Mounted Successfully");
  } catch (err) {
    console.error(">> CRITICAL FAILURE: React Mount Failed", err);
    const errorOverlay = document.getElementById('error-overlay');
    if (errorOverlay) {
      errorOverlay.style.display = 'block';
      errorOverlay.innerHTML = `
        <div style="background: #020617; color: #ef4444; padding: 20px; border-radius: 8px; font-family: monospace;">
          <h2 style="margin-top:0">System Initialization Failure</h2>
          <p>The core UI engine could not be synchronized.</p>
          <pre style="background: #000; padding: 15px; border: 1px solid #333; margin-top: 10px; font-size: 12px; white-space: pre-wrap;">${err instanceof Error ? err.message : String(err)}</pre>
          <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #10B981; color: white; border: none; border-radius: 4px; cursor: pointer;">Force Reload</button>
        </div>
      `;
    }
  }
}
