import { useScrollReveal } from '../hooks/useScrollReveal';

export function ExperienceSection() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-5xl mx-auto scroll-reveal">
        {/* Section label */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-text-muted uppercase">
            Experience
          </span>
          <h2 className="font-mono text-3xl md:text-4xl font-light mt-3 text-text-primary">
            实习与活动
          </h2>
          <div className="w-16 h-px bg-text-muted/40 mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12 border-l border-border-default space-y-12">
          {/* Research Assistant */}
          <div className="relative">
            <div className="absolute -left-[33px] md:-left-[41px] top-1.5 size-3 rounded-full bg-accent-blue" />
            <div className="text-sm font-mono text-accent-blue mb-2">2026 Summer</div>
            <h3 className="font-mono text-lg font-light text-text-primary mb-2">
              研究助理 <span className="text-text-muted text-sm">· 香港理工大学 BHM 学系</span>
            </h3>
            <p className="text-sm md:text-base text-text-secondary font-serif leading-relaxed">
              协助教授开展市场营销与消费者行为研究。负责设计发放问卷调查，使用 Excel 和 Python 进行数据清洗与统计分析，
              独立完成市场营销策略与消费者心理学文献综述，撰写研究摘要与报告初稿。这段经历强化了数据处理与学术能力，
              也让我在服务 Uniclass 用户时能更精准地从消费者心理角度理解用户行为。
            </p>
          </div>

          {/* Volunteer */}
          <div className="relative">
            <div className="absolute -left-[33px] md:-left-[41px] top-1.5 size-3 rounded-full bg-accent-teal" />
            <div className="text-sm font-mono text-accent-teal mb-2">2023 Jul – Aug</div>
            <h3 className="font-mono text-lg font-light text-text-primary mb-2">
              东莞非遗博物馆志愿者
            </h3>
            <p className="text-sm md:text-base text-text-secondary font-serif leading-relaxed">
              为来自不同文化背景的游客提供非遗展览讲解服务。锻炼了与陌生人迅速建立沟通的能力，
              也让我在向不同人群解释复杂概念时找到了一种"翻译"的直觉——把专业的东西讲得人人都懂。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
