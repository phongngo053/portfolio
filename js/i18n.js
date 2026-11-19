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
    "meta.home.description": "Portfolio của Ngô Tiến Phong — Fullstack Developer tại FPT Software. Xây sản phẩm web trọn gói (Next.js, React, Node.js, NestJS, Java), bot truyện AI và tự vận hành Ubuntu Home Server.",
    "meta.home.ogTitle": "Ngô Tiến Phong — Fullstack Developer",
    "meta.home.ogDescription": "Fullstack Developer tự code, tự dựng Ubuntu Home Server và vận hành sản phẩm thật ra ngoài.",
    "meta.projects.title": "Dự án — Ngô Tiến Phong",
    "meta.projects.description": "Các dự án đã triển khai: web đọc truyện live sungthe.online, dàn bot crawl & dịch truyện AI, kiến trúc microservices và ứng dụng fullstack.",
    "meta.about.title": "Về mình & Liên hệ — Ngô Tiến Phong",
    "meta.about.description": "Giới thiệu về Ngô Tiến Phong — Fullstack Developer tại FPT Software, tự vận hành Ubuntu Home Server và xây sản phẩm web/bot thực tế.",

    "nav.home": "Ngô Tiến Phong — trang chủ",
    "nav.about": "Giới thiệu",
    "nav.homelab": "Home Server",
    "nav.projects": "Dự án",
    "nav.stack": "Công nghệ",
    "nav.experience": "Kinh nghiệm",
    "nav.aboutPage": "Về mình",
    "nav.talk": "Liên hệ",
    "nav.langSwitch": "Đổi ngôn ngữ",
    "nav.toggle": "Mở hoặc đóng menu",

    "hero.eyebrow": "Sẵn sàng hợp tác & dự án mới",
    "hero.title": "Fullstack developer tự code,<br /> <span class=\"accent\">tự dựng server và chạy sản phẩm thật.</span>",
    "hero.lead": "Mình là <strong class=\"bold\">Ngô Tiến Phong</strong> — Fullstack Developer, hiện là Software Engineer tại FPT Software. Mình làm trọn gói từ giao diện, backend, bot tự động cho tới tự vận hành Ubuntu Home Server ở nhà để đưa các dự án chạy live ra ngoài.",
    "hero.viewWork": "Xem dự án tiêu biểu",
    "hero.getInTouch": "Liên hệ với mình",
    "hero.status": "Software Engineer @ FPT Software",
    "hero.basedIn": "Huế, Việt Nam · Tự vận hành Ubuntu Home Server",
    "hero.scroll": "Cuộn xuống phần giới thiệu",

    "about.heading": "Code chạy trên localhost mới chỉ là một nửa — phần thú vị nhất là đưa nó chạy ổn định ngoài đời thật.",
    "about.p1": "Mình bắt đầu từ việc tự học làm web rồi đi theo con đường kỹ sư phần mềm. Công việc hằng ngày xoay quanh <strong class=\"bold\">Java</strong>, <strong class=\"bold\">Node.js / NestJS</strong>, <strong class=\"bold\">TypeScript</strong> và <strong class=\"bold\">React / Next.js</strong> — nhưng thay vì chỉ dừng ở một lớp backend hay frontend, mình thích nắm trọn từ thiết kế dữ liệu, API cho tới giao diện và khâu triển khai.",
    "about.p2": "Ở nhà mình duy trì một chiếc Ubuntu Home Server để tự host các sản phẩm cá nhân: từ nền tảng đọc truyện sungthe.online, dàn bot tự động crawl và dịch truyện bằng AI, cho tới self-host trợ lý AI (OpenClaw) hỗ trợ công việc hằng ngày.",
    "about.p3": "Ngoài giờ code, mình mê đọc truyện chữ — và phần lớn những sản phẩm mình tự xây cũng xuất phát từ chính thói quen đó.",
    "about.more": "Đọc thêm về mình",

    "homelab.heading": "Tự vận hành trên Ubuntu Home Server",
    "homelab.intro": "Thay vì để repo nằm yên trên GitHub, mình chạy hẳn một máy chủ Ubuntu tại nhà để tự deploy, tự theo dõi và tự xử lý khi hệ thống có chuyện.",
    "homelab.badgeLive": "Chạy 24/7",
    "homelab.badgeSelf": "Self-hosted",
    "homelab.c1Title": "Hạ tầng Linux & Reverse Proxy",
    "homelab.c1Desc": "Quản trị trực tiếp Ubuntu Server tại nhà với Nginx reverse proxy (HTTPS/SSL), phân luồng subdomain rõ ràng và quản lý tiến trình bằng PM2 / Docker để deploy gọn, dễ khởi động lại.",
    "homelab.c2Title": "Web Production (sungthe.online)",
    "homelab.c2Desc": "Host trực tiếp web đọc truyện chữ Sủng Thê (Next.js + Express + SQLite) phục vụ người đọc thật trên cả mobile lẫn desktop — tự chủ hoàn toàn dữ liệu và băng thông.",
    "homelab.c2Link": "Mở sungthe.online ↗",
    "homelab.c3Title": "OpenClaw AI & Bot chạy nền",
    "homelab.c3Desc": "Self-host OpenClaw làm trợ lý AI riêng hỗ trợ công việc cá nhân (chạy nội bộ, không mở công khai), song song với các worker tự động crawl và dịch truyện chạy theo lịch hằng ngày.",
    "homelab.bannerTitle": "Tại sao lại tự dựng server ở nhà?",
    "homelab.bannerDesc": "Tự chạm vào Linux, Nginx, SSL, log lỗi và tài nguyên thật giúp mình viết code cẩn thận hơn nhiều — hiểu rõ chuyện gì xảy ra từ lúc bấm git push cho tới khi người dùng mở trình duyệt.",
    "homelab.bannerBadge": "Ubuntu · Nginx · PM2 · Docker",

    "projects.heading": "Dự án tiêu biểu",
    "projects.viewAll": "Xem tất cả dự án",
    "projects.liveBadge": "Live · sungthe.online",
    "projects.selfHostedBadge": "Chạy trên Home Server",
    "projects.openSungthe": "Mở sungthe.online ↗",
    "projects.privateRepoNote": "Self-hosted · Private repo",
    "projects.sungtheDesc": "Nền tảng đọc truyện chữ hoàn chỉnh đang chạy production trên Ubuntu Home Server. Gồm giao diện đọc tối ưu cho mobile có lưu tiến độ, Author Studio cho tác giả tự đăng truyện, và Bookhub Admin tích hợp module crawl & dịch AI — kèm hơn 860 bài test tự động (Vitest và node:test).",
    "projects.botsTitle": "Hệ thống Bot & Dịch Truyện AI",
    "projects.botsDesc": "Bộ công cụ tự động hoá phục vụ hệ sinh thái đọc truyện: bot chạy theo lịch bằng Playwright, Puppeteer & Cheerio để thu thập dữ liệu, pipeline dịch tiểu thuyết Trung–Việt bằng LLM giữ văn phong tự nhiên, cùng extension dịch truyện mã nguồn mở cho app VBook.",
    "projects.botsNote": "Automation bots · Private",
    "projects.openVbook": "GitHub: vbook-ext ↗",
    "projects.foodTitle": "Food Ordering Platform",
    "projects.foodDesc": "Hệ thống đặt đồ ăn trọn vẹn với 3 vai trò khách hàng, cửa hàng và tài xế — được mình dựng qua hai kiến trúc: một bản Monolith chặt chẽ (JWT, theo dõi đơn, đánh giá, push notification) và một bản tách nhỏ thành 6 microservices độc lập, đi kèm giao diện web React + Vite.",
    "projects.linkMonolith": "Monolith (NestJS) ↗",
    "projects.linkMicro": "Microservices ↗",
    "projects.linkWeb": "Web (React) ↗",

    "stack.heading": "Bộ công nghệ mình dùng hằng ngày",
    "stack.intro": "Công nghệ mới ra liên tục, nhưng đây là những thứ mình thực sự đã đưa lên production — từ giao diện, API cho tới máy chủ Linux.",
    "stack.ts": "Fullstack chặt kiểu, dùng chung contract",
    "stack.next": "App Router, SSR & giao diện ứng dụng",
    "stack.node": "REST API, worker nền & công cụ CLI",
    "stack.nest": "Backend chia module, kiến trúc microservices",
    "stack.java": "Hệ thống doanh nghiệp tại FPT Software",
    "stack.python": "Tự động hoá, xử lý dữ liệu & AI",
    "stack.angular": "Front end doanh nghiệp có cấu trúc rõ",
    "stack.mysql": "Thiết kế lược đồ & tối ưu truy vấn",
    "stack.sqlite": "Nhẹ, nhanh, chuẩn cho sản phẩm self-host",
    "stack.ubuntu": "Quản trị Linux, reverse proxy & SSL",
    "stack.docker": "Đóng gói dịch vụ & giữ process chạy 24/7",
    "stack.bots": "Headless browser, crawler & cron job",

    "exp.heading": "Hành trình & Kinh nghiệm",
    "exp.intro": "Làm việc nghiêm túc trong môi trường doanh nghiệp, đồng thời liên tục tự build và vận hành sản phẩm cá nhân.",
    "exp.period.current": "Hiện tại",
    "exp.period.ongoing": "Duy trì 24/7",
    "exp.period.alumni": "Tốt nghiệp",
    "exp.role1": "Software Engineer",
    "exp.role1.desc": "Phát triển và duy trì các dịch vụ backend cho khách hàng doanh nghiệp — chủ yếu xoay quanh Java, Node.js và REST API, chú trọng độ ổn định, khả năng theo dõi log và vận hành an toàn.",
    "exp.role1.li1": "Thiết kế và triển khai API, service để các team sản phẩm phía trước tích hợp thuận tiện.",
    "exp.role1.li2": "Làm việc thường xuyên với Java, Node.js / NestJS, TypeScript và SQL.",
    "exp.role1.li3": "Ưu tiên quy trình deploy rõ ràng: dễ lặp lại, dễ rollback và có tài liệu đầy đủ.",
    "exp.role2": "Fullstack & Self-Host Builder",
    "exp.role2.tag": "Dự án cá nhân & Ubuntu Home Server",
    "exp.role2.desc": "Tự xây dựng và vận hành trọn vẹn các sản phẩm phục vụ nhu cầu thật của bản thân — từ giao diện web, backend, bot tự động cho tới hạ tầng máy chủ Linux đặt tại nhà.",
    "exp.role2.li1": "Vận hành sungthe.online (Next.js + Express + SQLite) với hơn 860 automated tests trên Ubuntu Server.",
    "exp.role2.li2": "Phát triển dàn bot crawl, pipeline dịch truyện AI và extension mã nguồn mở vbook-ext.",
    "exp.role2.li3": "Self-host OpenClaw làm trợ lý AI riêng và quản lý toàn bộ dịch vụ qua Nginx + PM2 / Docker.",
    "exp.role3": "Cử nhân Công nghệ Thông tin",
    "exp.role3.desc": "Nơi đặt nền móng về cấu trúc dữ liệu, cơ sở dữ liệu, mạng máy tính — và thói quen tự đọc tài liệu gốc để giải quyết vấn đề tận gốc.",
    "exp.role3.li1": "Tốt nghiệp chuyên ngành Kỹ thuật phần mềm và Hệ thống thông tin tại ĐH Khoa học Huế.",
    "exp.role3.li2": "Thực hiện đồ án tốt nghiệp Phong Delivery (React + Node.js) từ đầu đến cuối.",

    "stats.server": "Ubuntu Home Server tự vận hành",
    "stats.tests": "Automated tests cho Sủng Thê",
    "stats.projects": "Dự án cốt lõi đang show",
    "stats.novels": "Truyện chữ trong danh sách đọc",

    "cta.heading": "Có dự án hay muốn trao đổi kỹ thuật?",
    "cta.body": "Mình luôn mở lòng với các cơ hội Fullstack Developer, hợp tác làm sản phẩm web, hoặc đơn giản là trao đổi về kiến trúc backend, tự dựng server và làm bot.",
    "cta.email": "Gửi email cho mình",
    "cta.github": "Xem GitHub của mình",

    "footer.tagline": "Fullstack Developer & Self-Host Builder. Tự viết giao diện, API, bot tự động và vận hành sản phẩm thật trên Ubuntu Home Server.",
    "footer.navigate": "Điều hướng",
    "footer.contact": "Liên hệ",
    "footer.allRepos": "Tất cả repository",
    "footer.built": "Viết thuần HTML, CSS, JS — không framework.",
    "footer.design": "Thiết kế lấy cảm hứng từ Developer X (BRIX Templates) — mã nguồn và nội dung tự viết hoàn toàn.",

    "projectsPage.heading": "Các dự án tiêu biểu.",
    "projectsPage.intro": "Chỉ giữ lại những dự án có chiều sâu và thực sự chạy được — từ web production trên Home Server, dàn bot truyện AI cho tới các hệ thống fullstack và microservices.",
    "projectsPage.filterLabel": "Lọc dự án theo nhóm",
    "projectsPage.filterAll": "Tất cả",
    "projectsPage.filterLive": "Đang chạy (Live)",
    "projectsPage.filterBot": "Bot & AI",
    "projectsPage.filterFullstack": "Fullstack",
    "projectsPage.filterBackend": "Backend / Microservices",
    "projectsPage.sungtheDesc": "Web đọc truyện chữ hoàn chỉnh đang chạy thật trên Ubuntu Home Server: Next.js 16 App Router (React 19) + Express + SQLite. Có giao diện đọc lưu tiến độ cho mobile, Author Studio cho tác giả tự đăng và Bookhub Admin tích hợp crawl & dịch AI (835 Vitest + 28 backend tests).",
    "projectsPage.botsTitle": "Bot Crawl & Pipeline Dịch Truyện AI",
    "projectsPage.botsDesc": "Bộ worker tự động chạy nền trên Ubuntu Server: dùng Playwright, Puppeteer, Cheerio và node-schedule để thu thập dữ liệu định kỳ, kết hợp pipeline TypeScript + OpenAI/DeepSeek API để dịch tiểu thuyết Trung–Việt mượt và giữ đúng ngữ cảnh.",
    "projectsPage.vbookTitle": "VBook Translate Extension",
    "projectsPage.vbookDesc": "Extension mã nguồn mở (sungthe-translate) cho ứng dụng đọc truyện VBook trên Android và iOS — hỗ trợ dịch truyện trực tiếp qua API tương thích OpenAI (mặc định DeepSeek), cho phép đổi model và base URL linh hoạt.",
    "projectsPage.foodTitle": "Food Ordering — Monolith & Microservices",
    "projectsPage.foodDesc": "Hệ thống đặt đồ ăn 3 vai trò (khách hàng, cửa hàng, tài xế) được xây dựng thành hai kiến trúc song song để so sánh: bản Monolith NestJS + MySQL đầy đủ JWT, đơn hàng, đánh giá, thông báo đẩy; bản Microservices tách 6 service độc lập; kèm giao diện web React + Vite.",
    "projectsPage.deliveryTitle": "Phong Delivery (Đồ án tốt nghiệp)",
    "projectsPage.deliveryDesc": "Ứng dụng giao hàng fullstack tách rõ Front-end React + Vite và Back-end Node.js REST API — hỗ trợ đặt đơn, điều phối tài xế, theo dõi trạng thái trực tiếp, lịch sử giao hàng và màn hình quản trị.",
    "projectsPage.linkFe": "Front-end (React) ↗",
    "projectsPage.linkBe": "Back-end (Node.js) ↗",
    "projectsPage.datingTitle": "Dating App",
    "projectsPage.datingDesc": "Ứng dụng hẹn hò fullstack kết hợp back-end .NET / C# và front-end Angular — hoàn chỉnh luồng hồ sơ người dùng, ghép đôi và nhắn tin thời gian thực.",
    "projectsPage.openDating": "GitHub: DatingApp ↗",
    "projectsPage.more": "Các thử nghiệm khác được lưu trên",
    "projectsPage.ctaHeading": "Bạn có ý tưởng cần biến thành sản phẩm thật?",
    "projectsPage.ctaBody": "Từ web fullstack, API backend cho tới bot tự động hay tự triển khai lên server riêng — cứ nhắn mình cùng trao đổi nhé.",

    "aboutPage.heading": "Một Fullstack Developer thích làm trọn gói — từ dòng code đầu tiên tới lúc chạy trên server.",
    "aboutPage.intro": "Mình viết backend, dựng giao diện, làm bot tự động và tự quản trị máy chủ Ubuntu ở nhà — vì đi hết cả vòng đời giúp mình hiểu sản phẩm sâu hơn rất nhiều.",
    "aboutPage.caption": "Fullstack Developer · FPT Software",
    "aboutPage.shortVersion": "Chuyện ngắn gọn về mình",
    "aboutPage.p1": "Mình là Fullstack Developer, hiện làm Software Engineer tại FPT Software. Công việc chính của mình gắn với Java, Node.js / NestJS, TypeScript và React / Next.js — từ tầng thiết kế database, xây API cho tới giao diện người dùng.",
    "aboutPage.p2": "Mình lớn lên ở Huế và tốt nghiệp Trường Đại học Khoa học Huế. Sở thích lớn nhất ngoài giờ làm là đọc truyện chữ vào buổi tối — cũng chính từ đó mà mình tự tay làm ra web đọc truyện sungthe.online cùng mấy con bot crawl và dịch truyện AI.",
    "aboutPage.p3": "Ở nhà mình tự dựng một chiếc Ubuntu Home Server chạy 24/7. Trên đó có web production sungthe.online, các worker chạy bot định kỳ, và OpenClaw tự host để dùng AI hỗ trợ công việc cá nhân. Tự cấu hình Nginx, SSL, PM2/Docker và tự debug khi có lỗi khiến mình chủ động hoàn toàn ở khâu vận hành.",
    "aboutPage.p4": "Trong code, mình thích kiến trúc rõ ràng, công nghệ đủ chín và diff nhỏ gọn — không thích viết mấy đoạn code đánh đố người đọc. Chính trang portfolio bạn đang xem cũng chỉ là HTML, CSS và JavaScript thuần, không framework, mở lên là chạy nhẹ tênh.",
    "aboutPage.timelineIntro": "Vài dấu mốc ngắn gọn nhưng đều là việc thật mình đã và đang làm.",
    "aboutPage.t1": "Software Engineer — FPT Software",
    "aboutPage.t1desc": "Phát triển và bảo trì hệ thống backend cho khách hàng doanh nghiệp bằng Java và hệ sinh thái Node.js / NestJS. Tập trung vào tính ổn định, hợp đồng API rõ ràng và code dễ bàn giao.",
    "aboutPage.t2": "Fullstack & Self-Host Builder",
    "aboutPage.t2desc": "Tự thiết kế, lập trình và vận hành sungthe.online, dàn bot truyện AI cùng trợ lý OpenClaw trên Ubuntu Home Server tại nhà. Mọi thứ đều chạy thực tế thay vì chỉ nằm trên slide hay localhost.",
    "aboutPage.t3": "Trường Đại học Khoa học Huế",
    "aboutPage.t3desc": "Tốt nghiệp chuyên ngành Kỹ thuật phần mềm. Đồ án tốt nghiệp Phong Delivery (React + Node.js) là sản phẩm fullstack đầu tiên mình tự dựng trọn vẹn hai đầu FE/BE.",
    "aboutPage.howHeading": "Cách mình làm việc",
    "aboutPage.howIntro": "Ba nguyên tắc mình luôn giữ qua hầu hết các dự án.",
    "aboutPage.card1": "Rõ ràng ngay từ API & dữ liệu",
    "aboutPage.card1desc": "Trước khi viết logic, mình luôn chốt rõ schema và ranh giới API: nhận vào cái gì, trả ra cái gì, và từ chối điều gì. Chặt chẽ từ đầu luôn rẻ hơn rất nhiều so với việc phải sửa lại dữ liệu về sau.",
    "aboutPage.card2": "Làm xong là phải chạy thật được",
    "aboutPage.card2desc": "Code chỉ có giá trị khi triển khai lên môi trường thật và người dùng dùng được. Mình ưu tiên thiết lập dễ chạy, có test tự động và quy trình deploy gọn gàng lên Linux server.",
    "aboutPage.card3": "Code gọn cho người đọc tiếp theo",
    "aboutPage.card3desc": "Đặt tên rõ nghĩa, tách hàm vừa tay, không lạm dụng abstraction phức tạp. Mình luôn viết cho người đọc sau này — mà thường đó chính là mình sau sáu tháng quay lại sửa bug.",
    "aboutPage.contactHeading": "Kết nối với mình",
    "aboutPage.contactIntro": "Bạn có sản phẩm cần làm, muốn trao đổi công việc Fullstack hay chia sẻ chuyện self-host server? Cứ nhắn mình qua email nhé.",

    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.basedIn": "Khu vực",
    "contact.basedInValue": "Huế, Việt Nam · GMT+7",
    "contact.into": "Đang tập trung",
    "contact.intoValue": "Fullstack, Ubuntu Home Server & truyện chữ",

    "form.nameLabel": "Tên của bạn",
    "form.emailLabel": "Email của bạn",
    "form.messageLabel": "Nội dung tin nhắn",
    "form.name": "Tên của bạn",
    "form.email": "Email của bạn",
    "form.message": "Bạn đang làm dự án gì hoặc muốn trao đổi điều gì?",
    "form.submit": "Gửi tin nhắn",
    "form.note": "Biểu mẫu này sẽ mở ứng dụng email trên máy bạn với nội dung đã điền sẵn — không gửi lên máy chủ trung gian và không lưu dữ liệu.",
    "form.subject": "Liên hệ từ portfolio — {name}",
    "form.body": "Chào Phong,\n\n{message}\n\n— {name}\n{email}",
    "form.error": "Bạn vui lòng điền đủ tên, email và nội dung nhé.",
    "form.success": "Đang mở ứng dụng email của bạn…",
    "form.copied": "Đã sao chép!"
  };

  var en = {
    "meta.home.title": "Ngô Tiến Phong — Fullstack Developer & Self-Host Builder",
    "meta.home.description": "Portfolio of Ngô Tiến Phong — Fullstack Developer & Software Engineer at FPT Software. Building web apps (Next.js, React, Node.js, NestJS, Java), AI novel bots, and self-hosting on an Ubuntu Home Server.",
    "meta.home.ogTitle": "Ngô Tiến Phong — Fullstack Developer",
    "meta.home.ogDescription": "Fullstack Developer who writes the app, builds the bots, and runs production services on a self-hosted Ubuntu Home Server.",
    "meta.projects.title": "Projects — Ngô Tiến Phong",
    "meta.projects.description": "Selected shipped work: live reading platform sungthe.online, AI novel crawler & translation bots, microservices, and full-stack web apps.",
    "meta.about.title": "About & Contact — Ngô Tiến Phong",
    "meta.about.description": "Who I am, how I work, and how to reach me — Ngô Tiến Phong, Fullstack Developer & Software Engineer at FPT Software.",

    "nav.home": "Ngô Tiến Phong — home",
    "nav.about": "About",
    "nav.homelab": "Home Server",
    "nav.projects": "Projects",
    "nav.stack": "Stack",
    "nav.experience": "Experience",
    "nav.aboutPage": "About me",
    "nav.talk": "Let's talk",
    "nav.langSwitch": "Switch language",
    "nav.toggle": "Toggle navigation",

    "hero.eyebrow": "Open to new opportunities & collaborations",
    "hero.title": "Fullstack developer who codes,<br /> <span class=\"accent\">self-hosts, and ships live products.</span>",
    "hero.lead": "I'm <strong class=\"bold\">Ngô Tiến Phong</strong> — a Fullstack Developer and Software Engineer at FPT Software. I build end-to-end web apps, automation bots, and run my own Ubuntu Home Server at home to ship real products to the web.",
    "hero.viewWork": "View selected work",
    "hero.getInTouch": "Get in touch",
    "hero.status": "Software Engineer @ FPT Software",
    "hero.basedIn": "Hue, Vietnam · Running an Ubuntu Home Server",
    "hero.scroll": "Scroll to about section",

    "about.heading": "Working on localhost is only half the job — the real fun is keeping it live in production.",
    "about.p1": "I started as a self-taught web developer and grew into software engineering. Day to day I work across <strong class=\"bold\">Java</strong>, <strong class=\"bold\">Node.js / NestJS</strong>, <strong class=\"bold\">TypeScript</strong>, and <strong class=\"bold\">React / Next.js</strong> — preferring to own the full path from schema and API design to UI and deployment.",
    "about.p2": "At home, I run a dedicated Ubuntu Home Server hosting my personal ecosystem: the live web-novel platform sungthe.online, scheduled crawling & AI translation bots, and a self-hosted OpenClaw AI assistant for daily workflows.",
    "about.p3": "Away from work I read a lot of web novels — and most of what I build started from scratching that exact itch.",
    "about.more": "More about me",

    "homelab.heading": "Self-hosted on an Ubuntu Home Server",
    "homelab.intro": "Instead of letting repos collect dust on GitHub, I operate an Ubuntu server at home to deploy, monitor, and own every piece of the stack.",
    "homelab.badgeLive": "24/7 Online",
    "homelab.badgeSelf": "Self-hosted",
    "homelab.c1Title": "Linux Infra & Reverse Proxy",
    "homelab.c1Desc": "Hands-on Ubuntu Server management with Nginx reverse proxy (HTTPS/SSL), clean subdomain routing, and PM2 / Docker process supervision for repeatable, low-friction deploys.",
    "homelab.c2Title": "Production Web (sungthe.online)",
    "homelab.c2Desc": "Hosts Sủng Thê — my Next.js + Express + SQLite web-novel platform serving real readers across mobile and desktop with full ownership of data and uptime.",
    "homelab.c2Link": "Visit sungthe.online ↗",
    "homelab.c3Title": "OpenClaw AI & Background Bots",
    "homelab.c3Desc": "Runs a private self-hosted OpenClaw instance as my personal AI assistant alongside scheduled crawler and LLM translation workers operating around the clock.",
    "homelab.bannerTitle": "Why run a home server?",
    "homelab.bannerDesc": "Touching real Linux, Nginx, TLS certificates, logs, and hardware limits makes you write far cleaner software — you feel every decision from git push to the user's browser.",
    "homelab.bannerBadge": "Ubuntu · Nginx · PM2 · Docker",

    "projects.heading": "Selected projects",
    "projects.viewAll": "View all projects",
    "projects.liveBadge": "Live · sungthe.online",
    "projects.selfHostedBadge": "Hosted on Home Server",
    "projects.openSungthe": "Open sungthe.online ↗",
    "projects.privateRepoNote": "Self-hosted · Private repo",
    "projects.sungtheDesc": "A full-featured web-novel platform running live on my Ubuntu Home Server. Includes a mobile-first reader with reading-progress sync, an Author Studio for self-publishing, and a Bookhub Admin panel with built-in crawling & AI translation jobs — backed by 860+ automated tests (Vitest and node:test).",
    "projects.botsTitle": "Novel Crawler & AI Translation Bots",
    "projects.botsDesc": "An automation suite powering my reading ecosystem: scheduled crawlers built with Playwright, Puppeteer & Cheerio, a TypeScript LLM translation pipeline tailored for Chinese-to-Vietnamese fiction, plus an open-source translation extension for the VBook mobile app.",
    "projects.botsNote": "Automation bots · Private",
    "projects.openVbook": "GitHub: vbook-ext ↗",
    "projects.foodTitle": "Food Ordering Platform",
    "projects.foodDesc": "A complete 3-role food-ordering platform (customer, shop, driver) engineered twice to compare architectures: a tightly structured NestJS + MySQL monolith (JWT, live tracking, ratings, push notifications) and a 6-service microservices split, paired with a React + Vite web client.",
    "projects.linkMonolith": "Monolith (NestJS) ↗",
    "projects.linkMicro": "Microservices ↗",
    "projects.linkWeb": "Web (React) ↗",

    "stack.heading": "The stack I ship with",
    "stack.intro": "Tools come and go. These are the ones I've actually shipped to production — from UI and APIs down to Linux servers.",
    "stack.ts": "End-to-end types & shared contracts",
    "stack.next": "App Router, SSR & interactive UIs",
    "stack.node": "REST APIs, background workers & CLIs",
    "stack.nest": "Modular APIs & microservices",
    "stack.java": "Enterprise backend services at FPT",
    "stack.python": "Automation, data & AI scripts",
    "stack.angular": "Structured enterprise front ends",
    "stack.mysql": "Relational schema & query design",
    "stack.sqlite": "Fast, zero-ops storage for self-hosting",
    "stack.ubuntu": "Linux ops, reverse proxy & SSL",
    "stack.docker": "Containerised & 24/7 managed services",
    "stack.bots": "Headless browser automation & cron",

    "exp.heading": "Experience & Background",
    "exp.intro": "Shipping enterprise software by day, and building & self-hosting real products on my own time.",
    "exp.period.current": "Current",
    "exp.period.ongoing": "24/7 Ongoing",
    "exp.period.alumni": "Alumni",
    "exp.role1": "Software Engineer",
    "exp.role1.desc": "Building and maintaining backend services for enterprise clients — primarily Java and Node.js behind REST APIs, with a strong focus on reliability, observability, and smooth operations.",
    "exp.role1.li1": "Design and deliver APIs and services consumed by downstream product teams.",
    "exp.role1.li2": "Work across Java, Node.js / NestJS, TypeScript, and SQL.",
    "exp.role1.li3": "Keep deployments predictable: repeatable, reversible, and well documented.",
    "exp.role2": "Fullstack & Self-Host Builder",
    "exp.role2.tag": "Personal products & Ubuntu Home Server",
    "exp.role2.desc": "Designing, building, and operating my own full-stack web apps, automation bots, and personal AI stack on a home Ubuntu server.",
    "exp.role2.li1": "Operate sungthe.online (Next.js + Express + SQLite) with 860+ automated tests on Ubuntu Server.",
    "exp.role2.li2": "Built scheduled novel crawlers, LLM translation pipelines, and the public vbook-ext plugin.",
    "exp.role2.li3": "Self-host OpenClaw for personal AI assistance and manage services via Nginx + PM2 / Docker.",
    "exp.role3": "B.Sc. Information Technology",
    "exp.role3.desc": "Where the fundamentals came from: data structures, databases, networking — and the habit of reading primary documentation all the way through.",
    "exp.role3.li1": "Graduated in Software Engineering & Information Systems from Hue University of Science.",
    "exp.role3.li2": "Built Phong Delivery (React + Node.js) end to end as my graduation project.",

    "stats.server": "Self-hosted Ubuntu Home Server",
    "stats.tests": "Automated tests on Sủng Thê",
    "stats.projects": "Curated core projects",
    "stats.novels": "Web novels on the reading list",

    "cta.heading": "Have a project or want to talk tech?",
    "cta.body": "I'm open to Fullstack Developer roles, interesting web product collaborations, or simply swapping notes on backend architecture, self-hosting, and automation bots.",
    "cta.email": "Send me an email",
    "cta.github": "See my GitHub",

    "footer.tagline": "Fullstack Developer & Self-Host Builder. Crafting UIs, APIs, automation bots, and running live products on an Ubuntu Home Server.",
    "footer.navigate": "Navigate",
    "footer.contact": "Contact",
    "footer.allRepos": "All repositories",
    "footer.built": "Built with plain HTML, CSS & JS — no frameworks.",
    "footer.design": "Design system inspired by Developer X (BRIX Templates) — original code & content.",

    "projectsPage.heading": "Curated projects.",
    "projectsPage.intro": "Only the projects with real depth and substance — from live production apps on my Home Server and AI novel bots to full-stack and microservices systems.",
    "projectsPage.filterLabel": "Filter projects by category",
    "projectsPage.filterAll": "All",
    "projectsPage.filterLive": "Live / Production",
    "projectsPage.filterBot": "Bots & AI",
    "projectsPage.filterFullstack": "Fullstack",
    "projectsPage.filterBackend": "Backend / Microservices",
    "projectsPage.sungtheDesc": "A production web-novel platform hosted on my Ubuntu Home Server: Next.js 16 App Router (React 19) + Express + SQLite. Features a mobile-first reader with progress sync, Author Studio, and Bookhub Admin with crawl & AI translation jobs (835 Vitest + 28 backend tests).",
    "projectsPage.botsTitle": "Novel Crawler & AI Translation Pipeline",
    "projectsPage.botsDesc": "Background workers running on my Ubuntu server: Playwright, Puppeteer, Cheerio, and node-schedule automate scheduled fetching, paired with a TypeScript + OpenAI/DeepSeek pipeline that translates Chinese novels into natural Vietnamese.",
    "projectsPage.vbookTitle": "VBook Translate Extension",
    "projectsPage.vbookDesc": "Open-source plugin (sungthe-translate) for the VBook reading app on Android and iOS — translates chapters via any OpenAI-compatible API (DeepSeek by default) with configurable model and base URL.",
    "projectsPage.foodTitle": "Food Ordering — Monolith & Microservices",
    "projectsPage.foodDesc": "A 3-role food-ordering platform (customer, shop, driver) built twice to compare architectures: a NestJS + MySQL monolith with JWT, order tracking, ratings & push notifications; a 6-service microservices edition; and a React + Vite web client.",
    "projectsPage.deliveryTitle": "Phong Delivery (Graduation Project)",
    "projectsPage.deliveryDesc": "A full-stack delivery platform split cleanly into a React + Vite front end and a Node.js REST API back end — covering order placement, driver assignment, live delivery status, history, and admin views.",
    "projectsPage.linkFe": "Front-end (React) ↗",
    "projectsPage.linkBe": "Back-end (Node.js) ↗",
    "projectsPage.datingTitle": "Dating App",
    "projectsPage.datingDesc": "A full-stack dating application pairing a .NET / C# back end with an Angular front end — end-to-end user profiles, matching, and real-time messaging.",
    "projectsPage.openDating": "GitHub: DatingApp ↗",
    "projectsPage.more": "More small experiments live on",
    "projectsPage.ctaHeading": "Want to turn an idea into something live?",
    "projectsPage.ctaBody": "Whether it's a full-stack web app, backend architecture, automation bot, or self-hosted deployment — drop me a line.",

    "aboutPage.heading": "A Fullstack Developer who ships the whole thing — from code to server.",
    "aboutPage.intro": "I write the APIs, build the front end, wire up automation bots, and run my own Ubuntu server at home — owning the full lifecycle teaches you what half-stack work never will.",
    "aboutPage.caption": "Fullstack Developer · FPT Software",
    "aboutPage.shortVersion": "The short version",
    "aboutPage.p1": "I'm a Fullstack Developer currently working as a Software Engineer at FPT Software. My daily toolkit spans Java, Node.js / NestJS, TypeScript, and React / Next.js — from schema and API design through to the user interface.",
    "aboutPage.p2": "I grew up in Hue and graduated from Hue University of Science. Outside work I spend evenings reading web novels, which directly sparked sungthe.online and the crawler & AI translation bots behind it.",
    "aboutPage.p3": "At home I run a 24/7 Ubuntu Home Server hosting sungthe.online in production, scheduled novel bots, and a private self-hosted OpenClaw AI assistant. Managing Nginx, SSL, PM2/Docker, and real logs myself keeps me grounded in how software actually behaves after deploy.",
    "aboutPage.p4": "In code I prefer clear boundaries, proven tools, and small diffs over clever abstractions. Even this portfolio is plain HTML, CSS, and vanilla JavaScript — zero framework, zero build step, fast straight out of the box.",
    "aboutPage.timelineIntro": "A concise timeline of real work — no padded dates.",
    "aboutPage.t1": "Software Engineer — FPT Software",
    "aboutPage.t1desc": "Building and maintaining enterprise backend services with Java and the Node.js / NestJS ecosystem, focused on reliability, clear API contracts, and maintainable code.",
    "aboutPage.t2": "Fullstack & Self-Host Builder",
    "aboutPage.t2desc": "Designing, shipping, and operating sungthe.online, AI novel bots, and a self-hosted OpenClaw stack on my Ubuntu Home Server — real services running 24/7 instead of sitting idle on localhost.",
    "aboutPage.t3": "Hue University of Science",
    "aboutPage.t3desc": "Graduated in Software Engineering. My graduation project, Phong Delivery (React + Node.js), was the first full-stack platform I built end to end.",
    "aboutPage.howHeading": "How I work",
    "aboutPage.howIntro": "Three habits that carry across every project.",
    "aboutPage.card1": "Start with clear APIs & data",
    "aboutPage.card1desc": "Before writing business logic I lock down schemas and API boundaries: what goes in, what comes out, and what gets rejected. Being strict upfront is far cheaper than migrating messy data later.",
    "aboutPage.card2": "Ship it so it actually runs",
    "aboutPage.card2desc": "Code only counts once it's deployed and usable. I favour reproducible setups, automated tests, and straightforward Linux deployments.",
    "aboutPage.card3": "Leave it clean for the next reader",
    "aboutPage.card3desc": "Clear naming, small functions, no unnecessary cleverness. I write for the next engineer opening the file — which is usually me six months later.",
    "aboutPage.contactHeading": "Get in touch",
    "aboutPage.contactIntro": "Have something to build, a Fullstack role in mind, or just want to swap notes on self-hosting? My inbox is open.",

    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.basedIn": "Based in",
    "contact.basedInValue": "Hue, Vietnam · GMT+7",
    "contact.into": "Currently into",
    "contact.intoValue": "Fullstack, Ubuntu Home Server & web novels",

    "form.nameLabel": "Your name",
    "form.emailLabel": "Your email",
    "form.messageLabel": "Your message",
    "form.name": "Your name",
    "form.email": "Your email",
    "form.message": "What are you building or looking to discuss?",
    "form.submit": "Send message",
    "form.note": "This form opens your mail app with the message pre-filled — nothing is sent to an external server and nothing is stored.",
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
