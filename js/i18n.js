/*! Ngô Tiến Phong — Personal Portfolio
    i18n runtime: Vietnamese (default) / English.
    All copy lives in the two dictionaries below — edit them to update
    either locale. The HTML keeps the Vietnamese text as the no-JS fallback. */
(function (global, document) {
  "use strict";

  var STORAGE_KEY = "phong-lang";
  var DEFAULT_LANG = "vi";

  var vi = {
    "meta.home.title": "Ngô Tiến Phong — Fullstack Developer & Self-Host Builder",
    "meta.home.description": "Portfolio của Ngô Tiến Phong — Fullstack Developer (~2 năm kinh nghiệm) tại FPT Software. Phát triển ứng dụng web fullstack (Next.js, React, Node.js, NestJS, Java), hệ thống tự động hóa tích hợp AI và vận hành Ubuntu Home Server.",
    "meta.home.ogTitle": "Ngô Tiến Phong — Fullstack Developer",
    "meta.home.ogDescription": "Fullstack Developer phát triển ứng dụng web trọn vẹn và trực tiếp vận hành hệ thống trên Ubuntu Home Server.",
    "meta.projects.title": "Dự án — Ngô Tiến Phong",
    "meta.projects.description": "Các dự án tiêu biểu đã triển khai: nền tảng đọc truyện sungthe.online, hệ thống crawler và dịch truyện bằng AI, kiến trúc microservices và các ứng dụng fullstack.",
    "meta.about.title": "Về tôi & Liên hệ — Ngô Tiến Phong",
    "meta.about.description": "Giới thiệu về Ngô Tiến Phong — Fullstack Developer (~2 năm kinh nghiệm) tại FPT Software, trực tiếp vận hành Ubuntu Home Server và phát triển các sản phẩm web, hệ thống tự động hóa.",

    "nav.home": "Ngô Tiến Phong — trang chủ",
    "nav.about": "Giới thiệu",
    "nav.homelab": "Home Server",
    "nav.projects": "Dự án",
    "nav.stack": "Công nghệ",
    "nav.experience": "Kinh nghiệm",
    "nav.aboutPage": "Về tôi",
    "nav.talk": "Liên hệ",
    "nav.langSwitch": "Đổi ngôn ngữ",
    "nav.toggle": "Mở hoặc đóng menu",

    "hero.eyebrow": "Sẵn sàng hợp tác & dự án mới",
    "hero.title": "Fullstack Developer,<br /> <span class=\"accent\">tích hợp AI & vận hành hệ thống thực tế.</span>",
    "hero.lead": "Tôi là <strong class=\"bold\">Ngô Tiến Phong</strong>, Fullstack Developer với <strong class=\"bold\">~2 năm kinh nghiệm</strong>, hiện đang là Software Engineer tại FPT Software (11/2024 – nay). Tôi phát triển ứng dụng web fullstack, xây dựng các pipeline tự động hóa tích hợp LLM / AI Agent và trực tiếp triển khai, vận hành hệ thống trên Ubuntu Home Server.",
    "hero.viewWork": "Xem dự án tiêu biểu",
    "hero.getInTouch": "Liên hệ với tôi",
    "cv.download": "Tải CV (PDF) ↓",
    "cv.file": "assets/Ngo-Tien-Phong-CV-VI.pdf",
    "hero.status": "Software Engineer @ FPT Software",
    "hero.basedIn": "~2 năm kinh nghiệm · Huế, Việt Nam",
    "hero.scroll": "Cuộn xuống phần giới thiệu",

    "about.heading": "Phát triển tính năng chỉ là bước đầu, mục tiêu của tôi là đưa hệ thống vận hành ổn định trong thực tế.",
    "about.p1": "Tôi bắt đầu từ lập trình web và phát triển theo hướng kỹ sư phần mềm. Công việc hằng ngày của tôi xoay quanh <strong class=\"bold\">Java</strong>, <strong class=\"bold\">Node.js / NestJS</strong>, <strong class=\"bold\">TypeScript</strong> và <strong class=\"bold\">React / Next.js</strong>. Thay vì chỉ làm việc ở riêng frontend hoặc backend, tôi chủ động tham gia xuyên suốt từ thiết kế dữ liệu, xây dựng API đến giao diện người dùng và khâu triển khai.",
    "about.p2": "Bên cạnh phát triển web, tôi tập trung mạnh vào việc ứng dụng AI vào sản phẩm thực tế: tích hợp LLM API (OpenAI, DeepSeek), thiết kế prompt giữ ngữ cảnh cho pipeline dịch thuật tự động, triển khai AI Agent nội bộ (OpenClaw) và tự vận hành toàn bộ trên Ubuntu Home Server.",
    "about.p3": "Ngoài thời gian làm việc, tôi có thói quen đọc tiểu thuyết trực tuyến. Phần lớn các sản phẩm cá nhân của tôi đều xuất phát từ việc tự xây dựng công cụ phục vụ cho nhu cầu thực tế này.",
    "about.more": "Xem thêm về tôi",

    "homelab.heading": "Tự vận hành trên Ubuntu Home Server",
    "homelab.intro": "Thay vì chỉ lưu mã nguồn trên GitHub, tôi tự vận hành một máy chủ Ubuntu để trực tiếp triển khai, giám sát và xử lý sự cố cho các dịch vụ đang hoạt động.",
    "homelab.badgeLive": "Hoạt động 24/7",
    "homelab.badgeSelf": "Self-hosted AI",
    "homelab.c1Title": "Hạ tầng Linux & Reverse Proxy",
    "homelab.c1Desc": "Quản trị trực tiếp Ubuntu Server với Nginx reverse proxy (HTTPS/SSL), cấu hình định tuyến subdomain rõ ràng và quản lý tiến trình bằng PM2 / Docker giúp triển khai nhanh và vận hành ổn định.",
    "homelab.c2Title": "Web Truyện Production (sungthe.online)",
    "homelab.c2Desc": "Triển khai trực tiếp nền tảng đọc truyện trực tuyến (Next.js + Express + SQLite) tích hợp luồng dịch thuật AI, phục vụ người dùng trên cả thiết bị di động và máy tính, chủ động hoàn toàn về dữ liệu và băng thông.",
    "homelab.c2Link": "Mở sungthe.online ↗",
    "homelab.c3Title": "OpenClaw AI Agent & LLM Pipelines",
    "homelab.c3Desc": "Self-host trợ lý AI Agent (OpenClaw) hỗ trợ tự động hóa quy trình kỹ thuật hằng ngày, vận hành song song với các worker thu thập dữ liệu và dịch thuật hàng loạt qua OpenAI / DeepSeek API.",
    "homelab.bannerTitle": "Giá trị từ việc tự vận hành máy chủ",
    "homelab.bannerDesc": "Trực tiếp làm việc với Linux, Nginx, SSL, log hệ thống và tài nguyên phần cứng giúp tôi nắm rõ toàn bộ luồng vận hành từ khâu triển khai đến trình duyệt người dùng, từ đó viết mã nguồn cẩn trọng và thực tế hơn.",
    "homelab.bannerBadge": "Ubuntu · Nginx · PM2 · Docker",

    "projects.heading": "Dự án tiêu biểu",
    "projects.viewAll": "Xem tất cả dự án",
    "projects.liveBadge": "Live · sungthe.online",
    "projects.sungtheTitle": "Nền tảng Web Truyện & Dịch thuật AI (sungthe.online)",
    "projects.sungtheAlt": "Ảnh chụp màn hình trang chủ nền tảng đọc truyện trực tuyến (sungthe.online)",
    "projects.sungthePreviewLabel": "Mở trang web sungthe.online trong tab mới",
    "projects.selfHostedBadge": "AI Pipeline · Home Server",
    "projects.openSungthe": "Mở sungthe.online ↗",
    "projects.privateRepoNote": "Self-hosted · Private repo",
    "projects.sungtheDesc": "Nền tảng đọc truyện trực tuyến vận hành thực tế trên Ubuntu Home Server. Tích hợp Bookhub Admin tự động hóa luồng thu thập dữ liệu và dịch thuật hàng loạt bằng LLM (OpenAI / DeepSeek), Author Studio cho tác giả và giao diện đọc tối ưu di động, đi kèm hơn 860 bài kiểm thử tự động (Vitest và node:test).",
    "projects.botsTitle": "Hệ thống Crawler & Pipeline Dịch thuật LLM",
    "projects.botsDesc": "Pipeline tự động hóa kết hợp Playwright, Puppeteer, Cheerio với LLM API (OpenAI / DeepSeek): tự động thu thập chương mới theo lịch, thiết kế prompt giữ ngữ cảnh và nhất quán thuật ngữ xuyên suốt bộ truyện, xử lý bất đồng bộ kèm retry/chuẩn hóa đầu ra và plugin dịch mở cho VBook.",
    "projects.botsNote": "LLM Automation · Private",
    "projects.openVbook": "GitHub: vbook-ext ↗",
    "projects.foodTitle": "Food Ordering — Monolith & Microservices",
    "projects.foodDesc": "Hệ thống đặt đồ ăn 3 vai trò (Khách hàng, Cửa hàng, Tài xế) được xây dựng song song trên hai kiến trúc để đối chiếu thực tiễn: bản Monolith (NestJS + MySQL, JWT, theo dõi đơn, đánh giá, thông báo đẩy) và bản Microservices tách thành 6 dịch vụ độc lập theo domain, kết hợp giao diện React + Vite.",
    "projects.linkMonolith": "Monolith (NestJS) ↗",
    "projects.linkMicro": "Microservices ↗",
    "projects.linkWeb": "Web (React) ↗",

    "stack.heading": "Công nghệ sử dụng",
    "stack.intro": "Các ngôn ngữ, framework và công cụ tôi trực tiếp sử dụng trong công việc hằng ngày và triển khai trên môi trường production, từ giao diện, API đến máy chủ Linux.",
    "stack.ts": "Phát triển fullstack an toàn kiểu dữ liệu",
    "stack.next": "App Router, SSR & giao diện ứng dụng",
    "stack.node": "REST API, worker nền & công cụ CLI",
    "stack.nest": "Backend theo module & kiến trúc microservices",
    "stack.java": "Hệ thống doanh nghiệp tại FPT Software",
    "stack.python": "Tự động hóa, xử lý dữ liệu & kịch bản AI",
    "stack.llm": "OpenAI, DeepSeek, Prompt Engineering & AI Pipeline",
    "stack.mysql": "Thiết kế cơ sở dữ liệu & tối ưu truy vấn",
    "stack.sqlite": "Nhẹ, nhanh, phù hợp cho dịch vụ self-host",
    "stack.ubuntu": "Quản trị Linux, reverse proxy & SSL",
    "stack.docker": "Đóng gói dịch vụ & duy trì vận hành 24/7",
    "stack.bots": "OpenClaw Agent, Playwright & tự động hóa",

    "exp.heading": "Kinh nghiệm & Học vấn",
    "exp.yoeBadge": "~2 năm kinh nghiệm",
    "exp.yoeDetail": "FPT Software · 11/2024 – nay",
    "exp.intro": "Kinh nghiệm phát triển hệ thống trong môi trường doanh nghiệp, song song với việc trực tiếp xây dựng và vận hành các sản phẩm cá nhân.",
    "exp.period.current": "FPT Software · 11/2024 – nay",
    "exp.period.ongoing": "Dự án cá nhân · Duy trì 24/7",
    "exp.period.alumni": "ĐH Khoa học Huế · 08/2020 – 06/2024",
    "exp.role1": "Software Engineer",
    "exp.role1.tag": "Full-time · Backend & Fullstack",
    "exp.role1.desc": "Phát triển và bảo trì các dịch vụ backend cho khách hàng doanh nghiệp bằng Java, Node.js và REST API, tập trung vào tính ổn định, khả năng theo dõi log và vận hành an toàn.",
    "exp.role1.li1": "Thiết kế và triển khai các API, service phục vụ tích hợp cho các nhóm phát triển sản phẩm.",
    "exp.role1.li2": "Làm việc thường xuyên với Java, Node.js / NestJS, TypeScript và SQL.",
    "exp.role1.li3": "Duy trì quy trình triển khai rõ ràng, nhất quán, dễ hoàn tác (rollback) và đầy đủ tài liệu kỹ thuật.",
    "exp.role2": "Fullstack & AI Automation Builder",
    "exp.role2.tag": "LLM Pipelines, AI Agents & Ubuntu Home Server",
    "exp.role2.desc": "Trực tiếp thiết kế, phát triển và vận hành các ứng dụng web tích hợp AI, pipeline xử lý ngôn ngữ tự nhiên bằng LLM và hạ tầng máy chủ Linux hoạt động 24/7.",
    "exp.role2.li1": "Xây dựng pipeline dịch thuật tự động qua OpenAI / DeepSeek API với kỹ thuật giữ ngữ cảnh, kết hợp crawler Playwright và phát triển tiện ích mã nguồn mở vbook-ext.",
    "exp.role2.li2": "Vận hành nền tảng đọc truyện trực tuyến sungthe.online (Next.js + Express + SQLite) tích hợp quản trị dịch AI với hơn 860 bài kiểm thử tự động.",
    "exp.role2.li3": "Triển khai nội bộ AI Agent (OpenClaw) hỗ trợ quy trình kỹ thuật và quản trị toàn bộ dịch vụ qua Nginx, PM2 và Docker.",
    "exp.role3": "Cử nhân Công nghệ Thông tin",
    "exp.role3.tag": "Kỹ thuật phần mềm & Hệ thống thông tin",
    "exp.role3.desc": "Xây dựng nền tảng chuyên môn về cấu trúc dữ liệu, cơ sở dữ liệu, mạng máy tính và kỹ năng nghiên cứu tài liệu kỹ thuật để giải quyết vấn đề.",
    "exp.role3.li1": "Tốt nghiệp chuyên ngành Kỹ thuật phần mềm và Hệ thống thông tin tại ĐH Khoa học Huế.",
    "exp.role3.li2": "Thực hiện trọn vẹn đồ án tốt nghiệp GoShip Delivery — Hệ thống Điều phối & Giao nhận (React + Node.js) ở cả frontend và backend.",

    "stats.yoe": "Năm kinh nghiệm lập trình",
    "stats.server": "Ubuntu Home Server tự vận hành",
    "stats.tests": "Bài kiểm thử tự động (Vitest & API)",
    "stats.projects": "Dự án tiêu biểu đã triển khai",

    "cta.heading": "Trao đổi công việc hoặc hợp tác dự án?",
    "cta.body": "Tôi sẵn sàng trao đổi về các cơ hội vị trí Fullstack Developer, hợp tác phát triển sản phẩm web hoặc thảo luận kỹ thuật về kiến trúc backend, tự động hóa và vận hành máy chủ.",
    "cta.email": "Gửi email cho tôi",
    "cta.github": "Xem GitHub của tôi",

    "footer.tagline": "Fullstack Developer & Self-Host Builder. Phát triển giao diện, API, hệ thống tự động hóa và vận hành dịch vụ thực tế trên Ubuntu Home Server.",
    "footer.navigate": "Điều hướng",
    "footer.contact": "Liên hệ",
    "footer.allRepos": "Tất cả repository",
    "footer.built": "Xây dựng bằng HTML, CSS và JavaScript thuần.",
    "footer.design": "Giao diện lấy cảm hứng từ Developer X (BRIX Templates), mã nguồn và nội dung được tự phát triển.",

    "projectsPage.heading": "Các dự án tiêu biểu.",
    "projectsPage.intro": "Tổng hợp các dự án tiêu biểu đã triển khai hoàn chỉnh, từ ứng dụng web đang vận hành trên Home Server, hệ thống tự động hóa tích hợp AI đến các kiến trúc fullstack và microservices.",
    "projectsPage.filterLabel": "Lọc dự án theo nhóm",
    "projectsPage.filterAll": "Tất cả",
    "projectsPage.filterLive": "Đang chạy (Live)",
    "projectsPage.filterBot": "Bot & AI",
    "projectsPage.filterFullstack": "Fullstack",
    "projectsPage.filterBackend": "Backend / Microservices",
    "projectsPage.sungtheDesc": "Nền tảng đọc truyện trực tuyến đang vận hành trên Ubuntu Home Server với Next.js 16 App Router (React 19), Express và SQLite. Tích hợp Bookhub Admin điều phối luồng thu thập dữ liệu và dịch thuật tự động qua LLM API, Author Studio cho tác giả và giao diện đọc tối ưu di động (835 Vitest và 28 backend tests).",
    "projectsPage.botsTitle": "Hệ thống Crawler & Pipeline Dịch thuật LLM",
    "projectsPage.botsDesc": "Hệ thống worker tự động hóa trên Ubuntu Server kết hợp Playwright, Puppeteer, Cheerio với pipeline dịch thuật LLM (OpenAI / DeepSeek API): thiết kế prompt giữ ngữ cảnh và bảng thuật ngữ nhân vật xuyên suốt các chương, xử lý batch bất đồng bộ kèm cơ chế tự động retry và chuẩn hóa văn bản đầu ra.",
    "projectsPage.vbookTitle": "VBook AI Translate Extension",
    "projectsPage.vbookDesc": "Tiện ích dịch thuật AI mã nguồn mở dành cho ứng dụng đọc truyện VBook trên Android và iOS, tích hợp trực tiếp các LLM chuẩn OpenAI-compatible API (DeepSeek, OpenAI, custom endpoint) với khả năng tùy biến system prompt, model và base URL linh hoạt.",
    "projectsPage.foodTitle": "Food Ordering — Monolith & Microservices",
    "projectsPage.foodDesc": "Hệ thống đặt đồ ăn 3 vai trò (Khách hàng, Cửa hàng, Tài xế) được xây dựng song song trên hai kiến trúc để đối chiếu thực tiễn: bản Monolith (NestJS + MySQL) xử lý trọn vẹn xác thực JWT, vòng đời đơn hàng, đánh giá và thông báo đẩy; bản Microservices phân tách thành 6 dịch vụ độc lập theo domain để so sánh bài toán giao tiếp liên dịch vụ và phân tán dữ liệu; kết hợp giao diện web React + Vite.",
    "projectsPage.deliveryTitle": "GoShip Delivery — Hệ thống Điều phối & Giao nhận (Đồ án tốt nghiệp)",
    "projectsPage.deliveryDesc": "Nền tảng quản lý và điều phối giao nhận fullstack tách biệt giữa Frontend (React + Vite) và Backend (Node.js REST API), bao quát trọn vẹn luồng tạo vận đơn, phân công tài xế, theo dõi trạng thái giao hàng theo thời gian thực, đối soát lịch sử và bảng điều khiển quản trị.",
    "projectsPage.linkFe": "Front-end (React) ↗",
    "projectsPage.linkBe": "Back-end (Node.js) ↗",
    "projectsPage.more": "Các dự án và mã nguồn khác được lưu trữ tại",
    "projectsPage.ctaHeading": "Bạn có dự án cần triển khai thành sản phẩm thực tế?",
    "projectsPage.ctaBody": "Từ ứng dụng web fullstack, hệ thống backend API đến công cụ tự động hóa hoặc triển khai trên máy chủ riêng, hãy liên hệ để tôi có thể trao đổi chi tiết cùng bạn.",

    "aboutPage.heading": "Fullstack Developer làm chủ trọn vẹn quy trình, từ phát triển mã nguồn đến vận hành hệ thống.",
    "aboutPage.intro": "Tôi phát triển backend, giao diện người dùng, hệ thống tự động hóa và trực tiếp quản trị máy chủ Ubuntu. Việc tham gia trọn vẹn vòng đời phần mềm giúp tôi nắm rõ cách hệ thống vận hành và xử lý vấn đề hiệu quả hơn.",
    "aboutPage.caption": "Fullstack Developer · FPT Software",
    "aboutPage.captionYoe": "~2 năm kinh nghiệm · 11/2024 – nay",
    "aboutPage.shortVersion": "Giới thiệu tổng quan",
    "aboutPage.p1": "Tôi là Fullstack Developer với ~2 năm kinh nghiệm, hiện đang làm Software Engineer tại FPT Software từ tháng 11/2024. Công việc hằng ngày của tôi tập trung vào Java, Node.js / NestJS, TypeScript và React / Next.js, bao quát từ thiết kế cơ sở dữ liệu, xây dựng API đến giao diện người dùng.",
    "aboutPage.p2": "Tôi sinh sống tại Huế và tốt nghiệp Trường Đại học Khoa học Huế (08/2020 – 06/2024). Điểm mạnh của tôi là chủ động ứng dụng AI vào thực tiễn kỹ thuật: từ tích hợp LLM API (OpenAI, DeepSeek), xây dựng pipeline dịch thuật tự động giữ ngữ cảnh cho nền tảng web truyện sungthe.online, đến triển khai AI Agent (OpenClaw) phục vụ tự động hóa công việc hằng ngày.",
    "aboutPage.p3": "Tôi tự duy trì một máy chủ Ubuntu Home Server hoạt động 24/7 để vận hành web truyện production, các worker thu thập và xử lý ngôn ngữ bằng AI theo lịch, cùng trợ lý AI Agent nội bộ. Việc trực tiếp cấu hình Nginx, chứng chỉ SSL, PM2/Docker và xử lý sự cố thực tế giúp tôi chủ động hoàn toàn ở khâu triển khai và vận hành.",
    "aboutPage.p4": "Khi viết mã nguồn, tôi ưu tiên kiến trúc rõ ràng, công nghệ ổn định và cách tiếp cận đơn giản, dễ bảo trì thay vì làm phức tạp hóa vấn đề. Ngay cả trang portfolio này cũng được tôi xây dựng hoàn toàn bằng HTML, CSS và JavaScript thuần, không phụ thuộc framework để đảm bảo tốc độ tải nhanh và gọn nhẹ.",
    "aboutPage.timelineIntro": "Tóm tắt quá trình học tập, làm việc và các dự án tôi đã triển khai.",
    "aboutPage.t1": "Software Engineer",
    "aboutPage.t1desc": "Phát triển và bảo trì hệ thống backend cho khách hàng doanh nghiệp bằng Java và hệ sinh thái Node.js / NestJS, chú trọng tính ổn định, đặc tả API rõ ràng và mã nguồn dễ bảo trì.",
    "aboutPage.t2": "Fullstack & AI Automation Builder",
    "aboutPage.t2desc": "Thiết kế và vận hành nền tảng web truyện sungthe.online, xây dựng pipeline dịch thuật LLM (OpenAI / DeepSeek) kết hợp crawler tự động và self-host AI Agent (OpenClaw) trên Ubuntu Home Server hoạt động 24/7.",
    "aboutPage.t3": "Cử nhân Công nghệ Thông tin",
    "aboutPage.t3desc": "Tốt nghiệp chuyên ngành Kỹ thuật phần mềm. Đồ án tốt nghiệp GoShip Delivery — Hệ thống Điều phối & Giao nhận (React + Node.js) là sản phẩm fullstack đầu tiên tôi trực tiếp xây dựng hoàn chỉnh cả frontend và backend.",
    "aboutPage.howHeading": "Nguyên tắc làm việc",
    "aboutPage.howIntro": "Ba nguyên tắc tôi luôn áp dụng trong quá trình phát triển phần mềm.",
    "aboutPage.card1": "Thiết kế rõ ràng từ dữ liệu và API",
    "aboutPage.card1desc": "Trước khi triển khai nghiệp vụ, tôi luôn xác định rõ cấu trúc dữ liệu, đặc tả đầu vào/đầu ra và điều kiện kiểm tra của API. Làm chặt chẽ ngay từ đầu giúp hạn chế rủi ro dữ liệu và giảm đáng kể chi phí chỉnh sửa về sau.",
    "aboutPage.card2": "Hướng đến sản phẩm vận hành thực tế",
    "aboutPage.card2desc": "Phần mềm chỉ thực sự hoàn thiện khi được triển khai ổn định và phục vụ tốt người dùng. Tôi ưu tiên môi trường dễ thiết lập, có kiểm thử tự động và quy trình triển khai rõ ràng trên máy chủ Linux.",
    "aboutPage.card3": "Mã nguồn rõ ràng, dễ bảo trì",
    "aboutPage.card3desc": "Đặt tên biến và hàm rõ nghĩa, phân tách trách nhiệm hợp lý và tránh lạm dụng các lớp trừu tượng không cần thiết. Tôi luôn viết mã nguồn dễ đọc để bất kỳ thành viên nào trong nhóm cũng có thể nhanh chóng tiếp quản và bảo trì.",
    "aboutPage.contactHeading": "Liên hệ với tôi",
    "aboutPage.contactIntro": "Nếu bạn cần trao đổi về cơ hội công việc Fullstack, hợp tác phát triển sản phẩm hoặc thảo luận chuyên môn kỹ thuật, vui lòng liên hệ với tôi qua email hoặc biểu mẫu bên dưới.",

    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.basedIn": "Khu vực",
    "contact.basedInValue": "Huế, Việt Nam · GMT+7",
    "contact.into": "Đang tập trung",
    "contact.intoValue": "Fullstack, LLM / AI Agents & Ubuntu Home Server",

    "form.nameLabel": "Tên của bạn",
    "form.emailLabel": "Email của bạn",
    "form.messageLabel": "Nội dung tin nhắn",
    "form.name": "Tên của bạn",
    "form.email": "Email của bạn",
    "form.message": "Nhập thông tin dự án hoặc nội dung bạn muốn trao đổi...",
    "form.submit": "Gửi tin nhắn",
    "form.note": "Biểu mẫu này sẽ mở ứng dụng email mặc định với nội dung đã điền sẵn, không gửi qua máy chủ trung gian và không lưu trữ dữ liệu.",
    "form.subject": "Liên hệ từ portfolio — {name}",
    "form.body": "Chào Phong,\n\n{message}\n\n— {name}\n{email}",
    "form.error": "Vui lòng điền đầy đủ họ tên, email và nội dung tin nhắn.",
    "form.success": "Đang mở ứng dụng email của bạn…",
    "form.copied": "Đã sao chép!"
  };

  var en = {
    "meta.home.title": "Ngô Tiến Phong — Fullstack Developer & Self-Host Builder",
    "meta.home.description": "Portfolio of Ngô Tiến Phong — Fullstack Developer (~2 years of experience) & Software Engineer at FPT Software. Building full-stack web applications (Next.js, React, Node.js, NestJS, Java), AI automation pipelines, and operating an Ubuntu Home Server.",
    "meta.home.ogTitle": "Ngô Tiến Phong — Fullstack Developer",
    "meta.home.ogDescription": "Fullstack Developer building end-to-end web applications and operating production services on an Ubuntu Home Server.",
    "meta.projects.title": "Projects — Ngô Tiến Phong",
    "meta.projects.description": "Selected deployed projects: the live reading platform sungthe.online, AI crawling & translation pipelines, microservices, and full-stack web applications.",
    "meta.about.title": "About & Contact — Ngô Tiến Phong",
    "meta.about.description": "About Ngô Tiến Phong — Fullstack Developer (~2 years of experience) & Software Engineer at FPT Software, building web applications, automation tools, and self-hosted services.",

    "nav.home": "Ngô Tiến Phong — home",
    "nav.about": "About",
    "nav.homelab": "Home Server",
    "nav.projects": "Projects",
    "nav.stack": "Stack",
    "nav.experience": "Experience",
    "nav.aboutPage": "About me",
    "nav.talk": "Contact",
    "nav.langSwitch": "Switch language",
    "nav.toggle": "Toggle navigation",

    "hero.eyebrow": "Open to new opportunities & collaborations",
    "hero.title": "Fullstack Developer,<br /> <span class=\"accent\">AI integration & live system operations.</span>",
    "hero.lead": "I am <strong class=\"bold\">Ngô Tiến Phong</strong>, a Fullstack Developer with <strong class=\"bold\">~2 years of experience</strong>, currently working as a Software Engineer at FPT Software (11/2024 – present). I build full-stack web applications, engineer LLM / AI Agent automation pipelines, and manage my own Ubuntu Home Server to run live production services.",
    "hero.viewWork": "View selected work",
    "hero.getInTouch": "Get in touch",
    "cv.download": "Download CV (PDF) ↓",
    "cv.file": "assets/Ngo-Tien-Phong-CV-EN.pdf",
    "hero.status": "Software Engineer @ FPT Software",
    "hero.basedIn": "~2 years of experience · Hue, Vietnam",
    "hero.scroll": "Scroll to about section",

    "about.heading": "Building features is only the first step; my focus is keeping systems reliable in production.",
    "about.p1": "I started with web development and progressed into software engineering. My daily work centers on <strong class=\"bold\">Java</strong>, <strong class=\"bold\">Node.js / NestJS</strong>, <strong class=\"bold\">TypeScript</strong>, and <strong class=\"bold\">React / Next.js</strong>. Rather than focusing solely on frontend or backend, I take ownership across database design, API development, user interfaces, and deployment.",
    "about.p2": "Alongside web engineering, I focus heavily on practical AI integration: building LLM API pipelines (OpenAI, DeepSeek) with context-preserving prompts for automated translation, deploying an internal AI Agent (OpenClaw) for daily workflows, and operating everything on my Ubuntu Home Server.",
    "about.p3": "Outside of work, I enjoy reading online novels, and most of my personal projects began as practical tools built to support that interest.",
    "about.more": "More about me",

    "homelab.heading": "Self-hosted on an Ubuntu Home Server",
    "homelab.intro": "Rather than leaving projects strictly on GitHub, I maintain an Ubuntu server to handle deployment, monitoring, and troubleshooting for live services.",
    "homelab.badgeLive": "24/7 Online",
    "homelab.badgeSelf": "Self-hosted AI",
    "homelab.c1Title": "Linux Infra & Reverse Proxy",
    "homelab.c1Desc": "Direct Ubuntu Server administration with Nginx reverse proxy (HTTPS/SSL), structured subdomain routing, and PM2 / Docker process management for reliable deployments and maintenance.",
    "homelab.c2Title": "Production Web Platform (sungthe.online)",
    "homelab.c2Desc": "Hosts the live web-novel reading platform (Next.js + Express + SQLite) with integrated AI translation workflows, serving users across mobile and desktop with full control over data and infrastructure.",
    "homelab.c2Link": "Visit sungthe.online ↗",
    "homelab.c3Title": "OpenClaw AI Agent & LLM Pipelines",
    "homelab.c3Desc": "Runs a self-hosted OpenClaw AI Agent to automate daily engineering workflows alongside scheduled workers that crawl and batch-translate content via OpenAI / DeepSeek APIs.",
    "homelab.bannerTitle": "Value of self-hosting",
    "homelab.bannerDesc": "Working directly with Linux, Nginx, SSL certificates, system logs, and hardware constraints gives me visibility across the entire lifecycle from deployment to the user's browser, leading to more deliberate and practical code.",
    "homelab.bannerBadge": "Ubuntu · Nginx · PM2 · Docker",

    "projects.heading": "Selected projects",
    "projects.viewAll": "View all projects",
    "projects.liveBadge": "Live · sungthe.online",
    "projects.sungtheTitle": "AI-Powered Web Novel Platform (sungthe.online)",
    "projects.sungtheAlt": "Homepage screenshot of the online web-novel platform (sungthe.online)",
    "projects.sungthePreviewLabel": "Open live website sungthe.online in a new tab",
    "projects.selfHostedBadge": "AI Pipeline · Home Server",
    "projects.openSungthe": "Open sungthe.online ↗",
    "projects.privateRepoNote": "Self-hosted · Private repo",
    "projects.sungtheDesc": "A production web-novel platform running on my Ubuntu Home Server. Integrates Bookhub Admin to orchestrate automated crawling and batch LLM translation (OpenAI / DeepSeek), an Author Studio for publishing, and a mobile-optimized reader, backed by 860+ automated tests (Vitest and node:test).",
    "projects.botsTitle": "Crawler & LLM Translation Pipeline",
    "projects.botsDesc": "An AI automation pipeline combining Playwright, Puppeteer, and Cheerio with LLM APIs (OpenAI / DeepSeek): scheduled chapter fetching, prompt engineering for cross-chapter context & glossary consistency, async batch processing with retry/normalization, plus an open-source VBook translation plugin.",
    "projects.botsNote": "LLM Automation · Private",
    "projects.openVbook": "GitHub: vbook-ext ↗",
    "projects.foodTitle": "Food Ordering — Monolith & Microservices",
    "projects.foodDesc": "A 3-role food-ordering platform (Customer, Shop, Driver) built in parallel across two architectures for direct engineering comparison: a NestJS + MySQL monolith (JWT, order tracking, ratings, push notifications) and a 6-service domain-split microservices edition, paired with a React + Vite web client.",
    "projects.linkMonolith": "Monolith (NestJS) ↗",
    "projects.linkMicro": "Microservices ↗",
    "projects.linkWeb": "Web (React) ↗",

    "stack.heading": "Technologies I use",
    "stack.intro": "Languages, frameworks, and tools I use in daily engineering work and production deployments, from user interfaces and APIs to Linux infrastructure.",
    "stack.ts": "Type-safe full-stack development",
    "stack.next": "App Router, SSR & interactive UIs",
    "stack.node": "REST APIs, background workers & CLIs",
    "stack.nest": "Modular APIs & microservices",
    "stack.java": "Enterprise backend services at FPT",
    "stack.python": "Automation, data & AI scripts",
    "stack.llm": "OpenAI, DeepSeek, Prompt Engineering & AI Pipelines",
    "stack.mysql": "Relational schema & query design",
    "stack.sqlite": "Lightweight and fast for self-hosted services",
    "stack.ubuntu": "Linux ops, reverse proxy & SSL",
    "stack.docker": "Containerized & 24/7 managed services",
    "stack.bots": "OpenClaw Agent, Playwright & automation",

    "exp.heading": "Experience & Education",
    "exp.yoeBadge": "~2 years of experience",
    "exp.yoeDetail": "FPT Software · 11/2024 – Present",
    "exp.intro": "Enterprise backend engineering experience alongside independently building and operating personal software products.",
    "exp.period.current": "FPT Software · 11/2024 – Present",
    "exp.period.ongoing": "Side Projects · 24/7 Live",
    "exp.period.alumni": "Hue University of Science · 08/2020 – 06/2024",
    "exp.role1": "Software Engineer",
    "exp.role1.tag": "Full-time · Backend & Fullstack",
    "exp.role1.desc": "Developing and maintaining backend services for enterprise clients using Java, Node.js, and REST APIs, with a focus on reliability, logging observability, and safe operations.",
    "exp.role1.li1": "Design and implement APIs and services for seamless integration by product teams.",
    "exp.role1.li2": "Work across Java, Node.js / NestJS, TypeScript, and SQL.",
    "exp.role1.li3": "Keep deployments predictable: repeatable, reversible, and well documented.",
    "exp.role2": "Fullstack & AI Automation Builder",
    "exp.role2.tag": "LLM Pipelines, AI Agents & Ubuntu Home Server",
    "exp.role2.desc": "Independently designing, developing, and operating AI-integrated web applications, LLM natural-language pipelines, and 24/7 Linux server infrastructure.",
    "exp.role2.li1": "Engineered context-aware LLM translation pipelines via OpenAI / DeepSeek APIs paired with Playwright crawlers and the open-source vbook-ext plugin.",
    "exp.role2.li2": "Operate the live web-novel platform sungthe.online (Next.js + Express + SQLite) with integrated AI translation admin tools and 860+ automated tests.",
    "exp.role2.li3": "Self-host an internal OpenClaw AI Agent for workflow automation and manage all services via Nginx, PM2, and Docker.",
    "exp.role3": "B.Sc. Information Technology",
    "exp.role3.tag": "Software Engineering & Information Systems",
    "exp.role3.desc": "Built core computer science foundations in data structures, databases, networking, and technical documentation analysis.",
    "exp.role3.li1": "Graduated in Software Engineering & Information Systems from Hue University of Science.",
    "exp.role3.li2": "Built GoShip Delivery — Dispatch & Logistics Platform (React + Node.js) end to end as my graduation project.",

    "stats.yoe": "Years of experience (YOE)",
    "stats.server": "Self-hosted Ubuntu Home Server",
    "stats.tests": "Automated tests (Vitest & API)",
    "stats.projects": "Featured deployed projects",

    "cta.heading": "Interested in working together?",
    "cta.body": "I am available to discuss Fullstack Developer opportunities, web product collaborations, or technical topics around backend architecture, automation, and server operations.",
    "cta.email": "Send me an email",
    "cta.github": "See my GitHub",

    "footer.tagline": "Fullstack Developer & Self-Host Builder. Building interfaces, APIs, automation systems, and operating production services on an Ubuntu Home Server.",
    "footer.navigate": "Navigate",
    "footer.contact": "Contact",
    "footer.allRepos": "All repositories",
    "footer.built": "Built with plain HTML, CSS, and JavaScript.",
    "footer.design": "Design inspired by Developer X (BRIX Templates); code and content developed independently.",

    "projectsPage.heading": "Curated projects.",
    "projectsPage.intro": "A curated selection of completed projects, ranging from live web services on my Home Server and AI automation pipelines to full-stack and microservices architectures.",
    "projectsPage.filterLabel": "Filter projects by category",
    "projectsPage.filterAll": "All",
    "projectsPage.filterLive": "Live / Production",
    "projectsPage.filterBot": "Bots & AI",
    "projectsPage.filterFullstack": "Fullstack",
    "projectsPage.filterBackend": "Backend / Microservices",
    "projectsPage.sungtheDesc": "A production web-novel platform hosted on my Ubuntu Home Server using Next.js 16 App Router (React 19), Express, and SQLite. Integrates Bookhub Admin to orchestrate data crawling and automated LLM translation jobs, Author Studio for writers, and a mobile-first reader (835 Vitest + 28 backend tests).",
    "projectsPage.botsTitle": "Crawler & LLM Translation Pipeline",
    "projectsPage.botsDesc": "Automated worker system on Ubuntu Server combining Playwright, Puppeteer, and Cheerio with an LLM translation pipeline (OpenAI / DeepSeek API): prompt engineering for cross-chapter context & character glossary consistency, async batch processing, auto-retry, and output normalization.",
    "projectsPage.vbookTitle": "VBook AI Translate Extension",
    "projectsPage.vbookDesc": "Open-source AI translation extension for the VBook reading app on Android and iOS, integrating OpenAI-compatible LLM APIs (DeepSeek, OpenAI, custom endpoints) with customizable system prompts, model selection, and base URL.",
    "projectsPage.foodTitle": "Food Ordering — Monolith & Microservices",
    "projectsPage.foodDesc": "A 3-role food-ordering platform (Customer, Shop, Driver) implemented in parallel across two architectures for direct comparison: a NestJS + MySQL monolith covering JWT auth, order lifecycle, ratings, and push notifications; a 6-service microservices architecture split by domain to evaluate inter-service communication and data boundaries; and a React + Vite web client.",
    "projectsPage.deliveryTitle": "GoShip Delivery — Dispatch & Logistics Platform (Graduation Project)",
    "projectsPage.deliveryDesc": "A full-stack delivery & dispatch management platform split cleanly into a React + Vite front end and a Node.js REST API back end, covering shipment creation, driver dispatch, real-time delivery status tracking, order history reconciliation, and an admin dashboard.",
    "projectsPage.linkFe": "Front-end (React) ↗",
    "projectsPage.linkBe": "Back-end (Node.js) ↗",
    "projectsPage.more": "Additional projects and source code are available at",
    "projectsPage.ctaHeading": "Have a project you want to bring to production?",
    "projectsPage.ctaBody": "From full-stack web applications and backend APIs to automation systems or self-hosted deployments, feel free to get in touch to discuss details.",

    "aboutPage.heading": "Fullstack Developer owning the full workflow, from application code to system operations.",
    "aboutPage.intro": "I develop backend services, user interfaces, and automation systems while directly managing an Ubuntu server. Participating across the full software lifecycle helps me understand how systems behave and solve issues more effectively.",
    "aboutPage.caption": "Fullstack Developer · FPT Software",
    "aboutPage.captionYoe": "~2 years of experience · 11/2024 – Present",
    "aboutPage.shortVersion": "Overview",
    "aboutPage.p1": "I am a Fullstack Developer with ~2 years of experience, currently working as a Software Engineer at FPT Software since November 2024. My daily work focuses on Java, Node.js / NestJS, TypeScript, and React / Next.js, covering database design, API development, and user interfaces.",
    "aboutPage.p2": "I am based in Hue and graduated from Hue University of Science (08/2020 – 06/2024). A core strength of mine is applying AI practically in software engineering: integrating LLM APIs (OpenAI, DeepSeek), building context-preserving automated translation pipelines for the web-novel platform sungthe.online, and deploying an internal AI Agent (OpenClaw) for daily workflow automation.",
    "aboutPage.p3": "I maintain a 24/7 Ubuntu Home Server running the production web-novel platform, scheduled AI language-processing and crawling workers, and my self-hosted AI Agent. Directly configuring Nginx, SSL certificates, PM2/Docker, and troubleshooting production issues gives me full ownership of deployment and operations.",
    "aboutPage.p4": "In software development, I prioritize clear architecture, stable technologies, and straightforward, maintainable solutions over unnecessary complexity. This portfolio itself is built with plain HTML, CSS, and JavaScript, keeping it lightweight and fast without relying on a framework.",
    "aboutPage.timelineIntro": "A summary of my education, professional experience, and shipped projects.",
    "aboutPage.t1": "Software Engineer",
    "aboutPage.t1desc": "Developing and maintaining enterprise backend services with Java and the Node.js / NestJS ecosystem, focused on reliability, clear API specifications, and maintainable code.",
    "aboutPage.t2": "Fullstack & AI Automation Builder",
    "aboutPage.t2desc": "Designing and operating the web-novel platform sungthe.online, building LLM translation pipelines (OpenAI / DeepSeek) with automated crawlers, and self-hosting an OpenClaw AI Agent on an Ubuntu Home Server with 24/7 uptime.",
    "aboutPage.t3": "B.Sc. Information Technology",
    "aboutPage.t3desc": "Graduated in Software Engineering. My graduation project, GoShip Delivery — Dispatch & Logistics Platform (React + Node.js), was the first full-stack platform I built end to end.",
    "aboutPage.howHeading": "Working principles",
    "aboutPage.howIntro": "Three principles I consistently apply across software projects.",
    "aboutPage.card1": "Clear data & API design",
    "aboutPage.card1desc": "Before implementing business logic, I define clear data structures, API input/output contracts, and validation rules. Establishing rigor early minimizes data risks and avoids costly rework later.",
    "aboutPage.card2": "Built for real-world operation",
    "aboutPage.card2desc": "Software is only complete when it runs reliably and serves users effectively. I prioritize reproducible setups, automated testing, and predictable deployment workflows on Linux servers.",
    "aboutPage.card3": "Readable, maintainable code",
    "aboutPage.card3desc": "Meaningful naming, clear separation of responsibilities, and avoiding unnecessary abstractions. I write code to remain readable so any team member can quickly take over and extend it.",
    "aboutPage.contactHeading": "Get in touch",
    "aboutPage.contactIntro": "If you would like to discuss Fullstack opportunities, product collaboration, or technical topics, please reach out via email or the contact form below.",

    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.basedIn": "Based in",
    "contact.basedInValue": "Hue, Vietnam · GMT+7",
    "contact.into": "Focus areas",
    "contact.intoValue": "Fullstack, LLM / AI Agents & Ubuntu Home Server",

    "form.nameLabel": "Your name",
    "form.emailLabel": "Your email",
    "form.messageLabel": "Your message",
    "form.name": "Your name",
    "form.email": "Your email",
    "form.message": "Share details about your project or what you would like to discuss...",
    "form.submit": "Send message",
    "form.note": "This form opens your default email client with the message pre-filled; no data is sent to an intermediary server or stored.",
    "form.subject": "Portfolio enquiry from {name}",
    "form.body": "Hi Phong,\n\n{message}\n\n— {name}\n{email}",
    "form.error": "Please fill in your name, email, and message.",
    "form.success": "Opening your mail app…",
    "form.copied": "Copied!"
  };

  var DICT = { vi: vi, en: en };
  var current = null;

  function each(selector, fn) {
    var nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) fn(nodes[i]);
  }

  /* The language to show: an explicit choice wins, then the saved
     preference, then the language already set on <html>, then Vietnamese. */
  function getLang() {
    if (current) return current;
    var stored = null;
    try { stored = global.localStorage.getItem(STORAGE_KEY); } catch (e) { stored = null; }
    if (stored && DICT[stored]) return stored;
    var attr = document.documentElement.getAttribute("lang");
    if (attr && DICT[attr]) return attr;
    return DEFAULT_LANG;
  }

  /* Look up a key in the active language. {tokens} are replaced. */
  function t(key, vars) {
    var dict = DICT[current] || DICT[DEFAULT_LANG];
    var value = dict[key];
    if (value === undefined) value = DICT[DEFAULT_LANG][key];
    if (value === undefined) return key;
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        value = value.split("{" + name + "}").join(String(vars[name]));
      });
    }
    return value;
  }

  /* Swap every tagged string in the document to `lang`. */
  function apply(lang, options) {
    if (!DICT[lang]) lang = DEFAULT_LANG;
    current = lang;
    var opts = options || {};
    var dict = DICT[lang];

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.removeAttribute("data-lang-pending");

    each("[data-i18n]", function (el) {
      var value = dict[el.getAttribute("data-i18n")];
      if (value !== undefined && el.textContent !== value) el.textContent = value;
    });

    each("[data-i18n-html]", function (el) {
      var value = dict[el.getAttribute("data-i18n-html")];
      if (value !== undefined && el.innerHTML !== value) el.innerHTML = value;
    });

    each("[data-i18n-attr]", function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var separator = pair.indexOf(":");
        if (separator < 1) return;
        var attr = pair.slice(0, separator).trim();
        var key = pair.slice(separator + 1).trim();
        var value = dict[key];
        if (attr && value !== undefined) el.setAttribute(attr, value);
      });
    });

    each("[data-i18n-content]", function (el) {
      var value = dict[el.getAttribute("data-i18n-content")];
      if (value !== undefined) el.setAttribute("content", value);
    });

    each("[data-lang]", function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    if (opts.persist !== false) {
      try { global.localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    }
  }

  /* One click handler for every VN / EN button on the page. */
  function bind() {
    each("[data-lang]", function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (lang && lang !== current) apply(lang);
      });
    });
  }

  global.I18N = {
    vi: vi,
    en: en,
    getLang: getLang,
    t: t,
    apply: apply,
    bind: bind,
    STORAGE_KEY: STORAGE_KEY
  };

  function start() {
    bind();
    apply(getLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})(window, document);
