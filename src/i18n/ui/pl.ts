/**
 * Polski. Struktura identyczna z en.ts (wymuszona typem Dictionary).
 Placeholdery {count}/{year}/{pct} pozostają i są podmieniane przy renderowaniu.
 * Nie tłumaczyć: id modeli, URL-e, przykłady kodu, ceny, identyfikatory licencji, nazwy produktów.
 */
import type { Dictionary } from '../index';

const pl: Dictionary = {
  site: {
    title: 'BrushLLM — Twoja AI, bez złożoności',
    description: 'Korzystaj z potężnych modeli AI przez jedno API i twórz dzięki darmowym aplikacjom desktopowym typu local-first. BrushLLM to platforma AI dla programistów i twórców.',
    organizationDescription: 'BrushLLM to platforma AI dla programistów i twórców, oferująca Usługi Modeli AI (jedno API do potężnych modeli AI) oraz darmowe aplikacje desktopowe local-first —— Image Studio, Video Studio i Player.',
  },

  nav: {
    models: 'Modele AI',
    apps: 'Aplikacje',
    pricing: 'Cennik',
    docs: 'Dokumentacja',
    about: 'O nas',
  },

  header: {
    home: 'BrushLLM strona główna',
    mainNav: 'Nawigacja główna',
    mobileNav: 'Nawigacja mobilna',
    logIn: 'Zaloguj się',
    getStarted: 'Rozpocznij',
    toggleMenu: 'Przełącz menu',
  },

  languageSwitcher: {
    label: 'Język',
    system: 'Systemowy',
    systemTitle: 'Podążaj za językiem przeglądarki',
  },

  appPage: {
    openSourceTitle: 'Open source, uczciwe oprogramowanie',
    openSourceText: 'Kod źródłowy, issues i wydania są na GitHubie{license}. Zero telemetrii, zero kont, zero reklam.',
  },

  footer: {
    blurb: 'BrushLLM —— AI dla programistów i twórców. Potężne modele AI przez jedno API, plus darmowe aplikacje desktopowe local-first. Chronimy Twoją prywatność: bez trackerów, bez analityki, bez reklam.',
    tagline: 'Jedno API · Trzy darmowe aplikacje · Prywatność przede wszystkim',
    product: 'Produkt',
    console: 'Konsola',
    company: 'Firma',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: 'O BrushLLM',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: 'Napędzane przez bramkę zgodną z OpenAI',
  },

  common: {
    download: 'Pobierz',
    github: 'GitHub',
    tryIt: 'Wypróbuj',
    featured: 'Polecany',
    free: 'Darmowy',
    copy: 'Kopiuj',
    copied: 'Skopiowano!',
    copyFallback: 'Naciśnij ⌘C',
    learnMore: 'Dowiedz się więcej',
    learnMoreArrow: 'Dowiedz się więcej →',
    downloadArrow: 'Pobierz ↗',
    exploreAiModels: 'Poznaj modele AI',
    exploreTheApps: 'Poznaj aplikacje',
    exploreTheApi: 'Poznaj API',
    browseModels: 'Zobacz modele',
    openTheConsole: 'Otwórz konsolę',
    readTheDocs: 'Przeczytaj dokumentację',
  },

  data: {
    capability: {
      chat: 'Czat',
      reasoning: 'Rozumowanie',
      tools: 'Wywołania narzędzi',
      vision: 'Wizja',
      'long-context': 'Długi kontekst',
      image: 'Tekst na obraz',
    },
    apps: {
      'image-studio': {
        tagline: 'Narzędzia AI do obrazów, local-first',
        description: 'Darmowy desktopowy zestaw narzędzi do obrazów. Codzienne edycje —— konwersja, kompresja, kadrowanie, znaki wodne, EXIF —— działają w całości na Twoim urządzeniu; funkcje AI, takie jak usuwanie tła i wypełnianie generatywne, przechodzą przez bramkę BrushLLM, rozliczane za obraz.',
        highlights: ['25+ narzędzi lokalnych', 'Edycje AI przez API BrushLLM', '9 języków', 'Zero telemetrii'],
      },
      'video-studio': {
        tagline: 'Lokalny zestaw narzędzi do wideo, audio i napisów',
        description: 'Darmowy, offline’owy zestaw narzędzi do przetwarzania wideo, audio i napisów. Konwertuj, kompresuj, łącz, przycinaj, normalizuj głośność, naprawiaj kodowanie napisów —— przetwarzanie w 100% lokalne, zero zapytań sieciowych.',
        highlights: ['25+ narzędzi', 'Przetwarzanie w 100% lokalne', '9 języków', 'Zero zapytań sieciowych'],
      },
      player: {
        tagline: 'Odtwarzacz multimedialny open source oparty na mpv',
        description: 'Odtwarzacz multimedialowy open source, wieloplatformowy. Każdy format, który odtwarza mpv, plus streaming z WebDAV, SMB, FTP, Emby i Jellyfin —— z wyjściem HDR, dekodowaniem sprzętowym i interfejsem w 9 językach.',
        highlights: ['Każdy format przez mpv', 'WebDAV · SMB · Emby · Jellyfin', 'HDR i dekodowanie sprzętowe', '9 języków'],
      },
    },
    models: {
      'gpt-5.2': 'Flagowy model ChatGPT —— mocne ogólne rozumowanie, wizja i użycie narzędzi.',
      'gpt-5.2-mini': 'Szybka, tania wersja ChatGPT do czatu o dużej skali, klasyfikacji i ekstrakcji.',
      'deepseek-chat': 'Model flagowy bez trybu rozumowania. Szybki, tani i znakomity w ogólnym czacie i użyciu narzędzi.',
      'deepseek-reasoner': 'Model rozumujący z widocznym łańcuchem myśli —— do matematyki, kodu i trudnych problemów.',
      'glm-4.6': 'Flagowiec Z.ai. Mocny w kodowaniu, pisaniu i planowaniu agentowym; kontekst 200K.',
      'glm-4.5-air': 'Lżejszy GLM pod ruch produkcyjny wrażliwy na koszty.',
      'glm-4.5-flash': 'Darmowy poziom rodziny GLM —— świetny do prototypów i projektów hobbystycznych.',
      'qwen3-max': 'Największy flagowiec Alibaba. Jakość topowa dla wymagających obciążeń agentowych i czatu.',
      'qwen3-235b-a22b': 'Flagowy MoE na otwartych wagach z hybrydowym trybem rozumowania.',
      'qwen3-32b': 'Gęsty uniwersalny model na otwartych wagach, z trybem rozumowania i bez.',
      'qwen3-coder-plus': 'Model wyspecjalizowany w kodzie, dla agentowych narzędzi programistycznych i edycji w skali repozytorium.',
      'qwen-vl-max': 'Model wizyjno-językowy do rozumienia obrazów, OCR i wnioskowania na wykresach.',
      'kimi-k2-0905': 'MoE o bilionach parametrów, dostrojony do agentowego użycia narzędzi i długich dokumentów.',
      'kimi-k2-thinking': 'Wariant rozumujący K2 z przeplatanym myśleniem do zadań wieloetapowych.',
      'MiniMax-M2': 'Wydajny agentowy MoE —— faworyt agentów kodujących przy ograniczonym budżecie.',
      'gpt-image-2': 'Model generowania obrazów OpenAI —— tekst na obraz z mocnym trzymaniem się instrukcji.',
    },
  },

  pages: {
    home: {
      metaDescription: 'Korzystaj z potężnych modeli AI przez jedno API i twórz dzięki darmowym aplikacjom desktopowym local-first.',
      heroBadge: 'Dla programistów · Dla twórców',
      heroTitle: 'Twoja AI,',
      heroTitleBand: 'bez złożoności',
      heroSubtitle: 'Potężne modele AI przez jedno API, i twórz dzięki darmowym aplikacjom local-first',
      heroCtaApi: 'Pobierz klucz API',
      heroCtaApps: 'Aplikacje desktopowe',
      heroNote: 'Jedno konto na całą platformę',

      platformEyebrow: 'Jedna platforma',
      platformTitle: 'Jedna platforma dla programistów i twórców',
      platformIntro: 'BrushLLM to jedna platforma dla programistów i twórców: ujednolicony dostęp przez API do potężnych modeli AI w ramach {modelsLink}, plus rodzina {appsLink} —— funkcje AI w Image Studio rozliczane są przez to samo API.',
      platformModelsLink: 'Usług Modeli AI',
      platformAppsLink: 'darmowych aplikacji desktopowych local-first',

      apiCardBadge: 'Dla programistów',
      apiCardTitle: 'Usługi Modeli AI',
      apiCardSubtitle: 'Jedno API do potężnych modeli AI',
      apiCardDescription: 'Dostęp do potężnych modeli AI przez pojedyncze API —— {count} modeli, {providers} dostawców, ujednolicone i rozliczane według użycia.',
      apiCardBullets: [
        'Ujednolicony endpoint zgodny z OpenAI',
        'Modele czatu, rozumowania, wizji i obrazów',
        'Opublikowane ceny, pay-as-you-go, darmowe poziomy',
      ],
      apiCardChips: { models: 'Modele', pricing: 'Cennik', docs: 'Dokumentacja', console: 'Konsola' },
      apiCardCta: 'Poznaj modele AI',
      apiCardSecondary: 'Przeczytaj dokumentację',

      appsCardBadge: 'Dla twórców · Darmowe aplikacje',
      appsCardTitle: 'Aplikacje desktopowe',
      appsCardSubtitle: 'Darmowe narzędzia local-first do codziennej pracy',
      appsCardDescription: 'Image Studio, Video Studio i Player —— aplikacje desktopowe open source na macOS i Windows, zero telemetrii. Funkcje AI w Image Studio działają na tym samym API.',
      appsCardNote: 'Open source · macOS · Windows',
      appsCardCta: 'Poznaj aplikacje',

      appsSectionEyebrow: 'Aplikacje',
      appsSectionTitle: 'Darmowe aplikacje local-first,',
      appsSectionTitleBand: 'zbudowane na jednej platformie',
      appsSectionFooter: 'Szczegóły, zrzuty ekranu i instalatory na {link}',
      appsSectionFooterLink: 'stronie aplikacji →',

      benefitsEyebrow: 'Dlaczego nasze API',
      benefitsTitle: 'Wszystko, czego potrzebujesz,',
      benefitsTitleBand: 'niczego zbędnego',
      benefitsSubtitle: 'Proste, uczciwe narzędzia do budowania z modelami AI',
      benefits: [
        { title: 'Ujednolicone API', description: 'Jeden endpoint zgodny z OpenAI dla każdego modelu. Zatrzymaj swój SDK —— zmień jedną linię i wdrażaj' },
        { title: 'Wiele modeli', description: 'Modele czatu, rozumowania, wizji i obrazów od czołowych laboratoriów —— {count} modeli w jednym katalogu' },
        { title: 'Prosta integracja', description: 'Działa z każdym SDK OpenAI. Skopiuj, wklej, uruchom —— w cURL, Pythonie, Node.js lub Go' },
        { title: 'Ceny za użycie', description: 'Płać za to, czego używasz —— za token lub za obraz, w USD. Bez subskrypcji, a darmowe poziomy na start' },
      ],

      statsEyebrow: 'Dostępne modele, jedno API',
      stats: { providers: 'Dostawcy AI', models: 'Modele, jeden katalog', account: 'Konto', countries: 'Obsługiwane kraje' },
      statsCompare: 'Nasze ceny końcowe wygrywają z OpenRouter w 7 bezpośrednich porównaniach —— {link}',
      statsCompareLink: 'zobacz porównanie →',

      howEyebrow: 'Jak to działa',
      howTitle: 'Trzy kroki do pierwszego tokena',
      howSteps: [
        { title: 'Załóż konto', description: 'Zarejestruj się mailem i pobierz klucz API z konsoli. Bez karty kredytowej na start' },
        { title: 'Skieruj SDK na BrushLLM', description: 'Ustaw base URL i zostaw SDK OpenAI, którego już używasz' },
        { title: 'Wywołuj modele po id', description: 'Zamieniaj id modeli swobodnie —— cały katalog jest o jeden klucz stąd' },
      ],
      howCodeTitle: 'Zatrzymaj swój kod, zmień jedną linię',
      howCodeSubtitle: 'Jeśli działa z API OpenAI, działa z BrushLLM —— to samo zapytanie w czterech językach.',

      faqEyebrow: 'FAQ',
      faqTitle: 'Pytania, na które odpowiadamy',
      faqDevelopers: 'Dla programistów',
      faqCreators: 'Dla twórców',
      developerFaqs: [
        {
          question: 'Czym jest BrushLLM?',
          answer: 'BrushLLM to platforma AI dla programistów i twórców. Usługi Modeli AI dają programistom jedno API do potężnych modeli, a rodzina darmowych aplikacji desktopowych local-first —— Image Studio, Video Studio i Player —— obejmuje stronę twórców. Jedno konto obsługuje całą platformę.',
        },
        {
          question: 'Jak działa API?',
          answer: 'Skieruj dowolny SDK OpenAI na {apiBase} i użyj swojego klucza BrushLLM. Uzupełnienia czatu, wywołania narzędzi i streaming działają dokładnie tak, jak oczekujesz.',
        },
        {
          question: 'Które modele AI są dostępne?',
          answer: 'Katalog obejmuje {count} modeli od DeepSeek, Qwen, GLM, Kimi, MiniMax i OpenAI —— czat, rozumowanie, wizja i tekst na obraz. Pełna lista z aktualnymi cenami jest na stronie Modeli.',
        },
        {
          question: 'Czy API jest zgodne z OpenAI?',
          answer: 'Tak, w pełni. To, co działa z API OpenAI, działa z BrushLLM —— w tym agenty kodujące i CLI, jak Cursor, Cline, OpenCode i aider.',
        },
        {
          question: 'Jak rozliczane jest użycie?',
          answer: 'Wyłącznie pay-as-you-go w USD —— za token dla modeli tekstowych, za obraz dla modeli obrazowych. Bez subskrypcji ani minimów; kilka modeli ma darmowe poziomy.',
        },
        {
          question: 'Czy BrushLLM nadaje się dla startupów i firm?',
          answer: 'Tak. Jeden endpoint obejmuje wszystkich dostawców, ceny za użycie skalują się razem z Tobą, każdy klucz ma własny limit wydatków, a przy zobowiązanym wolumenie dostępne są rabaty.',
        },
        {
          question: 'Jak chronicie moją prywatność?',
          answer: 'Zbieramy tylko to, czego konto potrzebuje do działania. Bez trackerów, bez analityki, bez reklam —— Twoje prompty trafiają wprost do modelu nadrzędnego i nigdy nie są przechowywane, sprzedawane ani używane do profilowania.',
        },
      ],
      creatorFaqs: [
        {
          question: 'Czym jest Image Studio?',
          answer: 'Image Studio to darmowy desktopowy zestaw narzędzi BrushLLM do obrazów. Codzienne narzędzia —— konwersja, kompresja, kadrowanie, EXIF —— działają lokalnie i offline; funkcje AI, jak usuwanie tła i wypełnianie generatywne, przechodzą przez API BrushLLM, rozliczane za obraz.',
        },
        {
          question: 'Co mogę robić w Image Studio?',
          answer: 'Konwertuj, kompresuj, kadruj i porządkuj obrazy darmowymi narzędziami lokalnymi —— a potem generuj, usuwaj tła, wymazuj obiekty, wypełniaj i zmieniaj styl dzięki AI, rozliczane za obraz.',
        },
        {
          question: 'Czy mogę edytować istniejące obrazy?',
          answer: 'Tak. Otwórz dowolny obraz, zaznacz obszar lub całe płótno i opisz zmianę —— inpainting i usuwanie tła są wbudowane.',
        },
        {
          question: 'Czy mogę generować i przekształcać obrazy?',
          answer: 'Tak —— generowanie tekst-na-obraz i zmiana stylu działają w tym samym środowisku, napędzane przez GPT-Image z API BrushLLM.',
        },
        {
          question: 'Skąd pobrać aplikacje?',
          answer: 'Wszystkie trzy aplikacje —— Image Studio, Video Studio i Player —— są już dostępne w wydaniach GitHub BrushLLM, na macOS (Apple Silicon) i Windows.',
        },
        {
          question: 'Czy aplikacje są naprawdę darmowe?',
          answer: 'Tak. Wszystkie lokalne narzędzia są darmowe, a kod źródłowy jest na GitHubie. Tylko funkcje AI w Image Studio korzystają z API BrushLLM w modelu pay-as-you-go.',
        },
      ],

      ctaBuildTitle: 'Buduj z AI',
      ctaBuildText: 'Jedno API na {count} modeli —— ujednolicone, za użycie, zgodne z OpenAI',
      ctaCreateTitle: 'Twórz z AI',
      ctaCreateText: 'Darmowe aplikacje desktopowe local-first —— twórz i edytuj obrazy, wideo i multimedia, z supermocami AI w Image Studio',
    },

    models: {
      metaDescription: 'Przeglądaj {count} modeli AI —— od DeepSeek, Qwen, GLM i Kimi po GPT i tekst na obraz —— z oknami kontekstu, możliwościami i cenami orientacyjnymi.',
      eyebrow: 'Modele AI',
      title: '{count} modeli · {providers} dostawców ·',
      titleBand: 'Jeden endpoint',
      intro: 'Każdy model poniżej jest wywoływalny przez to samo API zgodne z OpenAI i ten sam klucz. Ceny są orientacyjne —— USD za 1M tokenów dla modeli tekstowych, USD za obraz dla modeli obrazowych{free}.',
      introFree: ' —— {count} modeli jest darmowych',
      searchPlaceholder: 'Szukaj po nazwie, id lub dostawcy…',
      searchLabel: 'Szukaj modeli',
      providerLabel: 'Dostawca',
      providerGroup: 'Filtruj po dostawcy',
      capabilityLabel: 'Możliwość',
      capabilityGroup: 'Filtruj po możliwości',
      all: 'Wszystkie',
      showing: 'Pokazuję {visible} z {total} modeli',
      empty: 'Żaden model nie pasuje do filtrów. Spróbuj innego słowa kluczowego, dostawcy, możliwości lub zastosowania.',
      footnote: 'Ceny są orientacyjnymi cenami katalogowymi w USD —— za 1M tokenów dla modeli tekstowych, za wygenerowany obraz dla modeli obrazowych —— i mogą różnić się od stawek skonfigurowanych w Twojej konsoli. Okna kontekstu to maksima obsługiwane przez poszczególne modele nadrzędne. Szczegóły integracji w {docsLink}.',
      footnoteDocsLink: 'dokumentacji',
      card: { type: 'Typ', perImage: 'Za obraz', output: 'Wyjście', context: 'Kontekst', input: 'Wejście / 1M', outputPer1M: 'Wyjście / 1M' },
    },

    pricing: {
      metaDescription: 'Proste ceny pay-as-you-go dla każdego modelu na BrushLLM —— orientacyjne ceny za token w USD, z kilkoma darmowymi poziomami.',
      eyebrow: 'Cennik',
      title: 'Płacisz za to, czego używasz,',
      titleBand: 'i tyle',
      intro: 'Modele tekstowe rozliczane są za token, a obrazowe za wygenerowany obraz —— wszystko w USD, bez subskrypcji ani minimów. To, co widzisz poniżej, to orientacyjna stawka katalogowa; dokładne stawki i saldo znajdziesz w konsoli.',
      highlights: [
        { title: 'Tylko pay-as-you-go', description: 'Rozliczenie za token w USD. Bez subskrypcji, bez minimów, bez gier z narzutami —— doładuj i działaj' },
        { title: '{count} darmowy model', description: 'GLM-4.5 Flash nic nie kosztuje —— idealny do prototypów i aplikacji hobbystycznych' },
        { title: 'Rabaty wolumenowe', description: 'Poważne wolumeny? Napisz do nas —— ustalimy stawki za zobowiązane użycie pod Twoje obciążenie' },
      ],
      textModelsTitle: 'Modele tekstowe —— za token',
      imageModelsTitle: 'Modele obrazowe —— za obraz',
      table: { model: 'Model', provider: 'Dostawca', context: 'Kontekst', input: 'Wejście / 1M', output: 'Wyjście / 1M', resolution: 'Rozdzielczość', pricePerImage: 'Cena / obraz' },
      footnote: 'Ceny są orientacyjnymi cenami katalogowymi w USD —— za 1M tokenów dla modeli tekstowych, za wygenerowany obraz dla modeli obrazowych. Rzeczywiste rozliczenie odbywa się w konsoli, gdzie możesz też śledzić wydatki per klucz API.',
      compareEyebrow: 'Sprawdzenie cen',
      compareTitle: 'Te same modele,',
      compareTitleBand: 'mniejsze rachunki końcowe',
      compareIntro: 'OpenRouter dolicza opłatę za płatność przy zakupie kredytów —— 5,5% kartą —— na cenę katalogową każdego modelu. Opublikowana stawka BrushLLM to ostateczna cena, którą płacisz.',
      compareTable: {
        model: 'Model',
        ours: 'BrushLLM we/wy za 1M',
        orList: 'OpenRouter katalog we/wy',
        orAllIn: 'OpenRouter łącznie* we/wy',
        youSave: 'Oszczędzasz',
        upTo: 'do {pct}%',
      },
      compareFootnote: '*Łącznie = cena katalogowa OpenRouter plus opłata 5,5% za zakup kredytów (Stripe; krypto 5%). Oszczędność porównuje końcową stawkę BrushLLM ze stawką łącznie OpenRouter. Ceny katalogowe OpenRouter z ich publicznego API, pobrane wrz 2026 —— orientacyjne; zweryfikuj aktualne stawki na obu platformach.',
      ctaTitle: 'Sprawdź saldo i stawki',
      ctaText: 'Doładuj, ustaw limity per klucz i oglądaj użycie w czasie rzeczywistym —— wszystko w konsoli',
    },

    docs: {
      metaDescription: 'Szybki start API BrushLLM —— uwierzytelnianie, base URL zgodny z OpenAI, przykłady SDK w czterech językach i pełna lista id modeli.',
      eyebrow: 'Dokumentacja',
      title: 'Szybki start,',
      titleBand: 'jednym pociągnięciem',
      intro: 'BrushLLM to bramka zgodna z OpenAI. Jeśli kiedykolwiek wołałeś API OpenAI, już wiesz, jak wołać BrushLLM —— oto wersja trzydziestosekundowa.',
      toc: { quickstart: 'Szybki start', firstRequest: 'Pierwsze zapytanie', modelIds: 'Id modeli', errors: 'Błędy' },
      tocLabel: 'Sekcje dokumentacji',
      steps: [
        {
          title: 'Zdobądź klucz API',
          description: '{createLink} lub {signInLink} do konsoli, a potem utwórz klucz. Klucze wyglądają jak {code} —— traktuj je jak hasła i ustaw limit wydatków, jeśli przekazujesz je narzędziom',
          createLink: 'Załóż konto',
          signInLink: 'zaloguj się',
        },
        {
          title: 'Ustaw base URL i klucz',
          description: 'Skieruj dowolny SDK OpenAI na nasz endpoint:',
          baseUrlLabel: 'base_url',
        },
        {
          title: 'Wywołuj modele po id',
          description: 'Przekaż jedno z id z tabeli poniżej jako {code}. To wszystko —— właśnie wołasz modele czołowych laboratoriów AI',
        },
      ],
      firstRequestTitle: 'Twoje pierwsze zapytanie',
      firstRequestText: 'To samo zapytanie w czterech językach —— ze streamingiem. Skopiuj, wklej, uruchom',
      modelIdsTitle: 'Id modeli',
      modelIdsText: 'Używaj dokładnie tych id (z rozróżnieniem wielkości liter). Opisy i możliwości na {modelsLink}. Modele obrazowe wołane są przez {code} z tym samym kluczem API.',
      modelIdsModelsLink: 'stronie modeli',
      modelIdsTable: { id: 'Id modelu', name: 'Nazwa wyświetlana', context: 'Kontekst' },
      errorsTitle: 'Błędy',
      errorsTable: { status: 'Status', meaning: 'Znaczenie', fix: 'Co zrobić' },
      errors: [
        { meaning: 'Nieprawidłowy lub brakujący klucz API', fix: 'Sprawdź, czy Twój klucz zaczyna się od „brsh-” i nie został unieważniony w konsoli.' },
        { meaning: 'Nieznane id modelu', fix: 'Użyj id dokładnie tak, jak w tabeli powyżej —— wielkość liter ma znaczenie.' },
        { meaning: 'Limit zapytań lub przekroczona kwota', fix: 'Poczekaj i spróbuj ponownie z backoffem, albo podnieś kwotę tego klucza w konsoli.' },
        { meaning: 'Niewystarczające saldo', fix: 'Doładuj konto w konsoli i ponów zapytanie.' },
        { meaning: 'Błąd dostawcy nadrzędnego', fix: 'Spróbuj ponownie po kilku sekundach; jeśli się utrzymuje, zmień id modelu lub skontaktuj się z pomocą.' },
      ],
      helpTitle: 'Coś Cię blokuje?',
      helpText: 'Sprawdź konsolę dla kluczy, kwot i rozliczeń albo napisz na {email}',
    },

    apps: {
      metaDescription: 'Aplikacje desktopowe BrushLLM —— Image Studio, Video Studio i Player. Darmowe, local-first, open source, na macOS i Windows.',
      eyebrow: 'Aplikacje',
      title: 'Darmowe aplikacje local-first,',
      titleBand: 'open source',
      intro: 'Trzy narzędzia desktopowe na macOS i Windows —— zero telemetrii, zero kont, bez reklam. Funkcje AI w Image Studio podpięte są wprost pod API BrushLLM.',
      apiTitle: 'API stojące za funkcjami AI',
      apiText: 'Narzędzia AI w Image Studio działają na bramce BrushLLM —— jeden endpoint zgodny z OpenAI, opublikowane stawki za obraz.',
    },

    studio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Aplikacja desktopowa · Darmowa + AI za użycie',
      intro: 'Każde lokalne narzędzie jest darmowe i działa w całości na Twoim urządzeniu —— silnik Rust, zero wysyłania. Funkcje AI wołają to samo {apiLink}, które napędza resztę platformy, rozliczane za obraz według {ratesLink}.',
      introApiLink: 'API BrushLLM',
      introRatesLink: 'opublikowanych stawek',
      outro: 'Zobacz modele obrazowe stojące za narzędziami AI →',
      groups: [
        {
          title: 'Narzędzia lokalne —— darmowe, offline, prywatne',
          items: [
            { title: 'Konwertuj i kompresuj', description: '8 formatów wejściowych do 8 wyjściowych (w tym AVIF i WebP), z resamplingiem Lanczosa i kontrolą jakości.' },
            { title: 'Skaluj, kadruj i obracaj', description: 'Przyjazne wsadowo narzędzia geometryczne z dokładnymi wymiarami w pikselach i presetami proporcji.' },
            { title: 'Znaki wodne i adnotacje', description: 'Znaki wodne tekstowe i graficzne, strzałki, ramki i odręczne adnotacje do zrzutów i dokumentów.' },
            { title: 'EXIF: podgląd, edycja i czyszczenie', description: 'Przejrzyj pełne metadane, przepisz pola albo usuń lokalizację i dane aparatu przed udostępnieniem.' },
            { title: 'Sklejanie, mozaika i cienie', description: 'Łącz obrazy w siatki, pikselizuj obszary, dodawaj zaokrąglone rogi i cienie.' },
            { title: 'Narzędzia kolorów', description: 'Jasność, kontrast i nasycenie, zastępowanie kolorów oraz powiększająca pipeta.' },
          ],
        },
        {
          title: 'Narzędzia AI —— napędzane bramką BrushLLM',
          items: [
            { title: 'Generuj obrazy', description: 'Tekst na obraz z GPT-Image —— rozliczane za wygenerowany obraz, bez subskrypcji.' },
            { title: 'Usuwaj tła', description: 'Wycinki jednym kliknięciem z czystymi krawędziami, prosto z pulpitu.' },
            { title: 'Usuwaj obiekty i znaki wodne', description: 'Zaznacz obszar i opisz, co ma zniknąć —— inpainting to wypełni.' },
            { title: 'Wypełnianie generatywne', description: 'Rozszerzaj, zastępuj lub zamieniaj treść, opcjonalnie z obrazami referencyjnymi (np. zamiana osoby).' },
            { title: 'Zmiana stylu', description: 'Przemaluj obraz w nowym stylu, zachowując kompozycję i tożsamość.' },
            { title: 'Twój klucz, Twoja kwota', description: 'Klucz API żyje w systemowym pęku kluczy; każdy klucz ma własny limit wydatków z konsoli.' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Aplikacja desktopowa · Darmowa',
      intro: 'Przetwarzanie w 100% lokalne —— Twoje multimedia nigdy nie opuszczają maszyny. Binaria FFmpeg są przypięte i zweryfikowane SHA-256, silnik prowadzi pauzowalną kolejkę zadań, a 175 testów automatycznych pilnuje uczciwości zestawu.',
      groups: [
        {
          title: 'Wideo',
          items: [
            { title: 'Konwertuj', description: 'MP4, MKV, WebM, MOV i AVI z kodekami H.264, H.265, VP9 lub AV1.' },
            { title: 'Kompresuj', description: 'Kompresja oparta na jakości (CRF) lub docelowym bitrate z szacowaniem rozmiaru na żywo.' },
            { title: 'Łącz i przycinaj', description: 'Spinaj klipy po kolei, tnij segmenty z dokładnością co do klatki punktów wejścia/wyjścia.' },
            { title: 'Kadruj, skaluj i obracaj', description: 'Poprawki geometryczne dla materiału źle zorientowanego lub z pasami.' },
            { title: 'Zmień prędkość', description: 'Od 0,25× do 4× prędkości odtwarzania z korektą wysokości tonu.' },
            { title: 'Klatki, GIF-y i WebP', description: 'Wyciągaj klatki statyczne albo zamieniaj klipy na animowane GIF/WebP.' },
          ],
        },
        {
          title: 'Audio',
          items: [
            { title: 'Wyciągaj i konwertuj', description: 'Wyciągaj audio do MP3, M4A, FLAC, WAV, OGG lub Opus.' },
            { title: 'Normalizacja głośności', description: 'Normalizacja EBU R128 dla spójnej głośności między plikami.' },
            { title: 'Głośność i wzmocnienie', description: 'Podnoś lub ściszaj bez ponownego kodowania wideo, gdzie się da.' },
            { title: 'Wycisz lub zamień', description: 'Usuwanie ścieżek audio albo podmiana ścieżki dźwiękowej.' },
            { title: 'Przycinaj', description: 'Tnij segmenty audio z dokładnością punktów wejścia/wyjścia jak przy wideo.' },
          ],
        },
        {
          title: 'Napisy',
          items: [
            { title: 'Osadzaj lub wypalaj', description: 'Doklejaj miękkie ścieżki napisów albo wypalaj je trwale w obrazie.' },
            { title: 'Konwertuj formaty', description: 'SRT, VTT, ASS, SSA i TTML —— z własnym silnikiem napisów bez zależności.' },
            { title: 'Napraw kodowania', description: 'Automatycznie naprawiaj starsze pliki GBK/Big5 do czystego UTF-8.' },
            { title: 'Przesuwaj timing', description: 'Przesuwaj napisy hurtowo wcześniej lub później, zsynchronizowane z wideo.' },
            { title: 'Wyciągaj', description: 'Wyciągaj istniejące ścieżki napisów z dowolnego kontenera.' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Aplikacja desktopowa · Open source',
      intro: 'Aplikacja na macOS to natywna konstrukcja Swift + SwiftUI wokół libmpv; wersja na Windows to przepisanie w Tauri z tym samym rdzeniem mpv. Zero telemetrii, sprawdzanie aktualizacji tylko na Twoje życzenie.',
      groups: [
        {
          title: 'Odtwarzanie',
          items: [
            { title: 'Każdy format', description: 'Na mpv: MKV, MP4, AVI, MOV, WebM, FLAC, MP3 i wszystko, co odtwarza mpv.' },
            { title: 'Wyjście HDR', description: 'Passthrough PQ i EDR na obsługiwanych ekranach, z przełączalnym dekodowaniem sprzętowym.' },
            { title: 'Obrazy dysków', description: 'Odtwarzaj obrazy ISO Blu-ray i DVD bezpośrednio.' },
            { title: 'Sterowanie', description: 'Pętla A-B, prędkość odtwarzania, krok o klatkę, rozdziały i zrzuty ekranu.' },
            { title: 'Playlisty i historia', description: 'Playlisty przestawiane przeciąganiem, wznawianie od miejsca, zakładki.' },
            { title: 'Mini-okno', description: 'Pływający, zawsze na wierzchu mini-odtwarzacz do multitaskingu.' },
          ],
        },
        {
          title: 'Streaming',
          items: [
            { title: 'WebDAV i SMB', description: 'Przeglądaj i streamuj z NAS-a —— w tym natywne montowanie SMB na macOS.' },
            { title: 'FTP', description: 'Wbudowany klient FTP z przeglądaniem katalogów i bezpośrednim streamingiem.' },
            { title: 'Emby i Jellyfin', description: 'Zaloguj się, przeglądaj biblioteki i streamuj bezpośrednio bez transkodowania.' },
            { title: 'HTTP i HLS', description: 'Odtwarzaj linki i strumienie m3u8/HLS z regulowanym buforem odczytu z wyprzedzeniem.' },
          ],
        },
        {
          title: 'Napisy i narzędzia',
          items: [
            { title: 'Napisy ładowane automatycznie', description: 'Pasujące pliki poboczne ładują się same; zewnętrzne na żądanie.' },
            { title: 'Stylowanie na żywo', description: 'Czcionka, rozmiar, kolor i pozycja —— restylowane podczas oglądania.' },
            { title: 'Equalizer i nagrywanie', description: 'Equalizer audio plus nagrywanie strumieni do archiwizacji.' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'BrushLLM tworzy produkty AI dla programistów i twórców —— ujednolicone API do potężnych modeli AI oraz darmowe aplikacje desktopowe local-first do obrazów, wideo i multimediów.',
      eyebrow: 'O nas',
      title: 'Produkty AI dla',
      titleBand: 'programistów i twórców',
      intro: 'BrushLLM tworzy produkty AI dla programistów i twórców. Jedna platforma, jedno konto —— i ta sama obietnica po obu stronach: proste narzędzia, opublikowane ceny, prywatność z samego projektu.',
      forDevelopers: 'Dla programistów.',
      forDevelopersText: '{link} —— ujednolicone API dostępu do potężnych modeli AI. {count} modeli od DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI i innych, za jednym endpointem zgodnym z OpenAI.',
      forDevelopersLink: 'Usługi Modeli AI',
      forCreators: 'Dla twórców.',
      forCreatorsText: '{link} —— darmowe aplikacje desktopowe local-first na macOS i Windows. Image Studio łączy darmowe lokalne narzędzia z edycją AI przez to samo API; wszystkie trzy są open source bez telemetrii.',
      forCreatorsLink: 'Image Studio, Video Studio i Player',
      values: [
        { title: 'Otwarte na świat', description: 'Przednia AI nie powinna wymagać osobnych kont, lokalnych przeszkód płatniczych ani blokad regionalnych —— ani kosztować fortuny. Jedna rejestracja, w USD, z każdego kraju' },
        { title: 'Jedna platforma, jedno konto', description: 'Jedna platforma, jedno konto, jedna faktura. Jeśli integracja z nami trwa dłużej niż przerwa na kawę, to nasz bug, nie Twój problem' },
        { title: 'Uczciwe ceny', description: 'Opublikowane stawki za token, bez pułapek subskrypcyjnych, i darmowe poziomy, które darmowe zostają. Zawsze powinieneś wiedzieć, ile kosztuje zapytanie' },
        { title: 'Prywatność z projektu', description: 'Zbieramy tylko to, czego konto potrzebuje do działania. Bez trackerów, bez analityki, bez reklam —— Twoje prompty nigdy nie są przechowywane, sprzedawane ani używane do profilowania' },
      ],
      familyTitle: 'Rodzina BrushLLM',
      familyText: 'Jedna platforma, dwie ścieżki —— ujednolicone API dla programistów i rodzina darmowych aplikacji desktopowych local-first dla twórców.',
      familyApiTitle: 'Usługi Modeli AI',
      familyApiText: 'Jeden endpoint zgodny z OpenAI na {count} modeli od {providers} dostawców —— płatność za token lub za obraz.',
      contactTitle: 'Porozmawiaj z nami',
      contactText: 'Pytania, ceny wolumenowe albo model, który chcesz, byśmy dodali —— czytamy wszystko',
      contactCta: 'Rozpocznij',
    },

    notFound: {
      metaDescription: 'Nie udało się znaleźć tej strony.',
      code: '404 · POZA PŁÓTNEM',
      title: 'Tę stronę zamalowano',
      text: 'Link może być nieaktualny albo strona się przeniosła. Modele jednak są dokładnie tam, gdzie je zostawiłeś.',
      backHome: 'Wróć na stronę główną',
      browseModels: 'Zobacz modele',
    },
  },
};

export default pl;
