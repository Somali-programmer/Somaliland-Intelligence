
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import SentimentTracker from './components/SentimentTracker.tsx';
import NewsGrid from './components/NewsGrid.tsx';
import MapSection from './components/MapSection.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  useEffect(() => {
    console.log(">> APP_MODULE: Component Tree Active - Hiding Loader");
    
    const hideLoader = () => {
      const loader = document.getElementById('loading-screen');
      if (loader) {
        loader.classList.add('hidden');
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        
        setTimeout(() => {
          if (loader.parentNode) {
            loader.parentNode.removeChild(loader);
            console.log(">> APP_MODULE: Loader removed from DOM");
          }
        }, 600);
      }
    };

    // Attempt immediately
    hideLoader();
    
    // Also try slightly later just in case of DOM updates
    const timer = setTimeout(hideLoader, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] dark:bg-[#020617] transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
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
