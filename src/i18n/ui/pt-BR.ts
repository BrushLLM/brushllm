/**
 * Português do Brasil. Estrutura idêntica à en.ts (garantida pelo tipo Dictionary).
 * Os marcadores {count}/{year}/{pct} permanecem e são substituídos na renderização.
 * Não traduzir: ids de modelos, URLs, exemplos de código, preços, identificadores de licença, nomes de produto.
 */
import type { Dictionary } from '../index';

const ptBR: Dictionary = {
  site: {
    title: 'BrushLLM — Sua IA, sem a complexidade',
    description: 'Acesse modelos de IA poderosos por meio de uma única API e crie com aplicativos de desktop gratuitos, locais por padrão. O BrushLLM é uma plataforma de IA para desenvolvedores e criadores.',
    organizationDescription: 'O BrushLLM é uma plataforma de IA para desenvolvedores e criadores, oferecendo Serviços de Modelos de IA (uma API para modelos de IA poderosos) e aplicativos de desktop gratuitos, locais por padrão —— Image Studio, Video Studio e Player.',
  },

  nav: {
    models: 'Modelos de IA',
    apps: 'Aplicativos',
    pricing: 'Preços',
    docs: 'Documentação',
    about: 'Sobre',
  },

  header: {
    home: 'BrushLLM início',
    mainNav: 'Navegação principal',
    mobileNav: 'Navegação móvel',
    logIn: 'Entrar',
    getStarted: 'Começar',
    toggleMenu: 'Alternar menu',
  },

  languageSwitcher: {
    label: 'Idioma',
    system: 'Sistema',
    systemTitle: 'Seguir o idioma do navegador',
  },

  appPage: {
    openSourceTitle: 'Código aberto, software honesto',
    openSourceText: 'Código-fonte, issues e releases estão no GitHub{license}. Sem telemetria, sem contas, sem anúncios.',
  },

  footer: {
    blurb: 'BrushLLM —— IA para desenvolvedores e criadores. Modelos de IA poderosos por meio de uma API, mais aplicativos de desktop gratuitos, locais por padrão. Protegemos sua privacidade: sem rastreadores, sem análises, sem anúncios.',
    tagline: 'Uma API · Três aplicativos gratuitos · Privacidade primeiro',
    product: 'Produto',
    console: 'Console',
    company: 'Empresa',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: 'Sobre o BrushLLM',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: 'Movido por um gateway compatível com OpenAI',
  },

  common: {
    download: 'Baixar',
    github: 'GitHub',
    tryIt: 'Experimentar',
    featured: 'Destaque',
    free: 'Grátis',
    copy: 'Copiar',
    copied: 'Copiado!',
    copyFallback: 'Pressione ⌘C',
    learnMore: 'Saiba mais',
    learnMoreArrow: 'Saiba mais →',
    downloadArrow: 'Baixar ↗',
    exploreAiModels: 'Explorar modelos de IA',
    exploreTheApps: 'Explorar os aplicativos',
    exploreTheApi: 'Explorar a API',
    browseModels: 'Ver modelos',
    openTheConsole: 'Abrir o console',
    readTheDocs: 'Ler a documentação',
  },

  data: {
    capability: {
      chat: 'Chat',
      reasoning: 'Raciocínio',
      tools: 'Chamada de ferramentas',
      vision: 'Visão',
      'long-context': 'Contexto longo',
      image: 'Texto para imagem',
    },
    apps: {
      'image-studio': {
        tagline: 'Caixa de ferramentas de imagens com IA, local por padrão',
        description: 'Uma caixa de ferramentas de imagens para desktop, gratuita. Edições do dia a dia —— converter, comprimir, cortar, marca d’água, EXIF —— rodam inteiramente no seu dispositivo; recursos de IA como remoção de fundo e preenchimento generativo passam pelo gateway do BrushLLM, cobrados por imagem.',
        highlights: ['25+ ferramentas locais', 'Edições com IA via API BrushLLM', '9 idiomas', 'Zero telemetria'],
      },
      'video-studio': {
        tagline: 'Caixa de ferramentas local de vídeo, áudio e legendas',
        description: 'Uma caixa de ferramentas gratuita e offline para processar vídeo, áudio e legendas. Converter, comprimir, mesclar, aparar, normalizar loudness, corrigir codificações de legenda —— processamento 100% local, zero requisições de rede.',
        highlights: ['25+ ferramentas', 'Processamento 100% local', '9 idiomas', 'Zero requisições de rede'],
      },
      player: {
        tagline: 'Player de mídia open source construído sobre mpv',
        description: 'Um player de mídia open source e multiplataforma. Todo formato que o mpv reproduz, mais streaming de WebDAV, SMB, FTP, Emby e Jellyfin —— com saída HDR, decodificação por hardware e interface em 9 idiomas.',
        highlights: ['Todo formato via mpv', 'WebDAV · SMB · Emby · Jellyfin', 'HDR e decodificação por hardware', '9 idiomas'],
      },
    },
    models: {
      'gpt-5.2': 'O carro-chefe do ChatGPT —— raciocínio geral, visão e uso de ferramentas muito fortes.',
      'gpt-5.2-mini': 'Nível do ChatGPT rápido e barato para chat de alto volume, classificação e extração.',
      'deepseek-chat': 'Modelo carro-chefe sem modo de raciocínio. Rápido, barato e excelente em chat geral e uso de ferramentas.',
      'deepseek-reasoner': 'Modelo de raciocínio com cadeia de pensamento visível para matemática, código e problemas difíceis.',
      'glm-4.6': 'Carro-chefe da Z.ai. Forte em código, escrita e planejamento agêntico; contexto de 200K.',
      'glm-4.5-air': 'GLM mais leve, ajustado para tráfego de produção sensível a custo.',
      'glm-4.5-flash': 'Nível gratuito da família GLM —— ótimo para protótipos e projetos de hobby.',
      'qwen3-max': 'O maior carro-chefe da Alibaba. Qualidade de ponta para cargas agênticas e de chat exigentes.',
      'qwen3-235b-a22b': 'Carro-chefe MoE de pesos abertos com modo de raciocínio híbrido.',
      'qwen3-32b': 'Modelo denso de pesos abertos, coringa, com modos de raciocínio e não-raciocínio.',
      'qwen3-coder-plus': 'Modelo especializado em código para ferramentas de codificação agêntica e edições em escala de repositório.',
      'qwen-vl-max': 'Modelo de visão-linguagem para compreensão de imagens, OCR e raciocínio sobre gráficos.',
      'kimi-k2-0905': 'MoE de trilhões de parâmetros ajustado para uso agêntico de ferramentas e documentos longos.',
      'kimi-k2-thinking': 'Variante de raciocínio do K2 com pensamento intercalado para tarefas de múltiplas etapas.',
      'MiniMax-M2': 'MoE agêntico eficiente —— favorito de agentes de código com orçamento apertado.',
      'gpt-image-2': 'Modelo de geração de imagens da OpenAI —— texto para imagem com forte seguimento de instruções.',
    },
  },

  pages: {
    home: {
      metaDescription: 'Acesse modelos de IA poderosos por meio de uma única API e crie com aplicativos de desktop gratuitos, locais por padrão.',
      heroBadge: 'Para desenvolvedores · Para criadores',
      heroTitle: 'Sua IA,',
      heroTitleBand: 'sem a complexidade',
      heroSubtitle: 'Modelos de IA poderosos por meio de uma API, e crie com aplicativos locais gratuitos',
      heroCtaApi: 'Obter chave de API',
      heroCtaApps: 'Aplicativos de desktop',
      heroNote: 'Uma conta para toda a plataforma',

      platformEyebrow: 'Uma plataforma',
      platformTitle: 'Uma plataforma feita para desenvolvedores e criadores',
      platformIntro: 'O BrushLLM é uma plataforma para desenvolvedores e criadores: acesso unificado por API a modelos de IA poderosos por meio de {modelsLink}, mais uma família de {appsLink} —— os recursos de IA do Image Studio são cobrados pela mesma API.',
      platformModelsLink: 'Serviços de Modelos de IA',
      platformAppsLink: 'aplicativos de desktop gratuitos, locais por padrão',

      apiCardBadge: 'Para desenvolvedores',
      apiCardTitle: 'Serviços de Modelos de IA',
      apiCardSubtitle: 'Uma API para modelos de IA poderosos',
      apiCardDescription: 'Acesse modelos de IA poderosos por uma única API —— {count} modelos, {providers} provedores, unificado e por uso.',
      apiCardBullets: [
        'Endpoint único, compatível com OpenAI',
        'Modelos de chat, raciocínio, visão e imagem',
        'Preços publicados, pague pelo uso, níveis gratuitos',
      ],
      apiCardChips: { models: 'Modelos', pricing: 'Preços', docs: 'Docs', console: 'Console' },
      apiCardCta: 'Explorar modelos de IA',
      apiCardSecondary: 'Ler a documentação',

      appsCardBadge: 'Para criadores · Aplicativos gratuitos',
      appsCardTitle: 'Aplicativos de desktop',
      appsCardSubtitle: 'Ferramentas locais gratuitas para o trabalho diário',
      appsCardDescription: 'Image Studio, Video Studio e Player —— aplicativos de desktop open source para macOS e Windows, zero telemetria. Os recursos de IA do Image Studio rodam na mesma API.',
      appsCardNote: 'Open source · macOS · Windows',
      appsCardCta: 'Explorar os aplicativos',

      appsSectionEyebrow: 'Aplicativos',
      appsSectionTitle: 'Aplicativos locais gratuitos,',
      appsSectionTitleBand: 'construídos sobre uma plataforma',
      appsSectionFooter: 'Detalhes, capturas de tela e instaladores na {link}',
      appsSectionFooterLink: 'página de aplicativos →',

      benefitsEyebrow: 'Por que nossa API',
      benefitsTitle: 'Tudo o que você precisa,',
      benefitsTitleBand: 'nada do que não precisa',
      benefitsSubtitle: 'Ferramentas simples e honestas para construir com modelos de IA',
      benefits: [
        { title: 'API unificada', description: 'Um endpoint compatível com OpenAI para todos os modelos. Mantenha seu SDK —— mude uma linha e publique' },
        { title: 'Modelos variados', description: 'Modelos de chat, raciocínio, visão e imagem dos principais laboratórios —— {count} modelos num catálogo' },
        { title: 'Integração simples', description: 'Funciona com qualquer SDK OpenAI. Copie, cole e execute —— em cURL, Python, Node.js ou Go' },
        { title: 'Preço por uso', description: 'Pague pelo que usar —— por token ou por imagem, em USD. Sem assinaturas, e níveis gratuitos para começar' },
      ],

      statsEyebrow: 'Modelos disponíveis, uma API',
      stats: { providers: 'Provedores de IA', models: 'Modelos, um catálogo', account: 'Conta', countries: 'Países atendidos' },
      statsCompare: 'Nossos preços finais batem o OpenRouter em 7 comparações diretas —— {link}',
      statsCompareLink: 'veja a comparação →',

      howEyebrow: 'Como funciona',
      howTitle: 'Três passos até seu primeiro token',
      howSteps: [
        { title: 'Crie uma conta', description: 'Cadastre-se com e-mail e pegue uma chave de API no console. Sem cartão de crédito para começar' },
        { title: 'Aponte seu SDK para o BrushLLM', description: 'Defina a base URL e mantenha o SDK OpenAI que você já usa' },
        { title: 'Chame qualquer modelo pelo id', description: 'Troque de ids livremente —— o catálogo inteiro está a uma chave de distância' },
      ],
      howCodeTitle: 'Mantenha seu código, mude uma linha',
      howCodeSubtitle: 'Se funciona com a API da OpenAI, funciona com o BrushLLM —— a mesma requisição em quatro linguagens.',

      faqEyebrow: 'FAQ',
      faqTitle: 'Perguntas, respondidas',
      faqDevelopers: 'Para desenvolvedores',
      faqCreators: 'Para criadores',
      developerFaqs: [
        {
          question: 'O que é o BrushLLM?',
          answer: 'O BrushLLM é uma plataforma de IA para desenvolvedores e criadores. Os Serviços de Modelos de IA dão aos desenvolvedores uma API para modelos poderosos, e uma família de aplicativos de desktop gratuitos, locais por padrão —— Image Studio, Video Studio e Player —— cobre o lado dos criadores. Uma conta cobre a plataforma toda.',
        },
        {
          question: 'Como a API funciona?',
          answer: 'Aponte qualquer SDK OpenAI para {apiBase} e use sua chave BrushLLM. Completions de chat, chamadas de ferramentas e streaming funcionam como você já espera.',
        },
        {
          question: 'Quais modelos de IA estão disponíveis?',
          answer: 'O catálogo cobre {count} modelos de DeepSeek, Qwen, GLM, Kimi, MiniMax e OpenAI —— chat, raciocínio, visão e texto para imagem. A lista completa com preços ao vivo está na página de Modelos.',
        },
        {
          question: 'A API é compatível com a OpenAI?',
          answer: 'Sim, totalmente. O que funciona com a API da OpenAI funciona com o BrushLLM —— incluindo agentes de código e CLIs como Cursor, Cline, OpenCode e aider.',
        },
        {
          question: 'Como o uso é cobrado?',
          answer: 'Estritamente pague-pelo-uso em USD —— por token para modelos de texto, por imagem para modelos de imagem. Sem assinaturas ou mínimos; vários modelos têm níveis gratuitos.',
        },
        {
          question: 'O BrushLLM serve para startups e empresas?',
          answer: 'Sim. Um endpoint cobre todos os provedores, o preço por uso escala com você, cada chave tem seu próprio limite de gasto e há descontos por volume para uso comprometido.',
        },
        {
          question: 'Como vocês protegem minha privacidade?',
          answer: 'Coletamos apenas o que uma conta precisa para funcionar. Sem rastreadores, sem análises, sem anúncios —— seus prompts seguem direto para o modelo upstream e nunca são armazenados, vendidos ou usados para criar perfis.',
        },
      ],
      creatorFaqs: [
        {
          question: 'O que é o Image Studio?',
          answer: 'O Image Studio é a caixa de ferramentas de imagens de desktop gratuita do BrushLLM. Ferramentas do dia a dia —— converter, comprimir, cortar, EXIF —— rodam localmente e offline; recursos de IA como remoção de fundo e preenchimento generativo passam pela API do BrushLLM, cobrados por imagem.',
        },
        {
          question: 'O que posso fazer com o Image Studio?',
          answer: 'Converter, comprimir, cortar e limpar imagens com ferramentas locais gratuitas —— e depois gerar, remover fundos, apagar objetos, preencher e reestilizar com IA, cobrado por imagem.',
        },
        {
          question: 'Posso editar imagens existentes?',
          answer: 'Sim. Abra qualquer imagem, selecione uma região ou a tela inteira e descreva a mudança —— inpainting e remoção de fundo são integrados.',
        },
        {
          question: 'Posso gerar e transformar imagens?',
          answer: 'Sim —— geração de texto para imagem e reestilização rodam no mesmo espaço de trabalho, com GPT-Image pela API do BrushLLM.',
        },
        {
          question: 'Onde consigo os aplicativos?',
          answer: 'Os três aplicativos —— Image Studio, Video Studio e Player —— já estão disponíveis nos releases do GitHub do BrushLLM, para macOS (Apple Silicon) e Windows.',
        },
        {
          question: 'Os aplicativos são realmente gratuitos?',
          answer: 'Sim. Todas as ferramentas locais são gratuitas e o código-fonte está no GitHub. Só os recursos de IA do Image Studio usam a API do BrushLLM, pague-pelo-uso.',
        },
      ],

      ctaBuildTitle: 'Construa com IA',
      ctaBuildText: 'Uma API para {count} modelos —— unificada, por uso, compatível com OpenAI',
      ctaCreateTitle: 'Crie com IA',
      ctaCreateText: 'Aplicativos de desktop gratuitos, locais por padrão —— crie e edite imagens, vídeo e mídia, com superpoderes de IA no Image Studio',
    },

    models: {
      metaDescription: 'Navegue por {count} modelos de IA —— de DeepSeek, Qwen, GLM e Kimi a GPT e texto para imagem —— com janelas de contexto, capacidades e preços indicativos.',
      eyebrow: 'Modelos de IA',
      title: '{count} modelos · {providers} provedores ·',
      titleBand: 'Um endpoint',
      intro: 'Todos os modelos abaixo podem ser chamados pela mesma API compatível com OpenAI e a mesma chave. Os preços são indicativos —— USD por 1M tokens para modelos de texto, USD por imagem para modelos de imagem{free}.',
      introFree: ' —— {count} modelos são gratuitos',
      searchPlaceholder: 'Buscar por nome, id ou provedor…',
      searchLabel: 'Buscar modelos',
      providerLabel: 'Provedor',
      providerGroup: 'Filtrar por provedor',
      capabilityLabel: 'Capacidade',
      capabilityGroup: 'Filtrar por capacidade',
      all: 'Todos',
      showing: 'Exibindo {visible} de {total} modelos',
      empty: 'Nenhum modelo corresponde aos seus filtros. Tente outra palavra-chave, provedor, capacidade ou caso de uso.',
      footnote: 'Os preços são preços de tabela indicativos em USD —— por 1M tokens para modelos de texto, por imagem gerada para modelos de imagem —— e podem diferir das tarifas configuradas no seu console. As janelas de contexto são o máximo suportado por cada modelo upstream. Veja a {docsLink} para detalhes de integração.',
      footnoteDocsLink: 'documentação',
      card: { type: 'Tipo', perImage: 'Por imagem', output: 'Saída', context: 'Contexto', input: 'Entrada / 1M', outputPer1M: 'Saída / 1M' },
    },

    pricing: {
      metaDescription: 'Preços simples de pague-pelo-uso para todos os modelos do BrushLLM —— preços indicativos por token em USD, com vários níveis gratuitos.',
      eyebrow: 'Preços',
      title: 'Pague pelo que usar,',
      titleBand: 'só isso',
      intro: 'Modelos de texto são cobrados por token, modelos de imagem por imagem gerada —— tudo em USD, sem assinaturas ou mínimos. O que você vê abaixo é a tarifa indicativa do catálogo; suas tarifas exatas e saldo ficam no console.',
      highlights: [
        { title: 'Só pague-pelo-uso', description: 'Cobrança por token em USD. Sem assinaturas, sem mínimos, sem jogos de markup —— recarregue e use' },
        { title: '{count} modelo gratuito', description: 'GLM-4.5 Flash não custa nada —— perfeito para protótipos e apps de hobby' },
        { title: 'Descontos por volume', description: 'Volume sério? Fale com a gente e fechamos tarifas de uso comprometido para sua carga' },
      ],
      textModelsTitle: 'Modelos de texto —— por token',
      imageModelsTitle: 'Modelos de imagem —— por imagem',
      table: { model: 'Modelo', provider: 'Provedor', context: 'Contexto', input: 'Entrada / 1M', output: 'Saída / 1M', resolution: 'Resolução', pricePerImage: 'Preço / imagem' },
      footnote: 'Os preços são preços de tabela indicativos em USD —— por 1M tokens para modelos de texto, por imagem gerada para modelos de imagem. A cobrança real acontece no seu console, onde você também acompanha o gasto por chave de API.',
      compareEyebrow: 'Conferência de preços',
      compareTitle: 'Os mesmos modelos,',
      compareTitleBand: 'contas finais menores',
      compareIntro: 'O OpenRouter cobra uma taxa de pagamento na compra de créditos —— 5,5% no cartão —— por cima do preço de tabela de cada modelo. O preço publicado pelo BrushLLM é o preço final que você paga.',
      compareTable: {
        model: 'Modelo',
        ours: 'BrushLLM ent/saída por 1M',
        orList: 'OpenRouter tabela ent/saída',
        orAllIn: 'OpenRouter tudo incluído* ent/saída',
        youSave: 'Você economiza',
        upTo: 'até {pct}%',
      },
      compareFootnote: '*Tudo incluído = preço de tabela do OpenRouter mais a taxa de 5,5% na compra de créditos (Stripe; cripto é 5%). A economia compara a tarifa final do BrushLLM com a tudo incluído do OpenRouter. Preços de tabela do OpenRouter via API pública, obtidos em set/2026 —— indicativos; confirme as tarifas atuais nas duas plataformas.',
      ctaTitle: 'Confira saldo e tarifas',
      ctaText: 'Recarregue, defina limites por chave e acompanhe o uso em tempo real —— tudo no console',
    },

    docs: {
      metaDescription: 'Guia de início rápido da API do BrushLLM —— autenticação, base URL compatível com OpenAI, exemplos de SDK em quatro linguagens e a lista completa de ids de modelos.',
      eyebrow: 'Documentação',
      title: 'Início rápido,',
      titleBand: 'num traço',
      intro: 'O BrushLLM é um gateway compatível com OpenAI. Se você já chamou a API da OpenAI, já sabe chamar o BrushLLM —— aqui vai a versão de trinta segundos.',
      toc: { quickstart: 'Início rápido', firstRequest: 'Primeira requisição', modelIds: 'Ids de modelos', errors: 'Erros' },
      tocLabel: 'Seções da documentação',
      steps: [
        {
          title: 'Obtenha uma chave de API',
          description: '{createLink} ou {signInLink} no console e crie uma chave. Chaves parecem {code} —— trate-as como senhas e defina uma cota de gasto se entregá-las a ferramentas',
          createLink: 'Crie uma conta',
          signInLink: 'entre',
        },
        {
          title: 'Defina a base URL e a chave',
          description: 'Aponte qualquer SDK OpenAI para nosso endpoint:',
          baseUrlLabel: 'base_url',
        },
        {
          title: 'Chame qualquer modelo pelo id',
          description: 'Passe um dos ids da tabela abaixo como {code}. Só isso —— você já está chamando modelos dos principais laboratórios de IA',
        },
      ],
      firstRequestTitle: 'Sua primeira requisição',
      firstRequestText: 'A mesma requisição em quatro linguagens —— incluindo streaming. Copie, cole, execute',
      modelIdsTitle: 'Ids de modelos',
      modelIdsText: 'Use exatamente estes ids (diferenciam maiúsculas). Descrições e capacidades na {modelsLink}. Modelos de imagem são chamados via {code} com a mesma chave de API.',
      modelIdsModelsLink: 'página de modelos',
      modelIdsTable: { id: 'Id do modelo', name: 'Nome exibido', context: 'Contexto' },
      errorsTitle: 'Erros',
      errorsTable: { status: 'Status', meaning: 'Significado', fix: 'O que fazer' },
      errors: [
        { meaning: 'Chave de API inválida ou ausente', fix: 'Verifique se sua chave começa com “brsh-” e não foi revogada no console.' },
        { meaning: 'Id de modelo desconhecido', fix: 'Use um id exatamente como listado na tabela acima —— eles diferenciam maiúsculas.' },
        { meaning: 'Limite de requisições ou cota excedida', fix: 'Aguarde e tente novamente com backoff, ou aumente a cota desta chave no console.' },
        { meaning: 'Saldo insuficiente', fix: 'Recarregue sua conta no console e repita a requisição.' },
        { meaning: 'Erro do provedor upstream', fix: 'Tente novamente após alguns segundos; se persistir, mude para outro id de modelo ou contate o suporte.' },
      ],
      helpTitle: 'Travou em algo?',
      helpText: 'Consulte o console para chaves, cotas e cobrança, ou escreva para {email}',
    },

    apps: {
      metaDescription: 'Aplicativos de desktop do BrushLLM —— Image Studio, Video Studio e Player. Gratuitos, locais por padrão, open source, para macOS e Windows.',
      eyebrow: 'Aplicativos',
      title: 'Aplicativos locais gratuitos,',
      titleBand: 'open source',
      intro: 'Três ferramentas de desktop para macOS e Windows —— zero telemetria, zero contas, sem anúncios. Os recursos de IA do Image Studio se conectam direto na API do BrushLLM.',
      apiTitle: 'A API por trás dos recursos de IA',
      apiText: 'As ferramentas de IA do Image Studio rodam no gateway do BrushLLM —— um endpoint compatível com OpenAI, tarifas por imagem publicadas.',
    },

    studio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'App de desktop · Grátis + IA por uso',
      intro: 'Cada ferramenta local é gratuita e roda inteiramente no seu dispositivo —— motor em Rust, sem uploads. Os recursos de IA chamam a mesma {apiLink} que alimenta o resto da plataforma, cobrados por imagem nas {ratesLink}.',
      introApiLink: 'API do BrushLLM',
      introRatesLink: 'tarifas publicadas',
      outro: 'Veja os modelos de imagem por trás das ferramentas de IA →',
      groups: [
        {
          title: 'Ferramentas locais —— gratuitas, offline, privadas',
          items: [
            { title: 'Converter e comprimir', description: '8 formatos de entrada para 8 de saída (incluindo AVIF e WebP), com reamostragem Lanczos e controle de qualidade.' },
            { title: 'Redimensionar, cortar e girar', description: 'Ferramentas geométricas amigáveis a lote, com dimensões exatas em pixels e predefinições de proporção.' },
            { title: 'Marcas d’água e anotações', description: 'Marcas d’água de texto e imagem, setas, caixas e anotação à mão livre para capturas e documentos.' },
            { title: 'EXIF: ver, editar e limpar', description: 'Inspecione os metadados completos, reescreva campos ou remova localização e dados da câmera antes de compartilhar.' },
            { title: 'Montagem, mosaico e sombras', description: 'Combine imagens em grades, pixelize regiões, adicione cantos arredondados e sombras projetadas.' },
            { title: 'Ferramentas de cor', description: 'Brilho, contraste e saturação, substituição de cores e um conta-gotas com lupa.' },
          ],
        },
        {
          title: 'Ferramentas de IA —— alimentadas pelo gateway do BrushLLM',
          items: [
            { title: 'Gerar imagens', description: 'Texto para imagem com GPT-Image —— cobrado por imagem gerada, sem assinatura.' },
            { title: 'Remover fundos', description: 'Recortes de um clique com bordas limpas, direto do seu desktop.' },
            { title: 'Remover objetos e marcas d’água', description: 'Selecione uma região e descreva o que deve desaparecer —— o inpainting preenche.' },
            { title: 'Preenchimento generativo', description: 'Expanda, substitua ou troque conteúdo, com imagens de referência opcionais (ex.: troca de pessoa).' },
            { title: 'Reestilizar', description: 'Repinte uma imagem num novo estilo mantendo composição e identidade.' },
            { title: 'Sua chave, sua cota', description: 'A chave de API fica no chaveiro do sistema; cada chave carrega sua própria cota de gasto definida no console.' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'App de desktop · Grátis',
      intro: 'Processamento 100% local —— sua mídia nunca sai da máquina. Os binários do FFmpeg são fixados e verificados por SHA-256, o motor roda uma fila de tarefas pausável e 175 testes automatizados mantêm a caixa de ferramentas honesta.',
      groups: [
        {
          title: 'Vídeo',
          items: [
            { title: 'Converter', description: 'MP4, MKV, WebM, MOV e AVI com codecs H.264, H.265, VP9 ou AV1.' },
            { title: 'Comprimir', description: 'Compressão por qualidade (CRF) ou bitrate alvo, com estimativa de tamanho ao vivo.' },
            { title: 'Mesclar e aparar', description: 'Junte clipes na ordem, corte segmentos com pontos de entrada/saída precisos ao quadro.' },
            { title: 'Cortar, escalar e girar', description: 'Correções geométricas para filmagens mal orientadas ou com bordas.' },
            { title: 'Mudar velocidade', description: 'De 0,25× a 4× a velocidade de reprodução, com correção de tom.' },
            { title: 'Quadros, GIFs e WebP', description: 'Extraia quadros estáticos ou transforme clipes em GIF/WebP animados.' },
          ],
        },
        {
          title: 'Áudio',
          items: [
            { title: 'Extrair e converter', description: 'Extraia áudio para MP3, M4A, FLAC, WAV, OGG ou Opus.' },
            { title: 'Normalização de loudness', description: 'Normalização EBU R128 para volume consistente entre arquivos.' },
            { title: 'Volume e ganho', description: 'Aumente ou atenue sem recodificar o vídeo, quando possível.' },
            { title: 'Silenciar ou substituir', description: 'Remova faixas de áudio ou troque a trilha sonora.' },
            { title: 'Aparar', description: 'Corte segmentos de áudio com a mesma precisão de entrada/saída do vídeo.' },
          ],
        },
        {
          title: 'Legendas',
          items: [
            { title: 'Embutir ou gravar', description: 'Anexe faixas de legenda suaves ou queime-as na imagem.' },
            { title: 'Converter formatos', description: 'SRT, VTT, ASS, SSA e TTML —— com um motor de legendas sem dependências.' },
            { title: 'Corrigir codificações', description: 'Repare automaticamente arquivos antigos GBK/Big5 em UTF-8 limpo.' },
            { title: 'Ajustar tempo', description: 'Adiante ou atrase legendas em lote, sincronizadas com o vídeo.' },
            { title: 'Extrair', description: 'Retire faixas de legenda existentes de qualquer contêiner.' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} —— {description}',
      badge: 'App de desktop · Open source',
      intro: 'O app para macOS é uma construção nativa em Swift + SwiftUI sobre libmpv; o app para Windows é uma reescrita em Tauri com o mesmo núcleo mpv. Zero telemetria, atualizações verificadas só quando você pede.',
      groups: [
        {
          title: 'Reprodução',
          items: [
            { title: 'Todo formato', description: 'Sobre mpv: MKV, MP4, AVI, MOV, WebM, FLAC, MP3 e tudo o que o mpv reproduz.' },
            { title: 'Saída HDR', description: 'Passthrough de PQ e EDR em telas compatíveis, com decodificação por hardware alternável.' },
            { title: 'Imagens de disco', description: 'Reproduza imagens ISO de Blu-ray e DVD diretamente.' },
            { title: 'Controles', description: 'Loop A-B, velocidade de reprodução, avanço por quadro, capítulos e capturas de tela.' },
            { title: 'Playlist e histórico', description: 'Playlists reordenáveis por arrastar, retome de onde parou, favoritos.' },
            { title: 'Janela mini', description: 'Um mini player flutuante sempre visível para multitarefa.' },
          ],
        },
        {
          title: 'Streaming',
          items: [
            { title: 'WebDAV e SMB', description: 'Navegue e transmita do seu NAS —— montagem SMB nativa do macOS incluída.' },
            { title: 'FTP', description: 'Cliente FTP embutido com navegação de diretórios e streaming direto.' },
            { title: 'Emby e Jellyfin', description: 'Entre, navegue pelas bibliotecas e transmita direto sem transcodificação.' },
            { title: 'HTTP e HLS', description: 'Reproduza links e streams m3u8/HLS com buffer de leitura ajustável.' },
          ],
        },
        {
          title: 'Legendas e ferramentas',
          items: [
            { title: 'Legendas carregadas automaticamente', description: 'Arquivos correspondentes carregam sozinhos; os externos, sob demanda.' },
            { title: 'Estilização ao vivo', description: 'Fonte, tamanho, cor e posição —— reestilizados enquanto você assiste.' },
            { title: 'Equalizador e gravação', description: 'Equalizador de áudio, mais gravação de streams para arquivamento.' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'O BrushLLM constrói produtos de IA para desenvolvedores e criadores —— uma API unificada para modelos poderosos e aplicativos de desktop gratuitos, locais por padrão, para imagens, vídeo e mídia.',
      eyebrow: 'Sobre',
      title: 'Produtos de IA para',
      titleBand: 'desenvolvedores e criadores',
      intro: 'O BrushLLM constrói produtos de IA para desenvolvedores e criadores. Uma plataforma, uma conta —— e a mesma promessa em cada lado: ferramentas simples, preços publicados, privacidade desde o design.',
      forDevelopers: 'Para desenvolvedores.',
      forDevelopersText: '{link} —— uma API unificada para acessar modelos de IA poderosos. {count} modelos de DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI e mais, atrás de um endpoint compatível com OpenAI.',
      forDevelopersLink: 'Serviços de Modelos de IA',
      forCreators: 'Para criadores.',
      forCreatorsText: '{link} —— aplicativos de desktop gratuitos, locais por padrão, para macOS e Windows. O Image Studio combina ferramentas locais gratuitas com edição de IA pela mesma API; os três são open source e sem telemetria.',
      forCreatorsLink: 'Image Studio, Video Studio e Player',
      values: [
        { title: 'Aberto ao mundo', description: 'IA de ponta não deveria exigir contas separadas, obstáculos de pagamento locais ou bloqueios regionais —— nem custar uma fortuna. Um cadastro, em USD, de qualquer país' },
        { title: 'Uma plataforma, uma conta', description: 'Uma plataforma, uma conta, uma fatura. Se integrar a gente levar mais que uma pausa para o café, o bug é nosso, não seu' },
        { title: 'Preços honestos', description: 'Tarifas por token publicadas, sem armadilhas de assinatura, e níveis gratuitos que continuam gratuitos. Você sempre deveria saber quanto custa uma requisição' },
        { title: 'Privacidade desde o design', description: 'Coletamos apenas o que uma conta precisa para funcionar. Sem rastreadores, sem análises, sem anúncios —— seus prompts nunca são armazenados, vendidos ou usados para criar perfis' },
      ],
      familyTitle: 'A família BrushLLM',
      familyText: 'Uma plataforma, duas trilhas —— uma API unificada para desenvolvedores e uma família de aplicativos de desktop gratuitos, locais por padrão, para criadores.',
      familyApiTitle: 'Serviços de Modelos de IA',
      familyApiText: 'Um endpoint compatível com OpenAI para {count} modelos de {providers} provedores —— pague por token ou por imagem.',
      contactTitle: 'Fale com a gente',
      contactText: 'Dúvidas, preços por volume ou um modelo que gostaria de ver adicionado —— a gente lê tudo',
      contactCta: 'Começar',
    },

    notFound: {
      metaDescription: 'Esta página não pôde ser encontrada.',
      code: '404 · FORA DA TELA',
      title: 'Esta página foi repintada',
      text: 'O link pode estar desatualizado ou a página pode ter se movido. Os modelos, porém, estão exatamente onde você os deixou.',
      backHome: 'Voltar ao início',
      browseModels: 'Ver modelos',
    },
  },
};

export default ptBR;
