/**
 * 繁體中文。結構與 en.ts 完全一致（由 Dictionary 型別約束）。
 * 佔位符 {count}/{year}/{pct} 等保持原樣，渲染時替換。
 * 不翻譯：模型 id、URL、程式碼範例、價格、授權條款識別、產品名。
 */
import type { Dictionary } from '../index';

const zhTW: Dictionary = {
  site: {
    title: 'BrushLLM — 你的 AI，化繁為簡',
    description: '透過一個 API 存取強大的 AI 模型，並用免費的本機優先桌面應用程式進行創作。BrushLLM 是面向開發者與創作者的 AI 平台。',
    organizationDescription: 'BrushLLM 是面向開發者與創作者的 AI 平台，提供 AI 模型服務（一個 API 存取強大的 AI 模型）以及免費的本機優先桌面應用程式 —— Image Studio、Video Studio 與 Player。',
  },

  nav: {
    models: 'AI 模型',
    apps: '應用程式',
    pricing: '價格',
    docs: '文件',
    about: '關於',
  },

  header: {
    home: 'BrushLLM 首頁',
    mainNav: '主導覽',
    mobileNav: '行動導覽',
    logIn: '登入',
    getStarted: '開始使用',
    toggleMenu: '切換選單',
  },

  languageSwitcher: {
    label: '語言',
    system: 'Auto',
    systemTitle: '跟隨瀏覽器語言',
  },

  appPage: {
    openSourceTitle: '開源，誠實的軟體',
    openSourceText: '原始碼、問題回報與發布版本都在 GitHub 上{license}。無遙測、無帳號、無廣告。',
  },

  footer: {
    blurb: 'BrushLLM —— 面向開發者與創作者的 AI。一個 API 提供強大的 AI 模型，另有免費的本機優先桌面應用程式。我們保護你的隱私：無追蹤器、無分析、無廣告。',
    tagline: '一個 API · 三款免費應用 · 隱私優先',
    product: '產品',
    console: '控制台',
    company: '公司',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: '關於 BrushLLM',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: '由 OpenAI 相容閘道驅動',
  },

  common: {
    download: '下載',
    github: 'GitHub',
    tryIt: '試試看',
    featured: '推薦',
    free: '免費',
    copy: '複製',
    copied: '已複製！',
    copyFallback: '請按 ⌘C',
    learnMore: '了解更多',
    learnMoreArrow: '了解更多',
    downloadArrow: '下載',
    exploreAiModels: '瀏覽 AI 模型',
    exploreTheApps: '瀏覽應用程式',
    exploreTheApi: '了解 API',
    browseModels: '查看模型',
    openTheConsole: '開啟控制台',
    readTheDocs: '閱讀文件',
  },

  data: {
    capability: {
      chat: '對話',
      reasoning: '推理',
      tools: '工具呼叫',
      vision: '視覺',
      'long-context': '長上下文',
      image: '文生圖',
    },
    apps: {
      'image-studio': {
        tagline: '本機優先的 AI 影像工具箱',
        description: '免費的桌面影像工具箱。日常編輯 —— 轉檔、壓縮、裁切、浮水印、EXIF —— 全部在你的裝置上完成；背景移除、生成式填充等 AI 功能透過 BrushLLM 閘道呼叫，按張計費。',
        highlights: ['25+ 本機工具', 'AI 編輯走 BrushLLM API', '9 種語言', '零遙測'],
      },
      'video-studio': {
        tagline: '本機影片、音訊與字幕工具箱',
        description: '免費、離線的影片/音訊/字幕處理工具箱。轉檔、壓縮、合併、修剪、響度歸一化、修復字幕編碼 —— 100% 本機處理，零網路請求。',
        highlights: ['25+ 工具', '100% 本機處理', '9 種語言', '零網路請求'],
      },
      player: {
        tagline: '基於 mpv 的開源媒體播放器',
        description: '開源、跨平台的媒體播放器。mpv 能播的格式它都能播，還支援 WebDAV、SMB、FTP、Emby 與 Jellyfin 串流 —— 支援 HDR 輸出、硬體解碼與 9 種語言介面。',
        highlights: ['mpv 全格式', 'WebDAV · SMB · Emby · Jellyfin', 'HDR 與硬體解碼', '9 種語言'],
      },
    },
    models: {
      'gpt-5.2': 'ChatGPT 旗艦 —— 綜合推理、視覺與工具呼叫能力俱強。',
      'gpt-5.2-mini': '快速、低價的 ChatGPT 級距，適合大批量對話、分類與擷取。',
      'deepseek-chat': '旗艦非思考模型。快速、便宜，通用對話與工具呼叫表現出色。',
      'deepseek-reasoner': '帶可見思維鏈的推理模型，擅長數學、程式與難題。',
      'glm-4.6': 'Z.ai 旗艦。編碼、寫作與智慧體規劃能力強；200K 上下文。',
      'glm-4.5-air': '更輕量的 GLM，面向成本敏感的生產流量。',
      'glm-4.5-flash': 'GLM 家族的免費級距 —— 適合原型與個人專案。',
      'qwen3-max': '阿里巴巴最大的旗艦模型。面向高要求智慧體與對話負載的頂級品質。',
      'qwen3-235b-a22b': '開放權重 MoE 旗艦，支援混合思考模式。',
      'qwen3-32b': '稠密開放權重全能模型，兼具思考與非思考模式。',
      'qwen3-coder-plus': '程式碼特化模型，為智慧體編碼工具與倉庫級修改而生。',
      'qwen-vl-max': '視覺語言模型，擅長影像理解、OCR 與圖表推理。',
      'kimi-k2-0905': '兆參數 MoE，針對智慧體工具呼叫與長文件最佳化。',
      'kimi-k2-thinking': 'K2 的推理變體，交錯思考應對多步任務。',
      'MiniMax-M2': '高效的智慧體 MoE —— 預算有限時編碼智慧體的心頭好。',
      'gpt-image-2': 'OpenAI 的影像生成模型 —— 提示詞生成影像，指令遵循能力強。',
    },
  },

  pages: {
    home: {
      metaDescription: '透過一個 API 存取強大的 AI 模型，並用免費的本機優先桌面應用程式進行創作。',
      heroBadge: '面向開發者 · 面向創作者',
      heroTitle: '你的 AI，',
      heroTitleBand: '化繁為簡',
      heroSubtitle: '一個 API 存取強大的 AI 模型，搭配免費的本機優先應用盡情創作',
      heroCtaApi: '取得 API Key',
      heroCtaApps: '桌面應用程式',
      heroNote: '一個帳號，通享整個平台',

      platformEyebrow: '一個平台',
      platformTitle: '一個平台，為開發者與創作者而生',
      platformIntro: 'BrushLLM 是面向開發者與創作者的統一平台：透過{modelsLink}以統一 API 存取強大的 AI 模型，加上一族{appsLink} —— Image Studio 的 AI 功能經由同一 API 計費。',
      platformModelsLink: 'AI 模型服務',
      platformAppsLink: '免費的本機優先桌面應用程式',

      apiCardBadge: '面向開發者',
      apiCardTitle: 'AI 模型服務',
      apiCardSubtitle: '一個 API，存取強大的 AI 模型',
      apiCardDescription: '透過單一 API 存取強大的 AI 模型 —— {count} 個模型、{providers} 家供應商，統一接入、按量計費。',
      apiCardBullets: [
        '統一、OpenAI 相容的接入端點',
        '對話、推理、視覺與影像模型',
        '公開價格、按量付費、含免費級',
      ],
      apiCardChips: { models: '模型', pricing: '價格', docs: '文件', console: '控制台' },
      apiCardCta: '瀏覽 AI 模型',
      apiCardSecondary: '閱讀文件',

      appsCardBadge: '面向創作者 · 免費應用',
      appsCardTitle: '桌面應用程式',
      appsCardSubtitle: '日常工作所需的免費本機優先工具',
      appsCardDescription: 'Image Studio、Video Studio 與 Player —— macOS 和 Windows 上的開源桌面應用程式，零遙測。Image Studio 的 AI 功能運行於同一 API。',
      appsCardNote: '開源 · macOS · Windows',
      appsCardCta: '瀏覽應用程式',

      appsSectionEyebrow: '應用程式',
      appsSectionTitle: '免費本機優先的應用，',
      appsSectionTitleBand: '建構於一個平台',
      appsSectionFooter: '詳情、截圖與安裝包見{link}',
      appsSectionFooterLink: '應用程式頁面',

      benefitsEyebrow: '為什麼選擇我們的 API',
      benefitsTitle: '你需要的一切，',
      benefitsTitleBand: '多餘的一概沒有',
      benefitsSubtitle: '簡單、誠實的 AI 模型建構工具',
      benefits: [
        { title: '統一 API', description: '一個 OpenAI 相容端點通吃所有模型。保留你的 SDK —— 改一行就能上線' },
        { title: '豐富模型', description: '來自頂尖實驗室的對話、推理、視覺與影像模型 —— 一個目錄收錄 {count} 個模型' },
        { title: '簡單接入', description: '任何 OpenAI SDK 即插即用。複製、貼上、執行 —— cURL、Python、Node.js 或 Go 皆可' },
        { title: '按量計費', description: '用多少付多少 —— 文字按 token、影像按張，以美元計價。無訂閱，還有免費級起步' },
      ],

      statsEyebrow: '可用模型，一個 API',
      stats: { providers: 'AI 供應商', models: '模型，一個目錄', account: '帳號', countries: '服務國家/地區' },
      statsCompare: '我們的到手價在 7 個對標模型上低於 OpenRouter —— {link}',
      statsCompareLink: '查看比較',

      howEyebrow: '運作原理',
      howTitle: '三步拿到第一個 token',
      howSteps: [
        { title: '建立帳號', description: 'Email 註冊並在控制台取得 API key。起步無需信用卡' },
        { title: '把 SDK 指向 BrushLLM', description: '設定 base URL，繼續用你既有的 OpenAI SDK' },
        { title: '按 id 呼叫任意模型', description: '隨意切換模型 id —— 整個目錄只差一個 key' },
      ],
      howCodeTitle: '保留你的程式碼，只改一行',
      howCodeSubtitle: '能在 OpenAI API 上跑通的，就能在 BrushLLM 上跑通 —— 同一個請求，四種語言。',

      faqEyebrow: '常見問題',
      faqTitle: '問題，一一解答',
      faqDevelopers: '面向開發者',
      faqCreators: '面向創作者',
      developerFaqs: [
        {
          question: 'BrushLLM 是什麼？',
          answer: 'BrushLLM 是面向開發者與創作者的 AI 平台。AI 模型服務為開發者提供一個存取強大 AI 模型的 API；一族免費的本機優先桌面應用程式 —— Image Studio、Video Studio 與 Player —— 覆蓋創作者一側。一個帳號通享整個平台。',
        },
        {
          question: 'API 如何運作？',
          answer: '把任意 OpenAI SDK 指向 {apiBase} 並使用你的 BrushLLM key。對話補全、工具呼叫與串流輸出的行為都和你預期的一樣。',
        },
        {
          question: '有哪些 AI 模型可用？',
          answer: '目錄收錄來自 DeepSeek、Qwen、GLM、Kimi、MiniMax 與 OpenAI 的 {count} 個模型 —— 覆蓋對話、推理、視覺與文生圖。完整列表與即時價格見模型頁。',
        },
        {
          question: 'API 相容 OpenAI 嗎？',
          answer: '完全相容。能在 OpenAI API 上執行的就能在 BrushLLM 上執行 —— 包括 Cursor、Cline、OpenCode、aider 等編碼智慧體與 CLI。',
        },
        {
          question: '用量如何計費？',
          answer: '嚴格按量付費、以美元計價 —— 文字模型按 token、影像模型按張。無訂閱、無最低消費；多個模型提供免費級。',
        },
        {
          question: 'BrushLLM 適合新創與企業嗎？',
          answer: '適合。一個端點覆蓋全部供應商，按量計價隨業務伸縮，每個 key 自帶消費限額，承諾用量還可談批量折扣。',
        },
        {
          question: '你們如何保護我的隱私？',
          answer: '我們只收集帳號運轉所必需的資訊。無追蹤器、無分析、無廣告 —— 你的提示詞直通上游模型，絕不儲存、出售或用於剖析。',
        },
      ],
      creatorFaqs: [
        {
          question: 'Image Studio 是什麼？',
          answer: 'Image Studio 是 BrushLLM 免費的桌面影像工具箱。日常工具 —— 轉檔、壓縮、裁切、EXIF —— 本機離線執行；背景移除、生成式填充等 AI 功能經由 BrushLLM API 呼叫，按張計費。',
        },
        {
          question: 'Image Studio 能做什麼？',
          answer: '用免費的本機工具轉檔、壓縮、裁切與整理影像 —— 再用 AI 生成、移除背景、擦除物體、填充與重繪，按張計費。',
        },
        {
          question: '可以編輯現有圖片嗎？',
          answer: '可以。開啟任意圖片，選取區域或整張畫布，描述想要的修改 —— 內建局部重繪與背景移除。',
        },
        {
          question: '可以生成與變換影像嗎？',
          answer: '可以 —— 文生圖與風格重繪在同一工作區完成，由 BrushLLM API 上的 GPT-Image 驅動。',
        },
        {
          question: '在哪裡取得應用程式？',
          answer: '三款應用 —— Image Studio、Video Studio 與 Player —— 均已上線，可從 BrushLLM GitHub releases 下載，支援 macOS（Apple Silicon）與 Windows。',
        },
        {
          question: '應用真的免費嗎？',
          answer: '真的。所有本機工具免費，原始碼在 GitHub 上。只有 Image Studio 的 AI 功能使用按量計費的 BrushLLM API。',
        },
      ],

      ctaBuildTitle: '用 AI 建構',
      ctaBuildText: '一個 API，{count} 個模型 —— 統一接入、按量計費、OpenAI 相容',
      ctaCreateTitle: '用 AI 創作',
      ctaCreateText: '免費的本機優先桌面應用程式 —— 創作與編輯影像、影片與媒體，Image Studio 還帶 AI 超能力',
    },

    models: {
      metaDescription: '瀏覽 {count} 個 AI 模型 —— 從 DeepSeek、Qwen、GLM、Kimi 到 GPT 與文生圖 —— 含上下文視窗、能力與參考價格。',
      eyebrow: 'AI 模型',
      title: '{count} 個模型 · {providers} 家供應商 ·',
      titleBand: '一個端點',
      intro: '下列所有模型都可透過同一個 OpenAI 相容 API 與同一把 key 呼叫。價格為參考價 —— 文字模型按每 1M token 計、影像模型按張計，以美元結算{free}。',
      introFree: ' —— 其中 {count} 個模型免費',
      searchPlaceholder: '按名稱、id 或供應商搜尋…',
      searchLabel: '搜尋模型',
      providerLabel: '供應商',
      providerGroup: '按供應商篩選',
      capabilityLabel: '能力',
      capabilityGroup: '按能力篩選',
      all: '全部',
      showing: '顯示 {visible} / {total} 個模型',
      empty: '沒有模型符合目前篩選。請換個關鍵字、供應商、能力或情境試試。',
      footnote: '價格為參考目錄價、以美元計 —— 文字模型按每 1M token、影像模型按生成張數 —— 可能與控制台中設定的費率不同。上下文視窗為各上游模型支援的上限。接入細節見{docsLink}。',
      footnoteDocsLink: '文件',
      card: { type: '類型', perImage: '每張', output: '輸出', context: '上下文', input: '輸入 / 1M', outputPer1M: '輸出 / 1M' },
    },

    pricing: {
      metaDescription: 'BrushLLM 全部模型的簡單按量計費 —— 以美元計的參考 token 單價，多個免費級。',
      eyebrow: '價格',
      title: '用多少，付多少，',
      titleBand: '就這麼簡單',
      intro: '文字模型按 token 計費、影像模型按生成張數計費 —— 全部以美元結算，無訂閱、無最低消費。下表為參考目錄價；你的實際費率與餘額在控制台中查看。',
      highlights: [
        { title: '純按量付費', description: '以美元計的按 token 計費。無訂閱、無最低消費、不玩加價把戲 —— 儲值即用' },
        { title: '{count} 個免費模型', description: 'GLM-4.5 Flash 完全免費 —— 原型與個人專案的理想之選' },
        { title: '批量折扣', description: '用量可觀？聯絡我們，為你的負載商定承諾用量價格' },
      ],
      textModelsTitle: '文字模型 —— 按 token',
      imageModelsTitle: '影像模型 —— 按張',
      table: { model: '模型', provider: '供應商', context: '上下文', input: '輸入 / 1M', output: '輸出 / 1M', resolution: '解析度', pricePerImage: '每張價格' },
      footnote: '價格為參考目錄價、以美元計 —— 文字模型按每 1M token、影像模型按生成張數。實際計費在你的控制台進行，還可按 API key 追蹤消費。',
      compareEyebrow: '價格比較',
      compareTitle: '同樣的模型，',
      compareTitleBand: '更低的到手價',
      compareIntro: 'OpenRouter 購買點數時要收支付手續費 —— 卡付 5.5% —— 疊加在每個模型的目錄價之上。BrushLLM 公布的價格就是你支付的最終價格。',
      compareTable: {
        model: '模型',
        ours: 'BrushLLM 輸入/輸出每 1M',
        orList: 'OpenRouter 目錄價 輸入/輸出',
        orAllIn: 'OpenRouter 到手價* 輸入/輸出',
        youSave: '為你省下',
        upTo: '最高 {pct}%',
      },
      compareFootnote: '*到手價 = OpenRouter 目錄價加 5.5% 點數購買手續費（Stripe；加密貨幣為 5%）。節省比例比較 BrushLLM 最終價與 OpenRouter 到手價。OpenRouter 目錄價取自其公開 API（2026 年 9 月）—— 僅供參考；請在兩個平台核實目前費率。',
      ctaTitle: '查看餘額與費率',
      ctaText: '儲值、設定 key 限額並即時查看用量 —— 盡在控制台',
    },

    docs: {
      metaDescription: 'BrushLLM API 快速上手 —— 驗證、OpenAI 相容 base URL、四種語言的 SDK 範例與完整模型 id 清單。',
      eyebrow: '文件',
      title: '快速上手，',
      titleBand: '一筆帶過',
      intro: 'BrushLLM 是一個 OpenAI 相容閘道。如果你呼叫過 OpenAI API，就已經會用 BrushLLM —— 三十秒版本如下。',
      toc: { quickstart: '快速上手', firstRequest: '第一個請求', modelIds: '模型 id', errors: '錯誤碼' },
      tocLabel: '文件章節',
      steps: [
        {
          title: '取得 API key',
          description: '{createLink}或{signInLink}控制台，然後建立一個 key。key 形如 {code} —— 像對待密碼一樣對待它；交給工具使用時記得設定消費限額',
          createLink: '建立帳號',
          signInLink: '登入',
        },
        {
          title: '設定 base URL 與 key',
          description: '把任意 OpenAI SDK 指向我們的端點：',
          baseUrlLabel: 'base_url',
        },
        {
          title: '按 id 呼叫任意模型',
          description: '把下表中的任一 id 作為 {code} 傳入即可。就這麼簡單 —— 你已經在呼叫頂尖實驗室的模型了',
        },
      ],
      firstRequestTitle: '你的第一個請求',
      firstRequestText: '同一個請求、四種語言 —— 含串流輸出。複製、貼上、執行',
      modelIdsTitle: '模型 id',
      modelIdsText: '請使用這些精確 id（區分大小寫）。描述與能力見{modelsLink}。影像模型透過 {code} 呼叫，使用同一把 API key。',
      modelIdsModelsLink: '模型頁面',
      modelIdsTable: { id: '模型 id', name: '顯示名稱', context: '上下文' },
      errorsTitle: '錯誤碼',
      errorsTable: { status: '狀態碼', meaning: '含義', fix: '處理辦法' },
      errors: [
        { meaning: 'API key 無效或缺失', fix: '檢查你的 key 是否以 “brsh-” 開頭，且未在控制台中被撤銷。' },
        { meaning: '未知模型 id', fix: '使用與上表完全一致的 id —— 區分大小寫。' },
        { meaning: '觸發限流或超出限額', fix: '等待後帶退避重試，或在控制台調高該 key 的限額。' },
        { meaning: '餘額不足', fix: '在控制台為帳戶儲值後重試請求。' },
        { meaning: '上游供應商錯誤', fix: '幾秒後重試；若持續出現，換一個模型 id 或聯絡支援。' },
      ],
      helpTitle: '遇到問題？',
      helpText: 'key、限額與計費請查看控制台，或寄信至 {email}',
    },

    apps: {
      metaDescription: 'BrushLLM 桌面應用程式 —— Image Studio、Video Studio 與 Player。免費、本機優先、開源，支援 macOS 與 Windows。',
      eyebrow: '應用程式',
      title: '免費本機優先的應用，',
      titleBand: '開源',
      intro: '三款 macOS 與 Windows 桌面工具 —— 零遙測、零帳號、無廣告。Image Studio 的 AI 功能直連 BrushLLM API。',
      apiTitle: 'AI 功能背後的 API',
      apiText: 'Image Studio 的 AI 工具執行在 BrushLLM 閘道上 —— 一個 OpenAI 相容端點，公開的按張計價。',
    },

    studio: {
      metaDescription: '{tagline} —— {description}',
      badge: '桌面應用 · 免費 + AI 按量付費',
      intro: '每個本機工具都免費且完全在你的裝置上執行 —— Rust 引擎、零上傳。AI 功能呼叫驅動整個平台的同一個{apiLink}，按張、按{ratesLink}計費。',
      introApiLink: 'BrushLLM API',
      introRatesLink: '公布價格',
      outro: '瀏覽 AI 工具背後的影像模型',
      groups: [
        {
          title: '本機工具 —— 免費、離線、私密',
          items: [
            { title: '轉檔與壓縮', description: '8 種輸入格式轉 8 種輸出格式（含 AVIF 與 WebP），支援 Lanczos 重取樣與品質控制。' },
            { title: '縮放、裁切與旋轉', description: '批次友善的幾何工具，支援精確像素尺寸與比例預設。' },
            { title: '浮水印與標註', description: '文字與圖片浮水印、箭頭、方框和自由手繪標註，適合截圖與文件。' },
            { title: 'EXIF 檢視、編輯與清除', description: '檢視完整中繼資料、改寫欄位，或在分享前抹除位置與相機資訊。' },
            { title: '拼接、馬賽克與陰影', description: '把多張圖拼成網格、區域像素化、加圓角與投影。' },
            { title: '色彩工具', description: '亮度、對比與飽和度、顏色替換，以及放大檢色器。' },
          ],
        },
        {
          title: 'AI 工具 —— 由 BrushLLM 閘道驅動',
          items: [
            { title: '生成影像', description: '使用 GPT-Image 文生圖 —— 按生成張數計費，無訂閱。' },
            { title: '移除背景', description: '一鍵去背、邊緣乾淨，直接在桌面完成。' },
            { title: '移除物體與浮水印', description: '選取區域並描述要消失的內容 —— 局部重繪自動補全。' },
            { title: '生成式填充', description: '擴展、替換或交換內容，可選用參考圖（如人物替換）。' },
            { title: '風格重繪', description: '在保留構圖與主體的前提下，為影像換一種畫風。' },
            { title: '你的 key，你的限額', description: 'API key 存於系統鑰匙圈；每個 key 自帶控制台設定的消費限額。' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} —— {description}',
      badge: '桌面應用 · 免費',
      intro: '100% 本機處理 —— 你的媒體從不離開這台機器。FFmpeg 二進位固定版本並經 SHA-256 驗證，引擎帶暫停/恢復任務佇列，175 個自動化測試為工具箱把關。',
      groups: [
        {
          title: '影片',
          items: [
            { title: '轉檔', description: 'MP4、MKV、WebM、MOV 與 AVI，支援 H.264、H.265、VP9 或 AV1 編碼。' },
            { title: '壓縮', description: '基於品質（CRF）或目標位元率壓縮，即時估算體積。' },
            { title: '合併與修剪', description: '按順序拼接片段，幀級精度的入點/出點裁切。' },
            { title: '裁切、縮放與旋轉', description: '修正方向錯誤或帶黑邊的素材。' },
            { title: '變速', description: '0.25× 至 4× 播放速度，自動修正音調。' },
            { title: '幀、GIF 與 WebP', description: '抽取靜幀，或把片段做成動圖 GIF/WebP。' },
          ],
        },
        {
          title: '音訊',
          items: [
            { title: '擷取與轉檔', description: '擷取音訊為 MP3、M4A、FLAC、WAV、OGG 或 Opus。' },
            { title: '響度歸一化', description: 'EBU R128 歸一化，讓各檔案音量一致。' },
            { title: '音量與增益', description: '在可能的情況下不重編碼影片即可增減音量。' },
            { title: '靜音或替換', description: '移除音軌，或換上新的配樂。' },
            { title: '修剪', description: '以與影片相同的入點/出點精度裁切音訊。' },
          ],
        },
        {
          title: '字幕',
          items: [
            { title: '內嵌或燒錄', description: '掛載軟字幕軌，或把字幕硬燒進畫面。' },
            { title: '格式轉換', description: 'SRT、VTT、ASS、SSA 與 TTML —— 自研無相依字幕引擎。' },
            { title: '修復編碼', description: '自動把老式 GBK/Big5 檔案修復為乾淨的 UTF-8。' },
            { title: '時間軸平移', description: '批次把字幕整體提前或延後，與影片同步。' },
            { title: '擷取', description: '從任意容器中提取既有字幕軌。' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} —— {description}',
      badge: '桌面應用 · 開源',
      intro: 'macOS 版是圍繞 libmpv 的原生 Swift + SwiftUI 應用；Windows 版是同一 mpv 核心的 Tauri 重寫。零遙測，僅在你主動詢問時才檢查更新。',
      groups: [
        {
          title: '播放',
          items: [
            { title: '全格式', description: '基於 mpv：MKV、MP4、AVI、MOV、WebM、FLAC、MP3 及 mpv 支援的一切。' },
            { title: 'HDR 輸出', description: '在支援的顯示器上直通 PQ 與 EDR，硬體解碼可開關。' },
            { title: '光碟映像', description: '直接播放 ISO 藍光與 DVD 映像。' },
            { title: '播放控制', description: 'A-B 迴圈、播放速度、逐幀步進、章節與截圖。' },
            { title: '播放清單與歷史', description: '拖曳排序的播放清單、斷點續播、書籤。' },
            { title: '迷你視窗', description: '常駐置頂的浮動迷你播放器，適合多工。' },
          ],
        },
        {
          title: '串流',
          items: [
            { title: 'WebDAV 與 SMB', description: '瀏覽並串流 NAS 上的媒體 —— macOS 原生 SMB 掛載也支援。' },
            { title: 'FTP', description: '內建 FTP 用戶端，可瀏覽目錄並直接串流。' },
            { title: 'Emby 與 Jellyfin', description: '登入、瀏覽媒體庫並直連串流，無需轉碼。' },
            { title: 'HTTP 與 HLS', description: '播放連結與 m3u8/HLS 串流，可調預讀緩衝。' },
          ],
        },
        {
          title: '字幕與工具',
          items: [
            { title: '自動載入字幕', description: '匹配的外掛字幕自動載入；其餘按需載入。' },
            { title: '即時樣式', description: '字型、大小、顏色與位置 —— 邊看邊調。' },
            { title: '等化器與錄製', description: '音訊等化器，以及用於封存的串流錄製。' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'BrushLLM 同時為開發者與創作者打造 AI 產品 —— 存取強大 AI 模型的統一 API，以及影像、影片與媒體的免費本機優先桌面應用程式。',
      eyebrow: '關於',
      title: '為開發者與創作者',
      titleBand: '打造的 AI 產品',
      intro: 'BrushLLM 同時為開發者與創作者打造 AI 產品。一個平台、一個帳號 —— 每一側都信守同一個承諾：簡單的工具、公開的價格、與生俱來的隱私。',
      forDevelopers: '面向開發者。',
      forDevelopersText: '{link} —— 以統一 API 存取強大的 AI 模型。DeepSeek、Qwen、GLM、Kimi、MiniMax、OpenAI 等的 {count} 個模型，都在一個 OpenAI 相容端點之後。',
      forDevelopersLink: 'AI 模型服務',
      forCreators: '面向創作者。',
      forCreatorsText: '{link} —— macOS 與 Windows 上免費的本機優先桌面應用程式。Image Studio 把免費本機工具與同一 API 上的 AI 編輯相結合；三款應用全部開源、零遙測。',
      forCreatorsLink: 'Image Studio、Video Studio 與 Player',
      values: [
        { title: '向全世界開放', description: '前沿 AI 不該需要各開各的帳號、過本地支付的關卡、被區域鎖擋在門外 —— 也不該貴得離譜。一次註冊、以美元計價、任何國家/地區可用' },
        { title: '一個平台，一個帳號', description: '一個平台、一個帳號、一張帳單。如果接入我們比喝杯咖啡還久，那是我們的 bug，不是你的問題' },
        { title: '誠實定價', description: '公開的按 token 價格、沒有訂閱陷阱、免費級長期免費。每個請求的成本你永遠心裡有數' },
        { title: '隱私為本', description: '我們只收集帳號運轉必需的資訊。無追蹤器、無分析、無廣告 —— 你的提示詞絕不儲存、出售或用於剖析' },
      ],
      familyTitle: 'BrushLLM 家族',
      familyText: '一個平台、兩條路線 —— 面向開發者的統一 API，與面向創作者的免費本機優先桌面應用家族。',
      familyApiTitle: 'AI 模型服務',
      familyApiText: '一個 OpenAI 相容端點，{count} 個模型、{providers} 家供應商 —— 按 token 或按張付費。',
      contactTitle: '聯絡我們',
      contactText: '問題諮詢、批量定價，或希望我們新增某個模型 —— 每封信我們都會讀',
      contactCta: '開始使用',
    },

    notFound: {
      metaDescription: '無法找到該頁面。',
      code: '404 · 畫布之外',
      title: '這一頁被重新畫過了',
      text: '連結可能已過期，或頁面已經移動。不過模型們還留在你離開時的老地方。',
      backHome: '返回首頁',
      browseModels: '瀏覽模型',
    },
  },
};

export default zhTW;
