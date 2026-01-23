
import React, { useState, useEffect } from 'react';
import { MapPin, Info, Navigation2, Zap, ExternalLink, Loader2, Target } from 'lucide-react';
import { CityTooltip } from '../types';
import { getLocationIntel, LocationIntel } from '../services/geminiService';

const MapSection: React.FC = () => {
  const [activeCity, setActiveCity] = useState<CityTooltip | null>(null);
  const [intel, setIntel] = useState<LocationIntel | null>(null);
  const [loadingIntel, setLoadingIntel] = useState(false);

  const cities: CityTooltip[] = [
    { name: 'Hargeisa', coordinates: { x: 30, y: 50 }, info: 'Capital City - Political & Financial Hub' },
    { name: 'Berbera', coordinates: { x: 50, y: 30 }, info: 'Strategic Port City - Economic Gateway' },
    { name: 'Las Anod', coordinates: { x: 80, y: 60 }, info: 'Key Regional Hub - Security Focus' },
    { name: 'Borama', coordinates: { x: 15, y: 40 }, info: 'Educational Hub - Border Commerce' },
    { name: 'Erigavo', coordinates: { x: 75, y: 20 }, info: 'Agricultural Center - Sanaag Capital' },
  ];

  const handleCitySelect = async (city: CityTooltip) => {
    setActiveCity(city);
    setLoadingIntel(true);
    const data = await getLocationIntel(city.name);
    setIntel(data);
    setLoadingIntel(false);
  };

  useEffect(() => {
    handleCitySelect(cities[0]);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 dark:via-emerald-900/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Zap className="w-3 h-3" />
            Maps Grounding Enabled
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Strategic Mapping Intelligence</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Explore real-time infrastructure and geopolitical data anchored in Google Maps intelligence.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Intelligence Panel */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="glass p-6 rounded-2xl border border-black/5 dark:border-white/5 min-h-[400px] flex flex-col shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
                  <Target className="w-5 h-5" />
                  <h4 className="font-bold uppercase tracking-tighter text-lg">Sector Intel: {activeCity?.name}</h4>
                </div>
                {loadingIntel && <Loader2 className="w-4 h-4 text-emerald-500 animate-spin" />}
              </div>

              {loadingIntel ? (
                <div className="flex-grow flex flex-col items-center justify-center space-y-4 text-center p-8">
                  <div className="w-12 h-12 rounded-full border-t-2 border-emerald-500 animate-spin" />
                  <p className="text-sm text-slate-500 italic">Querying Google Maps grounding...</p>
                </div>
              ) : (
                <div className="flex-grow flex flex-col">
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 whitespace-pre-line">
                    {intel?.text}
                  </p>

                  {intel?.links && intel.links.length > 0 && (
                    <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/5">
                      <h5 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Grounding Sources</h5>
                      <div className="flex flex-wrap gap-2">
                        {intel.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all"
                          >
                            <ExternalLink className="w-3 h-3" />
                            {link.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {cities.slice(0, 4).map((city) => (
                  <button
                    key={city.name}
                    onClick={() => handleCitySelect(city)}
                    className={`text-left p-3 rounded-xl border transition-all flex flex-col gap-1 ${
                      activeCity?.name === city.name 
                        ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-700 dark:text-white' 
                        : 'bg-white dark:bg-white/5 border-black/5 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 shadow-sm'
                    }`}
                  >
                    <span className="font-bold text-xs uppercase tracking-tight">{city.name}</span>
                    <span className="text-[10px] opacity-60 truncate">{city.info.split(' - ')[1]}</span>
                  </button>
                ))}
            </div>
          </div>

          {/* Map Visualization */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[16/10] bg-white dark:bg-slate-900 rounded-3xl border border-black/5 dark:border-white/10 overflow-hidden shadow-2xl">
              {/* Grid Lines */}
              <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{ backgroundImage: 'linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              {/* Territory Shape */}
              <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20 fill-emerald-500/50 stroke-emerald-500/30 stroke-2">
                <path d="M100,200 Q150,150 250,100 T400,80 T600,120 T750,250 T700,400 T400,450 T200,420 T100,200" />
              </svg>

              {/* City Markers */}
              {cities.map((city) => (
                <div 
                  key={city.name}
                  className="absolute cursor-pointer group"
                  style={{ left: `${city.coordinates.x}%`, top: `${city.coordinates.y}%` }}
                  onClick={() => handleCitySelect(city)}
                >
                  <div className="relative flex items-center justify-center">
                    <div className={`absolute w-12 h-12 bg-emerald-500/20 rounded-full animate-ping ${activeCity?.name === city.name ? 'opacity-100' : 'opacity-0'}`} />
                    <div className={`w-4 h-4 rounded-full border-2 border-white transition-all shadow-lg ${activeCity?.name === city.name ? 'bg-emerald-500 scale-150 ring-4 ring-emerald-500/30' : 'bg-slate-400 dark:bg-slate-500 scale-100 hover:scale-125'}`} />
                  </div>
                  
                  <div className={`absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 glass rounded text-[9px] font-bold text-slate-800 dark:text-white whitespace-nowrap transition-all shadow-sm ${activeCity?.name === city.name ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
                    {city.name.toUpperCase()}
                  </div>
                </div>
              ))}

              <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" /> Strategic Hub
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600" /> Local Center
                  </div>
                </div>
              </div>
              
              <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                <div className="glass px-4 py-2 rounded-lg text-[10px] font-bold text-slate-800 dark:text-white border border-black/5 dark:border-white/5 flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE GROUNDING FEED
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                  REF_9.5N_44.0E
                </div>
              </div>
            </div>
            
            <div className="mt-8 glass p-4 rounded-xl border border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 shadow-sm">
                <div className="flex items-center gap-3">
                  <Info className="w-4 h-4 text-emerald-500" />
                  <span>Click tactical markers for a live grounding analysis of each sector.</span>
                </div>
                <div className="hidden sm:block font-mono text-emerald-500/50">
                  SEC-v1.2.0
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
