import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, DollarSign, TrendingUp, Sparkles } from 'lucide-react';
import { experienceData } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { language, t } = useLanguage();
  const activeExperience = experienceData[language] || [];

  return (
    <section id="experience" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] -top-20 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            // 04. VENTURE & EXPERIENCE
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('Pengalaman Bisnis', 'Business Experience')}<span className="text-cyan-400">_</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4" />
        </div>

        {/* Timeline body wrapper */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central path line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent transform sm:-translate-x-1/2 pointer-events-none" />

          <div className="space-y-12">
            {activeExperience.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`flex flex-col sm:flex-row items-stretch justify-between relative ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline bullet node */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-[#050505] border-2 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.6)] transform -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                  </div>

                  {/* Left spacer padding on desktop */}
                  <div className="hidden sm:block w-[45%]" />

                  {/* Main Bubble card */}
                  <motion.div
                    className="w-full sm:w-[45%] pl-10 sm:pl-0"
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="interactive-hover p-6 sm:p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                      
                      {/* Top corporate tag badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-[10px] rounded-lg tracking-wider uppercase mb-4">
                        <Sparkles className="w-3 h-3" />
                        {t('Pendiri / Pemilik', 'Founder / Owner')}
                      </div>

                      {/* Header context info */}
                      <h3 className="text-xl font-extrabold text-white tracking-tight">
                        {exp.company}
                      </h3>
                      <p className="text-white/50 font-mono text-xs uppercase tracking-wide mt-1 font-semibold group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </p>

                      {/* Time and location row */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/40 mt-4 border-b border-white/5 pb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-white/20" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-white/20" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="mt-5 space-y-3.5">
                        {exp.highlights.map((point, hIdx) => {
                          const hasSalesHighlight = point.includes("Rp 4.000.000") || point.includes("1.500") || point.includes("Rp 4,000,000") || point.includes("1,500");
                          return (
                            <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70 leading-relaxed">
                              <span className="shrink-0 w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shadow-[0_0_6px_#06b6d4]" />
                              <span>
                                {hasSalesHighlight ? (
                                  <span dangerouslySetInnerHTML={{
                                    __html: point
                                      .replace("Rp 4.000.000", "<strong class='text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.2)]'>Rp 4.000.000</strong>")
                                      .replace("Rp 4,000,000", "<strong class='text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.2)]'>Rp 4,000,000</strong>")
                                      .replace("1.500 pesanan", "<strong class='text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.2)]'>1.500+ pesanan</strong>")
                                      .replace("1,500 operational orders", "<strong class='text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.2)]'>1,500+ operational orders</strong>")
                                  }} />
                                ) : (
                                  point
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      {/* Card background shadow lights */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

