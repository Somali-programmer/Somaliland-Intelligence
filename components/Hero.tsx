
import React, { useEffect, useState } from 'react';
import { ChevronRight, Zap, Loader2 } from 'lucide-react';
import { getGeopoliticalSummary } from '../services/geminiService';

const Hero: React.FC = () => {
  const [aiInsights, setAiInsights] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      setLoading(true);
      const data = await getGeopoliticalSummary();
      setAiInsights(data);
      setLoading(false);
    };
    fetchInsights();
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072")' }}
      >
        <div className="absolute inset-0 bg-white/70 dark:bg-slate-950/80 mix-blend-overlay dark:mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 dark:from-slate-950 dark:via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Breaking Analysis
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
              Somaliland 2026: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400">
                The Recognition Horizon
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              An in-depth geopolitical forecast of Somaliland's strategic positioning, 
              maritime security architecture, and the accelerating path toward international 
              diplomatic validation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-bold rounded-lg transition-all flex items-center gap-2 group shadow-xl shadow-emerald-500/20">
                Read Full Forecast
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold rounded-lg border border-slate-200 dark:border-white/10 transition-all">
                View Data Dashboard
              </button>
            </div>
          </div>

          {/* AI Insight Module */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-20 dark:opacity-25" />
            <div className="relative glass p-6 md:p-8 rounded-2xl border border-black/5 dark:border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-lg">
                    <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Intel Summary</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Powered by Gemini 3 Flash</p>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  REAL-TIME
                </div>
              </div>

              <div className="space-y-4">
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-10 space-y-3">
                    <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
                    <p className="text-sm text-slate-500 italic">Synthesizing regional reports...</p>
                  </div>
                ) : (
                  aiInsights.map((insight, idx) => (
                    <div key={idx} className="flex gap-4 group cursor-default">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform flex-shrink-0" />
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {insight}
                      </p>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/${i + 15}/32/32`} 
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900" 
                      alt="Analyst"
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    +12
                  </div>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">Current Analyst Consensus: <span className="text-emerald-600 dark:text-emerald-400 font-bold">BULLISH</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
