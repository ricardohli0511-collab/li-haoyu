import { useEffect, useState, useCallback, useRef } from 'react';
import { CountUp } from './CountUp';
import { stats } from '../data/skills';

const nameLetters = 'LI HAOYU'.split('');

export function HeroSection() {
  const [showContent, setShowContent] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursorPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid bg-scanlines"
      style={{ cursor: 'none' }}
    >
      {/* Radial glow following cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0.3,
          background: `radial-gradient(circle 400px at ${cursorPos.x}% ${cursorPos.y}%, rgba(59,130,246,0.06) 0%, transparent 80%)`,
        }}
      />

      {/* Ambient floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/3 rounded-full blur-3xl animate-drift" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-accent-gold/3 rounded-full blur-3xl animate-drift" style={{ animationDelay: '-10s' }} />
        <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-accent-teal/3 rounded-full blur-3xl animate-drift" style={{ animationDelay: '-5s' }} />
      </div>

      {/* Section number decoration */}
      <div className="absolute top-16 left-6 md:left-10 flex items-start gap-3">
        <div className="w-px h-16 bg-accent-blue/20" />
        <div>
          <span className="font-mono text-xs text-accent-blue/40 tracking-[0.3em]">01</span>
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Staggered letter name */}
        <div className="flex justify-center flex-wrap mb-4">
          {nameLetters.map((letter, i) => (
            <span
              key={i}
              className={`font-mono text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-text-primary inline-block transition-all duration-700 ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: showContent ? `${i * 50}ms` : '0ms',
                color: letter === ' ' ? 'transparent' : undefined,
                width: letter === ' ' ? '0.5em' : undefined,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>

        {/* Chinese name */}
        <p
          className={`font-serif text-2xl md:text-3xl text-text-secondary mb-8 transition-all duration-700 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: showContent ? '600ms' : '0ms' }}
        >
          李浩宇
        </p>

        {/* Tagline */}
        <div
          className={`flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16 transition-all duration-700 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: showContent ? '800ms' : '0ms' }}
        >
          <span className="px-4 py-1.5 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-sm font-mono text-accent-blue">
            Builder
          </span>
          <span className="text-text-muted text-sm font-mono">·</span>
          <span className="px-4 py-1.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-sm font-mono text-accent-gold">
            FinTech
          </span>
          <span className="text-text-muted text-sm font-mono">×</span>
          <span className="px-4 py-1.5 bg-accent-teal/10 border border-accent-teal/30 rounded-full text-sm font-mono text-accent-teal">
            FullStack
          </span>
        </div>

        {/* Stats with glass background */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto transition-all duration-700 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: showContent ? '1000ms' : '0ms' }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.04] px-4 py-5 hover:border-accent-blue/20 transition-colors duration-500"
            >
              <div className="text-3xl md:text-5xl font-mono font-light mb-1">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm font-mono text-text-muted tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1500ms' }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-5 h-px bg-accent-blue/30"
                style={{ opacity: 1 - i * 0.3 }}
              />
            ))}
          </div>
          <div className="w-px h-8 bg-accent-blue/15 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-blue/40 animate-bounce rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
