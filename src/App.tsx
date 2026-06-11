import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import BackgroundParticles from './components/BackgroundParticles';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Organization from './components/Organization';
import Projects from './components/Projects';
import Achievement from './components/Achievement';
import Contact from './components/Contact';
import { Terminal, Copyright, ArrowUp, Zap } from 'lucide-react';
import { personalInfo } from './data';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
          {/* Dynamic Background Elements */}
          <div className="absolute top-[5%] left-[-10%] w-[45%] h-[45%] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
          <div className="absolute bottom-[15%] right-[-10%] w-[40%] h-[45%] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none z-0"></div>

          {/* Custom Cursor Trail (Desktop only fine pointers auto-resolved) */}
          <CustomCursor />

          {/* Interactive Particle background */}
          <BackgroundParticles />

          {/* Top glassmorphic capsular menu */}
          <Navbar />

          {/* Full webpage structured layout stream */}
          <main className="relative z-10">
            <Hero />
            
            {/* Split layout spacing lines */}
            <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />
            <About />

            <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />
            <Education />

            <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />
            <Skills />

            <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />
            <Experience />

            <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />
            <Organization />

            <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />
            <Projects />

            <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />
            <Achievement />

            <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />
            <Contact />
          </main>

          {/* Premium Footer */}
          <footer className="bg-[#050505] py-12 border-t border-white/10 relative z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Brand statement */}
              <div className="flex items-center gap-2">
                <div className="p-1 px-2.5 bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-400 rounded-lg flex items-center gap-1 shadow-md">
                  <Zap className="w-3 h-3 text-cyan-400 animate-pulse" />
                  BNM // INTEL_CENTER_2026
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  | Artistic Command Studio
                </span>
              </div>

              {/* Author copy rights */}
              <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                <Copyright className="w-3.5 h-3.5 text-indigo-400" />
                <span>2026</span>
                <span className="text-white hover:text-cyan-400 font-semibold transition-colors">{personalInfo.name}</span>
                <span>• All rights reserved.</span>
              </div>

              {/* Technical indicators */}
              <div className="text-xs font-mono text-neutral-400">
                Surabaya, Jawa Timur, Indonesia 🇮🇩
              </div>
            </div>

            <div className="h-px bg-white/5 w-full mt-8 mb-4 max-w-7xl mx-auto" />
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-white/30 gap-2">
              <div className="flex gap-4">
                <span>LAT: -7.332 // LON: 112.729</span>
                <span>ENV: VITE_REACT_PROD</span>
              </div>
              <div className="flex gap-4">
                <span>STATUS: STABLE</span>
                <span className="text-cyan-400">© 2026 BAIHAQI NUR MUHAMMAD</span>
              </div>
            </div>
          </footer>

          {/* Floating Back to Top button */}
          {showScrollTop && (
            <button
              onClick={handleScrollToTop}
              className="fixed bottom-6 right-6 p-3 bg-neutral-900 hover:bg-cyan-500 text-cyan-400 hover:text-neutral-950 border border-neutral-800 hover:border-cyan-400 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.5)] z-40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
