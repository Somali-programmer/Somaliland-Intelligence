
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

/**
 * STARTUP SEQUENCE
 * This log confirms that the transpiler has successfully finished
 * and the JavaScript engine has begun executing the application logic.
 */
console.log(">> SYSTEM BOOT: Intelligence Platform Entry Point Executing");

const rootElement = document.getElementById('root');

if (!rootElement) {
  const errorMsg = "CRITICAL: UI Root (id='root') was not found in the DOM.";
  console.error(errorMsg);
  throw new Error(errorMsg);
}

try {
  const root = ReactDOM.createRoot(rootElement);
  
  // By rendering, we effectively replace the #loading-screen 
  // provided in index.html, signifying step 3 is complete.
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log(">> SYSTEM ONLINE: UI Root Mounted Successfully");
} catch (err) {
  console.error(">> CRITICAL FAILURE: React Mount Failed", err);
  throw err;
}
