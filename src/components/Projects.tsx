import { motion } from 'motion/react';
import { Brain, LineChart, Database, Calendar, Award, ExternalLink, Code2, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, any> = {
  Brain: Brain,
  LineChart: LineChart,
  Database: Database
};

export default function Projects() {
  const { language, t } = useLanguage();
  const currentProjects = projectsData[language] || [];

  return (
    <section id="projects" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] -top-10 left-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            // 06. ARCHITECTURAL Showcase
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('Showcase Hasil Karya', 'Project Showcase')}<span className="text-cyan-400">_</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, idx) => {
            const IconComp = iconMap[project.imagePlaceholder.icon] || Brain;
            return (
              <motion.div
                key={project.id}
                className="interactive-hover h-full flex flex-col rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md shadow-xl overflow-hidden group hover:border-cyan-500/30 transition-all duration-300 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                
                {/* 1. Dynamic Vector Graphic Placeholder header container (Anti-ai-slop, realistic visual) */}
                <div className={`h-48 w-full bg-gradient-to-tr ${project.imagePlaceholder.gradient} flex items-center justify-center relative overflow-hidden border-b border-white/10`}>
                  {/* Glowing background shapes */}
                  <div className="absolute w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Futuristic wireframes */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {/* Icon with beautiful shadow and rotation */}
                  <div className="p-5 rounded-2xl bg-[#050505]/60 border border-white/10 backdrop-blur-sm text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10 shadow-2xl">
                    <IconComp className="w-8 h-8 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                  </div>

                  {/* Absolute date badge */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 bg-[#050505]/60 border border-white/10 text-[9px] font-mono text-neutral-300 rounded-lg backdrop-blur-sm uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-neutral-400" />
                    {project.period.split("–")[0]}
                  </div>
                </div>

                {/* 2. Project Meta & Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" />
                      {project.category}
                    </div>
                    <h3 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors tracking-tight line-clamp-1 pb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Academic approval row */}
                  {project.academicDetails && (
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-[100%] sm:text-[11px] font-mono font-medium text-white/70 overflow-hidden text-ellipsis whitespace-nowrap">
                        {project.academicDetails}
                      </span>
                    </div>
                  )}

                  {/* Tech stack badges list */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 border border-white/5 hover:border-cyan-500/20 text-white/50 hover:text-cyan-400 text-[10px] font-mono rounded transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cover gradient lighting and visual overlay */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <span className="p-2 bg-cyan-400 hover:bg-cyan-500 text-[#050505] rounded-xl shadow-lg flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

