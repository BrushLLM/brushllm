/**
 * 한국어. en.ts와 구조가 완전히 동일함(Dictionary 타입으로 보장).
 * 플레이스홀더 {count}/{year}/{pct}는 그대로 두고 렌더링 시 교체됨.
 * 번역하지 않음: 모델 id, URL, 코드 예제, 가격, 라이선스 식별자, 제품명.
 */
import type { Dictionary } from './index';

const ko: Dictionary = {
  site: {
    title: 'BrushLLM — 복잡함은 걷어낸 당신의 AI',
    description: '하나의 API로 강력한 AI 모델에 접근하고, 무료 로컬 퍼스트 데스크톱 앱으로 창작하세요. BrushLLM은 개발자와 크리에이터를 위한 AI 플랫폼입니다.',
    organizationDescription: 'BrushLLM은 개발자와 크리에이터를 위한 AI 플랫폼입니다. AI 모델 서비스(강력한 AI 모델을 위한 단일 API)와 무료 로컬 퍼스트 데스크톱 앱 —— Image Studio, Video Studio, Player를 제공합니다.',
  },

  nav: {
    models: 'AI 모델',
    apps: '앱',
    pricing: '가격',
    docs: '문서',
    about: '소개',
  },

  header: {
    home: 'BrushLLM 홈',
    mainNav: '주요 탐색',
    mobileNav: '모바일 탐색',
    logIn: '로그인',
    getStarted: '시작하기',
    toggleMenu: '메뉴 전환',
  },

  languageSwitcher: {
    label: '언어',
    system: 'Auto',
    systemTitle: '브라우저 언어를 따릅니다',
  },

  appPage: {
    openSourceTitle: '오픈소스, 정직한 소프트웨어',
    openSourceText: '소스 코드, 이슈, 릴리스는 GitHub에 있습니다{license}. 텔레메트리 없음, 계정 없음, 광고 없음.',
  },

  footer: {
    blurb: 'BrushLLM —— 개발자와 크리에이터를 위한 AI. 하나의 API로 강력한 AI 모델을, 무료 로컬 퍼스트 데스크톱 앱까지. 프라이버시를 지킵니다: 추적기 없음, 분석 없음, 광고 없음.',
    tagline: '하나의 API · 세 개의 무료 앱 · 프라이버시 퍼스트',
    product: '제품',
    console: '콘솔',
    company: '회사',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: 'BrushLLM 소개',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: 'OpenAI 호환 게이트웨이 기반',
  },

  common: {
    skipToContent: '본문으로 건너뛰기',
    codeExamples: '코드 예제',
    swipeHint: '스와이프하여 모든 열 보기',
    download: '다운로드',
    github: 'GitHub',
    tryIt: '사용해 보기',
    featured: '추천',
    free: '무료',
    copy: '복사',
    copied: '복사됨!',
    copyFallback: '복사 실패',
    learnMore: '자세히 보기',
    learnMoreArrow: '자세히 보기',
    downloadArrow: '다운로드',
    exploreAiModels: 'AI 모델 둘러보기',
    exploreTheApps: '앱 둘러보기',
    exploreTheApi: 'API 둘러보기',
    browseModels: '모델 보기',
    openTheConsole: '콘솔 열기',
    readTheDocs: '문서 읽기',
  },

  data: {
    capability: {
      chat: '채팅',
      reasoning: '추론',
      tools: '도구 호출',
      vision: '비전',
      'long-context': '롱 컨텍스트',
      image: '텍스트→이미지',
    },
    apps: {
      'image-studio': {
        tagline: '로컬 퍼스트 AI 이미지 도구 상자',
        description: '무료 데스크톱 이미지 도구 상자. 변환·압축·자르기·워터마크·EXIF 같은 일상 편집은 전부 기기에서 완료되고, 배경 제거·생성형 채우기 같은 AI 기능은 BrushLLM 게이트웨이를 통해 장당 과금으로 이용합니다.',
        highlights: ['25+ 로컬 도구', 'AI 편집은 BrushLLM API 경유', '9개 언어', '텔레메트리 제로'],
      },
      'video-studio': {
        tagline: '로컬 비디오·오디오·자막 도구 상자',
        description: '무료 오프라인 비디오/오디오/자막 처리 도구 상자. 변환·압축·병합·트리밍·라우드니스 정규화·자막 인코딩 수정 —— 100% 로컬 처리, 네트워크 요청 없음.',
        highlights: ['25+ 도구', '100% 로컬 처리', '9개 언어', '네트워크 요청 제로'],
      },
      player: {
        tagline: 'mpv 기반 오픈소스 미디어 플레이어',
        description: '오픈소스 크로스플랫폼 미디어 플레이어. mpv가 재생하는 모든 형식에 더해 WebDAV·SMB·FTP·Emby·Jellyfin 스트리밍 지원 —— HDR 출력, 하드웨어 디코딩, 9개 언어 UI를 갖추었습니다.',
        highlights: ['mpv의 모든 형식', 'WebDAV · SMB · Emby · Jellyfin', 'HDR과 하드웨어 디코딩', '9개 언어'],
      },
    },
    models: {
      'gpt-5.2': 'ChatGPT 플래그십 —— 범용 추론·비전·도구 활용 모두 강력.',
      'gpt-5.2-mini': '빠르고 저렴한 ChatGPT 티어. 대량 채팅·분류·추출에 적합.',
      'deepseek-chat': '플래그십 비사고 모델. 빠르고 저렴하며 범용 채팅과 도구 활용에 탁월.',
      'deepseek-reasoner': '사고 과정이 보이는 추론 모델. 수학·코드·난제에 강함.',
      'glm-4.6': 'Z.ai 플래그십. 코딩·작문·에이전트 기획에 강하고 200K 컨텍스트.',
      'glm-4.5-air': '비용에 민감한 프로덕션 트래픽용 경량 GLM.',
      'glm-4.5-flash': 'GLM 계열의 무료 티어 —— 프로토타입과 개인 프로젝트에 적합.',
      'qwen3-max': 'Alibaba 최대 플래그십. 까다로운 에이전트·채팅 부하를 위한 최상위 품질.',
      'qwen3-235b-a22b': '하이브리드 사고 모드를 갖춘 오픈 웨이트 MoE 플래그십.',
      'qwen3-32b': '사고/비사고 모드를 모두 갖춘 밀도형 오픈 웨이트 만능 모델.',
      'qwen3-coder-plus': '에이전트 코딩 도구와 리포지토리 규모 편집을 위한 코드 특화 모델.',
      'qwen-vl-max': '이미지 이해·OCR·차트 추론에 강한 비전-언어 모델.',
      'kimi-k2-0905': '에이전트 도구 활용과 긴 문서에 최적화된 조 파라미터 MoE.',
      'kimi-k2-thinking': '다단계 작업을 교차 사고로 푸는 K2의 추론 변형.',
      'MiniMax-M2': '효율적인 에이전트 MoE —— 예산 중심 코딩 에이전트의 단골.',
      'gpt-image-2': 'OpenAI의 이미지 생성 모델 —— 프롬프트→이미지, 지시 따르기가 강력.',
    },
  },

  pages: {
    home: {
      metaDescription: '하나의 API로 강력한 AI 모델에 접근하고, 무료 로컬 퍼스트 데스크톱 앱으로 창작하세요.',
      heroBadge: '개발자에게 · 크리에이터에게',
      heroTitle: '복잡함은 걷어낸,',
      heroTitleBand: '당신의 AI',
      heroSubtitle: '하나의 API로 강력한 AI 모델에 접근하고, 무료 로컬 퍼스트 앱으로 자유롭게 창작',
      heroCtaApi: 'API 키 받기',
      heroCtaApps: '데스크톱 앱',
      heroNote: '계정 하나면 플랫폼 전체를',

      platformEyebrow: '하나의 플랫폼',
      platformTitle: '개발자와 크리에이터를 위한 단일 플랫폼',
      platformIntro: 'BrushLLM은 개발자와 크리에이터를 위한 통합 플랫폼입니다. {modelsLink}를 통한 강력한 AI 모델의 통일 API 접근에, {appsLink} 모음을 더해 —— Image Studio의 AI 기능은 같은 API로 과금됩니다.',
      platformModelsLink: 'AI 모델 서비스',
      platformAppsLink: '무료 로컬 퍼스트 데스크톱 앱',

      apiCardBadge: '개발자에게',
      apiCardTitle: 'AI 모델 서비스',
      apiCardSubtitle: '강력한 AI 모델을 위한 단일 API',
      apiCardDescription: '단일 API로 강력한 AI 모델에 —— 모델 {count}개, 공급자 {providers}곳, 통일·사용량 기반 과금.',
      apiCardBullets: [
        '통일된 OpenAI 호환 엔드포인트',
        '채팅·추론·비전·이미지 모델',
        '공개 가격, 종량제, 무료 티어 포함',
      ],
      apiCardChips: { models: '모델', pricing: '가격', docs: '문서', console: '콘솔' },
      apiCardCta: 'AI 모델 둘러보기',
      apiCardSecondary: '문서 읽기',

      appsCardBadge: '크리리에이터에게 · 무료 앱',
      appsCardTitle: '데스크톱 앱',
      appsCardSubtitle: '일상 작업을 위한 무료 로컬 퍼스트 도구',
      appsCardDescription: 'Image Studio, Video Studio, Player —— macOS와 Windows용 오픈소스 데스크톱 앱, 텔레메트리 없음. Image Studio의 AI 기능은 같은 API에서 동작합니다.',
      appsCardNote: '오픈소스 · macOS · Windows',
      appsCardCta: '앱 둘러보기',

      appsSectionEyebrow: '앱',
      appsSectionTitle: '무료 로컬 퍼스트 앱,',
      appsSectionTitleBand: '하나의 플랫폼 위에',
      appsSectionFooter: '상세 정보·스크린샷·설치 파일은 {link}',
      appsSectionFooterLink: '앱 페이지',

      benefitsEyebrow: '우리 API를 선택해야 하는 이유',
      benefitsTitle: '필요한 모든 것,',
      benefitsTitleBand: '불필요한 건 없이',
      benefitsSubtitle: 'AI 모델로 만들기 위한, 간단하고 정직한 도구',
      benefits: [
        { title: '통일 API', description: '모든 모델에 OpenAI 호환 엔드포인트 하나. SDK는 그대로 —— 한 줄 바꿔 배포' },
        { title: '다양한 모델', description: '주요 연구소의 채팅·추론·비전·이미지 모델 —— 하나의 카탈로그에 {count}개' },
        { title: '간단한 통합', description: '어떤 OpenAI SDK든 바로 사용. 복사·붙여넣기·실행 —— cURL, Python, Node.js, Go 지원' },
        { title: '종량제 과금', description: '쓰는 만큼만 —— 텍스트는 토큰당, 이미지는 장당, USD. 구독 없이 무료 티어로 시작' },
      ],

      statsEyebrow: '사용 가능한 모델, 하나의 API',
      stats: { providers: 'AI 공급자', models: '모델, 단일 카탈로그', account: '계정', countries: '서비스 국가' },
      statsCompare: '우리의 최종 가격은 7개 정면 비교 모델에서 OpenRouter보다 낮습니다 —— {link}',
      statsCompareLink: '비교 보기',

      howEyebrow: '작동 방식',
      howTitle: '첫 토큰까지 세 단계',
      howSteps: [
        { title: '계정 만들기', description: '이메일로 가입하고 콘솔에서 API 키를 받으세요. 시작에 신용카드 불필요' },
        { title: 'SDK를 BrushLLM로', description: 'base URL만 설정하세요. 지금 쓰는 OpenAI SDK를 그대로' },
        { title: 'id로 아무 모델 호출', description: '모델 id는 자유롭게 교체 —— 카탈로그 전체가 키 하나 너머에' },
      ],
      howCodeTitle: '코드는 그대로, 한 줄만 바꾸세요',
      howCodeSubtitle: 'OpenAI API에서 동작하는 것은 BrushLLM에서도 동작합니다 —— 같은 요청을 네 언어로.',

      faqEyebrow: 'FAQ',
      faqTitle: '질문, 하나씩 답합니다',
      faqDevelopers: '개발자에게',
      faqCreators: '크리에이터에게',
      developerFaqs: [
        {
          question: 'BrushLLM이 무엇인가요?',
          answer: 'BrushLLM은 개발자와 크리에이터를 위한 AI 플랫폼입니다. AI 모델 서비스가 개발자에게 강력한 AI 모델을 위한 단일 API를 제공하고, 무료 로컬 퍼스트 데스크톱 앱 —— Image Studio, Video Studio, Player —— 이 크리에이터 쪽을 담당합니다. 계정 하나면 플랫폼 전체입니다.',
        },
        {
          question: 'API는 어떻게 동작하나요?',
          answer: '아무 OpenAI SDK를 {apiBase}로 향하게 하고 BrushLLM 키를 쓰면 됩니다. 채팅 완성, 도구 호출, 스트리밍이 예상대로 동작합니다.',
        },
        {
          question: '어떤 AI 모델을 쓸 수 있나요?',
          answer: 'DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI 등 {count}개 모델 —— 채팅·추론·비전·텍스트→이미지를 아우릅니다. 전체 목록과 실시간 가격은 모델 페이지에서.',
        },
        {
          question: 'API는 OpenAI 호환인가요?',
          answer: '완전히 호환됩니다. OpenAI API에서 동작하는 것은 BrushLLM에서도 동작합니다 —— Cursor, Cline, OpenCode, aider 같은 코딩 에이전트와 CLI 포함.',
        },
        {
          question: '사용량은 어떻게 과금되나요?',
          answer: '엄격한 종량제·USD —— 텍스트 모델은 토큰당, 이미지 모델은 장당. 구독이나 최소 금액 없고, 여러 모델에 무료 티어가 있습니다.',
        },
        {
          question: 'BrushLLM은 스타트업과 기업에 적합한가요?',
          answer: '적합합니다. 엔드포인트 하나가 모든 공급자를 커버하고, 종량 가격은 성장에 맞춰 확장되며, 키마다 지출 한도가 있고, 확정 사용량에는 볼륨 할인도 협의 가능합니다.',
        },
        {
          question: '프라이버시는 어떻게 보호되나요?',
          answer: '계정 운영에 필요한 정보만 수집합니다. 추적기·분석·광고 없음 —— 프롬프트는 상류 모델로 바로 전달되며 저장·판매·프로파일링에 쓰이지 않습니다.',
        },
      ],
      creatorFaqs: [
        {
          question: 'Image Studio가 무엇인가요?',
          answer: 'Image Studio는 BrushLLM의 무료 데스크톱 이미지 도구 상자입니다. 변환·압축·자르기·EXIF 같은 일상 도구는 로컬·오프라인으로 실행되고, 배경 제거·생성형 채우기 같은 AI 기능은 BrushLLM API를 통해 장당 과금으로 동작합니다.',
        },
        {
          question: 'Image Studio로 무엇을 할 수 있나요?',
          answer: '무료 로컬 도구로 변환·압축·자르기·정리를 하고 —— 그다음 AI로 생성·배경 제거·물체 지우기·채우기·스타일 변경을 장당 과금으로.',
        },
        {
          question: '기존 이미지를 편집할 수 있나요?',
          answer: '네. 아무 이미지를 열고 영역이나 캔버스 전체를 선택한 뒤 원하는 변경을 설명하면 됩니다 —— 인페인팅과 배경 제거가 내장되어 있습니다.',
        },
        {
          question: '이미지 생성과 변환이 가능한가요?',
          answer: '네 —— 텍스트→이미지 생성과 스타일 변환을 같은 작업 공간에서 할 수 있습니다. BrushLLM API의 GPT-Image가 구동합니다.',
        },
        {
          question: '앱은 어디서 받나요?',
          answer: '세 앱 —— Image Studio, Video Studio, Player —— 모두 BrushLLM GitHub releases에서 지금 받을 수 있습니다. macOS(Apple Silicon)와 Windows 지원.',
        },
        {
          question: '앱이 정말 무료인가요?',
          answer: '네. 모든 로컬 도구가 무료이고 소스 코드는 GitHub에 있습니다. 종량제 BrushLLM API를 쓰는 것은 Image Studio의 AI 기능뿐입니다.',
        },
      ],

      ctaBuildTitle: 'AI로 빌드하기',
      ctaBuildText: '하나의 API에 모델 {count}개 —— 통일, 종량제, OpenAI 호환',
      ctaCreateTitle: 'AI로 창작하기',
      ctaCreateText: '무료 로컬 퍼스트 데스크톱 앱 —— 이미지·비디오·미디어를 만들고 편집하고, Image Studio엔 AI 슈퍼파워까지',
    },

    models: {
      metaDescription: 'AI 모델 {count}개 둘러보기 —— DeepSeek, Qwen, GLM, Kimi부터 GPT와 텍스트→이미지까지. 컨텍스트 창·기능·참고 가격 포함.',
      eyebrow: 'AI 모델',
      title: '모델 {count}개 · 공급자 {providers}곳 ·',
      titleBand: '엔드포인트 하나',
      intro: '아래 모든 모델은 같은 OpenAI 호환 API와 같은 키로 호출할 수 있습니다. 가격은 참고용 —— 텍스트 모델은 1M 토큰당, 이미지 모델은 장당, USD.',
      introFree: ' —— 그중 {count}개 무료',
      searchPlaceholder: '이름·id·공급자로 검색…',
      searchLabel: '모델 검색',
      providerLabel: '공급자',
      providerGroup: '공급자별 필터',
      capabilityLabel: '기능',
      capabilityGroup: '기능별 필터',
      all: '전체',
      showing: '모델 {total}개 중 {visible}개 표시',
      empty: '필터에 맞는 모델이 없습니다. 다른 키워드·공급자·기능·용도로 시도해 보세요.',
      footnote: '가격은 참고 정가(USD)입니다 —— 텍스트 모델은 1M 토큰당, 이미지 모델은 생성 장당 —— 콘솔에 설정된 요금과 다를 수 있습니다. 컨텍스트 창은 각 상류 모델의 최대값입니다. 통합 세부사항은 {docsLink}를 참고하세요.',
      footnoteDocsLink: '문서',
      card: { type: '유형', perImage: '장당', output: '출력', context: '컨텍스트', input: '입력 / 1M', outputPer1M: '출력 / 1M' },
    },

    pricing: {
      metaDescription: 'BrushLLM 모든 모델의 간단한 종량제 과금 —— USD 기준 참고 토큰 단가와 여러 무료 티어.',
      eyebrow: '가격',
      title: '쓴 만큼만 지불,',
      titleBand: '그게 전부',
      intro: '텍스트 모델은 토큰당, 이미지 모델은 생성 장당 과금 —— 전부 USD, 구독·최소 금액 없음. 아래는 참고 카탈로그 요금이며 실제 요금과 잔액은 콘솔에서 확인하세요.',
      highlights: [
        { title: '순수 종량제', description: 'USD 토큰당 과금. 구독 없음, 최소 금액 없음, 가격 상술 없음 —— 충전하고 바로 사용' },
        { title: '무료 모델 {count}개', description: 'GLM-4.5 Flash는 완전 무료 —— 프로토타입과 취미 앱에 딱' },
        { title: '볼륨 할인', description: '본격적인 사용량이 있나요? 연락 주시면 워크로드에 맞춘 확정 사용 요금을 협의합니다' },
      ],
      textModelsTitle: '텍스트 모델 —— 토큰당',
      imageModelsTitle: '이미지 모델 —— 장당',
      table: { model: '모델', provider: '공급자', context: '컨텍스트', input: '입력 / 1M', output: '출력 / 1M', resolution: '해상도', pricePerImage: '장당 가격' },
      footnote: '가격은 참고 정가(USD)입니다 —— 텍스트 모델은 1M 토큰당, 이미지 모델은 생성 장당. 실제 과금은 콘솔에서 이뤄지며 API 키별 지출도 추적할 수 있습니다.',
      compareEyebrow: '가격 확인',
      compareTitle: '같은 모델,',
      compareTitleBand: '더 작은 최종 청구서',
      compareIntro: 'OpenRouter는 크레딧 구매 시 결제 수수료 —— 카드 5.5% —— 를 모든 모델 정가 위에 얹습니다. BrushLLM의 공개 가격이 당신이 내는 최종 가격입니다.',
      compareTable: {
        model: '모델',
        ours: '입/출력 1M당',
        orList: '정가 입/출력',
        orAllIn: '최종가* 입/출력',
        youSave: '절약액',
        upTo: '최대 {pct}%',
      },
      compareFootnote: '*최종가 = OpenRouter 정가 + 5.5% 크레딧 구매 수수료(Stripe; 암호화폐는 5%). 절약액은 BrushLLM 최종 요금과 OpenRouter 최종 요금의 비교입니다. OpenRouter 정가는 공개 API에서 2026년 9월 조회 —— 참고용이며, 최신 요금은 양 플랫폼에서 확인하세요.',
      ctaTitle: '잔액과 요금 확인',
      ctaText: '충전, 키별 한도 설정, 실시간 사용량 —— 모두 콘솔에서',
    },

    docs: {
      metaDescription: 'BrushLLM API 퀵스타트 —— 인증, OpenAI 호환 base URL, 네 언어 SDK 예제, 모델 id 전체 목록.',
      eyebrow: '문서',
      title: '퀵스타트,',
      titleBand: '한 붓에',
      intro: 'BrushLLM은 OpenAI 호환 게이트웨이입니다. OpenAI API를 호출해 본 적이 있다면 BrushLLM 사용법은 이미 아는 셈 —— 30초 버전입니다.',
      toc: { quickstart: '퀵스타트', firstRequest: '첫 요청', modelIds: '모델 id', errors: '오류' },
      tocLabel: '문서 섹션',
      steps: [
        {
          title: 'API 키 받기',
          description: '{createLink}하거나 콘솔에 {signInLink}한 뒤 키를 만드세요. 키는 {code} 형태입니다 —— 비밀번호처럼 다루고, 도구에 넘길 땐 지출 한도를 설정하세요',
          createLink: '계정 만들기',
          signInLink: '로그인',
        },
        {
          title: 'base URL과 키 설정',
          description: '아무 OpenAI SDK나 당사 엔드포인트로 향하게 하세요:',
          baseUrlLabel: 'base_url',
        },
        {
          title: 'id로 아무 모델 호출',
          description: '아래 표의 id 중 하나를 {code}로 전달하면 됩니다. 끝 —— 주요 연구소의 모델을 호출하고 있는 겁니다',
        },
      ],
      firstRequestTitle: '당신의 첫 요청',
      firstRequestText: '같은 요청을 네 언어로 —— 스트리밍 포함. 복사·붙여넣기·실행',
      modelIdsTitle: '모델 id',
      modelIdsText: '이 id를 정확히 사용하세요(대소문자 구분). 설명과 기능은 {modelsLink}에서. 이미지 모델은 {code}로 호출하며 같은 API 키를 씁니다.',
      modelIdsModelsLink: '모델 페이지',
      modelIdsTable: { id: '모델 id', name: '표시 이름', context: '컨텍스트' },
      errorsTitle: '오류',
      errorsTable: { status: '상태', meaning: '의미', fix: '해결 방법' },
      errors: [
        { meaning: 'API 키가 유효하지 않거나 없음', fix: '키가 “brsh-”로 시작하고 콘솔에서 폐기되지 않았는지 확인하세요.' },
        { meaning: '알 수 없는 모델 id', fix: '위 표와 정확히 같은 id를 사용하세요 —— 대소문자를 구분합니다.' },
        { meaning: '속도 제한 또는 한도 초과', fix: '기다렸다가 백오프와 함께 재시도하거나, 콘솔에서 이 키의 한도를 올리세요.' },
        { meaning: '잔액 부족', fix: '콘솔에서 계정을 충전한 뒤 요청을 재시도하세요.' },
        { meaning: '상류 공급자 오류', fix: '몇 초 후 재시도하세요. 지속되면 다른 모델 id로 바꾸거나 지원팀에 연락하세요.' },
      ],
      helpTitle: '막히셨나요?',
      helpText: '키·한도·결제는 콘솔에서 확인하거나 {email}(으)로 메일 주세요',
    },

    apps: {
      metaDescription: 'BrushLLM 데스크톱 앱 —— Image Studio, Video Studio, Player. 무료, 로컬 퍼스트, 오픈소스, macOS와 Windows 지원.',
      eyebrow: '앱',
      title: '무료 로컬 퍼스트 앱,',
      titleBand: '오픈소스',
      intro: 'macOS와 Windows용 데스크톱 도구 세 가지 —— 텔레메트리 없음, 계정 없음, 광고 없음. Image Studio의 AI 기능은 BrushLLM API에 바로 연결됩니다.',
      apiTitle: 'AI 기능을 뒷받침하는 API',
      apiText: 'Image Studio의 AI 도구는 BrushLLM 게이트웨이에서 동작 —— OpenAI 호환 엔드포인트 하나, 공개된 장당 요금.',
    },

    studio: {
      metaDescription: '{tagline} —— {description}',
      badge: '데스크톱 앱 · 무료 + AI는 종량제',
      intro: '모든 로컬 도구는 무료이며 완전히 기기에서 동작합니다 —— Rust 엔진, 업로드 없음. AI 기능은 플랫폼 전체를 구동하는 같은 {apiLink}를 호출하며, {ratesLink}에 따라 장당 과금됩니다.',
      introApiLink: 'BrushLLM API',
      introRatesLink: '공개 요금',
      outro: 'AI 도구 뒤의 이미지 모델 둘러보기',
      groups: [
        {
          title: '로컬 도구 —— 무료, 오프라인, 프라이빗',
          items: [
            { title: '변환과 압축', description: '입력 8종을 출력 8종으로(AVIF·WebP 포함). Lanczos 리샘플링과 품질 제어 지원.' },
            { title: '크기 조절·자르기·회전', description: '배치 친화적인 기하 도구. 정확한 픽셀 크기와 비율 프리셋 지원.' },
            { title: '워터마크와 주석', description: '텍스트·이미지 워터마크, 화살표·상자·자유 주석. 스크린샷과 문서에.' },
            { title: 'EXIF 보기·편집·제거', description: '전체 메타데이터 확인, 필드 수정, 공유 전 위치·카메라 정보 제거.' },
            { title: '합성·모자이크·그림자', description: '여러 이미지를 그리드로 합치고, 영역을 모자이크하고, 라운드 코너와 그림자를 더합니다.' },
            { title: '색상 도구', description: '밝기·대비·채도, 색 교체, 확대 스포이드.' },
          ],
        },
        {
          title: 'AI 도구 —— BrushLLM 게이트웨이 구동',
          items: [
            { title: '이미지 생성', description: 'GPT-Image로 텍스트→이미지 —— 생성 장당 과금, 구독 없음.' },
            { title: '배경 제거', description: '한 번 클릭으로 깔끔한 가장자리의 누끼. 바로 데스크톱에서.' },
            { title: '물체·워터마크 제거', description: '영역을 선택하고 사라질 내용을 설명하세요 —— 인페인팅이 채웁니다.' },
            { title: '생성형 채우기', description: '확장·교체·스왑. 참조 이미지(인물 스왑 등)도 선택적으로.' },
            { title: '스타일 변경', description: '구도와 정체성을 유지하며 새로운 화풍으로 다시 그립니다.' },
            { title: '당신의 키, 당신의 한도', description: 'API 키는 OS 키체인에 보관되고, 각 키엔 콘솔에서 설정한 지출 한도가 따릅니다.' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} —— {description}',
      badge: '데스크톱 앱 · 무료',
      intro: '100% 로컬 처리 —— 미디어는 이 기기를 떠나지 않습니다. FFmpeg 바이너리는 버전 고정 및 SHA-256 검증, 엔진은 일시정지/재개 가능한 작업 큐를 갖추고, 175개 자동화 테스트가 도구 상자를 지킵니다.',
      groups: [
        {
          title: '비디오',
          items: [
            { title: '변환', description: 'MP4, MKV, WebM, MOV, AVI 지원. H.264, H.265, VP9, AV1 코덱 선택 가능.' },
            { title: '압축', description: '품질 기반(CRF) 또는 목표 비트레이트 압축, 크기 실시간 추정.' },
            { title: '병합과 트리밍', description: '클립을 순서대로 잇고, 프레임 단위 IN/OUT 지점으로 자릅니다.' },
            { title: '자르기·확대·회전', description: '방향이 틀렸거나 여백이 있는 영상의 기하 보정.' },
            { title: '속도 변경', description: '0.25×~4× 재생 속도, 음정 보정 포함.' },
            { title: '프레임·GIF·WebP', description: '정지 프레임 추출 또는 클립을 움직이는 GIF/WebP로.' },
          ],
        },
        {
          title: '오디오',
          items: [
            { title: '추출과 변환', description: '오디오를 MP3, M4A, FLAC, WAV, OGG, Opus로 추출.' },
            { title: '라우드니스 정규화', description: 'EBU R128 정규화로 파일 간 음량을 일관되게.' },
            { title: '음량과 게인', description: '가능한 경우 비디오 재인코딩 없이 음량을 조절합니다.' },
            { title: '무음 또는 교체', description: '오디오 트랙 제거 또는 새 사운드트랙으로 교체.' },
            { title: '트리밍', description: '비디오와 같은 IN/OUT 정밀도로 오디오를 자릅니다.' },
          ],
        },
        {
          title: '자막',
          items: [
            { title: '임베드 또는 번인', description: '소프트 자막 트랙 부착 또는 화면에 직접 번인.' },
            { title: '형식 변환', description: 'SRT, VTT, ASS, SSA, TTML —— 의존성 없는 자체 자막 엔진.' },
            { title: '인코딩 복구', description: '구형 GBK/Big5 파일을 깨끗한 UTF-8로 자동 수리.' },
            { title: '타이밍 이동', description: '자막을 일괄적으로 앞뒤로 옮기고 비디오와 동기화.' },
            { title: '추출', description: '아무 컨테이너에서 기존 자막 트랙을 꺼냅니다.' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} —— {description}',
      badge: '데스크톱 앱 · 오픈소스',
      intro: 'macOS 버전은 libmpv를 감싼 네이티브 Swift + SwiftUI 앱이고, Windows 버전은 같은 mpv 코어를 쓰는 Tauri 재작성입니다. 텔레메트리 없음, 업데이트 확인은 요청할 때만.',
      groups: [
        {
          title: '재생',
          items: [
            { title: '모든 형식', description: 'mpv 기반: MKV, MP4, AVI, MOV, WebM, FLAC, MP3와 mpv가 재생하는 모든 것.' },
            { title: 'HDR 출력', description: '지원 디스플레이에서 PQ와 EDR 패스스루. 하드웨어 디코딩은 켜고 끌 수 있습니다.' },
            { title: '디스크 이미지', description: 'ISO Blu-ray / DVD 이미지를 직접 재생.' },
            { title: '재생 컨트롤', description: 'A-B 루프, 재생 속도, 프레임 스텝, 챕터, 스크린샷.' },
            { title: '재생목록과 기록', description: '드래그로 재정렬하는 재생목록, 이어 보기, 북마크.' },
            { title: '미니 창', description: '항상 위에 뜨는 플로팅 미니 플레이어로 멀티태스킹.' },
          ],
        },
        {
          title: '스트리밍',
          items: [
            { title: 'WebDAV와 SMB', description: 'NAS 탐색과 스트리밍 —— macOS 네이티브 SMB 마운트 포함.' },
            { title: 'FTP', description: '내장 FTP 클라이언트. 디렉터리 탐색과 직접 스트리밍.' },
            { title: 'Emby와 Jellyfin', description: '로그인하고 라이브러리를 탐색하며 트랜스코딩 없이 직접 스트리밍.' },
            { title: 'HTTP와 HLS', description: '링크와 m3u8/HLS 스트림 재생, 선읽기 버퍼 조절 가능.' },
          ],
        },
        {
          title: '자막과 도구',
          items: [
            { title: '자동 자막 로드', description: '일치하는 사이드카 파일은 자동으로, 나머지는 필요할 때 로드.' },
            { title: '실시간 스타일', description: '글꼴·크기·색·위치 —— 보면서 바로 조정.' },
            { title: '이퀄라이저와 녹화', description: '오디오 이퀄라이저와 아카이빙용 스트림 녹화.' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'BrushLLM은 개발자와 크리에이터 모두를 위한 AI 제품을 만듭니다 —— 강력한 AI 모델을 위한 통일 API와 이미지·비디오·미디어용 무료 로컬 퍼스트 데스크톱 앱.',
      eyebrow: '소개',
      title: '개발자와 크리에이터를 위한',
      titleBand: 'AI 제품',
      intro: 'BrushLLM은 개발자와 크리에이터 모두를 위한 AI 제품을 만듭니다. 하나의 플랫폼, 하나의 계정 —— 어느 쪽에도 같은 약속을: 간단한 도구, 공개된 가격, 설계에 녹아든 프라이버시.',
      forDevelopers: '개발자에게.',
      forDevelopersText: '{link} —— 강력한 AI 모델에 접근하는 통일 API. DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI 등 모델 {count}개가 OpenAI 호환 엔드포인트 하나 너머에 있습니다.',
      forDevelopersLink: 'AI 모델 서비스',
      forCreators: '크리에이터에게.',
      forCreatorsText: '{link} —— macOS와 Windows용 무료 로컬 퍼스트 데스크톱 앱. Image Studio는 무료 로컬 도구와 같은 API 위의 AI 편집을 결합하고, 세 앱 모두 오픈소스에 텔레메트리 없음입니다.',
      forCreatorsLink: 'Image Studio, Video Studio, Player',
      values: [
        { title: '전 세계에 열려', description: '최첨단 AI에 각자의 계정도, 로컬 결제 장벽도, 지역 잠금도 —— 그리고 터무니없는 가격도 필요하지 않아야 합니다. 가입 한 번, USD, 어느 국가에서든' },
        { title: '하나의 플랫폼, 하나의 계정', description: '하나의 플랫폼, 하나의 계정, 한 장의 청구서. 통합에 커피 한 잔보다 오래 걸린다면 그건 우리의 버그이지 당신의 문제가 아닙니다' },
        { title: '정직한 가격', description: '공개된 토큰당 요금, 구독 함정 없음, 무료 티어는 계속 무료. 요청 한 번의 비용을 늘 알 수 있습니다' },
        { title: '설계된 프라이버시', description: '계정 운영에 필요한 정보만 수집합니다. 추적기·분석·광고 없음 —— 프롬프트는 저장·판매·프로파일링되지 않습니다' },
      ],
      familyTitle: 'BrushLLM 패밀리',
      familyText: '하나의 플랫폼, 두 개의 트랙 —— 개발자를 위한 통일 API와 크리에이터를 위한 무료 로컬 퍼스트 데스크톱 앱 패밀리.',
      familyApiTitle: 'AI 모델 서비스',
      familyApiText: 'OpenAI 호환 엔드포인트 하나에 모델 {count}개·공급자 {providers}곳 —— 토큰 또는 장당 지불.',
      contactTitle: '문의하기',
      contactText: '질문, 볼륨 가격, 추가했으면 하는 모델 —— 모두 읽습니다',
      contactCta: '시작하기',
    },

    notFound: {
      metaDescription: '이 페이지를 찾을 수 없습니다.',
      code: '404 · 캔버스 밖',
      title: '이 페이지는 다시 그려졌습니다',
      text: '링크가 오래되었거나 페이지가 이동했을 수 있습니다. 하지만 모델들은 당신이 떠난 자리에 그대로 있습니다.',
      backHome: '홈으로 돌아가기',
      browseModels: '모델 둘러보기',
    },
  },
};

export default ko;

