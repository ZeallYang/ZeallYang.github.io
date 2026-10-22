// 学术资料按最新版《2026-个人信息-杨泽宇（机智学院官网）》更新，正文转录于 PROFILE_CONTENT.md。
import portrait from '../assets/portrait.jpg';
import type { ImageMetadata } from 'astro';

type ResearchInterest = { title: string; topics?: string[] };

export const profile = {
  name: '杨泽宇',
  englishName: 'Zeyu Yang',
  initials: 'ZY',
  qualifications: '博士 · 副教授 · 硕士生导师',
  affiliation: '湖州师范大学',
  email: 'yangzeyu@zju.edu.cn',
  // 用户提供的真实照片；替换 src/assets/portrait.jpg 即可更新，设为 null 则显示姓名字母。
  avatar: portrait,
  description: '杨泽宇，湖州师范大学博士、副教授、硕士生导师。长期致力于工业人工智能、工业大数据分析与应用、工业大模型与智能体等领域研究。',
  biography: [
    '杨泽宇，男，1992 年生，浙江湖州人，博士、副教授、硕士生导师。',
    '2021 年获浙江大学控制科学与工程专业博士学位，2019—2020 年赴德国杜伊斯堡-埃森大学自动控制及复杂系统研究所联合培养。2021—2023 年在湖州师范大学任讲师，2023 年起任副教授。入选浙江省青年人才托举项目（校内首位），并为全省工业大数据分析与应用研究领域首位入选者；获浙江省青年科技工作者优秀论文等荣誉。',
    '长期致力于工业人工智能、工业大数据分析与应用、工业大模型与智能体等领域研究。近年来主持国家自然科学基金青年项目 1 项、浙江省自然科学基金 2 项（青年项目和探索项目）、湖州市自然科学基金 2 项、全国重点实验室开放课题 3 项；作为核心成员参与多项国家自然科学基金重点项目、国家重点研发计划课题与国家自然科学基金面上项目。',
    '已累计发表学术论文 80 余篇（第一/通讯作者 40 余篇），包括领域内权威期刊如 IEEE 汇刊（IEEE TSMC、IEEE TIE、IEEE TII、IEEE TASE、IEEE TIM 等）、IFAC 会刊（EAAI、CEP、JPC 等）以及 IEEE/CAA JAS、IEEE IoTJ等，其中 2 篇入选 ESI 高被引论文；相关研究成果应用于化工过程、旋转设备、离散制造等复杂工业系统，申请和授权国家发明专利 10 余项。',
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
  keywords: ['过程监测', '工业软测量', '故障诊断', '质量预报', '工业Agent', '自适应建模'],
  research: [
    { title: '工业人工智能' },
    { title: '工业大数据分析与应用' },
    { title: '工业大模型与智能体' },
  ] as ResearchInterest[],
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
  { id: 'workshops', label: '组织专题研讨会', english: 'Organized Workshops' },
  { id: 'service', label: '学术兼职', english: 'Academic Service' },
  { id: 'contact', label: '加入课题组', english: 'Contact' },
];

type NavigationLink = { label: string; href: string; description?: string; highlight?: boolean };
type NavigationItem = NavigationLink | { label: string; children: NavigationLink[] };

// 设为 false 可隐藏整个顶部菜单，左侧章节导航不受影响。
export const showTopNavigation = true;

// 暂用描述性名称；确定正式课题组名称后只需修改此处。
export const groupName = '工业智能感知与自主学习课题组';

// 顶部只导航到独立页面，不在这里重复主页章节。
export const navigation: NavigationItem[] = [
  { label: '课题组动态', href: '/news/' },
  { label: '学生培养', href: '/members/', highlight: true },
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
  // 按个人资料文档列示的期刊说明，不代表实时分区核验。
  venueNote?: string;
  // 图示放入 public/papers/；没有真实图示时显示明确的占位区。
  image?: { src: string; thumbnail?: string; alt: string; caption?: string; width: number; height: number };
  // 仅填写已确认的论文地址和研究要点。
  url?: string;
  wechatUrl?: string;
  highlights?: string[];
  // 可按需添加真实 DOI / PDF / Code 链接；未提供时页面不显示链接区。
  links?: { label: string; url: string }[];
};

export const publications: Publication[] = [
  {
    authors: 'Zeyu Yang, Jiahui Chen, Zhen Bi, Xiaoyu Jiang, Le Yao, Jungang Lou, Zhihuan Song',
    title: 'CLARI: Constrained Reflective LLM Inference for Few-Shot Soft Sensing under Operating-Condition Drift',
    venue: 'Control Engineering Practice', venueLabel: 'CEP', year: 2026,
    venueNote: '国际控制工程与工业应用领域顶刊，SCI二区期刊',
    url: 'https://www.sciencedirect.com/science/article/pii/S0967066126004302',
    wechatUrl: 'https://mp.weixin.qq.com/s/D0PyjYxBluLKi9wNAKnbfQ',
    image: { src: 'papers/clari-2026.webp', thumbnail: 'papers/clari-2026-thumb.webp', alt: 'CLARI 的分布约束识别、结构约束推理和物理约束推理总体架构', caption: '图 1 · CLARI 总体架构', width: 1412, height: 872 },
  },
  {
    authors: 'Gecheng Chen, Zeyu Yang*, Xinkai Chen, Jianqiang Li, Chengwen Luo',
    title: 'Towards the Bi-imbalance: A Pruning-based Contrastive Domain Adaptation Framework for Industrial Fault Diagnosis',
    venue: 'IEEE/CAA Journal of Automatica Sinica', venueLabel: 'IEEE/CAA JAS', year: 2026,
    venueNote: '国际自动化与控制领域顶刊，SCI一区TOP期刊',
    url: 'https://www.ieee-jas.net/en/article/doi/10.1109/JAS.2026.126002',
    wechatUrl: 'https://mp.weixin.qq.com/s/L7jVwDqvd0CnHtHMBNUw0A',
    image: { src: 'papers/pcda-2026.webp', thumbnail: 'papers/pcda-2026-thumb.webp', alt: 'PCDA 的不平衡感知对比表征学习和边界感知对抗域适应总体架构', caption: '图 2 · PCDA 总体架构', width: 1062, height: 1952 },
  },
  {
    authors: 'Zeyu Yang, Wenqing Gao, Gecheng Chen, Jiaxin Yu, Bocun He, Lingjian Ye',
    title: 'Self-Modified Dynamic Domain Adaptation for Industrial Soft Sensing',
    venue: 'IEEE Transactions on Automation Science and Engineering', venueLabel: 'IEEE TASE', year: 2026,
    venueNote: '国际智能控制与自动化领域顶刊，SCI二区TOP期刊',
    url: 'https://ieeexplore.ieee.org/document/11391543/',
    wechatUrl: 'https://mp.weixin.qq.com/s/BXffZAkmrBxcFgC_6kwtdA',
    image: { src: 'papers/sdda-2026.webp', thumbnail: 'papers/sdda-2026-thumb.webp', alt: 'SDDA 逐步引入目标域样本并迭代修正伪标签的自修改过程', caption: '图 3 · SDDA 迭代自修改过程', width: 2106, height: 1062 },
  },
  {
    authors: 'Zeyu Yang, Longying Mao, Lingjian Ye, Yiran Ma, Zhihuan Song, Zhichao Chen',
    title: 'AKGNN: When Adaptive Graph Neural Network Meets Kolmogorov-Arnold Network for Industrial Soft Sensors',
    venue: 'IEEE Transactions on Instrumentation and Measurement', venueLabel: 'IEEE TIM', year: 2025,
    venueNote: '国际仪器和测量领域顶刊，SCI二区TOP期刊',
    url: 'https://ieeexplore.ieee.org/document/10925436/',
    image: { src: 'papers/akgnn-2025.webp', thumbnail: 'papers/akgnn-2025-thumb.webp', alt: 'AKGNN 的总体模型、图构建、消息传递和 KAN 标签预测模块', caption: '图 1 · AKGNN 模型架构', width: 1046, height: 974 },
  },
  {
    authors: 'Zeyu Yang, Tingting Hu, Le Yao, Lingjian Ye, Yi Qiu, Shuxin Du',
    title: 'Stacked Dual-Guided Autoencoder: A Scalable Deep Latent Variable Model for Semi-Supervised Industrial Soft Sensing',
    venue: 'IEEE Transactions on Instrumentation and Measurement', venueLabel: 'IEEE TIM', year: 2024,
    venueNote: '国际仪器和测量领域顶刊，SCI二区TOP期刊',
    url: 'https://ieeexplore.ieee.org/document/10663500/',
    image: { src: 'papers/sdgae-2024.webp', thumbnail: 'papers/sdgae-2024-thumb.webp', alt: 'SSDGAE 的数据预处理、堆叠双引导自编码器离线建模和在线预测架构', caption: '图 3 · SSDGAE 结构', width: 1882, height: 1192 },
  },
  {
    authors: 'Zeyu Yang, Le Yao, Bingbing Shen, Peiliang Wang',
    title: 'Probabilistic Fusion Model for Industrial Soft Sensing Based on Quality-Relevant Feature Clustering',
    venue: 'IEEE Transactions on Industrial Informatics', venueLabel: 'IEEE TII', year: 2023,
    venueNote: '国际工业信息领域顶刊，SCI一区TOP期刊',
    url: 'https://ieeexplore.ieee.org/document/9964255/',
    image: { src: 'papers/fusion-2023.webp', thumbnail: 'papers/fusion-2023-thumb.webp', alt: '基于质量相关特征聚类的 QRFC 软测量离线建模与在线预测流程', caption: '图 1 · QRFC 软测量流程', width: 1038, height: 994 },
  },
  {
    authors: 'Zeyu Yang, Junhua Zheng, Zhiqiang Ge',
    title: 'Lifelong Bayesian Learning Machines for Streaming Industrial Big Data',
    venue: 'IEEE Transactions on Systems, Man, and Cybernetics: Systems', venueLabel: 'IEEE TSMC', year: 2023,
    venueNote: '国际人工智能领域顶刊，SCI一区TOP期刊',
    url: 'https://ieeexplore.ieee.org/document/9874385/',
    image: { src: 'papers/lifelong-2023.webp', thumbnail: 'papers/lifelong-2023-thumb.webp', alt: '终身贝叶斯学习机器 LBLM 的流式数据知识挖掘、模型扩展和模型优化框架', caption: '图 2 · LBLM 框架', width: 1436, height: 834 },
  },
  {
    authors: 'Zeyu Yang, Zhiqiang Ge',
    title: 'On Paradigm of Industrial Big Data Analytics: From Evolution to Revolution',
    venue: 'IEEE Transactions on Industrial Informatics', venueLabel: 'IEEE TII', year: 2022,
    venueNote: '国际工业信息领域顶刊，SCI一区TOP期刊',
    url: 'https://ieeexplore.ieee.org/document/9827608/',
    image: { src: 'papers/paradigm-2022.webp', thumbnail: 'papers/paradigm-2022-thumb.webp', alt: '工业大数据分析从孤立学习到终身学习的范式演进及应用场景', caption: '图 5 · 工业大数据分析范式演进', width: 1406, height: 1218 },
  },
  {
    authors: 'Zeyu Yang, Zhiqiang Ge',
    title: 'Rethinking the Value of Just-In-Time Learning in the Era of Industrial Big Data',
    venue: 'IEEE Transactions on Industrial Informatics', venueLabel: 'IEEE TII', year: 2022,
    venueNote: '国际工业信息领域顶刊，SCI一区TOP期刊',
    url: 'https://ieeexplore.ieee.org/document/9405485/',
    image: { src: 'papers/jit-2022.webp', thumbnail: 'papers/jit-2022-thumb.webp', alt: '并行即时学习 P-JITL 中的模型库管理、并行搜索、并行建模和数据库管理框架', caption: '图 2 · P-JITL 框架', width: 1604, height: 1424 },
  },
  {
    authors: 'Zeyu Yang, Zhiqiang Ge',
    title: 'Industrial Virtual Sensing for Big Process Data based on Parallelized Nonlinear Variational Bayesian Factor Regression',
    venue: 'IEEE Transactions on Instrumentation and Measurement', venueLabel: 'IEEE TIM', year: 2020,
    venueNote: '国际仪器和测量领域顶刊，SCI二区TOP期刊',
    url: 'https://ieeexplore.ieee.org/document/9091189/',
    image: { src: 'papers/vbf-2020.webp', thumbnail: 'papers/vbf-2020-thumb.webp', alt: '并行非线性变分贝叶斯因子回归 P-NVBFR 的节点并行和线程并行计算流程', caption: '图 2 · 并行 NVBFR 流程', width: 1024, height: 1430 },
  },
];

export const honors = [
  { year: 2025, text: '获湖州师范大学“学术新星”A 类项目' },
  { year: 2025, text: '获 ISCSIC 国际会议优秀论文奖（Excellent Paper Award）、特邀报告人奖（Invited Speaker Award）' },
  { year: 2025, text: '获 ARCAI 国际会议最佳口头报告奖（Best Oral Presentation Award）' },
  { year: 2024, text: '入选浙江省青年人才托举培养项目' },
  { year: 2024, text: '获 ARCAI 国际会议最佳论文报告奖（Best Paper Presentation Award）' },
  { year: 2023, text: '获浙江省青年科技工作者优秀论文' },
  { year: 2023, text: '获湖州师范大学“浙北英才”A 类计划' },
  { year: 2021, text: '获浙江大学优秀毕业博士研究生' },
  { year: 2020, text: '获浙江大学争创优秀博士学位论文资助' },
];

export const services = [
  '国家自然科学基金委通讯评审专家',
  '山东省自然科学基金通讯评审专家',
  '全国研究生教育评估监测专家库专家',
  '中国自动化学会数据驱动控制、学习与优化专业委员会委员',
  '中国计算机学会工业控制计算机专业委员会执行委员',
  '中国机械工程学会工业大数据与智能系统分会委员',
  '浙江省自动化学会青年工作委员会副主任委员',
  '浙江省自动化学会专家库成员',
  '湖州师范大学青年科学技术协会副会长',
  '长期担任 IEEE TII、IEEE TNNLS、IEEE TIE、IEEE TIM、IEEE TASE、IEEE SENSORS J、IEEE IOTJ、KBS、EAAI、CAIE、JMS、AEI、ASOC、NODY、FUEL、NEUCOM、JPC、CCE、IECR 等国外权威 SCI 期刊审稿人',
];

export const organizedWorkshops = [
  {
    conference: '第 41 届中国自动化学会青年学术年会（YAC 2026）',
    topic: '面向工业数据智能的质量信息深度感知理论与方法',
    englishTopic: 'Theories and methods for deep perception of quality information in industrial data intelligence',
  },
  {
    conference: '第9届计算机科学与智能控制国际会议（ISCSIC 2025）',
    topic: '新一代人工智能驱动的复杂系统过程监测及故障诊断',
    englishTopic: 'New-Gen AI-Driven Process Monitoring & Fault Diagnosis for Complex Systems',
  },
];

type GraduateCohort = { year: number; students: { name: string; note?: string }[] };

// 按文档中的年级排列；括号内信息原样保留，不推断学籍或职位。
export const graduateStudents: GraduateCohort[] = [
  { year: 2026, students: [{ name: '邵闻起' }, { name: '强锐达' }, { name: '刘俊鑫' }, { name: '邵航' }, { name: '唐雨婷' }] },
  { year: 2025, students: [{ name: '王鑫' }, { name: '戚鸿斐' }, { name: '邵佳佳' }] },
  { year: 2024, students: [{ name: '陈嘉辉' }, { name: '刘杨美' }, { name: '倪心茹' }] },
  { year: 2023, students: [
    { name: '茅珑瀛', note: '校优秀毕业研究生，杭州师范大学数学学院，博士' },
    { name: '高文情', note: '亳州市谯城阳光电力维修工程有限责任公司，综合服务岗' },
  ] },
  { year: 2022, students: [{ name: '胡婷婷', note: '深圳佰维存储科技股份有限公司，SIPI仿真工程师' }] },
  { year: 2021, students: [{ name: '贾瑞柠', note: '中国建设银行股份有限公司武安支行，二级业务员' }] },
];

type ResearchAchievement = { date: string; student: string; venue: string; title: string };
type AcademicExchange = {
  date: string;
  students: string[];
  conference: string;
  location: string;
  // 补充真实照片时，从 src/assets/news/ 导入图片后填写；无照片时不显示图片区。
  photos?: { src: ImageMetadata; alt: string; caption?: string }[];
};

// 日期统一填写 YYYY-MM；页面自动倒序排列，同月条目保留录入顺序。
export const researchAchievements: ResearchAchievement[] = [
  { date: '2024-09', student: '胡婷婷', venue: 'IEEE TIM', title: 'Stacked Dual-Guided Autoencoder: A Scalable Deep Latent Variable Model for Semi-Supervised Industrial Soft Sensing' },
  { date: '2025-03', student: '茅珑瀛', venue: 'IEEE TIM', title: 'AKGNN: When Adaptive Graph Neural Network Meets Kolmogorov–Arnold Network for Industrial Soft Sensors' },
  { date: '2025-12', student: '茅珑瀛', venue: 'IEEE Sensors Journal', title: 'Edge-Compressed and Energy-Optimized Dual-Domain Graph Network With Variational Gating for Industrial Soft Sensing' },
  { date: '2026-02', student: '高文情', venue: 'IEEE TASE', title: 'Self-Modified Dynamic Domain Adaptation for Industrial Soft Sensing' },
  { date: '2026-08', student: '陈嘉辉', venue: 'CEP', title: 'CLARI: Constrained reflective LLM inference for few-shot soft sensing under operating-condition drift' },
];

export const academicExchanges: AcademicExchange[] = [
  { date: '2023-05', students: ['贾瑞柠', '胡婷婷'], conference: '第十二届数据驱动控制与学习系统会议（DDCLS’23）', location: '湖南湘潭' },
  { date: '2024-05', students: ['贾瑞柠', '胡婷婷'], conference: '第十三届数据驱动控制与学习系统会议（DDCLS’24）', location: '河南开封' },
  { date: '2025-05', students: ['茅珑瀛', '高文情', '倪心茹'], conference: '第十四届数据驱动控制与学习系统会议（DDCLS’25）', location: '江苏无锡' },
  { date: '2025-07', students: ['茅珑瀛'], conference: '第四十四届中国控制会议（CCC 2025）', location: '重庆' },
  { date: '2025-09', students: ['陈嘉辉', '刘杨美'], conference: '第九届计算机科学与智能控制国际会议（ISCSIC 2025）', location: '浙江杭州' },
  { date: '2025-11', students: ['倪心茹'], conference: '2025 中国工业计算机大会（ICCC 2025）', location: '云南昆明' },
  { date: '2026-05', students: ['倪心茹', '戚鸿斐'], conference: '第十五届数据驱动控制与学习系统会议（DDCLS’26）', location: '湖南吉首' },
  { date: '2026-08', students: ['茅珑瀛'], conference: '第 23 届国际自动控制联合会世界大会（IFAC World Congress 2026）', location: '韩国釜山' },
  { date: '2026-05', students: ['王鑫'], conference: '第 41 届中国自动化学会青年学术年会（YAC 2026）', location: '湖南长沙' },
];
