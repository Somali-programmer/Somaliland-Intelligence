
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log(">> SYSTEM BOOT: Intelligence Platform Entry Point Executing");

const rootElement = document.getElementById('root');

if (!rootElement) {
  const errorMsg = "CRITICAL: UI Root (id='root') was not found in the DOM.";
  console.error(errorMsg);
  throw new Error(errorMsg);
}

try {
  const root = ReactDOM.createRoot(rootElement);
  
  // Attempt to render the app
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log(">> SYSTEM ONLINE: UI Root Mounted Successfully");
} catch (err) {
  console.error(">> CRITICAL FAILURE: React Mount Failed", err);
  
  // Fallback: If React completely fails, show the error in the UI
  const errorOverlay = document.getElementById('error-overlay');
  if (errorOverlay) {
    errorOverlay.style.display = 'block';
    errorOverlay.innerHTML = `<h2>Mount Failure</h2><pre>${err instanceof Error ? err.message : String(err)}</pre>`;
  }
}
