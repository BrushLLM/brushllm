/**
 * Français. Structure identique à en.ts (garantie par le type Dictionary).
 * Les marqueurs {count}/{year}/{pct} restent en place et sont remplacés au rendu.
 * À ne pas traduire : ids de modèles, URLs, exemples de code, prix, identifiants de licence, noms de produit.
 */
import type { Dictionary } from './index';

const fr: Dictionary = {
  site: {
    title: 'BrushLLM — Votre IA, sans la complexité',
    description: 'Accédez à des modèles d’IA puissants via une seule API, et créez avec des applications de bureau gratuites, d’abord locales. BrushLLM est une plateforme d’IA pour développeurs et créatifs.',
    organizationDescription: 'BrushLLM est une plateforme d’IA pour développeurs et créatifs, proposant des Services de Modèles d’IA (une API pour des modèles d’IA puissants) et des applications de bureau gratuites, d’abord locales —— Image Studio, Video Studio et Player.',
  },

  nav: {
    models: 'Modèles d’IA',
    apps: 'Applications',
    pricing: 'Tarifs',
    docs: 'Documentation',
    about: 'À propos',
  },

  header: {
    home: 'BrushLLM accueil',
    mainNav: 'Navigation principale',
    mobileNav: 'Navigation mobile',
    logIn: 'Connexion',
    getStarted: 'Commencer',
    toggleMenu: 'Ouvrir/fermer le menu',
  },

  languageSwitcher: {
    label: 'Langue',
    system: 'Auto',
    systemTitle: 'Suivre la langue du navigateur',
  },

  appPage: {
    openSourceTitle: 'Open source, logiciel honnête',
    openSourceText: 'Code source, tickets et versions sont sur GitHub{license}. Pas de télémétrie, pas de compte, pas de publicité.',
  },

  footer: {
    blurb: 'BrushLLM —— l’IA pour développeurs et créatifs. Des modèles d’IA puissants via une seule API, plus des applications de bureau gratuites, d’abord locales. Nous protégeons votre vie privée : pas de traqueurs, pas d’analytics, pas de pub.',
    tagline: 'Une API · Trois applis gratuites · Confidentialité d’abord',
    product: 'Produit',
    console: 'Console',
    company: 'Entreprise',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: 'À propos de BrushLLM',
    privacyPolicy: 'Confidentialité',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: 'propulsé par une passerelle compatible OpenAI',
  },

  common: {
    skipToContent: 'Aller au contenu',
    codeExamples: 'Exemples de code',
    moreQuestions: 'Plus de questions',
    download: 'Télécharger',
    github: 'GitHub',
    tryIt: 'Essayer',
    featured: 'À la une',
    free: 'Gratuit',
    copy: 'Copier',
    copied: 'Copié !',
    copyFallback: 'Échec de la copie',
    learnMore: 'En savoir plus',
    learnMoreArrow: 'En savoir plus',
    downloadArrow: 'Télécharger',
    exploreAiModels: 'Explorer les modèles d’IA',
    exploreTheApps: 'Explorer les applications',
    exploreTheApi: 'Explorer l’API',
    browseModels: 'Voir les modèles',
    openTheConsole: 'Ouvrir la console',
    readTheDocs: 'Lire la documentation',
  },

  data: {
    capability: {
      chat: 'Chat',
      reasoning: 'Raisonnement',
      tools: 'Appels d’outils',
      vision: 'Vision',
      'long-context': 'Contexte long',
      image: 'Texte vers image',
    },
    apps: {
      'image-studio': {
        tagline: 'Boîte à outils d’images IA, d’abord locale',
        description: 'Une boîte à outils d’images de bureau gratuite. Les retouches du quotidien —— conversion, compression, recadrage, filigranes, EXIF —— s’exécutent entièrement sur votre appareil ; les fonctions IA comme la suppression d’arrière-plan et le remplissage génératif passent par la passerelle BrushLLM, facturées à l’image.',
        highlights: ['25+ outils locaux', 'Retouches IA via l’API BrushLLM', '9 langues', 'Zéro télémétrie'],
      },
      'video-studio': {
        tagline: 'Boîte à outils locale vidéo, audio et sous-titres',
        description: 'Une boîte à outils gratuite et hors ligne pour traiter vidéo, audio et sous-titres. Convertir, compresser, fusionner, découper, normaliser le volume, corriger les encodages de sous-titres —— traitement 100 % local, zéro requête réseau.',
        highlights: ['25+ outils', 'Traitement 100 % local', '9 langues', 'Zéro requête réseau'],
      },
      player: {
        tagline: 'Lecteur multimédia open source basé sur mpv',
        description: 'Un lecteur multimédia open source multiplateforme. Tous les formats lus par mpv, plus le streaming depuis WebDAV, SMB, FTP, Emby et Jellyfin —— avec sortie HDR, décodage matériel et interface en 9 langues.',
        highlights: ['Tous les formats via mpv', 'WebDAV · SMB · Emby · Jellyfin', 'HDR et décodage matériel', '9 langues'],
      },
    },
    models: {
      'gpt-5.2': 'Le vaisseau amiral de ChatGPT —— raisonnement général, vision et usage d’outils très solides.',
      'gpt-5.2-mini': 'Niveau ChatGPT rapide et bon marché pour le chat à fort volume, la classification et l’extraction.',
      'deepseek-chat': 'Modèle amiral sans mode réflexion. Rapide, économique et excellent en chat général et en outils.',
      'deepseek-reasoner': 'Modèle de raisonnement à chaîne de pensée visible, pour les maths, le code et les problèmes difficiles.',
      'glm-4.6': 'Amiral de Z.ai. Fort en code, rédaction et planification agentique ; contexte de 200K.',
      'glm-4.5-air': 'GLM plus léger, taillé pour un trafic de production sensible au coût.',
      'glm-4.5-flash': 'Palier gratuit de la famille GLM —— idéal pour les prototypes et projets perso.',
      'qwen3-max': 'Le plus grand amiral d’Alibaba. Qualité de premier ordre pour les charges agentiques et de chat exigeantes.',
      'qwen3-235b-a22b': 'Amiral MoE à poids ouverts avec mode réflexion hybride.',
      'qwen3-32b': 'Module polyvalent dense à poids ouverts, modes réflexion et non-réflexion.',
      'qwen3-coder-plus': 'Modèle spécialisé code pour outils de codage agentiques et modifications à l’échelle du dépôt.',
      'qwen-vl-max': 'Modèle vision-langage pour la compréhension d’images, l’OCR et le raisonnement sur graphiques.',
      'kimi-k2-0905': 'MoE à mille milliards de paramètres optimisé pour l’usage d’outils agentiques et les longs documents.',
      'kimi-k2-thinking': 'Variante de raisonnement du K2, à réflexion entrelacée pour les tâches multi-étapes.',
      'MiniMax-M2': 'MoE agentique efficace —— un favori des agents de code au budget serré.',
      'gpt-image-2': 'Modèle de génération d’images d’OpenAI —— texte vers image avec un excellent suivi des consignes.',
    },
  },

  pages: {
    home: {
      metaDescription: 'Accédez à des modèles d’IA puissants via une seule API, et créez avec des applications de bureau gratuites, d’abord locales.',
      heroBadge: 'Pour les développeurs · Pour les créatifs',
      heroTitle: 'Votre IA,',
      heroTitleBand: 'sans la complexité',
      heroSubtitle: 'Des modèles d’IA puissants via une seule API, et de la création avec des applis locales gratuites',
      heroCtaApi: 'Obtenir une clé API',
      heroCtaApps: 'Applis de bureau',
      heroNote: 'Un compte pour toute la plateforme',

      platformEyebrow: 'Une plateforme',
      platformTitle: 'Une plateforme pensée pour les développeurs et les créatifs',
      platformIntro: 'BrushLLM est une plateforme pour développeurs et créatifs : un accès API unifié aux modèles d’IA puissants via {modelsLink}, plus une famille d’{appsLink} —— les fonctions IA d’Image Studio sont facturées via la même API.',
      platformModelsLink: 'Services de Modèles d’IA',
      platformAppsLink: 'applications de bureau gratuites, d’abord locales',

      apiCardBadge: 'Pour les développeurs',
      apiCardTitle: 'Services de Modèles d’IA',
      apiCardSubtitle: 'Une API pour des modèles d’IA puissants',
      apiCardDescription: 'Accédez à des modèles d’IA puissants via une API unique —— {count} modèles, {providers} fournisseurs, unifiés et à l’usage.',
      apiCardBullets: [
        'Endpoint unique, compatible OpenAI',
        'Modèles de chat, raisonnement, vision et image',
        'Prix publiés, paiement à l’usage, paliers gratuits',
      ],
      apiCardChips: { models: 'Modèles', pricing: 'Tarifs', docs: 'Docs', console: 'Console' },
      apiCardCta: 'Explorer les modèles d’IA',
      apiCardSecondary: 'Lire la documentation',

      appsCardBadge: 'Pour les créatifs · Applis gratuites',
      appsCardTitle: 'Applis de bureau',
      appsCardSubtitle: 'Des outils locaux gratuits pour le quotidien',
      appsCardDescription: 'Image Studio, Video Studio et Player —— des applications de bureau open source pour macOS et Windows, zéro télémétrie. Les fonctions IA d’Image Studio tournent sur la même API.',
      appsCardNote: 'Open source · macOS · Windows',
      appsCardCta: 'Explorer les applications',

      appsSectionEyebrow: 'Applications',
      appsSectionTitle: 'Des applis locales gratuites,',
      appsSectionTitleBand: 'construites sur une seule plateforme',
      appsSectionFooter: 'Détails, captures et installateurs sur la {link}',
      appsSectionFooterLink: 'page des applications',

      benefitsEyebrow: 'Pourquoi notre API',
      benefitsTitle: 'Tout ce qu’il vous faut,',
      benefitsTitleBand: 'rien de superflu',
      benefitsSubtitle: 'Des outils simples et honnêtes pour construire avec des modèles d’IA',
      benefits: [
        { title: 'API unifiée', description: 'Un endpoint compatible OpenAI pour tous les modèles. Gardez votre SDK —— changez une ligne et livrez' },
        { title: 'Modèles multiples', description: 'Modèles de chat, raisonnement, vision et image des grands laboratoires —— {count} modèles dans un catalogue' },
        { title: 'Intégration simple', description: 'Fonctionne avec tout SDK OpenAI. Copiez, collez, exécutez —— en cURL, Python, Node.js ou Go' },
        { title: 'Tarifs à l’usage', description: 'Payez ce que vous consommez —— au token ou à l’image, en USD. Sans abonnement, avec des paliers gratuits pour débuter' },
      ],

      statsEyebrow: 'Modèles disponibles, une API',
      stats: { providers: 'Fournisseurs d’IA', models: 'Modèles, un catalogue', account: 'Compte', countries: 'Pays desservis' },
      statsCompare: 'Nos prix tout compris battent OpenRouter sur 7 comparaisons directes —— {link}',
      statsCompareLink: 'voir la comparaison',

      howEyebrow: 'Comment ça marche',
      howTitle: 'Trois étapes jusqu’à votre premier token',
      howSteps: [
        { title: 'Créez un compte', description: 'Inscrivez-vous par e-mail et récupérez une clé API dans la console. Aucune carte bancaire pour démarrer' },
        { title: 'Pointez votre SDK vers BrushLLM', description: 'Définissez la base URL et gardez le SDK OpenAI que vous utilisez déjà' },
        { title: 'Appelez n’importe quel modèle par id', description: 'Changez d’ids librement —— tout le catalogue est à une clé d’intervalle' },
      ],
      howCodeTitle: 'Gardez votre code, changez une ligne',
      howCodeSubtitle: 'Si ça marche avec l’API OpenAI, ça marche avec BrushLLM —— la même requête en quatre langages.',

      faqEyebrow: 'FAQ',
      faqTitle: 'Des questions, des réponses',
      faqDevelopers: 'Pour les développeurs',
      faqCreators: 'Pour les créatifs',
      developerFaqs: [
        {
          question: 'Qu’est-ce que BrushLLM ?',
          answer: 'BrushLLM est une plateforme d’IA pour développeurs et créatifs. Les Services de Modèles d’IA offrent aux développeurs une API pour des modèles puissants, et une famille d’applications de bureau gratuites, d’abord locales —— Image Studio, Video Studio et Player —— couvre le côté créatif. Un seul compte pour toute la plateforme.',
        },
        {
          question: 'Comment fonctionne l’API ?',
          answer: 'Pointez n’importe quel SDK OpenAI vers {apiBase} et utilisez votre clé BrushLLM. Les complétions de chat, appels d’outils et le streaming se comportent comme vous l’attendez.',
        },
        {
          question: 'Quels modèles d’IA sont disponibles ?',
          answer: 'Le catalogue couvre {count} modèles de DeepSeek, Qwen, GLM, Kimi, MiniMax et OpenAI —— chat, raisonnement, vision et texte vers image. La liste complète avec les prix en direct est sur la page Modèles.',
        },
        {
          question: 'L’API est-elle compatible OpenAI ?',
          answer: 'Oui, totalement. Ce qui fonctionne avec l’API OpenAI fonctionne avec BrushLLM —— y compris les agents de code et CLI comme Cursor, Cline, OpenCode et aider.',
        },
        {
          question: 'Comment la consommation est-elle facturée ?',
          answer: 'Strictement au paiement à l’usage, en USD —— au token pour les modèles de texte, à l’image pour les modèles d’image. Pas d’abonnement ni de minimum ; plusieurs modèles ont des paliers gratuits.',
        },
        {
          question: 'BrushLLM convient-il aux startups et aux entreprises ?',
          answer: 'Oui. Un seul endpoint couvre tous les fournisseurs, la tarification à l’usage évolue avec vous, chaque clé a son propre plafond de dépense, et des remises volume existent pour un usage engagé.',
        },
        {
          question: 'Comment protégez-vous ma vie privée ?',
          answer: 'Nous ne collectons que ce qu’un compte nécessite pour fonctionner. Pas de traqueurs, pas d’analytics, pas de pub —— vos prompts sont transmis directement au modèle amont et jamais stockés, vendus ni utilisés pour vous profiler. {privacyLink}',
        },
              {
          question: 'Comment vos prix se comparent-ils à OpenRouter ?',
          answer: 'Sur 7 modèles comparés directement, notre coût total est inférieur — OpenRouter ajoute des frais de paiement de 5,5 % au prix catalogue de chaque modèle, tandis que notre tarif publié est le tarif final. {pricingLink}',
        },
        {
          question: 'Le site est-il disponible dans d\'autres langues ?',
          answer: 'Oui — ce site et les trois applications de bureau existent en 9 langues : anglais, allemand, espagnol, français, portugais (Brésil), japonais, chinois simplifié/traditionnel et coréen.',
        },
        {
          question: 'L\'installateur de l\'application affiche un avertissement de sécurité. Est-ce normal ?',
          answer: 'Oui. Les applications ne sont pas signées, donc Gatekeeper (macOS) et SmartScreen (Windows) affichent un avertissement au premier lancement. Sur macOS : clic droit sur l\'app puis Ouvrir ; sur Windows : choisir Exécuter quand même. Les apps ne contiennent aucune télémétrie.',
        },
  ],
      creatorFaqs: [
        {
          question: 'Qu’est-ce qu’Image Studio ?',
          answer: 'Image Studio est la boîte à outils d’images de bureau gratuite de BrushLLM. Les outils du quotidien —— conversion, compression, recadrage, EXIF —— tournent en local et hors ligne ; les fonctions IA comme la suppression d’arrière-plan et le remplissage génératif passent par l’API BrushLLM, facturées à l’image.',
        },
        {
          question: 'Que puis-je faire avec Image Studio ?',
          answer: 'Convertir, compresser, recadrer et nettoyer des images avec des outils locaux gratuits —— puis générer, supprimer des fonds, effacer des objets, remplir et relooker avec l’IA, à l’image.',
        },
        {
          question: 'Puis-je modifier des images existantes ?',
          answer: 'Oui. Ouvrez n’importe quelle image, sélectionnez une zone ou tout le canevas et décrivez le changement —— l’inpainting et la suppression d’arrière-plan sont intégrés.',
        },
        {
          question: 'Puis-je générer et transformer des images ?',
          answer: 'Oui —— la génération texte vers image et le restylage se font dans le même espace, propulsés par GPT-Image via l’API BrushLLM.',
        },
        {
          question: 'Où télécharger les applications ?',
          answer: 'Les trois applications —— Image Studio, Video Studio et Player —— sont disponibles dès maintenant sur les releases GitHub de BrushLLM, pour macOS (Apple Silicon) et Windows.',
        },
        {
          question: 'Les applications sont-elles vraiment gratuites ?',
          answer: 'Oui. Tous les outils locaux sont gratuits et le code source est sur GitHub. Seules les fonctions IA d’Image Studio utilisent l’API BrushLLM à l’usage.',
        },
      ],

      ctaBuildTitle: 'Construisez avec l’IA',
      ctaBuildText: 'Une API pour {count} modèles —— unifiée, à l’usage, compatible OpenAI',
      ctaCreateTitle: 'Créez avec l’IA',
      ctaCreateText: 'Des applications de bureau gratuites, d’abord locales —— créez et retouchez images, vidéo et médias, avec des super-pouvoirs IA dans Image Studio',
    },

    models: {
      metaDescription: 'Parcourez {count} modèles d’IA —— de DeepSeek, Qwen, GLM et Kimi à GPT et texte vers image —— avec fenêtres de contexte, capacités et prix indicatifs.',
      eyebrow: 'Modèles d’IA',
      title: '{count} modèles · {providers} fournisseurs ·',
      titleBand: 'Un endpoint',
      intro: 'Tous les modèles ci-dessous sont appelables via la même API compatible OpenAI et la même clé. Les prix sont indicatifs —— en USD par 1M de tokens pour le texte, par image pour l’image.',
      introFree: ' — {count} sans frais',
      searchPlaceholder: 'Rechercher par nom, id ou fournisseur…',
      searchLabel: 'Rechercher des modèles',
      providerLabel: 'Fournisseur',
      providerGroup: 'Filtrer par fournisseur',
      capabilityLabel: 'Capacité',
      capabilityGroup: 'Filtrer par capacité',
      all: 'Tous',
      showing: '{visible} modèles affichés sur {total}',
      empty: 'Aucun modèle ne correspond à vos filtres. Essayez un autre mot-clé, fournisseur, capacité ou cas d’usage.',
      footnote: 'Les prix sont des prix catalogue indicatifs en USD —— par 1M de tokens pour le texte, par image générée pour l’image —— et peuvent différer des tarifs configurés dans votre console. Les fenêtres de contexte sont les maximums de chaque modèle amont. Voir la {docsLink} pour les détails d’intégration.',
      footnoteDocsLink: 'documentation',
      card: { type: 'Type', perImage: 'Par image', output: 'Sortie', context: 'Contexte', input: 'Entrée / 1M', outputPer1M: 'Sortie / 1M' },
    },

    pricing: {
      metaDescription: 'Une tarification simple à l’usage pour tous les modèles de BrushLLM —— prix indicatifs par token en USD, avec plusieurs paliers gratuits.',
      eyebrow: 'Tarifs',
      title: 'Payez ce que vous consommez,',
      titleBand: 'c’est tout',
      intro: 'Les modèles de texte sont facturés au token, les modèles d’image à l’image générée —— le tout en USD, sans abonnement ni minimum. Ce que vous voyez ci-dessous est le tarif catalogue indicatif ; vos tarifs exacts et votre solde sont dans la console.',
      highlights: [
        { title: 'Uniquement à l’usage', description: 'Facturation au token en USD. Pas d’abonnement, pas de minimum, pas de jeux de majoration —— rechargez et partez' },
        { title: '{count} modèle gratuit', description: 'GLM-4.5 Flash ne coûte rien —— parfait pour les prototypes et projets perso' },
        { title: 'Remises volume', description: 'Un volume sérieux ? Écrivez-nous, nous trouverons des tarifs d’usage engagé pour votre charge' },
      ],
      textModelsTitle: 'Modèles de texte —— au token',
      imageModelsTitle: 'Modèles d’image —— à l’image',
      table: { model: 'Modèle', provider: 'Fournisseur', context: 'Contexte', input: 'Entrée / 1M', output: 'Sortie / 1M', resolution: 'Résolution', pricePerImage: 'Prix / image' },
      footnote: 'Les prix sont des prix catalogue indicatifs en USD —— par 1M de tokens pour le texte, par image générée pour l’image. La facturation réelle se fait dans votre console, où vous pouvez aussi suivre les dépenses par clé API.',
      compareEyebrow: 'Vérification des prix',
      compareTitle: 'Les mêmes modèles,',
      compareTitleBand: 'des factures tout compris plus légères',
      compareIntro: 'OpenRouter ajoute des frais de paiement à l’achat de crédits —— 5,5 % par carte —— au-dessus du prix catalogue de chaque modèle. Le prix publié par BrushLLM est le prix final que vous payez.',
      compareTable: {
        model: 'Modèle',
        ours: 'in / out par 1M',
        orList: 'catalogue in / out',
        orAllIn: 'tout compris* in / out',
        youSave: 'Vous économisez',
        upTo: 'jusqu’à {pct} %',
      },
      compareFootnote: '*Tout compris = prix catalogue OpenRouter plus les frais d’achat de crédits de 5,5 % (Stripe ; crypto 5 %). L’économie compare le tarif final BrushLLM au tarif tout compris d’OpenRouter. Prix catalogue OpenRouter via leur API publique, récupérés en sept. 2026 —— indicatifs ; vérifiez les tarifs actuels sur les deux plateformes.',
      ctaTitle: 'Vérifiez solde et tarifs',
      ctaText: 'Rechargez, fixez des plafonds par clé et suivez la consommation en temps réel —— le tout dans la console',
    },

    docs: {
      metaDescription: 'Guide de démarrage rapide de l’API BrushLLM —— authentification, base URL compatible OpenAI, exemples SDK en quatre langages et liste complète des ids de modèles.',
      eyebrow: 'Documentation',
      title: 'Démarrage rapide,',
      titleBand: 'en un coup de pinceau',
      intro: 'BrushLLM est une passerelle compatible OpenAI. Si vous avez déjà appelé l’API OpenAI, vous savez déjà appeler BrushLLM —— voici la version en trente secondes.',
      toc: { quickstart: 'Démarrage rapide', firstRequest: 'Première requête', modelIds: 'Ids de modèles', errors: 'Erreurs' },
      tocLabel: 'Sections de la documentation',
      steps: [
        {
          title: 'Obtenez une clé API',
          description: '{createLink} ou {signInLink} à la console, puis créez une clé. Les clés ressemblent à {code} —— traitez-les comme des mots de passe et fixez un plafond de dépense si vous les confiez à des outils',
          createLink: 'Créez un compte',
          signInLink: 'connectez-vous',
        },
        {
          title: 'Définissez la base URL et la clé',
          description: 'Pointez n’importe quel SDK OpenAI vers notre endpoint :',
          baseUrlLabel: 'base_url',
        },
        {
          title: 'Appelez n’importe quel modèle par id',
          description: 'Passez un des ids du tableau ci-dessous comme {code}. C’est tout —— vous appelez des modèles des grands laboratoires d’IA',
        },
      ],
      firstRequestTitle: 'Votre première requête',
      firstRequestText: 'La même requête en quatre langages —— streaming inclus. Copiez, collez, exécutez',
      modelIdsTitle: 'Ids de modèles',
      modelIdsText: 'Utilisez ces ids exacts (sensibles à la casse). Descriptions et capacités sur la {modelsLink}. Les modèles d’image s’appellent via {code} avec la même clé API.',
      modelIdsModelsLink: 'page des modèles',
      modelIdsTable: { id: 'Id de modèle', name: 'Nom affiché', context: 'Contexte' },
      errorsTitle: 'Erreurs',
      errorsTable: { status: 'Statut', meaning: 'Signification', fix: 'Que faire' },
      errors: [
        { meaning: 'Clé API invalide ou manquante', fix: 'Vérifiez que votre clé commence par « brsh- » et n’a pas été révoquée dans la console.' },
        { meaning: 'Id de modèle inconnu', fix: 'Utilisez un id exactement comme listé dans le tableau ci-dessus —— la casse compte.' },
        { meaning: 'Limite de débit ou quota dépassé', fix: 'Attendez et réessayez avec backoff, ou augmentez le quota de cette clé dans la console.' },
        { meaning: 'Solde insuffisant', fix: 'Rechargez votre compte dans la console puis réessayez la requête.' },
        { meaning: 'Erreur du fournisseur amont', fix: 'Réessayez après quelques secondes ; si cela persiste, changez d’id de modèle ou contactez le support.' },
      ],
      helpTitle: 'Bloqué sur quelque chose ?',
      helpText: 'Consultez la console pour les clés, quotas et la facturation, ou écrivez-nous à {email}',
    },

    apps: {
      metaDescription: 'Applications de bureau BrushLLM —— Image Studio, Video Studio et Player. Gratuites, d’abord locales, open source, pour macOS et Windows.',
      eyebrow: 'Applications',
      title: 'Des applis locales gratuites,',
      titleBand: 'open source',
      intro: 'Trois outils de bureau pour macOS et Windows —— zéro télémétrie, zéro compte, pas de pub. Les fonctions IA d’Image Studio se branchent directement sur l’API BrushLLM.',
      apiTitle: 'L’API derrière les fonctions IA',
      apiText: 'Les outils IA d’Image Studio tournent sur la passerelle BrushLLM —— un endpoint compatible OpenAI, des tarifs par image publiés.',
    },

    studio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Appli de bureau · Gratuite + IA à l’usage',
      intro: 'Chaque outil local est gratuit et s’exécute entièrement sur votre appareil —— moteur Rust, aucun envoi. Les fonctions IA appellent la même {apiLink} que le reste de la plateforme, facturées à l’image aux {ratesLink}.',
      introApiLink: 'API BrushLLM',
      introRatesLink: 'tarifs publiés',
      outro: 'Voir les modèles d’image derrière les outils IA',
      groups: [
        {
          title: 'Outils locaux —— gratuits, hors ligne, privés',
          items: [
            { title: 'Convertir et compresser', description: '8 formats d’entrée vers 8 formats de sortie (dont AVIF et WebP), avec rééchantillonnage Lanczos et contrôle qualité.' },
            { title: 'Redimensionner, recadrer et pivoter', description: 'Outils géométriques adaptés au traitement par lots, avec dimensions en pixels exactes et préréglages de ratio.' },
            { title: 'Filigranes et annotations', description: 'Filigranes texte et image, flèches, cadres et annotation à main levée pour captures et documents.' },
            { title: 'EXIF : voir, éditer, nettoyer', description: 'Inspectez les métadonnées complètes, réécrivez des champs ou effacez localisation et données appareil avant de partager.' },
            { title: 'Assemblage, mosaïque et ombres', description: 'Combinez des images en grilles, pixélisez des zones, ajoutez coins arrondis et ombres portées.' },
            { title: 'Outils couleur', description: 'Luminosité, contraste et saturation, remplacement de couleur, et pipette avec loupe.' },
          ],
        },
        {
          title: 'Outils IA —— propulsés par la passerelle BrushLLM',
          items: [
            { title: 'Générer des images', description: 'Texte vers image avec GPT-Image —— facturé à l’image générée, sans abonnement.' },
            { title: 'Supprimer les fonds', description: 'Détourage en un clic aux bords nets, directement depuis votre bureau.' },
            { title: 'Supprimer objets et filigranes', description: 'Sélectionnez une zone et décrivez ce qui doit disparaître —— l’inpainting comble le reste.' },
            { title: 'Remplissage génératif', description: 'Étendre, remplacer ou échanger du contenu, avec images de référence optionnelles (p. ex. échange de personne).' },
            { title: 'Restylage', description: ' repeindre une image dans un nouveau style en conservant composition et identité.' },
            { title: 'Votre clé, votre quota', description: 'La clé API vit dans le trousseau système ; chaque clé porte son propre plafond de dépense défini dans la console.' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Appli de bureau · Gratuite',
      intro: 'Traitement 100 % local —— vos médias ne quittent jamais la machine. Les binaires FFmpeg sont épinglés et vérifiés SHA-256, le moteur gère une file de travaux suspendibles, et 175 tests automatisés maintiennent la boîte à outils honnête.',
      groups: [
        {
          title: 'Vidéo',
          items: [
            { title: 'Convertir', description: 'MP4, MKV, WebM, MOV et AVI avec codecs H.264, H.265, VP9 ou AV1.' },
            { title: 'Compresser', description: 'Compression par qualité (CRF) ou débit cible, avec estimation de taille en direct.' },
            { title: 'Fusionner et découper', description: 'Assemblez des clips dans l’ordre, coupez des segments avec des points d’entrée/sortie à l’image près.' },
            { title: 'Recadrer, redimensionner, pivoter', description: 'Corrections géométriques pour les rushes mal orientés ou bordés.' },
            { title: 'Changer la vitesse', description: 'De 0,25× à 4× la vitesse de lecture, avec correction de hauteur tonale.' },
            { title: 'Images, GIF et WebP', description: 'Extrayez des images fixes ou transformez des clips en GIF/WebP animés.' },
          ],
        },
        {
          title: 'Audio',
          items: [
            { title: 'Extraire et convertir', description: 'Extrayez l’audio en MP3, M4A, FLAC, WAV, OGG ou Opus.' },
            { title: 'Normalisation du volume', description: 'Normalisation EBU R128 pour un volume homogène entre fichiers.' },
            { title: 'Volume et gain', description: 'Montez ou atténuez sans réencoder la vidéo quand c’est possible.' },
            { title: 'Muter ou remplacer', description: 'Supprimez les pistes audio ou changez de bande-son.' },
            { title: 'Découper', description: 'Coupez des segments audio avec la même précision entrée/sortie que la vidéo.' },
          ],
        },
        {
          title: 'Sous-titres',
          items: [
            { title: 'Incorporer ou graver', description: 'Attachez des pistes de sous-titres souples ou gravez-les dans l’image.' },
            { title: 'Convertir les formats', description: 'SRT, VTT, ASS, SSA et TTML —— avec un moteur de sous-titres sans dépendance.' },
            { title: 'Corriger les encodages', description: 'Réparez automatiquement les anciens fichiers GBK/Big5 en UTF-8 propre.' },
            { title: 'Décaler le minutage', description: 'Avancez ou retardez les sous-titres en lot, synchronisés sur la vidéo.' },
            { title: 'Extraire', description: 'Tirez les pistes de sous-titres existantes de n’importe quel conteneur.' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Appli de bureau · Open source',
      intro: 'L’app macOS est une construction native Swift + SwiftUI autour de libmpv ; l’app Windows est une réécriture Tauri avec le même cœur mpv. Zéro télémétrie, mise à jour vérifiée seulement à la demande.',
      groups: [
        {
          title: 'Lecture',
          items: [
            { title: 'Tous les formats', description: 'Sur mpv : MKV, MP4, AVI, MOV, WebM, FLAC, MP3 et tout ce que mpv lit.' },
            { title: 'Sortie HDR', description: 'Passe-direct PQ et EDR sur écrans compatibles, décodage matériel activable.' },
            { title: 'Images disque', description: 'Lisez directement des images ISO Blu-ray et DVD.' },
            { title: 'Contrôles', description: 'Boucle A-B, vitesse de lecture, avance image par image, chapitres et captures.' },
            { title: 'Listes et historique', description: 'Listes réorganisables au glisser, reprise où vous étiez, favoris.' },
            { title: 'Fenêtre mini', description: 'Un mini-lecteur flottant toujours au premier plan pour le multitâche.' },
          ],
        },
        {
          title: 'Streaming',
          items: [
            { title: 'WebDAV et SMB', description: 'Parcourez et streamez depuis votre NAS —— montage SMB natif macOS inclus.' },
            { title: 'FTP', description: 'Client FTP intégré avec navigation dans les dossiers et streaming direct.' },
            { title: 'Emby et Jellyfin', description: 'Connectez-vous, parcourez les bibliothèques et streamez en direct sans transcodage.' },
            { title: 'HTTP et HLS', description: 'Lisez des liens et flux m3u8/HLS avec tampon de lecture réglable.' },
          ],
        },
        {
          title: 'Sous-titres et outils',
          items: [
            { title: 'Sous-titres auto-chargés', description: 'Les fichiers associés se chargent automatiquement ; les externes à la demande.' },
            { title: 'Style en direct', description: 'Police, taille, couleur et position —— restylés pendant la lecture.' },
            { title: 'Égaliseur et enregistrement', description: 'Égaliseur audio, plus enregistrement de flux pour l’archivage.' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'BrushLLM construit des produits d’IA pour développeurs et créatifs —— une API unifiée vers des modèles puissants, et des applications de bureau gratuites, d’abord locales, pour images, vidéo et médias.',
      eyebrow: 'À propos',
      title: 'Des produits d’IA pour',
      titleBand: 'développeurs et créatifs',
      intro: 'BrushLLM construit des produits d’IA pour développeurs et créatifs. Une plateforme, un compte —— et la même promesse des deux côtés : des outils simples, des prix publiés, la vie privée dès la conception.',
      forDevelopers: 'Pour les développeurs.',
      forDevelopersText: '{link} —— une API unifiée vers des modèles d’IA puissants. {count} modèles de DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI et plus, derrière un endpoint compatible OpenAI.',
      forDevelopersLink: 'Services de Modèles d’IA',
      forCreators: 'Pour les créatifs.',
      forCreatorsText: '{link} —— des applications de bureau gratuites, d’abord locales, pour macOS et Windows. Image Studio marie outils locaux gratuits et retouche IA via la même API ; les trois sont open source, zéro télémétrie.',
      forCreatorsLink: 'Image Studio, Video Studio et Player',
      values: [
        { title: 'Ouvert au monde', description: 'L’IA de pointe n’exige ni comptes séparés, ni obstacles de paiement locaux, ni verrous régionaux —— et ne devrait pas coûter une fortune. Une inscription, en USD, depuis n’importe quel pays' },
        { title: 'Une plateforme, un compte', description: 'Une plateforme, un compte, une facture. Si nous intégrer prend plus de temps qu’une pause café, c’est notre bug, pas votre problème' },
        { title: 'Des tarifs honnêtes', description: 'Prix par token publiés, pas de pièges d’abonnement, des paliers gratuits qui le restent. Vous devez toujours savoir ce que coûte une requête' },
        { title: 'Confidentialité dès la conception', description: 'Nous ne collectons que ce dont un compte a besoin pour fonctionner. Pas de traqueurs, pas d’analytics, pas de pub —— vos prompts ne sont jamais stockés, vendus ni utilisés pour vous profiler' },
      ],
      familyTitle: 'La famille BrushLLM',
      familyText: 'Une plateforme, deux voies —— une API unifiée pour les développeurs, et une famille d’applications de bureau gratuites, d’abord locales, pour les créatifs.',
      familyApiTitle: 'Services de Modèles d’IA',
      familyApiText: 'Un endpoint compatible OpenAI pour {count} modèles de {providers} fournisseurs —— paiement au token ou à l’image.',
      contactTitle: 'Parlons-en',
      contactText: 'Questions, tarifs volume, ou un modèle que vous voudriez voir ajouté —— nous lisons tout',
      contactCta: 'Commencer',
    },

    notFound: {
      metaDescription: 'Cette page n’a pas pu être trouvée.',
      code: '404 · HORS CANVAS',
      title: 'Cette page a été repeinte',
      text: 'Le lien est peut-être périmé ou la page a déménagé. Les modèles, eux, sont exactement là où vous les avez laissés.',
      backHome: 'Retour à l’accueil',
      browseModels: 'Voir les modèles',
    },
    faq: {
      metaDescription: 'FAQ BrushLLM — tarifs, confidentialité, l’API et les applications de bureau gratuites, avec réponses.',
      title: 'Questions fréquentes',
    },

    privacy: {
      metaDescription: 'Politique de confidentialité de BrushLLM — ce que nous collectons (presque rien), ce que nous ne faisons jamais, et comment le site et les applications traitent vos données.',
      eyebrow: 'Confidentialité',
      title: 'Politique de confidentialité',
      titleBand: 'en mots simples',
      updated: 'Dernière mise à jour : octobre 2026',
      intro: 'BrushLLM est conçu avec la confidentialité comme priorité. Cette page explique, en mots simples, quelles données interviennent — et tout est vérifiable : le site et les trois applications de bureau sont open source sur GitHub.',
      sections: [
      {
        heading: 'L\'essentiel',
        paragraphs: [
            'Nous ne collectons aucune donnée d\'analyse, n\'utilisons aucun traceur et ne diffusons aucune publicité. Vos prompts sont transmis au fournisseur du modèle et ne sont jamais stockés, vendus ni utilisés pour vous profiler. Les applications de bureau fonctionnent localement et n\'émettent aucune requête réseau hormis les fonctions d\'IA que vous activez.',
        ],
      },
      {
        heading: 'Ce site web (brushllm.com)',
        paragraphs: [
            'Le site est entièrement statique : aucun script d\'analyse, aucun pixel de suivi, aucune police tierce, aucun cookie, aucune prise d\'empreinte.',
            'Le seul JavaScript présent concerne le comportement de la page : préférence de langue (uniquement dans le localStorage de votre navigateur), sélecteur de langue et accordéon FAQ. Rien n\'est envoyé nulle part.',
            'Le site est servi par Cloudflare Pages. Comme tout CDN, Cloudflare traite des journaux en périphérie à des fins de sécurité ; nous n\'activons aucune analyse Cloudflare et ne recevons aucune donnée identifiée de visiteur.',
        ],
      },
      {
        heading: 'L\'API et la console (api.brushllm.com)',
        paragraphs: [
            'Pour utiliser l\'API, vous créez un compte avec une adresse e-mail. Nous conservons votre e-mail, votre solde et historique de rechargement, et les clés API que vous créez — le minimum pour qu\'un compte fonctionne.',
            'Vos requêtes sont transmises au fournisseur du modèle concerné (DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI et d\'autres) pour traitement. Nous ne stockons ni le contenu de vos prompts ni les réponses, ne les vendons pas et ne les utilisons pour aucun entraînement.',
            'Nous tenons des compteurs d\'utilisation agrégés et anonymisés (tokens par modèle, requêtes par clé), car c\'est ainsi que fonctionne la facturation. Ils ne sont pas liés au contenu de vos requêtes.',
            'Les paiements sont traités par le prestataire de paiement ; nous ne voyons ni ne stockons jamais de numéros de carte complets.',
        ],
      },
      {
        heading: 'Les applications de bureau (Image Studio, Video Studio, Player)',
        paragraphs: [
            'Les trois applications sont local-first : vos images, vidéos et fichiers ne quittent jamais votre machine sauf demande explicite. Video Studio et Player n\'émettent aucune requête réseau. Les fonctions d\'IA d\'Image Studio appellent l\'API BrushLLM uniquement à l\'usage, et uniquement avec le contenu de l\'image soumise pour cette opération.',
            'Les clés API sont stockées dans le trousseau de votre système d\'exploitation, jamais en clair. Les applications ne contiennent ni télémétrie, ni comptes, ni publicité.',
        ],
      },
      {
        heading: 'Vos choix',
        paragraphs: [
            'Vous pouvez demander la suppression de votre compte et de ses données à tout moment en écrivant à hello@brushllm.com. La suppression efface e-mail, clés, relevés de solde et compteurs d\'utilisation.',
            'Vous pouvez effacer la préférence de langue à tout moment en supprimant les données de site de brushllm.com dans votre navigateur.',
        ],
      },
      {
        heading: 'Modifications de cette politique',
        paragraphs: [
            'En cas de modification, nous mettrons à jour cette page et la date ci-dessus. L\'historique de chaque changement est public dans le dépôt GitHub du site.',
        ],
      },
      ],
      openSourceNote: 'Tout sur cette page est vérifiable : le site, la console et les trois applications sont open source sur github.com/BrushLLM.',
    },
  },
};

export default fr;

