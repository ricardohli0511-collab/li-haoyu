import { useState, useEffect, useCallback } from 'react';

const sections = [
  { label: 'About', href: '#about', num: '02' },
  { label: 'Projects', href: '#projects', num: '03' },
  { label: 'Skills', href: '#skills', num: '04' },
  { label: 'Competitions', href: '#competitions', num: '05' },
  { label: 'Experience', href: '#experience', num: '06' },
  { label: 'Contact', href: '#contact', num: '07' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    // Scroll progress
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

    // Active section detection
    for (const s of sections) {
      const el = document.querySelector(s.href);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 200 && rect.bottom >= 200) {
        setActiveSection(s.href);
        return;
      }
    }
    // If scrolled past last section
    setActiveSection('');
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-primary/95 backdrop-blur-xl border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
    >
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/[0.03]">
        <div
          className="progress-bar absolute top-0 left-0 h-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="font-mono text-lg text-text-primary hover:text-accent-blue link-expand">
          LH
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-[11px] font-mono tracking-[0.15em] link-expand transition-colors ${
                activeSection === item.href
                  ? 'text-accent-blue'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {item.label}
              {activeSection === item.href && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-blue" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-mono text-[11px] text-text-muted tracking-[0.15em]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-primary/98 backdrop-blur-xl border-b border-white/[0.04]">
          <div className="px-6 py-6 flex flex-col gap-4">
            {sections.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-mono tracking-[0.15em] transition-colors ${
                  activeSection === item.href ? 'text-accent-blue' : 'text-text-muted'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-text-muted/40 mr-3">{item.num}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
