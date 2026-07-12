export interface SkillCategory {
  title: string;
  icon: string;
  items: string[];
}

export interface TechBadge {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'data' | 'tools';
}

export const skillCategories: SkillCategory[] = [
  {
    title: '全栈开发',
    icon: '⌨️',
    items: [
      'Flutter (Dart) 跨平台开发',
      '微信小程序开发',
      'Dart Shelf 后端框架',
      'RESTful API 设计',
      'SQLite 数据库建模',
      'JWT 认证与安全',
    ],
  },
  {
    title: '云服务与运维',
    icon: '☁️',
    items: [
      '腾讯云部署与运维',
      'Nginx 反向代理',
      'Linux 服务器管理',
      'SSL 证书部署',
      '域名管理与DNS',
      '成本优化（年¥4,500）',
    ],
  },
  {
    title: 'AI 辅助开发',
    icon: '🤖',
    items: [
      'Vibe Coding 工作流',
      'AI 辅助架构设计',
      'AI 内容审核管线',
      '大语言模型 API 集成',
      '敏捷开发 + AI 协作',
    ],
  },
  {
    title: '数据分析与研究',
    icon: '📊',
    items: [
      'Python 数据处理',
      'Excel 统计分析',
      '市场趋势量化',
      '消费者行为研究',
      '学术文献综述',
    ],
  },
];

export const techBadges: TechBadge[] = [
  { name: 'Flutter', category: 'frontend' },
  { name: 'Dart', category: 'backend' },
  { name: '微信小程序', category: 'frontend' },
  { name: 'Dart Shelf', category: 'backend' },
  { name: 'RESTful API', category: 'backend' },
  { name: 'SQLite', category: 'backend' },
  { name: 'JWT', category: 'backend' },
  { name: 'Nginx', category: 'devops' },
  { name: 'Linux', category: 'devops' },
  { name: '腾讯云', category: 'devops' },
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'Python', category: 'data' },
  { name: 'Excel', category: 'data' },
];

export const stats = [
  { value: 138, label: 'APIs', suffix: '' },
  { value: 35, label: 'Tables', suffix: '' },
  { value: 7, label: 'Competitions', suffix: '' },
  { value: 4, label: 'Platforms', suffix: '' },
];
