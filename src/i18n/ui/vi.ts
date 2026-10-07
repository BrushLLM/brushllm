/**
 * Tiếng Việt. Cấu trúc giống hệt en.ts (được đảm bảo bởi kiểu Dictionary).
 * Các chỗ giữ chỗ {count}/{year}/{pct} giữ nguyên và được thay khi render.
 * Không dịch: id mô hình, URL, ví dụ mã, giá, định danh giấy phép, tên sản phẩm.
 */
import type { Dictionary } from '../index';

const vi: Dictionary = {
  site: {
    title: 'BrushLLM — AI của bạn, không phức tạp',
    description: 'Truy cập các mô hình AI mạnh mẽ qua một API duy nhất, và sáng tạo cùng các ứng dụng desktop miễn phí ưu tiên cục bộ. BrushLLM là nền tảng AI cho nhà phát triển và nhà sáng tạo.',
    organizationDescription: 'BrushLLM là nền tảng AI cho nhà phát triển và nhà sáng tạo, cung cấp Dịch vụ Mô hình AI (một API cho các mô hình AI mạnh mẽ) cùng các ứng dụng desktop miễn phí ưu tiên cục bộ —— Image Studio, Video Studio và Player.',
  },

  nav: {
    models: 'Mô hình AI',
    apps: 'Ứng dụng',
    pricing: 'Bảng giá',
    docs: 'Tài liệu',
    about: 'Giới thiệu',
  },

  header: {
    home: 'BrushLLM trang chủ',
    mainNav: 'Điều hướng chính',
    mobileNav: 'Điều hướng di động',
    logIn: 'Đăng nhập',
    getStarted: 'Bắt đầu',
    toggleMenu: 'Mở/đóng menu',
  },

  languageSwitcher: {
    label: 'Ngôn ngữ',
    system: 'Hệ thống',
    systemTitle: 'Theo ngôn ngữ trình duyệt',
  },

  appPage: {
    openSourceTitle: 'Mã nguồn mở, phần mềm trung thực',
    openSourceText: 'Mã nguồn, issue và bản phát hành đều ở trên GitHub{license}. Không telemetry, không tài khoản, không quảng cáo.',
  },

  footer: {
    blurb: 'BrushLLM —— AI cho nhà phát triển và nhà sáng tạo. Các mô hình AI mạnh mẽ qua một API, cùng các ứng dụng desktop miễn phí ưu tiên cục bộ. Chúng tôi bảo vệ quyền riêng tư của bạn: không tracker, không phân tích, không quảng cáo.',
    tagline: 'Một API · Ba ứng dụng miễn phí · Riêng tư trước tiên',
    product: 'Sản phẩm',
    console: 'Bảng điều khiển',
    company: 'Công ty',
    imageStudio: 'Image Studio',
    videoStudio: 'Video Studio',
    player: 'Player',
    aboutBrushLLM: 'Về BrushLLM',
    copyright: '© {year} BrushLLM · brushllm.com',
    poweredBy: 'Vận hành trên gateway tương thích OpenAI',
  },

  common: {
    download: 'Tải xuống',
    github: 'GitHub',
    tryIt: 'Thử ngay',
    featured: 'Nổi bật',
    free: 'Miễn phí',
    copy: 'Sao chép',
    copied: 'Đã sao chép!',
    copyFallback: 'Nhấn ⌘C',
    learnMore: 'Tìm hiểu thêm',
    learnMoreArrow: 'Tìm hiểu thêm →',
    downloadArrow: 'Tải xuống ↗',
    exploreAiModels: 'Khám phá mô hình AI',
    exploreTheApps: 'Khám phá ứng dụng',
    exploreTheApi: 'Khám phá API',
    browseModels: 'Xem mô hình',
    openTheConsole: 'Mở bảng điều khiển',
    readTheDocs: 'Đọc tài liệu',
  },

  data: {
    capability: {
      chat: 'Trò chuyện',
      reasoning: 'Suy luận',
      tools: 'Gọi công cụ',
      vision: 'Thị giác',
      'long-context': 'Ngữ cảnh dài',
      image: 'Chữ thành ảnh',
    },
    apps: {
      'image-studio': {
        tagline: 'Bộ công cụ ảnh AI ưu tiên cục bộ',
        description: 'Bộ công cụ ảnh desktop miễn phí. Các chỉnh sửa hằng ngày —— chuyển đổi, nén, cắt, đóng dấu nước, EXIF —— chạy hoàn toàn trên thiết bị của bạn; các tính năng AI như xóa nền và tô sinh tự động đi qua gateway BrushLLM, tính phí theo từng ảnh.',
        highlights: ['25+ công cụ cục bộ', 'Chỉnh sửa AI qua API BrushLLM', '9 ngôn ngữ', 'Không telemetry'],
      },
      'video-studio': {
        tagline: 'Bộ công cụ cục bộ cho video, âm thanh và phụ đề',
        description: 'Bộ công cụ miễn phí, ngoại tuyến để xử lý video, âm thanh và phụ đề. Chuyển đổi, nén, gộp, cắt, chuẩn hóa loudness, sửa mã hóa phụ đề —— xử lý 100% cục bộ, không gửi yêu cầu mạng nào.',
        highlights: ['25+ công cụ', 'Xử lý 100% cục bộ', '9 ngôn ngữ', 'Không yêu cầu mạng'],
      },
      player: {
        tagline: 'Trình phát đa phương tiện mã nguồn mở dựa trên mpv',
        description: 'Trình phát đa phương tiện mã nguồn mở đa nền tảng. Mọi định dạng mpv phát được, cộng thêm phát trực tuyến từ WebDAV, SMB, FTP, Emby và Jellyfin —— với đầu ra HDR, giải mã bằng phần cứng và giao diện 9 ngôn ngữ.',
        highlights: ['Mọi định dạng qua mpv', 'WebDAV · SMB · Emby · Jellyfin', 'HDR và giải mã phần cứng', '9 ngôn ngữ'],
      },
    },
    models: {
      'gpt-5.2': 'Kỳ舰 của ChatGPT —— suy luận tổng quát, thị giác và dùng công cụ đều rất mạnh.',
      'gpt-5.2-mini': 'Cấp ChatGPT nhanh và rẻ cho hội thoại khối lượng lớn, phân loại và trích xuất.',
      'deepseek-chat': 'Mô hình kỳ舰 không chế độ suy nghĩ. Nhanh, rẻ và xuất sắc trong hội thoại chung và dùng công cụ.',
      'deepseek-reasoner': 'Mô hình suy luận với chuỗi tư duy hiển thị, dành cho toán, mã và bài toán khó.',
      'glm-4.6': 'Kỳ舰 của Z.ai. Mạnh về lập trình, viết nội dung và lập kế hoạch agent; ngữ cảnh 200K.',
      'glm-4.5-air': 'GLM nhẹ hơn, tinh chỉnh cho lưu lượng sản xuất nhạy cảm chi phí.',
      'glm-4.5-flash': 'Cấp miễn phí của dòng GLM —— rất hợp cho nguyên mẫu và dự án cá nhân.',
      'qwen3-max': 'Kỳ舰 lớn nhất của Alibaba. Chất lượng đỉnh cho khối lượng agent và hội thoại đòi hỏi cao.',
      'qwen3-235b-a22b': 'Kỳ舰 MoE trọng số mở với chế độ suy nghĩ lai.',
      'qwen3-32b': 'Mô hình đa năng dày đặc trọng số mở, có cả chế độ suy nghĩ và không suy nghĩ.',
      'qwen3-coder-plus': 'Mô hình chuyên về mã, dành cho công cụ lập trình agent và chỉnh sửa quy mô kho mã.',
      'qwen-vl-max': 'Mô hình thị giác-ngôn ngữ cho hiểu ảnh, OCR và suy luận biểu đồ.',
      'kimi-k2-0905': 'MoE nghìn tỷ tham số, tối ưu cho dùng công cụ kiểu agent và tài liệu dài.',
      'kimi-k2-thinking': 'Biến thể suy luận của K2 với tư duy xen kẽ cho tác vụ nhiều bước.',
      'MiniMax-M2': 'MoE agent hiệu quả —— lựa chọn yêu thích của các agent lập trình ngân sách eo hẹp.',
      'gpt-image-2': 'Mô hình tạo ảnh của OpenAI —— chữ thành ảnh với khả năng bám theo hướng dẫn rất tốt.',
    },
  },

  pages: {
    home: {
      metaDescription: 'Truy cập các mô hình AI mạnh mẽ qua một API duy nhất, và sáng tạo cùng các ứng dụng desktop miễn phí ưu tiên cục bộ.',
      heroBadge: 'Dành cho nhà phát triển · Dành cho nhà sáng tạo',
      heroTitle: 'AI của bạn,',
      heroTitleBand: 'không phức tạp',
      heroSubtitle: 'Các mô hình AI mạnh mẽ qua một API, và sáng tạo cùng các ứng dụng cục bộ miễn phí',
      heroCtaApi: 'Lấy khóa API',
      heroCtaApps: 'Ứng dụng Desktop',
      heroNote: 'Một tài khoản cho cả nền tảng',

      platformEyebrow: 'Một nền tảng',
      platformTitle: 'Một nền tảng cho nhà phát triển và nhà sáng tạo',
      platformIntro: 'BrushLLM là một nền tảng cho nhà phát triển và nhà sáng tạo: truy cập API hợp nhất vào các mô hình AI mạnh mẽ qua {modelsLink}, cùng một gia đình {appsLink} —— các tính năng AI của Image Studio được tính phí qua chính API đó.',
      platformModelsLink: 'Dịch vụ Mô hình AI',
      platformAppsLink: 'ứng dụng desktop miễn phí ưu tiên cục bộ',

      apiCardBadge: 'Dành cho nhà phát triển',
      apiCardTitle: 'Dịch vụ Mô hình AI',
      apiCardSubtitle: 'Một API cho các mô hình AI mạnh mẽ',
      apiCardDescription: 'Truy cập các mô hình AI mạnh mẽ qua một API duy nhất —— {count} mô hình, {providers} nhà cung cấp, hợp nhất và tính theo mức dùng.',
      apiCardBullets: [
        'Endpoint hợp nhất, tương thích OpenAI',
        'Mô hình hội thoại, suy luận, thị giác và ảnh',
        'Giá công khai, trả theo mức dùng, có cấp miễn phí',
      ],
      apiCardChips: { models: 'Mô hình', pricing: 'Bảng giá', docs: 'Tài liệu', console: 'Bảng điều khiển' },
      apiCardCta: 'Khám phá mô hình AI',
      apiCardSecondary: 'Đọc tài liệu',

      appsCardBadge: 'Dành cho nhà sáng tạo · Ứng dụng miễn phí',
      appsCardTitle: 'Ứng dụng Desktop',
      appsCardSubtitle: 'Công cụ cục bộ miễn phí cho công việc hằng ngày',
      appsCardDescription: 'Image Studio, Video Studio và Player —— các ứng dụng desktop mã nguồn mở cho macOS và Windows, không telemetry. Các tính năng AI của Image Studio chạy trên cùng API đó.',
      appsCardNote: 'Mã nguồn mở · macOS · Windows',
      appsCardCta: 'Khám phá ứng dụng',

      appsSectionEyebrow: 'Ứng dụng',
      appsSectionTitle: 'Ứng dụng cục bộ miễn phí,',
      appsSectionTitleBand: 'xây trên một nền tảng',
      appsSectionFooter: 'Chi tiết, ảnh chụp màn hình và bộ cài đặt tại {link}',
      appsSectionFooterLink: 'trang ứng dụng →',

      benefitsEyebrow: 'Vì sao chọn API của chúng tôi',
      benefitsTitle: 'Mọi thứ bạn cần,',
      benefitsTitleBand: 'không gì thừa thãi',
      benefitsSubtitle: 'Công cụ đơn giản và trung thực để xây dựng cùng mô hình AI',
      benefits: [
        { title: 'API hợp nhất', description: 'Một endpoint tương thích OpenAI cho mọi mô hình. Giữ SDK của bạn —— đổi một dòng là ra mắt' },
        { title: 'Đa dạng mô hình', description: 'Mô hình hội thoại, suy luận, thị giác và ảnh từ các phòng lab hàng đầu —— {count} mô hình trong một danh mục' },
        { title: 'Tích hợp đơn giản', description: 'Chạy với bất kỳ SDK OpenAI nào. Sao chép, dán và chạy —— bằng cURL, Python, Node.js hoặc Go' },
        { title: 'Tính phí theo mức dùng', description: 'Trả tiền cho phần bạn dùng —— theo token hoặc theo ảnh, bằng USD. Không thuê bao, và có cấp miễn phí để bắt đầu' },
      ],

      statsEyebrow: 'Mô hình khả dụng, một API',
      stats: { providers: 'Nhà cung cấp AI', models: 'Mô hình, một danh mục', account: 'Tài khoản', countries: 'Quốc gia được phục vụ' },
      statsCompare: 'Giá trọn gói của chúng tôi thắng OpenRouter ở 7 so sánh trực tiếp —— {link}',
      statsCompareLink: 'xem so sánh →',

      howEyebrow: 'Cách hoạt động',
      howTitle: 'Ba bước đến token đầu tiên',
      howSteps: [
        { title: 'Tạo tài khoản', description: 'Đăng ký bằng email và lấy khóa API từ bảng điều khiển. Không cần thẻ tín dụng để bắt đầu' },
        { title: 'Trỏ SDK tới BrushLLM', description: 'Đặt base URL và giữ nguyên SDK OpenAI bạn đang dùng' },
        { title: 'Gọi mô hình bất kỳ theo id', description: 'Thoải mái đổi id mô hình —— cả danh mục chỉ cách bạn một khóa' },
      ],
      howCodeTitle: 'Giữ nguyên mã của bạn, chỉ đổi một dòng',
      howCodeSubtitle: 'Cái gì chạy được với API OpenAI thì chạy được với BrushLLM —— cùng một yêu cầu bằng bốn ngôn ngữ.',

      faqEyebrow: 'Câu hỏi thường gặp',
      faqTitle: 'Câu hỏi, được giải đáp',
      faqDevelopers: 'Dành cho nhà phát triển',
      faqCreators: 'Dành cho nhà sáng tạo',
      developerFaqs: [
        {
          question: 'BrushLLM là gì?',
          answer: 'BrushLLM là nền tảng AI cho nhà phát triển và nhà sáng tạo. Dịch vụ Mô hình AI mang đến một API cho các mô hình mạnh mẽ, và gia đình ứng dụng desktop miễn phí ưu tiên cục bộ —— Image Studio, Video Studio và Player —— phủ bên phía sáng tạo. Một tài khoản dùng cho cả nền tảng.',
        },
        {
          question: 'API hoạt động như thế nào?',
          answer: 'Trỏ bất kỳ SDK OpenAI nào tới {apiBase} và dùng khóa BrushLLM của bạn. Hoàn tất hội thoại, gọi công cụ và streaming đều hoạt động đúng như bạn kỳ vọng.',
        },
        {
          question: 'Có những mô hình AI nào?',
          answer: 'Danh mục gồm {count} mô hình từ DeepSeek, Qwen, GLM, Kimi, MiniMax và OpenAI —— hội thoại, suy luận, thị giác và chữ thành ảnh. Danh sách đầy đủ kèm giá trực tiếp có ở trang Mô hình.',
        },
        {
          question: 'API có tương thích OpenAI không?',
          answer: 'Có, hoàn toàn. Cái gì chạy được với API OpenAI thì chạy được với BrushLLM —— kể cả các agent lập trình và CLI như Cursor, Cline, OpenCode và aider.',
        },
        {
          question: 'Mức dùng được tính phí ra sao?',
          answer: 'Hoàn toàn trả theo mức dùng bằng USD —— theo token cho mô hình văn bản, theo ảnh cho mô hình ảnh. Không thuê bao hay mức tối thiểu; một số mô hình có cấp miễn phí.',
        },
        {
          question: 'BrushLLM có phù hợp với startup và doanh nghiệp không?',
          answer: 'Có. Một endpoint phủ mọi nhà cung cấp, giá theo mức dùng mở rộng cùng bạn, mỗi khóa có hạn mức chi riêng, và có chiết khấu theo khối lượng cho cam kết sử dụng.',
        },
        {
          question: 'Các bạn bảo vệ quyền riêng tư của tôi thế nào?',
          answer: 'Chúng tôi chỉ thu thập những gì một tài khoản cần để vận hành. Không tracker, không phân tích, không quảng cáo —— prompt của bạn được chuyển thẳng tới mô hình thượng nguồn và không bao giờ bị lưu, bán hay dùng để lập hồ sơ.',
        },
      ],
      creatorFaqs: [
        {
          question: 'Image Studio là gì?',
          answer: 'Image Studio là bộ công cụ ảnh desktop miễn phí của BrushLLM. Các công cụ hằng ngày —— chuyển đổi, nén, cắt, EXIF —— chạy cục bộ và ngoại tuyến; các tính năng AI như xóa nền và tô sinh chạy qua API BrushLLM, tính phí theo từng ảnh.',
        },
        {
          question: 'Tôi có thể làm gì với Image Studio?',
          answer: 'Chuyển đổi, nén, cắt và dọn dẹp ảnh bằng công cụ cục bộ miễn phí —— rồi tạo ảnh, xóa nền, xóa vật thể, tô và đổi phong cách bằng AI, tính phí theo từng ảnh.',
        },
        {
          question: 'Tôi chỉnh sửa ảnh có sẵn được không?',
          answer: 'Được. Mở bất kỳ ảnh nào, chọn một vùng hoặc toàn bộ bức tranh và mô tả thay đổi —— inpainting và xóa nền đều có sẵn.',
        },
        {
          question: 'Tôi tạo và biến đổi ảnh được không?',
          answer: 'Được —— tạo ảnh từ chữ và đổi phong cách chạy trong cùng không gian làm việc, vận hành bởi GPT-Image qua API BrushLLM.',
        },
        {
          question: 'Tôi tải ứng dụng ở đâu?',
          answer: 'Cả ba ứng dụng —— Image Studio, Video Studio và Player —— đã có sẵn trên GitHub releases của BrushLLM, cho macOS (Apple Silicon) và Windows.',
        },
        {
          question: 'Ứng dụng có thực sự miễn phí không?',
          answer: 'Có. Mọi công cụ cục bộ đều miễn phí và mã nguồn nằm trên GitHub. Chỉ tính năng AI trong Image Studio dùng API BrushLLM trả theo mức dùng.',
        },
      ],

      ctaBuildTitle: 'Xây dựng cùng AI',
      ctaBuildText: 'Một API cho {count} mô hình —— hợp nhất, theo mức dùng, tương thích OpenAI',
      ctaCreateTitle: 'Sáng tạo cùng AI',
      ctaCreateText: 'Ứng dụng desktop miễn phí ưu tiên cục bộ —— tạo và chỉnh sửa ảnh, video và đa phương tiện, cùng siêu năng lực AI trong Image Studio',
    },

    models: {
      metaDescription: 'Duyệt {count} mô hình AI —— từ DeepSeek, Qwen, GLM, Kimi tới GPT và chữ thành ảnh —— kèm cửa sổ ngữ cảnh, năng lực và giá tham khảo.',
      eyebrow: 'Mô hình AI',
      title: '{count} mô hình · {providers} nhà cung cấp ·',
      titleBand: 'Một endpoint',
      intro: 'Mọi mô hình dưới đây đều gọi được qua cùng API tương thích OpenAI và cùng một khóa. Giá mang tính tham khảo —— USD mỗi 1M token cho mô hình văn bản, USD mỗi ảnh cho mô hình ảnh{free}.',
      introFree: ' —— trong đó {count} mô hình miễn phí',
      searchPlaceholder: 'Tìm theo tên, id hoặc nhà cung cấp…',
      searchLabel: 'Tìm mô hình',
      providerLabel: 'Nhà cung cấp',
      providerGroup: 'Lọc theo nhà cung cấp',
      capabilityLabel: 'Năng lực',
      capabilityGroup: 'Lọc theo năng lực',
      all: 'Tất cả',
      showing: 'Đang hiển thị {visible} trên {total} mô hình',
      empty: 'Không có mô hình nào khớp bộ lọc của bạn. Thử từ khóa, nhà cung cấp, năng lực hoặc tình huống sử dụng khác.',
      footnote: 'Giá là giá niêm yết tham khảo bằng USD —— mỗi 1M token cho mô hình văn bản, mỗi ảnh sinh ra cho mô hình ảnh —— và có thể khác với mức phí cấu hình trong bảng điều khiển của bạn. Cửa sổ ngữ cảnh là mức tối đa mỗi mô hình thượng nguồn hỗ trợ. Xem {docsLink} để biết chi tiết tích hợp.',
      footnoteDocsLink: 'tài liệu',
      card: { type: 'Loại', perImage: 'Mỗi ảnh', output: 'Đầu ra', context: 'Ngữ cảnh', input: 'Đầu vào / 1M', outputPer1M: 'Đầu ra / 1M' },
    },

    pricing: {
      metaDescription: 'Bảng giá trả theo mức dùng đơn giản cho mọi mô hình trên BrushLLM —— giá token tham khảo bằng USD, kèm một số cấp miễn phí.',
      eyebrow: 'Bảng giá',
      title: 'Trả cho phần bạn dùng,',
      titleBand: 'chỉ vậy thôi',
      intro: 'Mô hình văn bản tính theo token, mô hình ảnh tính theo từng ảnh sinh ra —— tất cả bằng USD, không thuê bao hay mức tối thiểu. Những gì bạn thấy dưới đây là mức giá danh mục tham khảo; mức phí chính xác và số dư của bạn nằm trong bảng điều khiển.',
      highlights: [
        { title: 'Chỉ trả theo mức dùng', description: 'Tính phí theo token bằng USD. Không thuê bao, không mức tối thiểu, không trò chơi cộng giá —— nạp và dùng ngay' },
        { title: '{count} mô hình miễn phí', description: 'GLM-4.5 Flash không tốn đồng nào —— hoàn hảo cho nguyên mẫu và ứng dụng cá nhân' },
        { title: 'Chiết khấu theo khối lượng', description: 'Khối lượng nghiêm túc? Liên hệ và chúng tôi tính mức giá cam kết sử dụng cho khối lượng công việc của bạn' },
      ],
      textModelsTitle: 'Mô hình văn bản —— theo token',
      imageModelsTitle: 'Mô hình ảnh —— theo ảnh',
      table: { model: 'Mô hình', provider: 'Nhà cung cấp', context: 'Ngữ cảnh', input: 'Đầu vào / 1M', output: 'Đầu ra / 1M', resolution: 'Độ phân giải', pricePerImage: 'Giá / ảnh' },
      footnote: 'Giá là giá niêm yết tham khảo bằng USD —— mỗi 1M token cho mô hình văn bản, mỗi ảnh sinh ra cho mô hình ảnh. Việc tính phí thực tế diễn ra trong bảng điều khiển của bạn, nơi bạn cũng theo dõi được chi tiêu theo từng khóa API.',
      compareEyebrow: 'Kiểm tra giá',
      compareTitle: 'Cùng mô hình,',
      compareTitleBand: 'hóa đơn cuối nhỏ hơn',
      compareIntro: 'OpenRouter cộng phí thanh toán khi bạn mua tín dụng —— 5,5% qua thẻ —— trên giá niêm yết của mọi mô hình. Mức giá BrushLLM công bố là mức cuối cùng bạn trả.',
      compareTable: {
        model: 'Mô hình',
        ours: 'BrushLLM vào/ra mỗi 1M',
        orList: 'OpenRouter niêm yết vào/ra',
        orAllIn: 'OpenRouter trọn gói* vào/ra',
        youSave: 'Bạn tiết kiệm',
        upTo: 'tới {pct}%',
      },
      compareFootnote: '*Trọn gói = giá niêm yết OpenRouter cộng phí mua tín dụng 5,5% (Stripe; tiền mã hóa là 5%). Mức tiết kiệm so sánh giá cuối của BrushLLM với giá trọn gói của OpenRouter. Giá niêm yết OpenRouter lấy từ API công khai của họ, tháng 9/2026 —— mang tính tham khảo; hãy kiểm chứng mức giá hiện hành trên cả hai nền tảng.',
      ctaTitle: 'Kiểm tra số dư & mức phí',
      ctaText: 'Nạp tiền, đặt hạn mức theo khóa và theo dõi mức dùng theo thời gian thực —— tất cả trong bảng điều khiển',
    },

    docs: {
      metaDescription: 'Hướng dẫn bắt đầu nhanh API BrushLLM —— xác thực, base URL tương thích OpenAI, ví dụ SDK bằng bốn ngôn ngữ và danh sách id mô hình đầy đủ.',
      eyebrow: 'Tài liệu',
      title: 'Bắt đầu nhanh,',
      titleBand: 'một nét vẽ',
      intro: 'BrushLLM là một gateway tương thích OpenAI. Nếu bạn từng gọi API OpenAI thì bạn đã biết cách gọi BrushLLM —— đây là bản ba mươi giây.',
      toc: { quickstart: 'Bắt đầu nhanh', firstRequest: 'Yêu cầu đầu tiên', modelIds: 'Id mô hình', errors: 'Lỗi' },
      tocLabel: 'Các phần tài liệu',
      steps: [
        {
          title: 'Lấy khóa API',
          description: '{createLink} hoặc {signInLink} vào bảng điều khiển, rồi tạo một khóa. Khóa có dạng {code} —— hãy đối xử với nó như mật khẩu và đặt hạn mức chi tiêu nếu giao cho công cụ',
          createLink: 'Tạo tài khoản',
          signInLink: 'đăng nhập',
        },
        {
          title: 'Đặt base URL và khóa',
          description: 'Trỏ bất kỳ SDK OpenAI nào tới endpoint của chúng tôi:',
          baseUrlLabel: 'base_url',
        },
        {
          title: 'Gọi mô hình bất kỳ theo id',
          description: 'Truyền một id từ bảng dưới đây vào {code}. Thế thôi —— bạn đang gọi mô hình từ các phòng lab AI hàng đầu',
        },
      ],
      firstRequestTitle: 'Yêu cầu đầu tiên của bạn',
      firstRequestText: 'Cùng một yêu cầu bằng bốn ngôn ngữ —— kể cả streaming. Sao chép, dán, chạy',
      modelIdsTitle: 'Id mô hình',
      modelIdsText: 'Dùng đúng các id này (phân biệt hoa thường). Mô tả và năng lực có ở {modelsLink}. Mô hình ảnh được gọi qua {code} với cùng khóa API.',
      modelIdsModelsLink: 'trang mô hình',
      modelIdsTable: { id: 'Id mô hình', name: 'Tên hiển thị', context: 'Ngữ cảnh' },
      errorsTitle: 'Lỗi',
      errorsTable: { status: 'Trạng thái', meaning: 'Ý nghĩa', fix: 'Cách xử lý' },
      errors: [
        { meaning: 'Khóa API không hợp lệ hoặc thiếu', fix: 'Kiểm tra khóa của bạn bắt đầu bằng “brsh-” và chưa bị thu hồi trong bảng điều khiển.' },
        { meaning: 'Id mô hình không xác định', fix: 'Dùng id đúng như bảng trên —— chúng phân biệt hoa thường.' },
        { meaning: 'Vượt giới hạn tốc độ hoặc hạn mức', fix: 'Chờ rồi thử lại với backoff, hoặc nâng hạn mức của khóa này trong bảng điều khiển.' },
        { meaning: 'Số dư không đủ', fix: 'Nạp tiền vào tài khoản trong bảng điều khiển rồi thử lại yêu cầu.' },
        { meaning: 'Lỗi từ nhà cung cấp thượng nguồn', fix: 'Thử lại sau vài giây; nếu vẫn tiếp diễn, đổi sang id mô hình khác hoặc liên hệ bộ phận hỗ trợ.' },
      ],
      helpTitle: 'Bị kẹt ở đâu?',
      helpText: 'Kiểm tra bảng điều khiển về khóa, hạn mức và thanh toán, hoặc email cho chúng tôi tại {email}',
    },

    apps: {
      metaDescription: 'Ứng dụng desktop BrushLLM —— Image Studio, Video Studio và Player. Miễn phí, ưu tiên cục bộ, mã nguồn mở, cho macOS và Windows.',
      eyebrow: 'Ứng dụng',
      title: 'Ứng dụng cục bộ miễn phí,',
      titleBand: 'mã nguồn mở',
      intro: 'Ba công cụ desktop cho macOS và Windows —— không telemetry, không tài khoản, không quảng cáo. Tính năng AI của Image Studio nối thẳng vào API BrushLLM.',
      apiTitle: 'API đằng sau các tính năng AI',
      apiText: 'Các công cụ AI của Image Studio chạy trên gateway BrushLLM —— một endpoint tương thích OpenAI, mức giá theo ảnh được công khai.',
    },

    studio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Ứng dụng desktop · Miễn phí + AI trả theo mức dùng',
      intro: 'Mọi công cụ cục bộ đều miễn phí và chạy hoàn toàn trên thiết bị của bạn —— engine Rust, không tải lên. Tính năng AI gọi đúng {apiLink} đang vận hành cả nền tảng, tính phí theo ảnh theo {ratesLink}.',
      introApiLink: 'API BrushLLM',
      introRatesLink: 'mức giá công khai',
      outro: 'Xem các mô hình ảnh đằng sau công cụ AI →',
      groups: [
        {
          title: 'Công cụ cục bộ —— miễn phí, ngoại tuyến, riêng tư',
          items: [
            { title: 'Chuyển đổi & nén', description: '8 định dạng đầu vào ra 8 định dạng đầu ra (gồm AVIF và WebP), với lấy mẫu lại Lanczos và kiểm soát chất lượng.' },
            { title: 'Đổi kích thước, cắt & xoay', description: 'Công cụ hình học thân thiện với xử lý hàng loạt, kích thước pixel chính xác và preset tỷ lệ.' },
            { title: 'Đóng dấu & chú thích', description: 'Đóng dấu chữ và ảnh, mũi tên, khung và chú thích vẽ tay cho ảnh chụp màn hình và tài liệu.' },
            { title: 'EXIF: xem, sửa & xóa', description: 'Xem toàn bộ metadata, viết lại trường, hoặc xóa vị trí và dữ liệu máy ảnh trước khi chia sẻ.' },
            { title: 'Ghép, khảm & bóng đổ', description: 'Ghép ảnh thành lưới, pixel hóa vùng, thêm bo góc và bóng đổ.' },
            { title: 'Công cụ màu', description: 'Độ sáng, tương phản và bão hòa, thay màu, cùng ống hút màu có phóng to.' },
          ],
        },
        {
          title: 'Công cụ AI —— vận hành bởi gateway BrushLLM',
          items: [
            { title: 'Tạo ảnh', description: 'Chữ thành ảnh với GPT-Image —— tính phí theo từng ảnh tạo, không thuê bao.' },
            { title: 'Xóa nền', description: 'Cắt nền một chạm với mép sạch sẽ, ngay trên desktop của bạn.' },
            { title: 'Xóa vật thể & đóng dấu', description: 'Chọn một vùng và mô tả thứ cần biến mất —— inpainting sẽ lấp đầy.' },
            { title: 'Tô sinh', description: 'Mở rộng, thay thế hoặc hoán đổi nội dung, kèm ảnh tham chiếu tùy chọn (vd. hoán đổi người).' },
            { title: 'Đổi phong cách', description: 'Vẽ lại bức ảnh theo phong cách mới mà vẫn giữ bố cục và bản sắc.' },
            { title: 'Khóa của bạn, hạn mức của bạn', description: 'Khóa API nằm trong keychain của hệ điều hành; mỗi khóa mang hạn mức chi riêng từ bảng điều khiển.' },
          ],
        },
      ],
    },

    videoStudio: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Ứng dụng desktop · Miễn phí',
      intro: 'Xử lý 100% cục bộ —— media của bạn không bao giờ rời khỏi máy. Binary FFmpeg được ghim phiên bản và kiểm chứng SHA-256, engine chạy hàng đợi tác vụ có thể tạm dừng, và 175 bài kiểm tra tự động giữ cho bộ công cụ trung thực.',
      groups: [
        {
          title: 'Video',
          items: [
            { title: 'Chuyển đổi', description: 'MP4, MKV, WebM, MOV và AVI với codec H.264, H.265, VP9 hoặc AV1.' },
            { title: 'Nén', description: 'Nén theo chất lượng (CRF) hoặc bitrate mục tiêu với ước tính kích thước trực tiếp.' },
            { title: 'Gộp & cắt', description: 'Nối clip theo thứ tự, cắt đoạn với điểm vào/ra chính xác từng khung hình.' },
            { title: 'Cắt, phóng & xoay', description: 'Sửa hình học cho footage xoay sai hoặc có viền đệm.' },
            { title: 'Đổi tốc độ', description: 'Tốc độ phát 0,25× đến 4× kèm chỉnh cao độ âm thanh.' },
            { title: 'Khung hình, GIF & WebP', description: 'Trích khung hình tĩnh, hoặc chuyển clip thành GIF/WebP động.' },
          ],
        },
        {
          title: 'Âm thanh',
          items: [
            { title: 'Trích & chuyển đổi', description: 'Trích âm thanh sang MP3, M4A, FLAC, WAV, OGG hoặc Opus.' },
            { title: 'Chuẩn hóa loudness', description: 'Chuẩn hóa EBU R128 cho âm lượng nhất quán giữa các tệp.' },
            { title: 'Âm lượng & khuếch đại', description: 'Tăng hoặc giảm mà không mã hóa lại video khi có thể.' },
            { title: 'Tắt tiếng hoặc thay', description: 'Gỡ track âm thanh, hoặc thay nhạc nền mới.' },
            { title: 'Cắt', description: 'Cắt đoạn âm thanh với độ chính xác vào/ra như video.' },
          ],
        },
        {
          title: 'Phụ đề',
          items: [
            { title: 'Nhúng hoặc khắc', description: 'Gắn track phụ đề mềm, hoặc khắc cứng vào hình ảnh.' },
            { title: 'Chuyển đổi định dạng', description: 'SRT, VTT, ASS, SSA và TTML —— với engine phụ đề không phụ thuộc.' },
            { title: 'Sửa mã hóa', description: 'Tự động sửa tệp GBK/Big5 cũ sang UTF-8 sạch.' },
            { title: 'Dịch thời lượng', description: 'Đẩy phụ đề sớm hoặc muộn hàng loạt, đồng bộ với video.' },
            { title: 'Trích', description: 'Trích track phụ đề có sẵn từ bất kỳ container nào.' },
          ],
        },
      ],
    },

    player: {
      metaDescription: '{tagline} —— {description}',
      badge: 'Ứng dụng desktop · Mã nguồn mở',
      intro: 'Bản macOS là ứng dụng Swift + SwiftUI nguyên sinh bọc quanh libmpv; bản Windows là phiên bản viết lại bằng Tauri với cùng lõi mpv. Không telemetry, chỉ kiểm tra cập nhật khi bạn yêu cầu.',
      groups: [
        {
          title: 'Phát',
          items: [
            { title: 'Mọi định dạng', description: 'Dựa trên mpv: MKV, MP4, AVI, MOV, WebM, FLAC, MP3 và mọi thứ mpv phát được.' },
            { title: 'Đầu ra HDR', description: 'Đi thẳng PQ và EDR trên màn hình hỗ trợ, giải mã phần cứng bật/tắt được.' },
            { title: 'Ảnh đĩa', description: 'Phát trực tiếp ảnh ISO Blu-ray và DVD.' },
            { title: 'Điều khiển', description: 'Vòng lặp A-B, tốc độ phát, bước từng khung, chương và chụp màn hình.' },
            { title: 'Danh sách phát & lịch sử', description: 'Danh sách phát kéo-thả sắp lại, tiếp tục chỗ cũ, dấu trang.' },
            { title: 'Cửa sổ mini', description: 'Trình phát mini nổi luôn trên cùng cho việc đa nhiệm.' },
          ],
        },
        {
          title: 'Phát trực tuyến',
          items: [
            { title: 'WebDAV & SMB', description: 'Duyệt và phát từ NAS của bạn —— gồm cả gắn SMB nguyên sinh trên macOS.' },
            { title: 'FTP', description: 'Máy khách FTP tích hợp, duyệt thư mục và phát trực tiếp.' },
            { title: 'Emby & Jellyfin', description: 'Đăng nhập, duyệt thư viện và phát trực tiếp không cần transcode.' },
            { title: 'HTTP & HLS', description: 'Phát liên kết và luồng m3u8/HLS với bộ đệm đọc trước điều chỉnh được.' },
          ],
        },
        {
          title: 'Phụ đề & công cụ',
          items: [
            { title: 'Phụ đề tự nạp', description: 'Tệp kèm khớp tự động nạp; tệp ngoài nạp theo yêu cầu.' },
            { title: 'Tạo kiểu trực tiếp', description: 'Phông chữ, cỡ, màu và vị trí —— chỉnh lại ngay khi đang xem.' },
            { title: 'Cân bằng & ghi', description: 'Cân bằng âm thanh, cùng ghi luồng để lưu trữ.' },
          ],
        },
      ],
    },

    about: {
      metaDescription: 'BrushLLM xây dựng sản phẩm AI cho cả nhà phát triển và nhà sáng tạo —— một API hợp nhất cho các mô hình AI mạnh mẽ, cùng ứng dụng desktop miễn phí ưu tiên cục bộ cho ảnh, video và đa phương tiện.',
      eyebrow: 'Giới thiệu',
      title: 'Sản phẩm AI cho',
      titleBand: 'nhà phát triển và nhà sáng tạo',
      intro: 'BrushLLM xây dựng sản phẩm AI cho cả nhà phát triển và nhà sáng tạo. Một nền tảng, một tài khoản —— và cùng một lời hứa ở hai phía: công cụ đơn giản, giá công khai, riêng tư ngay từ thiết kế.',
      forDevelopers: 'Dành cho nhà phát triển.',
      forDevelopersText: '{link} —— một API hợp nhất để truy cập các mô hình AI mạnh mẽ. {count} mô hình từ DeepSeek, Qwen, GLM, Kimi, MiniMax, OpenAI và hơn thế, sau một endpoint tương thích OpenAI.',
      forDevelopersLink: 'Dịch vụ Mô hình AI',
      forCreators: 'Dành cho nhà sáng tạo.',
      forCreatorsText: '{link} —— ứng dụng desktop miễn phí ưu tiên cục bộ cho macOS và Windows. Image Studio kết hợp công cụ cục bộ miễn phí với chỉnh sửa AI qua cùng API; cả ba đều mã nguồn mở và không telemetry.',
      forCreatorsLink: 'Image Studio, Video Studio và Player',
      values: [
        { title: 'Mở với thế giới', description: 'AI tiên tiến không nên đòi tài khoản riêng rẽ, rào cản thanh toán địa phương hay khóa vùng —— và cũng không nên đắt đỏ. Một lần đăng ký, bằng USD, từ bất kỳ quốc gia nào' },
        { title: 'Một nền tảng, một tài khoản', description: 'Một nền tảng, một tài khoản, một hóa đơn. Nếu việc tích hợp với chúng tôi lâu hơn ly cà phê, đó là bug của chúng tôi, không phải vấn đề của bạn' },
        { title: 'Giá trung thực', description: 'Mức giá theo token được công khai, không bẫy thuê bao, và cấp miễn phí giữ nguyên miễn phí. Bạn luôn nên biết một yêu cầu tốn bao nhiêu' },
        { title: 'Riêng tư từ thiết kế', description: 'Chúng tôi chỉ thu thập những gì một tài khoản cần để hoạt động. Không tracker, không phân tích, không quảng cáo —— prompt của bạn không bao giờ bị lưu, bán hay dùng để lập hồ sơ' },
      ],
      familyTitle: 'Gia đình BrushLLM',
      familyText: 'Một nền tảng, hai hướng —— một API hợp nhất cho nhà phát triển, và gia đình ứng dụng desktop miễn phí ưu tiên cục bộ cho nhà sáng tạo.',
      familyApiTitle: 'Dịch vụ Mô hình AI',
      familyApiText: 'Một endpoint tương thích OpenAI cho {count} mô hình từ {providers} nhà cung cấp —— trả theo token hoặc theo ảnh.',
      contactTitle: 'Trò chuyện cùng chúng tôi',
      contactText: 'Câu hỏi, giá theo khối lượng, hay mô hình bạn muốn chúng tôi thêm —— chúng tôi đọc tất cả',
      contactCta: 'Bắt đầu',
    },

    notFound: {
      metaDescription: 'Không thể tìm thấy trang này.',
      code: '404 · NGOÀI TRANH',
      title: 'Trang này đã được vẽ lại',
      text: 'Liên kết có thể đã lỗi thời hoặc trang đã di chuyển. Nhưng các mô hình thì vẫn y nguyên nơi bạn để lại.',
      backHome: 'Về trang chủ',
      browseModels: 'Xem mô hình',
    },
  },
};

export default vi;
