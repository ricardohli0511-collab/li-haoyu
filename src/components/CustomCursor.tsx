import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || !('ontouchstart' in window === false));
    checkMobile();
    setIsMobile(false); // Show on desktop only after first check
    if ('ontouchstart' in window) return; // real touch device

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, .interactive, .card-lift, .shimmer-surface');
      setExpanded(!!interactive);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousemove', onHover);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousemove', onHover);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  if (isMobile || ('ontouchstart' in window)) return null;

  return (
    <div
      className="fixed pointer-events-none z-[10000] transition-transform duration-75 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className={`
          -translate-x-1/2 -translate-y-1/2 rounded-full
          transition-all duration-300 ease-out
          ${expanded
            ? 'size-6 border border-accent-blue/60 bg-accent-blue/10'
            : 'size-2 bg-accent-blue/80'
          }
        `}
      />
      {expanded && (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 size-10 rounded-full border border-accent-blue/10 animate-pulse" />
      )}
    </div>
  );
}
