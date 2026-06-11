import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileCode, BrainCircuit, Cpu, BarChart3, Code2, 
  Database, Server, Layers, Megaphone, LineChart, 
  GitBranch, Share2, Globe, FileSpreadsheet, Video, 
  Film, Palette, Clock, Users2, Lightbulb, MessageSquare,
  ShieldCheck 
} from 'lucide-react';
import { skillCategories } from '../data';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, any> = {
  FileCode,
  BrainCircuits: BrainCircuit, // mapping typo gracefully
  Cpu,
  BarChart3,
  Code2,
  Database,
  Server,
  Layers,
  Megaphone,
  LineChart,
  GitBranch,
  Share2,
  Globe,
  FileSpreadsheet,
  Video,
  Film,
  Palette,
  Clock,
  Users2,
  Lightbulb,
  MessageSquare
};

export default function Skills() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('ALL');

  const allLabel = t('Semua', 'All');
  const activeSkills = skillCategories[language] || [];
  const categories = [allLabel, ...activeSkills.map(c => c.category)];

  const filteredCategories = activeTab === 'ALL' 
    ? activeSkills 
    : activeSkills.filter(c => c.category === activeTab);

  // If language changes, reset the subcategory filtering if it matches old language categories
  useEffect(() => {
    setActiveTab('ALL');
  }, [language]);

  return (
    <section id="skills" className="relative py-24 bg-transparent overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] bottom-0 left-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            // 03. STACK INTELLIGENCE
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('Kemampuan & Teknologi', 'Skills & Technologies')}<span className="text-cyan-400">_</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4" />
        </div>

        {/* Categories Tab Pill Controls */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-3xl mx-auto">
          {categories.map((cat, idx) => {
            const isSelected = idx === 0 ? activeTab === 'ALL' : activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(idx === 0 ? 'ALL' : cat)}
                className={`interactive-hover px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full border transition-all duration-300 focus:outline-none cursor-pointer ${
                  isSelected
                    ? 'bg-white text-black border-white font-bold shadow-[0_4px_20px_rgba(255,255,255,0.15)]'
                    : 'bg-white/5 text-neutral-400 border-white/10 hover:text-white hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Main Grid display area */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            <motion.div 
               className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              layout
            >
              {filteredCategories.map((catObj) => (
                <motion.div
                  key={catObj.category}
                  className="p-6 sm:p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md shadow-xl flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  layout
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <h3 className="text-md font-bold text-white uppercase tracking-wider">
                      {catObj.category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {catObj.skills.map((skill) => {
                      const IconComp = iconMap[skill.iconName] || Code2;
                      return (
                        <div key={skill.name} className="space-y-2 group">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-white/70 flex items-center gap-1.5 font-medium group-hover:text-cyan-400 transition-colors">
                              <IconComp className="w-3.5 h-3.5 text-white/30 group-hover:text-cyan-400 transition-colors" />
                              {skill.name}
                            </span>
                            <span className="text-white/40">{skill.level}%</span>
                          </div>

                          {/* Skill bar */}
                          <div className="w-full h-1 bg-white/5 border border-white/5 rounded-full overflow-hidden relative">
                            <motion.div
                              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

