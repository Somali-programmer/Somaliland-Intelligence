
import React from 'react';
import { Shield, Twitter, Linkedin, Mail, Send, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-black/5 dark:border-white/5 pt-20 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Shield className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Somaliland<span className="text-emerald-500"> Intel</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              The premier platform for high-fidelity geopolitical data and strategic analysis of Somaliland and the Horn of Africa regions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-lg hover:text-emerald-500 transition-all shadow-sm">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-lg hover:text-emerald-500 transition-all shadow-sm">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-lg hover:text-emerald-500 transition-all shadow-sm">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Regional Focus</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-emerald-500 transition-colors flex items-center gap-2">Berbera Development <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Maritime Security</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Economic Corridors</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Recognition Strategy</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Annual Outlook Reports</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Interactive Data Portal</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Press & Media Kit</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold">The Analyst Digest</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">Join 12,000+ professionals receiving weekly briefs.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="work@company.com" 
                className="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-emerald-500 rounded-lg text-white hover:bg-emerald-600 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © 2024 Somaliland Intelligence Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 dark:text-slate-500 italic">Chief Analyst:</span>
            <span className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors cursor-pointer">
              Mawliid Mahamed Abdi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
