/**
 * Español. Estructura idéntica a en.ts (garantizada por el tipo Dictionary).
 * Los marcadores {count}/{year}/{pct} se mantienen y se sustituyen al renderizar.
 * No se traduce: ids de modelos, URLs, ejemplos de código, precios, identificadores de licencia, nombres de producto.
 */
import type { Dictionary } from './index';

const es: Dictionary = {
  site: {
    title: 'BrushLLM — Tu IA, sin la complejidad',
    description: 'Accede a potentes modelos de IA a través de una API y crea con apps de escritorio gratuitas de uso local. BrushLLM es una plataforma de IA para desarrolladores y creadores.',
    organizationDescription: 'BrushLLM es una plataforma de IA para desarrolladores y creadores que ofrece Servicios de Modelos de IA (una API para potentes modelos de IA) y apps de escritorio gratuitas de uso local —— Image Studio, Video Studio y Player.',
  },

  nav: {
    models: 'Modelos de IA',
    apps: 'Apps',
    pricing: 'Precios',
    docs: 'Documentación',
    about: 'Acerca de',
  },

  header: {
    home: 'BrushLLM inicio',
    mainNav: 'Navegación principal',
    mobileNav: 'Navegación móvil',
    logIn: 'Iniciar sesión',
    getStarted: 'Empezar',
    toggleMenu: 'Alternar menú',
  },

  languageSwitcher: {
    label: 'Idioma',
    system: 'Auto',
    systemTitle: 'Seguir el idioma del navegador',
  },

  appPage: {
    openSourceTitle: 'Código abierto, software honesto',
    openSourceText: 'El código fuente, las incidencias y las versiones están en GitHub{license}. Sin telemetría, sin cuentas, sin publicidad.',
  },

  footer: {
    blurb: 'BrushLLM —— IA para desarrolladores y creadores. Potentes modelos de IA a través de una API, más apps de escritorio gratuitas de uso local. Protegemos tu privacidad: sin rastreadores, sin analíticas, sin anuncios.',
    tagline: 'Una API · Tres apps gratuitas · Privacidad primero',
    product: 'Producto',
    console: 'Consola',
    company: 'Empresa',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: 'Acerca de BrushLLM',
    privacyPolicy: 'Política de privacidad',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: 'Impulsado por una pasarela compatible con OpenAI',
  },

  common: {
    skipToContent: 'Ir al contenido',
    codeExamples: 'Ejemplos de código',
    moreQuestions: 'Más preguntas',
    download: 'Descargar',
    github: 'GitHub',
    tryIt: 'Pruébalo',
    featured: 'Destacado',
    free: 'Gratis',
    copy: 'Copiar',
    copied: '¡Copiado!',
    copyFallback: 'Error al copiar',
    learnMore: 'Saber más',
    learnMoreArrow: 'Saber más',
    downloadArrow: 'Descargar',
    exploreAiModels: 'Explorar modelos de IA',
    exploreTheApps: 'Explorar las apps',
    exploreTheApi: 'Explorar la API',
    browseModels: 'Ver modelos',
    openTheConsole: 'Abrir la consola',
    readTheDocs: 'Leer la documentación',
  },

  data: {
    capability: {
      chat: 'Chat',
      reasoning: 'Razonamiento',
      tools: 'Llamada a herramientas',
      vision: 'Visión',
      'long-context': 'Contexto largo',
      image: 'Texto a imagen',
    },
    apps: {
      'image-studio': {
        tagline: 'Caja de herramientas de imágenes con IA, de uso local',
        description: 'Una caja de herramientas de imágenes de escritorio gratuita. Las ediciones cotidianas —— convertir, comprimir, recortar, marcas de agua, EXIF —— se ejecutan por completo en tu dispositivo; funciones de IA como quitar el fondo y el relleno generativo pasan por la pasarela de BrushLLM, con facturación por imagen.',
        highlights: ['25+ herramientas locales', 'Ediciones con IA vía la API de BrushLLM', '9 idiomas', 'Cero telemetría'],
      },
      'video-studio': {
        tagline: 'Caja de herramientas local de vídeo, audio y subtítulos',
        description: 'Una caja de herramientas gratuita y sin conexión para procesar vídeo, audio y subtítulos. Convertir, comprimir, unir, recortar, normalizar sonoridad, arreglar codificaciones de subtítulos —— procesamiento 100% local, cero peticiones de red.',
        highlights: ['25+ herramientas', 'Procesamiento 100% local', '9 idiomas', 'Cero peticiones de red'],
      },
      player: {
        tagline: 'Reproductor multimedia de código abierto basado en mpv',
        description: 'Un reproductor multimedia de código abierto y multiplataforma. Todos los formatos que mpv reproduce, más streaming desde WebDAV, SMB, FTP, Emby y Jellyfin —— con salida HDR, decodificación por hardware e interfaz en 9 idiomas.',
        highlights: ['Todos los formatos vía mpv', 'WebDAV · SMB · Emby · Jellyfin', 'HDR y decodificación por hardware', '9 idiomas'],
      },
    },
    models: {
      'gpt-5.2': 'El buque insignia de ChatGPT —— razonamiento general, visión y uso de herramientas muy sólidos.',
      'gpt-5.2-mini': 'Nivel de ChatGPT rápido y barato para chat de alto volumen, clasificación y extracción.',
      'deepseek-chat': 'Modelo insignia sin modo de razonamiento. Rápido, barato y excelente en chat general y uso de herramientas.',
      'deepseek-reasoner': 'Modelo de razonamiento con cadena de pensamiento visible para matemáticas, código y problemas difíciles.',
      'glm-4.6': 'Insignia de Z.ai. Fuerte en programación, escritura y planificación de agentes; contexto de 200K.',
      'glm-4.5-air': 'GLM más ligero, ajustado para tráfico de producción sensible al coste.',
      'glm-4.5-flash': 'Nivel gratuito de la familia GLM —— ideal para prototipos y proyectos personales.',
      'qwen3-max': 'El mayor insignia de Alibaba. Calidad de primer nivel para cargas exigentes de agentes y chat.',
      'qwen3-235b-a22b': 'Insignia MoE de pesos abiertos con modo de razonamiento híbrido.',
      'qwen3-32b': 'Modelo todoterreno denso de pesos abiertos con modos de razonamiento y no razonamiento.',
      'qwen3-coder-plus': 'Modelo especializado en código para herramientas de programación agénticas y ediciones a escala de repositorio.',
      'qwen-vl-max': 'Modelo de visión-lenguaje para comprensión de imágenes, OCR y razonamiento sobre gráficos.',
      'kimi-k2-0905': 'MoE de billones de parámetros ajustado para uso de herramientas agénticas y documentos largos.',
      'kimi-k2-thinking': 'Variante de razonamiento de K2 con pensamiento entrelazado para tareas de varios pasos.',
      'MiniMax-M2': 'MoE agéntico eficiente —— favorito para agentes de programación con presupuesto ajustado.',
      'gpt-image-2': 'Modelo de generación de imágenes de OpenAI —— de texto a imagen con gran seguimiento de instrucciones.',
    },
  },

  pages: {
    home: {
      metaDescription: 'Accede a potentes modelos de IA a través de una API y crea con apps de escritorio gratuitas de uso local.',
      heroBadge: 'Para desarrolladores · Para creadores',
      heroTitle: 'Tu IA,',
      heroTitleBand: 'sin la complejidad',
      heroSubtitle: 'Potentes modelos de IA a través de una API, y crea con apps locales gratuitas',
      heroCtaApi: 'Obtener clave de API',
      heroCtaApps: 'Apps de escritorio',
      heroNote: 'Una cuenta para toda la plataforma',

      platformEyebrow: 'Una plataforma',
      platformTitle: 'Una plataforma para desarrolladores y creadores',
      platformIntro: 'BrushLLM es una plataforma para desarrolladores y creadores: acceso unificado por API a potentes modelos de IA a través de {modelsLink}, más una familia de {appsLink} —— las funciones de IA de Image Studio se facturan a través de la misma API.',
      platformModelsLink: 'Servicios de Modelos de IA',
      platformAppsLink: 'apps de escritorio gratuitas de uso local',

      apiCardBadge: 'Para desarrolladores',
      apiCardTitle: 'Servicios de Modelos de IA',
      apiCardSubtitle: 'Una API para potentes modelos de IA',
      apiCardDescription: 'Accede a potentes modelos de IA a través de una única API —— {count} modelos, {providers} proveedores, unificado y por uso.',
      apiCardBullets: [
        'Endpoint unificado, compatible con OpenAI',
        'Modelos de chat, razonamiento, visión e imagen',
        'Precios publicados, pago por uso, niveles gratuitos',
      ],
      apiCardChips: { models: 'Modelos', pricing: 'Precios', docs: 'Docs', console: 'Consola' },
      apiCardCta: 'Explorar modelos de IA',
      apiCardSecondary: 'Leer la documentación',

      appsCardBadge: 'Para creadores · Apps gratuitas',
      appsCardTitle: 'Apps de escritorio',
      appsCardSubtitle: 'Herramientas gratuitas de uso local para el día a día',
      appsCardDescription: 'Image Studio, Video Studio y Player —— apps de escritorio de código abierto para macOS y Windows, cero telemetría. Las funciones de IA de Image Studio funcionan sobre la misma API.',
      appsCardNote: 'Código abierto · macOS · Windows',
      appsCardCta: 'Explorar las apps',

      appsSectionEyebrow: 'Apps',
      appsSectionTitle: 'Apps gratuitas de uso local,',
      appsSectionTitleBand: 'construidas sobre una plataforma',
      appsSectionFooter: 'Detalles, capturas e instaladores en la {link}',
      appsSectionFooterLink: 'página de apps',

      benefitsEyebrow: 'Por qué nuestra API',
      benefitsTitle: 'Todo lo que necesitas,',
      benefitsTitleBand: 'nada de lo que no',
      benefitsSubtitle: 'Herramientas simples y honestas para construir con modelos de IA',
      benefits: [
        { title: 'API unificada', description: 'Un endpoint compatible con OpenAI para todos los modelos. Conserva tu SDK —— cambia una línea y publica' },
        { title: 'Múltiples modelos', description: 'Modelos de chat, razonamiento, visión e imagen de los principales laboratorios —— {count} modelos en un catálogo' },
        { title: 'Integración simple', description: 'Funciona con cualquier SDK de OpenAI. Copia, pega y ejecuta —— en cURL, Python, Node.js o Go' },
        { title: 'Precios por uso', description: 'Paga lo que uses —— por token o por imagen, en USD. Sin suscripciones, y niveles gratuitos para empezar' },
      ],

      statsEyebrow: 'Modelos disponibles, una API',
      stats: { providers: 'Proveedores de IA', models: 'Modelos, un catálogo', account: 'Cuenta', countries: 'Países atendidos' },
      statsCompare: 'Nuestros precios finales superan a OpenRouter en 7 comparaciones directas —— {link}',
      statsCompareLink: 'ver la comparación',

      howEyebrow: 'Cómo funciona',
      howTitle: 'Tres pasos hasta tu primer token',
      howSteps: [
        { title: 'Crea una cuenta', description: 'Regístrate con tu correo y obtén una clave de API desde la consola. Sin tarjeta de crédito para empezar' },
        { title: 'Apunta tu SDK a BrushLLM', description: 'Configura la URL base y conserva el SDK de OpenAI que ya usas' },
        { title: 'Llama a cualquier modelo por id', description: 'Cambia de ids de modelo libremente —— todo el catálogo está a una clave de distancia' },
      ],
      howCodeTitle: 'Conserva tu código, cambia una línea',
      howCodeSubtitle: 'Si funciona con la API de OpenAI, funciona con BrushLLM —— la misma petición en cuatro lenguajes.',

      faqEyebrow: 'FAQ',
      faqTitle: 'Preguntas, respondidas',
      faqDevelopers: 'Para desarrolladores',
      faqCreators: 'Para creadores',
      developerFaqs: [
        {
          question: '¿Qué es BrushLLM?',
          answer: 'BrushLLM es una plataforma de IA para desarrolladores y creadores. Los Servicios de Modelos de IA dan a los desarrolladores una API para potentes modelos de IA, y una familia de apps de escritorio gratuitas de uso local —— Image Studio, Video Studio y Player —— cubre el lado de los creadores. Una cuenta cubre toda la plataforma.',
        },
        {
          question: '¿Cómo funciona la API?',
          answer: 'Apunta cualquier SDK de OpenAI a {apiBase} y usa tu clave de BrushLLM. Las finalizaciones de chat, las llamadas a herramientas y el streaming funcionan como ya esperas.',
        },
        {
          question: '¿Qué modelos de IA están disponibles?',
          answer: 'El catálogo abarca {count} modelos de DeepSeek, Qwen, GLM, Kimi, MiniMax y OpenAI —— chat, razonamiento, visión y texto a imagen. La lista completa con precios en vivo está en la página de Modelos.',
        },
        {
          question: '¿Es la API compatible con OpenAI?',
          answer: 'Sí, totalmente. Si funciona con la API de OpenAI, funciona con BrushLLM —— incluidos agentes de programación y CLIs como Cursor, Cline, OpenCode y aider.',
        },
        {
          question: '¿Cómo se factura el uso?',
          answer: 'Estrictamente pago por uso en USD —— por token para modelos de texto, por imagen para modelos de imagen. Sin suscripciones ni mínimos; varios modelos tienen niveles gratuitos.',
        },
        {
          question: '¿Es BrushLLM adecuado para startups y empresas?',
          answer: 'Sí. Un endpoint cubre todos los proveedores, los precios por uso escalan contigo, cada clave tiene su propio límite de gasto y hay descuentos por volumen para uso comprometido.',
        },
        {
          question: '¿Cómo protegéis mi privacidad?',
          answer: 'Solo recogemos lo que una cuenta necesita para funcionar. Sin rastreadores, sin analíticas, sin anuncios —— tus prompts se dirigen directamente al modelo de origen y nunca se almacenan, venden ni usan para perfilarte. {privacyLink}',
        },
              {
          question: '¿Cómo se comparan vuestros precios con OpenRouter?',
          answer: 'En 7 comparaciones directas de modelos, nuestro coste total es menor — OpenRouter añade una comisión de pago del 5,5% sobre el precio de lista de cada modelo, mientras que nuestra tarifa publicada es la tarifa final. {pricingLink}',
        },
        {
          question: '¿El sitio está disponible en otros idiomas?',
          answer: 'Sí — este sitio y las tres aplicaciones de escritorio están disponibles en 9 idiomas: inglés, alemán, español, francés, portugués (Brasil), japonés, chino simplificado/tradicional y coreano.',
        },
        {
          question: 'El instalador de la aplicación muestra una advertencia de seguridad. ¿Es normal?',
          answer: 'Sí. Las aplicaciones no están firmadas, por lo que Gatekeeper (macOS) y SmartScreen (Windows) muestran una advertencia en el primer arranque. En macOS: clic derecho en la app y elegir Abrir; en Windows: elegir Ejecutar de todos modos. Las apps no contienen telemetría.',
        },
  ],
      creatorFaqs: [
        {
          question: '¿Qué es Image Studio?',
          answer: 'Image Studio es la caja de herramientas de imágenes de escritorio gratuita de BrushLLM. Las herramientas cotidianas —— convertir, comprimir, recortar, EXIF —— se ejecutan en local y sin conexión; las funciones de IA como quitar el fondo y el relleno generativo pasan por la API de BrushLLM, con facturación por imagen.',
        },
        {
          question: '¿Qué puedo hacer con Image Studio?',
          answer: 'Convertir, comprimir, recortar y limpiar imágenes con herramientas locales gratuitas —— y luego generar, quitar fondos, borrar objetos, rellenar y cambiar estilos con IA, por imagen.',
        },
        {
          question: '¿Puedo editar imágenes existentes?',
          answer: 'Sí. Abre cualquier imagen, selecciona una región o todo el lienzo y describe el cambio —— el repintado y la eliminación de fondo están integrados.',
        },
        {
          question: '¿Puedo generar y transformar imágenes?',
          answer: 'Sí —— la generación de texto a imagen y el cambio de estilo funcionan en el mismo espacio de trabajo, impulsados por GPT-Image a través de la API de BrushLLM.',
        },
        {
          question: '¿Dónde consigo las apps?',
          answer: 'Las tres apps —— Image Studio, Video Studio y Player —— están disponibles ya en los releases de GitHub de BrushLLM, para macOS (Apple Silicon) y Windows.',
        },
        {
          question: '¿De verdad son gratis las apps?',
          answer: 'Sí. Todas las herramientas locales son gratuitas y el código fuente está en GitHub. Solo las funciones de IA de Image Studio usan la API de BrushLLM de pago por uso.',
        },
      ],

      ctaBuildTitle: 'Construye con IA',
      ctaBuildText: 'Una API para {count} modelos —— unificada, por uso, compatible con OpenAI',
      ctaCreateTitle: 'Crea con IA',
      ctaCreateText: 'Apps de escritorio gratuitas de uso local —— crea y edita imágenes, vídeo y medios, con superpoderes de IA en Image Studio',
    },

    models: {
      metaDescription: 'Explora {count} modelos de IA —— de DeepSeek, Qwen, GLM y Kimi a GPT y texto a imagen —— con ventanas de contexto, capacidades y precios orientativos.',
      eyebrow: 'Modelos de IA',
      title: '{count} modelos · {providers} proveedores ·',
      titleBand: 'Un endpoint',
      intro: 'Todos los modelos de abajo se pueden llamar a través de la misma API compatible con OpenAI y la misma clave. Los precios son orientativos —— USD por 1M de tokens para modelos de texto, USD por imagen para modelos de imagen.',
      introFree: ' — {count} de ellos gratis',
      searchPlaceholder: 'Buscar por nombre, id o proveedor…',
      searchLabel: 'Buscar modelos',
      providerLabel: 'Proveedor',
      providerGroup: 'Filtrar por proveedor',
      capabilityLabel: 'Capacidad',
      capabilityGroup: 'Filtrar por capacidad',
      all: 'Todos',
      showing: 'Mostrando {visible} de {total} modelos',
      empty: 'Ningún modelo coincide con tus filtros. Prueba con otra palabra clave, proveedor, capacidad o caso de uso.',
      footnote: 'Los precios son precios de lista orientativos en USD —— por 1M de tokens para modelos de texto, por imagen generada para modelos de imagen —— y pueden diferir de las tarifas configuradas en tu consola. Las ventanas de contexto son el máximo admitido por cada modelo de origen. Los detalles de integración están en la {docsLink}.',
      footnoteDocsLink: 'documentación',
      card: { type: 'Tipo', perImage: 'Por imagen', output: 'Salida', context: 'Contexto', input: 'Entrada / 1M', outputPer1M: 'Salida / 1M' },
    },

    pricing: {
      metaDescription: 'Precios simples de pago por uso para todos los modelos de BrushLLM —— precios orientativos por token en USD, con varios niveles gratuitos.',
      eyebrow: 'Precios',
      title: 'Paga por lo que usas,',
      titleBand: 'y ya está',
      intro: 'Los modelos de texto se facturan por token y los de imagen por imagen generada —— todo en USD, sin suscripciones ni mínimos. Lo que ves abajo es la tarifa orientativa del catálogo; tus tarifas exactas y saldo están en la consola.',
      highlights: [
        { title: 'Solo pago por uso', description: 'Facturación por token en USD. Sin suscripciones, sin mínimos, sin juegos de sobreprecio —— recarga y a funcionar' },
        { title: '{count} modelo gratis', description: 'GLM-4.5 Flash no cuesta nada —— perfecto para prototipos y apps de aficionados' },
        { title: 'Descuentos por volumen', description: '¿Tienes volumen serio? Escríbenos y acordamos tarifas por uso comprometido para tu carga' },
      ],
      textModelsTitle: 'Modelos de texto —— por token',
      imageModelsTitle: 'Modelos de imagen —— por imagen',
      table: { model: 'Modelo', provider: 'Proveedor', context: 'Contexto', input: 'Entrada / 1M', output: 'Salida / 1M', resolution: 'Resolución', pricePerImage: 'Precio / imagen' },
      footnote: 'Los precios son precios de lista orientativos en USD —— por 1M de tokens para modelos de texto, por imagen generada para modelos de imagen. La facturación real ocurre en tu consola, donde también puedes seguir el gasto por clave de API.',
      compareEyebrow: 'Comprobación de precios',
      compareTitle: 'Los mismos modelos,',
      compareTitleBand: 'facturas finales más pequeñas',
      compareIntro: 'OpenRouter añade una comisión de pago al comprar créditos —— 5,5% con tarjeta —— sobre el precio de lista de cada modelo. La tarifa publicada de BrushLLM es la tarifa final que pagas.',
      compareTable: {
        model: 'Modelo',
        ours: 'ent/sal por 1M',
        orList: 'lista ent/sal',
        orAllIn: 'todo incluido* ent/sal',
        youSave: 'Ahorras',
        upTo: 'hasta {pct}%',
      },
      compareFootnote: '*Todo incluido = precio de lista de OpenRouter más la comisión del 5,5% por compra de créditos (Stripe; cripto es 5%). El ahorro compara la tarifa final de BrushLLM con la todo incluido de OpenRouter. Precios de lista de OpenRouter vía su API pública, recuperados en sep 2026 —— orientativos; verifica las tarifas actuales en ambas plataformas.',
      ctaTitle: 'Consulta tu saldo y tarifas',
      ctaText: 'Recarga, fija límites por clave y sigue el uso en tiempo real —— todo en la consola',
    },

    docs: {
      metaDescription: 'Guía de inicio rápido de la API de BrushLLM —— autenticación, URL base compatible con OpenAI, ejemplos de SDK en cuatro lenguajes y la lista completa de ids de modelo.',
      eyebrow: 'Documentación',
      title: 'Inicio rápido,',
      titleBand: 'con una pincelada',
      intro: 'BrushLLM es una pasarela compatible con OpenAI. Si alguna vez llamaste a la API de OpenAI, ya sabes llamar a BrushLLM —— aquí va la versión de treinta segundos.',
      toc: { quickstart: 'Inicio rápido', firstRequest: 'Primera petición', modelIds: 'Ids de modelo', errors: 'Errores' },
      tocLabel: 'Secciones de la documentación',
      steps: [
        {
          title: 'Obtén una clave de API',
          description: '{createLink} o {signInLink} en la consola y crea una clave. Las claves se parecen a {code} —— trátalas como contraseñas y fija un límite de gasto si se las das a herramientas',
          createLink: 'Crea una cuenta',
          signInLink: 'inicia sesión',
        },
        {
          title: 'Configura la URL base y la clave',
          description: 'Apunta cualquier SDK de OpenAI a nuestro endpoint:',
          baseUrlLabel: 'base_url',
        },
        {
          title: 'Llama a cualquier modelo por id',
          description: 'Pasa uno de los ids de la tabla de abajo como {code}. Eso es todo —— ya estás llamando a modelos de los principales laboratorios de IA',
        },
      ],
      firstRequestTitle: 'Tu primera petición',
      firstRequestText: 'La misma petición en cuatro lenguajes —— incluyendo streaming. Copia, pega, ejecuta',
      modelIdsTitle: 'Ids de modelo',
      modelIdsText: 'Usa exactamente estos ids (distinguen mayúsculas). Descripciones y capacidades en la {modelsLink}. Los modelos de imagen se llaman vía {code} con la misma clave de API.',
      modelIdsModelsLink: 'página de modelos',
      modelIdsTable: { id: 'Id de modelo', name: 'Nombre visible', context: 'Contexto' },
      errorsTitle: 'Errores',
      errorsTable: { status: 'Estado', meaning: 'Significado', fix: 'Qué hacer' },
      errors: [
        { meaning: 'Clave de API no válida o ausente', fix: 'Comprueba que tu clave empieza por “brsh-” y no ha sido revocada en la consola.' },
        { meaning: 'Id de modelo desconocido', fix: 'Usa un id exactamente como aparece en la tabla de arriba —— distinguen mayúsculas.' },
        { meaning: 'Límite de peticiones o cuota superada', fix: 'Espera y reintenta con retroceso, o sube la cuota de esta clave en la consola.' },
        { meaning: 'Saldo insuficiente', fix: 'Recarga tu cuenta en la consola y reintenta la petición.' },
        { meaning: 'Error del proveedor de origen', fix: 'Reintenta tras unos segundos; si persiste, cambia a otro id de modelo o contacta con soporte.' },
      ],
      helpTitle: '¿Atascado con algo?',
      helpText: 'Consulta la consola para claves, cuotas y facturación, o escríbenos a {email}',
    },

    apps: {
      metaDescription: 'Apps de escritorio de BrushLLM —— Image Studio, Video Studio y Player. Gratuitas, de uso local, código abierto, para macOS y Windows.',
      eyebrow: 'Apps',
      title: 'Apps gratuitas de uso local,',
      titleBand: 'código abierto',
      intro: 'Tres herramientas de escritorio para macOS y Windows —— cero telemetría, cero cuentas, sin anuncios. Las funciones de IA de Image Studio se conectan directamente a la API de BrushLLM.',
      apiTitle: 'La API detrás de las funciones de IA',
      apiText: 'Las herramientas de IA de Image Studio funcionan sobre la pasarela de BrushLLM —— un endpoint compatible con OpenAI, tarifas por imagen publicadas.',
    },

    studio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'App de escritorio · Gratis + IA por uso',
      intro: 'Cada herramienta local es gratuita y se ejecuta por completo en tu dispositivo —— motor en Rust, sin subidas. Las funciones de IA llaman a la misma {apiLink} que impulsa el resto de la plataforma, facturadas por imagen a {ratesLink}.',
      introApiLink: 'API de BrushLLM',
      introRatesLink: 'tarifas publicadas',
      outro: 'Ver los modelos de imagen detrás de las herramientas de IA',
      groups: [
        {
          title: 'Herramientas locales —— gratis, sin conexión, privadas',
          items: [
            { title: 'Convertir y comprimir', description: '8 formatos de entrada a 8 de salida (incluidos AVIF y WebP), con remuestreo Lanczos y control de calidad.' },
            { title: 'Redimensionar, recortar y rotar', description: 'Herramientas de geometría amigables con lotes, con dimensiones exactas en píxeles y preajustes de proporción.' },
            { title: 'Marcas de agua y anotaciones', description: 'Marcas de agua de texto e imagen, flechas, cajas y anotación a mano alzada para capturas y documentos.' },
            { title: 'EXIF: ver, editar y limpiar', description: 'Inspecciona los metadatos completos, reescribe campos o elimina ubicación y datos de cámara antes de compartir.' },
            { title: 'Componer, mosaico y sombras', description: 'Combina imágenes en cuadrículas, pixela regiones, añade esquinas redondeadas y sombras.' },
            { title: 'Herramientas de color', description: 'Brillo, contraste y saturación, sustitución de color y un cuentagotas con lupa.' },
          ],
        },
        {
          title: 'Herramientas de IA —— impulsadas por la pasarela de BrushLLM',
          items: [
            { title: 'Generar imágenes', description: 'Texto a imagen con GPT-Image —— facturado por imagen generada, sin suscripción.' },
            { title: 'Quitar fondos', description: 'Recortes con un clic y bordes limpios, directamente desde tu escritorio.' },
            { title: 'Quitar objetos y marcas de agua', description: 'Selecciona una región y describe qué debe desaparecer —— el repintado lo rellena.' },
            { title: 'Relleno generativo', description: 'Amplía, sustituye o intercambia contenido con imágenes de referencia opcionales (p. ej., cambio de persona).' },
            { title: 'Cambiar estilo', description: 'Repinta una imagen con un estilo nuevo conservando composición e identidad.' },
            { title: 'Tu clave, tu cuota', description: 'La clave de API vive en el llavero del sistema; cada clave lleva su propio límite de gasto desde la consola.' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'App de escritorio · Gratis',
      intro: 'Procesamiento 100% local —— tus medios nunca salen de la máquina. Los binarios de FFmpeg están fijados y verificados con SHA-256, el motor gestiona una cola de trabajos pausable y 175 pruebas automatizadas mantienen la caja de herramientas honesta.',
      groups: [
        {
          title: 'Vídeo',
          items: [
            { title: 'Convertir', description: 'MP4, MKV, WebM, MOV y AVI con códecs H.264, H.265, VP9 o AV1.' },
            { title: 'Comprimir', description: 'Compresión por calidad (CRF) o por bitrate objetivo con estimación de tamaño en vivo.' },
            { title: 'Unir y recortar', description: 'Une clips en orden, corta segmentos con puntos de entrada/salida exactos al fotograma.' },
            { title: 'Recortar, escalar y rotar', description: 'Correcciones geométricas para material mal orientado o con bordes.' },
            { title: 'Cambiar velocidad', description: 'De 0,25× a 4× la velocidad de reproducción con corrección de tono.' },
            { title: 'Fotogramas, GIF y WebP', description: 'Extrae fotogramas fijos o convierte clips en GIF/WebP animados.' },
          ],
        },
        {
          title: 'Audio',
          items: [
            { title: 'Extraer y convertir', description: 'Extrae audio a MP3, M4A, FLAC, WAV, OGG u Opus.' },
            { title: 'Normalización de sonoridad', description: 'Normalización EBU R128 para un volumen consistente entre archivos.' },
            { title: 'Volumen y ganancia', description: 'Sube o baja sin recodificar el vídeo cuando es posible.' },
            { title: 'Silenciar o sustituir', description: 'Elimina pistas de audio o cambia la banda sonora.' },
            { title: 'Recortar', description: 'Corta segmentos de audio con la misma precisión de entrada/salida que el vídeo.' },
          ],
        },
        {
          title: 'Subtítulos',
          items: [
            { title: 'Incrustar o grabar', description: 'Adjunta pistas de subtítulos suaves o grábalos en la imagen.' },
            { title: 'Convertir formatos', description: 'SRT, VTT, ASS, SSA y TTML —— con un motor de subtítulos sin dependencias.' },
            { title: 'Arreglar codificaciones', description: 'Repara automáticamente archivos antiguos GBK/Big5 a UTF-8 limpio.' },
            { title: 'Desplazar tiempos', description: 'Adelanta o retrasa subtítulos en lote, sincronizados con tu vídeo.' },
            { title: 'Extraer', description: 'Saca las pistas de subtítulos existentes de cualquier contenedor.' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} —— {description}',
      badge: 'App de escritorio · Código abierto',
      intro: 'La app de macOS es una construcción nativa en Swift + SwiftUI alrededor de libmpv; la de Windows es una reescritura en Tauri con el mismo núcleo mpv. Cero telemetría, actualizaciones solo cuando las pides.',
      groups: [
        {
          title: 'Reproducción',
          items: [
            { title: 'Todos los formatos', description: 'Sobre mpv: MKV, MP4, AVI, MOV, WebM, FLAC, MP3 y todo lo que mpv reproduce.' },
            { title: 'Salida HDR', description: 'Paso directo de PQ y EDR en pantallas compatibles, con decodificación por hardware activable.' },
            { title: 'Imágenes de disco', description: 'Reproduce imágenes ISO de Blu-ray y DVD directamente.' },
            { title: 'Controles', description: 'Bucle A-B, velocidad de reproducción, avance por fotogramas, capítulos y capturas.' },
            { title: 'Listas y historial', description: 'Listas reordenables arrastrando, reanuda donde lo dejaste, marcadores.' },
            { title: 'Ventana mini', description: 'Un mini reproductor flotante siempre visible para multitarea.' },
          ],
        },
        {
          title: 'Streaming',
          items: [
            { title: 'WebDAV y SMB', description: 'Explora y reproduce desde tu NAS —— montaje SMB nativo de macOS incluido.' },
            { title: 'FTP', description: 'Cliente FTP integrado con exploración de directorios y streaming directo.' },
            { title: 'Emby y Jellyfin', description: 'Inicia sesión, explora bibliotecas y reproduce en directo sin transcodificar.' },
            { title: 'HTTP y HLS', description: 'Reproduce enlaces y streams m3u8/HLS con búfer de lectura ajustable.' },
          ],
        },
        {
          title: 'Subtítulos y herramientas',
          items: [
            { title: 'Subtítulos autocargados', description: 'Los archivos coincidentes se cargan solos; los externos, a demanda.' },
            { title: 'Estilo en vivo', description: 'Fuente, tamaño, color y posición —— reestilizados mientras ves.' },
            { title: 'Ecualizador y grabación', description: 'Ecualizador de audio, más grabación de streams para archivo.' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'BrushLLM crea productos de IA para desarrolladores y creadores —— una API unificada para potentes modelos de IA y apps de escritorio gratuitas de uso local para imágenes, vídeo y medios.',
      eyebrow: 'Acerca de',
      title: 'Productos de IA para',
      titleBand: 'desarrolladores y creadores',
      intro: 'BrushLLM crea productos de IA para desarrolladores y creadores. Una plataforma, una cuenta —— y la misma promesa en cada caso: herramientas simples, precios publicados, privacidad desde el diseño.',
      forDevelopers: 'Para desarrolladores.',
      forDevelopersText: '{link} —— una API unificada para acceder a potentes modelos de IA. {count} modelos de DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI y más, tras un endpoint compatible con OpenAI.',
      forDevelopersLink: 'Servicios de Modelos de IA',
      forCreators: 'Para creadores.',
      forCreatorsText: '{link} —— apps de escritorio gratuitas de uso local para macOS y Windows. Image Studio combina herramientas locales gratuitas con edición de IA por la misma API; las tres son de código abierto y sin telemetría.',
      forCreatorsLink: 'Image Studio, Video Studio y Player',
      values: [
        { title: 'Abierto al mundo', description: 'La IA de vanguardia no debería necesitar cuentas separadas, trabas de pago locales ni bloqueos regionales —— ni costar una fortuna. Un registro, en USD, desde cualquier país' },
        { title: 'Una plataforma, una cuenta', description: 'Una plataforma, una cuenta, una factura. Si integrarnos tarda más que un café, ese es nuestro bug, no tu problema' },
        { title: 'Precios honestos', description: 'Tarifas por token publicadas, sin trampas de suscripción y niveles gratuitos que siguen siendo gratuitos. Siempre deberías saber lo que cuesta una petición' },
        { title: 'Privacidad desde el diseño', description: 'Solo recogemos lo que una cuenta necesita para funcionar. Sin rastreadores, sin analíticas, sin anuncios —— tus prompts nunca se almacenan, venden ni usan para perfilarte' },
      ],
      familyTitle: 'La familia BrushLLM',
      familyText: 'Una plataforma, dos vías —— una API unificada para desarrolladores y una familia de apps de escritorio gratuitas de uso local para creadores.',
      familyApiTitle: 'Servicios de Modelos de IA',
      familyApiText: 'Un endpoint compatible con OpenAI para {count} modelos de {providers} proveedores —— pago por token o por imagen.',
      contactTitle: 'Háblanos',
      contactText: 'Preguntas, precios por volumen o un modelo que quieras que añadamos —— lo leemos todo',
      contactCta: 'Empezar',
    },

    notFound: {
      metaDescription: 'No se pudo encontrar esta página.',
      code: '404 · FUERA DEL LIENZO',
      title: 'Esta página fue repintada',
      text: 'El enlace puede estar desactualizado o la página haberse movido. Los modelos, sin embargo, están exactamente donde los dejaste.',
      backHome: 'Volver al inicio',
      browseModels: 'Ver modelos',
    },
    faq: {
      metaDescription: 'FAQ de BrushLLM — precios, privacidad, la API y las aplicaciones de escritorio gratuitas.',
      title: 'Preguntas frecuentes',
    },

    privacy: {
      metaDescription: 'Política de privacidad de BrushLLM — qué recopilamos (casi nada), qué nunca hacemos y cómo el sitio y las aplicaciones tratan tus datos.',
      eyebrow: 'Privacidad',
      title: 'Política de privacidad',
      titleBand: 'en palabras claras',
      updated: 'Última actualización: octubre de 2026',
      intro: 'BrushLLM está construido con la privacidad como prioridad. Esta página explica, en palabras claras, qué datos intervienen — y todo es verificable: el sitio y las tres aplicaciones de escritorio son de código abierto en GitHub.',
      sections: [
      {
        heading: 'Lo esencial',
        paragraphs: [
            'No recopilamos analíticas, no usamos rastreadores ni servimos anuncios. Tus prompts se envían al proveedor del modelo y nunca se almacenan, venden ni usan para perfilarte. Las aplicaciones de escritorio funcionan localmente y no hacen peticiones de red salvo las funciones de IA que actives.',
        ],
      },
      {
        heading: 'Este sitio web (brushllm.com)',
        paragraphs: [
            'El sitio de marketing es completamente estático: sin scripts de analítica, sin píxeles de rastreo, sin fuentes de terceros, sin cookies, sin huella digital.',
            'El único JavaScript es de comportamiento de la página: preferencia de idioma (solo en el localStorage de tu navegador), selector de idioma y acordeón de preguntas frecuentes. No se envía nada a ninguna parte.',
            'El sitio se sirve mediante Cloudflare Pages. Como cualquier CDN, Cloudflare procesa registros en el borde por seguridad; no activamos analíticas de Cloudflare ni recibimos datos identificados de visitantes.',
        ],
      },
      {
        heading: 'La API y la consola (api.brushllm.com)',
        paragraphs: [
            'Para usar la API creas una cuenta con correo electrónico. Guardamos tu correo, tu saldo e historial de recargas y las claves API que creas — el mínimo para que una cuenta funcione.',
            'Tus peticiones se envían al proveedor del modelo correspondiente (DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI y otros) para su procesamiento. No almacenamos el contenido de tus prompts ni respuestas, no lo vendemos ni lo usamos para entrenar nada.',
            'Mantenemos contadores agregados y anónimos de uso (tokens por modelo, peticiones por clave) porque así funciona la facturación. No están vinculados al contenido de tus peticiones.',
            'Los pagos los gestiona el proveedor de pagos; nunca vemos ni almacenamos números de tarjeta completos.',
        ],
      },
      {
        heading: 'Las aplicaciones de escritorio (Image Studio, Video Studio, Player)',
        paragraphs: [
            'Las tres aplicaciones son local-first: tus imágenes, vídeos y archivos nunca salen de tu equipo salvo que lo pidas expresamente. Video Studio y Player hacen cero peticiones de red. Las funciones de IA de Image Studio llaman a la API de BrushLLM solo cuando las usas, y solo con el contenido de la imagen enviada en esa operación.',
            'Las claves API se guardan en el llavero de tu sistema operativo, nunca en archivos de texto. Las apps no contienen telemetría, ni cuentas, ni anuncios.',
        ],
      },
      {
        heading: 'Tus decisiones',
        paragraphs: [
            'Puedes solicitar la eliminación de tu cuenta y sus datos en cualquier momento escribiendo a hello@brushllm.com. Eliminar la cuenta borra tu correo, claves, registros de saldo y contadores de uso.',
            'Puedes borrar la preferencia de idioma eliminando los datos del sitio para brushllm.com en tu navegador.',
        ],
      },
      {
        heading: 'Cambios en esta política',
        paragraphs: [
            'Si cambiamos esta política, actualizaremos esta página y la fecha superior. El historial de cada cambio es público en el repositorio de GitHub del sitio.',
        ],
      },
      ],
      openSourceNote: 'Todo en esta página es verificable: el sitio, la consola y las tres aplicaciones son de código abierto en github.com/BrushLLM.',
    },
  },
};

export default es;

