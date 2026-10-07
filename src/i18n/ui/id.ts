/**
 * Bahasa Indonesia. Struktur identik dengan en.ts (dijamin oleh tipe Dictionary).
 * Placeholder {count}/{year}/{pct} tetap ada dan diganti saat render.
 * Tidak diterjemahkan: id model, URL, contoh kode, harga, identifikasi lisensi, nama produk.
 */
import type { Dictionary } from '../index';

const id: Dictionary = {
  site: {
    title: 'BrushLLM — AI-mu, tanpa kerumitan',
    description: 'Akses model AI yang kuat melalui satu API, dan berkarya dengan aplikasi desktop gratis yang mengutamakan lokal. BrushLLM adalah platform AI untuk pengembang dan kreator.',
    organizationDescription: 'BrushLLM adalah platform AI untuk pengembang dan kreator, menawarkan Layanan Model AI (satu API untuk model AI yang kuat) serta aplikasi desktop gratis yang mengutamakan lokal —— Image Studio, Video Studio, dan Player.',
  },

  nav: {
    models: 'Model AI',
    apps: 'Aplikasi',
    pricing: 'Harga',
    docs: 'Dokumentasi',
    about: 'Tentang',
  },

  header: {
    home: 'BrushLLM beranda',
    mainNav: 'Navigasi utama',
    mobileNav: 'Navigasi seluler',
    logIn: 'Masuk',
    getStarted: 'Mulai',
    toggleMenu: 'Buka/tutup menu',
  },

  languageSwitcher: {
    label: 'Bahasa',
    system: 'Sistem',
    systemTitle: 'Ikuti bahasa peramban',
  },

  appPage: {
    openSourceTitle: 'Open source, perangkat lunak yang jujur',
    openSourceText: 'Kode sumber, isu, dan rilis ada di GitHub{license}. Tanpa telemetri, tanpa akun, tanpa iklan.',
  },

  footer: {
    blurb: 'BrushLLM —— AI untuk pengembang dan kreator. Model AI yang kuat melalui satu API, plus aplikasi desktop gratis yang mengutamakan lokal. Kami melindungi privasimu: tanpa pelacak, tanpa analitik, tanpa iklan.',
    tagline: 'Satu API · Tiga aplikasi gratis · Privasi utama',
    product: 'Produk',
    console: 'Konsol',
    company: 'Perusahaan',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: 'Tentang BrushLLM',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: 'Ditenagai gateway yang kompatibel dengan OpenAI',
  },

  common: {
    download: 'Unduh',
    github: 'GitHub',
    tryIt: 'Coba',
    featured: 'Unggulan',
    free: 'Gratis',
    copy: 'Salin',
    copied: 'Tersalin!',
    copyFallback: 'Tekan ⌘C',
    learnMore: 'Selengkapnya',
    learnMoreArrow: 'Selengkapnya →',
    downloadArrow: 'Unduh ↗',
    exploreAiModels: 'Jelajahi model AI',
    exploreTheApps: 'Jelajahi aplikasi',
    exploreTheApi: 'Jelajahi API',
    browseModels: 'Lihat model',
    openTheConsole: 'Buka konsol',
    readTheDocs: 'Baca dokumentasi',
  },

  data: {
    capability: {
      chat: 'Obrolan',
      reasoning: 'Penalaran',
      tools: 'Pemanggilan alat',
      vision: 'Visi',
      'long-context': 'Konteks panjang',
      image: 'Teks-ke-gambar',
    },
    apps: {
      'image-studio': {
        tagline: 'Kotak alat gambar AI yang mengutamakan lokal',
        description: 'Kotak alat gambar desktop gratis. Penyuntingan sehari-hari —— konversi, kompresi, pemotongan, tanda air, EXIF —— berjalan sepenuhnya di perangkatmu; fitur AI seperti penghapusan latar dan isian generatif melewati gateway BrushLLM, ditagih per gambar.',
        highlights: ['25+ alat lokal', 'Penyuntingan AI via API BrushLLM', '9 bahasa', 'Nol telemetri'],
      },
      'video-studio': {
        tagline: 'Kotak alat lokal untuk video, audio, dan takarir',
        description: 'Kotak alat gratis dan luring untuk memproses video, audio, dan takarir. Konversi, kompresi, penggabungan, pemangkasan, normalisasi loudness, perbaikan enkode takarir —— pemrosesan 100% lokal, nol permintaan jaringan.',
        highlights: ['25+ alat', 'Pemrosesan 100% lokal', '9 bahasa', 'Nol permintaan jaringan'],
      },
      player: {
        tagline: 'Pemutar media open source berbasis mpv',
        description: 'Pemutar media open source lintas platform. Setiap format yang diputar mpv, plus streaming dari WebDAV, SMB, FTP, Emby, dan Jellyfin —— dengan keluaran HDR, dekode perangkat keras, dan antarmuka 9 bahasa.',
        highlights: ['Semua format via mpv', 'WebDAV · SMB · Emby · Jellyfin', 'HDR dan dekode perangkat keras', '9 bahasa'],
      },
    },
    models: {
      'gpt-5.2': 'Andalan ChatGPT —— penalaran umum, visi, dan penggunaan alat yang sangat kuat.',
      'gpt-5.2-mini': 'Tingkat ChatGPT yang cepat dan murah untuk obrolan bervolume tinggi, klasifikasi, dan ekstraksi.',
      'deepseek-chat': 'Model andalan tanpa mode berpikir. Cepat, murah, dan sangat baik untuk obrolan umum dan penggunaan alat.',
      'deepseek-reasoner': 'Model penalaran dengan rantai pemikiran yang terlihat untuk matematika, kode, dan masalah sulit.',
      'glm-4.6': 'Andalan Z.ai. Kuat dalam pemrograman, penulisan, dan perencanaan agentic; konteks 200K.',
      'glm-4.5-air': 'GLM yang lebih ringan, disetel untuk lalu lintas produksi yang peka biaya.',
      'glm-4.5-flash': 'Tingkat gratis keluarga GLM —— cocok untuk prototipe dan proyek hobi.',
      'qwen3-max': 'Model andalan terbesar Alibaba. Kualitas kelas atas untuk beban agentic dan obrolan yang menuntut.',
      'qwen3-235b-a22b': 'Model andalan MoE bobot terbuka dengan mode berpikir hibrida.',
      'qwen3-32b': 'Model serba bisa berbobot terbuka dengan mode berpikir dan non-berpikir.',
      'qwen3-coder-plus': 'Model khusus kode untuk alat pemrograman agentic dan penyuntingan skala repositori.',
      'qwen-vl-max': 'Model visi-bahasa untuk pemahaman gambar, OCR, dan penalaran grafik.',
      'kimi-k2-0905': 'MoE triliun parameter yang disetel untuk penggunaan alat agentic dan dokumen panjang.',
      'kimi-k2-thinking': 'Varian penalaran K2 dengan pemikiran berselang untuk tugas multi-langkah.',
      'MiniMax-M2': 'MoE agentic yang efisien —— favorit agen pemrograman dengan anggaran ketat.',
      'gpt-image-2': 'Model pembuatan gambar OpenAI —— teks-ke-gambar dengan kepatuhan instruksi yang kuat.',
    },
  },

  pages: {
    home: {
      metaDescription: 'Akses model AI yang kuat melalui satu API, dan berkarya dengan aplikasi desktop gratis yang mengutamakan lokal.',
      heroBadge: 'Untuk pengembang · Untuk kreator',
      heroTitle: 'AI-mu,',
      heroTitleBand: 'tanpa kerumitan',
      heroSubtitle: 'Model AI yang kuat melalui satu API, dan berkarya dengan aplikasi lokal gratis',
      heroCtaApi: 'Dapatkan Kunci API',
      heroCtaApps: 'Aplikasi Desktop',
      heroNote: 'Satu akun untuk seluruh platform',

      platformEyebrow: 'Satu platform',
      platformTitle: 'Satu platform untuk pengembang dan kreator',
      platformIntro: 'BrushLLM adalah satu platform untuk pengembang dan kreator: akses API terpadu ke model AI yang kuat melalui {modelsLink}, plus keluarga {appsLink} —— fitur AI Image Studio ditagih melalui API yang sama.',
      platformModelsLink: 'Layanan Model AI',
      platformAppsLink: 'aplikasi desktop gratis yang mengutamakan lokal',

      apiCardBadge: 'Untuk pengembang',
      apiCardTitle: 'Layanan Model AI',
      apiCardSubtitle: 'Satu API untuk model AI yang kuat',
      apiCardDescription: 'Akses model AI yang kuat melalui satu API —— {count} model, {providers} penyedia, terpadu dan berbasis penggunaan.',
      apiCardBullets: [
        'Endpoint terpadu yang kompatibel dengan OpenAI',
        'Model obrolan, penalaran, visi, dan gambar',
        'Harga terpublikasi, bayar sesuai pemakaian, tingkat gratis',
      ],
      apiCardChips: { models: 'Model', pricing: 'Harga', docs: 'Dok', console: 'Konsol' },
      apiCardCta: 'Jelajahi model AI',
      apiCardSecondary: 'Baca dokumentasi',

      appsCardBadge: 'Untuk kreator · Aplikasi gratis',
      appsCardTitle: 'Aplikasi Desktop',
      appsCardSubtitle: 'Alat gratis yang mengutamakan lokal untuk kerja sehari-hari',
      appsCardDescription: 'Image Studio, Video Studio, dan Player —— aplikasi desktop open source untuk macOS dan Windows, nol telemetri. Fitur AI Image Studio berjalan di API yang sama.',
      appsCardNote: 'Open source · macOS · Windows',
      appsCardCta: 'Jelajahi aplikasi',

      appsSectionEyebrow: 'Aplikasi',
      appsSectionTitle: 'Aplikasi gratis yang mengutamakan lokal,',
      appsSectionTitleBand: 'dibangun di satu platform',
      appsSectionFooter: 'Detail, tangkapan layar, dan penginstal ada di {link}',
      appsSectionFooterLink: 'halaman aplikasi →',

      benefitsEyebrow: 'Mengapa API kami',
      benefitsTitle: 'Semua yang kamu butuhkan,',
      benefitsTitleBand: 'tanpa yang tidak perlu',
      benefitsSubtitle: 'Alat sederhana dan jujur untuk membangun dengan model AI',
      benefits: [
        { title: 'API terpadu', description: 'Satu endpoint kompatibel OpenAI untuk semua model. Pertahankan SDK-mu —— ubah satu baris dan rilis' },
        { title: 'Model beragam', description: 'Model obrolan, penalaran, visi, dan gambar dari laboratorium terkemuka —— {count} model dalam satu katalog' },
        { title: 'Integrasi sederhana', description: 'Cocok dengan SDK OpenAI mana pun. Salin, tempel, jalankan —— dalam cURL, Python, Node.js, atau Go' },
        { title: 'Harga berbasis pemakaian', description: 'Bayar sesuai pemakaian —— per token atau per gambar, dalam USD. Tanpa langganan, dan tingkat gratis untuk memulai' },
      ],

      statsEyebrow: 'Model yang tersedia, satu API',
      stats: { providers: 'Penyedia AI', models: 'Model, satu katalog', account: 'Akun', countries: 'Negara yang dilayani' },
      statsCompare: 'Tarif total kami mengalahkan OpenRouter pada 7 perbandingan langsung —— {link}',
      statsCompareLink: 'lihat perbandingannya →',

      howEyebrow: 'Cara kerja',
      howTitle: 'Tiga langkah ke token pertamamu',
      howSteps: [
        { title: 'Buat akun', description: 'Daftar dengan email dan ambil kunci API dari konsol. Tanpa kartu kredit untuk memulai' },
        { title: 'Arahkan SDK-mu ke BrushLLM', description: 'Atur base URL dan pertahankan SDK OpenAI yang sudah kamu pakai' },
        { title: 'Panggil model mana pun lewat id', description: 'Ganti id model dengan bebas —— seluruh katalog hanya satu kunci lagi' },
      ],
      howCodeTitle: 'Pertahankan kodemu, ubah satu baris',
      howCodeSubtitle: 'Jika berjalan dengan API OpenAI, ia berjalan dengan BrushLLM —— permintaan yang sama dalam empat bahasa.',

      faqEyebrow: 'FAQ',
      faqTitle: 'Pertanyaan, terjawab',
      faqDevelopers: 'Untuk pengembang',
      faqCreators: 'Untuk kreator',
      developerFaqs: [
        {
          question: 'Apa itu BrushLLM?',
          answer: 'BrushLLM adalah platform AI untuk pengembang dan kreator. Layanan Model AI memberi pengembang satu API untuk model yang kuat, dan keluarga aplikasi desktop gratis yang mengutamakan lokal —— Image Studio, Video Studio, dan Player —— meng-cover sisi kreator. Satu akun mencakup seluruh platform.',
        },
        {
          question: 'Bagaimana API bekerja?',
          answer: 'Arahkan SDK OpenAI mana pun ke {apiBase} dan gunakan kunci BrushLLM-mu. Penyelesaian obrolan, pemanggilan alat, dan streaming bekerja seperti yang sudah kamu harapkan.',
        },
        {
          question: 'Model AI apa saja yang tersedia?',
          answer: 'Katalog mencakup {count} model dari DeepSeek, Qwen, GLM, Kimi, MiniMax, dan OpenAI —— obrolan, penalaran, visi, dan teks-ke-gambar. Daftar lengkap dengan harga langsung ada di halaman Model.',
        },
        {
          question: 'Apakah API kompatibel dengan OpenAI?',
          answer: 'Ya, sepenuhnya. Apa yang berjalan dengan API OpenAI, berjalan dengan BrushLLM —— termasuk agen pemrograman dan CLI seperti Cursor, Cline, OpenCode, dan aider.',
        },
        {
          question: 'Bagaimana pemakaian ditagih?',
          answer: 'Murni bayar sesuai pemakaian dalam USD —— per token untuk model teks, per gambar untuk model gambar. Tanpa langganan atau minimum; beberapa model punya tingkat gratis.',
        },
        {
          question: 'Apakah BrushLLM cocok untuk startup dan bisnis?',
          answer: 'Ya. Satu endpoint mencakup semua penyedia, harga berbasis pemakaian tumbuh bersamamu, setiap kunci punya batas belanjanya sendiri, dan diskon volume tersedia untuk penggunaan terkomitmen.',
        },
        {
          question: 'Bagaimana kalian melindungi privasi saya?',
          answer: 'Kami hanya mengumpulkan yang dibutuhkan akun agar berfungsi. Tanpa pelacak, tanpa analitik, tanpa iklan —— prompt-mu diteruskan langsung ke model hulu dan tidak pernah disimpan, dijual, atau dipakai untuk memprofilkanmu.',
        },
      ],
      creatorFaqs: [
        {
          question: 'Apa itu Image Studio?',
          answer: 'Image Studio adalah kotak alat gambar desktop gratis dari BrushLLM. Alat sehari-hari —— konversi, kompresi, pemotongan, EXIF —— berjalan lokal dan luring; fitur AI seperti penghapusan latar dan isian generatif melewati API BrushLLM, ditagih per gambar.',
        },
        {
          question: 'Apa yang bisa saya lakukan dengan Image Studio?',
          answer: 'Konversi, kompresi, potong, dan rapikan gambar dengan alat lokal gratis —— lalu buat, hapus latar, hapus objek, isi, dan ubah gaya dengan AI, ditagih per gambar.',
        },
        {
          question: 'Bisakah saya menyunting gambar yang sudah ada?',
          answer: 'Bisa. Buka gambar apa pun, pilih area atau seluruh kanvas, dan jelaskan perubahannya —— inpainting dan penghapusan latar sudah terpasang.',
        },
        {
          question: 'Bisakah saya membuat dan mengubah gambar?',
          answer: 'Bisa —— pembuatan teks-ke-gambar dan pengubahan gaya berjalan di ruang kerja yang sama, didukung GPT-Image melalui API BrushLLM.',
        },
        {
          question: 'Di mana saya mendapatkan aplikasinya?',
          answer: 'Ketiga aplikasi —— Image Studio, Video Studio, dan Player —— sudah tersedia dari rilis GitHub BrushLLM, untuk macOS (Apple Silicon) dan Windows.',
        },
        {
          question: 'Apakah aplikasinya benar-benar gratis?',
          answer: 'Ya. Semua alat lokal gratis dan kode sumbernya ada di GitHub. Hanya fitur AI di Image Studio yang menggunakan API BrushLLM bayar-sesuai-pemakaian.',
        },
      ],

      ctaBuildTitle: 'Bangun dengan AI',
      ctaBuildText: 'Satu API untuk {count} model —— terpadu, berbasis pemakaian, kompatibel OpenAI',
      ctaCreateTitle: 'Berkarya dengan AI',
      ctaCreateText: 'Aplikasi desktop gratis yang mengutamakan lokal —— buat dan sunting gambar, video, dan media, dengan kekuatan super AI di Image Studio',
    },

    models: {
      metaDescription: 'Jelajahi {count} model AI —— dari DeepSeek, Qwen, GLM, dan Kimi hingga GPT dan teks-ke-gambar —— dengan jendela konteks, kapabilitas, dan harga indikatif.',
      eyebrow: 'Model AI',
      title: '{count} model · {providers} penyedia ·',
      titleBand: 'Satu endpoint',
      intro: 'Setiap model di bawah ini dapat dipanggil melalui API yang sama yang kompatibel dengan OpenAI dan kunci yang sama. Harga bersifat indikatif —— USD per 1M token untuk model teks, USD per gambar untuk model gambar{free}.',
      introFree: ' —— {count} model gratis',
      searchPlaceholder: 'Cari berdasarkan nama, id, atau penyedia…',
      searchLabel: 'Cari model',
      providerLabel: 'Penyedia',
      providerGroup: 'Filter berdasarkan penyedia',
      capabilityLabel: 'Kapabilitas',
      capabilityGroup: 'Filter berdasarkan kapabilitas',
      all: 'Semua',
      showing: 'Menampilkan {visible} dari {total} model',
      empty: 'Tidak ada model yang cocok dengan filtermu. Coba kata kunci, penyedia, kapabilitas, atau kasus penggunaan lain.',
      footnote: 'Harga adalah harga daftar indikatif dalam USD —— per 1M token untuk model teks, per gambar yang dihasilkan untuk model gambar —— dan dapat berbeda dari tarif yang dikonfigurasi di konsolmu. Jendela konteks adalah maksimum yang didukung tiap model hulu. Lihat {docsLink} untuk detail integrasi.',
      footnoteDocsLink: 'dokumentasi',
      card: { type: 'Tipe', perImage: 'Per gambar', output: 'Keluaran', context: 'Konteks', input: 'Masukan / 1M', outputPer1M: 'Keluaran / 1M' },
    },

    pricing: {
      metaDescription: 'Harga bayar-sesuai-pemakaian yang sederhana untuk semua model di BrushLLM —— harga token indikatif dalam USD, dengan beberapa tingkat gratis.',
      eyebrow: 'Harga',
      title: 'Bayar sesuai pemakaianmu,',
      titleBand: 'sesederhana itu',
      intro: 'Model teks ditagih per token, model gambar per gambar yang dihasilkan —— semuanya dalam USD, tanpa langganan atau minimum. Yang kamu lihat di bawah adalah tarif katalog indikatif; tarif pastimu dan saldo ada di konsol.',
      highlights: [
        { title: 'Hanya bayar-sesuai-pemakaian', description: 'Penagihan per token dalam USD. Tanpa langganan, tanpa minimum, tanpa trik markup —— isi dan langsung pakai' },
        { title: '{count} model gratis', description: 'GLM-4.5 Flash tidak berbiaya —— sempurna untuk prototipe dan aplikasi hobi' },
        { title: 'Diskon volume', description: 'Volume serius? Hubungi kami dan kami susun tarif penggunaan terkomitmen untuk beban kerjamu' },
      ],
      textModelsTitle: 'Model teks —— per token',
      imageModelsTitle: 'Model gambar —— per gambar',
      table: { model: 'Model', provider: 'Penyedia', context: 'Konteks', input: 'Masukan / 1M', output: 'Keluaran / 1M', resolution: 'Resolusi', pricePerImage: 'Harga / gambar' },
      footnote: 'Harga adalah harga daftar indikatif dalam USD —— per 1M token untuk model teks, per gambar yang dihasilkan untuk model gambar. Penagihan aktual terjadi di konsolmu, tempat kamu juga bisa melacak pengeluaran per kunci API.',
      compareEyebrow: 'Cek harga',
      compareTitle: 'Model yang sama,',
      compareTitleBand: 'tagihan akhir lebih kecil',
      compareIntro: 'OpenRouter menambahkan biaya pembayaran saat membeli kredit —— 5,5% via kartu —— di atas harga daftar tiap model. Tarif yang dipublikasikan BrushLLM adalah tarif akhir yang kamu bayar.',
      compareTable: {
        model: 'Model',
        ours: 'BrushLLM mas/kel per 1M',
        orList: 'OpenRouter daftar mas/kel',
        orAllIn: 'OpenRouter total* mas/kel',
        youSave: 'Hemat',
        upTo: 'hingga {pct}%',
      },
      compareFootnote: '*Total = harga daftar OpenRouter ditambah biaya pembelian kredit 5,5% (Stripe; kripto 5%). Penghematan membandingkan tarif akhir BrushLLM dengan tarif total OpenRouter. Harga daftar OpenRouter via API publik mereka, diambil Sep 2026 —— indikatif; verifikasi tarif terkini di kedua platform.',
      ctaTitle: 'Cek saldo & tarifmu',
      ctaText: 'Isi ulang, atur kuota kunci, dan pantau pemakaian secara real-time —— semua di konsol',
    },

    docs: {
      metaDescription: 'Panduan mulai cepat API BrushLLM —— autentikasi, base URL kompatibel OpenAI, contoh SDK dalam empat bahasa, dan daftar lengkap id model.',
      eyebrow: 'Dokumentasi',
      title: 'Mulai cepat,',
      titleBand: 'secepat sapuan kuas',
      intro: 'BrushLLM adalah gateway yang kompatibel dengan OpenAI. Jika kamu pernah memanggil API OpenAI, kamu sudah tahu cara memanggil BrushLLM —— inilah versi tiga puluh detiknya.',
      toc: { quickstart: 'Mulai cepat', firstRequest: 'Permintaan pertama', modelIds: 'Id model', errors: 'Galat' },
      tocLabel: 'Bagian dokumentasi',
      steps: [
        {
          title: 'Dapatkan kunci API',
          description: '{createLink} atau {signInLink} ke konsol, lalu buat kunci. Kunci berbentuk {code} —— perlakukan seperti kata sandi dan atur kuota belanja jika kamu menyerahkannya ke alat',
          createLink: 'Buat akun',
          signInLink: 'masuk',
        },
        {
          title: 'Atur base URL dan kunci',
          description: 'Arahkan SDK OpenAI mana pun ke endpoint kami:',
          baseUrlLabel: 'base_url',
        },
        {
          title: 'Panggil model mana pun lewat id',
          description: 'Kirim salah satu id dari tabel di bawah sebagai {code}. Itu saja —— kamu sudah memanggil model dari laboratorium AI terkemuka',
        },
      ],
      firstRequestTitle: 'Permintaan pertamamu',
      firstRequestText: 'Permintaan yang sama dalam empat bahasa —— termasuk streaming. Salin, tempel, jalankan',
      modelIdsTitle: 'Id model',
      modelIdsText: 'Gunakan id ini secara persis (peka huruf besar/kecil). Deskripsi dan kapabilitas ada di {modelsLink}. Model gambar dipanggil via {code} dengan kunci API yang sama.',
      modelIdsModelsLink: 'halaman model',
      modelIdsTable: { id: 'Id model', name: 'Nama tampilan', context: 'Konteks' },
      errorsTitle: 'Galat',
      errorsTable: { status: 'Status', meaning: 'Arti', fix: 'Yang dilakukan' },
      errors: [
        { meaning: 'Kunci API tidak valid atau hilang', fix: 'Periksa bahwa kuncimu berawalan “brsh-” dan belum dicabut di konsol.' },
        { meaning: 'Id model tidak dikenal', fix: 'Gunakan id persis seperti tercantum di tabel di atas —— peka huruf besar/kecil.' },
        { meaning: 'Batas laju atau kuota terlampaui', fix: 'Tunggu dan coba lagi dengan backoff, atau naikkan kuota kunci ini di konsol.' },
        { meaning: 'Saldo tidak cukup', fix: 'Isi ulang akunmu di konsol dan ulangi permintaan.' },
        { meaning: 'Galat penyedia hulu', fix: 'Coba lagi setelah beberapa detik; jika berlanjut, ganti id model lain atau hubungi dukungan.' },
      ],
      helpTitle: 'Kehilangan arah?',
      helpText: 'Periksa konsol untuk kunci, kuota, dan penagihan, atau email kami di {email}',
    },

    apps: {
      metaDescription: 'Aplikasi desktop BrushLLM —— Image Studio, Video Studio, dan Player. Gratis, mengutamakan lokal, open source, untuk macOS dan Windows.',
      eyebrow: 'Aplikasi',
      title: 'Aplikasi gratis yang mengutamakan lokal,',
      titleBand: 'open source',
      intro: 'Tiga alat desktop untuk macOS dan Windows —— nol telemetri, nol akun, tanpa iklan. Fitur AI Image Studio terhubung langsung ke API BrushLLM.',
      apiTitle: 'API di balik fitur AI',
      apiText: 'Alat AI Image Studio berjalan di gateway BrushLLM —— satu endpoint kompatibel OpenAI, tarif per gambar yang dipublikasikan.',
    },

    studio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Aplikasi desktop · Gratis + AI bayar sesuai pemakaian',
      intro: 'Setiap alat lokal gratis dan berjalan sepenuhnya di perangkatmu —— mesin Rust, tanpa unggahan. Fitur AI memanggil {apiLink} yang sama yang menyalakan seluruh platform, ditagih per gambar sesuai {ratesLink}.',
      introApiLink: 'API BrushLLM',
      introRatesLink: 'tarif yang dipublikasikan',
      outro: 'Lihat model gambar di balik alat AI →',
      groups: [
        {
          title: 'Alat lokal —— gratis, luring, privat',
          items: [
            { title: 'Konversi & kompresi', description: '8 format masukan ke 8 format keluaran (termasuk AVIF dan WebP), dengan resampling Lanczos dan kontrol kualitas.' },
            { title: 'Ubah ukuran, potong & putar', description: 'Alat geometri yang ramah batch dengan dimensi piksel presisi dan preset rasio.' },
            { title: 'Tanda air & anotasi', description: 'Tanda air teks dan gambar, panah, kotak, dan anotasi bebas untuk tangkapan layar dan dokumen.' },
            { title: 'EXIF: lihat, sunting & hapus', description: 'Periksa metadata lengkap, tulis ulang bidang, atau hapus lokasi dan data kamera sebelum membagikan.' },
            { title: 'Gabung, mozaik & bayangan', description: 'Gabungkan gambar menjadi kisi, pikselkan wilayah, tambahkan sudut membulat dan drop shadow.' },
            { title: 'Alat warna', description: 'Kecerahan, kontras, dan saturasi, penggantian warna, serta color picker dengan pembesar.' },
          ],
        },
        {
          title: 'Alat AI —— didukung gateway BrushLLM',
          items: [
            { title: 'Buat gambar', description: 'Teks-ke-gambar dengan GPT-Image —— ditagih per gambar yang dihasilkan, tanpa langganan.' },
            { title: 'Hapus latar', description: 'Pemotongan sekali klik dengan tepi bersih, langsung dari desktopmu.' },
            { title: 'Hapus objek & tanda air', description: 'Pilih wilayah dan jelaskan apa yang harus hilang —— inpainting mengisinya.' },
            { title: 'Isian generatif', description: 'Perluas, ganti, atau tukar konten dengan gambar referensi opsional (mis. tukar orang).' },
            { title: 'Ubah gaya', description: 'Lukis ulang gambar dengan gaya baru dengan tetap menjaga komposisi dan identitas.' },
            { title: 'Kuncimu, kuotamu', description: 'Kunci API tersimpan di keychain OS; tiap kunci membawa kuota belanja sendiri dari konsol.' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Aplikasi desktop · Gratis',
      intro: 'Pemrosesan 100% lokal —— mediamu tidak pernah meninggalkan mesin. Biner FFmpeg dikunci versi dan terverifikasi SHA-256, mesin menjalankan antrean tugas yang bisa dijeda, dan 175 uji otomatis menjaga kotak alat tetap jujur.',
      groups: [
        {
          title: 'Video',
          items: [
            { title: 'Konversi', description: 'MP4, MKV, WebM, MOV, dan AVI dengan codec H.264, H.265, VP9, atau AV1.' },
            { title: 'Kompresi', description: 'Kompresi berbasis kualitas (CRF) atau bitrate target dengan estimasi ukuran langsung.' },
            { title: 'Gabung & pangkas', description: 'Sambungkan klip berurutan, potong segmen dengan titik masuk/keluar presisi frame.' },
            { title: 'Potong, skala & putar', description: 'Perbaikan geometri untuk rekaman salah orientasi atau berbingkai.' },
            { title: 'Ubah kecepatan', description: 'Kecepatan pemutaran 0,25× hingga 4× dengan koreksi nada audio.' },
            { title: 'Frame, GIF & WebP', description: 'Ekstrak frame diam, atau ubah klip menjadi GIF/WebP animasi.' },
          ],
        },
        {
          title: 'Audio',
          items: [
            { title: 'Ekstrak & konversi', description: 'Tarik audio ke MP3, M4A, FLAC, WAV, OGG, atau Opus.' },
            { title: 'Normalisasi loudness', description: 'Normalisasi EBU R128 untuk volume konsisten antar file.' },
            { title: 'Volume & gain', description: 'Naikkan atau turunkan tanpa mengekode ulang video bila memungkinkan.' },
            { title: 'Bisukan atau ganti', description: 'Buang trek audio, atau pasang soundtrack baru.' },
            { title: 'Pangkas', description: 'Potong segmen audio dengan presisi masuk/keluar yang sama seperti video.' },
          ],
        },
        {
          title: 'Takarir',
          items: [
            { title: 'Sematkan atau bakar', description: 'Lampirkan trek takarir lunak, atau bakar permanen ke gambar.' },
            { title: 'Konversi format', description: 'SRT, VTT, ASS, SSA, dan TTML —— dengan mesin takarir tanpa dependensi.' },
            { title: 'Perbaiki enkode', description: 'Perbaiki otomatis file GBK/Big5 lama menjadi UTF-8 bersih.' },
            { title: 'Geser waktu', description: 'Maju atau mundurkan takarir secara massal, tersinkron dengan videomu.' },
            { title: 'Ekstrak', description: 'Tarik trek takarir yang ada dari kontainer mana pun.' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Aplikasi desktop · Open source',
      intro: 'Aplikasi macOS adalah build Swift + SwiftUI native di sekitar libmpv; aplikasi Windows adalah penulisan ulang Tauri dengan inti mpv yang sama. Nol telemetri, pembaruan hanya diperiksa saat kamu meminta.',
      groups: [
        {
          title: 'Pemutaran',
          items: [
            { title: 'Semua format', description: 'Berbasis mpv: MKV, MP4, AVI, MOV, WebM, FLAC, MP3, dan semua yang diputar mpv.' },
            { title: 'Keluaran HDR', description: 'Pass-through PQ dan EDR pada layar yang didukung, dengan dekode perangkat keras yang bisa diaktifkan.' },
            { title: 'Citra cakram', description: 'Putar citra ISO Blu-ray dan DVD secara langsung.' },
            { title: 'Kontrol', description: 'Loop A-B, kecepatan pemutaran, langkah frame, bab, dan tangkapan layar.' },
            { title: 'Daftar putar & riwayat', description: 'Daftar putar yang diurutkan dengan seret, lanjutkan dari terakhir kali, penanda.' },
            { title: 'Jendela mini', description: 'Pemutar mini mengambang yang selalu di atas untuk multitasking.' },
          ],
        },
        {
          title: 'Streaming',
          items: [
            { title: 'WebDAV & SMB', description: 'Jelajahi dan streaming dari NAS-mu —— termasuk pemasangan SMB native macOS.' },
            { title: 'FTP', description: 'Klien FTP bawaan dengan penelusuran direktori dan streaming langsung.' },
            { title: 'Emby & Jellyfin', description: 'Masuk, telusuri pustaka, dan streaming langsung tanpa transcoding.' },
            { title: 'HTTP & HLS', description: 'Putar tautan dan stream m3u8/HLS dengan buffer read-ahead yang dapat diatur.' },
          ],
        },
        {
          title: 'Takarir & alat',
          items: [
            { title: 'Takarir termuat otomatis', description: 'File pendamping yang cocok termuat otomatis; yang eksternal sesuai permintaan.' },
            { title: 'Penataan gaya langsung', description: 'Font, ukuran, warna, dan posisi —— ditata ulang saat kamu menonton.' },
            { title: 'Ekualiser & perekaman', description: 'Ekualiser audio, plus perekaman stream untuk pengarsipan.' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'BrushLLM membangun produk AI untuk pengembang dan kreator —— API terpadu untuk model AI yang kuat serta aplikasi desktop gratis yang mengutamakan lokal untuk gambar, video, dan media.',
      eyebrow: 'Tentang',
      title: 'Produk AI untuk',
      titleBand: 'pengembang dan kreator',
      intro: 'BrushLLM membangun produk AI untuk pengembang dan kreator. Satu platform, satu akun —— dan janji yang sama di keduanya: alat sederhana, harga terpublikasi, privasi sejak desain.',
      forDevelopers: 'Untuk pengembang.',
      forDevelopersText: '{link} —— API terpadu untuk mengakses model AI yang kuat. {count} model dari DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI, dan lainnya, di belakang satu endpoint kompatibel OpenAI.',
      forDevelopersLink: 'Layanan Model AI',
      forCreators: 'Untuk kreator.',
      forCreatorsText: '{link} —— aplikasi desktop gratis yang mengutamakan lokal untuk macOS dan Windows. Image Studio memadukan alat lokal gratis dengan penyuntingan AI melalui API yang sama; ketiganya open source tanpa telemetri.',
      forCreatorsLink: 'Image Studio, Video Studio, dan Player',
      values: [
        { title: 'Terbuka untuk dunia', description: 'AI mutakhir tidak seharusnya butuh akun terpisah, rintangan pembayaran lokal, atau kunci regional —— dan tidak seharusnya mahal. Satu pendaftaran, dalam USD, dari negara mana pun' },
        { title: 'Satu platform, satu akun', description: 'Satu platform, satu akun, satu tagihan. Jika integrasi dengan kami memakan waktu lebih lama dari rehat kopi, itu bug kami, bukan masalahmu' },
        { title: 'Harga jujur', description: 'Tarif per token yang terpublikasi, tanpa jebakan langganan, dan tingkat gratis yang tetap gratis. Kamu selalu tahu berapa biaya sebuah permintaan' },
        { title: 'Privasi sejak desain', description: 'Kami hanya mengumpulkan yang dibutuhkan akun agar berfungsi. Tanpa pelacak, tanpa analitik, tanpa iklan —— prompt-mu tidak pernah disimpan, dijual, atau dipakai untuk memprofilkanmu' },
      ],
      familyTitle: 'Keluarga BrushLLM',
      familyText: 'Satu platform, dua jalur —— API terpadu untuk pengembang, dan keluarga aplikasi desktop gratis yang mengutamakan lokal untuk kreator.',
      familyApiTitle: 'Layanan Model AI',
      familyApiText: 'Satu endpoint kompatibel OpenAI untuk {count} model dari {providers} penyedia —— bayar per token atau per gambar.',
      contactTitle: 'Bicara dengan kami',
      contactText: 'Pertanyaan, harga volume, atau model yang ingin kamu tambahkan —— kami membaca semuanya',
      contactCta: 'Mulai',
    },

    notFound: {
      metaDescription: 'Halaman ini tidak dapat ditemukan.',
      code: '404 · DI LUAR KANVAS',
      title: 'Halaman ini dicat ulang',
      text: 'Tautannya mungkin kedaluwarsa atau halamannya sudah berpindah. Model-modelnya, bagaimanapun, tetap persis di tempat kamu meninggalkannya.',
      backHome: 'Kembali ke beranda',
      browseModels: 'Lihat model',
    },
  },
};

export default id;
