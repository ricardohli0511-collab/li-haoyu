export interface Competition {
  id: string;
  title: string;
  organizer: string;
  date: string;
  award?: string;
  description: string;
  highlight?: boolean;
}

export const competitions: Competition[] = [
  {
    id: 'polyu-microfund',
    title: '香港理工大学 Micro Fund 创业大赛',
    organizer: 'PolyU KTEO',
    date: '2025年',
    award: '入围初赛',
    description:
      'Uniclass 项目入围理大 Micro Fund 创业大赛并晋级初赛。Micro Fund 是理大首个创业资助计划（2011年创立），为早期初创企业提供高达 HK$1.41M 的资助与孵化支持，旨在培育理大社群的创新创业氛围。',
    highlight: true,
  },
  {
    id: 'fwd',
    title: 'FWD 商业案例竞赛',
    organizer: 'FWD Insurance × HKCC',
    date: '2025年6-7月',
    award: '季军',
    description:
      '在为期一个月的全英文团队竞赛中，围绕保险科技创新方向，设计了一款面向年轻群体的金融产品方案。深入进行市场调研与竞品分析，独立构建财务预测模型，并以全英文形式进行方案汇报。同期完成 FWD × HKCC 领导力计划，系统学习金融产品设计与团队协作策略。',
    highlight: true,
  },
  {
    id: 'asdan-business',
    title: 'ASDAN 商业模拟赛',
    organizer: 'ASDAN',
    date: '2022年11-12月',
    award: '金奖',
    description:
      '主导团队投资竞标策略与商业汇报环节。通过快速市场数据分析与精准投标决策，在多轮模拟运营中取得优势，凭借商业洞察力与汇报表现获得金奖。这次经历让我第一次真正体会到数据驱动决策的力量。',
    highlight: true,
  },
  {
    id: 'asdan-mun',
    title: 'ASDAN 模拟联合国',
    organizer: 'ASDAN 难民委员会',
    date: '2023年7-8月',
    description:
      '代表指定国家参与难民委员会的模拟外交谈判，主导起草难民救助经济政策方案。在全程英文环境中展开辩论与协商，显著提升了英文辩论、跨文化沟通与高压谈判中的共识构建能力。',
  },
  {
    id: 'deloitte',
    title: '德勤 Digital Difference 商业案例竞赛',
    organizer: 'Deloitte',
    date: '2024年',
    description:
      '聚焦数字化转型议题，针对真实企业运营痛点提出结合 AI 与数据分析的解决方案。在紧凑周期内完成从问题诊断、行业对标到方案设计、最终汇报的完整流程，深化了技术方案与商业战略结合的思维模式。',
  },
  {
    id: 'boc',
    title: '中银金融科技创新挑战赛',
    organizer: 'Bank of China (BOC)',
    date: '2024年',
    description:
      '围绕跨境金融服务场景，设计融合 AI 与新技术的创新产品方案。针对粤港澳大湾区用户需求进行深入调研，构建从用户画像、产品逻辑到商业模式的一整套方案框架，强化了 FinTech 产品从概念到落地的全流程理解。',
  },
  {
    id: 'hsbc',
    title: '汇丰社区服务挑战赛',
    organizer: 'HSBC',
    date: '2024年',
    description:
      '聚焦金融普惠与社区可持续发展，与团队设计以金融教育为核心的公益解决方案。走进社区实地调研，将一线洞察转化为可执行方案。深刻体会到金融不该只是精英的游戏——好的金融产品应该让普通人也能受益。',
  },
  {
    id: 'ust-tencent',
    title: '港科大 × 腾讯商业案例竞赛',
    organizer: 'HKUST × Tencent',
    date: '2024年',
    description:
      '围绕互联网科技与产业融合方向，对真实商业案例进行从战略分析到落地建议的全方位拆解。面对腾讯评委的犀利追问，以扎实的数据与清晰的逻辑完成答辩，近距离审视了顶级科技公司的商业思维。',
  },
];
