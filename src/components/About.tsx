import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Users, Code } from 'lucide-react';
import { personalInfo, statsData } from '../data';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, any> = {
  Briefcase: Briefcase,
  TrendingUp: TrendingUp,
  Users: Users,
  Code: Code
};

export default function About() {
  const { language, t } = useLanguage();
  const currentStats = statsData[language] || [];

  return (
    <section id="about" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background blurs */}
      <div className="absolute w-[450px] h-[450px] bg-indigo-600/5 rounded-full blur-[140px] top-1/3 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            // 01. IDENTITY MATRIX
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('Tentang Saya', 'About Me')}<span className="text-cyan-400">_</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block: Narrative About Me */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white leading-tight">
              {language === 'ID' ? (
                <>Menggabungkan <span className="text-cyan-400">Sains Data</span> dengan <span className="text-indigo-400">Ketajaman Bisnis</span></>
              ) : (
                <>Combining <span className="text-cyan-400">Data Science</span> with <span className="text-indigo-400">Business Acumen</span></>
              )}
            </h3>
            <p className="text-white/60 leading-relaxed text-sm sm:text-base">
              {language === 'ID' ? (
                <>Sebagai mahasiswa Sains Data di <strong className="text-white">UPN Veteran Jawa Timur</strong>, saya percaya bahwa data bukanlah sekadar baris angka, melainkan pondasi keputusan strategis yang dapat merevolusi bisnis. Kehadiran saya sebagai pemilik usaha (<strong className="text-white">Wish Wash</strong> dan <strong className="text-white">Wish Food</strong>) mengasah intuisi bisnis saya untuk selalu fokus pada hasil rill.</>
              ) : (
                <>As a Data Science student at <strong className="text-white">UPN Veteran Jawa Timur</strong>, I believe that data is not merely rows of numbers, but the foundation of strategic decisions that can revolutionize business. My experience as a business owner (<strong className="text-white">Wish Wash</strong> and <strong className="text-white">Wish Food</strong>) sharpens my business intuition to always focus on tangible results.</>
              )}
            </p>
            <p className="text-white/60 leading-relaxed text-sm sm:text-base">
              {language === 'ID' ? (
                <>Saya memadukan teknik pemodelan prediktif, analisis statistik kuantitatif, riset konsumen, bauran pemasaran digital, dan kepemimpinan organisasi untuk membawa solusi ujung-ke-ujung (end-to-end) bagi UMKM maupun proyek tim skala besar.</>
              ) : (
                <>I combine predictive modeling techniques, quantitative statistical analysis, consumer research, digital marketing mix, and organizational leadership to deliver end-to-end solutions for SMBs and large-scale team projects.</>
              )}
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400" />
              <p className="text-xs font-mono text-white/50 italic">
                {t(
                  '"Misi saya adalah memberdayakan ekosistem bisnis lokal dengan insight prediktif sains data dan bauran pemasaran digital yang tepat sasaran."',
                  '"My mission is to empower local business ecosystems with predictive data science insights and a highly-targeted digital marketing mix."'
                )}
              </p>
            </div>
          </motion.div>

          {/* Right Block: Statistics Bento Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {currentStats.map((stat, idx) => {
              const IconComp = iconMap[stat.icon] || Code;
              return (
                <motion.div
                  key={stat.id}
                  className="interactive-hover p-6 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between h-40 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  {/* Decorative glowing gradient circle */}
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors" />

                  <div className="flex justify-between items-start">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:text-black group-hover:bg-cyan-400 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-white/10 font-mono text-3xl font-extrabold group-hover:text-cyan-500/20 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </h4>
                    <p className="text-white/40 text-[10px] font-mono uppercase tracking-wide mt-1 group-hover:text-cyan-400 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

