
import React from 'react';
import { ArrowUpRight, Clock, User } from 'lucide-react';
import { NewsItem } from '../types';

const newsData: NewsItem[] = [
  {
    id: '1',
    category: 'Security',
    title: 'Red Sea Defense Strategy: Berbera’s Expanding Role',
    excerpt: 'How recent maritime shifts are turning the Berbera Naval base into a critical hub for global trade security.',
    imageUrl: 'https://images.unsplash.com/photo-1572508589584-94d778209ca9?auto=format&fit=crop&q=80&w=800',
    date: 'Oct 24, 2024'
  },
  {
    id: '2',
    category: 'Economy',
    title: 'Digital Sovereignty: The Rise of Somaliland’s Fintech Sector',
    excerpt: 'Analyzing the rapid adoption of mobile payments and its implications for central banking and fiscal policy.',
    imageUrl: 'https://images.unsplash.com/photo-1526303328184-bfd44450e19a?auto=format&fit=crop&q=80&w=800',
    date: 'Oct 22, 2024'
  },
  {
    id: '3',
    category: 'Analysis',
    title: 'Diplomatic Mapping: Ethiopia-Somaliland MOU One Year Later',
    excerpt: 'A comprehensive review of the legal, geopolitical, and regional impact of the landmark maritime agreement.',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800',
    date: 'Oct 20, 2024'
  }
];

const NewsGrid: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Latest Insights & Deep Dives</h2>
          <p className="text-slate-400 max-w-2xl">Expert-led analysis on the most pressing security, economic, and diplomatic issues shaping Somaliland and the wider Horn of Africa.</p>
        </div>
        <button className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors flex items-center gap-2 group whitespace-nowrap">
          View All Analysis
          <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((item) => (
          <article key={item.id} className="group bg-slate-900/50 rounded-2xl border border-white/5 overflow-hidden hover:border-emerald-500/30 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#0A192F]/80 backdrop-blur rounded text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-400/20">
                  {item.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 text-[10px] text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  Mawliid M. Abdi
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {item.excerpt}
              </p>
              <button className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-emerald-400 transition-colors">
                Read Report
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsGrid;
