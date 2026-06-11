import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Calendar, MapPin, CheckSquare, Terminal, ChevronRight } from 'lucide-react';
import { organizationData } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function Organization() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const activeOrgs = organizationData[language] || [];

  // Reset active tab index if out of limits on language change
  useEffect(() => {
    setActiveTab(0);
  }, [language]);

  return (
    <section id="organization" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background blurs */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] bottom-10 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            // 05. LEADERSHIP MATRIX
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('Organisasi & Volunteer', 'Organizations & Volunteering')}<span className="text-cyan-400">_</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4" />
        </div>

        {/* Dynamic Glass Layout container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left panel tabs: Organizations Menu (Interactive Sidebar) */}
          <div className="md:col-span-4 flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-4 md:pb-0 scrollbar-none">
            {activeOrgs.map((org, idx) => (
              <button
                key={org.id}
                onClick={() => setActiveTab(idx)}
                className={`interactive-hover whitespace-nowrap md:whitespace-normal text-left px-5 py-4 rounded-xl border font-mono text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-between gap-3 focus:outline-none shrink-0 md:shrink cursor-pointer ${
                  activeTab === idx
                    ? 'bg-white/10 text-cyan-400 border-cyan-400/30 font-bold shadow-[0_4px_20px_rgba(6,182,212,0.15)]'
                    : 'bg-white/5 text-neutral-400 border-white/5 hover:text-white hover:border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${activeTab === idx ? 'bg-cyan-400' : 'bg-white/20'}`} />
                  <span>
                    {org.name.includes("UPN") ? "FIK UPN Jawa Timur" : org.name.split(" ")[0] + " " + (org.name.split(" ")[1] || "")}
                  </span>
                </div>
                <ChevronRight className={`hidden md:block w-4 h-4 transition-transform ${activeTab === idx ? 'translate-x-0.5 text-cyan-400' : 'text-neutral-600'}`} />
              </button>
            ))}
          </div>

          {/* Right panel detail pane (Frosted Terminal Container style) */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              {activeOrgs.map((org, idx) => {
                if (idx !== activeTab) return null;
                return (
                  <motion.div
                    key={org.id}
                    className="p-6 sm:p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    
                    {/* Top glassmorphic status line */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                          UPN_LEADERSHIP_SPECS
                        </span>
                      </div>
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                      </div>
                    </div>

                    {/* Metadata Header */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        {org.name}
                      </h3>
                      <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold">
                        Role: {org.role}
                      </p>
                    </div>

                    {/* Logistics Period & Coords */}
                    <div className="flex flex-wrap gap-4 text-xs font-mono text-white/40 mt-4 pb-6 border-b border-white/5">
                      <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                        <Calendar className="w-3.5 h-3.5 text-white/20" />
                        {org.period}
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                        <MapPin className="w-3.5 h-3.5 text-white/20" />
                        {org.location}
                      </div>
                    </div>

                    {/* Core action details summary */}
                    <div className="mt-6 space-y-4">
                      <p className="text-xs font-mono text-white/40 uppercase tracking-wider flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-cyan-400" />
                        {t('Kontribusi & Jobdesk Utama', 'Core Contributions & Scope')}
                      </p>

                      <ul className="space-y-3.5">
                        {org.points.map((point, pIdx) => (
                          <motion.li
                            key={pIdx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-white/70 leading-relaxed"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: pIdx * 0.1 }}
                          >
                            <span className="shrink-0 w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2" />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

