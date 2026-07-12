import { useScrollReveal } from '../hooks/useScrollReveal';

export function ProjectsSection() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-bg-secondary">
      <div ref={ref} className="max-w-5xl mx-auto scroll-reveal">
        {/* Section label */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-gold uppercase">
            Projects
          </span>
          <h2 className="font-mono text-3xl md:text-4xl font-light mt-3 text-text-primary">
            项目
          </h2>
          <div className="w-16 h-px bg-accent-gold/40 mt-4" />
        </div>

        {/* Uniclass - Main Project */}
        <div className="mb-12 glow-border bg-gradient-to-br from-bg-card to-bg-primary border border-white/[0.04] overflow-hidden card-lift shimmer-surface">
          <div className="grid md:grid-cols-2">
            {/* Stats panel */}
            <div className="bg-bg-primary border-b md:border-b-0 md:border-r border-border-default p-8 flex flex-col justify-center min-h-[280px]">
              <p className="font-mono text-xs text-accent-blue/60 mb-6 tracking-wide">
                &gt; uniclass stats --all
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '138', label: 'APIs', color: 'text-accent-blue' },
                  { value: '35', label: 'Tables', color: 'text-accent-teal' },
                  { value: '2', label: '小程序', color: 'text-accent-gold' },
                  { value: '4', label: 'Platforms', color: 'text-accent-blue' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className={`stat-number text-3xl md:text-4xl font-light ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono text-text-muted mt-1 tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 justify-center mt-6">
                {['iOS', 'Android', 'WeChat', 'Web'].map((p) => (
                  <span key={p} className="px-2.5 py-1 border border-border-default rounded text-xs font-mono text-text-muted">
                    [{p}]
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-mono text-2xl font-light text-text-primary">Uniclass</h3>
                  <span className="px-2 py-0.5 bg-accent-blue/10 border border-accent-blue/20 rounded text-xs font-mono text-accent-blue">
                    2025 – Present
                  </span>
                </div>
                <p className="text-sm md:text-base text-text-secondary font-serif leading-relaxed mb-6">
                  服务内地与香港大学生的校园生态平台，已上线 iOS App Store、Google Play 及两个微信小程序。
                  独立完成了138个 RESTful API、35张数据库表，包含 JWT 认证、限流、黑名单、AI 内容审核等完整后端基建。
                  项目部署于腾讯云，年基础成本仅约 ¥4,500，零外部资金实现约95%完成度。
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {['iOS App Store', 'Google Play', '微信小程序 ×2', '入围理大 Micro Fund'].map((t) => (
                    <span key={t} className="px-3 py-1 bg-bg-primary border border-border-default rounded text-xs font-mono text-text-secondary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'Dart Shelf', '微信小程序', 'SQLite', 'JWT', 'Nginx', '腾讯云'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-accent-blue/5 border border-accent-blue/15 rounded text-xs font-mono text-accent-blue/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SmartLedger - Second Project */}
        <div className="mb-12 bg-gradient-to-br from-bg-card to-bg-primary border border-white/[0.04] overflow-hidden card-lift shimmer-surface hover:border-accent-teal/20">
          <div className="grid md:grid-cols-2">
            {/* Screenshot */}
            <div className="bg-bg-primary border-b md:border-b-0 md:border-r border-border-default min-h-[280px]">
              <img
                src="/images/smartledger-demo.png"
                alt="SmartLedger Demo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-mono text-2xl font-light text-text-primary">SmartLedger</h3>
                  <span className="text-lg font-serif text-text-secondary">帳智通</span>
                  <span className="px-2 py-0.5 bg-accent-teal/10 border border-accent-teal/20 rounded text-xs font-mono text-accent-teal">
                    2025 – Present
                  </span>
                </div>
                <p className="text-sm md:text-base text-text-secondary font-serif leading-relaxed mb-6">
                  面向大湾区中小企业的 AI 多语言智能记账 SaaS。支持三语（中/英/粤）发票 OCR 识别、多币种自动换算、
                  AI 智能审核队列、一键财务报表与银行自动对账。针对"多语言发票混杂、手工记账低效"的核心痛点，首个能理解粤语财务口语的 AI 记账平台。
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {['三语 OCR', '多币种换算', '智能审核', '一键报表'].map((t) => (
                    <span key={t} className="px-3 py-1 bg-bg-primary border border-border-default rounded text-xs font-mono text-text-secondary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {['AI/OCR', 'Next.js', 'Prisma', 'Supabase', 'PostgreSQL', 'React'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-accent-teal/5 border border-accent-teal/15 rounded text-xs font-mono text-accent-teal/80">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Demo link */}
              <a
                href="/demos/smartledger-landing-demo.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-accent-teal hover:text-accent-teal/80 transition-colors"
              >
                查看 Demo →
              </a>
            </div>
          </div>
        </div>

        {/* AI Financial Identity - Idea Card */}
        <div className="bg-gradient-to-br from-bg-card to-bg-primary border border-accent-gold/10 p-8 md:p-10 relative overflow-hidden card-lift shimmer-surface">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2 py-0.5 bg-accent-gold/10 border border-accent-gold/20 rounded text-xs font-mono text-accent-gold">
                NEXT IDEA
              </span>
              <h3 className="font-mono text-xl font-light text-text-primary">
                AI 跨境金融身份层
              </h3>
            </div>
            <p className="text-sm md:text-base text-text-secondary font-serif leading-relaxed max-w-2xl">
              专为跨境学生打造的 AI 金融身份层——让年轻人的金融身份可以在经济体之间自由流动。聚合两地碎片化金融数据生成跨境信用画像，
              智能推荐最优换汇路径，打造一本"跨境金融护照"。精准卡在个人金融 · 校园平台 · AI 全栈开发的交叉点上。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
