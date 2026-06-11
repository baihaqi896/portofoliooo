import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const loadingStatuses = [
  "Booting cognitive framework...",
  "Loading neural vector models...",
  "Initializing glassmorphic canvas...",
  "Parsing 3.68 GPA datasets...",
  "Syncing multi-source business matrices...",
  "System fully operational."
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [percent, setPercent] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Increment loading percent
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 400); // Trigger page load
          }, 350);
          return 100;
        }
        
        // Random natural-looking step speeds
        const randStep = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + randStep, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Cycle through status messages
    if (percent < 20) setStatusIdx(0);
    else if (percent < 42) setStatusIdx(1);
    else if (percent < 65) setStatusIdx(2);
    else if (percent < 82) setStatusIdx(3);
    else if (percent < 95) setStatusIdx(4);
    else setStatusIdx(5);
  }, [percent]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 bg-neutral-950 flex flex-col items-center justify-center z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.45, ease: "easeInOut" } }}
        >
          {/* Futuristic background grid glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_60%)] pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse pointer-events-none" />

          <div className="relative text-center max-w-md px-6 flex flex-col items-center">
            {/* Spinning Neural Nucleus Core */}
            <div className="relative w-24 h-24 mb-10 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              />
              <motion.div
                className="absolute w-16 h-16 border border-purple-500/50 rounded-full border-t-2 border-t-purple-500"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <motion.div
                className="absolute w-8 h-8 bg-cyan-400 rounded-full filter blur-[4px]"
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
              <span className="absolute text-[9px] font-mono tracking-widest text-cyan-400 font-bold uppercase mt-[64px]">
                DS SYS
              </span>
            </div>

            {/* Title / Name */}
            <motion.h1
              className="text-2xl font-display font-bold text-white tracking-widest uppercase mb-1"
              initial={{ letterSpacing: "0.1em", opacity: 0 }}
              animate={{ letterSpacing: "0.2em", opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              BAIHAQI NM
            </motion.h1>
            <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase mb-8">
              Portfolio Framework v2.026
            </p>

            {/* Glowing glass slider */}
            <div className="w-64 h-1.5 bg-neutral-900 border border-neutral-800 rounded-full overflow-hidden mb-3 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400"
                style={{ width: `${percent}%` }}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.15)_50%,transparent_100%)] animate-shimmer" />
            </div>

            {/* Stats percentages and messages */}
            <div className="flex items-center justify-between w-64 mb-6">
              <span className="text-xs font-mono text-neutral-400">LOADING</span>
              <span className="text-sm font-mono font-bold text-cyan-400">{percent}%</span>
            </div>

            {/* Cyber Terminal Text Logs */}
            <div className="h-10 text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={statusIdx}
                  className="text-xs font-mono text-cyan-400/90 tracking-wide"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  &gt; {loadingStatuses[statusIdx]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
