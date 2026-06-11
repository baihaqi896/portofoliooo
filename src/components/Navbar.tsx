import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, ArrowUpRight, Globe } from 'lucide-react';
import { personalInfo } from '../data';
import { useLanguage } from '../context/LanguageContext';

const menuItems = [
  { label: { ID: 'Beranda', EN: 'Home' }, id: 'home' },
  { label: { ID: 'Tentang', EN: 'About' }, id: 'about' },
  { label: { ID: 'Pendidikan', EN: 'Education' }, id: 'education' },
  { label: { ID: 'Keahlian', EN: 'Skills' }, id: 'skills' },
  { label: { ID: 'Pengalaman', EN: 'Experience' }, id: 'experience' },
  { label: { ID: 'Organisasi', EN: 'Organization' }, id: 'organization' },
  { label: { ID: 'Proyek', EN: 'Projects' }, id: 'projects' },
  { label: { ID: 'Kontak', EN: 'Contact' }, id: 'contact' }
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer to update active state
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    menuItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of floating nav
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-[#050505]/70 backdrop-blur-md border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with developer terminal icon */}
          <button
            onClick={() => handleScrollTo('home')}
            className="flex items-center gap-2 group text-white font-bold text-lg tracking-wider focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="p-1.5 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-cyan-200 transition-colors tracking-widest font-mono text-sm sm:text-base">
              BNM // <span className="text-cyan-400">PORTFOLIO</span>
            </span>
          </button>

          {/* Desktop Menu - Floating Glass Pill style */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleScrollTo(item.id)}
                className={`relative px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 focus:outline-none ${
                  activeSection === item.id
                    ? 'text-cyan-400 font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label[language]}
              </button>
            ))}
          </nav>

          {/* Extra Action & Language toggle buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Desktop Language Toggle */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 text-[10px] font-mono leading-none">
              <button
                id="lang-toggle-id"
                onClick={() => setLanguage('ID')}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  language === 'ID'
                    ? 'bg-white text-[#050505] font-extrabold shadow-md'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                ID
              </button>
              <button
                id="lang-toggle-en"
                onClick={() => setLanguage('EN')}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  language === 'EN'
                    ? 'bg-white text-[#050505] font-extrabold shadow-md'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              id="desktop-contact-btn"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('contact');
              }}
              className="group flex items-center gap-1.5 px-5 py-2.5 bg-white text-black hover:bg-cyan-400 font-mono font-bold text-xs tracking-wider rounded-xl shadow-lg transition-all duration-300"
            >
              {t('KONTAK', 'CONTACT')}
              <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Actions (visible on mobile/tablet) */}
          <div className="flex md:hidden items-center gap-2">
            {/* Minimal Mobile Language Toggle */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 text-[9px] font-mono leading-none mr-1">
              <button
                id="lang-toggle-mobile-id"
                onClick={() => setLanguage('ID')}
                className={`px-2 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  language === 'ID'
                    ? 'bg-white text-[#050505] font-extrabold shadow'
                    : 'text-white/50'
                }`}
              >
                ID
              </button>
              <button
                id="lang-toggle-mobile-en"
                onClick={() => setLanguage('EN')}
                className={`px-2 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  language === 'EN'
                    ? 'bg-white text-[#050505] font-extrabold shadow'
                    : 'text-white/50'
                }`}
              >
                EN
              </button>
            </div>

            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-400 hover:text-white p-2 rounded-lg bg-neutral-900 border border-neutral-800 transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#050505]/98 backdrop-blur-lg z-30 md:hidden flex flex-col justify-center px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Top graphic border dots */}
            <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            <div className="flex flex-col gap-5 text-center max-w-sm mx-auto w-full">
              {/* Language Selector inside mobile drawer */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <Globe className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{t('Pilih Bahasa', 'Select Language')}</span>
                <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 text-[10px] font-mono leading-none">
                  <button
                    id="lang-drawer-id"
                    onClick={() => {
                      setLanguage('ID');
                    }}
                    className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                      language === 'ID' ? 'bg-white text-[#050505] font-bold' : 'text-white/50'
                    }`}
                  >
                    Indonesian
                  </button>
                  <button
                    id="lang-drawer-en"
                    onClick={() => {
                      setLanguage('EN');
                    }}
                    className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                      language === 'EN' ? 'bg-white text-[#050505] font-bold' : 'text-white/50'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {menuItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  id={`drawer-item-${item.id}`}
                  onClick={() => handleScrollTo(item.id)}
                  className={`text-base font-bold tracking-widest uppercase transition-all ${
                    activeSection === item.id
                      ? 'text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <span className="text-xs font-mono text-cyan-500 mr-2">0{idx + 1}.</span>
                  {item.label[language]}
                </motion.button>
              ))}

              <motion.div
                className="pt-6 border-t border-white/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-xs font-mono text-neutral-500 mb-4 uppercase">
                  {t('Ayo Kolaborasi', "Let's Collaborate")}
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-white hover:text-cyan-400 block transition-colors mb-2"
                >
                  {personalInfo.email}
                </a>
                <p className="text-xs font-mono text-neutral-600">
                  {personalInfo.phone}
                </p>
              </motion.div>
            </div>
            {/* Bottom glow */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

