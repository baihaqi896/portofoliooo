import { motion } from 'motion/react';
import { Award, Star, Trophy, ShieldAlert, Sparkles, ExternalLink } from 'lucide-react';
import { achievementsData } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function Achievement() {
  const { language, t } = useLanguage();
  const currentAchievements = achievementsData[language] || [];
  const ach = currentAchievements[0];

  if (!ach) return null;

  return (
    <section id="achievement" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background blurs */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[140px] top-1/4 left-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            // 07. HONOR & ACHIEVEMENT
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('Prestasi Utama', 'Top Achievement')}<span className="text-cyan-400">_</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4" />
        </div>

        {/* Elegant Gold card display */}
        <motion.div
          className="max-w-3xl mx-auto p-6 sm:p-10 rounded-[32px] bg-gradient-to-br from-amber-500/10 via-white/5 to-white/5 border border-amber-500/20 shadow-[0_24px_50px_rgba(245,158,11,0.08)] relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle sparkles animated */}
          <div className="absolute top-4 right-4 text-amber-500/30 animate-pulse">
            <Sparkles className="w-8 h-8" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {/* Left Column: Shining Cup visual */}
            <div className="shrink-0 p-5 rounded-2xl bg-white/5 border border-amber-500/30 text-amber-400 shadow-[0_0_24px_rgba(245,158,11,0.15)] group-hover:scale-115 transition-transform duration-300 relative">
              <Trophy className="w-12 h-12" />
              <div className="absolute inset-0 border border-amber-500/10 rounded-2xl scale-110 pointer-events-none animate-ping" style={{ animationDuration: '3s' }} />
            </div>

            {/* Right Column: Statement credentials */}
            <div className="space-y-4 text-center md:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-400 font-mono text-[10px] tracking-wider uppercase rounded-full font-bold">
                  {ach.rank}
                </span>
                <span className="text-white/20 font-mono text-xs">•</span>
                <span className="text-white/40 font-mono text-xs">{ach.institution} ({ach.year})</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                {ach.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                {language === 'ID' ? (
                  <>Terseleksi di antara ribuan pendaftar tingkat nasional dalam kompetisi <strong className="text-white">SejutaCita Future Leaders Competition</strong>, diselenggarakan bekerja sama dengan <strong className="text-white">Dealls (2025)</strong>. Menunjukkan keahlian kepemimpinan strategis, pemecahan masalah kritis, dan adaptabilitas yang tinggi menghadapi studi kasus bisnis kompleks.</>
                ) : (
                  <>Selected from thousands of national applicants in the <strong className="text-white">SejutaCita Future Leaders Competition</strong>, organized in collaboration with <strong className="text-white">Dealls (2025)</strong>. Demonstrates strategic leadership skills, critical problem solving, and high adaptability in facing complex business case studies.</>
                )}
              </p>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 group-hover:text-amber-300 transition-colors"
                >
                  {t('Lihat Dokumen Validasi', 'View Validation Document')}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
