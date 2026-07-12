import { useScrollReveal } from '../hooks/useScrollReveal';
import { competitions } from '../data/competitions';

export function CompetitionsSection() {
  const ref = useScrollReveal();

  return (
    <section id="competitions" className="py-24 md:py-32 px-6 bg-bg-secondary">
      <div ref={ref} className="max-w-5xl mx-auto scroll-reveal">
        {/* Section label */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-blue uppercase">
            Competitions
          </span>
          <h2 className="font-mono text-3xl md:text-4xl font-light mt-3 text-text-primary">
            比赛与奖项
          </h2>
          <div className="w-16 h-px bg-accent-blue/40 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {competitions.map((comp) => (
            <div
              key={comp.id}
              className={`bg-gradient-to-br from-bg-card to-bg-primary border p-6 card-lift shimmer-surface ${
                comp.highlight
                  ? 'border-accent-gold/20 hover:border-accent-gold/40'
                  : 'border-white/[0.04] hover:border-white/[0.08]'
              }`}
            >
              {/* Award badge */}
              {comp.award && (
                <div className="mb-3">
                  <span
                    className={`inline-block px-2.5 py-1 text-xs font-mono rounded ${
                      comp.award === '金奖'
                        ? 'bg-accent-gold/10 text-accent-gold border border-accent-gold/30'
                        : comp.award === '季军'
                          ? 'bg-accent-teal/10 text-accent-teal border border-accent-teal/30'
                          : comp.award === '入围初赛'
                            ? 'bg-accent-blue/10 text-accent-blue border border-accent-blue/30'
                            : 'bg-accent-blue/10 text-accent-blue border border-accent-blue/30'
                    }`}
                  >
                    🏆 {comp.award}
                  </span>
                </div>
              )}

              <h3 className="font-mono text-base font-light text-text-primary mb-1.5">
                {comp.title}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono text-accent-blue/70">{comp.organizer}</span>
                <span className="text-text-muted text-xs">·</span>
                <span className="text-xs font-mono text-text-muted">{comp.date}</span>
              </div>
              <p className="text-sm text-text-secondary font-serif leading-relaxed">
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
