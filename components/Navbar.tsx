
import React, { useState, useEffect } from 'react';
import { Search, Globe, Menu, X, Shield, BarChart3, Map as MapIcon, BookOpen, Key, CheckCircle2, Moon, Sun } from 'lucide-react';

declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    aistudio?: AIStudio;
  }
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'SO'>('EN');
  const [isApiConnected, setIsApiConnected] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(
    (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
  );

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const checkApiKey = async () => {
      if (window.aistudio) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        setIsApiConnected(hasKey);
      } else {
        setIsApiConnected(true);
      }
    };
    checkApiKey();
    window.addEventListener('focus', checkApiKey);
    return () => window.removeEventListener('focus', checkApiKey);
  }, []);

  const handleAuth = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      setIsApiConnected(true);
    }
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Analysis', icon: <BookOpen className="w-4 h-4" />, href: '#' },
    { name: 'Economy', icon: <BarChart3 className="w-4 h-4" />, href: '#' },
    { name: 'Security', icon: <Shield className="w-4 h-4" />, href: '#' },
    { name: 'Map', icon: <MapIcon className="w-4 h-4" />, href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#10B981] rounded-lg flex items-center justify-center">
              <Shield className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white hidden sm:block">
              Somaliland<span className="text-[#10B981]"> Intelligence</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#10B981] transition-colors"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>

          {/* Tools & Lang */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative mr-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search intel..."
                className="bg-slate-200 dark:bg-slate-900/50 border border-black/5 dark:border-white/10 rounded-full py-1.5 pl-10 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all w-32 lg:w-48 text-slate-900 dark:text-white"
              />
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-black/5 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {isApiConnected ? (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3 h-3 animate-pulse" />
                API SECURE
              </div>
            ) : (
              <button 
                onClick={handleAuth}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-[10px] font-bold text-white transition-all shadow-lg shadow-emerald-500/20"
              >
                <Key className="w-3 h-3" />
                AUTHORIZE
              </button>
            )}

            <button 
              onClick={() => setLang(l => l === 'EN' ? 'SO' : 'EN')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/5 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {!isApiConnected && (
              <button onClick={handleAuth} className="p-2 bg-emerald-500 rounded-lg text-white">
                <Key className="w-5 h-5" />
              </button>
            )}
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-black/5 dark:border-white/5 py-4 px-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-[#10B981] p-2 rounded-lg"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-col gap-4">
            <button 
              onClick={() => setLang(l => l === 'EN' ? 'SO' : 'EN')}
              className="flex items-center justify-center gap-2 w-full py-2 bg-slate-200 dark:bg-slate-900 border border-black/5 dark:border-white/10 rounded-lg text-sm font-bold text-slate-900 dark:text-white"
            >
              <Globe className="w-4 h-4" />
              Language: {lang}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
