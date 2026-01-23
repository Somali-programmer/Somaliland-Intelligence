
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import SentimentTracker from './components/SentimentTracker.tsx';
import NewsGrid from './components/NewsGrid.tsx';
import MapSection from './components/MapSection.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  useEffect(() => {
    console.log(">> APP_MODULE: Component Tree Active");
    
    // Explicitly hide the loading screen when the app mounts
    const loader = document.getElementById('loading-screen');
    if (loader) {
      loader.classList.add('hidden');
      // Completely remove from DOM after transition for accessibility
      setTimeout(() => {
        if (loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      }, 500);
    }
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
