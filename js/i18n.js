/*! Ngô Tiến Phong — Personal Portfolio
    i18n runtime: English / Vietnamese.
    All copy lives in the two dictionaries below — edit them to change a
    translation. The HTML keeps the English text as a no-JavaScript fallback. */
(function (global, document) {
  "use strict";

  var STORAGE_KEY = "phong-lang";
  var DEFAULT_LANG = "en";

  var en = {
  "about.heading": "I build the invisible layer — the APIs, services and pipelines that keep a product moving.",
  "about.more": "More about me",
  "about.p1": "I started out as a self-taught developer poking at the web, and turned it into a career as a backend engineer. These days I work mostly in <strong class=\"bold\">Java</strong> and <strong class=\"bold\">Node.js / NestJS</strong>, writing services that other people can build on without fearing them.",
  "about.p2": "I like the unglamorous work: schema design, idempotent consumers, sensible error messages, a deploy that doesn't wake anyone up. But I also like the side projects — a food-ordering platform rebuilt twice, once as a monolith and once as microservices, and a delivery app split into a React front end and a Node.js back end.",
  "about.p3": "Away from the editor I read a lot of novels, and I write software for people who share that habit.",
  "aboutPage.caption": "Backend Developer · FPT Software",
  "aboutPage.card1": "Start with the contract",
  "aboutPage.card1desc": "Before writing a service I decide what it exposes and what it refuses to expose. An API that says no early is cheaper than a data model that has to be migrated later.",
  "aboutPage.card2": "Make it runnable",
  "aboutPage.card2desc": "Every project of mine clones and starts. A local setup that takes one command beats a perfect README that assumes a machine I no longer own.",
  "aboutPage.card3": "Leave it readable",
  "aboutPage.card3desc": "Naming, small functions, no clever abstractions. I optimise for the next reader — often me, six months later, wondering what I was thinking.",
  "aboutPage.contactHeading": "Get in touch",
  "aboutPage.contactIntro": "Have something that needs building, or just want to compare notes on a stack? My inbox is open.",
  "aboutPage.heading": "A backend engineer who ships the whole thing.",
  "aboutPage.howHeading": "How I work",
  "aboutPage.howIntro": "Three habits that survived every project so far.",
  "aboutPage.intro": "I write the services, the APIs and the plumbing — and usually the interface in front of them too, because shipping something end to end teaches you more than shipping half of it.",
  "aboutPage.p1": "I'm a Backend Developer and Software Engineer at FPT Software, currently working with Java. My day-to-day stack is Node.js with NestJS, Express, TypeScript and JavaScript — the part of the stack where the data, the contracts and the failure modes live.",
  "aboutPage.p2": "I grew up in Hue and graduated from Hue University of Science. Outside of work I read novels, mostly at night, which is the same part of the brain I use to design an API.",
  "aboutPage.p3": "The projects on this site are mine, not coursework I was handed. A food-ordering platform rebuilt twice — once as a monolith, once as microservices — and a delivery app split into a React front end and a Node.js back end. Most of them started because I needed the thing, and I decided building it was faster than searching for it.",
  "aboutPage.p4": "I like clean boundaries, boring technology and small diffs. I don't like clever code that needs a paragraph to explain. Everything on this site is plain HTML, CSS and JavaScript — no framework, no build step, nothing between you and the browser.",
  "aboutPage.shortVersion": "The short version",
  "aboutPage.t1": "Software Engineer — FPT Software",
  "aboutPage.t1desc": "Building and maintaining backend services for enterprise clients. Java and the Node.js / NestJS ecosystem, with an emphasis on reliability, clear APIs and code that the next person can pick up without a briefing.",
  "aboutPage.t2": "Independent builder",
  "aboutPage.t2desc": "Designing and shipping my own tools — backend services, delivery apps and full-stack demos — mostly at night, mostly for problems I personally had. Every one of them is open source and readable.",
  "aboutPage.t3": "Hue University of Science",
  "aboutPage.t3desc": "Graduated with a focus on software engineering. The graduation project — a delivery platform split into a React front end and a Node.js back end — became the first real version of Phong Delivery.",
  "aboutPage.timelineIntro": "Labels rather than dates — a short timeline is honest; an invented one isn't.",
  "contact.basedIn": "Based in",
  "contact.email": "Email",
  "contact.github": "GitHub",
  "contact.into": "Currently into",
  "cta.body": "I'm open to backend engineering roles and interesting collaborations — especially around Node.js, NestJS and Java services. Tell me what you're building.",
  "cta.email": "Send me an email",
  "cta.github": "See my GitHub",
  "cta.heading": "Interested in working together?",
  "exp.heading": "Where I've been",
  "exp.intro": "A short track record of shipping software, learning in public and keeping the pipeline green.",
  "exp.period.alumni": "Alumni",
  "exp.period.current": "Current",
  "exp.period.ongoing": "Ongoing",
  "exp.role1": "Software Engineer",
  "exp.role1.desc": "Building and maintaining backend services for enterprise clients — mostly Java and Node.js services behind REST APIs, with an eye on reliability, observability and the on-call experience.",
  "exp.role1.li1": "Design and ship APIs and services used by downstream product teams.",
  "exp.role1.li2": "Work across Java, Node.js / NestJS, TypeScript and SQL.",
  "exp.role1.li3": "Keep deployments boring: repeatable, reversible, documented.",
  "exp.role2": "B.Sc. Information Technology",
  "exp.role2.desc": "Where the fundamentals came from: data structures, databases, networks — and the habit of reading documentation all the way to the bottom.",
  "exp.role2.li1": "Graduated with a focus on software engineering and information systems.",
  "exp.role2.li2": "Started writing for the web, and never really stopped.",
  "exp.role3": "Independent builder",
  "exp.role3.desc": "Personal projects shipped publicly — full-stack apps and backend services — mostly to solve my own problems, then kept because other people found them useful too.",
  "exp.role3.li1": "26 public repositories across JavaScript, TypeScript, Python, C#, HTML and CSS.",
  "exp.role3.li2": "MIT-licensed where the project is worth reusing.",
  "exp.role3.li3": "Everything local-first: no telemetry, no account required, no cloud bill.",
  "exp.role3.tag": "Open source & side projects",
  "footer.allRepos": "All repositories",
  "footer.built": "Built from scratch, no frameworks.",
  "footer.contact": "Contact",
  "footer.design": "Design system inspired by Developer X (BRIX Templates) — original code & content.",
  "footer.navigate": "Navigate",
  "footer.tagline": "Backend Developer & Software Engineer. I build APIs, services and small tools that make other people's work a little easier.",
  "form.email": "Your email",
  "form.message": "What are you building?",
  "form.name": "Your name",
  "form.note": "This form opens your mail app with the message pre-filled — nothing is sent to a server and nothing is stored.",
  "form.submit": "Send message",
  "hero.basedIn": "Based in Vietnam · Hue University of Science",
  "hero.eyebrow": "Open to new opportunities",
  "hero.getInTouch": "Get in touch",
  "hero.lead": "I'm <strong class=\"bold\">Ngô Tiến Phong</strong> — a Backend Developer and Software Engineer at FPT Software. I design APIs, break monoliths into services, and build the small tools that make a team's day a little less painful.",
  "hero.scroll": "Scroll to about section",
  "hero.status": "Software Engineer @ FPT Software",
  "hero.title": "Backend developer building<br /> <span class=\"accent\">fast, boringly reliable</span> services.",
  "hero.viewWork": "View my work",
  "meta.about.description": "Who I am, how I work, and how to reach me — Ngô Tiến Phong, Backend Developer & Software Engineer at FPT Software.",
  "meta.about.title": "About & Contact — Ngô Tiến Phong",
  "meta.home.description": "Portfolio of Ngô Tiến Phong — Backend Developer and Software Engineer at FPT Software. Building APIs, services and tools with Node.js, NestJS, TypeScript and Java.",
  "meta.home.ogDescription": "Backend Developer & Software Engineer. I design and ship APIs, services and tools people actually enjoy using.",
  "meta.home.ogTitle": "Ngô Tiến Phong — Backend Developer",
  "meta.home.title": "Ngô Tiến Phong — Backend Developer & Software Engineer",
  "meta.projects.description": "Every project I've shipped: backend services, microservices, delivery apps and full-stack apps.",
  "meta.projects.title": "Projects — Ngô Tiến Phong",
  "nav.about": "About",
  "nav.aboutPage": "About page",
  "nav.experience": "Experience",
  "nav.home": "Ngô Tiến Phong — home",
  "nav.langSwitch": "Switch language",
  "nav.projects": "Projects",
  "nav.stack": "Stack",
  "nav.talk": "Let's talk",
  "nav.toggle": "Toggle navigation",
  "projects.foodOrdering": "A full food-ordering platform with user, shop and delivery roles. JWT authentication, dish and order management, order tracking, ratings, and push notifications for customers, shops and drivers.",
  "projects.heading": "Selected projects",
  "projects.nestLearn": "A playground for learning NestJS properly — one module at a time, with auto-generated Swagger / OpenAPI documentation for every endpoint.",
  "projects.phongDelivery": "My graduation project: a delivery application with a React front end and a Node.js back end — order placement, driver assignment, live status and history.",
  "projects.viewAll": "View all projects",
  "projects.viewGithub": "View on GitHub",
  "projectsPage.ctaBody": "Most of these started as something I needed on a Tuesday night. If you have a problem that deserves the same treatment, I'd love to hear about it.",
  "projectsPage.ctaHeading": "Like what you see?",
  "projectsPage.datingApp": "A dating application built as a .NET back end with an Angular front end — profiles, matching and messaging end to end.",
  "projectsPage.datingCount": "A vibe-coded web UI experiment — a small, opinionated interface for counting days and dates, built mostly out of CSS.",
  "projectsPage.deliveryBe": "The service behind it: users, orders, addresses and assignments, exposed as a REST API for the delivery app and the admin screens.",
  "projectsPage.deliveryFe": "The customer-facing side of my graduation project: a React + Vite app for placing orders, following a driver's progress and keeping delivery history.",
  "projectsPage.filterAll": "All",
  "projectsPage.filterLabel": "Filter projects by language",
  "projectsPage.foodOrdering": "A full food-ordering platform with user, shop and delivery roles. JWT authentication, dish and order management, order tracking, ratings and reviews, plus push notifications for customers, shops and drivers.",
  "projectsPage.foodOrderingMicro": "The same domain rebuilt as independent services: authentication, product, category, ordering, settings and notification, each deployable on its own and talking over documented contracts.",
  "projectsPage.foodOrderingWeb": "The front end for the food-ordering demo: a React + Vite app on top of Firebase for auth and data, covering browsing, cart and checkout.",
  "projectsPage.heading": "Every project, one place.",
  "projectsPage.intro": "Eight repositories, each one started because I needed the thing to exist. Most of them run locally, none of them phone home, and all of them are open for you to read.",
  "projectsPage.more": "More small experiments and forks live on",
  "projectsPage.nestLearn": "A playground for learning NestJS properly — one module at a time, with auto-generated Swagger / OpenAPI documentation for every endpoint.",
  "stack.angular": "Structured enterprise front ends",
  "stack.csharp": "Desktop & web applications",
  "stack.ext": "Manifest V3, Shadow DOM, CDP",
  "stack.firebase": "Auth & realtime for demos",
  "stack.heading": "The stack I reach for",
  "stack.intro": "Tools change constantly. These are the ones I've shipped production code with — and the ones I'd still pick tomorrow.",
  "stack.java": "Enterprise services at FPT",
  "stack.js": "Browser extensions, Node tooling",
  "stack.mysql": "Relational modelling & queries",
  "stack.nest": "Modular, testable APIs",
  "stack.node": "Event-driven services & CLIs",
  "stack.python": "AI, media pipelines, automation",
  "stack.react": "Dashboards and app front ends",
  "stack.ts": "Typed backends, shared contracts",
  "stats.novels": "Novels on the reading list",
  "stats.projects": "Projects shipped",
  "stats.repositories": "Public repositories",
  "stats.technologies": "Technologies in the stack",
  "form.subject": "Portfolio enquiry from {name}",
  "form.body": "Hi Phong,\n\n{message}\n\n— {name}\n{email}",
  "form.error": "Please fill in your name, email and message.",
  "form.success": "Opening your mail app…",
  "form.copied": "Copied!"
};

  var vi = {
  "about.heading": "Tôi xây lớp vô hình — những API, service và pipeline giúp sản phẩm chuyển động.",
  "about.more": "Tìm hiểu thêm về tôi",
  "about.p1": "Tôi bắt đầu với vai trò lập trình viên tự học, mò mẫm thế giới web, rồi định hình nó thành sự nghiệp backend engineer. Ngày nay tôi làm việc chủ yếu với <strong class=\"bold\">Java</strong> và <strong class=\"bold\">Node.js / NestJS</strong>, viết những service mà người khác có thể xây dựng trên đó mà không phải lo sợ.",
  "about.p2": "Tôi thích phần việc không hào nhoáng: thiết kế schema, consumer idempotent, thông báo lỗi dễ hiểu, một lần deploy không ai bị đánh thức. Nhưng tôi cũng thích các dự án bên cạnh — một nền tảng đặt đồ ăn được xây lại hai lần, một lần dưới dạng monolith và một lần dưới dạng microservices, cùng một ứng dụng giao hàng chia làm front end React và back end Node.js.",
  "about.p3": "Ngoài trình soạn thảo, tôi đọc rất nhiều tiểu thuyết và viết phần mềm cho những người có cùng thói quen đó.",
  "aboutPage.caption": "Backend Developer · FPT Software",
  "aboutPage.card1": "Bắt đầu từ hợp đồng",
  "aboutPage.card1desc": "Trước khi viết một service, tôi quyết định nó sẽ phơi bày điều gì và từ chối điều gì. Một API biết nói “không” sớm còn rẻ hơn một mô hình dữ liệu sau này phải migrate.",
  "aboutPage.card2": "Làm cho nó chạy được",
  "aboutPage.card2desc": "Mọi dự án của tôi đều clone về là chạy. Một thiết lập cục bộ chỉ cần một câu lệnh còn hơn một file README hoàn hảo nhưng lại giả định máy tính tôi không còn sở hữu.",
  "aboutPage.card3": "Để lại sự dễ đọc",
  "aboutPage.card3desc": "Đặt tên rõ ràng, hàm nhỏ, không lạm dụng abstraction. Tôi tối ưu cho người đọc tiếp theo — thường là chính tôi, sáu tháng sau, tự hỏi lúc đó mình đang nghĩ gì.",
  "aboutPage.contactHeading": "Liên hệ",
  "aboutPage.contactIntro": "Bạn có thứ gì cần xây, hay chỉ muốn trao đổi về một stack? Hộp thư của tôi luôn mở.",
  "aboutPage.heading": "Một backend engineer giao sản phẩm trọn vẹn.",
  "aboutPage.howHeading": "Tôi làm việc thế nào",
  "aboutPage.howIntro": "Ba thói quen đã sống sót qua mọi dự án cho tới nay.",
  "aboutPage.intro": "Tôi viết service, API và phần hạ tầng — và thường cả giao diện phía trước nữa, vì giao một sản phẩm trọn vẹn dạy tôi nhiều hơn giao một nửa.",
  "aboutPage.p1": "Tôi là Backend Developer và Software Engineer tại FPT Software, hiện làm việc với Java. Stack hằng ngày của tôi là Node.js với NestJS, Express, TypeScript và JavaScript — phần của stack nơi dữ liệu, hợp đồng API và các kiểu hỏng sống.",
  "aboutPage.p2": "Tôi lớn lên ở Huế và tốt nghiệp Trường Đại học Khoa học Huế. Ngoài công việc, tôi đọc tiểu thuyết, chủ yếu vào ban đêm — đúng phần não tôi dùng để thiết kế API.",
  "aboutPage.p3": "Các dự án trên trang này là của tôi, không phải bài tập được giao. Một nền tảng đặt đồ ăn được xây lại hai lần — một lần dưới dạng monolith, một lần dưới dạng microservices — và một ứng dụng giao hàng chia làm front end React cùng back end Node.js. Phần lớn chúng bắt đầu vì tôi cần thứ đó tồn tại, và tôi nhận ra xây nó nhanh hơn là tìm kiếm nó.",
  "aboutPage.p4": "Tôi thích ranh giới rõ ràng, công nghệ buồn tẻ và những diff nhỏ. Tôi không thích code khôn ranh phải mất một đoạn văn mới giải thích. Mọi thứ trên trang này chỉ là HTML, CSS và JavaScript thuần — không framework, không build step, không có gì đứng giữa bạn và trình duyệt.",
  "aboutPage.shortVersion": "Tóm tắt",
  "aboutPage.t1": "Software Engineer — FPT Software",
  "aboutPage.t1desc": "Xây dựng và duy trì các service backend cho khách hàng doanh nghiệp. Java cùng hệ sinh thái Node.js / NestJS, với trọng tâm là độ ổn định, API rõ ràng và code mà người tiếp theo có thể tiếp quản mà không cần hướng dẫn.",
  "aboutPage.t2": "Nhà phát triển độc lập",
  "aboutPage.t2desc": "Thiết kế và giao những công cụ của riêng mình — service backend, ứng dụng giao hàng và demo full-stack — chủ yếu vào ban đêm, chủ yếu cho những vấn đề chính tôi gặp. Tất cả đều mã nguồn mở và dễ đọc.",
  "aboutPage.t3": "Trường Đại học Khoa học Huế",
  "aboutPage.t3desc": "Tốt nghiệp chuyên ngành kỹ thuật phần mềm. Đồ án tốt nghiệp — một nền tảng giao hàng chia làm front end React và back end Node.js — đã trở thành phiên bản đầu tiên của Phong Delivery.",
  "aboutPage.timelineIntro": "Nhãn thay vì mốc thời gian — một dòng thời gian ngắn là thành thật; một dòng thời gian bịa ra thì không.",
  "contact.basedIn": "Đang ở",
  "contact.email": "Email",
  "contact.github": "GitHub",
  "contact.into": "Đang bận với",
  "cta.body": "Tôi sẵn sàng cho các vị trí backend engineer và những sự hợp tác thú vị — đặc biệt xoay quanh Node.js, NestJS và các service Java. Hãy kể tôi biết bạn đang xây gì.",
  "cta.email": "Gửi cho tôi một email",
  "cta.github": "Xem GitHub của tôi",
  "cta.heading": "Bạn muốn làm việc cùng nhau?",
  "exp.heading": "Tôi đã ở đâu",
  "exp.intro": "Một hành trình ngắn trong việc giao phần mềm, học hỏi công khai và giữ cho pipeline luôn xanh.",
  "exp.period.alumni": "Cựu sinh viên",
  "exp.period.current": "Hiện tại",
  "exp.period.ongoing": "Đang thực hiện",
  "exp.role1": "Software Engineer",
  "exp.role1.desc": "Xây dựng và duy trì các service backend cho khách hàng doanh nghiệp — chủ yếu là service Java và Node.js đứng sau REST API, với sự chú ý đến độ ổn định, khả năng quan sát và trải nghiệm trực tuyến khi có sự cố.",
  "exp.role1.li1": "Thiết kế và giao các API, service mà các nhóm sản phẩm phía sau sử dụng.",
  "exp.role1.li2": "Làm việc xuyên suốt Java, Node.js / NestJS, TypeScript và SQL.",
  "exp.role1.li3": "Giữ cho việc deploy luôn nhàm chán: lặp lại được, hoàn tác được, có tài liệu.",
  "exp.role2": "Kỹ sư Thông tin (B.Sc.)",
  "exp.role2.desc": "Nơi mà nền tảng đến từ: cấu trúc dữ liệu, cơ sở dữ liệu, mạng — cùng thói quen đọc tài liệu đến trang cuối.",
  "exp.role2.li1": "Tốt nghiệp chuyên sâu về kỹ thuật phần mềm và hệ thống thông tin.",
  "exp.role2.li2": "Bắt đầu viết cho web, và thực sự chưa bao giờ dừng lại.",
  "exp.role3": "Nhà phát triển độc lập",
  "exp.role3.desc": "Các dự án cá nhân được giao công khai — ứng dụng full-stack và service backend — chủ yếu để giải quyết vấn đề của chính mình, rồi giữ lại vì người khác thấy chúng cũng hữu ích.",
  "exp.role3.li1": "26 kho lưu trữ công khai với JavaScript, TypeScript, Python, C#, HTML và CSS.",
  "exp.role3.li2": "Dùng giấy phép MIT cho những dự án đáng để tái sử dụng.",
  "exp.role3.li3": "Mọi thứ đều ưu tiên local-first: không telemetry, không cần tài khoản, không hóa đơn đám mây.",
  "exp.role3.tag": "Mã nguồn mở & dự án bên cạnh",
  "footer.allRepos": "Tất cả kho lưu trữ",
  "footer.built": "Xây dựng từ đầu, không framework.",
  "footer.contact": "Liên hệ",
  "footer.design": "Hệ thiết kế lấy cảm hứng từ Developer X (BRIX Templates) — toàn bộ code & nội dung là nguyên tác.",
  "footer.navigate": "Điều hướng",
  "footer.tagline": "Backend Developer & Software Engineer. Tôi xây API, service và những công cụ nhỏ giúp công việc của người khác bớt nặng nhọc hơn một chút.",
  "form.email": "Email của bạn",
  "form.message": "Bạn đang xây gì?",
  "form.name": "Tên của bạn",
  "form.note": "Biểu mẫu này mở ứng dụng email của bạn với nội dung đã điền sẵn — không có gì được gửi tới máy chủ và không có gì được lưu lại.",
  "form.submit": "Gửi tin nhắn",
  "hero.basedIn": "Đang ở Việt Nam · Trường Đại học Khoa học Huế",
  "hero.eyebrow": "Đang sẵn sàng cho cơ hội mới",
  "hero.getInTouch": "Liên hệ",
  "hero.lead": "Tôi là <strong class=\"bold\">Ngô Tiến Phong</strong> — Backend Developer và Software Engineer tại FPT Software. Tôi thiết kế API, tách monolith thành service, và xây những công cụ nhỏ giúp ngày làm việc của team bớt đau đầu hơn một chút.",
  "hero.scroll": "Cuộn xuống phần giới thiệu",
  "hero.status": "Software Engineer @ FPT Software",
  "hero.title": "Backend developer xây dựng<br /> <span class=\"accent\">dịch vụ nhanh, ổn định đến mức nhàm chán</span>.",
  "hero.viewWork": "Xem sản phẩm của tôi",
  "meta.about.description": "Tôi là ai, tôi làm việc thế nào và cách liên hệ — Ngô Tiến Phong, Backend Developer & Software Engineer tại FPT Software.",
  "meta.about.title": "Giới thiệu & Liên hệ — Ngô Tiến Phong",
  "meta.home.description": "Portfolio của Ngô Tiến Phong — Backend Developer và Software Engineer tại FPT Software. Xây API, service và công cụ với Node.js, NestJS, TypeScript và Java.",
  "meta.home.ogDescription": "Backend Developer & Software Engineer. Tôi thiết kế và giao các API, service và công cụ mà mọi người thực sự thích dùng.",
  "meta.home.ogTitle": "Ngô Tiến Phong — Backend Developer",
  "meta.home.title": "Ngô Tiến Phong — Backend Developer & Software Engineer",
  "meta.projects.description": "Mọi dự án tôi đã giao: service backend, microservices, ứng dụng giao hàng và ứng dụng full-stack.",
  "meta.projects.title": "Dự án — Ngô Tiến Phong",
  "nav.about": "Giới thiệu",
  "nav.aboutPage": "Trang giới thiệu",
  "nav.experience": "Kinh nghiệm",
  "nav.home": "Ngô Tiến Phong — trang chủ",
  "nav.langSwitch": "Đổi ngôn ngữ",
  "nav.projects": "Dự án",
  "nav.stack": "Công nghệ",
  "nav.talk": "Trò chuyện",
  "nav.toggle": "Mở hoặc đóng menu",
  "projects.foodOrdering": "Một nền tảng đặt đồ ăn hoàn chỉnh với ba vai trò khách hàng, cửa hàng và giao hàng. Xác thực JWT, quản lý món ăn và đơn hàng, theo dõi đơn, đánh giá, cùng thông báo đẩy cho khách hàng, cửa hàng và tài xế.",
  "projects.heading": "Dự án tiêu biểu",
  "projects.nestLearn": "Một sân chơi để học NestJS đúng cách — từng module một, với tài liệu Swagger / OpenAPI được sinh tự động cho mọi endpoint.",
  "projects.phongDelivery": "Đồ án tốt nghiệp của tôi: một ứng dụng giao hàng với front end React và back end Node.js — đặt đơn, phân công tài xế, trạng thái trực tiếp và lịch sử giao hàng.",
  "projects.viewAll": "Xem tất cả dự án",
  "projects.viewGithub": "Xem trên GitHub",
  "projectsPage.ctaBody": "Phần lớn chúng bắt đầu từ một thứ tôi cần vào một tối thứ Ba. Nếu bạn có một vấn đề xứng đáng được đối xử như vậy, tôi rất muốn nghe.",
  "projectsPage.ctaHeading": "Bạn thấy ổn chứ?",
  "projectsPage.datingApp": "Một ứng dụng hẹn hò với back end .NET và front end Angular — hồ sơ, ghép đôi và nhắn tin trọn vẹn.",
  "projectsPage.datingCount": "Một thử nghiệm giao diện web viết bằng AI — một giao diện nhỏ gọn, có chủ kiến, để đếm ngày và ngày tháng, xây chủ yếu bằng CSS.",
  "projectsPage.deliveryBe": "Dịch vụ đứng sau nó: người dùng, đơn hàng, địa chỉ và phân công, được mở ra dưới dạng REST API cho ứng dụng giao hàng và các màn hình quản trị.",
  "projectsPage.deliveryFe": "Phía khách hàng của đồ án tốt nghiệp: một ứng dụng React + Vite để đặt đơn, theo dõi tiến độ tài xế và lưu lịch sử giao hàng.",
  "projectsPage.filterAll": "Tất cả",
  "projectsPage.filterLabel": "Lọc dự án theo ngôn ngữ",
  "projectsPage.foodOrdering": "Một nền tảng đặt đồ ăn hoàn chỉnh với ba vai trò khách hàng, cửa hàng và giao hàng. Xác thực JWT, quản lý món ăn và đơn hàng, theo dõi đơn, đánh giá và nhận xét, cùng thông báo đẩy cho khách hàng, cửa hàng và tài xế.",
  "projectsPage.foodOrderingMicro": "Cùng miền nghiệp vụ được xây lại thành các service độc lập: xác thực, sản phẩm, danh mục, đặt hàng, cài đặt và thông báo — mỗi service triển khai riêng và giao tiếp qua các hợp đồng đã được tài liệu hoá.",
  "projectsPage.foodOrderingWeb": "Front end cho bản demo đặt đồ ăn: một ứng dụng React + Vite trên Firebase cho đăng nhập và dữ liệu, bao gồm duyệt món, giỏ hàng và thanh toán.",
  "projectsPage.heading": "Mọi dự án, ở một chỗ.",
  "projectsPage.intro": "Tám kho lưu trữ, mỗi cái bắt đầu vì tôi cần thứ đó tồn tại. Phần lớn chạy cục bộ, không cái nào tự gọi điện thoại về nhà bạn, và tất cả đều mở để bạn đọc.",
  "projectsPage.more": "Thêm các thử nghiệm nhỏ và fork khác nằm ở",
  "projectsPage.nestLearn": "Một sân chơi để học NestJS đúng cách — từng module một, với tài liệu Swagger / OpenAPI được sinh tự động cho mọi endpoint.",
  "stack.angular": "Front end doanh nghiệp có cấu trúc",
  "stack.csharp": "Ứng dụng desktop & web",
  "stack.ext": "Manifest V3, Shadow DOM, CDP",
  "stack.firebase": "Đăng nhập & realtime cho demo",
  "stack.heading": "Bộ công nghệ tôi hay dùng",
  "stack.intro": "Công cụ thay đổi liên tục. Đây là những cái tôi đã chạy production code cùng — và ngày mai vẫn sẽ chọn.",
  "stack.java": "Service doanh nghiệp tại FPT",
  "stack.js": "Tiện ích trình duyệt, công cụ Node",
  "stack.mysql": "Mô hình quan hệ & truy vấn",
  "stack.nest": "API mô-đun, dễ kiểm thử",
  "stack.node": "Service & CLI dựa trên sự kiện",
  "stack.python": "AI, pipeline media, tự động hoá",
  "stack.react": "Dashboard và front end ứng dụng",
  "stack.ts": "Backend có kiểu, contract dùng chung",
  "stats.novels": "Tiểu thuyết trong danh sách đọc",
  "stats.projects": "Dự án đã giao",
  "stats.repositories": "Kho lưu trữ công khai",
  "stats.technologies": "Công nghệ trong bộ stack",
  "form.subject": "Liên hệ từ portfolio — {name}",
  "form.body": "Chào Phong,\n\n{message}\n\n— {name}\n{email}",
  "form.error": "Vui lòng điền đầy đủ tên, email và nội dung.",
  "form.success": "Đang mỡ ứng dụng email của bạn…",
  "form.copied": "Đã sao chép!"
};

  var DICT = { en: en, vi: vi };
  var current = null;

  function each(selector, fn) {
    var nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) fn(nodes[i]);
  }

  /* The language to show: an explicit choice wins, then the saved
     preference, then the language already set on <html>, then English. */
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

  /* One click handler for every EN / VN button on the page. */
  function bind() {
    each("[data-lang]", function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (lang && lang !== current) apply(lang);
      });
    });
  }

  global.I18N = {
    en: en,
    vi: vi,
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
