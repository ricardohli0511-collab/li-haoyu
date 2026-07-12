import { useScrollReveal } from '../hooks/useScrollReveal';
import { skillCategories, techBadges } from '../data/skills';

const categoryColors: Record<string, string> = {
  frontend: 'text-accent-blue border-accent-blue/20 bg-accent-blue/5',
  backend: 'text-accent-teal border-accent-teal/20 bg-accent-teal/5',
  devops: 'text-accent-gold border-accent-gold/20 bg-accent-gold/5',
  data: 'text-purple-400 border-purple-400/20 bg-purple-400/5',
  tools: 'text-gray-400 border-gray-400/20 bg-gray-400/5',
};

export function SkillsSection() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-5xl mx-auto scroll-reveal">
        {/* Section label */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-teal uppercase">
            Skills
          </span>
          <h2 className="font-mono text-3xl md:text-4xl font-light mt-3 text-text-primary">
            技术栈
          </h2>
          <div className="w-16 h-px bg-accent-teal/40 mt-4" />
        </div>

        {/* Skill category grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-gradient-to-br from-bg-card to-bg-primary border border-white/[0.04] p-6 card-lift shimmer-surface hover:border-accent-blue/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-mono text-base text-text-primary">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-secondary font-serif">
                    <span className="w-1 h-1 bg-accent-blue/50 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <div className="text-center">
          <h3 className="font-mono text-xs text-text-muted tracking-widest mb-6">TECH STACK</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {techBadges.map((badge) => (
              <span
                key={badge.name}
                className={`px-3 py-1.5 border rounded text-sm font-mono transition-all duration-200 hover:scale-105 ${categoryColors[badge.category]}`}
              >
                {badge.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
