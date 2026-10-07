/**
 * Nederlands. Structuur identiek aan en.ts (afgedwongen door het Dictionary-type).
 * Plaatsaanduidingen {count}/{year}/{pct} blijven staan en worden bij het renderen vervangen.
 * Niet vertalen: model-ids, URL's, codevoorbeelden, prijzen, licentie-identificatoren, productnamen.
 */
import type { Dictionary } from '../index';

const nl: Dictionary = {
  site: {
    title: 'BrushLLM — Jouw AI, zonder de complexiteit',
    description: 'Toegang tot krachtige AI-modellen via één API, en creëer met gratis local-first desktopapps. BrushLLM is een AI-platform voor ontwikkelaars en creators.',
    organizationDescription: 'BrushLLM is een AI-platform voor ontwikkelaars en creators, met AI-modeldiensten (één API voor krachtige AI-modellen) en gratis local-first desktopapps —— Image Studio, Video Studio en Player.',
  },

  nav: {
    models: 'AI-modellen',
    apps: 'Apps',
    pricing: 'Prijzen',
    docs: 'Documentatie',
    about: 'Over',
  },

  header: {
    home: 'BrushLLM home',
    mainNav: 'Hoofdnavigatie',
    mobileNav: 'Mobiele navigatie',
    logIn: 'Inloggen',
    getStarted: 'Beginnen',
    toggleMenu: 'Menu openen/sluiten',
  },

  languageSwitcher: {
    label: 'Taal',
    system: 'Systeem',
    systemTitle: 'De browsertaal volgen',
  },

  appPage: {
    openSourceTitle: 'Open source, eerlijke software',
    openSourceText: 'Broncode, issues en releases staan op GitHub{license}. Geen telemetrie, geen accounts, geen advertenties.',
  },

  footer: {
    blurb: 'BrushLLM —— AI voor ontwikkelaars en creators. Krachtige AI-modellen via één API, plus gratis local-first desktopapps. Wij beschermen je privacy: geen trackers, geen analyses, geen advertenties.',
    tagline: 'Eén API · Drie gratis apps · Privacy eerst',
    product: 'Product',
    console: 'Console',
    company: 'Bedrijf',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: 'Over BrushLLM',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: 'Aangedreven door een OpenAI-compatibele gateway',
  },

  common: {
    download: 'Downloaden',
    github: 'GitHub',
    tryIt: 'Probeer',
    featured: 'Uitgelicht',
    free: 'Gratis',
    copy: 'Kopiëren',
    copied: 'Gekopieerd!',
    copyFallback: 'Druk op ⌘C',
    learnMore: 'Meer weten',
    learnMoreArrow: 'Meer weten →',
    downloadArrow: 'Downloaden ↗',
    exploreAiModels: 'AI-modellen verkennen',
    exploreTheApps: 'Apps verkennen',
    exploreTheApi: 'De API verkennen',
    browseModels: 'Modellen bekijken',
    openTheConsole: 'Console openen',
    readTheDocs: 'Documentatie lezen',
  },

  data: {
    capability: {
      chat: 'Chat',
      reasoning: 'Redeneren',
      tools: 'Tool-aanroepen',
      vision: 'Visie',
      'long-context': 'Lange context',
      image: 'Tekst naar beeld',
    },
    apps: {
      'image-studio': {
        tagline: 'Local-first AI-beeldtoolbox',
        description: 'Een gratis desktop-beeldtoolbox. Dagelijkse bewerkingen —— converteren, comprimeren, bijsnijden, watermerken, EXIF —— draaien volledig op je apparaat; AI-functies zoals achtergrond verwijderen en generatief vullen lopen via de BrushLLM-gateway, afgerekend per beeld.',
        highlights: ['25+ lokale tools', 'AI-bewerkingen via de BrushLLM API', '9 talen', 'Nul telemetrie'],
      },
      'video-studio': {
        tagline: 'Local-first toolbox voor video, audio en ondertitels',
        description: 'Een gratis, offline toolbox voor video-, audio- en ondertitelverwerking. Converteren, comprimeren, samenvoegen, trimmen, loudness normaliseren, ondertitelcoderingen herstellen —— 100% lokale verwerking, nul netwerkverzoeken.',
        highlights: ['25+ tools', '100% lokale verwerking', '9 talen', 'Nul netwerkverzoeken'],
      },
      player: {
        tagline: 'Open-source mediaspeler op basis van mpv',
        description: 'Een open-source, cross-platform mediaspeler. Elk formaat dat mpv afspeelt, plus streaming vanaf WebDAV, SMB, FTP, Emby en Jellyfin —— met HDR-uitvoer, hardware-decodering en een interface in 9 talen.',
        highlights: ['Elk formaat via mpv', 'WebDAV · SMB · Emby · Jellyfin', 'HDR en hardware-decodering', '9 talen'],
      },
    },
    models: {
      'gpt-5.2': 'ChatGPT’s vlaggenschip —— sterk in algemeen redeneren, visie en toolgebruik.',
      'gpt-5.2-mini': 'Snel, goedkoop ChatGPT-niveau voor high-volume chat, classificatie en extractie.',
      'deepseek-chat': 'Vlaggenschipmodel zonder denkmodus. Snel, goedkoop en uitstekend in algemene chat en toolgebruik.',
      'deepseek-reasoner': 'Redeneermodel met zichtbare gedachtegang voor wiskunde, code en moeilijke problemen.',
      'glm-4.6': 'Z.ai’s vlaggenschip. Sterk in coderen, schrijven en agentische planning; 200K context.',
      'glm-4.5-air': 'Lichter GLM, afgestemd op kostenbewust productieverkeer.',
      'glm-4.5-flash': 'Gratis tier van de GLM-familie —— ideaal voor prototypes en hobbyprojecten.',
      'qwen3-max': 'Alibaba’s grootste vlaggenschip. Topkwaliteit voor veeleisende agentische en chat-workloads.',
      'qwen3-235b-a22b': 'Open-weights MoE-vlaggenschip met hybride denkmodus.',
      'qwen3-32b': 'Dicht open-weights alleskunner met denk- en niet-denkmodes.',
      'qwen3-coder-plus': 'Codespecifiek model voor agentische codeertools en bewerkingen op repositoryschaal.',
      'qwen-vl-max': 'Visie-taalmodel voor beeldbegrip, OCR en grafiekredeneren.',
      'kimi-k2-0905': 'Biljoenparameter-MoE, geoptimaliseerd voor agentisch toolgebruik en lange documenten.',
      'kimi-k2-thinking': 'Redeneervariant van de K2 met interleaved denken voor meerstaps taken.',
      'MiniMax-M2': 'Efficiënte agentische MoE —— favoriet voor code-agents met een klein budget.',
      'gpt-image-2': 'OpenAI’s beeldgeneratiemodel —— tekst naar beeld met sterke instructieopvolging.',
    },
  },

  pages: {
    home: {
      metaDescription: 'Toegang tot krachtige AI-modellen via één API, en creëer met gratis local-first desktopapps.',
      heroBadge: 'Voor ontwikkelaars · Voor creators',
      heroTitle: 'Jouw AI,',
      heroTitleBand: 'zonder de complexiteit',
      heroSubtitle: 'Krachtige AI-modellen via één API, en creëer met gratis local-first apps',
      heroCtaApi: 'API-sleutel ophalen',
      heroCtaApps: 'Desktopapps',
      heroNote: 'Eén account voor het hele platform',

      platformEyebrow: 'Eén platform',
      platformTitle: 'Eén platform, gebouwd voor ontwikkelaars en creators',
      platformIntro: 'BrushLLM is één platform voor ontwikkelaars en creators: uniforme API-toegang tot krachtige AI-modellen via {modelsLink}, plus een familie {appsLink} —— de AI-functies van Image Studio worden via dezelfde API afgerekend.',
      platformModelsLink: 'AI-modeldiensten',
      platformAppsLink: 'gratis local-first desktopapps',

      apiCardBadge: 'Voor ontwikkelaars',
      apiCardTitle: 'AI-modeldiensten',
      apiCardSubtitle: 'Eén API voor krachtige AI-modellen',
      apiCardDescription: 'Toegang tot krachtige AI-modellen via één API —— {count} modellen, {providers} providers, uniform en naar gebruik.',
      apiCardBullets: [
        'Uniform, OpenAI-compatibel endpoint',
        'Chat-, redeneer-, visie- en beeldmodellen',
        'Gepubliceerde prijzen, pay-as-you-go, gratis tiers',
      ],
      apiCardChips: { models: 'Modellen', pricing: 'Prijzen', docs: 'Docs', console: 'Console' },
      apiCardCta: 'AI-modellen verkennen',
      apiCardSecondary: 'Documentatie lezen',

      appsCardBadge: 'Voor creators · Gratis apps',
      appsCardTitle: 'Desktopapps',
      appsCardSubtitle: 'Gratis local-first tools voor dagelijks werk',
      appsCardDescription: 'Image Studio, Video Studio en Player —— open-source desktopapps voor macOS en Windows, nul telemetrie. De AI-functies van Image Studio draaien op dezelfde API.',
      appsCardNote: 'Open source · macOS · Windows',
      appsCardCta: 'Apps verkennen',

      appsSectionEyebrow: 'Apps',
      appsSectionTitle: 'Gratis local-first apps,',
      appsSectionTitleBand: 'gebouwd op één platform',
      appsSectionFooter: 'Details, screenshots en installers op de {link}',
      appsSectionFooterLink: 'apps-pagina →',

      benefitsEyebrow: 'Waarom onze API',
      benefitsTitle: 'Alles wat je nodig hebt,',
      benefitsTitleBand: 'niets wat je niet nodig hebt',
      benefitsSubtitle: 'Eenvoudige, eerlijke tools om te bouwen met AI-modellen',
      benefits: [
        { title: 'Uniforme API', description: 'Eén OpenAI-compatibel endpoint voor elk model. Houd je SDK —— verander één regel en ship' },
        { title: 'Meerdere modellen', description: 'Chat-, redeneer-, visie- en beeldmodellen van toonaangevende labs —— {count} modellen in één catalogus' },
        { title: 'Eenvoudige integratie', description: 'Werkt met elke OpenAI-SDK. Kopiëren, plakken, draaien —— in cURL, Python, Node.js of Go' },
        { title: 'Gebruiksbased prijzen', description: 'Betaal wat je gebruikt —— per token of per beeld, in USD. Geen abonnementen, en gratis tiers om te starten' },
      ],

      statsEyebrow: 'Beschikbare modellen, één API',
      stats: { providers: 'AI-providers', models: 'Modellen, één catalogus', account: 'Account', countries: 'Bediende landen' },
      statsCompare: 'Onze alles-in-tarieven verslaan OpenRouter op 7 directe vergelijkingen —— {link}',
      statsCompareLink: 'bekijk de vergelijking →',

      howEyebrow: 'Hoe het werkt',
      howTitle: 'Drie stappen naar je eerste token',
      howSteps: [
        { title: 'Maak een account', description: 'Meld je aan met e-mail en haal een API-sleutel uit de console. Geen creditcard nodig om te starten' },
        { title: 'Wijs je SDK naar BrushLLM', description: 'Stel de base URL in en behoud de OpenAI-SDK die je al gebruikt' },
        { title: 'Roep elk model aan per id', description: 'Wissel vrij tussen model-ids —— de hele catalogus is één sleutel verwijderd' },
      ],
      howCodeTitle: 'Houd je code, verander één regel',
      howCodeSubtitle: 'Wat werkt met de OpenAI API, werkt met BrushLLM —— hetzelfde verzoek in vier talen.',

      faqEyebrow: 'FAQ',
      faqTitle: 'Vragen, beantwoord',
      faqDevelopers: 'Voor ontwikkelaars',
      faqCreators: 'Voor creators',
      developerFaqs: [
        {
          question: 'Wat is BrushLLM?',
          answer: 'BrushLLM is een AI-platform voor ontwikkelaars en creators. De AI-modeldiensten geven ontwikkelaars één API voor krachtige modellen, en een familie gratis local-first desktopapps —— Image Studio, Video Studio en Player —— dekt de creatorkant. Eén account dekt het hele platform.',
        },
        {
          question: 'Hoe werkt de API?',
          answer: 'Wijs elke OpenAI-SDK naar {apiBase} en gebruik je BrushLLM-sleutel. Chat-completions, tool-aanroepen en streaming werken zoals je al verwacht.',
        },
        {
          question: 'Welke AI-modellen zijn beschikbaar?',
          answer: 'De catalogus omvat {count} modellen van DeepSeek, Qwen, GLM, Kimi, MiniMax en OpenAI —— chat, redeneren, visie en tekst naar beeld. De volledige lijst met actuele prijzen staat op de Modellen-pagina.',
        },
        {
          question: 'Is de API OpenAI-compatibel?',
          answer: 'Ja, volledig. Wat werkt met de OpenAI API, werkt met BrushLLM —— inclusief code-agents en CLI’s zoals Cursor, Cline, OpenCode en aider.',
        },
        {
          question: 'Hoe wordt gebruik afgerekend?',
          answer: 'Strikt pay-as-you-go in USD —— per token voor tekstmodellen, per beeld voor beeldmodellen. Geen abonnementen of minima; meerdere modellen hebben gratis tiers.',
        },
        {
          question: 'Is BrushLLM geschikt voor startups en bedrijven?',
          answer: 'Ja. Eén endpoint dekt elke provider, gebruiksbased prijzen schalen mee, elke sleutel heeft zijn eigen uitgavenlimiet, en voor vast gebruik zijn volumekortingen beschikbaar.',
        },
        {
          question: 'Hoe beschermen jullie mijn privacy?',
          answer: 'We verzamelen alleen wat een account nodig heeft om te functioneren. Geen trackers, geen analyses, geen advertenties —— je prompts gaan rechtstreeks naar het upstreammodel en worden nooit opgeslagen, verkocht of gebruikt om je te profileren.',
        },
      ],
      creatorFaqs: [
        {
          question: 'Wat is Image Studio?',
          answer: 'Image Studio is BrushLLM’s gratis desktop-beeldtoolbox. Dagelijkse tools —— converteren, comprimeren, bijsnijden, EXIF —— draaien lokaal en offline; AI-functies zoals achtergrond verwijderen en generatief vullen lopen via de BrushLLM API, afgerekend per beeld.',
        },
        {
          question: 'Wat kan ik met Image Studio?',
          answer: 'Converteren, comprimeren, bijsnijden en opruimen met gratis lokale tools —— en daarna genereren, achtergronden verwijderen, objecten wissen, vullen en herstylen met AI, per beeld afgerekend.',
        },
        {
          question: 'Kan ik bestaande afbeeldingen bewerken?',
          answer: 'Ja. Open een afbeelding, selecteer een gebied of het hele canvas en beschrijf de wijziging —— inpainting en achtergrondverwijdering zijn ingebouwd.',
        },
        {
          question: 'Kan ik afbeeldingen genereren en transformeren?',
          answer: 'Ja —— tekst-naar-beeld-generatie en herstyling draaien in dezelfde werkruimte, aangedreven door GPT-Image via de BrushLLM API.',
        },
        {
          question: 'Waar vind ik de apps?',
          answer: 'Alle drie de apps —— Image Studio, Video Studio en Player —— zijn nu beschikbaar via de BrushLLM GitHub-releases, voor macOS (Apple Silicon) en Windows.',
        },
        {
          question: 'Zijn de apps echt gratis?',
          answer: 'Ja. Alle lokale tools zijn gratis en de broncode staat op GitHub. Alleen de AI-functies in Image Studio gebruiken de pay-as-you-go BrushLLM API.',
        },
      ],

      ctaBuildTitle: 'Bouw met AI',
      ctaBuildText: 'Eén API voor {count} modellen —— uniform, naar gebruik, OpenAI-compatibel',
      ctaCreateTitle: 'Creëer met AI',
      ctaCreateText: 'Gratis local-first desktopapps —— maak en bewerk beelden, video en media, met AI-superkrachten in Image Studio',
    },

    models: {
      metaDescription: 'Blader door {count} AI-modellen —— van DeepSeek, Qwen, GLM en Kimi tot GPT en tekst naar beeld —— met contextvensters, capaciteiten en indicatieve prijzen.',
      eyebrow: 'AI-modellen',
      title: '{count} modellen · {providers} providers ·',
      titleBand: 'Eén endpoint',
      intro: 'Elk model hieronder is aanroepbaar via dezelfde OpenAI-compatibele API en dezelfde sleutel. Prijzen zijn indicatief —— USD per 1M tokens voor tekstmodellen, USD per beeld voor beeldmodellen{free}.',
      introFree: ' —— {count} modellen zijn gratis',
      searchPlaceholder: 'Zoek op naam, id of provider…',
      searchLabel: 'Modellen zoeken',
      providerLabel: 'Provider',
      providerGroup: 'Filter op provider',
      capabilityLabel: 'Capaciteit',
      capabilityGroup: 'Filter op capaciteit',
      all: 'Alle',
      showing: '{visible} van {total} modellen',
      empty: 'Geen modellen voldoen aan je filters. Probeer een ander trefwoord, provider, capaciteit of gebruiksgeval.',
      footnote: 'Prijzen zijn indicatieve catalogusprijzen in USD —— per 1M tokens voor tekstmodellen, per gegenereerd beeld voor beeldmodellen —— en kunnen afwijken van de tarieven in je console. Contextvensters zijn het maximum dat elk upstreammodel ondersteunt. Zie de {docsLink} voor integratiedetails.',
      footnoteDocsLink: 'documentatie',
      card: { type: 'Type', perImage: 'Per beeld', output: 'Uitvoer', context: 'Context', input: 'Invoer / 1M', outputPer1M: 'Uitvoer / 1M' },
    },

    pricing: {
      metaDescription: 'Eenvoudige pay-as-you-go-prijzen voor elk model op BrushLLM —— indicatieve prijzen per token in USD, met meerdere gratis tiers.',
      eyebrow: 'Prijzen',
      title: 'Betaal wat je gebruikt,',
      titleBand: 'meer niet',
      intro: 'Tekstmodellen worden per token afgerekend, beeldmodellen per gegenereerd beeld —— alles in USD, zonder abonnementen of minima. Wat je hieronder ziet is het indicatieve catalogustarief; je exacte tarieven en saldo staan in de console.',
      highlights: [
        { title: 'Alleen pay-as-you-go', description: 'Afgerekend per token in USD. Geen abonnementen, geen minima, geen opslagtrucs —— opladen en gaan' },
        { title: '{count} gratis model', description: 'GLM-4.5 Flash kost niets —— perfect voor prototypes en hobbyapps' },
        { title: 'Volumekortingen', description: 'Serieus volume? Neem contact op en we regelen tarieven voor vast gebruik bij jouw workload' },
      ],
      textModelsTitle: 'Tekstmodellen —— per token',
      imageModelsTitle: 'Beeldmodellen —— per beeld',
      table: { model: 'Model', provider: 'Provider', context: 'Context', input: 'Invoer / 1M', output: 'Uitvoer / 1M', resolution: 'Resolutie', pricePerImage: 'Prijs / beeld' },
      footnote: 'Prijzen zijn indicatieve catalogusprijzen in USD —— per 1M tokens voor tekstmodellen, per gegenereerd beeld voor beeldmodellen. De werkelijke afrekening gebeurt in je console, waar je ook de uitgaven per API-sleutel kunt volgen.',
      compareEyebrow: 'Prijscheck',
      compareTitle: 'Dezelfde modellen,',
      compareTitleBand: 'kleinere eindafrekeningen',
      compareIntro: 'OpenRouter rekent bij de aankoop van credits een betalingskosten —— 5,5% per kaart —— bovenop de catalogusprijs van elk model. BrushLLM’s gepubliceerde tarief is het eindtarief dat je betaalt.',
      compareTable: {
        model: 'Model',
        ours: 'BrushLLM in / uit per 1M',
        orList: 'OpenRouter catalogus in / uit',
        orAllIn: 'OpenRouter alles-in* in / uit',
        youSave: 'Je bespaart',
        upTo: 'tot {pct}%',
      },
      compareFootnote: '*Alles-in = OpenRouter-catalogusprijs plus de 5,5% kosten op kredietaankoop (Stripe; crypto is 5%). De besparing vergelijkt BrushLLM’s eindtarief met OpenRouter’s alles-in-tarief. OpenRouter-catalogusprijzen via hun publieke API, opgehaald sep 2026 —— indicatief; controleer actuele tarieven op beide platforms.',
      ctaTitle: 'Bekijk je saldo en tarieven',
      ctaText: 'Opladen, limieten per sleutel instellen en gebruik in realtime volgen —— allemaal in de console',
    },

    docs: {
      metaDescription: 'Snelstartgids voor de BrushLLM API —— authenticatie, een OpenAI-compatibele base URL, SDK-voorbeelden in vier talen en de volledige lijst met model-ids.',
      eyebrow: 'Documentatie',
      title: 'Snelstart,',
      titleBand: 'in één streep',
      intro: 'BrushLLM is een OpenAI-compatibele gateway. Heb je ooit de OpenAI API aangeroepen, dan weet je al hoe je BrushLLM aanroept —— hier de dertig-seconden-versie.',
      toc: { quickstart: 'Snelstart', firstRequest: 'Eerste verzoek', modelIds: 'Model-ids', errors: 'Fouten' },
      tocLabel: 'Secties van de documentatie',
      steps: [
        {
          title: 'Haal een API-sleutel op',
          description: '{createLink} of {signInLink} bij de console en maak dan een sleutel aan. Sleutels zien eruit als {code} —— behandel ze als wachtwoorden en stel een uitgavenlimiet in als je ze aan tools geeft',
          createLink: 'Maak een account',
          signInLink: 'log in',
        },
        {
          title: 'Stel de base URL en sleutel in',
          description: 'Wijs elke OpenAI-SDK naar ons endpoint:',
          baseUrlLabel: 'base_url',
        },
        {
          title: 'Roep elk model aan per id',
          description: 'Geef één van de ids uit de tabel hieronder door als {code}. Dat is alles —— je roept al modellen aan van toonaangevende AI-labs',
        },
      ],
      firstRequestTitle: 'Je eerste verzoek',
      firstRequestText: 'Hetzelfde verzoek in vier talen —— inclusief streaming. Kopiëren, plakken, draaien',
      modelIdsTitle: 'Model-ids',
      modelIdsText: 'Gebruik exact deze ids (hoofdlettergevoelig). Beschrijvingen en capaciteiten op de {modelsLink}. Beeldmodellen worden aangeroepen via {code} met dezelfde API-sleutel.',
      modelIdsModelsLink: 'modellenpagina',
      modelIdsTable: { id: 'Model-id', name: 'Weergavenaam', context: 'Context' },
      errorsTitle: 'Fouten',
      errorsTable: { status: 'Status', meaning: 'Betekenis', fix: 'Wat te doen' },
      errors: [
        { meaning: 'Ongeldige of ontbrekende API-sleutel', fix: 'Controleer of je sleutel begint met “brsh-” en niet is ingetrokken in de console.' },
        { meaning: 'Onbekend model-id', fix: 'Gebruik een id exact zoals in de tabel hierboven —— ze zijn hoofdlettergevoelig.' },
        { meaning: 'Rate limit of quota overschreden', fix: 'Wacht en probeer opnieuw met backoff, of verhoog de quota van deze sleutel in de console.' },
        { meaning: 'Onvoldoende saldo', fix: 'Laad je account in de console op en probeer het verzoek opnieuw.' },
        { meaning: 'Fout bij de upstreamprovider', fix: 'Probeer na enkele seconden opnieuw; als het aanhoudt, wissel naar een ander model-id of neem contact op met support.' },
      ],
      helpTitle: 'Ergens vastgelopen?',
      helpText: 'Raadpleeg de console voor sleutels, quota en facturering, of mail ons op {email}',
    },

    apps: {
      metaDescription: 'BrushLLM-desktopapps —— Image Studio, Video Studio en Player. Gratis, local-first, open source, voor macOS en Windows.',
      eyebrow: 'Apps',
      title: 'Gratis local-first apps,',
      titleBand: 'open source',
      intro: 'Drie desktoptools voor macOS en Windows —— nul telemetrie, nul accounts, geen advertenties. De AI-functies van Image Studio sluiten rechtstreeks aan op de BrushLLM API.',
      apiTitle: 'De API achter de AI-functies',
      apiText: 'De AI-tools van Image Studio draaien op de BrushLLM-gateway —— één OpenAI-compatibel endpoint, gepubliceerde tarieven per beeld.',
    },

    studio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Desktopapp · Gratis + AI naar gebruik',
      intro: 'Elke lokale tool is gratis en draait volledig op je apparaat —— Rust-engine, geen uploads. AI-functies roepen dezelfde {apiLink} aan die de rest van het platform aandrijft, afgerekend per beeld volgens de {ratesLink}.',
      introApiLink: 'BrushLLM API',
      introRatesLink: 'gepubliceerde tarieven',
      outro: 'Bekijk de beeldmodellen achter de AI-tools →',
      groups: [
        {
          title: 'Lokale tools —— gratis, offline, privé',
          items: [
            { title: 'Converteren en comprimeren', description: '8 invoerformaten naar 8 uitvoerformaten (inclusief AVIF en WebP), met Lanczos-herbemonstering en kwaliteitscontrole.' },
            { title: 'Formaat wijzigen, bijsnijden en roteren', description: 'Batch-vriendelijke geometrische tools met exacte pixelafmetingen en beeldverhoudings-presets.' },
            { title: 'Watermerken en annotaties', description: 'Tekst- en beeldwatermerken, pijlen, kaders en vrije annotatie voor screenshots en documenten.' },
            { title: 'EXIF bekijken, bewerken en wissen', description: 'Inspecteer volledige metadata, herschrijf velden, of verwijder locatie- en cameragegevens vóór delen.' },
            { title: 'Samenvoegen, mozaïek en schaduwen', description: 'Combineer afbeeldingen in rasters, pixeleer gebieden, voeg afgeronde hoeken en slagschaduwen toe.' },
            { title: 'Kleurtools', description: 'Helderheid, contrast en verzadiging, kleurvervanging en een vergrotende kleurenkiezer.' },
          ],
        },
        {
          title: 'AI-tools —— aangedreven door de BrushLLM-gateway',
          items: [
            { title: 'Beelden genereren', description: 'Tekst naar beeld met GPT-Image —— afgerekend per gegenereerd beeld, geen abonnement.' },
            { title: 'Achtergronden verwijderen', description: 'Uitknippen met één klik en schone randen, rechtstreeks vanaf je desktop.' },
            { title: 'Objecten en watermerken verwijderen', description: 'Selecteer een gebied en beschrijf wat moet verdwijnen —— inpainting vult het aan.' },
            { title: 'Generatief vullen', description: 'Uitbreiden, vervangen of wisselen, met optionele referentiebeelden (bijv. persoon wisselen).' },
            { title: 'Herstylen', description: 'Schilder een beeld opnieuw in een nieuwe stijl, met behoud van compositie en identiteit.' },
            { title: 'Jouw sleutel, jouw quota', description: 'De API-sleutel staat in de OS-sleutelbos; elke sleutel draagt zijn eigen uitgavenquota uit de console.' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Desktopapp · Gratis',
      intro: '100% lokale verwerking —— je media verlaten de machine nooit. FFmpeg-binaries zijn vastgezet en SHA-256-geverifieerd, de engine draait een pauzeerbare taakwachtrij, en 175 geautomatiseerde tests houden de toolbox eerlijk.',
      groups: [
        {
          title: 'Video',
          items: [
            { title: 'Converteren', description: 'MP4, MKV, WebM, MOV en AVI met H.264-, H.265-, VP9- of AV1-codecs.' },
            { title: 'Comprimeren', description: 'Kwaliteitgebaseerde (CRF) of doel-bitrate compressie met live grootteschatting.' },
            { title: 'Samenvoegen en trimmen', description: 'Verbind clips in volgorde, knip segmenten met frame-nauwkeurige in/out-punten.' },
            { title: 'Bijsnijden, schalen en roteren', description: 'Geometrische correcties voor verkeerd georiënteerd of opgevuld beeldmateriaal.' },
            { title: 'Snelheid wijzigen', description: '0,25× tot 4× afspeelsnelheid met toonhoogtecorrectie.' },
            { title: 'Frames, GIF’s en WebP', description: 'Extraheer stilstaande frames, of zet clips om naar animatie-GIF/WebP.' },
          ],
        },
        {
          title: 'Audio',
          items: [
            { title: 'Extraheren en converteren', description: 'Haal audio op naar MP3, M4A, FLAC, WAV, OGG of Opus.' },
            { title: 'Loudness-normalisatie', description: 'EBU R128-normalisatie voor consistent volume tussen bestanden.' },
            { title: 'Volume en gain', description: 'Verhoog of verlaag zonder de video opnieuw te encoderen, waar mogelijk.' },
            { title: 'Dempen of vervangen', description: 'Verwijder audiosporen, of wissel in een nieuwe soundtrack.' },
            { title: 'Trimmen', description: 'Knip audiosegmenten met dezelfde in/out-precisie als video.' },
          ],
        },
        {
          title: 'Ondertitels',
          items: [
            { title: 'Inbedden of inbranden', description: 'Koppel zachte ondertitelsporen, of brand ze hard in het beeld.' },
            { title: 'Formaten converteren', description: 'SRT, VTT, ASS, SSA en TTML —— met een ondertitel-engine zonder dependencies.' },
            { title: 'Coderingen herstellen', description: 'Herstel verouderde GBK/Big5-bestanden automatisch naar schoon UTF-8.' },
            { title: 'Timing verschuiven', description: 'Schuif ondertitels in bulk voor- of achteruit, gesynchroniseerd met je video.' },
            { title: 'Extraheren', description: 'Haal bestaande ondertitelsporen uit elke container.' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Desktopapp · Open source',
      intro: 'De macOS-app is een native Swift + SwiftUI-build rond libmpv; de Windows-app is een Tauri-herschrijving met dezelfde mpv-kern. Nul telemetrie, updates alleen gecontroleerd wanneer jij het vraagt.',
      groups: [
        {
          title: 'Afspelen',
          items: [
            { title: 'Elk formaat', description: 'Gebouwd op mpv: MKV, MP4, AVI, MOV, WebM, FLAC, MP3 en alles wat mpv afspeelt.' },
            { title: 'HDR-uitvoer', description: 'PQ- en EDR-passthrough op ondersteunde schermen, met uitschakelbare hardware-decodering.' },
            { title: 'Schijfimages', description: 'Speel ISO Blu-ray- en DVD-images direct af.' },
            { title: 'Bediening', description: 'A-B-lus, afspeelsnelheid, frame-stappen, hoofdstukken en screenshots.' },
            { title: 'Afspeellijst en geschiedenis', description: 'Sleep-naar-herschik afspeellijsten, hervat waar je was, bladwijzers.' },
            { title: 'Minivenster', description: 'Een zwevend, altijd-bovenaan miniplayer voor multitasken.' },
          ],
        },
        {
          title: 'Streaming',
          items: [
            { title: 'WebDAV en SMB', description: 'Blader en stream vanaf je NAS —— inclusief native macOS SMB-mounting.' },
            { title: 'FTP', description: 'Ingebouwde FTP-client met mapverkenning en direct streamen.' },
            { title: 'Emby en Jellyfin', description: 'Log in, blader door bibliotheken en stream direct zonder transcodering.' },
            { title: 'HTTP en HLS', description: 'Speel links en m3u8/HLS-streams af met instelbare read-ahead-buffer.' },
          ],
        },
        {
          title: 'Ondertitels en tools',
          items: [
            { title: 'Automatisch geladen ondertitels', description: 'Bijpassende sidecar-bestanden laden automatisch; externe op verzoek.' },
            { title: 'Live styling', description: 'Lettertype, grootte, kleur en positie —— herstijld terwijl je kijkt.' },
            { title: 'Equalizer en opname', description: 'Audio-equalizer, plus streamopname voor archivering.' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'BrushLLM bouwt AI-producten voor ontwikkelaars én creators —— een uniforme API voor krachtige AI-modellen en gratis local-first desktopapps voor beeld, video en media.',
      eyebrow: 'Over',
      title: 'AI-producten voor',
      titleBand: 'ontwikkelaars en creators',
      intro: 'BrushLLM bouwt AI-producten voor ontwikkelaars en creators. Eén platform, één account —— en dezelfde belofte aan beide kanten: eenvoudige tools, gepubliceerde prijzen, privacy by design.',
      forDevelopers: 'Voor ontwikkelaars.',
      forDevelopersText: '{link} —— een uniforme API voor toegang tot krachtige AI-modellen. {count} modellen van DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI en meer, achter één OpenAI-compatibel endpoint.',
      forDevelopersLink: 'AI-modeldiensten',
      forCreators: 'Voor creators.',
      forCreatorsText: '{link} —— gratis local-first desktopapps voor macOS en Windows. Image Studio combineert gratis lokale tools met AI-bewerking via dezelfde API; alle drie zijn open source zonder telemetrie.',
      forCreatorsLink: 'Image Studio, Video Studio en Player',
      values: [
        { title: 'Open naar de wereld', description: 'Frontier-AI zou geen aparte accounts, lokale betaalobstakels of regio-blokkades nodig moeten hebben —— en ook geen fortuin moeten kosten. Eén registratie, in USD, vanuit elk land' },
        { title: 'Eén platform, één account', description: 'Eén platform, één account, één factuur. Als integreren langer duurt dan een koffiepauze, is dat onze bug, niet jouw probleem' },
        { title: 'Eerlijke prijzen', description: 'Gepubliceerde tarieven per token, geen abonnementsvallen, en gratis tiers die gratis blijven. Je zou altijd moeten weten wat een verzoek kost' },
        { title: 'Privacy by design', description: 'We verzamelen alleen wat een account nodig heeft om te functioneren. Geen trackers, geen analyses, geen advertenties —— je prompts worden nooit opgeslagen, verkocht of gebruikt om je te profileren' },
      ],
      familyTitle: 'De BrushLLM-familie',
      familyText: 'Eén platform, twee sporen —— een uniforme API voor ontwikkelaars en een familie gratis local-first desktopapps voor creators.',
      familyApiTitle: 'AI-modeldiensten',
      familyApiText: 'Eén OpenAI-compatibel endpoint voor {count} modellen van {providers} providers —— betaal per token of per beeld.',
      contactTitle: 'Praat met ons',
      contactText: 'Vragen, volumeprijzen of een model dat je toegevoegd zou willen zien —— we lezen alles',
      contactCta: 'Beginnen',
    },

    notFound: {
      metaDescription: 'Deze pagina kon niet worden gevonden.',
      code: '404 · BUITEN HET DOEK',
      title: 'Deze pagina is overgeschilderd',
      text: 'De link is mogelijk verouderd of de pagina is verplaatst. De modellen staan echter precies waar je ze achterliet.',
      backHome: 'Terug naar home',
      browseModels: 'Modellen bekijken',
    },
  },
};

export default nl;
