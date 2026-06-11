import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Mail, Download, CheckCircle, Sparkles, Network } from 'lucide-react';
import { personalInfo } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language, t } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [profileImg, setProfileImg] = useState('/profile.jpg');
  const [imageErrorLevel, setImageErrorLevel] = useState(0); // 0: try .jpg, 1: try .png, 2: try default image, 3: fallback block

  const roles = personalInfo[language].headlineSegments;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      handleTyping();
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(ticker);
  }, [typedText, isDeleting, roleIdx, language]);

  // Reset typewriter index on language change to prevent out-of-bounds error
  useEffect(() => {
    setTypedText('');
    setRoleIdx(0);
    setIsDeleting(false);
  }, [language]);

  const handleImageError = () => {
    if (imageErrorLevel === 0) {
      setImageErrorLevel(1);
      setProfileImg('/profile.png');
    } else if (imageErrorLevel === 1) {
      setImageErrorLevel(2);
      setProfileImg('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600');
    } else {
      setImageErrorLevel(3);
    }
  };

  const handleTyping = () => {
    if (!roles || roles.length === 0) return;
    const fullText = roles[roleIdx] || '';
    if (!isDeleting) {
      setTypedText(fullText.substring(0, typedText.length + 1));
      if (typedText === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      }
    } else {
      setTypedText(fullText.substring(0, typedText.length - 1));
      if (typedText === '') {
        setIsDeleting(false);
        setRoleIdx((prev) => (prev + 1) % roles.length);
      }
    }
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent"
    >
      {/* Neo-Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Cyber Lights and Neon Radial Blurs matching template spec */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] top-10 left-10 pointer-events-none animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] bottom-10 right-10 pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Headline and Badges */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-cyan-400 font-mono text-[10px] tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            {t('$ whoami // TERBUKA UNTUK KOLABORASI', '$ whoami // OPEN FOR COLLABORATIONS')}
          </motion.div>

          {/* Big Name */}
          <div className="space-y-4 w-full">
            <motion.h4
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/40 font-mono text-xs tracking-widest uppercase leading-none"
            >
              {t('Mahasiswa Sains Data & Pendiri', 'Data Science Student & Founder')}
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none"
            >
              Baihaqi<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Nur Muhammad
              </span>
            </motion.h1>
          </div>

          {/* Dynamic typing row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="h-8 flex items-center justify-center lg:justify-start w-full"
          >
            <span className="text-sm sm:text-base md:text-lg font-mono text-cyan-400 font-semibold flex items-center gap-1">
              <span>{`{ `}</span>
              <span className="text-white bg-white/5 border border-white/10 px-2 py-0.5 rounded shadow-[0_0_15px_rgba(6,182,212,0.15)] select-none">
                {typedText}
              </span>
              <span className="animate-pulse font-bold text-cyan-400">|</span>
              <span>{` }`}</span>
            </span>
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-sm sm:text-base text-white/60 leading-relaxed max-w-xl"
          >
            {personalInfo[language].about}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4 w-full"
          >
            {/* Download CV */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.print();
              }}
              className="interactive-hover inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-[10px] tracking-widest rounded-xl shadow-2xl hover:bg-cyan-400 transition-all duration-300 transform hover:-translate-y-0.5 uppercase font-mono font-bold"
            >
              <Download className="w-4 h-4 text-black" />
              {t('UNDUH CV', 'GET CV')}
            </a>

            <button
              onClick={() => handleScrollTo('contact')}
              className="interactive-hover inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white text-white font-semibold text-[10px] tracking-widest rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg uppercase font-mono font-bold bg-white/5"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              {t('KONTAK', 'CONTACT')}
            </button>
          </motion.div>

          {/* Built badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6 mt-8 flex-wrap justify-center lg:justify-start"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
              <CheckCircle className="w-4 h-4 text-green-400" />
              {t('IPK 3.68/4.00 (UPN Veteran Jatim)', 'GPA 3.68/4.00 (UPN Veteran Jatim)')}
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
              <CheckCircle className="w-4 h-4 text-green-400" />
              {t('2x Pemilik Bisnis', '2x Business Owner')}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Portrait Image Area */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {/* Modern HUD circular halos */}
            <motion.div
              className="absolute inset-0 border border-cyan-500/25 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-4 border border-dashed border-indigo-500/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-8 border border-white/10 rounded-full"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />

            {/* Glowing Tech nodes on borders */}
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#06b6d4] animate-ping" />
            <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_#6366f1] animate-pulse" />

            {/* Main glass containment card */}
            <div className="absolute inset-2 bg-white/5 border border-white/10 rounded-full overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.8)] flex items-center justify-center p-3 backdrop-blur-xl">
              {imageErrorLevel < 3 ? (
                /* Profile photo with fail-safe load */
                <img
                  src={profileImg} 
                  alt={personalInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                  onError={handleImageError}
                />
              ) : (
                /* Interactive abstract cyber face model reflecting data science and business */
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-950/40 to-indigo-950/40 flex flex-col items-center justify-center text-center p-6 relative">
                  <Network className="w-14 h-14 text-cyan-400 mb-2 animate-pulse" />
                  <span className="text-xl font-display font-extrabold tracking-widest text-white">BNM</span>
                  <span className="text-[10px] font-mono text-neutral-400 mt-1">DATA SCIENCE & BIZ</span>
                  <div className="absolute bottom-6 text-[8px] font-mono text-cyan-500/60 leading-tight">
                    DROP PROFILE.JPG<br />IN PROJECT ROOT
                  </div>
                </div>
              )}
            </div>

            {/* Float badge and text overlay */}
            <motion.div
              className="absolute -bottom-2 -left-2 bg-[#050505]/90 border border-white/10 backdrop-blur-md p-3.5 rounded-2xl flex items-center gap-3 shadow-2xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-display font-bold text-white text-xs">
                🏆
              </div>
              <div>
                <p className="text-[10px] font-mono text-cyan-400 uppercase">{t('Prestasi Terbaru', 'Latest Accomplishment')}</p>
                <p className="text-xs font-semibold text-white">Top 154 SejutaCita 2025</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Down section arrow identifier */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{t('Tentang Saya', 'About Me')}</span>
        <button
          onClick={() => handleScrollTo('about')}
          className="p-1 rounded-full border border-neutral-800 bg-neutral-900 h-8 w-8 flex items-center justify-center animate-bounce focus:outline-none"
        >
          <ArrowDown className="w-4 h-4 text-cyan-400" />
        </button>
      </div>
    </section>
  );
}

