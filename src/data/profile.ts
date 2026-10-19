// 学术资料按最新版《2026-个人信息-杨泽宇（机智学院官网）》更新，正文转录于 PROFILE_CONTENT.md。
export const profile = {
  name: '杨泽宇',
  englishName: 'Zeyu Yang',
  initials: 'ZY',
  qualifications: '博士 · 副教授 · 硕士生导师',
  affiliation: '湖州师范大学',
  email: 'yangzeyu@zju.edu.cn',
  // 用户提供的真实照片；替换 public/portrait.jpg 即可更新。
  avatar: 'portrait.jpg',
  description: '杨泽宇，湖州师范大学博士、副教授、硕士生导师。长期致力于工业人工智能、工业大数据分析与应用、工业大模型与智能体等领域研究。',
  biography: [
    '杨泽宇，男，1992 年生，浙江湖州人，博士、副教授、硕士生导师。',
    '2021 年获浙江大学控制科学与工程专业博士学位，2019—2020 年赴德国杜伊斯堡-埃森大学自动控制及复杂系统研究所联合培养。2021—2023 年在湖州师范大学任讲师，2023 年起任副教授。入选浙江省青年人才托举项目（校内首位），并为全省工业大数据分析与应用研究领域首位入选者；获浙江省青年科技工作者优秀论文等荣誉。',
    '长期致力于工业人工智能、工业大数据分析与应用、工业大模型与智能体等领域研究。近年来主持国家自然科学基金青年项目 1 项、浙江省自然科学基金 2 项（青年项目和探索项目）、湖州市自然科学基金 2 项、全国重点实验室开放课题 3 项；作为核心成员参与多项国家自然科学基金重点项目、国家重点研发计划课题与国家自然科学基金面上项目。',
    '已累计发表学术论文 80 余篇（第一/通讯作者 40 余篇），包括领域内权威期刊如 IEEE 汇刊（IEEE TSMC、IEEE TIE、IEEE TII、IEEE TASE、IEEE TIM 等）、IFAC 会刊（EAAI、CEP、JPC 等）以及 IEEE/CAA JAS、IEEE IoT Journal 等，其中 2 篇入选 ESI 高被引论文；相关研究成果应用于化工过程、旋转设备、离散制造等复杂工业系统，申请和授权国家发明专利 10 余项。',
  ],
  // 控制简介中需要强调的原文片段，不改变正文内容。
  biographyHighlights: [
    '博士、副教授、硕士生导师',
    '浙江大学控制科学与工程专业博士学位',
    '浙江省青年人才托举项目',
    '工业人工智能、工业大数据分析与应用、工业大模型与智能体',
    '主持国家自然科学基金青年项目 1 项',
    '学术论文 80 余篇',
    '第一/通讯作者 40 余篇',
    '2 篇入选 ESI 高被引论文',
  ],
  keywords: ['工业人工智能', '工业大数据分析与应用', '工业大模型与智能体', '工业软测量', '关键指标预测', '故障诊断', '智能制造'],
  research: [
    { title: '工业人工智能', topics: ['故障诊断', '智能制造'] },
    { title: '工业大数据分析与应用', topics: ['工业软测量', '关键指标预测'] },
    { title: '工业大模型与智能体', topics: [] },
  ],
  recruiting: '欢迎自驱力强、对工业人工智能与工业大数据研究感兴趣的同学加入本课题组，一起探索在智能制造场景中的前沿算法设计与工业应用（有意愿者可推荐继续攻读博士）。',
};

// 仅在获得本人确认的真实地址后添加，如 { label: 'Google Scholar', url: '…' }。
export const academicLinks: { label: string; url: string }[] = [];

export const sections = [
  { id: 'about', label: '个人简介', english: 'About' },
  { id: 'research', label: '研究方向', english: 'Research' },
  { id: 'projects', label: '科研项目', english: 'Projects' },
  { id: 'publications', label: '代表性论文', english: 'Publications' },
  { id: 'honors', label: '奖励荣誉', english: 'Honors' },
  { id: 'service', label: '学术兼职', english: 'Academic Service' },
  { id: 'contact', label: '加入课题组', english: 'Contact' },
];

type NavigationLink = { label: string; href: string; description?: string };
type NavigationItem = NavigationLink | { label: string; children: NavigationLink[] };

// 设为 false 可隐藏整个顶部菜单，左侧章节导航不受影响。
export const showTopNavigation = true;

// 暂用描述性名称；确定正式课题组名称后只需修改此处。
export const groupName = '工业智能感知与自主学习课题组';

// 顶部只导航到独立页面；页面内容尚待设计，不在这里重复主页章节。
export const navigation: NavigationItem[] = [
  {
    label: '课题组',
    children: [
      { label: '硕士研究生', href: '/members/' },
      { label: '课题组活动', href: '/activities/' },
    ],
  },
  { label: '资源下载', href: '/resources/' },
];

export const projects = [
  { category: '国家自然科学基金青年项目', title: '面向流式工业大数据的终身贝叶斯学习与质量预报', dates: '2023/1—2025/12', role: '主持' },
  { category: '浙江省自然科学基金探索项目', title: '基于多模态大模型快慢思考机制的化工过程分级工况质量预报与异常溯源', dates: '2026/1—2027/12', role: '主持' },
  { category: '浙江省自然科学基金青年项目', title: '基于流式变分贝叶斯的自适应质量预报建模及其应用', dates: '2022/01—2024/12', role: '主持' },
  { category: '湖州市自然科学基金项目', title: '面向流程工业数据的流式变分贝叶斯建模与自适应质量预报方法研究', dates: '2021/7—2023/6', role: '主持' },
  { category: '湖州市自然科学基金项目', title: '基于潜隐向量自回归模型与卡尔曼滤波的动态过程建模与监测技术研究', dates: '2025/1—2026/12', role: '主持' },
  { category: '工业控制技术全国重点实验室开放课题', title: '面向非平稳工况的知识增强时序大模型化工过程软测量方法研究', dates: '2026/7—2027/6', role: '主持' },
  { category: '工业控制技术全国重点实验室开放课题', title: '知识增强的动态图学习与化工过程质量预报', dates: '2025/8—2026/7', role: '主持' },
  { category: '工业控制技术全国重点实验室开放课题', title: '基于特征融合的深度序列建模与化工过程质量预报', dates: '2023/7—2023/12', role: '主持' },
  { category: '国家自然科学基金面上项目', title: '基于子空间操作的复杂间歇过程反馈优化控制方法研究', dates: '2024/1—2027/12', role: '参与' },
  { category: '国家自然科学基金重点项目', title: '面向故障诊断的流程工业大数据分析与分布式建模方法', dates: '2019/01—2023/12', role: '参与' },
  { category: '国家重点研发计划课题', title: '氟化工过程设备协同管控与故障在线诊断技术研究', dates: '2018/08—2021/07', role: '参与' },
  { category: '国家自然科学基金面上项目', title: '基于分布式数据建模的工业过程关键性能指标预测与诊断', dates: '2017/01—2020/12', role: '参与' },
  { category: '国家自然科学基金面上项目', title: '一类多阶段工业过程基于数据驱动的质量监测与故障诊断方法', dates: '2016/01—2019/12', role: '参与' },
];

type Publication = {
  authors: string;
  title: string;
  venue: string;
  venueLabel: string;
  year: number;
  // 图示放入 public/papers/；没有真实图示时显示明确的占位区。
  image?: { src: string; alt: string };
  // 仅填写已确认的论文地址和研究要点。
  url?: string;
  highlights?: string[];
  // 可按需添加真实 DOI / PDF / Code 链接；未提供时页面不显示链接区。
  links?: { label: string; url: string }[];
};

export const publications: Publication[] = [
  {
    authors: 'Zeyu Yang, Jiahui Chen, Zhen Bi, Xiaoyu Jiang, Le Yao, Jungang Lou, Zhihuan Song',
    title: 'CLARI: Constrained Reflective LLM Inference for Few-Shot Soft Sensing under Operating-Condition Drift',
    venue: 'Control Engineering Practice', venueLabel: 'CEP', year: 2026,
  },
  {
    authors: 'Gecheng Chen, Zeyu Yang*, Xinkai Chen, Jianqiang Li, Chengwen Luo',
    title: 'Towards the Bi-imbalance: A Pruning-based Contrastive Domain Adaptation Framework for Industrial Fault Diagnosis',
    venue: 'IEEE/CAA Journal of Automatica Sinica', venueLabel: 'IEEE/CAA JAS', year: 2026,
  },
  {
    authors: 'Zeyu Yang, Wenqing Gao, Gecheng Chen, Jiaxin Yu, Bocun He, Lingjian Ye',
    title: 'Self-Modified Dynamic Domain Adaptation for Industrial Soft Sensing',
    venue: 'IEEE Transactions on Automation Science and Engineering', venueLabel: 'IEEE TASE', year: 2026,
  },
  {
    authors: 'Zeyu Yang, Longying Mao, Lingjian Ye, Yiran Ma, Zhihuan Song, Zhichao Chen',
    title: 'AKGNN: When Adaptive Graph Neural Network Meets Kolmogorov-Arnold Network for Industrial Soft Sensors',
    venue: 'IEEE Transactions on Instrumentation and Measurement', venueLabel: 'IEEE TIM', year: 2025,
  },
  {
    authors: 'Zeyu Yang, Tingting Hu, Le Yao, Lingjian Ye, Yi Qiu, Shuxin Du',
    title: 'Stacked Dual-Guided Autoencoder: A Scalable Deep Latent Variable Model for Semi-Supervised Industrial Soft Sensing',
    venue: 'IEEE Transactions on Instrumentation and Measurement', venueLabel: 'IEEE TIM', year: 2024,
  },
  {
    authors: 'Zeyu Yang, Le Yao, Bingbing Shen, Peiliang Wang',
    title: 'Probabilistic Fusion Model for Industrial Soft Sensing Based on Quality-Relevant Feature Clustering',
    venue: 'IEEE Transactions on Industrial Informatics', venueLabel: 'IEEE TII', year: 2023,
  },
  {
    authors: 'Zeyu Yang, Junhua Zheng, Zhiqiang Ge',
    title: 'Lifelong Bayesian Learning Machines for Streaming Industrial Big Data',
    venue: 'IEEE Transactions on Systems, Man, and Cybernetics: Systems', venueLabel: 'IEEE TSMC', year: 2023,
  },
  {
    authors: 'Zeyu Yang, Zhiqiang Ge',
    title: 'On Paradigm of Industrial Big Data Analytics: From Evolution to Revolution',
    venue: 'IEEE Transactions on Industrial Informatics', venueLabel: 'IEEE TII', year: 2022,
  },
  {
    authors: 'Zeyu Yang, Zhiqiang Ge',
    title: 'Rethinking the Value of Just-In-Time Learning in the Era of Industrial Big Data',
    venue: 'IEEE Transactions on Industrial Informatics', venueLabel: 'IEEE TII', year: 2022,
  },
  {
    authors: 'Zeyu Yang, Zhiqiang Ge',
    title: 'Industrial Virtual Sensing for Big Process Data based on Parallelized Nonlinear Variational Bayesian Factor Regression',
    venue: 'IEEE Transactions on Instrumentation and Measurement', venueLabel: 'IEEE TIM', year: 2020,
  },
];

export const honors = [
  { year: 2025, text: '获湖州师范大学“学术新星”A 类项目。' },
  { year: 2025, text: '获 ISCSIC 国际会议优秀论文奖（Excellent Paper Award）、特邀报告人奖（Invited Speaker Award）。' },
  { year: 2025, text: '获 ARCAI 国际会议最佳口头报告奖（Best Oral Presentation Award）。' },
  { year: 2024, text: '入选浙江省青年人才托举培养项目。' },
  { year: 2024, text: '获 ARCAI 国际会议最佳论文报告奖（Best Paper Presentation Award）。' },
  { year: 2023, text: '获浙江省青年科技工作者优秀论文。' },
  { year: 2023, text: '获湖州师范大学“浙北英才”A 类计划。' },
  { year: 2021, text: '获浙江大学优秀毕业博士研究生。' },
  { year: 2020, text: '获浙江大学争创优秀博士学位论文资助。' },
];

export const services = [
  '国家自然科学基金委通讯评审专家。',
  '山东省自然科学基金通讯评审专家。',
  '全国研究生教育评估监测专家库专家。',
  '中国自动化学会数据驱动控制、学习与优化专业委员会委员。',
  '中国计算机学会工业控制计算机专业委员会执行委员。',
  '中国机械工程学会工业大数据与智能系统分会委员。',
  '浙江省自动化学会青年工作委员会副主任委员。',
  '浙江省自动化学会专家库成员。',
  '湖州师范大学青年科学技术协会副会长。',
  '长期担任 IEEE TII、IEEE TNNLS、IEEE TIE、IEEE TIM、IEEE TASE、IEEE SENSORS J、IEEE IOTJ、KBS、EAAI、CAIE、JMS、AEI、ASOC、NODY、FUEL、NEUCOM、JPC、CCE、IECR 等国外权威 SCI 期刊审稿人。',
];

type GraduateCohort = { year: number; students: { name: string; note?: string }[] };

// 按文档中的年级排列；括号内信息原样保留，不推断学籍或职位。
export const graduateStudents: GraduateCohort[] = [
  { year: 2026, students: [{ name: '邵闻起' }, { name: '强锐达' }, { name: '刘俊鑫' }, { name: '邵航' }, { name: '唐雨婷' }] },
  { year: 2025, students: [{ name: '王鑫' }, { name: '戚鸿斐' }, { name: '邵佳佳' }] },
  { year: 2024, students: [{ name: '陈嘉辉' }, { name: '刘杨美' }, { name: '倪心茹' }] },
  { year: 2023, students: [
    { name: '茅珑瀛', note: '校优秀毕业研究生，杭州师范大学数学学院，博士' },
    { name: '高文情', note: '亳州市谯城阳光电力维修工程公司' },
  ] },
  { year: 2022, students: [{ name: '胡婷婷', note: '深圳佰维存储科技公司' }] },
  { year: 2021, students: [{ name: '贾瑞柠', note: '中国建设银行武安支行' }] },
];
