/**
 * Deutsch. Struktur identisch mit en.ts (durch den Dictionary-Typ erzwungen).
 * Platzhalter {count}/{year}/{pct} bleiben erhalten und werden beim Rendern ersetzt.
 * Nicht übersetzt: Modell-ids, URLs, Codebeispiele, Preise, Lizenzkennungen, Produktnamen.
 */
import type { Dictionary } from '../index';

const de: Dictionary = {
  site: {
    title: 'BrushLLM — Deine KI, ohne die Komplexität',
    description: 'Greife über eine API auf leistungsstarke KI-Modelle zu und erschaffe mit kostenlosen Local-First-Desktop-Apps. BrushLLM ist eine KI-Plattform für Entwickler und Kreative.',
    organizationDescription: 'BrushLLM ist eine KI-Plattform für Entwickler und Kreative mit KI-Modell-Diensten (eine API für leistungsstarke KI-Modelle) und kostenlosen Local-First-Desktop-Apps —— Image Studio, Video Studio und Player.',
  },

  nav: {
    models: 'KI-Modelle',
    apps: 'Apps',
    pricing: 'Preise',
    docs: 'Dokumentation',
    about: 'Über uns',
  },

  header: {
    home: 'BrushLLM Startseite',
    mainNav: 'Hauptnavigation',
    mobileNav: 'Mobile Navigation',
    logIn: 'Anmelden',
    getStarted: 'Loslegen',
    toggleMenu: 'Menü umschalten',
  },

  languageSwitcher: {
    label: 'Sprache',
    system: 'Auto',
    systemTitle: 'Browsersprache folgen',
  },

  appPage: {
    openSourceTitle: 'Open Source, ehrliche Software',
    openSourceText: 'Quellcode, Issues und Releases leben auf GitHub{license}. Keine Telemetrie, keine Konten, keine Werbung.',
  },

  footer: {
    blurb: 'BrushLLM —— KI für Entwickler und Kreative. Leistungsstarke KI-Modelle über eine API, dazu kostenlose Local-First-Desktop-Apps. Wir schützen deine Privatsphäre: keine Tracker, keine Analysen, keine Werbung.',
    tagline: 'Eine API · Drei kostenlose Apps · Privacy zuerst',
    product: 'Produkt',
    console: 'Konsole',
    company: 'Unternehmen',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: 'Über BrushLLM',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: 'Basiert auf einem OpenAI-kompatiblen Gateway',
  },

  common: {
    download: 'Herunterladen',
    github: 'GitHub',
    tryIt: 'Ausprobieren',
    featured: 'Empfohlen',
    free: 'Kostenlos',
    copy: 'Kopieren',
    copied: 'Kopiert!',
    copyFallback: '⌘C drücken',
    learnMore: 'Mehr erfahren',
    learnMoreArrow: 'Mehr erfahren',
    downloadArrow: 'Herunterladen',
    exploreAiModels: 'KI-Modelle entdecken',
    exploreTheApps: 'Apps entdecken',
    exploreTheApi: 'API entdecken',
    browseModels: 'Modelle ansehen',
    openTheConsole: 'Konsole öffnen',
    readTheDocs: 'Dokumentation lesen',
  },

  data: {
    capability: {
      chat: 'Chat',
      reasoning: 'Reasoning',
      tools: 'Tool-Aufrufe',
      vision: 'Vision',
      'long-context': 'Langer Kontext',
      image: 'Text-zu-Bild',
    },
    apps: {
      'image-studio': {
        tagline: 'Local-First-KI-Bildwerkzeug',
        description: 'Ein kostenloses Desktop-Bildwerkzeug. Alltägliche Bearbeitungen —— Konvertieren, Komprimieren, Zuschneiden, Wasserzeichen, EXIF —— laufen vollständig auf deinem Gerät; KI-Funktionen wie Hintergrundentfernung und generatives Füllen laufen über das BrushLLM-Gateway, abgerechnet pro Bild.',
        highlights: ['25+ lokale Werkzeuge', 'KI-Bearbeitung über die BrushLLM API', '9 Sprachen', 'Keine Telemetrie'],
      },
      'video-studio': {
        tagline: 'Lokales Werkzeug für Video, Audio und Untertitel',
        description: 'Eine kostenlose Offline-Toolbox für Video-, Audio- und Untertitelverarbeitung. Konvertieren, Komprimieren, Zusammenführen, Trimmen, Lautstärke normalisieren, Untertitel-Kodierungen reparieren —— 100% lokale Verarbeitung, null Netzwerkanfragen.',
        highlights: ['25+ Werkzeuge', '100% lokale Verarbeitung', '9 Sprachen', 'Keine Netzwerkanfragen'],
      },
      player: {
        tagline: 'Open-Source-Mediaplayer auf mpv-Basis',
        description: 'Ein plattformübergreifender Open-Source-Mediaplayer. Jedes Format, das mpv abspielt, plus Streaming von WebDAV, SMB, FTP, Emby und Jellyfin —— mit HDR-Ausgabe, Hardware-Dekodierung und 9-sprachiger Oberfläche.',
        highlights: ['Jedes Format via mpv', 'WebDAV · SMB · Emby · Jellyfin', 'HDR und Hardware-Dekodierung', '9 Sprachen'],
      },
    },
    models: {
      'gpt-5.2': 'ChatGPTs Flaggschiff —— stark in allgemeinem Reasoning, Vision und Tool-Nutzung.',
      'gpt-5.2-mini': 'Schnelle, günstige ChatGPT-Stufe für hochvolumigen Chat, Klassifikation und Extraktion.',
      'deepseek-chat': 'Flaggschiff-Modell ohne Denkmodus. Schnell, günstig und hervorragend bei allgemeinem Chat und Tool-Nutzung.',
      'deepseek-reasoner': 'Reasoning-Modell mit sichtbarer Gedankenkette für Mathe, Code und schwierige Probleme.',
      'glm-4.6': 'Z.ai-Flaggschiff. Stark bei Coding, Schreiben und agentischer Planung; 200K Kontext.',
      'glm-4.5-air': 'Leichteres GLM, abgestimmt auf kostenbewussten Produktionsverkehr.',
      'glm-4.5-flash': 'Kostenlose Stufe der GLM-Familie —— ideal für Prototypen und Hobbyprojekte.',
      'qwen3-max': 'Alibabas größtes Flaggschiff. Höchste Qualität für anspruchsvolle agentische und Chat-Workloads.',
      'qwen3-235b-a22b': 'Open-Weights-MoE-Flaggschiff mit hybriden Denkmodus.',
      'qwen3-32b': 'Dichtes Open-Weights-Allzweckmodell mit Denk- und Nicht-Denk-Modus.',
      'qwen3-coder-plus': 'Code-spezialisiertes Modell für agentische Coding-Tools und Repository-skalige Änderungen.',
      'qwen-vl-max': 'Vision-Language-Modell für Bildverständnis, OCR und Chart-Reasoning.',
      'kimi-k2-0905': 'Trillion-Parameter-MoE, optimiert für agentische Tool-Nutzung und lange Dokumente.',
      'kimi-k2-thinking': 'Reasoning-Variante des K2 mit verschachteltem Denken für mehrstufige Aufgaben.',
      'MiniMax-M2': 'Effizientes agentisches MoE —— ein Favorit für Coding-Agenten mit kleinem Budget.',
      'gpt-image-2': 'OpenAIs Bildgenerierungsmodell —— Prompt-zu-Bild mit starker Befehlsfolge.',
    },
  },

  pages: {
    home: {
      metaDescription: 'Greife über eine API auf leistungsstarke KI-Modelle zu und erschaffe mit kostenlosen Local-First-Desktop-Apps.',
      heroBadge: 'Für Entwickler · Für Kreative',
      heroTitle: 'Deine KI,',
      heroTitleBand: 'ohne die Komplexität',
      heroSubtitle: 'Leistungsstarke KI-Modelle über eine API —— und Kreativität mit kostenlosen Local-First-Apps',
      heroCtaApi: 'API-Key holen',
      heroCtaApps: 'Desktop-Apps',
      heroNote: 'Ein Konto für die ganze Plattform',

      platformEyebrow: 'Eine Plattform',
      platformTitle: 'Eine Plattform für Entwickler und Kreative',
      platformIntro: 'BrushLLM ist eine Plattform für Entwickler und Kreative: einheitlicher API-Zugriff auf leistungsstarke KI-Modelle über {modelsLink}, plus eine Familie {appsLink} —— die KI-Funktionen von Image Studio werden über dieselbe API abgerechnet.',
      platformModelsLink: 'KI-Modell-Dienste',
      platformAppsLink: 'kostenloser Local-First-Desktop-Apps',

      apiCardBadge: 'Für Entwickler',
      apiCardTitle: 'KI-Modell-Dienste',
      apiCardSubtitle: 'Eine API für leistungsstarke KI-Modelle',
      apiCardDescription: 'Leistungsstarke KI-Modelle über eine einzige API —— {count} Modelle, {providers} Anbieter, einheitlich und nutzungsbasiert.',
      apiCardBullets: [
        'Einheitlicher, OpenAI-kompatibler Endpunkt',
        'Chat-, Reasoning-, Vision- und Bildmodelle',
        'Veröffentlichte Preise, Pay-as-you-go, kostenlose Stufen',
      ],
      apiCardChips: { models: 'Modelle', pricing: 'Preise', docs: 'Doku', console: 'Konsole' },
      apiCardCta: 'KI-Modelle entdecken',
      apiCardSecondary: 'Dokumentation lesen',

      appsCardBadge: 'Für Kreative · Kostenlose Apps',
      appsCardTitle: 'Desktop-Apps',
      appsCardSubtitle: 'Kostenlose Local-First-Werkzeuge für die tägliche Arbeit',
      appsCardDescription: 'Image Studio, Video Studio und Player —— Open-Source-Desktop-Apps für macOS und Windows, ohne Telemetrie. Image Studios KI-Funktionen laufen über dieselbe API.',
      appsCardNote: 'Open Source · macOS · Windows',
      appsCardCta: 'Apps entdecken',

      appsSectionEyebrow: 'Apps',
      appsSectionTitle: 'Kostenlose Local-First-Apps,',
      appsSectionTitleBand: 'auf einer Plattform gebaut',
      appsSectionFooter: 'Details, Screenshots und Installer auf der {link}',
      appsSectionFooterLink: 'App-Seite',

      benefitsEyebrow: 'Warum unsere API',
      benefitsTitle: 'Alles, was du brauchst,',
      benefitsTitleBand: 'nichts, was du nicht brauchst',
      benefitsSubtitle: 'Einfache, ehrliche Werkzeuge für die Arbeit mit KI-Modellen',
      benefits: [
        { title: 'Einheitliche API', description: 'Ein OpenAI-kompatibler Endpunkt für jedes Modell. Behalte dein SDK —— ändere eine Zeile und shippe' },
        { title: 'Mehrere Modelle', description: 'Chat-, Reasoning-, Vision- und Bildmodelle führender Labs —— {count} Modelle in einem Katalog' },
        { title: 'Einfache Integration', description: 'Funktioniert mit jedem OpenAI-SDK. Kopieren, einfügen, loslaufen —— in cURL, Python, Node.js oder Go' },
        { title: 'Nutzungsbasierte Preise', description: 'Zahle, was du nutzt —— pro Token oder pro Bild, in USD. Keine Abos, kostenlose Stufen zum Start' },
      ],

      statsEyebrow: 'Verfügbare Modelle, eine API',
      stats: { providers: 'KI-Anbieter', models: 'Modelle, ein Katalog', account: 'Konto', countries: 'Bediente Länder' },
      statsCompare: 'Unsere Endpreise schlagen OpenRouter bei 7 Direktvergleichen —— {link}',
      statsCompareLink: 'siehe den Vergleich',

      howEyebrow: 'So funktioniert es',
      howTitle: 'Drei Schritte zu deinem ersten Token',
      howSteps: [
        { title: 'Konto erstellen', description: 'Mit E-Mail registrieren und im Dashboard einen API-Key holen. Zum Start keine Kreditkarte nötig' },
        { title: 'SDK auf BrushLLM richten', description: 'Base-URL setzen und das OpenAI-SDK behalten, das du schon nutzt' },
        { title: 'Beliebiges Modell per id aufrufen', description: 'Modell-ids frei wechseln —— der ganze Katalog ist nur einen Key entfernt' },
      ],
      howCodeTitle: 'Behalte deinen Code, ändere eine Zeile',
      howCodeSubtitle: 'Was mit der OpenAI-API funktioniert, funktioniert mit BrushLLM —— dieselbe Anfrage in vier Sprachen.',

      faqEyebrow: 'FAQ',
      faqTitle: 'Fragen, beantwortet',
      faqDevelopers: 'Für Entwickler',
      faqCreators: 'Für Kreative',
      developerFaqs: [
        {
          question: 'Was ist BrushLLM?',
          answer: 'BrushLLM ist eine KI-Plattform für Entwickler und Kreative. Die KI-Modell-Dienste geben Entwicklern eine API für leistungsstarke KI-Modelle; eine Familie kostenloser Local-First-Desktop-Apps —— Image Studio, Video Studio und Player —— deckt die Seite der Kreativen ab. Ein Konto gilt für die ganze Plattform.',
        },
        {
          question: 'Wie funktioniert die API?',
          answer: 'Richte ein beliebiges OpenAI-SDK auf {apiBase} und nutze deinen BrushLLM-Key. Chat Completions, Tool-Aufrufe und Streaming verhalten sich genau wie erwartet.',
        },
        {
          question: 'Welche KI-Modelle sind verfügbar?',
          answer: 'Der Katalog umfasst {count} Modelle von DeepSeek, Qwen, GLM, Kimi, MiniMax und OpenAI —— Chat, Reasoning, Vision und Text-zu-Bild. Die vollständige Liste mit Live-Preisen findest du auf der Modell-Seite.',
        },
        {
          question: 'Ist die API OpenAI-kompatibel?',
          answer: 'Ja, vollständig. Was mit der OpenAI-API funktioniert, funktioniert mit BrushLLM —— inklusive Coding-Agenten und CLIs wie Cursor, Cline, OpenCode und aider.',
        },
        {
          question: 'Wie wird die Nutzung abgerechnet?',
          answer: 'Streng Pay-as-you-go in USD —— pro Token für Textmodelle, pro Bild für Bildmodelle. Keine Abos oder Mindestbeträge; mehrere Modelle haben kostenlose Stufen.',
        },
        {
          question: 'Ist BrushLLM für Start-ups und Unternehmen geeignet?',
          answer: 'Ja. Ein Endpunkt deckt jeden Anbieter ab, nutzungsbasierte Preise skalieren mit dir, jeder Key hat ein eigenes Ausgabenlimit, und für fest zugesagte Nutzung gibt es Mengenrabatte.',
        },
        {
          question: 'Wie schützt ihr meine Privatsphäre?',
          answer: 'Wir sammeln nur, was ein Konto zum Funktionieren braucht. Keine Tracker, keine Analysen, keine Werbung —— deine Prompts werden direkt an das vorgelagerte Modell weitergeleitet und niemals gespeichert, verkauft oder zur Profilierung genutzt.',
        },
      ],
      creatorFaqs: [
        {
          question: 'Was ist Image Studio?',
          answer: 'Image Studio ist BrushLLMs kostenloses Desktop-Bildwerkzeug. Alltägliche Werkzeuge —— Konvertieren, Komprimieren, Zuschneiden, EXIF —— laufen lokal und offline; KI-Funktionen wie Hintergrundentfernung und generatives Füllen laufen über die BrushLLM-API, abgerechnet pro Bild.',
        },
        {
          question: 'Was kann ich mit Image Studio machen?',
          answer: 'Bilder mit kostenlosen lokalen Werkzeugen konvertieren, komprimieren, zuschneiden und bereinigen —— dann generieren, Hintergründe entfernen, Objekte löschen, ausfüllen und umgestalten mit KI, abgerechnet pro Bild.',
        },
        {
          question: 'Kann ich vorhandene Bilder bearbeiten?',
          answer: 'Ja. Öffne ein Bild, wähle einen Bereich oder die ganze Leinwand und beschreibe die Änderung —— Inpainting und Hintergrundentfernung sind eingebaut.',
        },
        {
          question: 'Kann ich Bilder generieren und umwandeln?',
          answer: 'Ja —— Text-zu-Bild-Generierung und Stil-Umwandlung laufen im selben Workspace, angetrieben von GPT-Image über die BrushLLM-API.',
        },
        {
          question: 'Wo bekomme ich die Apps?',
          answer: 'Alle drei Apps —— Image Studio, Video Studio und Player —— sind jetzt über die BrushLLM-GitHub-Releases verfügbar, für macOS (Apple Silicon) und Windows.',
        },
        {
          question: 'Sind die Apps wirklich kostenlos?',
          answer: 'Ja. Alle lokalen Werkzeuge sind kostenlos und der Quellcode liegt auf GitHub. Nur die KI-Funktionen in Image Studio nutzen die Pay-as-you-go-BrushLLM-API.',
        },
      ],

      ctaBuildTitle: 'Baue mit KI',
      ctaBuildText: 'Eine API für {count} Modelle —— einheitlich, nutzungsbasiert, OpenAI-kompatibel',
      ctaCreateTitle: 'Erschaffe mit KI',
      ctaCreateText: 'Kostenlose Local-First-Desktop-Apps —— Bilder, Video und Medien erstellen und bearbeiten, mit KI-Superkräften in Image Studio',
    },

    models: {
      metaDescription: '{count} KI-Modelle durchsuchen —— von DeepSeek, Qwen, GLM und Kimi bis GPT und Text-zu-Bild —— mit Kontextfenstern, Fähigkeiten und Richtpreisen.',
      eyebrow: 'KI-Modelle',
      title: '{count} Modelle · {providers} Anbieter ·',
      titleBand: 'Ein Endpunkt',
      intro: 'Jedes Modell unten ist über dieselbe OpenAI-kompatible API und denselben Key aufrufbar. Preise sind Richtwerte —— USD pro 1M Tokens für Textmodelle, USD pro Bild für Bildmodelle{free}.',
      introFree: ' —— {count} Modelle sind kostenlos',
      searchPlaceholder: 'Nach Name, id oder Anbieter suchen…',
      searchLabel: 'Modelle suchen',
      providerLabel: 'Anbieter',
      providerGroup: 'Nach Anbieter filtern',
      capabilityLabel: 'Fähigkeit',
      capabilityGroup: 'Nach Fähigkeit filtern',
      all: 'Alle',
      showing: '{visible} von {total} Modellen',
      empty: 'Keine Modelle passen zu deinen Filtern. Versuche ein anderes Stichwort, einen anderen Anbieter, eine Fähigkeit oder Anwendungsfall.',
      footnote: 'Preise sind Richtwerte in USD —— pro 1M Tokens für Textmodelle, pro generiertem Bild für Bildmodelle —— und können von den in deiner Konsole konfigurierten Sätzen abweichen. Kontextfenster sind das Maximum jedes vorgelagerten Modells. Details zur Integration in der {docsLink}.',
      footnoteDocsLink: 'Dokumentation',
      card: { type: 'Typ', perImage: 'Pro Bild', output: 'Ausgabe', context: 'Kontext', input: 'Input / 1M', outputPer1M: 'Output / 1M' },
    },

    pricing: {
      metaDescription: 'Einfache Pay-as-you-go-Preise für jedes Modell auf BrushLLM —— Richtwerte pro Token in USD, mit mehreren kostenlosen Stufen.',
      eyebrow: 'Preise',
      title: 'Zahle, was du nutzt,',
      titleBand: 'das war’s',
      intro: 'Textmodelle werden pro Token abgerechnet, Bildmodelle pro generiertem Bild —— alles in USD, ohne Abos oder Mindestbeträge. Was du unten siehst, ist der Richtwert des Katalogs; deine genauen Sätze und dein Guthaben leben in der Konsole.',
      highlights: [
        { title: 'Nur Pay-as-you-go', description: 'Abrechnung pro Token in USD. Keine Abos, keine Mindestbeträge, keine Aufschlag-Spiele —— aufladen und los' },
        { title: '{count} kostenloses Modell', description: 'GLM-4.5 Flash kostet nichts —— perfekt für Prototypen und Hobby-Apps' },
        { title: 'Mengenrabatte', description: 'Ernsthafte Mengen im Einsatz? Melde dich —— wir finden Sätze für fest zugesagte Nutzung' },
      ],
      textModelsTitle: 'Textmodelle —— pro Token',
      imageModelsTitle: 'Bildmodelle —— pro Bild',
      table: { model: 'Modell', provider: 'Anbieter', context: 'Kontext', input: 'Input / 1M', output: 'Output / 1M', resolution: 'Auflösung', pricePerImage: 'Preis / Bild' },
      footnote: 'Preise sind Richtwerte in USD —— pro 1M Tokens für Textmodelle, pro generiertem Bild für Bildmodelle. Die tatsächliche Abrechnung erfolgt in deiner Konsole, wo du auch Ausgaben pro API-Key verfolgen kannst.',
      compareEyebrow: 'Preischeck',
      compareTitle: 'Dieselben Modelle,',
      compareTitleBand: 'kleinere Endrechnungen',
      compareIntro: 'OpenRouter erhebt beim Kreditkauf eine Zahlungsgebühr —— 5,5% per Karte —— obendrauf auf den Listenpreis jedes Modells. BrushLLMs veröffentlichter Preis ist der Endpreis, den du zahlst.',
      compareTable: {
        model: 'Modell',
        ours: 'BrushLLM in / out pro 1M',
        orList: 'OpenRouter Liste in / out',
        orAllIn: 'OpenRouter Endpreis* in / out',
        youSave: 'Du sparst',
        upTo: 'bis zu {pct}%',
      },
      compareFootnote: '*Endpreis = OpenRouter-Listenpreis plus der 5,5%-Gebühr beim Kreditkauf (Stripe; Krypto 5%). Die Ersparnis vergleicht BrushLLMs Endpreis mit OpenRouters Endpreis. OpenRouter-Listenpreise über deren öffentliche API, abgerufen Sep 2026 —— Richtwerte; prüfe aktuelle Sätze auf beiden Plattformen.',
      ctaTitle: 'Guthaben & Sätze prüfen',
      ctaText: 'Aufladen, Key-Limits setzen und Nutzung in Echtzeit verfolgen —— alles in der Konsole',
    },

    docs: {
      metaDescription: 'Kurzanleitung für die BrushLLM-API —— Authentifizierung, OpenAI-kompatible Base-URL, SDK-Beispiele in vier Sprachen und die vollständige Liste der Modell-ids.',
      eyebrow: 'Dokumentation',
      title: 'Kurzanleitung,',
      titleBand: 'mit einem Strich',
      intro: 'BrushLLM ist ein OpenAI-kompatibles Gateway. Wenn du schon einmal die OpenAI-API aufgerufen hast, weißt du schon, wie man BrushLLM aufruft —— hier die 30-Sekunden-Version.',
      toc: { quickstart: 'Kurzanleitung', firstRequest: 'Erste Anfrage', modelIds: 'Modell-ids', errors: 'Fehler' },
      tocLabel: 'Abschnitte der Dokumentation',
      steps: [
        {
          title: 'API-Key holen',
          description: '{createLink} oder {signInLink} in die Konsole, dann einen Key anlegen. Keys sehen aus wie {code} —— behandle sie wie Passwörter und setze ein Ausgabenlimit, wenn du sie an Tools gibst',
          createLink: 'Konto erstellen',
          signInLink: 'melde dich an',
        },
        {
          title: 'Base-URL und Key setzen',
          description: 'Richte ein beliebiges OpenAI-SDK auf unseren Endpunkt:',
          baseUrlLabel: 'base_url',
        },
        {
          title: 'Beliebiges Modell per id aufrufen',
          description: 'Übergib eine der ids aus der Tabelle unten als {code}. Das war’s —— du rufst Modelle führender KI-Labs auf',
        },
      ],
      firstRequestTitle: 'Deine erste Anfrage',
      firstRequestText: 'Dieselbe Anfrage in vier Sprachen —— inklusive Streaming. Kopieren, einfügen, los',
      modelIdsTitle: 'Modell-ids',
      modelIdsText: 'Nutze genau diese ids (Groß-/Kleinschreibung zählt). Beschreibungen und Fähigkeiten auf der {modelsLink}. Bildmodelle werden über {code} aufgerufen, mit demselben API-Key.',
      modelIdsModelsLink: 'Modell-Seite',
      modelIdsTable: { id: 'Modell-id', name: 'Anzeigename', context: 'Kontext' },
      errorsTitle: 'Fehler',
      errorsTable: { status: 'Status', meaning: 'Bedeutung', fix: 'Was tun' },
      errors: [
        { meaning: 'Ungültiger oder fehlender API-Key', fix: 'Prüfe, dass dein Key mit „brsh-“ beginnt und in der Konsole nicht widerrufen wurde.' },
        { meaning: 'Unbekannte Modell-id', fix: 'Nutze eine id exakt wie in der Tabelle oben —— Groß-/Kleinschreibung zählt.' },
        { meaning: 'Rate-Limit oder Limit überschritten', fix: 'Warten und mit Backoff erneut versuchen, oder das Limit dieses Keys in der Konsole erhöhen.' },
        { meaning: 'Guthaben aufgebraucht', fix: 'Lade dein Konto in der Konsole auf und versuche die Anfrage erneut.' },
        { meaning: 'Fehler des vorgelagerten Anbieters', fix: 'Nach ein paar Sekunden erneut versuchen; falls es bleibt, wechsle die Modell-id oder kontaktiere den Support.' },
      ],
      helpTitle: 'Steckst du fest?',
      helpText: 'Prüfe die Konsole zu Keys, Limits und Abrechnung oder schreibe an {email}',
    },

    apps: {
      metaDescription: 'BrushLLM-Desktop-Apps —— Image Studio, Video Studio und Player. Kostenlos, Local-First, Open Source, für macOS und Windows.',
      eyebrow: 'Apps',
      title: 'Kostenlose Local-First-Apps,',
      titleBand: 'Open Source',
      intro: 'Drei Desktop-Werkzeuge für macOS und Windows —— keine Telemetrie, keine Konten, keine Werbung. Image Studios KI-Funktionen hängen direkt an der BrushLLM-API.',
      apiTitle: 'Die API hinter den KI-Funktionen',
      apiText: 'Image Studios KI-Werkzeuge laufen auf dem BrushLLM-Gateway —— ein OpenAI-kompatibler Endpunkt, veröffentlichte Preise pro Bild.',
    },

    studio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Desktop-App · Kostenlos + KI pro Nutzung',
      intro: 'Jedes lokale Werkzeug ist kostenlos und läuft vollständig auf deinem Gerät —— Rust-Engine, keine Uploads. KI-Funktionen rufen dieselbe {apiLink} auf, die den Rest der Plattform antreibt, abgerechnet pro Bild zu {ratesLink}.',
      introApiLink: 'BrushLLM-API',
      introRatesLink: 'veröffentlichten Preisen',
      outro: 'Die Bildmodelle hinter den KI-Werkzeugen ansehen',
      groups: [
        {
          title: 'Lokale Werkzeuge —— kostenlos, offline, privat',
          items: [
            { title: 'Konvertieren & komprimieren', description: '8 Eingabeformate zu 8 Ausgabeformaten (inklusive AVIF und WebP), mit Lanczos-Resampling und Qualitätskontrolle.' },
            { title: 'Größe ändern, zuschneiden & drehen', description: 'Batch-taugliche Geometrie-Werkzeuge mit exakten Pixelmaßen und Seitenverhältnis-Voreinstellungen.' },
            { title: 'Wasserzeichen & Anmerkungen', description: 'Text- und Bild-Wasserzeichen, Pfeile, Kästen und Freihand-Anmerkungen für Screenshots und Dokumente.' },
            { title: 'EXIF ansehen, bearbeiten & entfernen', description: 'Metadaten inspizieren, Felder umschreiben oder Standort- und Kameradaten vor dem Teilen entfernen.' },
            { title: 'Zusammenfügen, Mosaik & Schatten', description: 'Bilder zu Rastern kombinieren, Bereiche pixelieren, abgerundete Ecken und Schlagschatten hinzufügen.' },
            { title: 'Farbwerkzeuge', description: 'Helligkeit, Kontrast und Sättigung, Farbersatz und eine vergrößernde Farbpipette.' },
          ],
        },
        {
          title: 'KI-Werkzeuge —— angetrieben vom BrushLLM-Gateway',
          items: [
            { title: 'Bilder generieren', description: 'Text-zu-Bild mit GPT-Image —— abgerechnet pro generiertem Bild, kein Abo.' },
            { title: 'Hintergründe entfernen', description: 'Freisteller mit einem Klick und sauberen Kanten, direkt vom Desktop.' },
            { title: 'Objekte & Wasserzeichen entfernen', description: 'Bereich wählen und beschreiben, was verschwinden soll —— Inpainting füllt es auf.' },
            { title: 'Generatives Füllen', description: 'Erweitern, ersetzen oder tauschen, optional mit Referenzbildern (z. B. Personentausch).' },
            { title: 'Stilwechsel', description: 'Ein Bild in neuem Stil übermalen, ohne Komposition und Identität zu verlieren.' },
            { title: 'Dein Key, dein Limit', description: 'Der API-Key liegt im OS-Schlüsselbund; jeder Key trägt sein eigenes Ausgabenlimit aus der Konsole.' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Desktop-App · Kostenlos',
      intro: '100% lokale Verarbeitung —— deine Medien verlassen das Gerät nie. FFmpeg-Binaries sind gepinnt und SHA-256-verifiziert, die Engine betreibt eine pausierbare Job-Warteschlange, und 175 automatisierte Tests halten die Toolbox ehrlich.',
      groups: [
        {
          title: 'Video',
          items: [
            { title: 'Konvertieren', description: 'MP4, MKV, WebM, MOV und AVI mit H.264, H.265, VP9 oder AV1-Codecs.' },
            { title: 'Komprimieren', description: 'Qualitätsbasierte (CRF) oder zielbitratenbasierte Kompression mit Live-Größenschätzung.' },
            { title: 'Zusammenführen & trimmen', description: 'Clips der Reihe nach verbinden, Segmente mit framegenauen In/Out-Punkten schneiden.' },
            { title: 'Zuschneiden, skalieren & drehen', description: 'Geometrie-Korrekturen für falsch orientiertes oder gepolstertes Material.' },
            { title: 'Geschwindigkeit ändern', description: '0,25× bis 4× Wiedergabegeschwindigkeit mit Tonhöhenkorrektur.' },
            { title: 'Frames, GIFs & WebP', description: 'Standbilder extrahieren oder Clips in animierte GIF/WebP umwandeln.' },
          ],
        },
        {
          title: 'Audio',
          items: [
            { title: 'Extrahieren & konvertieren', description: 'Audio nach MP3, M4A, FLAC, WAV, OGG oder Opus ziehen.' },
            { title: 'Lautstärke-Normalisierung', description: 'EBU-R128-Normalisierung für einheitliche Lautstärke über Dateien hinweg.' },
            { title: 'Lautstärke & Verstärkung', description: 'Anheben oder absenken, wo möglich ohne Neukodierung des Videos.' },
            { title: 'Stumm schalten oder ersetzen', description: 'Audiospuren entfernen oder einen neuen Soundtrack einsetzen.' },
            { title: 'Trimmen', description: 'Audiosegmente mit derselben In/Out-Präzision wie Video schneiden.' },
          ],
        },
        {
          title: 'Untertitel',
          items: [
            { title: 'Einbetten oder einbrennen', description: 'Weiche Untertitelspuren anhängen oder fest ins Bild einbrennen.' },
            { title: 'Formate konvertieren', description: 'SRT, VTT, ASS, SSA und TTML —— mit eigener Untertitel-Engine ohne Abhängigkeiten.' },
            { title: 'Kodierungen reparieren', description: 'Alte GBK/Big5-Dateien automatisch in sauberes UTF-8 überführen.' },
            { title: 'Timing verschieben', description: 'Untertitel massenhaft vor oder zurück schieben, synchron zum Video.' },
            { title: 'Extrahieren', description: 'Bestehende Untertitelspuren aus jedem Container ziehen.' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Desktop-App · Open Source',
      intro: 'Die macOS-App ist eine native Swift-+-SwiftUI-App um libmpv; die Windows-App ist ein Tauri-Rewrite mit demselben mpv-Kern. Keine Telemetrie, Updates nur auf Anfrage.',
      groups: [
        {
          title: 'Wiedergabe',
          items: [
            { title: 'Jedes Format', description: 'Auf mpv gebaut: MKV, MP4, AVI, MOV, WebM, FLAC, MP3 und alles, was mpv abspielt.' },
            { title: 'HDR-Ausgabe', description: 'PQ- und EDR-Durchreichung auf unterstützten Displays, Hardware-Dekodierung abschaltbar.' },
            { title: 'Disc-Images', description: 'ISO-Blu-ray- und DVD-Images direkt abspielen.' },
            { title: 'Steuerung', description: 'A-B-Schleife, Wiedergabegeschwindigkeit, Frame-Schritte, Kapitel und Screenshots.' },
            { title: 'Playlist & Verlauf', description: 'Per Drag sortierbare Playlists, an alter Stelle fortfahren, Lesezeichen.' },
            { title: 'Mini-Fenster', description: 'Ein schwebendes, immer im Vordergrund befindliches Mini-Player für Multitasking.' },
          ],
        },
        {
          title: 'Streaming',
          items: [
            { title: 'WebDAV & SMB', description: 'Von deinem NAS stöbern und streamen —— natives macOS-SMB-Mounting inklusive.' },
            { title: 'FTP', description: 'Eingebauter FTP-Client mit Verzeichnis-Browsing und direktem Streaming.' },
            { title: 'Emby & Jellyfin', description: 'Anmelden, Bibliotheken stöbern und direkt streamen ohne Transcoding.' },
            { title: 'HTTP & HLS', description: 'Links und m3u8/HLS-Streams abspielen, mit einstellbarem Read-ahead-Puffer.' },
          ],
        },
        {
          title: 'Untertitel & Werkzeuge',
          items: [
            { title: 'Automatisch geladene Untertitel', description: 'Passende Sidecar-Dateien laden automatisch; externe bei Bedarf.' },
            { title: 'Live-Styling', description: 'Schrift, Größe, Farbe und Position —— beim Zuschauen umgestalten.' },
            { title: 'Equalizer & Aufnahme', description: 'Audio-Equalizer plus Stream-Aufnahme zur Archivierung.' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'BrushLLM baut KI-Produkte für Entwickler und Kreative —— eine einheitliche API für leistungsstarke KI-Modelle und kostenlose Local-First-Desktop-Apps für Bilder, Video und Medien.',
      eyebrow: 'Über uns',
      title: 'KI-Produkte für',
      titleBand: 'Entwickler und Kreative',
      intro: 'BrushLLM baut KI-Produkte für Entwickler und Kreative. Eine Plattform, ein Konto —— und in jedem Fall dasselbe Versprechen: einfache Werkzeuge, veröffentlichte Preise, Privatsphäre von Anfang an.',
      forDevelopers: 'Für Entwickler.',
      forDevelopersText: '{link} —— eine einheitliche API für leistungsstarke KI-Modelle. {count} Modelle von DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI und mehr, hinter einem OpenAI-kompatiblen Endpunkt.',
      forDevelopersLink: 'KI-Modell-Dienste',
      forCreators: 'Für Kreative.',
      forCreatorsText: '{link} —— kostenlose Local-First-Desktop-Apps für macOS und Windows. Image Studio verbindet kostenlose lokale Werkzeuge mit KI-Bearbeitung über dieselbe API; alle drei sind Open Source ohne Telemetrie.',
      forCreatorsLink: 'Image Studio, Video Studio und Player',
      values: [
        { title: 'Der Welt offen', description: 'Spitzen-KI braucht keine separaten Konten, lokale Zahlungshürden oder Region-Locks —— und kein Vermögen. Eine Registrierung, in USD, aus jedem Land' },
        { title: 'Eine Plattform, ein Konto', description: 'Eine Plattform, ein Konto, eine Rechnung. Wenn die Integration länger dauert als eine Kaffee-Pause, ist das unser Bug, nicht dein Problem' },
        { title: 'Ehrliche Preise', description: 'Veröffentlichte Token-Preise, keine Abo-Fallen, und kostenlose Stufen, die kostenlos bleiben. Du sollst immer wissen, was eine Anfrage kostet' },
        { title: 'Privatsphäre von Anfang an', description: 'Wir sammeln nur, was ein Konto zum Funktionieren braucht. Keine Tracker, keine Analysen, keine Werbung —— deine Prompts werden nie gespeichert, verkauft oder zur Profilierung genutzt' },
      ],
      familyTitle: 'Die BrushLLM-Familie',
      familyText: 'Eine Plattform, zwei Wege —— eine einheitliche API für Entwickler und eine Familie kostenloser Local-First-Desktop-Apps für Kreative.',
      familyApiTitle: 'KI-Modell-Dienste',
      familyApiText: 'Ein OpenAI-kompatibler Endpunkt für {count} Modelle von {providers} Anbietern —— Zahlung pro Token oder Bild.',
      contactTitle: 'Sprich mit uns',
      contactText: 'Fragen, Mengenpreise oder ein Modell, das wir ergänzen sollen —— wir lesen alles',
      contactCta: 'Loslegen',
    },

    notFound: {
      metaDescription: 'Diese Seite konnte nicht gefunden werden.',
      code: '404 · AUSSERHALB DER LEINWAND',
      title: 'Diese Seite wurde übermalt',
      text: 'Der Link ist vielleicht veraltet oder die Seite ist umgezogen. Die Modelle aber stehen exakt dort, wo du sie verlassen hast.',
      backHome: 'Zur Startseite',
      browseModels: 'Modelle ansehen',
    },
  },
};

export default de;
