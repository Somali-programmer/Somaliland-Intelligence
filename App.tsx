
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import SentimentTracker from './components/SentimentTracker.tsx';
import NewsGrid from './components/NewsGrid.tsx';
import MapSection from './components/MapSection.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  useEffect(() => {
    console.log(">> APP_MODULE: Component Tree Active - Clearing Loader Overlay");
    
    const hideLoader = () => {
      const loader = document.getElementById('loading-screen');
      if (loader) {
        loader.classList.add('hidden');
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        
        // Remove from DOM to prevent any interference
        setTimeout(() => {
          if (loader.parentNode) {
            loader.parentNode.removeChild(loader);
            console.log(">> APP_MODULE: Loader successfully removed from DOM.");
          }
        }, 600);
      }
    };

    // Execute immediately on mount
    hideLoader();
    
    // Safety fallback for slow browser rendering
    const timer = setTimeout(hideLoader, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      id="app-container" 
      className="min-h-screen flex flex-col bg-[#FBFBFA] dark:bg-[#020617] text-[#1A1F2E] dark:text-[#F1F5F9] transition-colors duration-300"
      style={{ display: 'flex', minHeight: '100vh', width: '100%' }}
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
