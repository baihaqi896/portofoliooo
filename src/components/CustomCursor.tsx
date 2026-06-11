import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const trailRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Media query to check if it has accurate primary pointer (mouse) or hover capabilities
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('[role="button"]') ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('interactive-hover');

      if (isClickable) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    // Animating the lag trailing ring
    let animationId: number;
    const animateTrail = () => {
      const ease = 0.15; // smooth factor
      const tx = trailRef.current.x + (position.x - trailRef.current.x) * ease;
      const ty = trailRef.current.y + (position.y - trailRef.current.y) * ease;
      
      trailRef.current = { x: tx, y: ty };
      setTrail({ x: tx, y: ty });
      
      animationId = requestAnimationFrame(animateTrail);
    };

    animateTrail();

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow ring */}
      <div
        id="custom-cursor-ring"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out flex items-center justify-center"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`,
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.12)' : 'transparent',
          boxShadow: isHovered ? '0 0 16px rgba(6, 182, 212, 0.4)' : 'none',
        }}
      />
      {/* Inner Dot pointer */}
      <div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          boxShadow: '0 0 8px rgba(168, 85, 247, 0.8)'
        }}
      />
    </>
  );
}
