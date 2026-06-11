import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Stars } from 'lucide-react';
import { educationData } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { language, t } = useLanguage();
  const currentEdu = educationData[language];

  return (
    <section id="education" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] -top-10 left-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            // 02. ACADEMIC INTELLIGENCE
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('Pendidikan Resmi', 'Formal Education')}<span className="text-cyan-400">_</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4" />
        </div>

        {/* Floating Glassmorphic University Card */}
        <motion.div
          className="relative max-w-4xl mx-auto p-6 sm:p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Subtle tech grid patterns inside the card */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-30" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:from-indigo-500/15 group-hover:to-cyan-500/15 transition-all duration-500" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left side: Uni Icon & Specs */}
            <div className="md:col-span-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 shadow-xl self-start group-hover:text-black group-hover:bg-cyan-400 transition-all duration-300">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {currentEdu.institution}
                  </h3>
                  <p className="text-cyan-400 font-mono text-sm uppercase tracking-wider font-semibold mt-1">
                    {t('Program Studi', 'Program of Study')} {currentEdu.major}
                  </p>
                </div>
              </div>

              {/* Badges metadata */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/50">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
                  <Calendar className="w-3.5 h-3.5 text-white/40" />
                  {currentEdu.period}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
                  <MapPin className="w-3.5 h-3.5 text-white/40" />
                  {currentEdu.location}
                </div>
              </div>

              {/* Narrative description */}
              <p className="text-white/65 leading-relaxed text-sm sm:text-base">
                {currentEdu.description}
              </p>

              {/* Relevant Courses */}
              <div className="space-y-3">
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
                  {t('Mata Kuliah Utama Relevan', 'Relevant Key Courses')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentEdu.courses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 hover:border-cyan-500/50 text-neutral-200 text-xs font-mono rounded-lg transition-colors cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Giant GPA Indicator panel */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-white/5 border border-white/10 rounded-2xl relative">
              <div className="absolute top-2 right-2 text-[10px] font-mono text-white/30">{t('IPK DISETUJUI', 'GPA APPROVED')}</div>

              {/* Sparkle badge */}
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 font-mono text-[9px] uppercase tracking-wider mb-4 animate-pulse">
                <Stars className="w-2.5 h-2.5" />
                {t('Sangat Memuaskan', 'Highly Satisfactory')}
              </div>

              {/* Big score */}
              <div className="relative flex items-center justify-center">
                {/* Simulated radial gradient ring */}
                <div className="w-28 h-28 rounded-full border-4 border-dashed border-cyan-500/20 flex items-center justify-center animate-spin" style={{ animationDuration: '30s' }} />
                <div className="absolute inset-2 rounded-full border-2 border-indigo-500/40" />
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-white">3.68</span>
                  <span className="text-[10px] font-mono text-white/40">{t('Skala 4.00', 'Scale 4.00')}</span>
                </div>
              </div>

              <div className="text-white/50 font-mono text-[11px] uppercase tracking-wider mt-4">
                {t('Sains Data', 'Data Science')} <span className="text-indigo-400">UPN-VJT</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

