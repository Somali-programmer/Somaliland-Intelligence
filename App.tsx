
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import SentimentTracker from './components/SentimentTracker.tsx';
import NewsGrid from './components/NewsGrid.tsx';
import MapSection from './components/MapSection.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  useEffect(() => {
    console.log(">> APP_MODULE: Component Mounted Successfully");
    
    const finalizeLoading = () => {
      const loader = document.getElementById('loading-screen');
      if (loader) {
        console.log(">> APP_MODULE: Hiding Loader Overlay");
        loader.classList.add('hidden');
        
        // Remove from DOM to ensure zero interaction interference
        setTimeout(() => {
          if (loader.parentNode) {
            loader.parentNode.removeChild(loader);
            console.log(">> APP_MODULE: Loader Overlay Disposed");
          }
        }, 500);
      }
    };

    // Attempt to hide loader immediately
    finalizeLoading();
    
    // Safety check in case of slow style calculations
    const safetyTimer = setTimeout(finalizeLoading, 100);
    return () => clearTimeout(safetyTimer);
  }, []);

  return (
    <div 
      id="app-container" 
      className="min-h-screen flex flex-col bg-[#FBFBFA] dark:bg-[#020617] text-[#1A1F2E] dark:text-[#F1F5F9] transition-colors duration-300"
      style={{ display: 'flex', minHeight: '100vh', width: '100%', opacity: 1, visibility: 'visible' }}
    >
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <SentimentTracker />
        <NewsGrid />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
