
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SentimentTracker from './components/SentimentTracker';
import NewsGrid from './components/NewsGrid';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
