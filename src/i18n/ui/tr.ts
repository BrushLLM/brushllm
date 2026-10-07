/**
 * Türkçe. Yapı en.ts ile birebir aynı (Dictionary tipiyle garanti edilir).
 * {count}/{year}/{pct} yer tutucuları aynen kalır ve render sırasında değiştirilir.
 * Çevrilmez: model id'leri, URL'ler, kod örnekleri, fiyatlar, lisans tanımlayıcıları, ürün adları.
 */
import type { Dictionary } from '../index';

const tr: Dictionary = {
  site: {
    title: 'BrushLLM — Yapay zekânız, karmaşıklık olmadan',
    description: 'Tek bir API ile güçlü yapay zekâ modellerine erişin ve ücretsiz, yerel-öncelikli masaüstü uygulamalarıyla üretin. BrushLLM, geliştiriciler ve içerik üreticileri için bir yapay zekâ platformudur.',
    organizationDescription: 'BrushLLM, geliştiriciler ve içerik üreticileri için; Yapay Zekâ Model Hizmetleri (güçlü yapay zekâ modelleri için tek API) ve ücretsiz, yerel-öncelikli masaüstü uygulamaları —— Image Studio, Video Studio ve Player sunan bir yapay zekâ platformudur.',
  },

  nav: {
    models: 'YZ Modelleri',
    apps: 'Uygulamalar',
    pricing: 'Fiyatlar',
    docs: 'Dokümantasyon',
    about: 'Hakkımızda',
  },

  header: {
    home: 'BrushLLM ana sayfa',
    mainNav: 'Ana gezinme',
    mobileNav: 'Mobil gezinme',
    logIn: 'Giriş yap',
    getStarted: 'Başla',
    toggleMenu: 'Menüyü aç/kapat',
  },

  languageSwitcher: {
    label: 'Dil',
    system: 'Sistem',
    systemTitle: 'Tarayıcı dilini izle',
  },

  appPage: {
    openSourceTitle: 'Açık kaynak, dürüst yazılım',
    openSourceText: 'Kaynak kod, sorunlar ve sürümler GitHub’da{license}. Telemetri yok, hesap yok, reklam yok.',
  },

  footer: {
    blurb: 'BrushLLM —— geliştiriciler ve içerik üreticileri için yapay zekâ. Tek bir API ile güçlü yapay zekâ modelleri, artı ücretsiz, yerel-öncelikli masaüstü uygulamaları. Gizliliğinizi koruyoruz: izleyici yok, analitik yok, reklam yok.',
    tagline: 'Tek API · Üç ücretsiz uygulama · Önce gizlilik',
    product: 'Ürün',
    console: 'Konsol',
    company: 'Şirket',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: 'BrushLLM hakkında',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: 'OpenAI uyumlu bir ağ geçidiyle çalışır',
  },

  common: {
    download: 'İndir',
    github: 'GitHub',
    tryIt: 'Dene',
    featured: 'Öne çıkan',
    free: 'Ücretsiz',
    copy: 'Kopyala',
    copied: 'Kopyalandı!',
    copyFallback: '⌘C’ye basın',
    learnMore: 'Daha fazla bilgi',
    learnMoreArrow: 'Daha fazla bilgi →',
    downloadArrow: 'İndir ↗',
    exploreAiModels: 'YZ modellerini keşfet',
    exploreTheApps: 'Uygulamaları keşfet',
    exploreTheApi: 'API’yi keşfet',
    browseModels: 'Modellere göz at',
    openTheConsole: 'Konsolu aç',
    readTheDocs: 'Dokümantasyonu oku',
  },

  data: {
    capability: {
      chat: 'Sohbet',
      reasoning: 'Muhakeme',
      tools: 'Araç çağrısı',
      vision: 'Görü',
      'long-context': 'Uzun bağlam',
      image: 'Metinden görsele',
    },
    apps: {
      'image-studio': {
        tagline: 'Yerel-öncelikli yapay zekâ görsel araç kutusu',
        description: 'Ücretsiz bir masaüstü görsel araç kutusu. Günlük düzenlemeler —— dönüştürme, sıkıştırma, kırpma, filigran, EXIF —— tamamen cihazınızda çalışır; arka plan kaldırma ve üretken dolgu gibi yapay zekâ özellikleri BrushLLM ağ geçidinden geçer ve görsel başına ücretlendirilir.',
        highlights: ['25+ yerel araç', 'YZ düzenlemeleri BrushLLM API ile', '9 dil', 'Sıfır telemetri'],
      },
      'video-studio': {
        tagline: 'Yerel video, ses ve altyazı araç kutusu',
        description: 'Video, ses ve altyazı işleme için ücretsiz, çevrimdışı bir araç kutusu. Dönüştürme, sıkıştırma, birleştirme, kırpma, ses şiddeti normalizasyonu, altyazı kodlaması onarma —— %100 yerel işleme, sıfır ağ isteği.',
        highlights: ['25+ araç', '%100 yerel işleme', '9 dil', 'Sıfır ağ isteği'],
      },
      player: {
        tagline: 'mpv tabanlı açık kaynak medya oynatıcı',
        description: 'Açık kaynak, platformlar arası bir medya oynatıcı. mpv’in çaldığı her format, artı WebDAV, SMB, FTP, Emby ve Jellyfin’den akış —— HDR çıkışı, donanım kod çözme ve 9 dilli arayüzle.',
        highlights: ['mpv ile her format', 'WebDAV · SMB · Emby · Jellyfin', 'HDR ve donanım kod çözme', '9 dil'],
      },
    },
    models: {
      'gpt-5.2': 'ChatGPT’nin amiral gemisi —— genel muhakeme, görü ve araç kullanımında çok güçlü.',
      'gpt-5.2-mini': 'Yüksek hacimli sohbet, sınıflandırma ve çıkarma için hızlı, ucuz ChatGPT katmanı.',
      'deepseek-chat': 'Düşünme modu olmayan amiral gemisi model. Hızlı, ucuz ve genel sohbet ile araç kullanımında mükemmel.',
      'deepseek-reasoner': 'Matematik, kod ve zor problemler için görünür düşünme zincirine sahip muhakeme modeli.',
      'glm-4.6': 'Z.ai amiral gemisi. Kodlama, yazma ve ajan planlamasında güçlü; 200K bağlam.',
      'glm-4.5-air': 'Maliyet duyarlı üretim trafiği için ayarlanmış daha hafif GLM.',
      'glm-4.5-flash': 'GLM ailesinin ücretsiz katmanı —— prototipler ve hobi projeleri için harika.',
      'qwen3-max': 'Alibaba’nın en büyük amiral gemisi. Talepkâr ajan ve sohbet yükleri için en üst düzey kalite.',
      'qwen3-235b-a22b': 'Hibrit düşünme moduna sahip açık ağırlıklı MoE amiral gemisi.',
      'qwen3-32b': 'Düşünme ve düşünme dışı modlara sahip yoğun, açık ağırlıklı her işe uygun model.',
      'qwen3-coder-plus': 'Ajan kodlama araçları ve depo ölçeğinde düzenlemeler için koda özel model.',
      'qwen-vl-max': 'Görü anlama, OCR ve grafik muhakemesi için görü-dil modeli.',
      'kimi-k2-0905': 'Ajan araç kullanımı ve uzun belgeler için ayarlanmış trilyon parametreli MoE.',
      'kimi-k2-thinking': 'Çok adımlı görevler için aralıklı düşünen K2’nin muhakeme varyantı.',
      'MiniMax-M2': 'Verimli ajan MoE —— kısıtlı bütçeli kodlama ajanlarının favorisi.',
      'gpt-image-2': 'OpenAI’nin görüntü üretim modeli —— güçlü talip uydurma ile metinden görsele.',
    },
  },

  pages: {
    home: {
      metaDescription: 'Tek bir API ile güçlü yapay zekâ modellerine erişin ve ücretsiz, yerel-öncelikli masaüstü uygulamalarıyla üretin.',
      heroBadge: 'Geliştiriciler için · İçerik üreticileri için',
      heroTitle: 'Yapay zekânız,',
      heroTitleBand: 'karmaşıklık olmadan',
      heroSubtitle: 'Tek bir API ile güçlü yapay zekâ modellerine erişin, ücretsiz yerel-öncelikli uygulamalarla üretin',
      heroCtaApi: 'API anahtarı al',
      heroCtaApps: 'Masaüstü uygulamaları',
      heroNote: 'Tüm platform için tek hesap',

      platformEyebrow: 'Tek platform',
      platformTitle: 'Geliştiriciler ve içerik üreticileri için tek platform',
      platformIntro: 'BrushLLM, geliştiriciler ve içerik üreticileri için tek platformdur: {modelsLink} üzerinden güçlü yapay zekâ modellerine birleşik API erişimi, artıca {appsLink} ailesi —— Image Studio’nun yapay zekâ özellikleri aynı API üzerinden faturalandırılır.',
      platformModelsLink: 'Yapay Zekâ Model Hizmetleri',
      platformAppsLink: 'ücretsiz, yerel-öncelikli masaüstü uygulamaları',

      apiCardBadge: 'Geliştiriciler için',
      apiCardTitle: 'Yapay Zekâ Model Hizmetleri',
      apiCardSubtitle: 'Güçlü yapay zekâ modelleri için tek API',
      apiCardDescription: 'Güçlü yapay zekâ modellerine tek API üzerinden erişin —— {count} model, {providers} sağlayıcı, birleşik ve kullanıma dayalı.',
      apiCardBullets: [
        'Birleşik, OpenAI uyumlu uç nokta',
        'Sohbet, muhakeme, görü ve görüntü modelleri',
        'Yayınlanmış fiyatlar, kullandıkça öde, ücretsiz katmanlar',
      ],
      apiCardChips: { models: 'Modeller', pricing: 'Fiyatlar', docs: 'Dokümanlar', console: 'Konsol' },
      apiCardCta: 'YZ modellerini keşfet',
      apiCardSecondary: 'Dokümantasyonu oku',

      appsCardBadge: 'İçerik üreticileri için · Ücretsiz uygulamalar',
      appsCardTitle: 'Masaüstü uygulamaları',
      appsCardSubtitle: 'Günlük işler için ücretsiz, yerel-öncelikli araçlar',
      appsCardDescription: 'Image Studio, Video Studio ve Player —— macOS ve Windows için açık kaynak masaüstü uygulamaları, sıfır telemetri. Image Studio’nun yapay zekâ özellikleri aynı API üzerinde çalışır.',
      appsCardNote: 'Açık kaynak · macOS · Windows',
      appsCardCta: 'Uygulamaları keşfet',

      appsSectionEyebrow: 'Uygulamalar',
      appsSectionTitle: 'Ücretsiz yerel-öncelikli uygulamalar,',
      appsSectionTitleBand: 'tek bir platform üzerine kurulu',
      appsSectionFooter: 'Ayrıntılar, ekran görüntüleri ve yükleyiciler {link}',
      appsSectionFooterLink: 'uygulamalar sayfasında →',

      benefitsEyebrow: 'Neden bizim API’imiz',
      benefitsTitle: 'İhtiyacınız olan her şey,',
      benefitsTitleBand: 'gereksiz hiçbir şey yok',
      benefitsSubtitle: 'Yapay zekâ modelleriyle inşa etmek için basit, dürüst araçlar',
      benefits: [
        { title: 'Birleşik API', description: 'Her model için tek OpenAI uyumlu uç nokta. SDK’nızı tutun —— bir satır değiştirin ve yayınlayın' },
        { title: 'Çoklu modeller', description: 'Önde gelen laboratuvarlardan sohbet, muhakeme, görü ve görüntü modelleri —— tek katalogda {count} model' },
        { title: 'Basit entegrasyon', description: 'Herhangi bir OpenAI SDK ile çalışır. Kopyala, yapıştır, çalıştır —— cURL, Python, Node.js veya Go' },
        { title: 'Kullanıma dayalı fiyatlandırma', description: 'Kullandığınız kadar ödeyin —— token veya görüntü başına, USD cinsinden. Abonelik yok, başlamak için ücretsiz katmanlar var' },
      ],

      statsEyebrow: 'Kullanılabilir modeller, tek API',
      stats: { providers: 'YZ sağlayıcıları', models: 'Model, tek katalog', account: 'Hesap', countries: 'Hizmet verilen ülkeler' },
      statsCompare: 'Net fiyatlarımız 7 doğrudan karşılaştırmada OpenRouter’ı geçiyor —— {link}',
      statsCompareLink: 'karşılaştırmayı görün →',

      howEyebrow: 'Nasıl çalışır',
      howTitle: 'İlk token’ınıza üç adım',
      howSteps: [
        { title: 'Hesap oluşturun', description: 'E-postayla kaydolun ve konsoldan bir API anahtarı alın. Başlamak için kredi kartı gerekmez' },
        { title: 'SDK’nızı BrushLLM’e yönlendirin', description: 'Temel URL’yi ayarlayın ve zaten kullandığınız OpenAI SDK’sını koruyun' },
        { title: 'Herhangi bir modeli id ile çağırın', description: 'Model id’lerini serbestçe değiştirin —— katalogun tamamı bir anahtar uzağınızda' },
      ],
      howCodeTitle: 'Kodunuzu koruyun, bir satır değiştirin',
      howCodeSubtitle: 'OpenAI API ile çalışıyorsa, BrushLLM ile de çalışır —— dört dilde aynı istek.',

      faqEyebrow: 'SSS',
      faqTitle: 'Sorular, yanıtlandı',
      faqDevelopers: 'Geliştiriciler için',
      faqCreators: 'İçerik üreticileri için',
      developerFaqs: [
        {
          question: 'BrushLLM nedir?',
          answer: 'BrushLLM, geliştiriciler ve içerik üreticileri için bir yapay zekâ platformudur. Yapay Zekâ Model Hizmetleri geliştiricilere güçlü modeller için tek API sunar; ücretsiz, yerel-öncelikli masaüstü uygulaması ailesi —— Image Studio, Video Studio ve Player —— üretici tarafını karşılar. Tek hesap tüm platformu kapsar.',
        },
        {
          question: 'API nasıl çalışır?',
          answer: 'Herhangi bir OpenAI SDK’sını {apiBase} adresine yönlendirin ve BrushLLM anahtarınızı kullanın. Sohbet tamamlamaları, araç çağrıları ve akış, beklediğiniz gibi çalışır.',
        },
        {
          question: 'Hangi yapay zekâ modelleri mevcut?',
          answer: 'Katalog; DeepSeek, Qwen, GLM, Kimi, MiniMax ve OpenAI’den {count} modeli kapsar —— sohbet, muhakeme, görü ve metinden görsele. Canlı fiyatlarla tam liste Modeller sayfasında.',
        },
        {
          question: 'API OpenAI ile uyumlu mu?',
          answer: 'Evet, tamamen. OpenAI API ile çalışan her şey BrushLLM ile çalışır —— Cursor, Cline, OpenCode ve aider gibi kodlama ajanları ve CLI’lar dahil.',
        },
        {
          question: 'Kullanım nasıl faturalandırılır?',
          answer: 'Katı bir şekilde kullandıkça öde, USD cinsinden —— metin modelleri için token başına, görüntü modelleri için görüntü başına. Abonelik veya asgari tutar yok; birkaç modelde ücretsiz katmanlar var.',
        },
        {
          question: 'BrushLLM girişimler ve şirketler için uygun mu?',
          answer: 'Uygun. Tek uç nokta tüm sağlayıcıları kapsar, kullanıma dayalı fiyatlar sizinle ölçeklenir, her anahtarın kendi harcama limiti vardır ve taahhütlü kullanım için hacim indirimleri mevcuttur.',
        },
        {
          question: 'Gizliliğimi nasıl koruyorsunuz?',
          answer: 'Yalnızca bir hesabın işlemesi için gerekeni toplarız. İzleyici yok, analitik yok, reklam yok —— istemleriniz doğrudan üst model iletilir; asla depolanmaz, satılmaz veya profil oluşturmada kullanılmaz.',
        },
      ],
      creatorFaqs: [
        {
          question: 'Image Studio nedir?',
          answer: 'Image Studio, BrushLLM’in ücretsiz masaüstü görsel araç kutusudur. Günlük araçlar —— dönüştürme, sıkıştırma, kırpma, EXIF —— yerelde ve çevrimdışı çalışır; arka plan kaldırma ve üretken dolgu gibi yapay zekâ özellikleri BrushLLM API’sinden geçer ve görsel başına faturalandırılır.',
        },
        {
          question: 'Image Studio ile neler yapabilirim?',
          answer: 'Ücretsiz yerel araçlarla görüntüleri dönüştürün, sıkıştırın, kırpın ve temizleyin —— sonra yapay zekâ ile üretin, arka plan kaldırın, nesne silin, doldurun ve stil değiştirin; görsel başına ücretlendirilir.',
        },
        {
          question: 'Mevcut görüntüleri düzenleyebilir miyim?',
          answer: 'Evet. Herhangi bir görüntüyü açın, bir bölgeyi veya tüm tuvali seçin ve değişikliği tarif edin —— inpainting ve arka plan kaldırma yerleşiktir.',
        },
        {
          question: 'Görüntü üretebilir ve dönüştürebilir miyim?',
          answer: 'Evet —— metinden görsele üretim ve stil değiştirme aynı çalışma alanında, BrushLLM API’si üzerinden GPT-Image ile çalışır.',
        },
        {
          question: 'Uygulamaları nereden alabilirim?',
          answer: 'Üç uygulamanın tamamı —— Image Studio, Video Studio ve Player —— BrushLLM GitHub sürümlerinden şu anda edinilebilir; macOS (Apple Silicon) ve Windows için.',
        },
        {
          question: 'Uygulamalar gerçekten ücretsiz mi?',
          answer: 'Evet. Tüm yerel araçlar ücretsizdir ve kaynak kodu GitHub’dadır. Yalnızca Image Studio’daki yapay zekâ özellikleri, kullandıkça öde BrushLLM API’sini kullanır.',
        },
      ],

      ctaBuildTitle: 'Yapay zekâyla inşa edin',
      ctaBuildText: '{count} model için tek API —— birleşik, kullanıma dayalı, OpenAI uyumlu',
      ctaCreateTitle: 'Yapay zekâyla üretin',
      ctaCreateText: 'Ücretsiz, yerel-öncelikli masaüstü uygulamaları —— görüntü, video ve medya oluşturun ve düzenleyin, Image Studio’da yapay zekâ süper güçleriyle',
    },

    models: {
      metaDescription: '{count} yapay zekâ modeline göz atın —— DeepSeek, Qwen, GLM ve Kimi’den GPT ve metinden görsele —— bağlam pencereleri, yetenekler ve gösterge fiyatlarla.',
      eyebrow: 'YZ Modelleri',
      title: '{count} model · {providers} sağlayıcı ·',
      titleBand: 'Tek uç nokta',
      intro: 'Aşağıdaki her model aynı OpenAI uyumlu API ve aynı anahtarla çağrılabilir. Fiyatlar göstergedir —— metin modelleri için 1M token başına USD, görüntü modelleri için görüntü başına USD{free}.',
      introFree: ' —— {count} model ücretsizdir',
      searchPlaceholder: 'İsim, id veya sağlayıcıya göre ara…',
      searchLabel: 'Model ara',
      providerLabel: 'Sağlayıcı',
      providerGroup: 'Sağlayıcıya göre filtrele',
      capabilityLabel: 'Yetenek',
      capabilityGroup: 'Yeteneğe göre filtrele',
      all: 'Tümü',
      showing: '{total} modelden {visible} tanesi gösteriliyor',
      empty: 'Filtrelerinize uyan model yok. Farklı bir anahtar kelime, sağlayıcı, yetenek veya kullanım senaryosu deneyin.',
      footnote: 'Fiyatlar USD cinsinden gösterge liste fiyatlarıdır —— metin modelleri için 1M token başına, görüntü modelleri için üretilen görüntü başına —— ve konsolunuzda yapılandırılan oranlardan farklı olabilir. Bağlam pencereleri, her bir üst modelin desteklediği maksimum değerlerdir. Entegrasyon ayrıntıları için {docsLink} sayfasına bakın.',
      footnoteDocsLink: 'dokümantasyon',
      card: { type: 'Tür', perImage: 'Görüntü başına', output: 'Çıktı', context: 'Bağlam', input: 'Girdi / 1M', outputPer1M: 'Çıktı / 1M' },
    },

    pricing: {
      metaDescription: 'BrushLLM’deki her model için basit kullandıkça öde fiyatlandırması —— USD cinsinden gösterge token fiyatları ve birkaç ücretsiz katman.',
      eyebrow: 'Fiyatlar',
      title: 'Kullandığınız kadar ödeyin,',
      titleBand: 'hepsi bu',
      intro: 'Metin modelleri token başına, görüntü modelleri üretilen görüntü başına faturalandırılır —— tamamı USD cinsinden, abonelik veya asgari tutar yok. Aşağıda gördüğünüz gösterge katalog oranıdır; kesin oranlarınız ve bakiyeniz konsoldadır.',
      highlights: [
        { title: 'Yalnızca kullandıkça öde', description: 'USD cinsinden token başına faturalandırma. Abonelik yok, asgari tutar yok, kâr oyunları yok —— yükleyin ve kullanın' },
        { title: '{count} ücretsiz model', description: 'GLM-4.5 Flash hiçbir ücrete tabi değil —— prototipler ve hobi uygulamaları için mükemmel' },
        { title: 'Hacim indirimleri', description: 'Ciddi bir hacminiz mi var? Bize ulaşın, iş yükünüz için taahhütlü kullanım oranları belirleyelim' },
      ],
      textModelsTitle: 'Metin modelleri —— token başına',
      imageModelsTitle: 'Görüntü modelleri —— görüntü başına',
      table: { model: 'Model', provider: 'Sağlayıcı', context: 'Bağlam', input: 'Girdi / 1M', output: 'Çıktı / 1M', resolution: 'Çözünürlük', pricePerImage: 'Görüntü başına fiyat' },
      footnote: 'Fiyatlar USD cinsinden gösterge liste fiyatlarıdır —— metin modelleri için 1M token başına, görüntü modelleri için üretilen görüntü başına. Gerçek faturalandırma konsolunuzda yapılır; API anahtarı başına harcamayı da orada izleyebilirsiniz.',
      compareEyebrow: 'Fiyat kontrolü',
      compareTitle: 'Aynı modeller,',
      compareTitleBand: 'daha küçük net faturalar',
      compareIntro: 'OpenRouter, kredi satın alırken bir ödeme ücreti ekliyor —— kartla %5,5 —— her modelin liste fiyatının üstüne. BrushLLM’in yayınlanan oranı, ödediğiniz nihai orandır.',
      compareTable: {
        model: 'Model',
        ours: 'BrushLLM girdi/çıktı 1M başına',
        orList: 'OpenRouter liste girdi/çıktı',
        orAllIn: 'OpenRouter net* girdi/çıktı',
        youSave: 'Tasarruf',
        upTo: '%{pct}’e kadar',
      },
      compareFootnote: '*Net = OpenRouter liste fiyatı artı %5,5 kredi satın alma ücreti (Stripe; kripto %5). Tasarruf, BrushLLM’in nihai oranını OpenRouter’ın net oranıyla karşılaştırır. OpenRouter liste fiyatları halka açık API’lerinden, Eyl 2026’da alındı —— göstergedir; güncel oranları her iki platformda da doğrulayın.',
      ctaTitle: 'Bakiyenizi ve oranlarınızı kontrol edin',
      ctaText: 'Yükleme yapın, anahtar kotaları ayarlayın ve kullanımı gerçek zamanlı izleyin —— hepsi konsolda',
    },

    docs: {
      metaDescription: 'BrushLLM API hızlı başlangıç kılavuzu —— kimlik doğrulama, OpenAI uyumlu temel URL, dört dilde SDK örnekleri ve model id’lerinin tam listesi.',
      eyebrow: 'Dokümantasyon',
      title: 'Hızlı başlangıç,',
      titleBand: 'tek fırça darbesinde',
      intro: 'BrushLLM, OpenAI uyumlu bir ağ geçididir. OpenAI API’sini hiç çağırdıysanız, BrushLLM’i çağırmayı zaten biliyorsunuz —— işte otuz saniyelik sürüm.',
      toc: { quickstart: 'Hızlı başlangıç', firstRequest: 'İlk istek', modelIds: 'Model id’leri', errors: 'Hatalar' },
      tocLabel: 'Dokümantasyon bölümleri',
      steps: [
        {
          title: 'API anahtarı alın',
          description: '{createLink} ya da konsola {signInLink} yapın, ardından bir anahtar oluşturun. Anahtarlar {code} gibi görünür —— onlara parola gibi davranın ve araçlara veriyorsanız bir harcama kotası ayarlayın',
          createLink: 'Hesap oluşturun',
          signInLink: 'giriş yapın',
        },
        {
          title: 'Temel URL ve anahtarı ayarlayın',
          description: 'Herhangi bir OpenAI SDK’sını uç noktamıza yönlendirin:',
          baseUrlLabel: 'base_url',
        },
        {
          title: 'Herhangi bir modeli id ile çağırın',
          description: 'Aşağıdaki tablodaki id’lerden birini {code} olarak geçirin. Hepsi bu —— önde gelen yapay zekâ laboratuvarlarının modellerini çağırıyorsunuz',
        },
      ],
      firstRequestTitle: 'İlk isteğiniz',
      firstRequestText: 'Dört dilde aynı istek —— akış dahil. Kopyala, yapıştır, çalıştır',
      modelIdsTitle: 'Model id’leri',
      modelIdsText: 'Bu id’leri tam olarak kullanın (büyük/küçük harfe duyarlı). Açıklamalar ve yetenekler {modelsLink} sayfasında. Görüntü modelleri, aynı API anahtarıyla {code} üzerinden çağrılır.',
      modelIdsModelsLink: 'modeller sayfası',
      modelIdsTable: { id: 'Model id', name: 'Görünen ad', context: 'Bağlam' },
      errorsTitle: 'Hatalar',
      errorsTable: { status: 'Durum', meaning: 'Anlam', fix: 'Yapılacak' },
      errors: [
        { meaning: 'Geçersiz veya eksik API anahtarı', fix: 'Anahtarınızın “brsh-” ile başladığını ve konsolda iptal edilmediğini kontrol edin.' },
        { meaning: 'Bilinmeyen model id', fix: 'Yukarıdaki tabloda listelendiği gibi tam bir id kullanın —— büyük/küçük harfe duyarlıdır.' },
        { meaning: 'Hız limiti veya kota aşıldı', fix: 'Bekleyip geri çekilmeli yeniden deneyin veya konsolda bu anahtarın kotasını yükseltin.' },
        { meaning: 'Yetersiz bakiye', fix: 'Konsolda hesabınıza yükleyin ve isteği yeniden deneyin.' },
        { meaning: 'Üst sağlayıcı hatası', fix: 'Birkaç saniye sonra yeniden deneyin; sürerse başka bir model id’sine geçin veya destekle iletişime geçin.' },
      ],
      helpTitle: 'Bir yerde takıldınız mı?',
      helpText: 'Anahtarlar, kotalar ve faturalandırma için konsolu kontrol edin veya bize {email} adresinden yazın',
    },

    apps: {
      metaDescription: 'BrushLLM masaüstü uygulamaları —— Image Studio, Video Studio ve Player. Ücretsiz, yerel-öncelikli, açık kaynak; macOS ve Windows için.',
      eyebrow: 'Uygulamalar',
      title: 'Ücretsiz yerel-öncelikli uygulamalar,',
      titleBand: 'açık kaynak',
      intro: 'macOS ve Windows için üç masaüstü aracı —— sıfır telemetri, sıfır hesap, reklam yok. Image Studio’nun yapay zekâ özellikleri doğrudan BrushLLM API’sine bağlanır.',
      apiTitle: 'Yapay zekâ özelliklerinin arkasındaki API',
      apiText: 'Image Studio’nun yapay zekâ araçları BrushLLM ağ geçidi üzerinde çalışır —— tek OpenAI uyumlu uç nokta, yayınlanmış görüntü başına oranlar.',
    },

    studio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Masaüstü uygulaması · Ücretsiz + YZ kullandıkça öde',
      intro: 'Her yerel araç ücretsizdir ve tamamen cihazınızda çalışır —— Rust motoru, yükleme yok. Yapay zekâ özellikleri, platformun geri kalanını çalıştıran aynı {apiLink}’yi çağırır ve {ratesLink} doğrultusunda görüntü başına faturalandırılır.',
      introApiLink: 'BrushLLM API',
      introRatesLink: 'yayınlanmış oranlar',
      outro: 'Yapay zekâ araçlarının arkasındaki görüntü modellerine göz atın →',
      groups: [
        {
          title: 'Yerel araçlar —— ücretsiz, çevrimdışı, özel',
          items: [
            { title: 'Dönüştür ve sıkıştır', description: 'Lanczos yeniden örnekleme ve kalite kontrolüyle 8 giriş formatından 8 çıkış formatına (AVIF ve WebP dahil).' },
            { title: 'Yeniden boyutlandır, kırp ve döndür', description: 'Tam piksel boyutları ve en-boy oranı ön ayarlarıyla toplu iş dostu geometri araçları.' },
            { title: 'Filigranlar ve ek açıklamalar', description: 'Metin ve görüntü filigranları, oklar, kutular ve ekran görüntüleri ile belgeler için serbest çizim.' },
            { title: 'EXIF görüntüle, düzenle ve temizle', description: 'Tüm üst verileri inceleyin, alanları yeniden yazın veya paylaşmadan önce konum ve kamera verilerini silin.' },
            { title: 'Birleştir, mozaik ve gölgeler', description: 'Görüntüleri ızgaralarda birleştirin, bölgeleri pikselleştirin, yuvarlatılmış köşeler ve gölgeler ekleyin.' },
            { title: 'Renk araçları', description: 'Parlaklık, kontrast ve doygunluk, renk değiştirme ve büyüteçli renk seçici.' },
          ],
        },
        {
          title: 'Yapay zekâ araçları —— BrushLLM ağ geçidiyle çalışır',
          items: [
            { title: 'Görüntü üret', description: 'GPT-Image ile metinden görsele —— üretilen görüntü başına faturalandırılır, abonelik yok.' },
            { title: 'Arka plan kaldır', description: 'Tek tıkla, temiz kenarlı kesimler —— doğrudan masaüstünüzden.' },
            { title: 'Nesne ve filigran kaldır', description: 'Bir bölge seçin ve kaybolmasını istediğinizi tarif edin —— inpainting doldurur.' },
            { title: 'Üretken dolgu', description: 'İsteğe bağlı referans görüntülerle (örn. kişi değiştirme) genişletin, değiştirin veya takas edin.' },
            { title: 'Stil değiştir', description: 'Kompozisyonu ve kimliği koruyarak bir görüntüyü yeni bir stille yeniden boyayın.' },
            { title: 'Anahtarınız, kotanız', description: 'API anahtarı işletim sistemi anahtar zincirinde yaşar; her anahtar, konsoldan kendi harcama kotasını taşır.' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Masaüstü uygulaması · Ücretsiz',
      intro: '%100 yerel işleme —— medyanız hiçbir zaman makineden çıkmaz. FFmpeg ikili dosyaları sabitlenmiş ve SHA-256 ile doğrulanmış, motor duraklatılabilir bir iş kuyruğu çalıştırıyor ve 175 otomatik test araç kutusunu dürüst tutuyor.',
      groups: [
        {
          title: 'Video',
          items: [
            { title: 'Dönüştür', description: 'H.264, H.265, VP9 veya AV1 codec’leriyle MP4, MKV, WebM, MOV ve AVI.' },
            { title: 'Sıkıştır', description: 'Kalite tabanlı (CRF) veya hedef bit hızı sıkıştırması, canlı boyut tahminiyle.' },
            { title: 'Birleştir ve kırp', description: 'Klipleri sırayla birleştirin, kare hassasiyetinde giriş/çıkış noktalarıyla segmentler kesin.' },
            { title: 'Kırp, ölçekle ve döndür', description: 'Yanlış yönlendirilmiş veya kenarlı görüntüler için geometri düzeltmeleri.' },
            { title: 'Hız değiştir', description: 'Ses perdesi düzeltmesiyle 0,25× ile 4× arası oynatma hızı.' },
            { title: 'Kareler, GIF’ler ve WebP', description: 'Sabit kareler çıkarın veya klipleri animasyonlu GIF/WebP’ye dönüştürün.' },
          ],
        },
        {
          title: 'Ses',
          items: [
            { title: 'Çıkar ve dönüştür', description: 'Sesi MP3, M4A, FLAC, WAV, OGG veya Opus formatına çıkarın.' },
            { title: 'Ses şiddeti normalizasyonu', description: 'Dosyalar arasında tutarlı ses seviyesi için EBU R128 normalizasyonu.' },
            { title: 'Ses ve kazanç', description: 'Mümkün olduğunda videoyu yeniden kodlamadan sesi yükseltin veya düşürün.' },
            { title: 'Sessize al veya değiştir', description: 'Ses parçalarını kaldırın veya yeni bir film müziği takın.' },
            { title: 'Kırp', description: 'Ses segmentlerini videoyla aynı giriş/çıkış hassasiyetiyle kesin.' },
          ],
        },
        {
          title: 'Altyazılar',
          items: [
            { title: 'Göm veya yaz', description: 'Yumuşak altyazı parçaları ekleyin veya bunları görüntüye kalıcı olarak işleyin.' },
            { title: 'Format dönüştür', description: 'SRT, VTT, ASS, SSA ve TTML —— bağımlılıksız bir altyazı motoruyla.' },
            { title: 'Kodlamaları onar', description: 'Eski GBK/Big5 dosyalarını otomatik olarak temiz UTF-8’e dönüştürün.' },
            { title: 'Zamanlamayı kaydır', description: 'Altyazıları toplu halde ileri veya geri itin, videonuzla senkronize.' },
            { title: 'Çıkar', description: 'Mevcut altyazı parçalarını herhangi bir kapsayıcıdan çıkarın.' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Masaüstü uygulaması · Açık kaynak',
      intro: 'macOS uygulaması, libmpv çevresinde yerel bir Swift + SwiftUI yapısıdır; Windows uygulaması ise aynı mpv çekirdeğini kullanan bir Tauri yeniden yazımıdır. Sıfır telemetri; güncellemeler yalnızca siz istediğinizde kontrol edilir.',
      groups: [
        {
          title: 'Oynatma',
          items: [
            { title: 'Her format', description: 'mpv üzerine kurulu: MKV, MP4, AVI, MOV, WebM, FLAC, MP3 ve mpv’in çaldığı her şey.' },
            { title: 'HDR çıkışı', description: 'Desteklenen ekranlarda PQ ve EDR geçişi, açılıp kapanabilen donanım kod çözme.' },
            { title: 'Disk görüntüleri', description: 'ISO Blu-ray ve DVD görüntülerini doğrudan oynatın.' },
            { title: 'Kontroller', description: 'A-B döngüsü, oynatma hızı, kare adımlama, bölümler ve ekran görüntüleri.' },
            { title: 'Çalma listesi ve geçmiş', description: 'Sürükle-yeniden sırala çalma listeleri, kaldığınız yerden devam, yer imleri.' },
            { title: 'Mini pencere', description: 'Çoklu görev için her zaman üstte duran yüzen bir mini oynatıcı.' },
          ],
        },
        {
          title: 'Akış',
          items: [
            { title: 'WebDAV ve SMB', description: 'NAS’ınızdan göz atın ve akış yapın —— yerel macOS SMB bağlama dahil.' },
            { title: 'FTP', description: 'Dizin tarama ve doğrudan akışla yerleşik FTP istemcisi.' },
            { title: 'Emby ve Jellyfin', description: 'Giriş yapın, kitaplıklara göz atın ve kod dönüştürme olmadan doğrudan akış yapın.' },
            { title: 'HTTP ve HLS', description: 'Bağlantıları ve m3u8/HLS akışlarını, ayarlanabilir ön okuma tamponuyla oynatın.' },
          ],
        },
        {
          title: 'Altyazılar ve araçlar',
          items: [
            { title: 'Otomatik yüklenen altyazılar', description: 'Eşleşen yan dosyalar kendiliğinden yüklenir; harici olanlar talep üzerine.' },
            { title: 'Canlı stil', description: 'Yazı tipi, boyut, renk ve konum —— izlerken yeniden biçimlendirilir.' },
            { title: 'Ekolayzer ve kayıt', description: 'Ses ekolayzeri, artı arşivleme için akış kaydı.' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'BrushLLM, geliştiriciler ve içerik üreticileri için yapay zekâ ürünleri geliştirir —— güçlü yapay zekâ modelleri için birleşik bir API ve görüntü, video ile medya için ücretsiz, yerel-öncelikli masaüstü uygulamaları.',
      eyebrow: 'Hakkımızda',
      title: 'Geliştiriciler ve içerik üreticileri için',
      titleBand: 'yapay zekâ ürünleri',
      intro: 'BrushLLM, geliştiriciler ve içerik üreticileri için yapay zekâ ürünleri geliştirir. Tek platform, tek hesap —— ve her iki tarafta da aynı vaat: basit araçlar, yayınlanmış fiyatlar, tasarımın kendisinde yer alan gizlilik.',
      forDevelopers: 'Geliştiriciler için.',
      forDevelopersText: '{link} —— güçlü yapay zekâ modellerine erişim için birleşik API. DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI ve daha fazlasından {count} model, tek bir OpenAI uyumlu uç noktanın arkasında.',
      forDevelopersLink: 'Yapay Zekâ Model Hizmetleri',
      forCreators: 'İçerik üreticileri için.',
      forCreatorsText: '{link} —— macOS ve Windows için ücretsiz, yerel-öncelikli masaüstü uygulamaları. Image Studio, ücretsiz yerel araçları aynı API üzerindeki yapay zekâ düzenlemesiyle birleştirir; üçü de açık kaynak ve telemetrisizdir.',
      forCreatorsLink: 'Image Studio, Video Studio ve Player',
      values: [
        { title: 'Dünyaya açık', description: 'Öncü yapay zekâ ayrı hesaplar, yerel ödeme engelleri veya bölge kilitleri gerektirmemeli —— ve bir servete de mal olmamalı. Tek kayıt, USD cinsinden, her ülkeden' },
        { title: 'Tek platform, tek hesap', description: 'Tek platform, tek hesap, tek fatura. Entegrasyon bir kahve molasından uzun sürüyorsa, bu bizim hatamızdır, sizin sorununuz değil' },
        { title: 'Dürüst fiyatlandırma', description: 'Yayınlanmış token başına oranlar, abonelik tuzağı yok ve ücretsiz kalan ücretsiz katmanlar. Bir isteğin maliyetini her zaman bilmelisiniz' },
        { title: 'Tasarımdan gizlilik', description: 'Yalnızca bir hesabın işlemesi için gerekeni toplarız. İzleyici yok, analitik yok, reklam yok —— istemleriniz asla depolanmaz, satılmaz veya profil oluşturmada kullanılmaz' },
      ],
      familyTitle: 'BrushLLM ailesi',
      familyText: 'Tek platform, iki yol —— geliştiriciler için birleşik API ve içerik üreticileri için ücretsiz, yerel-öncelikli masaüstü uygulaması ailesi.',
      familyApiTitle: 'Yapay Zekâ Model Hizmetleri',
      familyApiText: '{providers} sağlayıcıdan {count} model için tek OpenAI uyumlu uç nokta —— token veya görüntü başına ödeme.',
      contactTitle: 'Bizimle iletişime geçin',
      contactText: 'Sorular, hacim fiyatlandırması ya da eklenmesini istediğiniz bir model —— her şeyi okuyoruz',
      contactCta: 'Başla',
    },

    notFound: {
      metaDescription: 'Bu sayfa bulunamadı.',
      code: '404 · TUVAL DIŞI',
      title: 'Bu sayfa yeniden boyandı',
      text: 'Bağlantı eski olabilir ya da sayfa taşınmış olabilir. Modeller ise tam olarak bıraktığınız yerde.',
      backHome: 'Ana sayfaya dön',
      browseModels: 'Modellere göz at',
    },
  },
};

export default tr;
