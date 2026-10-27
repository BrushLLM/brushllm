/**
 * 简体中文。结构与 en.ts 完全一致（由 Dictionary 类型约束）。
 * 占位符 {count}/{year}/{pct} 等保持原样，渲染时替换。
 * 不翻译：模型 id、URL、代码示例、价格、许可证标识、产品名。
 */
import type { Dictionary } from './index';

const zhCN: Dictionary = {
  site: {
    title: 'BrushLLM — 你的 AI，化繁为简',
    description: '通过一个 API 访问强大的 AI 模型，并用免费的本地优先桌面应用进行创作。BrushLLM 是面向开发者与创作者的 AI 平台。',
    organizationDescription:
      'BrushLLM 是面向开发者与创作者的 AI 平台，提供 AI 模型服务（一个 API 访问强大的 AI 模型）以及免费的本地优先桌面应用 —— Image Studio、Video Studio 和 Player。',
  },

  nav: {
    models: 'AI 模型',
    apps: '应用',
    pricing: '价格',
    docs: '文档',
    about: '关于',
  },

  header: {
    home: 'BrushLLM 首页',
    mainNav: '主导航',
    mobileNav: '移动导航',
    logIn: '登录',
    getStarted: '开始使用',
    toggleMenu: '切换菜单',
  },

  languageSwitcher: {
    label: '语言',
    system: 'Auto',
    systemTitle: '跟随浏览器语言',
  },

  appPage: {
    openSourceTitle: '开源，诚实的软件',
    openSourceText: '源代码、问题反馈与发布版本都在 GitHub 上{license}。无遥测、无账号、无广告。',
  },

  footer: {
    blurb:
      'BrushLLM —— 面向开发者与创作者的 AI。一个 API 访问强大的 AI 模型，加上免费的本地优先桌面应用。我们保护你的隐私：无追踪器、无分析、无广告。',
    tagline: '一个 API · 三款免费应用 · 隐私优先',
    product: '产品',
    console: '控制台',
    company: '公司',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: '关于 BrushLLM',
    privacyPolicy: '隐私政策',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: '由 OpenAI 兼容网关驱动',
  },

  common: {
    skipToContent: '跳到主要内容',
    codeExamples: '代码示例',
    moreQuestions: '更多问题',
    download: '下载',
    github: 'GitHub',
    tryIt: '试一试',
    featured: '推荐',
    free: '免费',
    copy: '复制',
    copied: '已复制！',
    copyFallback: '复制失败',
    learnMore: '了解更多',
    learnMoreArrow: '了解更多',
    downloadArrow: '下载',
    exploreAiModels: '浏览 AI 模型',
    exploreTheApps: '浏览应用',
    exploreTheApi: '了解 API',
    browseModels: '查看模型',
    openTheConsole: '打开控制台',
    readTheDocs: '阅读文档',
  },

  data: {
    capability: {
      chat: '对话',
      reasoning: '推理',
      tools: '工具调用',
      vision: '视觉',
      'long-context': '长上下文',
      image: '文生图',
    },
    apps: {
      'image-studio': {
        tagline: '本地优先的 AI 图像工具箱',
        description:
          '一款免费的桌面图像工具箱。日常编辑 —— 格式转换、压缩、裁剪、水印、EXIF —— 全部在你的设备上完成；背景移除、生成式填充等 AI 功能经由 BrushLLM 网关处理，按张计费。',
        highlights: ['25+ 本地工具', 'AI 编辑走 BrushLLM API', '9 种语言', '零遥测'],
      },
      'video-studio': {
        tagline: '本地视频、音频与字幕工具箱',
        description:
          '一款免费、离线的视频、音频与字幕处理工具箱。转换、压缩、合并、剪辑、响度归一化、修复字幕编码 —— 100% 本地处理，零网络请求。',
        highlights: ['25+ 工具', '100% 本地处理', '9 种语言', '零网络请求'],
      },
      player: {
        tagline: '基于 mpv 的开源媒体播放器',
        description:
          '一款开源、跨平台的媒体播放器。支持 mpv 能播的所有格式，并可从 WebDAV、SMB、FTP、Emby 和 Jellyfin 串流播放 —— 支持 HDR 输出、硬件解码和 9 种语言界面。',
        highlights: ['mpv 全格式', 'WebDAV · SMB · Emby · Jellyfin', 'HDR 与硬件解码', '9 种语言'],
      },
    },
    models: {
      'gpt-5.2': 'ChatGPT 旗舰 —— 综合推理、视觉与工具调用能力俱强。',
      'gpt-5.2-mini': '快速、低价的 ChatGPT 档位，适合高频对话、分类与信息抽取。',
      'deepseek-chat': '旗舰非思考模型。快速、便宜，通用对话与工具调用表现出色。',
      'deepseek-reasoner': '带可见思维链的推理模型，擅长数学、代码与难题。',
      'glm-4.6': 'Z.ai 旗舰。编码、写作与智能体规划能力强，200K 上下文。',
      'glm-4.5-air': '更轻量的 GLM，为成本敏感的生产流量调优。',
      'glm-4.5-flash': 'GLM 家族的免费档位 —— 适合原型与个人项目。',
      'qwen3-max': '阿里巴巴最大旗舰。为高要求的智能体与对话负载提供顶级质量。',
      'qwen3-235b-a22b': '开放权重 MoE 旗舰，支持混合思考模式。',
      'qwen3-32b': '稠密开放权重全能选手，兼具思考与非思考模式。',
      'qwen3-coder-plus': '为智能体编码工具与仓库级修改打造的代码特化模型。',
      'qwen-vl-max': '视觉语言模型，用于图像理解、OCR 与图表推理。',
      'kimi-k2-0905': '万亿参数 MoE，为智能体工具调用与长文档调优。',
      'kimi-k2-thinking': 'K2 的推理变体，交错思考应对多步任务。',
      'MiniMax-M2': '高效的智能体 MoE —— 预算有限编码智能体的心头好。',
      'gpt-image-2': 'OpenAI 的图像生成模型 —— 提示词生成图像，指令遵循能力强。',
    },
  },

  pages: {
    home: {
      metaDescription: '通过一个 API 访问强大的 AI 模型，并用免费的本地优先桌面应用进行创作。',
      heroBadge: '官方价格 5 折 · 面向开发者与创作者',
      heroTitle: '你的 AI，',
      heroTitleBand: '化繁为简',
      heroSubtitle: '通过一个 API 访问强大的 AI 模型，并用免费的本地优先应用进行创作',
      heroCtaApi: '获取 API 密钥',
      heroCtaApps: '桌面应用',
      heroNote: '一个账号，畅享整个平台',

      platformEyebrow: '一个平台',
      platformTitle: '一个平台，为开发者与创作者而建',
      platformIntro:
        'BrushLLM 是面向开发者与创作者的统一平台：通过{modelsLink}以统一 API 访问强大的 AI 模型，加上一族{appsLink} —— Image Studio 的 AI 功能经由同一 API 计费。',
      platformModelsLink: 'AI 模型服务',
      platformAppsLink: '免费的本地优先桌面应用',

      apiCardBadge: '面向开发者',
      apiCardTitle: 'AI 模型服务',
      apiCardSubtitle: '一个 API 访问强大的 AI 模型',
      apiCardDescription: '通过单一 API 访问强大的 AI 模型 —— {count} 个模型、{providers} 家供应商，统一且按量计费。',
      apiCardBullets: [
        '统一、OpenAI 兼容的接入端点',
        '对话、推理、视觉与图像模型',
        '公开价格、按量付费、免费档位',
      ],
      apiCardChips: { models: '模型', pricing: '价格', docs: '文档', console: '控制台' },
      apiCardCta: '浏览 AI 模型',
      apiCardSecondary: '阅读文档',

      appsCardBadge: '面向创作者 · 免费应用',
      appsCardTitle: '桌面应用',
      appsCardSubtitle: '日常工作的免费本地优先工具',
      appsCardDescription:
        'Image Studio、Video Studio 和 Player —— macOS 与 Windows 上的开源桌面应用，零遥测。Image Studio 的 AI 功能运行于同一 API。',
      appsCardNote: '开源 · macOS · Windows',
      appsCardCta: '浏览应用',

      appsSectionEyebrow: '应用',
      appsSectionTitle: '免费的本地优先应用，',
      appsSectionTitleBand: '构建于一个平台',
      appsSectionFooter: '详情、截图与安装包见{link}',
      appsSectionFooterLink: '应用页面',

      benefitsEyebrow: '为什么选我们的 API',
      benefitsTitle: '你需要的一切，',
      benefitsTitleBand: '多余的一概没有',
      benefitsSubtitle: '为构建 AI 应用而生的简单、诚实工具',
      benefits: [
        { title: '统一 API', description: '每个模型共用一个 OpenAI 兼容端点。保留你的 SDK —— 改一行就能上线' },
        { title: '多种模型', description: '来自顶尖实验室的对话、推理、视觉与图像模型 —— {count} 个模型一个目录' },
        { title: '简单集成', description: '任何 OpenAI SDK 即插即用。复制、粘贴、运行 —— cURL、Python、Node.js 或 Go' },
        { title: '按量计费', description: '用多少付多少 —— 按 token 或按张，以美元计价。无订阅，提供免费档位' },
      ],

      statsEyebrow: '可用模型，一个 API',
      stats: { providers: 'AI 供应商', models: '模型，同一目录', account: '账号', countries: '服务国家/地区' },
      statsCompare: '所有模型均为官方价格的 50% — {link}',
      statsCompareLink: '查看价格',

      howEyebrow: '工作原理',
      howTitle: '三步拿到你的第一个 token',
      howSteps: [
        { title: '创建账号', description: '邮箱注册并在控制台获取 API 密钥。无需信用卡即可开始' },
        { title: '把 SDK 指向 BrushLLM', description: '设置 base URL，继续使用你已有的 OpenAI SDK' },
        { title: '按 id 调用任意模型', description: '随意切换模型 id —— 整个目录只隔一把密钥' },
      ],
      howCodeTitle: '保留你的代码，只改一行',
      howCodeSubtitle: '能在 OpenAI API 上运行的，就能在 BrushLLM 上运行 —— 同一个请求，四种语言。',

      faqEyebrow: '常见问题',
      faqTitle: '问题，一一解答',
      faqDevelopers: '面向开发者',
      faqCreators: '面向创作者',
      developerFaqs: [
        {
          question: 'BrushLLM 是什么？',
          answer:
            'BrushLLM 是面向开发者与创作者的 AI 平台。AI 模型服务为开发者提供一个访问强大 AI 模型的 API；一族免费的本地优先桌面应用 —— Image Studio、Video Studio 和 Player —— 覆盖创作者一侧。一个账号畅享整个平台。',
        },
        {
          question: 'API 如何工作？',
          answer: '把任意 OpenAI SDK 指向 {apiBase} 并使用你的 BrushLLM 密钥。对话补全、工具调用与流式输出都按你熟悉的方式工作。',
        },
        {
          question: '有哪些 AI 模型可用？',
          answer: '目录涵盖来自 DeepSeek、Qwen、GLM、Kimi、MiniMax 和 OpenAI 的 {count} 个模型 —— 对话、推理、视觉与文生图。在模型页面查看完整列表与实时价格。',
        },
        {
          question: 'API 兼容 OpenAI 吗？',
          answer: '完全兼容。能在 OpenAI API 上运行的，就能在 BrushLLM 上运行 —— 包括 Cursor、Cline、OpenCode 和 aider 等编码智能体与 CLI。',
        },
        {
          question: '用量如何计费？',
          answer: '严格按量付费，以美元计价 —— 文本模型按 token，图像模型按张。无订阅、无最低消费；多个模型提供免费档位。',
        },
        {
          question: 'BrushLLM 适合初创公司与团队吗？',
          answer: '适合。一个端点覆盖所有供应商，按量计费随业务扩展，每把密钥可独立设置消费限额，并可为承诺用量申请批量折扣。',
        },
        {
          question: '你们如何保护我的隐私？',
          answer: '我们只收集账号运转所必需的信息。无追踪器、无分析、无广告 —— 你的提示词直接代理转发至上游模型，绝不存储、出售或用于画像。 {privacyLink}',
        },
              {
          question: '价格真的是官方价的一半吗?',
          answer: '是的 — BrushLLM 上所有模型的价格均为厂商官方价格的 50%,以美元按量计费。官方价格在模型页和价格页以划线形式标注在我们的价格旁边。',
        },
        {
          question: '网站支持其他语言吗?',
          answer: '支持 — 本网站与三款桌面应用均提供 9 种语言:英语、德语、西班牙语、法语、葡萄牙语(巴西)、日语、简体中文、繁体中文和韩语。',
        },
        {
          question: '应用安装时弹出安全警告,正常吗?',
          answer: '正常。应用目前未签名,macOS 的 Gatekeeper 和 Windows 的 SmartScreen 会在首次启动时提示。macOS 上右键点击应用选择「打开」;Windows 上选择「仍要运行」。应用不含任何遥测。',
        },
  ],
      creatorFaqs: [
        {
          question: 'Image Studio 是什么？',
          answer:
            'Image Studio 是 BrushLLM 的免费桌面图像工具箱。日常工具 —— 转换、压缩、裁剪、EXIF —— 本地离线运行；背景移除、生成式填充等 AI 功能经由 BrushLLM API 处理，按张计费。',
        },
        {
          question: 'Image Studio 能做什么？',
          answer: '用免费的本地工具转换、压缩、裁剪与清理图像 —— 再用 AI 生成、移除背景、擦除对象、填充与重绘，按张计费。',
        },
        {
          question: 'Video Studio 是什么?',
          answer: '一款免费离线的视频/音频/字幕处理工具箱 — 转换、压缩、合并、剪辑、响度规范化、修复字幕编码。100% 本地处理:你的文件绝不离开你的设备。',
        },
        {
          question: 'Player 是什么?',
          answer: '基于 mpv 的开源跨平台媒体播放器 — 支持 mpv 的全部格式,并可通过 WebDAV、SMB、FTP、Emby、Jellyfin 流媒体播放。支持 HDR 输出与硬件解码。',
        },
        {
          question: '可以编辑已有图像吗？',
          answer: '可以。打开任意图像，选中局部或整幅画布，描述想要的修改 —— 内置修补（inpainting）与背景移除。',
        },
        {
          question: '可以生成与变换图像吗？',
          answer: '可以 —— 文生图与风格重绘在同一工作区完成，由 BrushLLM API 之上的 GPT-Image 驱动。',
        },
        {
          question: '在哪里下载应用？',
          answer: '三款应用 —— Image Studio、Video Studio 和 Player —— 均已发布在 BrushLLM GitHub releases，支持 macOS（Apple Silicon）与 Windows。',
        },
        {
          question: '应用真的是免费的吗？',
          answer: '是。所有本地工具免费，源代码在 GitHub 上。只有 Image Studio 的 AI 功能使用按量计费的 BrushLLM API。',
        },
      ],

      ctaBuildTitle: '用 AI 构建',
      ctaBuildText: '一个 API 访问 {count} 个模型 —— 统一、按量计费、OpenAI 兼容',
      ctaCreateTitle: '用 AI 创作',
      ctaCreateText: '免费的本地优先桌面应用 —— 创作与编辑图像、视频与媒体，Image Studio 更有 AI 超能力加持',
    },

    models: {
      metaDescription: '浏览 {count} 个 AI 模型 —— 从 DeepSeek、Qwen、GLM、Kimi 到 GPT 与文生图 —— 含上下文窗口、能力与参考价格。',
      eyebrow: 'AI 模型',
      title: '{count} 个模型 · {providers} 家供应商 ·',
      titleBand: '一个端点',
      intro:
        '下列所有模型都可通过同一个 OpenAI 兼容 API 与同一把密钥调用。价格为参考价 —— 文本模型按每 1M token 计美元，图像模型按张计美元。',
      introFree: ' —— 其中 {count} 个免费',
      searchPlaceholder: '按名称、id 或供应商搜索…',
      searchLabel: '搜索模型',
      providerLabel: '供应商',
      providerGroup: '按供应商筛选',
      capabilityLabel: '能力',
      capabilityGroup: '按能力筛选',
      all: '全部',
      showing: '正在显示 {visible} / {total} 个模型',
      empty: '没有模型符合当前筛选。请尝试其他关键词、供应商、能力或用途。',
      footnote:
        '价格为参考目录价，以美元计 —— 文本模型按每 1M token，图像模型按生成张数 —— 可能与控制台中配置的费率不同。上下文窗口为各上游模型支持的最大值。集成细节见{docsLink}。',
      footnoteDocsLink: '文档',
      card: { type: '类型', perImage: '每张', output: '输出', context: '上下文', input: '输入 / 1M', outputPer1M: '输出 / 1M' },
    },

    pricing: {
      metaDescription: 'BrushLLM 全部模型的简单按量计费 —— 美元参考价，多个免费档位。',
      eyebrow: '价格',
      title: '用多少，付多少，',
      titleBand: '就这么简单',
      intro:
        '文本模型按 token 计费，图像模型按生成张数计费 —— 全部以美元结算，无订阅、无最低消费。下表为参考目录价；你的实际费率与余额在控制台中查看。',
      highlights: [
        { title: '纯按量付费', description: '以美元按 token 计费。无订阅、无最低消费、无加价套路 —— 充值即用' },
        { title: '{count} 个免费模型', description: 'GLM-4.5 Flash 完全免费 —— 原型与兴趣项目的理想之选' },
        { title: '批量折扣', description: '用量可观？联系我们，为你的负载商定承诺用量价格' },
      ],
      textModelsTitle: '文本模型 —— 按 token',
      imageModelsTitle: '图像模型 —— 按张',
      table: { model: '模型', provider: '供应商', context: '上下文', input: '输入 / 1M', output: '输出 / 1M', resolution: '分辨率', pricePerImage: '每张价格', official: '官方 输入 / 输出', brushllm: 'BrushLLM 输入 / 输出', youSave: '立省' },
      footnote:
        '价格为参考目录价，以美元计 —— 文本模型按每 1M token，图像模型按生成张数。实际计费在控制台进行，还可按 API 密钥跟踪支出。',
      compareEyebrow: '价格核对',
      compareTitle: '同样的模型，',
      compareTitleBand: '更低的到手价',
      compareIntro:
        'OpenRouter 购买额度时收取支付手续费 —— 卡支付 5.5% —— 叠加在每个模型的目录价之上。BrushLLM 公布的价格即你的最终价格。',
      compareTable: {
        model: '模型',
        ours: '输入 / 输出每 1M',
        orList: '目录价 输入 / 输出',
        orAllIn: '到手价* 输入 / 输出',
        youSave: '为你节省',
        upTo: '最高 {pct}%',
      },
      compareFootnote:
        '*到手价 = OpenRouter 目录价加 5.5% 购额手续费（Stripe；加密货币为 5%）。节省比例比较 BrushLLM 最终价与 OpenRouter 到手价。OpenRouter 目录价来自其公开 API，2026 年 9 月获取 —— 仅供参考；请在两个平台核实当前价格。',
      ctaTitle: '查看你的余额与费率',
      ctaText: '充值、设置密钥限额并实时查看用量 —— 尽在控制台',
    },

    docs: {
      metaDescription: 'BrushLLM API 快速上手 —— 认证、OpenAI 兼容 base URL、四种语言的 SDK 示例，以及完整的模型 id 列表。',
      eyebrow: '文档',
      title: '快速上手，',
      titleBand: '一笔带过',
      intro: 'BrushLLM 是 OpenAI 兼容网关。如果你调用过 OpenAI API，就已经会调用 BrushLLM —— 这是三十秒版本。',
      toc: { quickstart: '快速上手', firstRequest: '首次请求', modelIds: '模型 id', errors: '错误码' },
      tocLabel: '文档章节',
      steps: [
        {
          title: '获取 API 密钥',
          description: '{createLink}或{signInLink}控制台，然后创建密钥。密钥形如{code} —— 请像密码一样保管，交给工具时记得设置消费限额',
          createLink: '创建账号',
          signInLink: '登录',
        },
        {
          title: '设置 base URL 与密钥',
          description: '把任意 OpenAI SDK 指向我们的端点：',
          baseUrlLabel: 'base_url',
        },
        {
          title: '按 id 调用任意模型',
          description: '把下表中的任一 id 作为{code}传入。就这样 —— 你已经在调用顶尖实验室的模型了',
        },
      ],
      firstRequestTitle: '你的第一次请求',
      firstRequestText: '同一个请求，四种语言 —— 含流式输出。复制、粘贴、运行',
      modelIdsTitle: '模型 id',
      modelIdsText: '请使用这些精确 id（区分大小写）。描述与能力见{modelsLink}。图像模型通过{code}调用，使用同一把 API 密钥。',
      modelIdsModelsLink: '模型页面',
      modelIdsTable: { id: '模型 id', name: '显示名称', context: '上下文' },
      errorsTitle: '错误码',
      errorsTable: { status: '状态码', meaning: '含义', fix: '处理方法' },
      errors: [
        { meaning: 'API 密钥无效或缺失', fix: '检查密钥以 “brsh-” 开头，且未在控制台中被吊销。' },
        { meaning: '未知模型 id', fix: '使用上表中列出的精确 id —— 区分大小写。' },
        { meaning: '速率限制或配额超限', fix: '等待并退避重试，或在控制台中调高该密钥的限额。' },
        { meaning: '余额不足', fix: '在控制台中充值后重试请求。' },
        { meaning: '上游供应商错误', fix: '几秒后重试；若持续出现，切换到其他模型 id 或联系支持。' },
      ],
      helpTitle: '遇到问题？',
      helpText: '密钥、限额与计费请查看控制台，或发邮件至{email}',
    },

    apps: {
      metaDescription: 'BrushLLM 桌面应用 —— Image Studio、Video Studio 和 Player。免费、本地优先、开源，支持 macOS 与 Windows。',
      eyebrow: '应用',
      title: '免费的本地优先应用，',
      titleBand: '开源',
      intro: '三款 macOS 与 Windows 桌面工具 —— 零遥测、零账号、无广告。Image Studio 的 AI 功能直连 BrushLLM API。',
      apiTitle: 'AI 功能背后的 API',
      apiText: 'Image Studio 的 AI 工具运行于 BrushLLM 网关 —— 一个 OpenAI 兼容端点，公开按张计价。',
    },

    studio: {
      metaDescription: '{tagline} —— {description}',
      badge: '桌面应用 · 免费 + AI 按量计费',
      intro:
        '每个本地工具都免费且完全在你的设备上运行 —— Rust 引擎、不上传。AI 功能调用驱动整个平台的同一个{apiLink}，按张计费，价格{ratesLink}。',
      introApiLink: 'BrushLLM API',
      introRatesLink: '公开透明',
      outro: '浏览 AI 工具背后的图像模型',
      groups: [
        {
          title: '本地工具 —— 免费、离线、私密',
          items: [
            { title: '转换与压缩', description: '8 种输入格式转 8 种输出格式（含 AVIF 与 WebP），支持 Lanczos 重采样与质量控制。' },
            { title: '缩放、裁剪与旋转', description: '批处理友好的几何工具，精确到像素尺寸并提供比例预设。' },
            { title: '水印与标注', description: '文字与图片水印、箭头、方框和自由手绘标注，适合截图与文档。' },
            { title: 'EXIF 查看、编辑与清除', description: '查看完整元数据、改写字段，或在分享前抹除位置与相机信息。' },
            { title: '拼接、马赛克与阴影', description: '将图像拼成网格、局部像素化、添加圆角与投影。' },
            { title: '色彩工具', description: '亮度、对比度与饱和度、颜色替换，以及放大取色器。' },
          ],
        },
        {
          title: 'AI 工具 —— 由 BrushLLM 网关驱动',
          items: [
            { title: '生成图像', description: '使用 GPT-Image 文生图 —— 按生成张数计费，无订阅。' },
            { title: '移除背景', description: '一键抠图，边缘干净，直接在桌面完成。' },
            { title: '移除对象与水印', description: '框选区域并描述要消失的内容 —— 修补（inpainting）自动补全。' },
            { title: '生成式填充', description: '扩展、替换或交换内容，可选用参考图（例如人物替换）。' },
            { title: '风格重绘', description: '在保持构图与主体一致的前提下，为图像换一种风格。' },
            { title: '你的密钥，你的限额', description: 'API 密钥保存在系统钥匙串中；每把密钥在控制台有独立消费限额。' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} —— {description}',
      badge: '桌面应用 · 免费',
      intro:
        '100% 本地处理 —— 你的媒体从不离开这台机器。FFmpeg 二进制固定版本并经 SHA-256 校验，引擎带暂停/恢复任务队列，175 个自动化测试守护工具箱的可靠。',
      groups: [
        {
          title: '视频',
          items: [
            { title: '转换', description: 'MP4、MKV、WebM、MOV 与 AVI，支持 H.264、H.265、VP9 或 AV1 编码。' },
            { title: '压缩', description: '基于质量（CRF）或目标码率压缩，并实时估算体积。' },
            { title: '合并与剪辑', description: '按顺序拼接片段，帧精确地截取入出点。' },
            { title: '裁剪、缩放与旋转', description: '修正方向错误或加边的画面。' },
            { title: '变速', description: '0.25× 到 4× 播放速度，音频音高自动修正。' },
            { title: '帧、GIF 与 WebP', description: '提取静帧，或将片段转为 GIF/WebP 动图。' },
          ],
        },
        {
          title: '音频',
          items: [
            { title: '提取与转换', description: '导出音频为 MP3、M4A、FLAC、WAV、OGG 或 Opus。' },
            { title: '响度归一化', description: 'EBU R128 归一化，让各文件音量一致。' },
            { title: '音量与增益', description: '在可能的情况下不重编码视频即可增减音量。' },
            { title: '静音或替换', description: '移除音轨，或换上新的配乐。' },
            { title: '剪辑', description: '以与视频相同的入出点精度截取音频片段。' },
          ],
        },
        {
          title: '字幕',
          items: [
            { title: '内嵌或烧录', description: '挂载软字幕轨，或将其硬烧进画面。' },
            { title: '格式转换', description: 'SRT、VTT、ASS、SSA 与 TTML —— 自研字幕引擎，零依赖。' },
            { title: '修复编码', description: '自动将老式 GBK/Big5 文件修复为干净的 UTF-8。' },
            { title: '时间轴平移', description: '批量提前或推后字幕，与视频同步。' },
            { title: '提取', description: '从任意容器中提取已有字幕轨。' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} —— {description}',
      badge: '桌面应用 · 开源',
      intro:
        'macOS 版是围绕 libmpv 的原生 Swift + SwiftUI 构建；Windows 版是采用同一 mpv 内核的 Tauri 重写。零遥测，仅在你主动询问时检查更新。',
      groups: [
        {
          title: '播放',
          items: [
            { title: '全格式', description: '基于 mpv：MKV、MP4、AVI、MOV、WebM、FLAC、MP3，以及 mpv 支持的一切。' },
            { title: 'HDR 输出', description: '在支持的显示器上直通 PQ 与 EDR，硬件解码可开关。' },
            { title: '光盘镜像', description: '直接播放 ISO 蓝光与 DVD 镜像。' },
            { title: '播放控制', description: 'A-B 循环、播放速度、逐帧步进、章节与截图。' },
            { title: '播放列表与历史', description: '拖拽排序播放列表、断点续播、书签。' },
            { title: '迷你窗口', description: '常置顶的悬浮迷你播放器，适合多任务。' },
          ],
        },
        {
          title: '串流',
          items: [
            { title: 'WebDAV 与 SMB', description: '浏览并串流 NAS 上的媒体 —— macOS 原生 SMB 挂载。' },
            { title: 'FTP', description: '内置 FTP 客户端，可浏览目录并直接串流。' },
            { title: 'Emby 与 Jellyfin', description: '登录、浏览媒体库并直接串流，无需转码。' },
            { title: 'HTTP 与 HLS', description: '播放链接与 m3u8/HLS 流，预读缓冲可调。' },
          ],
        },
        {
          title: '字幕与工具',
          items: [
            { title: '自动加载字幕', description: '同名侧车文件自动加载；外部字幕按需载入。' },
            { title: '实时样式', description: '字体、大小、颜色与位置 —— 边看边调。' },
            { title: '均衡器与录制', description: '音频均衡器，以及用于存档的流录制。' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'BrushLLM 为开发者与创作者打造 AI 产品 —— 访问强大 AI 模型的统一 API，以及处理图像、视频与媒体的免费本地优先桌面应用。',
      eyebrow: '关于',
      title: '为开发者与创作者',
      titleBand: '打造的 AI 产品',
      intro:
        'BrushLLM 为开发者与创作者打造 AI 产品。一个平台、一个账号 —— 每一侧都是同一个承诺：简单的工具、公开的价格、与生俱来的隐私。',
      forDevelopers: '面向开发者。',
      forDevelopersText: '{link} —— 访问强大 AI 模型的统一 API。来自 DeepSeek、Qwen、GLM、Kimi、MiniMax、OpenAI 等的 {count} 个模型，共用一个 OpenAI 兼容端点。',
      forDevelopersLink: 'AI 模型服务',
      forCreators: '面向创作者。',
      forCreatorsText: '{link} —— macOS 与 Windows 上的免费本地优先桌面应用。Image Studio 将免费本地工具与同一 API 之上的 AI 编辑相结合；三款应用全部开源、零遥测。',
      forCreatorsLink: 'Image Studio、Video Studio 和 Player',
      values: [
        { title: '向世界开放', description: '前沿 AI 不该需要一堆账号、本地支付门槛或区域封锁 —— 也不该贵得离谱。一次注册，以美元计价，任何国家/地区可用' },
        { title: '一个平台，一个账号', description: '一个平台、一个账号、一张账单。如果接入我们比喝杯咖啡还久，那是我们的 bug，不是你的问题' },
        { title: '诚实定价', description: '公开的按 token 价格、无订阅陷阱、永久免费的档位。你应当永远知道一次请求的成本' },
        { title: '隐私为先', description: '我们只收集账号运转必需的信息。无追踪器、无分析、无广告 —— 你的提示词绝不存储、出售或用于画像' },
      ],
      familyTitle: 'BrushLLM 家族',
      familyText: '一个平台，两条路线 —— 面向开发者的统一 API，以及面向创作者的免费本地优先桌面应用一族。',
      familyApiTitle: 'AI 模型服务',
      familyApiText: '一个 OpenAI 兼容端点，覆盖来自 {providers} 家供应商的 {count} 个模型 —— 按 token 或按张计费。',
      contactTitle: '联系我们',
      contactText: '问题、批量价格，或希望我们新增的模型 —— 每封邮件我们都会读',
      contactCta: '开始使用',
    },

    notFound: {
      metaDescription: '找不到该页面。',
      code: '404 · 画布之外',
      title: '这一页被颜料盖住了',
      text: '链接可能已过期，或页面已经移动。不过模型们还留在原地。',
      backHome: '返回首页',
      browseModels: '浏览模型',
    },
    faq: {
      metaDescription: 'BrushLLM 常见问题 — 价格、隐私、API 与免费本地优先桌面应用的解答。',
      title: '常见问题',
    },

    privacy: {
      metaDescription: 'BrushLLM 隐私政策 — 我们收集什么(几乎不收集)、绝不做的事,以及开源网站与应用如何处理你的数据。',
      eyebrow: '隐私',
      title: '隐私政策',
      titleBand: '用大白话说',
      updated: '最后更新:2026 年 10 月',
      intro: 'BrushLLM 从设计之初就以隐私为先。本页用大白话说明哪些数据在哪些环节出现 — 并且这里的一切都可以验证:本网站与三款桌面应用全部在 GitHub 上开源。',
      sections: [
      {
        heading: '一句话版本',
        paragraphs: [
            '我们不收集分析数据、不使用追踪器、不投放广告。你的请求(prompt)仅被转发至上游模型提供商,绝不存储、出售或用于用户画像。桌面应用在本地运行,除你主动启用的 AI 功能外不发起任何网络请求。',
        ],
      },
      {
        heading: '本网站(brushllm.com)',
        paragraphs: [
            '营销网站完全静态:没有分析脚本、没有追踪像素、没有第三方字体、不设 Cookie、不做浏览器指纹。',
            '运行的 JavaScript 仅用于页面行为:语言偏好(只存在你浏览器的 localStorage)、语言切换器和 FAQ 折叠面板。不向任何地方发送任何数据。',
            '网站由 Cloudflare Pages 提供服务。与所有 CDN 一样,Cloudflare 会在边缘处理请求日志以保障安全;我们未启用 Cloudflare 分析,也不会收到可识别身份的访客数据。',
        ],
      },
      {
        heading: 'API 与控制台(api.brushllm.com)',
        paragraphs: [
            '使用 API 需要以邮箱注册账户。我们存储你的邮箱、余额与充值记录、以及你创建的 API 密钥 — 这是账户运转所需的最小集合。',
            '你的请求会被转发至对应的上游模型提供商(DeepSeek、Qwen、GLM、Kimi、MiniMax、OpenAI 等)进行处理。我们不存储请求与回复的内容,不出售,也不用于任何训练。',
            '我们保留聚合、匿名化的用量计数(每模型 token 数、每密钥请求数)——计费依赖这些数据。它们与请求内容不关联。',
            '支付由支付服务商处理;我们从不接触或存储完整卡号。',
        ],
      },
      {
        heading: '桌面应用(Image Studio、Video Studio、Player)',
        paragraphs: [
            '三款应用均为本地优先:你的图片、视频和文件绝不会离开你的设备,除非你明确要求。Video Studio 和 Player 的网络请求数为零。Image Studio 的 AI 功能仅在你使用时调用 BrushLLM API,且只处理该次操作提交的图片内容。',
            'API 密钥存储在操作系统的钥匙串中,绝不以明文文件保存。应用不含遥测、账户和广告。',
        ],
      },
      {
        heading: '你的选择',
        paragraphs: [
            '你可以随时发邮件至 hello@brushllm.com 申请删除账户及全部数据。删除后,邮箱、密钥、余额记录与用量计数一并移除。',
            '清除浏览器中 brushllm.com 的站点数据即可随时清除语言偏好。',
        ],
      },
      {
        heading: '政策变更',
        paragraphs: [
            '如本政策发生变化,我们会更新本页与上方日期。每一次变更的历史都在网站的开源仓库中公开可查。',
        ],
      },
      ],
      openSourceNote: '本页的一切均可验证:网站、控制台与三款应用全部在 github.com/BrushLLM 开源。',
    },
  },
};

export default zhCN;

