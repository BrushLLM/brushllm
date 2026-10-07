/**
 * English source dictionary — the shape of every other locale file.
 *
 * Structure:
 *   - `site`: site-wide identity (title, meta description, organization blurb)
 *   - `nav`, `header`, `footer`, `languageSwitcher`: global chrome
 *   - `common`: shared UI words (buttons, table labels, aria labels)
 *   - `pages.<page>`: one namespace per route
 *   - `data.*`: translations for display fields that live as data
 *     (model descriptions, app taglines, capability labels…)
 *
 * Never translate: model ids, URLs, code samples, prices, license ids,
 * provider brand names, app names (they are product names).
 */
const en = {
  site: {
    title: 'BrushLLM — Your AI, Without the Complexity',
    description:
      'Access powerful AI models through one API, and create with free local-first desktop apps. BrushLLM is an AI platform for developers and creators.',
    organizationDescription:
      'BrushLLM is an AI platform for developers and creators, offering AI Model Services (one API for powerful AI models) and free local-first desktop apps — Image Studio, Video Studio and Player.',
  },

  nav: {
    models: 'AI Models',
    apps: 'Apps',
    pricing: 'Pricing',
    docs: 'Docs',
    about: 'About',
  },

  header: {
    home: 'BrushLLM home',
    mainNav: 'Main',
    mobileNav: 'Mobile',
    logIn: 'Log In',
    getStarted: 'Get Started',
    toggleMenu: 'Toggle menu',
  },

  languageSwitcher: {
    label: 'Language',
    system: 'System',
    systemTitle: 'Follow your browser language',
  },

  appPage: {
    openSourceTitle: 'Open source, honest software',
    openSourceText: 'Source code, issues and releases live on GitHub{license}. No telemetry, no accounts, no ads.',
  },

  footer: {
    blurb:
      'BrushLLM — AI for developers and creators. Powerful AI models through one API, and free local-first desktop apps. We protect your privacy: no trackers, no analytics, no ads.',
    tagline: 'One API · Three free apps · Privacy-first',
    product: 'Product',
    console: 'Console',
    company: 'Company',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: 'About BrushLLM',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: 'Powered by an OpenAI-compatible gateway',
  },

  common: {
    download: 'Download',
    github: 'GitHub',
    tryIt: 'Try it',
    featured: 'Featured',
    free: 'Free',
    copy: 'Copy',
    copied: 'Copied!',
    copyFallback: 'Press ⌘C',
    learnMore: 'Learn more',
    learnMoreArrow: 'Learn more →',
    downloadArrow: 'Download ↗',
    exploreAiModels: 'Explore AI Models',
    exploreTheApps: 'Explore the apps',
    exploreTheApi: 'Explore the API',
    browseModels: 'Browse Models',
    openTheConsole: 'Open the console',
    readTheDocs: 'Read the docs',
  },

  // ── data-layer display strings ────────────────────────────────
  data: {
    capability: {
      chat: 'Chat',
      reasoning: 'Reasoning',
      tools: 'Tool Calling',
      vision: 'Vision',
      'long-context': 'Long Context',
      image: 'Text-to-Image',
    },
    apps: {
      'image-studio': {
        tagline: 'Local-first AI image toolbox',
        description:
          'A free desktop image toolbox. Everyday edits — convert, compress, crop, watermark, EXIF — run entirely on your device; AI features like background removal and generative fill route through the BrushLLM gateway, billed per image.',
        highlights: ['25+ local tools', 'AI edits via BrushLLM API', '9 languages', 'Zero telemetry'],
      },
      'video-studio': {
        tagline: 'Local video, audio & subtitle toolbox',
        description:
          'A free, offline toolbox for video, audio and subtitle processing. Convert, compress, merge, trim, normalize loudness, fix subtitle encodings — 100% local processing, zero network requests.',
        highlights: ['25+ tools', '100% local processing', '9 languages', 'Zero network requests'],
      },
      player: {
        tagline: 'Open media player built on mpv',
        description:
          'An open-source, cross-platform media player. Every format mpv plays, plus streaming from WebDAV, SMB, FTP, Emby and Jellyfin — with HDR output, hardware decoding and a 9-language UI.',
        highlights: ['Every format via mpv', 'WebDAV · SMB · Emby · Jellyfin', 'HDR & hardware decode', '9 languages'],
      },
    },
    models: {
      'gpt-5.2': 'ChatGPT’s flagship — strong general reasoning, vision and tool use.',
      'gpt-5.2-mini': 'Fast, cheap ChatGPT tier for high-volume chat, classification and extraction.',
      'deepseek-chat': 'Flagship non-thinking model. Fast, cheap, and excellent at general chat and tool use.',
      'deepseek-reasoner': 'Reasoning model with visible chain-of-thought for math, code, and hard problems.',
      'glm-4.6': 'Z.ai flagship. Strong coding, writing, and agentic planning; 200K context.',
      'glm-4.5-air': 'Lighter GLM tuned for cost-sensitive production traffic.',
      'glm-4.5-flash': 'Free tier of the GLM family — great for prototypes and hobby projects.',
      'qwen3-max': 'Alibaba’s largest flagship. Top-tier quality for demanding agentic and chat workloads.',
      'qwen3-235b-a22b': 'Open-weights MoE flagship with hybrid thinking mode.',
      'qwen3-32b': 'Dense open-weights all-rounder with thinking and non-thinking modes.',
      'qwen3-coder-plus': 'Code-specialized model built for agentic coding tools and repository-scale edits.',
      'qwen-vl-max': 'Vision-language model for image understanding, OCR, and chart reasoning.',
      'kimi-k2-0905': 'Trillion-parameter MoE tuned for agentic tool use and long documents.',
      'kimi-k2-thinking': 'Reasoning variant of K2 with interleaved thinking for multi-step tasks.',
      'MiniMax-M2': 'Efficient agentic MoE — a favorite for coding agents on a budget.',
      'gpt-image-2': 'OpenAI’s image generation model — prompt-to-image with strong instruction following.',
    },
  },

  // ── per-page namespaces ───────────────────────────────────────
  pages: {
    home: {
      metaDescription:
        'Access powerful AI models through one API, and create with free local-first desktop apps.',
      heroBadge: 'For developers · For creators',
      heroTitle: 'Your AI,',
      heroTitleBand: 'Without the Complexity',
      heroSubtitle: 'Access powerful AI models through one API, and create with free local-first apps',
      heroCtaApi: 'Get API Key',
      heroCtaApps: 'Desktop Apps',
      heroNote: 'One account for the whole platform',

      platformEyebrow: 'One platform',
      platformTitle: 'One platform, built for developers and creators',
      platformIntro:
        'BrushLLM is one platform for developers and creators: unified API access to powerful AI models through {modelsLink}, plus a family of {appsLink} — with Image Studio’s AI features billed through the same API.',
      platformModelsLink: 'AI Model Services',
      platformAppsLink: 'free local-first desktop apps',

      apiCardBadge: 'For developers',
      apiCardTitle: 'AI Model Services',
      apiCardSubtitle: 'One API for powerful AI models',
      apiCardDescription: 'Access powerful AI models through a single API — {count} models, {providers} providers, unified and usage-based.',
      apiCardBullets: [
        'Unified, OpenAI-compatible endpoint',
        'Chat, reasoning, vision & image models',
        'Published prices, pay-as-you-go, free tiers',
      ],
      apiCardChips: { models: 'Models', pricing: 'Pricing', docs: 'Docs', console: 'Console' },
      apiCardCta: 'Explore AI Models',
      apiCardSecondary: 'Read the docs',

      appsCardBadge: 'For creators · Free apps',
      appsCardTitle: 'Desktop Apps',
      appsCardSubtitle: 'Free local-first tools for everyday work',
      appsCardDescription:
        'Image Studio, Video Studio and Player — open-source desktop apps for macOS and Windows, zero telemetry. Image Studio’s AI features run on the same API.',
      appsCardNote: 'Open source · macOS · Windows',
      appsCardCta: 'Explore the apps',

      appsSectionEyebrow: 'Apps',
      appsSectionTitle: 'Free local-first apps,',
      appsSectionTitleBand: 'built on one platform',
      appsSectionFooter: 'Details, screenshots and installers on the {link}',
      appsSectionFooterLink: 'apps page →',

      benefitsEyebrow: 'Why our API',
      benefitsTitle: 'Everything you need,',
      benefitsTitleBand: 'nothing you don’t',
      benefitsSubtitle: 'Simple, honest tools for building with AI models',
      benefits: [
        { title: 'Unified API', description: 'One OpenAI-compatible endpoint for every model. Keep your SDK — change one line and ship' },
        { title: 'Multiple Models', description: 'Chat, reasoning, vision and image models from leading labs — {count} models in one catalog' },
        { title: 'Simple Integration', description: 'Drop-in with any OpenAI SDK. Copy, paste, and run — in cURL, Python, Node.js or Go' },
        { title: 'Usage-based Pricing', description: 'Pay for what you use — per token or per image, in USD. No subscriptions, and free tiers to start' },
      ],

      statsEyebrow: 'Available models, one API',
      stats: { providers: 'AI providers', models: 'Models, one catalog', account: 'Account', countries: 'Countries served' },
      statsCompare: 'Our all-in rates beat OpenRouter on 7 head-to-head models — {link}',
      statsCompareLink: 'see the comparison →',

      howEyebrow: 'How it works',
      howTitle: 'Three steps to your first token',
      howSteps: [
        { title: 'Create an account', description: 'Sign up with email and grab an API key from the console. No credit card to start' },
        { title: 'Point your SDK at BrushLLM', description: 'Set the base URL and keep the OpenAI SDK you already use' },
        { title: 'Call any model by id', description: 'Swap model ids freely — the whole catalog is one key away' },
      ],
      howCodeTitle: 'Keep your code, change one line',
      howCodeSubtitle: 'If it works with the OpenAI API, it works with BrushLLM — the same request in four languages.',

      faqEyebrow: 'FAQ',
      faqTitle: 'Questions, answered',
      faqDevelopers: 'For developers',
      faqCreators: 'For creators',
      developerFaqs: [
        {
          question: 'What is BrushLLM?',
          answer:
            'BrushLLM is an AI platform for developers and creators. AI Model Services gives developers one API for powerful AI models, and a family of free local-first desktop apps — Image Studio, Video Studio and Player — covers the creator side. One account covers the platform.',
        },
        {
          question: 'How does the API work?',
          answer: 'Point any OpenAI SDK at {apiBase} and use your BrushLLM key. Chat completions, tool calling, and streaming work the way you already expect.',
        },
        {
          question: 'Which AI models are available?',
          answer: 'The catalog spans {count} models from DeepSeek, Qwen, GLM, Kimi, MiniMax and OpenAI — chat, reasoning, vision and text-to-image. See the full list with live prices on the Models page.',
        },
        {
          question: 'Is the API OpenAI compatible?',
          answer: 'Yes, fully. If it works with the OpenAI API, it works with BrushLLM — including coding agents and CLIs like Cursor, Cline, OpenCode and aider.',
        },
        {
          question: 'How is usage billed?',
          answer: 'Strictly pay-as-you-go in USD — per token for text models, per image for image models. No subscriptions or minimums; several models have free tiers.',
        },
        {
          question: 'Is BrushLLM suitable for startups and businesses?',
          answer: 'Yes. One endpoint covers every provider, usage-based pricing scales with you, each key carries its own spend quota, and volume discounts are available for committed use.',
        },
        {
          question: 'How do you protect my privacy?',
          answer: 'We collect only what an account needs to function. No trackers, no analytics, no ads — your prompts are proxied straight to the upstream model and never stored, sold, or used to profile you.',
        },
      ],
      creatorFaqs: [
        {
          question: 'What is Image Studio?',
          answer:
            'Image Studio is BrushLLM’s free desktop image toolbox. Everyday tools — convert, compress, crop, EXIF — run locally and offline; AI features like background removal and generative fill run through the BrushLLM API, billed per image.',
        },
        {
          question: 'What can I do with Image Studio?',
          answer: 'Convert, compress, crop and clean up images with free local tools — then generate, remove backgrounds, erase objects, fill and restyle with AI, billed per image.',
        },
        {
          question: 'Can I edit existing images?',
          answer: 'Yes. Open any image, select a region or the whole canvas, and describe the change — inpainting and background removal are built in.',
        },
        {
          question: 'Can I generate and transform images?',
          answer: 'Yes — text-to-image generation and restyling run in the same workspace, powered by GPT-Image through the BrushLLM API.',
        },
        {
          question: 'Where do I get the apps?',
          answer: 'All three apps — Image Studio, Video Studio and Player — are available now from the BrushLLM GitHub releases, for macOS (Apple Silicon) and Windows.',
        },
        {
          question: 'Are the apps really free?',
          answer: 'Yes. All local tools are free and the source code is on GitHub. Only AI features in Image Studio use the pay-as-you-go BrushLLM API.',
        },
      ],

      ctaBuildTitle: 'Build with AI',
      ctaBuildText: 'One API for {count} models — unified, usage-based, OpenAI-compatible',
      ctaCreateTitle: 'Create with AI',
      ctaCreateText: 'Free local-first desktop apps — create and edit images, video and media, with AI superpowers in Image Studio',
    },

    models: {
      metaDescription: 'Browse {count} AI models — from DeepSeek, Qwen, GLM and Kimi to GPT and text-to-image — with context windows, capabilities and indicative prices.',
      eyebrow: 'AI models',
      title: '{count} models · {providers} providers ·',
      titleBand: 'One endpoint',
      intro:
        'Every model below is callable through the same OpenAI-compatible API and the same key. Prices are indicative — USD per 1M tokens for text models, USD per image for image models{free}.',
      introFree: ' — {count} models are free',
      searchPlaceholder: 'Search by name, id or provider…',
      searchLabel: 'Search models',
      providerLabel: 'Provider',
      providerGroup: 'Filter by provider',
      capabilityLabel: 'Capability',
      capabilityGroup: 'Filter by capability',
      all: 'All',
      showing: 'Showing {visible} of {total} models',
      empty: 'No models match your filters. Try a different keyword, provider, capability or use case.',
      footnote:
        'Prices are indicative list prices in USD — per 1M tokens for text models, per generated image for image models — and may differ from the rates configured in your console. Context windows are the maximum supported by each upstream model. See the {docsLink} for integration details.',
      footnoteDocsLink: 'Docs',
      card: { type: 'Type', perImage: 'Per image', output: 'Output', context: 'Context', input: 'Input / 1M', outputPer1M: 'Output / 1M' },
    },

    pricing: {
      metaDescription: 'Simple pay-as-you-go pricing for every model on BrushLLM — indicative per-token prices in USD, with several free tiers.',
      eyebrow: 'Pricing',
      title: 'Pay for what you use,',
      titleBand: 'that’s it',
      intro:
        'Text models are billed per token, image models per generated image — all in USD, no subscriptions or minimums. What you see below is the indicative catalog rate; your exact rates and balance live in the console.',
      highlights: [
        { title: 'Pay-as-you-go only', description: 'Per-token billing in USD. No subscriptions, no minimums, no markup games — top up and go' },
        { title: '{count} free model', description: 'GLM-4.5 Flash costs nothing — perfect for prototypes and hobby apps' },
        { title: 'Volume discounts', description: 'Running serious volume? Reach out and we’ll work out committed-use rates for your workload' },
      ],
      textModelsTitle: 'Text models — per token',
      imageModelsTitle: 'Image models — per image',
      table: { model: 'Model', provider: 'Provider', context: 'Context', input: 'Input / 1M', output: 'Output / 1M', resolution: 'Resolution', pricePerImage: 'Price / image' },
      footnote:
        'Prices are indicative list prices in USD — per 1M tokens for text models, per generated image for image models. Actual billing happens in your console, where you can also track spend per API key.',
      compareEyebrow: 'Price check',
      compareTitle: 'Same models,',
      compareTitleBand: 'smaller all-in bills',
      compareIntro:
        'OpenRouter adds a payment fee when you buy credits — 5.5% by card — on top of every model’s list price. BrushLLM’s published rate is the final rate you pay.',
      compareTable: {
        model: 'Model',
        ours: 'BrushLLM in / out per 1M',
        orList: 'OpenRouter list in / out',
        orAllIn: 'OpenRouter all-in* in / out',
        youSave: 'You save',
        upTo: 'up to {pct}%',
      },
      compareFootnote:
        '*All-in = OpenRouter list price plus the 5.5% credit-purchase fee (Stripe; crypto is 5%). Savings compare BrushLLM’s final rate with OpenRouter’s all-in rate. OpenRouter list prices via their public API, retrieved Sep 2026 — indicative; verify current rates on both platforms.',
      ctaTitle: 'Check your balance & rates',
      ctaText: 'Top up, set key quotas and watch usage in real time — all in the console',
    },

    docs: {
      metaDescription: 'Quickstart guide for the BrushLLM API — authentication, an OpenAI-compatible base URL, SDK examples in four languages, and the full list of model ids.',
      eyebrow: 'Documentation',
      title: 'Quickstart,',
      titleBand: 'brushstroke quick',
      intro: 'BrushLLM is an OpenAI-compatible gateway. If you’ve ever called the OpenAI API, you already know how to call BrushLLM — here’s the thirty-second version.',
      toc: { quickstart: 'Quickstart', firstRequest: 'First request', modelIds: 'Model ids', errors: 'Errors' },
      tocLabel: 'Docs sections',
      steps: [
        {
          title: 'Get an API key',
          description: '{createLink} or {signInLink} to the console, then create a key. Keys look like {code} — treat them like passwords and set a spend quota if you hand them to tools',
          createLink: 'Create an account',
          signInLink: 'sign in',
        },
        {
          title: 'Set the base URL and key',
          description: 'Point any OpenAI SDK at our endpoint:',
          baseUrlLabel: 'base_url',
        },
        {
          title: 'Call any model by id',
          description: 'Pass one of the ids from the table below as {code}. That’s it — you’re calling models from leading AI labs',
        },
      ],
      firstRequestTitle: 'Your first request',
      firstRequestText: 'The same request in four languages — including streaming. Copy, paste, run',
      modelIdsTitle: 'Model ids',
      modelIdsText: 'Use these exact ids (case-sensitive). See the {modelsLink} for descriptions and capabilities. Image models are called via {code} with the same API key.',
      modelIdsModelsLink: 'models page',
      modelIdsTable: { id: 'Model id', name: 'Display name', context: 'Context' },
      errorsTitle: 'Errors',
      errorsTable: { status: 'Status', meaning: 'Meaning', fix: 'What to do' },
      errors: [
        { meaning: 'Invalid or missing API key', fix: 'Check that your key starts with “brsh-” and hasn’t been revoked in the console.' },
        { meaning: 'Unknown model id', fix: 'Use an id exactly as listed in the table above — they are case-sensitive.' },
        { meaning: 'Rate limit or quota exceeded', fix: 'Wait and retry with backoff, or raise the quota for this key in the console.' },
        { meaning: 'Insufficient balance', fix: 'Top up your account in the console and retry the request.' },
        { meaning: 'Upstream provider error', fix: 'Retry after a few seconds; if it persists, switch to another model id or contact support.' },
      ],
      helpTitle: 'Stuck on something?',
      helpText: 'Check the console for keys, quotas and billing, or email us at {email}',
    },

    apps: {
      metaDescription: 'BrushLLM desktop apps — Image Studio, Video Studio and Player. Free, local-first, open source, for macOS and Windows.',
      eyebrow: 'Apps',
      title: 'Free local-first apps,',
      titleBand: 'open source',
      intro: 'Three desktop tools for macOS and Windows — zero telemetry, zero accounts, no ads. Image Studio’s AI features plug straight into the BrushLLM API.',
      apiTitle: 'The API behind the AI features',
      apiText: 'Image Studio’s AI tools run on the BrushLLM gateway — one OpenAI-compatible endpoint, published per-image rates.',
    },

    studio: {
      metaDescription: '{tagline} — {description}',
      badge: 'Desktop app · Free + pay-per-AI',
      intro:
        'Every local tool is free and runs entirely on your device — Rust engine, no uploads. AI features call the same {apiLink} that powers the rest of the platform, billed per image at {ratesLink}.',
      introApiLink: 'BrushLLM API',
      introRatesLink: 'published rates',
      outro: 'Browse the image models behind the AI tools →',
      groups: [
        {
          title: 'Local tools — free, offline, private',
          items: [
            { title: 'Convert & compress', description: '8 input formats to 8 output formats (including AVIF and WebP), with Lanczos resampling and quality control.' },
            { title: 'Resize, crop & rotate', description: 'Batch-friendly geometry tools with precise pixel dimensions and aspect presets.' },
            { title: 'Watermarks & annotation', description: 'Text and image watermarks, arrows, boxes and freehand annotation for screenshots and docs.' },
            { title: 'EXIF view, edit & strip', description: 'Inspect full metadata, rewrite fields, or scrub location and camera data before sharing.' },
            { title: 'Stitch, mosaic & shadows', description: 'Combine images into grids, pixelate regions, add rounded corners and drop shadows.' },
            { title: 'Color tools', description: 'Brightness, contrast and saturation, color replacement, and a magnifying color picker.' },
          ],
        },
        {
          title: 'AI tools — powered by the BrushLLM gateway',
          items: [
            { title: 'Generate images', description: 'Text-to-image with GPT-Image — billed per generated image, no subscription.' },
            { title: 'Remove backgrounds', description: 'One-click cutouts with clean edges, straight from your desktop.' },
            { title: 'Remove objects & watermarks', description: 'Select a region and describe what should disappear — inpainting fills it in.' },
            { title: 'Generative fill', description: 'Expand, replace or swap content with optional reference images (e.g. person swap).' },
            { title: 'Restyle', description: 'Repaint an image in a new style while keeping composition and identity.' },
            { title: 'Your key, your quota', description: 'API key lives in the OS keychain; each key carries its own spend quota from the console.' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} — {description}',
      badge: 'Desktop app · Free',
      intro:
        '100% local processing — your media never leaves the machine. FFmpeg binaries are pinned and SHA-256 verified, the engine runs a pause/resume job queue, and 175 automated tests keep the toolbox honest.',
      groups: [
        {
          title: 'Video',
          items: [
            { title: 'Convert', description: 'MP4, MKV, WebM, MOV and AVI with H.264, H.265, VP9 or AV1 codecs.' },
            { title: 'Compress', description: 'Quality-based (CRF) or target-bitrate compression with live size estimates.' },
            { title: 'Merge & trim', description: 'Join clips in order, cut segments with frame-accurate in/out points.' },
            { title: 'Crop, scale & rotate', description: 'Geometry fixes for wrongly-oriented or padded footage.' },
            { title: 'Speed change', description: '0.25× to 4× playback speed with audio pitch correction.' },
            { title: 'Frames, GIFs & WebP', description: 'Extract still frames, or turn clips into animated GIF/WebP.' },
          ],
        },
        {
          title: 'Audio',
          items: [
            { title: 'Extract & convert', description: 'Pull audio to MP3, M4A, FLAC, WAV, OGG or Opus.' },
            { title: 'Loudness normalization', description: 'EBU R128 normalization for consistent volume across files.' },
            { title: 'Volume & gain', description: 'Boost or attenuate without re-encoding the video where possible.' },
            { title: 'Mute or replace', description: 'Strip audio tracks, or swap in a new soundtrack.' },
            { title: 'Trim', description: 'Cut audio segments with the same in/out precision as video.' },
          ],
        },
        {
          title: 'Subtitles',
          items: [
            { title: 'Embed or burn', description: 'Attach soft subtitle tracks, or hard-burn them into the picture.' },
            { title: 'Convert formats', description: 'SRT, VTT, ASS, SSA and TTML — with a dependency-free subtitle engine.' },
            { title: 'Fix encodings', description: 'Repair legacy GBK/Big5 files into clean UTF-8 automatically.' },
            { title: 'Shift timing', description: 'Nudge subtitles earlier or later in bulk, synced to your video.' },
            { title: 'Extract', description: 'Pull existing subtitle tracks out of any container.' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} — {description}',
      badge: 'Desktop app · Open source',
      intro:
        'The macOS app is a native Swift + SwiftUI build around libmpv; the Windows app is a Tauri rewrite with the same mpv core. Zero telemetry, updates checked only when you ask.',
      groups: [
        {
          title: 'Playback',
          items: [
            { title: 'Every format', description: 'Built on mpv: MKV, MP4, AVI, MOV, WebM, FLAC, MP3 and everything else mpv plays.' },
            { title: 'HDR output', description: 'PQ and EDR passthrough on supported displays, with toggleable hardware decoding.' },
            { title: 'Disc images', description: 'Play ISO Blu-ray and DVD images directly.' },
            { title: 'Controls', description: 'A-B loop, playback speed, frame stepping, chapters and screenshots.' },
            { title: 'Playlist & history', description: 'Drag-to-reorder playlists, resume where you left off, bookmarks.' },
            { title: 'Mini window', description: 'A floating always-on-top mini player for multitasking.' },
          ],
        },
        {
          title: 'Streaming',
          items: [
            { title: 'WebDAV & SMB', description: 'Browse and stream from your NAS — native macOS SMB mounting included.' },
            { title: 'FTP', description: 'A built-in FTP client with directory browsing and direct streaming.' },
            { title: 'Emby & Jellyfin', description: 'Log in, browse libraries and direct-stream without transcoding.' },
            { title: 'HTTP & HLS', description: 'Play links and m3u8/HLS streams with adjustable read-ahead buffer.' },
          ],
        },
        {
          title: 'Subtitles & tools',
          items: [
            { title: 'Auto-loaded subtitles', description: 'Matching sidecar files load automatically; external ones load on demand.' },
            { title: 'Live styling', description: 'Font, size, color and position — restyled while you watch.' },
            { title: 'Equalizer & recording', description: 'Audio equalizer, plus stream recording for archival.' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'BrushLLM builds AI products for both developers and creators — a unified API for powerful AI models, and free local-first desktop apps for images, video and media.',
      eyebrow: 'About',
      title: 'AI products for',
      titleBand: 'developers and creators',
      intro:
        'BrushLLM builds AI products for both developers and creators. One platform, one account — and the same promise in each: simple tools, published prices, privacy by design.',
      forDevelopers: 'For developers.',
      forDevelopersText: '{link} — a unified API for accessing powerful AI models. {count} models from DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI and more, behind one OpenAI-compatible endpoint.',
      forDevelopersLink: 'AI Model Services',
      forCreators: 'For creators.',
      forCreatorsText: '{link} — free local-first desktop apps for macOS and Windows. Image Studio pairs free local tools with AI editing through the same API; all three are open source with zero telemetry.',
      forCreatorsLink: 'Image Studio, Video Studio and Player',
      values: [
        { title: 'Open to the world', description: 'Frontier AI shouldn’t need separate accounts, local payment hoops, or region locks — and shouldn’t cost a fortune either. One signup, in USD, from any country' },
        { title: 'One platform, one account', description: 'One platform, one account, one bill. If integrating us takes longer than a coffee break, that’s our bug, not your problem' },
        { title: 'Honest pricing', description: 'Published per-token rates, no subscription traps, and free tiers that stay free. You should always know what a request costs' },
        { title: 'Privacy by design', description: 'We collect only what your account needs to function. No trackers, no analytics, no ads — your prompts are never stored, sold, or used to profile you' },
      ],
      familyTitle: 'The BrushLLM family',
      familyText: 'One platform, two tracks — a unified API for developers, and a family of free local-first desktop apps for creators.',
      familyApiTitle: 'AI Model Services',
      familyApiText: 'One OpenAI-compatible endpoint for {count} models from {providers} providers — pay per token or per image.',
      contactTitle: 'Talk to us',
      contactText: 'Questions, volume pricing, or a model you’d like us to add — we read everything',
      contactCta: 'Get started',
    },

    notFound: {
      metaDescription: 'This page could not be found.',
      code: '404 · OFF THE CANVAS',
      title: 'This page got painted over',
      text: 'The link may be outdated or the page may have moved. The models, however, are exactly where you left them.',
      backHome: 'Back to home',
      browseModels: 'Browse models',
    },
  },
};

export default en;
