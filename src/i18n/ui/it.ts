/**
 * Italiano. Struttura identica a en.ts (garantita dal tipo Dictionary).
 * I segnaposto {count}/{year}/{pct} restano invariati e vengono sostituiti al rendering.
 * Da non tradurre: id dei modelli, URL, esempi di codice, prezzi, identificatori di licenza, nomi di prodotto.
 */
import type { Dictionary } from '../index';

const it: Dictionary = {
  site: {
    title: 'BrushLLM — La tua IA, senza la complessità',
    description: 'Accedi a potenti modelli di IA attraverso un’unica API e crea con app desktop gratuite, locali per prima cosa. BrushLLM è una piattaforma di IA per sviluppatori e creatori.',
    organizationDescription: 'BrushLLM è una piattaforma di IA per sviluppatori e creatori, che offre Servizi di Modelli IA (un’unica API per potenti modelli di IA) e app desktop gratuite, locali per prima cosa —— Image Studio, Video Studio e Player.',
  },

  nav: {
    models: 'Modelli IA',
    apps: 'App',
    pricing: 'Prezzi',
    docs: 'Documentazione',
    about: 'Chi siamo',
  },

  header: {
    home: 'BrushLLM home',
    mainNav: 'Navigazione principale',
    mobileNav: 'Navigazione mobile',
    logIn: 'Accedi',
    getStarted: 'Inizia',
    toggleMenu: 'Apri/chiudi menu',
  },

  languageSwitcher: {
    label: 'Lingua',
    system: 'Sistema',
    systemTitle: 'Segui la lingua del browser',
  },

  appPage: {
    openSourceTitle: 'Open source, software onesto',
    openSourceText: 'Codice sorgente, issue e release sono su GitHub{license}. Nessuna telemetria, nessun account, nessuna pubblicità.',
  },

  footer: {
    blurb: 'BrushLLM —— IA per sviluppatori e creatori. Potenti modelli di IA attraverso un’unica API, più app desktop gratuite, locali per prima cosa. Proteggiamo la tua privacy: nessun tracker, nessuna analisi, nessuna pubblicità.',
    tagline: 'Un’API · Tre app gratuite · Privacy al primo posto',
    product: 'Prodotto',
    console: 'Console',
    company: 'Azienda',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: 'Chi è BrushLLM',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: 'Basato su un gateway compatibile OpenAI',
  },

  common: {
    download: 'Scarica',
    github: 'GitHub',
    tryIt: 'Provalo',
    featured: 'In evidenza',
    free: 'Gratis',
    copy: 'Copia',
    copied: 'Copiato!',
    copyFallback: 'Premi ⌘C',
    learnMore: 'Scopri di più',
    learnMoreArrow: 'Scopri di più →',
    downloadArrow: 'Scarica ↗',
    exploreAiModels: 'Esplora i modelli IA',
    exploreTheApps: 'Esplora le app',
    exploreTheApi: 'Esplora l’API',
    browseModels: 'Vedi i modelli',
    openTheConsole: 'Apri la console',
    readTheDocs: 'Leggi la documentazione',
  },

  data: {
    capability: {
      chat: 'Chat',
      reasoning: 'Ragionamento',
      tools: 'Chiamata a strumenti',
      vision: 'Visione',
      'long-context': 'Contesto lungo',
      image: 'Testo in immagine',
    },
    apps: {
      'image-studio': {
        tagline: 'Toolkit di immagini con IA, locale per prima cosa',
        description: 'Un toolkit desktop gratuito per immagini. Le modifiche quotidiane —— conversione, compressione, ritaglio, filigrane, EXIF —— girano interamente sul tuo dispositivo; funzioni IA come la rimozione dello sfondo e il riempimento generativo passano dal gateway BrushLLM, fatturate a immagine.',
        highlights: ['25+ strumenti locali', 'Modifiche IA via API BrushLLM', '9 lingue', 'Zero telemetria'],
      },
      'video-studio': {
        tagline: 'Toolkit locale per video, audio e sottotitoli',
        description: 'Un toolkit gratuito e offline per elaborare video, audio e sottotitoli. Convertire, comprimere, unire, tagliare, normalizzare il loudness, correggere le codifiche dei sottotitoli —— elaborazione 100% locale, zero richieste di rete.',
        highlights: ['25+ strumenti', 'Elaborazione 100% locale', '9 lingue', 'Zero richieste di rete'],
      },
      player: {
        tagline: 'Media player open source basato su mpv',
        description: 'Un media player open source multipiattaforma. Tutti i formati riprodotti da mpv, più streaming da WebDAV, SMB, FTP, Emby e Jellyfin —— con output HDR, decodifica hardware e interfaccia in 9 lingue.',
        highlights: ['Tutti i formati via mpv', 'WebDAV · SMB · Emby · Jellyfin', 'HDR e decodifica hardware', '9 lingue'],
      },
    },
    models: {
      'gpt-5.2': 'L’ammiraglia di ChatGPT —— ragionamento generale, visione e uso di strumenti molto solidi.',
      'gpt-5.2-mini': 'Livello ChatGPT veloce ed economico per chat ad alto volume, classificazione ed estrazione.',
      'deepseek-chat': 'Modello ammiraglia senza modalità di ragionamento. Veloce, economico e ottimo in chat generale e uso di strumenti.',
      'deepseek-reasoner': 'Modello di ragionamento con catena di pensiero visibile per matematica, codice e problemi difficili.',
      'glm-4.6': 'Ammiraglia Z.ai. Forte in programmazione, scrittura e pianificazione agentica; contesto di 200K.',
      'glm-4.5-air': 'GLM più leggero, pensato per traffico di produzione sensibile ai costi.',
      'glm-4.5-flash': 'Livello gratuito della famiglia GLM —— ideale per prototipi e progetti hobbistici.',
      'qwen3-max': 'L’ammiraglia più grande di Alibaba. Qualità di vertice per carichi agentici e di chat esigenti.',
      'qwen3-235b-a22b': 'Ammiraglia MoE a pesi aperti con modalità di ragionamento ibrida.',
      'qwen3-32b': 'Modello denso a pesi aperti, tuttofare, con modalità di ragionamento e non.',
      'qwen3-coder-plus': 'Modello specializzato in codice per strumenti di coding agentico e modifiche su scala di repository.',
      'qwen-vl-max': 'Modello visione-linguaggio per comprensione di immagini, OCR e ragionamento su grafici.',
      'kimi-k2-0905': 'MoE da mille miliardi di parametri ottimizzato per uso agentico di strumenti e documenti lunghi.',
      'kimi-k2-thinking': 'Variante di ragionamento del K2 con pensiero interleaved per attività multi-step.',
      'MiniMax-M2': 'MoE agentico efficiente —— un favorito degli agenti di coding con budget ridotto.',
      'gpt-image-2': 'Modello di generazione immagini di OpenAI —— da testo a immagine con forte rispetto delle istruzioni.',
    },
  },

  pages: {
    home: {
      metaDescription: 'Accedi a potenti modelli di IA attraverso un’unica API e crea con app desktop gratuite, locali per prima cosa.',
      heroBadge: 'Per gli sviluppatori · Per i creatori',
      heroTitle: 'La tua IA,',
      heroTitleBand: 'senza la complessità',
      heroSubtitle: 'Potenti modelli di IA attraverso un’unica API, e crea con app locali gratuite',
      heroCtaApi: 'Ottieni una chiave API',
      heroCtaApps: 'App desktop',
      heroNote: 'Un account per l’intera piattaforma',

      platformEyebrow: 'Una piattaforma',
      platformTitle: 'Una piattaforma pensata per sviluppatori e creatori',
      platformIntro: 'BrushLLM è una piattaforma per sviluppatori e creatori: accesso API unificato a potenti modelli di IA tramite {modelsLink}, più una famiglia di {appsLink} —— le funzioni IA di Image Studio sono fatturate tramite la stessa API.',
      platformModelsLink: 'Servizi di Modelli IA',
      platformAppsLink: 'app desktop gratuite, locali per prima cosa',

      apiCardBadge: 'Per gli sviluppatori',
      apiCardTitle: 'Servizi di Modelli IA',
      apiCardSubtitle: 'Un’unica API per potenti modelli di IA',
      apiCardDescription: 'Accedi a potenti modelli di IA tramite un’unica API —— {count} modelli, {providers} provider, unificati e a consumo.',
      apiCardBullets: [
        'Endpoint unico, compatibile OpenAI',
        'Modelli di chat, ragionamento, visione e immagini',
        'Prezzi pubblicati, pay-as-you-go, livelli gratuiti',
      ],
      apiCardChips: { models: 'Modelli', pricing: 'Prezzi', docs: 'Docs', console: 'Console' },
      apiCardCta: 'Esplora i modelli IA',
      apiCardSecondary: 'Leggi la documentazione',

      appsCardBadge: 'Per i creatori · App gratuite',
      appsCardTitle: 'App desktop',
      appsCardSubtitle: 'Strumenti locali gratuiti per il lavoro quotidiano',
      appsCardDescription: 'Image Studio, Video Studio e Player —— app desktop open source per macOS e Windows, zero telemetria. Le funzioni IA di Image Studio girano sulla stessa API.',
      appsCardNote: 'Open source · macOS · Windows',
      appsCardCta: 'Esplora le app',

      appsSectionEyebrow: 'App',
      appsSectionTitle: 'App locali gratuite,',
      appsSectionTitleBand: 'costruite su un’unica piattaforma',
      appsSectionFooter: 'Dettagli, screenshot e installer sulla {link}',
      appsSectionFooterLink: 'pagina delle app →',

      benefitsEyebrow: 'Perché la nostra API',
      benefitsTitle: 'Tutto ciò che ti serve,',
      benefitsTitleBand: 'niente di superfluo',
      benefitsSubtitle: 'Strumenti semplici e onesti per costruire con modelli di IA',
      benefits: [
        { title: 'API unificata', description: 'Un endpoint compatibile OpenAI per ogni modello. Tieni il tuo SDK —— cambia una riga e pubblica' },
        { title: 'Modelli molteplici', description: 'Modelli di chat, ragionamento, visione e immagini dei principali laboratori —— {count} modelli in un catalogo' },
        { title: 'Integrazione semplice', description: 'Funziona con qualsiasi SDK OpenAI. Copia, incolla ed esegui —— in cURL, Python, Node.js o Go' },
        { title: 'Prezzi a consumo', description: 'Paga ciò che usi —— per token o per immagine, in USD. Nessun abbonamento, e livelli gratuiti per iniziare' },
      ],

      statsEyebrow: 'Modelli disponibili, un’unica API',
      stats: { providers: 'Provider IA', models: 'Modelli, un catalogo', account: 'Account', countries: 'Paesi serviti' },
      statsCompare: 'I nostri prezzi finali battono OpenRouter su 7 confronti diretti —— {link}',
      statsCompareLink: 'vedi il confronto →',

      howEyebrow: 'Come funziona',
      howTitle: 'Tre passi al tuo primo token',
      howSteps: [
        { title: 'Crea un account', description: 'Registrati con l’email e prendi una chiave API dalla console. Nessuna carta di credito per iniziare' },
        { title: 'Punta il tuo SDK su BrushLLM', description: 'Imposta la base URL e tieni l’SDK OpenAI che già usi' },
        { title: 'Chiama qualsiasi modello per id', description: 'Cambia gli id dei modelli liberamente —— l’intero catalogo è a una chiave di distanza' },
      ],
      howCodeTitle: 'Tieni il tuo codice, cambia una riga',
      howCodeSubtitle: 'Se funziona con l’API OpenAI, funziona con BrushLLM —— la stessa richiesta in quattro linguaggi.',

      faqEyebrow: 'FAQ',
      faqTitle: 'Domande, con risposta',
      faqDevelopers: 'Per gli sviluppatori',
      faqCreators: 'Per i creatori',
      developerFaqs: [
        {
          question: 'Cos’è BrushLLM?',
          answer: 'BrushLLM è una piattaforma di IA per sviluppatori e creatori. I Servizi di Modelli IA offrono agli sviluppatori un’unica API per potenti modelli, e una famiglia di app desktop gratuite, locali per prima cosa —— Image Studio, Video Studio e Player —— copre il lato creatori. Un account copre l’intera piattaforma.',
        },
        {
          question: 'Come funziona l’API?',
          answer: 'Punta qualsiasi SDK OpenAI su {apiBase} e usa la tua chiave BrushLLM. Le completazioni chat, le chiamate a strumenti e lo streaming funzionano come già ti aspetti.',
        },
        {
          question: 'Quali modelli di IA sono disponibili?',
          answer: 'Il catalogo comprende {count} modelli di DeepSeek, Qwen, GLM, Kimi, MiniMax e OpenAI —— chat, ragionamento, visione e testo in immagine. L’elenco completo con i prezzi in tempo reale è nella pagina Modelli.',
        },
        {
          question: 'L’API è compatibile con OpenAI?',
          answer: 'Sì, completamente. Ciò che funziona con l’API OpenAI funziona con BrushLLM —— inclusi agenti di coding e CLI come Cursor, Cline, OpenCode e aider.',
        },
        {
          question: 'Come viene fatturato l’utilizzo?',
          answer: 'Strettamente pay-as-you-go in USD —— per token per i modelli di testo, per immagine per i modelli di immagini. Nessun abbonamento né minimi; diversi modelli hanno livelli gratuiti.',
        },
        {
          question: 'BrushLLM è adatto a startup e aziende?',
          answer: 'Sì. Un endpoint copre tutti i provider, i prezzi a consumo scalano con te, ogni chiave ha il proprio limite di spesa e sono disponibili sconti volume per utilizzi impegnati.',
        },
        {
          question: 'Come proteggete la mia privacy?',
          answer: 'Raccogliamo solo ciò che serve al funzionamento di un account. Nessun tracker, nessuna analisi, nessuna pubblicità —— i tuoi prompt passano diretti al modello a monte e non vengono mai archiviati, venduti o usati per profilarti.',
        },
      ],
      creatorFaqs: [
        {
          question: 'Cos’è Image Studio?',
          answer: 'Image Studio è il toolkit desktop gratuito di BrushLLM per le immagini. Gli strumenti quotidiani —— convertire, comprimere, ritagliare, EXIF —— girano in locale e offline; funzioni IA come rimozione dello sfondo e riempimento generativo passano dall’API BrushLLM, fatturate a immagine.',
        },
        {
          question: 'Cosa posso fare con Image Studio?',
          answer: 'Convertire, comprimere, ritagliare e ripulire immagini con strumenti locali gratuiti —— poi generare, rimuovere sfondi, cancellare oggetti, riempire e restilizzare con l’IA, a immagine.',
        },
        {
          question: 'Posso modificare immagini esistenti?',
          answer: 'Sì. Apri un’immagine qualsiasi, seleziona un’area o l’intera tela e descrivi la modifica —— inpainting e rimozione dello sfondo sono integrati.',
        },
        {
          question: 'Posso generare e trasformare immagini?',
          answer: 'Sì —— generazione da testo e restyling girano nello stesso spazio di lavoro, spinti da GPT-Image tramite l’API BrushLLM.',
        },
        {
          question: 'Dove trovo le app?',
          answer: 'Tutte e tre le app —— Image Studio, Video Studio e Player —— sono già disponibili sulle release GitHub di BrushLLM, per macOS (Apple Silicon) e Windows.',
        },
        {
          question: 'Le app sono davvero gratuite?',
          answer: 'Sì. Tutti gli strumenti locali sono gratuiti e il codice sorgente è su GitHub. Solo le funzioni IA di Image Studio usano l’API BrushLLM a consumo.',
        },
      ],

      ctaBuildTitle: 'Costruisci con l’IA',
      ctaBuildText: 'Un’unica API per {count} modelli —— unificata, a consumo, compatibile OpenAI',
      ctaCreateTitle: 'Crea con l’IA',
      ctaCreateText: 'App desktop gratuite, locali per prima cosa —— crea e modifica immagini, video e media, con superpoteri IA in Image Studio',
    },

    models: {
      metaDescription: 'Sfoglia {count} modelli di IA —— da DeepSeek, Qwen, GLM e Kimi a GPT e testo in immagine —— con finestre di contesto, capacità e prezzi indicativi.',
      eyebrow: 'Modelli IA',
      title: '{count} modelli · {providers} provider ·',
      titleBand: 'Un endpoint',
      intro: 'Tutti i modelli qui sotto sono richiamabili tramite la stessa API compatibile OpenAI e la stessa chiave. I prezzi sono indicativi —— USD per 1M di token per i modelli di testo, USD per immagine per i modelli di immagini{free}.',
      introFree: ' —— {count} modelli sono gratuiti',
      searchPlaceholder: 'Cerca per nome, id o provider…',
      searchLabel: 'Cerca modelli',
      providerLabel: 'Provider',
      providerGroup: 'Filtra per provider',
      capabilityLabel: 'Capacità',
      capabilityGroup: 'Filtra per capacità',
      all: 'Tutti',
      showing: '{visible} di {total} modelli',
      empty: 'Nessun modello corrisponde ai tuoi filtri. Prova con un’altra parola chiave, provider, capacità o caso d’uso.',
      footnote: 'I prezzi sono prezzi di listino indicativi in USD —— per 1M di token per i modelli di testo, per immagine generata per i modelli di immagini —— e possono differire dalle tariffe configurate nella tua console. Le finestre di contesto sono il massimo supportato da ciascun modello a monte. Vedi la {docsLink} per i dettagli di integrazione.',
      footnoteDocsLink: 'documentazione',
      card: { type: 'Tipo', perImage: 'Per immagine', output: 'Output', context: 'Contesto', input: 'Input / 1M', outputPer1M: 'Output / 1M' },
    },

    pricing: {
      metaDescription: 'Prezzi semplici a consumo per ogni modello su BrushLLM —— prezzi indicativi per token in USD, con diversi livelli gratuiti.',
      eyebrow: 'Prezzi',
      title: 'Paga ciò che usi,',
      titleBand: 'tutto qui',
      intro: 'I modelli di testo sono fatturati per token, quelli di immagini per immagine generata —— tutto in USD, senza abbonamenti né minimi. Ciò che vedi sotto è la tariffa indicativa di catalogo; le tue tariffe esatte e il saldo sono nella console.',
      highlights: [
        { title: 'Solo pay-as-you-go', description: 'Fatturazione per token in USD. Nessun abbonamento, nessun minimo, nessun gioco di ricarichi —— ricarica e vai' },
        { title: '{count} modello gratuito', description: 'GLM-4.5 Flash non costa nulla —— perfetto per prototipi e app hobbistiche' },
        { title: 'Sconti volume', description: 'Volumi seri? Scrivici e definiamo tariffe a utilizzo impegnato per il tuo carico' },
      ],
      textModelsTitle: 'Modelli di testo —— per token',
      imageModelsTitle: 'Modelli di immagini —— per immagine',
      table: { model: 'Modello', provider: 'Provider', context: 'Contesto', input: 'Input / 1M', output: 'Output / 1M', resolution: 'Risoluzione', pricePerImage: 'Prezzo / immagine' },
      footnote: 'I prezzi sono prezzi di listino indicativi in USD —— per 1M di token per i modelli di testo, per immagine generata per i modelli di immagini. La fatturazione effettiva avviene nella tua console, dove puoi anche tracciare la spesa per chiave API.',
      compareEyebrow: 'Verifica prezzi',
      compareTitle: 'Gli stessi modelli,',
      compareTitleBand: 'bollette finali più leggere',
      compareIntro: 'OpenRouter aggiunge una commissione di pagamento all’acquisto di crediti —— 5,5% con carta —— sopra il prezzo di listino di ogni modello. La tariffa pubblicata da BrushLLM è quella finale che paghi.',
      compareTable: {
        model: 'Modello',
        ours: 'BrushLLM in / out per 1M',
        orList: 'OpenRouter listino in / out',
        orAllIn: 'OpenRouter tutto compreso* in / out',
        youSave: 'Risparmi',
        upTo: 'fino al {pct}%',
      },
      compareFootnote: '*Tutto compreso = prezzo di listino OpenRouter più la commissione del 5,5% sull’acquisto di crediti (Stripe; cripto 5%). Il risparmio confronta la tariffa finale BrushLLM con quella tutto compreso di OpenRouter. Prezzi di listino OpenRouter via API pubblica, recuperati a set 2026 —— indicativi; verifica le tariffe attuali su entrambe le piattaforme.',
      ctaTitle: 'Controlla saldo e tariffe',
      ctaText: 'Ricarica, imposta limiti per chiave e monitora l’utilizzo in tempo reale —— tutto nella console',
    },

    docs: {
      metaDescription: 'Guida rapida all’API BrushLLM —— autenticazione, base URL compatibile OpenAI, esempi SDK in quattro linguaggi e l’elenco completo degli id dei modelli.',
      eyebrow: 'Documentazione',
      title: 'Guida rapida,',
      titleBand: 'a un colpo di pennello',
      intro: 'BrushLLM è un gateway compatibile OpenAI. Se hai già chiamato l’API OpenAI, sai già come chiamare BrushLLM —— ecco la versione da trenta secondi.',
      toc: { quickstart: 'Guida rapida', firstRequest: 'Prima richiesta', modelIds: 'Id dei modelli', errors: 'Errori' },
      tocLabel: 'Sezioni della documentazione',
      steps: [
        {
          title: 'Ottieni una chiave API',
          description: '{createLink} o {signInLink} alla console, poi crea una chiave. Le chiavi sono tipo {code} —— trattale come password e imposta un limite di spesa se le affidi a strumenti',
          createLink: 'Crea un account',
          signInLink: 'accedi',
        },
        {
          title: 'Imposta base URL e chiave',
          description: 'Punta qualsiasi SDK OpenAI sul nostro endpoint:',
          baseUrlLabel: 'base_url',
        },
        {
          title: 'Chiama qualsiasi modello per id',
          description: 'Passa uno degli id della tabella sotto come {code}. È tutto —— stai già chiamando modelli dei principali laboratori di IA',
        },
      ],
      firstRequestTitle: 'La tua prima richiesta',
      firstRequestText: 'La stessa richiesta in quattro linguaggi —— streaming incluso. Copia, incolla, esegui',
      modelIdsTitle: 'Id dei modelli',
      modelIdsText: 'Usa esattamente questi id (sensibili alle maiuscole). Descrizioni e capacità nella {modelsLink}. I modelli di immagini si chiamano via {code} con la stessa chiave API.',
      modelIdsModelsLink: 'pagina dei modelli',
      modelIdsTable: { id: 'Id del modello', name: 'Nome visualizzato', context: 'Contesto' },
      errorsTitle: 'Errori',
      errorsTable: { status: 'Stato', meaning: 'Significato', fix: 'Cosa fare' },
      errors: [
        { meaning: 'Chiave API non valida o mancante', fix: 'Controlla che la tua chiave inizi con “brsh-” e non sia stata revocata nella console.' },
        { meaning: 'Id modello sconosciuto', fix: 'Usa un id esattamente come elencato nella tabella sopra —— distinguono le maiuscole.' },
        { meaning: 'Rate limit o quota superata', fix: 'Attendi e riprova con backoff, oppure alza la quota di questa chiave nella console.' },
        { meaning: 'Saldo insufficiente', fix: 'Ricarica il tuo account nella console e riprova la richiesta.' },
        { meaning: 'Errore del provider a monte', fix: 'Riprova dopo qualche secondo; se persiste, passa a un altro id modello o contatta il supporto.' },
      ],
      helpTitle: 'Bloccato su qualcosa?',
      helpText: 'Controlla la console per chiavi, quote e fatturazione, oppure scrivici a {email}',
    },

    apps: {
      metaDescription: 'App desktop BrushLLM —— Image Studio, Video Studio e Player. Gratuite, locali per prima cosa, open source, per macOS e Windows.',
      eyebrow: 'App',
      title: 'App locali gratuite,',
      titleBand: 'open source',
      intro: 'Tre strumenti desktop per macOS e Windows —— zero telemetria, zero account, nessuna pubblicità. Le funzioni IA di Image Studio si collegano direttamente all’API BrushLLM.',
      apiTitle: 'L’API dietro le funzioni IA',
      apiText: 'Gli strumenti IA di Image Studio girano sul gateway BrushLLM —— un endpoint compatibile OpenAI, tariffe per immagine pubblicate.',
    },

    studio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'App desktop · Gratis + IA a consumo',
      intro: 'Ogni strumento locale è gratuito e gira interamente sul tuo dispositivo —— motore Rust, nessun upload. Le funzioni IA chiamano la stessa {apiLink} che alimenta il resto della piattaforma, fatturate a immagine alle {ratesLink}.',
      introApiLink: 'API BrushLLM',
      introRatesLink: 'tariffe pubblicate',
      outro: 'Vedi i modelli di immagini dietro gli strumenti IA →',
      groups: [
        {
          title: 'Strumenti locali —— gratuiti, offline, privati',
          items: [
            { title: 'Converti e comprimi', description: '8 formati di input verso 8 di output (inclusi AVIF e WebP), con ricampionamento Lanczos e controllo qualità.' },
            { title: 'Ridimensiona, ritaglia e ruota', description: 'Strumenti geometrici adatti al batch, con dimensioni in pixel precise e preset di proporzioni.' },
            { title: 'Filigrane e annotazioni', description: 'Filigrane di testo e immagine, frecce, riquadri e annotazione a mano libera per screenshot e documenti.' },
            { title: 'EXIF: vedi, modifica e rimuovi', description: 'Ispeziona i metadati completi, riscrivi campi o rimuovi posizione e dati fotocamera prima di condividere.' },
            { title: 'Unisci, mosaico e ombre', description: 'Combina immagini in griglie, pixelizza aree, aggiungi angoli arrotondati e ombre.' },
            { title: 'Strumenti colore', description: 'Luminosità, contrasto e saturazione, sostituzione colore e un contagocce con lente.' },
          ],
        },
        {
          title: 'Strumenti IA —— spinti dal gateway BrushLLM',
          items: [
            { title: 'Genera immagini', description: 'Testo in immagine con GPT-Image —— fatturato per immagine generata, senza abbonamento.' },
            { title: 'Rimuovi sfondi', description: 'Ritagli con un clic e bordi puliti, direttamente dal desktop.' },
            { title: 'Rimuovi oggetti e filigrane', description: 'Seleziona un’area e descrivi cosa deve sparire —— l’inpainting la riempie.' },
            { title: 'Riempimento generativo', description: 'Espandi, sostituisci o scambia contenuti, con immagini di riferimento opzionali (es. scambio di persona).' },
            { title: 'Restyling', description: 'Ridipingi un’immagine in un nuovo stile mantenendo composizione e identità.' },
            { title: 'La tua chiave, la tua quota', description: 'La chiave API sta nel portachiavi di sistema; ogni chiave porta la propria quota di spesa dalla console.' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'App desktop · Gratis',
      intro: 'Elaborazione 100% locale —— i tuoi media non lasciano mai il computer. I binari FFmpeg sono bloccati e verificati SHA-256, il motore gestisce una coda di lavori sospendibile e 175 test automatizzati tengono onesto il toolkit.',
      groups: [
        {
          title: 'Video',
          items: [
            { title: 'Converti', description: 'MP4, MKV, WebM, MOV e AVI con codec H.264, H.265, VP9 o AV1.' },
            { title: 'Comprimi', description: 'Compressione per qualità (CRF) o bitrate target con stima delle dimensioni in tempo reale.' },
            { title: 'Unisci e taglia', description: 'Concatena clip in ordine, taglia segmenti con punti in/out precisi al frame.' },
            { title: 'Ritaglia, scala e ruota', description: 'Correzioni geometriche per riprese orientate male o con bordi.' },
            { title: 'Cambia velocità', description: 'Da 0,25× a 4× la velocità di riproduzione, con correzione del tono.' },
            { title: 'Frame, GIF e WebP', description: 'Estrai frame fermi o trasforma clip in GIF/WebP animate.' },
          ],
        },
        {
          title: 'Audio',
          items: [
            { title: 'Estrai e converti', description: 'Estrai l’audio in MP3, M4A, FLAC, WAV, OGG o Opus.' },
            { title: 'Normalizzazione loudness', description: 'Normalizzazione EBU R128 per un volume coerente tra file.' },
            { title: 'Volume e guadagno', description: 'Alza o attenua senza ricodificare il video, dove possibile.' },
            { title: 'Muta o sostituisci', description: 'Rimuovi tracce audio o sostituisci la colonna sonora.' },
            { title: 'Taglia', description: 'Taglia segmenti audio con la stessa precisione in/out del video.' },
          ],
        },
        {
          title: 'Sottotitoli',
          items: [
            { title: 'Incorpora o masterizza', description: 'Allega tracce sottotitoli soft o masterizzale nell’immagine.' },
            { title: 'Converti formati', description: 'SRT, VTT, ASS, SSA e TTML —— con un motore sottotitoli senza dipendenze.' },
            { title: 'Correggi codifiche', description: 'Ripara automaticamente file legacy GBK/Big5 in UTF-8 pulito.' },
            { title: 'Sposta i tempi', description: 'Anticipa o ritarda sottotitoli in blocco, sincronizzati al video.' },
            { title: 'Estrai', description: 'Estrai tracce sottotitoli esistenti da qualsiasi contenitore.' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} —— {description}',
      badge: 'App desktop · Open source',
      intro: 'L’app macOS è una build nativa Swift + SwiftUI attorno a libmpv; l’app Windows è un rewrite Tauri con lo stesso nucleo mpv. Zero telemetria, aggiornamenti verificati solo su richiesta.',
      groups: [
        {
          title: 'Riproduzione',
          items: [
            { title: 'Tutti i formati', description: 'Basato su mpv: MKV, MP4, AVI, MOV, WebM, FLAC, MP3 e tutto ciò che mpv riproduce.' },
            { title: 'Output HDR', description: 'Passthrough PQ ed EDR su display supportati, con decodifica hardware attivabile.' },
            { title: 'Immagini disco', description: 'Riproduci direttamente immagini ISO Blu-ray e DVD.' },
            { title: 'Controlli', description: 'Loop A-B, velocità di riproduzione, avanzamento per frame, capitoli e screenshot.' },
            { title: 'Playlist e cronologia', description: 'Playlist riordinabili trascinando, riprendi da dove eri, segnalibri.' },
            { title: 'Finestra mini', description: 'Un mini player flottante sempre in primo piano per il multitasking.' },
          ],
        },
        {
          title: 'Streaming',
          items: [
            { title: 'WebDAV e SMB', description: 'Sfoglia e riproduci in streaming dal tuo NAS —— montaggio SMB nativo macOS incluso.' },
            { title: 'FTP', description: 'Client FTP integrato con esplorazione directory e streaming diretto.' },
            { title: 'Emby e Jellyfin', description: 'Accedi, sfoglia le librerie e riproduci in streaming diretto senza transcodifica.' },
            { title: 'HTTP e HLS', description: 'Riproduci link e stream m3u8/HLS con buffer di lettura regolabile.' },
          ],
        },
        {
          title: 'Sottotitoli e strumenti',
          items: [
            { title: 'Sottotitoli auto-caricati', description: 'I file corrispondenti si caricano da soli; gli esterni su richiesta.' },
            { title: 'Stile in tempo reale', description: 'Font, dimensione, colore e posizione —— restilizzati mentre guardi.' },
            { title: 'Equalizzatore e registrazione', description: 'Equalizzatore audio, più registrazione di stream per archiviazione.' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'BrushLLM crea prodotti di IA per sviluppatori e creatori —— un’API unificata per potenti modelli e app desktop gratuite, locali per prima cosa, per immagini, video e media.',
      eyebrow: 'Chi siamo',
      title: 'Prodotti di IA per',
      titleBand: 'sviluppatori e creatori',
      intro: 'BrushLLM crea prodotti di IA per sviluppatori e creatori. Una piattaforma, un account —— e la stessa promessa in entrambi i casi: strumenti semplici, prezzi pubblicati, privacy by design.',
      forDevelopers: 'Per gli sviluppatori.',
      forDevelopersText: '{link} —— un’API unificata per accedere a potenti modelli di IA. {count} modelli di DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI e altri, dietro un endpoint compatibile OpenAI.',
      forDevelopersLink: 'Servizi di Modelli IA',
      forCreators: 'Per i creatori.',
      forCreatorsText: '{link} —— app desktop gratuite, locali per prima cosa, per macOS e Windows. Image Studio unisce strumenti locali gratuiti e modifica IA tramite la stessa API; tutte e tre sono open source senza telemetria.',
      forCreatorsLink: 'Image Studio, Video Studio e Player',
      values: [
        { title: 'Aperti al mondo', description: 'L’IA d’avanguardia non dovrebbe richiedere account separati, ostacoli di pagamento locali o blocchi regionali —— né costare una fortuna. Una registrazione, in USD, da qualsiasi paese' },
        { title: 'Una piattaforma, un account', description: 'Una piattaforma, un account, una bolletta. Se integrarci richiede più di una pausa caffè, è un nostro bug, non un tuo problema' },
        { title: 'Prezzi onesti', description: 'Tariffe per token pubblicate, senza trappole di abbonamento, e livelli gratuiti che restano tali. Dovresti sempre sapere quanto costa una richiesta' },
        { title: 'Privacy by design', description: 'Raccogliamo solo ciò che serve al funzionamento di un account. Nessun tracker, nessuna analisi, nessuna pubblicità —— i tuoi prompt non vengono mai archiviati, venduti o usati per profilarti' },
      ],
      familyTitle: 'La famiglia BrushLLM',
      familyText: 'Una piattaforma, due binari —— un’API unificata per gli sviluppatori e una famiglia di app desktop gratuite, locali per prima cosa, per i creatori.',
      familyApiTitle: 'Servizi di Modelli IA',
      familyApiText: 'Un endpoint compatibile OpenAI per {count} modelli da {providers} provider —— pagamento per token o per immagine.',
      contactTitle: 'Parla con noi',
      contactText: 'Domande, prezzi volume o un modello che vorresti aggiunto —— leggiamo tutto',
      contactCta: 'Inizia',
    },

    notFound: {
      metaDescription: 'Impossibile trovare questa pagina.',
      code: '404 · FUORI TELA',
      title: 'Questa pagina è stata ridipinta',
      text: 'Il link potrebbe essere obsoleto o la pagina essersi spostata. I modelli, però, sono esattamente dove li hai lasciati.',
      backHome: 'Torna alla home',
      browseModels: 'Vedi i modelli',
    },
  },
};

export default it;
