import { useScrollReveal } from '../hooks/useScrollReveal';

export function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-5xl mx-auto scroll-reveal">
        {/* Section label */}
        <div className="mb-16 relative">
          <span className="section-num absolute -top-16 left-0 text-accent-blue">02</span>
          <span className="font-mono text-xs tracking-[0.3em] text-accent-blue uppercase">
            About
          </span>
          <h2 className="font-mono text-3xl md:text-4xl font-light mt-3 text-text-primary">
            我是谁
          </h2>
          <div className="w-16 h-px bg-accent-blue/40 mt-4" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Left: Bio */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-text-secondary font-serif">
              我叫李浩宇（Ricardo），今年20岁，来自中国大陆，目前就读于香港教育大学个人金融学学士三年级。
            </p>
            <p className="text-base md:text-lg leading-relaxed text-text-secondary/80 font-serif">
              我是一个不折不扣的 <span className="text-accent-blue font-mono text-sm">Builder</span>——相信代码可以改变世界，也相信年轻不该等待"准备好"的那一天。我一直走在"金融+技术"的交叉地带，不只是会写代码——我理解商业逻辑、用户需求，也懂得如何用最低成本把产品推送到真实用户面前。
            </p>
            <p className="text-base md:text-lg leading-relaxed text-text-secondary/80 font-serif">
              Uniclass 让我相信：一个 Builder 不需要等待完美的时机。从零资金、独立全栈开发到多端上线，这两年的"不眠之夜"教会我的是——真正的创造从来都是从试错开始的，而最好的代码永远在下一个 commit 里。
            </p>

            {/* Education timeline */}
            <div className="pt-8 space-y-6">
              <h3 className="font-mono text-sm text-text-primary tracking-wide mb-4">Education</h3>
              <div className="relative pl-8 border-l border-border-default space-y-8">
                <div className="relative">
                  <div className="absolute -left-[25px] top-1.5 size-2.5 rounded-full bg-accent-blue" />
                  <div className="text-sm font-mono text-text-muted">2026.09 – Present</div>
                  <div className="mt-1">
                    <span className="text-text-primary font-serif text-lg">香港教育大学</span>
                    <span className="text-text-muted text-sm ml-2">The Education University of Hong Kong</span>
                  </div>
                  <div className="text-sm text-text-secondary/70 font-serif">个人金融学士 · 三年级（直接入学）</div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[25px] top-1.5 size-2.5 rounded-full bg-accent-gold" />
                  <div className="text-sm font-mono text-text-muted">2024.09 – 2026.06</div>
                  <div className="mt-1">
                    <span className="text-text-primary font-serif text-lg">香港理工大学·香港专上学院</span>
                    <span className="text-text-muted text-sm ml-2">HKCC, PolyU</span>
                  </div>
                  <div className="text-sm text-text-secondary/70 font-serif">
                    工商管理副学士 · GPA: 3.8/4.3 · 学期GPA: 3.95/4.3
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick info */}
          <div className="md:col-span-2">
            {/* Avatar */}
            <div className="size-32 md:size-40 overflow-hidden border border-border-default mb-8">
              <img
                src="/images/avatar.png"
                alt="Li Haoyu"
                className="size-full object-cover"
              />
            </div>

            <div className="space-y-4">
              {[
                { label: 'Location', value: 'Mainland China / 中国大陆' },
                { label: 'Languages', value: '普通话 · English · 粤语' },
                { label: 'IELTS', value: '总分 6.0' },
                { label: 'Role', value: 'FullStack Developer & Founder' },
              ].map((item) => (
                <div key={item.label} className="border-b border-border-default pb-3">
                  <div className="text-xs font-mono text-text-muted tracking-widest uppercase mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-text-secondary font-serif">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
