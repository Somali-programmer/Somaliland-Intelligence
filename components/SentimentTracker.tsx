
import React from 'react';
import { Activity, Info } from 'lucide-react';

const SentimentTracker: React.FC = () => {
  const categories = [
    { name: 'Political Stability', value: 78, status: 'Stable' },
    { name: 'Economic Outlook', value: 64, status: 'Developing' },
    { name: 'Regional Tension', value: 42, status: 'Moderate' },
    { name: 'Foreign Direct Invest', value: 89, status: 'High' }
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass p-6 md:p-10 rounded-3xl border border-black/5 dark:border-white/5 shadow-inner">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2">
                <Activity className="w-4 h-4" />
                Live Data Widget
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Geopolitical Temperature</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Aggregated sentiment analysis across key regional stability metrics.</p>
            </div>
            
            <div className="flex items-center gap-4 bg-white dark:bg-slate-800/50 p-4 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm">
              <div className="text-right">
                <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-widest">Aggregate Status</p>
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-tighter">Resilient / Stable</p>
              </div>
              <div className="w-12 h-12 rounded-full border-4 border-emerald-100 dark:border-emerald-400/20 border-t-emerald-600 dark:border-t-emerald-400 flex items-center justify-center text-sm font-bold text-slate-900 dark:text-white">
                74
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{cat.name}</span>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">{cat.value}%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-700 to-emerald-500 dark:from-emerald-600 dark:to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${cat.value}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="flex items-center gap-1 text-slate-400 dark:text-slate-500">
                    <Info className="w-3 h-3" />
                    Last update 14m ago
                  </span>
                  <span className={`font-bold px-2 py-0.5 rounded ${
                    cat.status === 'Stable' ? 'bg-emerald-100 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400' :
                    cat.status === 'High' ? 'bg-blue-100 dark:bg-blue-400/10 text-blue-700 dark:text-blue-400' :
                    'bg-amber-100 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400'
                  }`}>
                    {cat.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SentimentTracker;
