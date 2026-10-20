/**
 * 日本語。en.ts と完全に同じ構造（Dictionary 型で保証）。
 * プレースホルダー {count}/{year}/{pct} はそのまま残し、描画時に置換される。
 * 翻訳しない：モデル id、URL、コード例、価格、ライセンス識別子、製品名。
 */
import type { Dictionary } from '../index';

const ja: Dictionary = {
  site: {
    title: 'BrushLLM — 複雑さを排した、あなたの AI',
    description: 'ひとつの API で強力な AI モデルへアクセスし、無料のローカルファースト・デスクトップアプリで創作する。BrushLLM は開発者とクリエイターのための AI プラットフォームです。',
    organizationDescription: 'BrushLLM は開発者とクリエイターのための AI プラットフォームです。AI モデルサービス（強力な AI モデルへの単一 API）と、無料のローカルファースト・デスクトップアプリ —— Image Studio・Video Studio・Player を提供します。',
  },

  nav: {
    models: 'AI モデル',
    apps: 'アプリ',
    pricing: '料金',
    docs: 'ドキュメント',
    about: '概要',
  },

  header: {
    home: 'BrushLLM ホーム',
    mainNav: 'メインナビゲーション',
    mobileNav: 'モバイルナビゲーション',
    logIn: 'ログイン',
    getStarted: 'はじめる',
    toggleMenu: 'メニュー切替',
  },

  languageSwitcher: {
    label: '言語',
    system: 'Auto',
    systemTitle: 'ブラウザーの言語に従う',
  },

  appPage: {
    openSourceTitle: 'オープンソース、正直なソフトウェア',
    openSourceText: 'ソースコード・課題・リリースは GitHub にあります{license}。テレメトリなし、アカウントなし、広告なし。',
  },

  footer: {
    blurb: 'BrushLLM —— 開発者とクリエイターのための AI。ひとつの API で強力な AI モデルを、さらに無料のローカルファースト・デスクトップアプリを。プライバシーを守ります：トラッカーなし、アナリティクスなし、広告なし。',
    tagline: '1 つの API · 3 つの無料アプリ · プライバシーファースト',
    product: '製品',
    console: 'コンソール',
    company: '会社',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: 'BrushLLM について',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: 'OpenAI 互換ゲートウェイで駆動',
  },

  common: {
    download: 'ダウンロード',
    github: 'GitHub',
    tryIt: '試す',
    featured: '注目',
    free: '無料',
    copy: 'コピー',
    copied: 'コピーしました！',
    copyFallback: '⌘C を押してください',
    learnMore: '詳しく見る',
    learnMoreArrow: '詳しく見る →',
    downloadArrow: 'ダウンロード ↗',
    exploreAiModels: 'AI モデルを見る',
    exploreTheApps: 'アプリを見る',
    exploreTheApi: 'API を見る',
    browseModels: 'モデル一覧',
    openTheConsole: 'コンソールを開く',
    readTheDocs: 'ドキュメントを読む',
  },

  data: {
    capability: {
      chat: 'チャット',
      reasoning: '推論',
      tools: 'ツール呼び出し',
      vision: 'ビジョン',
      'long-context': 'ロングコンテキスト',
      image: 'テキストから画像',
    },
    apps: {
      'image-studio': {
        tagline: 'ローカルファーストの AI 画像ツールボックス',
        description: '無料のデスクトップ画像ツールボックス。変換・圧縮・切り抜き・透かし・EXIF といった日常編集はすべて端末内で完結。背景除去や生成塗りつぶしなどの AI 機能は BrushLLM ゲートウェイ経由で、1 枚ごとの課金です。',
        highlights: ['25+ のローカルツール', 'AI 編集は BrushLLM API 経由', '9 言語対応', 'テレメトリゼロ'],
      },
      'video-studio': {
        tagline: 'ローカル完結の動画・音声・字幕ツールボックス',
        description: '無料のオフライン動画/音声/字幕処理ツールボックス。変換・圧縮・結合・トリミング・ラウドネス正規化・字幕エンコード修正 —— 100% ローカル処理、ネットワーク通信ゼロ。',
        highlights: ['25+ のツール', '100% ローカル処理', '9 言語対応', 'ネットワーク通信ゼロ'],
      },
      player: {
        tagline: 'mpv ベースのオープンソースメディアプレイヤー',
        description: 'オープンソースのクロスプラットフォームメディアプレイヤー。mpv が再生できる全フォーマットに加え、WebDAV・SMB・FTP・Emby・Jellyfin からのストリーミングに対応 —— HDR 出力、ハードウェアデコード、9 言語 UI を備えます。',
        highlights: ['mpv で全フォーマット', 'WebDAV · SMB · Emby · Jellyfin', 'HDR とハードウェアデコード', '9 言語対応'],
      },
    },
    models: {
      'gpt-5.2': 'ChatGPT のフラッグシップ —— 汎用推論・ビジョン・ツール利用すべて強力。',
      'gpt-5.2-mini': '高速・低価格の ChatGPT ティア。大量のチャット・分類・抽出に最適。',
      'deepseek-chat': 'フラッグシップの非思考モデル。高速・安価で、汎用チャットとツール利用に優れる。',
      'deepseek-reasoner': '思考過程が見える推論モデル。数学・コード・難問に強い。',
      'glm-4.6': 'Z.ai フラッグシップ。コーディング・執筆・エージェント計画に強く、200K コンテキスト。',
      'glm-4.5-air': 'コスト感度の高い本番トラフィック向けの軽量 GLM。',
      'glm-4.5-flash': 'GLM ファミリーの無料ティア —— 試作や個人プロジェクトに最適。',
      'qwen3-max': 'Alibaba 最大のフラッグシップ。要求の厳しいエージェント・チャット負荷向けの最上位品質。',
      'qwen3-235b-a22b': 'ハイブリッド思考モードを持つオープンウェイト MoE フラッグシップ。',
      'qwen3-32b': '思考/非思考両モードを持つ密なオープンウェイト万能モデル。',
      'qwen3-coder-plus': 'エージェント型コーディングツールとリポジトリ規模の編集のためのコード特化モデル。',
      'qwen-vl-max': '画像理解・OCR・グラフ推論に強いビジョン言語モデル。',
      'kimi-k2-0905': 'エージェントのツール利用と長文書に最適化された兆パラメータ MoE。',
      'kimi-k2-thinking': '多段階タスクに交互思考で挑む K2 の推論派生。',
      'MiniMax-M2': '効率的なエージェント MoE —— 予算重視のコーディングエージェント定番。',
      'gpt-image-2': 'OpenAI の画像生成モデル —— プロンプトから画像へ、指示追従性が高い。',
    },
  },

  pages: {
    home: {
      metaDescription: 'ひとつの API で強力な AI モデルへアクセスし、無料のローカルファースト・デスクトップアプリで創作する。',
      heroBadge: '開発者へ · クリエイターへ',
      heroTitle: '複雑さを排した、',
      heroTitleBand: 'あなたの AI',
      heroSubtitle: 'ひとつの API で強力な AI モデルへ。無料のローカルファーストアプリで創作も自由に',
      heroCtaApi: 'API キーを取得',
      heroCtaApps: 'デスクトップアプリ',
      heroNote: 'アカウントひとつでプラットフォーム全体へ',

      platformEyebrow: 'ひとつのプラットフォーム',
      platformTitle: '開発者とクリエイターのための単一プラットフォーム',
      platformIntro: 'BrushLLM は開発者とクリエイターのための統合プラットフォームです。{modelsLink}による強力な AI モデルへの統一 API アクセスに加え、{appsLink}のファミリーを提供 —— Image Studio の AI 機能は同じ API で課金されます。',
      platformModelsLink: 'AI モデルサービス',
      platformAppsLink: '無料のローカルファースト・デスクトップアプリ',

      apiCardBadge: '開発者へ',
      apiCardTitle: 'AI モデルサービス',
      apiCardSubtitle: '強力な AI モデルへの単一 API',
      apiCardDescription: '単一の API で強力な AI モデルへ —— {count} モデル、{providers} プロバイダー、統一・従量課金。',
      apiCardBullets: [
        '統一された OpenAI 互換エンドポイント',
        'チャット・推論・ビジョン・画像モデル',
        '公開価格、従量課金、無料ティアあり',
      ],
      apiCardChips: { models: 'モデル', pricing: '料金', docs: 'ドキュメント', console: 'コンソール' },
      apiCardCta: 'AI モデルを見る',
      apiCardSecondary: 'ドキュメントを読む',

      appsCardBadge: 'クリエイターへ · 無料アプリ',
      appsCardTitle: 'デスクトップアプリ',
      appsCardSubtitle: '日常業務のための無料ローカルファーストツール',
      appsCardDescription: 'Image Studio・Video Studio・Player —— macOS と Windows 向けオープンソース・デスクトップアプリ、テレメトリゼロ。Image Studio の AI 機能は同じ API 上で動作します。',
      appsCardNote: 'オープンソース · macOS · Windows',
      appsCardCta: 'アプリを見る',

      appsSectionEyebrow: 'アプリ',
      appsSectionTitle: '無料のローカルファーストアプリ、',
      appsSectionTitleBand: 'ひとつのプラットフォーム上に',
      appsSectionFooter: '詳細・スクリーンショット・インストーラーは{link}',
      appsSectionFooterLink: 'アプリページ →',

      benefitsEyebrow: '私たちの API が選ばれる理由',
      benefitsTitle: '必要なすべてを、',
      benefitsTitleBand: '余計なものはなしに',
      benefitsSubtitle: 'AI モデルで開発するための、シンプルで正直なツール',
      benefits: [
        { title: '統一 API', description: 'すべてのモデルにひとつの OpenAI 互換エンドポイント。SDK はそのまま —— 1 行変えてリリース' },
        { title: '豊富なモデル', description: '主要研究所のチャット・推論・ビジョン・画像モデル —— 1 つのカタログに {count} モデル' },
        { title: '簡単な統合', description: 'どの OpenAI SDK でも即導入。コピーして貼って実行 —— cURL・Python・Node.js・Go に対応' },
        { title: '従量課金', description: '使った分だけ支払う —— テキストはトークン単位、画像は枚単位、米ドル建て。サブスクなし、無料ティアで開始' },
      ],

      statsEyebrow: '利用可能なモデル、ひとつの API',
      stats: { providers: 'AI プロバイダー', models: 'モデル、単一カタログ', account: 'アカウント', countries: '対応国・地域' },
      statsCompare: '当社の込々価格は 7 モデルの直接比較で OpenRouter を下回ります —— {link}',
      statsCompareLink: '比較を見る →',

      howEyebrow: '仕組み',
      howTitle: '最初のトークンまで 3 ステップ',
      howSteps: [
        { title: 'アカウントを作成', description: 'メールで登録し、コンソールで API キーを取得。開始にクレジットカードは不要' },
        { title: 'SDK を BrushLLM へ向ける', description: 'base URL を設定するだけ。今使っている OpenAI SDK をそのまま' },
        { title: 'id で任意のモデルを呼ぶ', description: 'モデル id は自由に切り替え —— カタログ全体がキーひとつ先に' },
      ],
      howCodeTitle: 'コードはそのまま、変えるのは 1 行',
      howCodeSubtitle: 'OpenAI API で動くものは BrushLLM でも動く —— 同じリクエストを 4 言語で。',

      faqEyebrow: 'FAQ',
      faqTitle: 'よくある質問、ひとつずつ',
      faqDevelopers: '開発者へ',
      faqCreators: 'クリエイターへ',
      developerFaqs: [
        {
          question: 'BrushLLM とは何ですか？',
          answer: 'BrushLLM は開発者とクリエイターのための AI プラットフォームです。AI モデルサービスが開発者に強力な AI モデルへの単一 API を提供し、無料のローカルファースト・デスクトップアプリ群 —— Image Studio・Video Studio・Player —— がクリエイター側を支えます。アカウントひとつでプラットフォーム全体を利用できます。',
        },
        {
          question: 'API はどう動きますか？',
          answer: '任意の OpenAI SDK を {apiBase} に向け、BrushLLM のキーを使うだけ。チャット補完・ツール呼び出し・ストリーミングは、期待どおりに動作します。',
        },
        {
          question: 'どの AI モデルが使えますか？',
          answer: 'DeepSeek・Qwen・GLM・Kimi・MiniMax・OpenAI など {count} モデルを収録 —— チャット・推論・ビジョン・テキストから画像まで。全一覧と最新価格はモデルページで。',
        },
        {
          question: 'API は OpenAI 互換ですか？',
          answer: '完全互換です。OpenAI API で動くものは BrushLLM でも動きます —— Cursor・Cline・OpenCode・aider などのコーディングエージェントや CLI も含めて。',
        },
        {
          question: '利用はどう課金されますか？',
          answer: '厳密な従量制・米ドル建て —— テキストモデルはトークン単位、画像モデルは枚単位。サブスクや最低利用額はなく、複数モデルに無料ティアがあります。',
        },
        {
          question: 'BrushLLM はスタートアップや企業に向いていますか？',
          answer: '向いています。単一エンドポイントで全プロバイダーをカバーし、従量価格は成長に合わせてスケール、各キーに独立した支出上限、コミット利用ではボリューム割引も相談可能です。',
        },
        {
          question: 'プライバシーはどう守られますか？',
          answer: 'アカウント運営に必要な情報のみを収集します。トラッカーなし・アナリティクスなし・広告なし —— プロンプトは上流モデルへ直接中継され、保存・販売・プロファイリングに使われることはありません。',
        },
      ],
      creatorFaqs: [
        {
          question: 'Image Studio とは何ですか？',
          answer: 'Image Studio は BrushLLM の無料デスクトップ画像ツールボックスです。変換・圧縮・切り抜き・EXIF といった日常ツールはローカルでオフライン実行。背景除去や生成塗りつぶしなどの AI 機能は BrushLLM API 経由で、枚単位の課金です。',
        },
        {
          question: 'Image Studio で何ができますか？',
          answer: '無料のローカルツールで変換・圧縮・切り抜き・整理を行い —— その後、AI で生成・背景除去・物体消去・塗りつぶし・スタイル変更を、枚単位の課金で。',
        },
        {
          question: '既存の画像を編集できますか？',
          answer: 'はい。任意の画像を開き、領域またはキャンバス全体を選んで変更内容を記述するだけ —— インペインティングと背景除去を内蔵しています。',
        },
        {
          question: '画像の生成と変換ができますか？',
          answer: 'はい —— テキストから画像生成とスタイル変換を同じワークスペースで。BrushLLM API 上の GPT-Image が駆動します。',
        },
        {
          question: 'アプリはどこで入手できますか？',
          answer: '3 つのアプリ —— Image Studio・Video Studio・Player —— はすべて BrushLLM GitHub releases から今すぐ入手できます。macOS（Apple Silicon）と Windows に対応。',
        },
        {
          question: 'アプリは本当に無料ですか？',
          answer: 'はい。すべてのローカルツールが無料で、ソースコードは GitHub にあります。従量課金の BrushLLM API を使うのは Image Studio の AI 機能だけです。',
        },
      ],

      ctaBuildTitle: 'AI で開発する',
      ctaBuildText: 'ひとつの API に {count} モデル —— 統一・従量課金・OpenAI 互換',
      ctaCreateTitle: 'AI で創作する',
      ctaCreateText: '無料のローカルファースト・デスクトップアプリ —— 画像・動画・メディアの作成と編集を、Image Studio の AI 超能力付きで',
    },

    models: {
      metaDescription: '{count} 個の AI モデルを閲覧 —— DeepSeek・Qwen・GLM・Kimi から GPT やテキストから画像まで。コンテキスト窓・能力・参考価格つき。',
      eyebrow: 'AI モデル',
      title: '{count} モデル · {providers} プロバイダー ·',
      titleBand: '単一エンドポイント',
      intro: '以下のモデルはすべて、同じ OpenAI 互換 API と同じキーで呼び出せます。価格は参考値 —— テキストモデルは 1M トークンあたり、画像モデルは 1 枚あたり、米ドル建て{free}。',
      introFree: ' —— うち {count} モデルが無料',
      searchPlaceholder: '名前・id・プロバイダーで検索…',
      searchLabel: 'モデルを検索',
      providerLabel: 'プロバイダー',
      providerGroup: 'プロバイダーで絞り込み',
      capabilityLabel: '能力',
      capabilityGroup: '能力で絞り込み',
      all: 'すべて',
      showing: '{total} モデル中 {visible} を表示',
      empty: '条件に合うモデルがありません。別のキーワード・プロバイダー・能力・用途をお試しください。',
      footnote: '価格は参考定価（米ドル）です —— テキストモデルは 1M トークンあたり、画像モデルは生成 1 枚あたり —— コンソールで設定されたレートとは異なる場合があります。コンテキスト窓は各上流モデルの最大値です。統合の詳細は{docsLink}をご覧ください。',
      footnoteDocsLink: 'ドキュメント',
      card: { type: '種類', perImage: '1 枚あたり', output: '出力', context: 'コンテキスト', input: '入力 / 1M', outputPer1M: '出力 / 1M' },
    },

    pricing: {
      metaDescription: 'BrushLLM の全モデルにシンプルな従量課金 —— 米ドル建ての参考トークン単価と、複数の無料ティア。',
      eyebrow: '料金',
      title: '使った分だけ支払う、',
      titleBand: 'それだけ',
      intro: 'テキストモデルはトークン単位、画像モデルは生成枚数で課金 —— すべて米ドル建て、サブスクも最低利用額もなし。以下は参考カタルク価格で、実際のレートと残高はコンソールで確認できます。',
      highlights: [
        { title: '純粋な従量制', description: '米ドル建てのトークン単位課金。サブスクなし、最低額なし、上乗せゲームなし —— チャージしてすぐ使える' },
        { title: '{count} 個の無料モデル', description: 'GLM-4.5 Flash は完全無料 —— 試作や個人アプリに最適' },
        { title: 'ボリューム割引', description: '本格的な利用量をお持ちですか？ご相談のうえ、コミット利用のレートを提案します' },
      ],
      textModelsTitle: 'テキストモデル —— トークン単位',
      imageModelsTitle: '画像モデル —— 枚単位',
      table: { model: 'モデル', provider: 'プロバイダー', context: 'コンテキスト', input: '入力 / 1M', output: '出力 / 1M', resolution: '解像度', pricePerImage: '1 枚あたりの価格' },
      footnote: '価格は参考定価（米ドル）です —— テキストモデルは 1M トークンあたり、画像モデルは生成 1 枚あたり。実際の課金はコンソールで行われ、API キーごとの支出も追跡できます。',
      compareEyebrow: '価格チェック',
      compareTitle: '同じモデル、',
      compareTitleBand: '込々の請求はもっと小さく',
      compareIntro: 'OpenRouter はクレジット購入時に決済手数料 —— カードで 5.5% —— を各モデルの定価に上乗せします。BrushLLM の公示価格が、あなたの支払う最終価格です。',
      compareTable: {
        model: 'モデル',
        ours: 'BrushLLM 入/出力 1M あたり',
        orList: 'OpenRouter 定価 入/出力',
        orAllIn: 'OpenRouter 込々* 入/出力',
        youSave: '節約額',
        upTo: '最大 {pct}%',
      },
      compareFootnote: '*込々 = OpenRouter 定価 + 5.5% のクレジット購入手数料（Stripe、暗号資産は 5%）。節約額は BrushLLM の最終レートと OpenRouter の込々レートの比較です。OpenRouter 定価は公開 API より 2026 年 9 月に取得 —— 参考値です。最新レートは両プラットフォームでご確認ください。',
      ctaTitle: '残高とレートを確認',
      ctaText: 'チャージ、キーごとの上限設定、リアルタイム利用状況 —— すべてコンソールで',
    },

    docs: {
      metaDescription: 'BrushLLM API クイックスタート —— 認証、OpenAI 互換 base URL、4 言語の SDK 例、モデル id 全一覧。',
      eyebrow: 'ドキュメント',
      title: 'クイックスタート、',
      titleBand: 'ひと筆書きのように',
      intro: 'BrushLLM は OpenAI 互換ゲートウェイです。OpenAI API を呼んだことがあれば、BrushLLM の使い方はもう分かっています —— 30 秒版をどうぞ。',
      toc: { quickstart: 'クイックスタート', firstRequest: '最初のリクエスト', modelIds: 'モデル id', errors: 'エラー' },
      tocLabel: 'ドキュメントのセクション',
      steps: [
        {
          title: 'API キーを取得',
          description: '{createLink}またはコンソールに{signInLink}し、キーを作成します。キーは {code} の形です —— パスワード同様に扱い、ツールに渡す場合は支出上限を設定してください',
          createLink: 'アカウントを作成',
          signInLink: 'ログイン',
        },
        {
          title: 'base URL とキーを設定',
          description: '任意の OpenAI SDK を当社エンドポイントに向けます：',
          baseUrlLabel: 'base_url',
        },
        {
          title: 'id で任意のモデルを呼ぶ',
          description: '下表の id のいずれかを {code} として渡すだけ。これで主要研究所のモデルを呼び出しています',
        },
      ],
      firstRequestTitle: 'あなたの最初のリクエスト',
      firstRequestText: '同じリクエストを 4 言語で —— ストリーミング込み。コピーして貼って実行',
      modelIdsTitle: 'モデル id',
      modelIdsText: 'これらの id を正確に使用してください（大文字小文字を区別）。説明と能力は{modelsLink}で。画像モデルは {code} で呼び出し、同じ API キーを使います。',
      modelIdsModelsLink: 'モデルページ',
      modelIdsTable: { id: 'モデル id', name: '表示名', context: 'コンテキスト' },
      errorsTitle: 'エラー',
      errorsTable: { status: 'ステータス', meaning: '意味', fix: '対処方法' },
      errors: [
        { meaning: 'API キーが無効または未指定', fix: 'キーが「brsh-」で始まり、コンソールで失効していないか確認してください。' },
        { meaning: '不明なモデル id', fix: '上表とまったく同じ id を使用してください —— 大文字小文字を区別します。' },
        { meaning: 'レート制限または上限超過', fix: '待ってからバックオフ付きで再試行するか、コンソールでこのキーの上限を引き上げてください。' },
        { meaning: '残高不足', fix: 'コンソールでアカウントにチャージしてから再試行してください。' },
        { meaning: '上流プロバイダーのエラー', fix: '数秒後に再試行。続く場合は別のモデル id に切り替えるか、サポートに連絡してください。' },
      ],
      helpTitle: '行き詰まったら？',
      helpText: 'キー・上限・課金はコンソールで確認するか、{email} までメールでご連絡ください',
    },

    apps: {
      metaDescription: 'BrushLLM デスクトップアプリ —— Image Studio・Video Studio・Player。無料、ローカルファースト、オープンソース、macOS と Windows 対応。',
      eyebrow: 'アプリ',
      title: '無料のローカルファーストアプリ、',
      titleBand: 'オープンソース',
      intro: 'macOS と Windows 向けの 3 つのデスクトップツール —— テレメトリゼロ、アカウントゼロ、広告なし。Image Studio の AI 機能は BrushLLM API に直結しています。',
      apiTitle: 'AI 機能を支える API',
      apiText: 'Image Studio の AI ツールは BrushLLM ゲートウェイ上で動作 —— ひとつの OpenAI 互換エンドポイント、公示された枚単位レート。',
    },

    studio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'デスクトップアプリ · 無料 + AI は従量課金',
      intro: 'すべてのローカルツールが無料で、完全に端末内で動作 —— Rust エンジン、アップロードなし。AI 機能はプラットフォーム全体を支える同じ{apiLink}を呼び出し、{ratesLink}で枚単位の課金です。',
      introApiLink: 'BrushLLM API',
      introRatesLink: '公示レート',
      outro: 'AI ツールを支える画像モデルを見る →',
      groups: [
        {
          title: 'ローカルツール —— 無料・オフライン・プライベート',
          items: [
            { title: '変換と圧縮', description: '8 種の入力形式から 8 種の出力形式へ（AVIF・WebP を含む）。Lanczos リサンプリングと品質制御に対応。' },
            { title: 'リサイズ・切り抜き・回転', description: 'バッチに優しい幾何ツール。正確なピクセル寸法とアスペクト比プリセットをサポート。' },
            { title: '透かしと注釈', description: 'テキスト・画像の透かし、矢印・枠・フリーハンド注釈。スクリーンショットや文書に。' },
            { title: 'EXIF の表示・編集・消去', description: '完全なメタデータの確認、フィールドの書き換え、共有前の位置・カメラ情報の消去。' },
            { title: '結合・モザイク・影', description: '複数画像のグリッド結合、領域のモザイク化、角丸とドロップシャドウ。' },
            { title: 'カラーツール', description: '明るさ・コントラスト・彩度、色置換、拡大カラーピッカー。' },
          ],
        },
        {
          title: 'AI ツール —— BrushLLM ゲートウェイで駆動',
          items: [
            { title: '画像を生成', description: 'GPT-Image によるテキストから画像 —— 生成枚数ごとの課金、サブスクなし。' },
            { title: '背景を除去', description: 'ワンクリックで輪郭のきれいな切り抜き。デスクトップから直接。' },
            { title: '物体・透かしを消す', description: '領域を選んで消したい内容を記述 —— インペインティングが埋めます。' },
            { title: '生成塗りつぶし', description: '拡張・置換・入れ替え。参照画像（人物の入れ替えなど）もオプションで。' },
            { title: 'スタイル変換', description: '構図と主体を保ったまま、画像を別の画風に塗り替える。' },
            { title: 'あなたのキー、あなたの上限', description: 'API キーは OS のキーチェーンに保存。各キーにはコンソールで設定した支出上限が付きます。' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'デスクトップアプリ · 無料',
      intro: '100% ローカル処理 —— メディアがこのマシンから出ることはありません。FFmpeg バイナリはバージョン固定かつ SHA-256 検証済み、エンジンは一時停止/再開可能なジョブキューを備え、175 個の自動テストが信頼性を担保します。',
      groups: [
        {
          title: '動画',
          items: [
            { title: '変換', description: 'MP4・MKV・WebM・MOV・AVI に対応。H.264・H.265・VP9・AV1 コーデックを選択可能。' },
            { title: '圧縮', description: '品質ベース（CRF）または目標ビットレートで圧縮し、サイズをライブ推定。' },
            { title: '結合とトリミング', description: 'クリップを順に連結、フレーム精度の IN/OUT ポイントで切断。' },
            { title: '切り抜き・拡大・回転', description: '向きの誤った素材や黒帯入り素材の補正。' },
            { title: '速度変更', description: '0.25×〜4× の再生速度。音程補正付き。' },
            { title: 'フレーム・GIF・WebP', description: '静止フレームの抽出、またはクリップからアニメ GIF/WebP へ。' },
          ],
        },
        {
          title: '音声',
          items: [
            { title: '抽出と変換', description: '音声を MP3・M4A・FLAC・WAV・OGG・Opus に抽出。' },
            { title: 'ラウドネス正規化', description: 'EBU R128 正規化でファイル間の音量を揃える。' },
            { title: '音量とゲイン', description: '可能な範囲で動画を再エンコードせずに音量を増減。' },
            { title: 'ミュートまたは差し替え', description: '音声トラックの削除、または新しいサントラックへの差し替え。' },
            { title: 'トリミング', description: '動画と同じ IN/OUT 精度で音声を切り出す。' },
          ],
        },
        {
          title: '字幕',
          items: [
            { title: '埋め込みまたは焼き込み', description: 'ソフト字幕トラックの付与、または字幕を画面に直接焼き込む。' },
            { title: '形式変換', description: 'SRT・VTT・ASS・SSA・TTML —— 依存関係なしの自作字幕エンジン。' },
            { title: 'エンコード修正', description: '旧式 GBK/Big5 ファイルをクリーンな UTF-8 に自動修復。' },
            { title: 'タイミング調整', description: '字幕を一括で前後にずらし、動画と同期。' },
            { title: '抽出', description: '任意のコンテナから既存の字幕トラックを取り出す。' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} —— {description}',
      badge: 'デスクトップアプリ · オープンソース',
      intro: 'macOS 版は libmpv を核とするネイティブ Swift + SwiftUI アプリ、Windows 版は同じ mpv コアを持つ Tauri による書き直しです。テレメトリゼロ、更新確認はあなたが求めたときだけ。',
      groups: [
        {
          title: '再生',
          items: [
            { title: '全フォーマット', description: 'mpv ベース：MKV・MP4・AVI・MOV・WebM・FLAC・MP3 ほか、mpv が再生できるすべて。' },
            { title: 'HDR 出力', description: '対応ディスプレイで PQ と EDR のパススルー。ハードウェアデコードは切替可能。' },
            { title: 'ディスクイメージ', description: 'ISO の Blu-ray / DVD イメージを直接再生。' },
            { title: '再生コントロール', description: 'A-B ループ、再生速度、フレームステップ、チャプター、スクリーンショット。' },
            { title: 'プレイリストと履歴', description: 'ドラッグで並べ替えるプレイリスト、続きから再生、ブックマーク。' },
            { title: 'ミニウィンドウ', description: '常に最前面のフローティング・ミニプレイヤーでマルチタスクに。' },
          ],
        },
        {
          title: 'ストリーミング',
          items: [
            { title: 'WebDAV と SMB', description: 'NAS の閲覧とストリーミング —— macOS ネイティブの SMB マウントにも対応。' },
            { title: 'FTP', description: '内蔵 FTP クライアント。ディレクトリ閲覧と直接ストリーミング。' },
            { title: 'Emby と Jellyfin', description: 'ログインしてライブラリを閲覧、トランスコードなしで直接ストリーミング。' },
            { title: 'HTTP と HLS', description: 'リンクと m3u8/HLS ストリームの再生。先読みバッファは調整可能。' },
          ],
        },
        {
          title: '字幕とツール',
          items: [
            { title: '自動字幕ロード', description: '一致するサイドカーは自動ロード、それ以外は必要なときに。' },
            { title: 'ライブスタイル', description: 'フォント・サイズ・色・位置 —— 見ながら調整。' },
            { title: 'イコライザーと録画', description: 'オーディオイコライザーと、アーカイブ用のストリーム録画。' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'BrushLLM は開発者とクリエイター両方のための AI 製品を開発 —— 強力な AI モデルへの統一 API と、画像・動画・メディア向けの無料ローカルファースト・デスクトップアプリ。',
      eyebrow: '概要',
      title: '開発者とクリエイターのための',
      titleBand: 'AI 製品',
      intro: 'BrushLLM は開発者とクリエイター両方のための AI 製品を開発しています。ひとつのプラットフォーム、ひとつのアカウント —— どちら側にも同じ約束を：シンプルなツール、公開された価格、設計から組み込まれたプライバシー。',
      forDevelopers: '開発者へ。',
      forDevelopersText: '{link} —— 強力な AI モデルへの統一 API。DeepSeek・Qwen・GLM・Kimi・MiniMax・OpenAI など {count} モデルが、ひとつの OpenAI 互換エンドポイントの向こうに。',
      forDevelopersLink: 'AI モデルサービス',
      forCreators: 'クリエイターへ。',
      forCreatorsText: '{link} —— macOS と Windows 向けの無料ローカルファースト・デスクトップアプリ。Image Studio は無料のローカルツールと同じ API 上の AI 編集を組み合わせ、3 つすべてがオープンソースでテレメトリゼロです。',
      forCreatorsLink: 'Image Studio・Video Studio・Player',
      values: [
        { title: '世界へ開かれて', description: '最先端の AI に、別々のアカウントも、ローカル決済のハードルも、地域ロックも —— そして法外な値段も必要ないはず。登録は一度、米ドル建て、どの国からでも' },
        { title: 'ひとつのプラットフォーム、ひとつのアカウント', description: 'ひとつのプラットフォーム、ひとつのアカウント、一枚の請求。統合にコーヒー 1 杯より時間がかかるなら、それは私たちのバグであってあなたの問題ではありません' },
        { title: '正直な価格', description: '公開されたトークン単価、サブスクの罠なし、無料ティアはずっと無料。リクエスト 1 回のコストを常に把握できます' },
        { title: '設計されたプライバシー', description: 'アカウントの運営に必要な情報のみを収集。トラッカーなし・アナリティクスなし・広告なし —— プロンプトが保存・販売・プロファイリングに使われることはありません' },
      ],
      familyTitle: 'BrushLLM ファミリー',
      familyText: 'ひとつのプラットフォーム、2 つのトラック —— 開発者のための統一 API と、クリエイターのための無料ローカルファースト・デスクトップアプリのファミリー。',
      familyApiTitle: 'AI モデルサービス',
      familyApiText: 'ひとつの OpenAI 互換エンドポイントに {count} モデル・{providers} プロバイダー —— トークンまたは枚単位の支払い。',
      contactTitle: 'お問い合わせ',
      contactText: 'ご質問、ボリューム料金、追加してほしいモデル —— すべて目を通しています',
      contactCta: 'はじめる',
    },

    notFound: {
      metaDescription: 'このページは見つかりませんでした。',
      code: '404 · CANVAS の外',
      title: 'このページは塗り直されました',
      text: 'リンクが古いか、ページが移動した可能性があります。けれどモデルたちは、あなたが離れた場所にちゃんといます。',
      backHome: 'ホームへ戻る',
      browseModels: 'モデルを閲覧',
    },
  },
};

export default ja;
