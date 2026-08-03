const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const translations = {
  en: {
    announcement: "Curated luxury rugs · Jeddah, Saudi Arabia", announcement_link: "Plan your visit", nav_home: "Home", nav_collections: "Collections", nav_custom: "Custom Rugs", nav_gallery: "Gallery", nav_about: "About Us", nav_blog: "Journal", nav_contact: "Contact", search_label: "Find your perfect rug", search_placeholder: "Search collections, styles, materials…", hero_kicker: "A legacy underfoot · Since 2004", hero_title: "Timeless Craftsmanship.<br />Luxury Beneath Every Step.", hero_copy: "Discover handcrafted Persian, Turkish, Belgian Silk, and custom-made luxury rugs designed for sophisticated living.", hero_primary: "Explore Collection <span>→</span>", hero_secondary: "Book a Showroom Visit", hero_scroll: "Scroll to discover", collections_kicker: "Our collections", collections_title: "Stories woven<br /><i>into every thread.</i>", collections_copy: "Explore exceptionally sourced rugs where ancient craft meets a considered modern point of view.", filter_all: "All collections", filter_persian: "Persian", filter_turkish: "Turkish", filter_belgian: "European", filter_antique: "Collector", persian_label: "Persian Silk Collection", persian_title: "Qum, Tabriz & Naein", persian_copy: "Exquisite natural silk rugs, masterfully detailed by generations of artisans.", turkish_label: "Turkish Heritage", turkish_title: "Ottoman artistry", turkish_copy: "Traditional masterworks in rich, enduring palettes.", belgian_label: "Belgian Natural Silk", belgian_title: "Quietly contemporary", belgian_copy: "European elegance with a whisper-soft, luminous finish.", antique_label: "Antique & Collector Rugs", antique_title: "A rare point of view", antique_copy: "Tribal, nomadic and oriental treasures, each with a singular history.", explore: "Explore collection <span>→</span>", craft_kicker: "The Heritage standard", craft_title: "It begins with<br /><i>the exceptional.</i>", craft_copy: "We believe the finest rooms begin from the floor up. Every Heritage Carpet is selected for its soul, provenance and extraordinary hand-feel — then placed with the care your space deserves.", our_story: "Discover our story <span>→</span>", benefit_1: "Master artisans", benefit_1_copy: "Made by hands refined over generations.", benefit_2: "Verified authenticity", benefit_2_copy: "Every heirloom has a documented origin.", benefit_3: "Natural materials", benefit_3_copy: "The world’s finest silk, wool and fibres.", benefit_4: "Bespoke service", benefit_4_copy: "Personal design counsel from selection to placement.", custom_kicker: "Bespoke by design", custom_title: "Your story,<br /><i>handwoven.</i>", custom_copy: "Bring a room, a memory or a sketch. Our bespoke studio will translate it into a rug made uniquely for your life.", step_1: "Choose size & proportion", step_2: "Select colours & materials", step_3: "Refine pattern with our designers", step_4: "Handmade production & global delivery", custom_cta: "Design Your Rug <span>→</span>", visualizer_kicker: "See the difference", visualizer_title: "The room, <i>resolved.</i>", visualizer_copy: "Move the handle to see how the right rug grounds an interior and changes the way it feels.", gallery_kicker: "In situ", gallery_title: "Made for rooms<br /><i>with a point of view.</i>", gallery_cta: "View more projects <span>→</span>", gallery_1: "Private Villa, Jeddah", gallery_2: "Contemporary Majlis", gallery_3: "Boutique Hotel", gallery_4: "Al Rawdah Residence", gallery_5: "Private Office", about_kicker: "Our heritage", about_title: "A home for<br /><i>beautiful stories.</i>", about_copy: "Heritage Carpets has become one of Jeddah's trusted destinations for luxury handcrafted rugs, offering timeless Persian, Turkish, Belgian silk, and bespoke carpet collections. Combining traditional craftsmanship with modern interiors, every piece reflects artistry, heritage, and exceptional quality.", meet_us: "Meet Heritage <span>→</span>", stat_1: "Years of experience", stat_2: "Luxury rugs sourced", stat_3: "Happy clients", stat_4: "Made with care", testimonials_kicker: "Client notes", testimonials_title: "A lasting<br /><i>impression.</i>", quote_1: "“The quality exceeded our expectations. Our Persian silk rug became the centerpiece of our home.”", quote_2: "“Professional consultation and exceptional craftsmanship. We found exactly what the space was asking for.”", quote_3: "“A beautiful showroom, thoughtful team, and an outstanding collection that feels genuinely rare.”", client_1: "Private client, Jeddah", client_2: "Interior Designer", client_3: "Villa owner, Makkah", journal_kicker: "The journal", journal_title: "Notes on<br /><i>living beautifully.</i>", journal_cta: "View all articles <span>→</span>", article_1: "How to choose a Persian rug", article_2: "Silk vs wool: a considered guide", article_3: "Caring for handmade carpets", contact_kicker: "Visit Heritage", contact_title: "Begin with a<br /><i>conversation.</i>", contact_copy: "Book a private consultation, arrange a home viewing, or simply come in and let the rugs speak for themselves.", whatsapp: "Chat on WhatsApp <span>↗</span>", phone: "Call us", email: "Email", showrooms: "Showrooms", showroom_1: "Prince Sultan Road", showroom_2: "Al-Madinah Road", hours_1: "Sat–Thu, 10am–10pm", hours_2: "Sat–Thu, 10am–10pm", map: "View locations on Google Maps", footer_text: "The art of living beautifully, from the ground up.", newsletter_label: "A little beauty in your inbox", newsletter_placeholder: "Your email address", footer_explore: "Explore", footer_service: "Client service", footer_visit: "Visit us", footer_follow: "Follow", footer_consultation: "Book a consultation", footer_delivery: "Delivery & placement", footer_care: "Carpet care", footer_trade: "Trade programme", rights: "All rights reserved.", privacy: "Privacy", terms: "Terms", made_in: "Proudly rooted in Jeddah, KSA"
  },
  ar: {
    announcement: "سجاد فاخر مختار · جدة، المملكة العربية السعودية", announcement_link: "خطط لزيارتك", nav_home: "الرئيسية", nav_collections: "المجموعات", nav_custom: "السجاد حسب الطلب", nav_gallery: "المعرض", nav_about: "من نحن", nav_blog: "المجلة", nav_contact: "اتصل بنا", search_label: "اعثر على سجادتك المثالية", search_placeholder: "ابحث عن المجموعات والأنماط والخامات…", hero_kicker: "إرث تحت الأقدام · منذ ٢٠٠٤", hero_title: "حرفية خالدة.<br />فخامة تحت كل خطوة.", hero_copy: "اكتشف سجاداً فارسياً وتركياً وحريراً بلجيكياً مصنوعاً يدوياً، وتصاميم خاصة للمساحات الراقية.", hero_primary: "استكشف المجموعة <span>←</span>", hero_secondary: "احجز زيارة للمعرض", hero_scroll: "اكتشف المزيد", collections_kicker: "مجموعاتنا", collections_title: "حكايات منسوجة<br /><i>في كل خيط.</i>", collections_copy: "اكتشف قطعاً استثنائية تجمع الحرفة العريقة مع الرؤية العصرية المدروسة.", filter_all: "كل المجموعات", filter_persian: "فارسي", filter_turkish: "تركي", filter_belgian: "أوروبي", filter_antique: "مقتنيات", persian_label: "مجموعة الحرير الفارسي", persian_title: "قم، تبريز ونائين", persian_copy: "سجاد حرير طبيعي نفيس، بتفاصيل صنعتها أجيال من الحرفيين.", turkish_label: "التراث التركي", turkish_title: "فن عثماني", turkish_copy: "تحف تقليدية بألوان غنية تدوم طويلاً.", belgian_label: "الحرير البلجيكي الطبيعي", belgian_title: "عصرية هادئة", belgian_copy: "أناقة أوروبية بملمس ناعم ولمعان هادئ.", antique_label: "سجاد عتيق ومقتنيات", antique_title: "رؤية نادرة", antique_copy: "كنوز قبلية وبدوية وشرقية، لكل منها تاريخها الفريد.", explore: "استكشف المجموعة <span>←</span>", craft_kicker: "معيار هيريتج", craft_title: "كل شيء يبدأ<br /><i>بالاستثنائي.</i>", craft_copy: "نؤمن بأن أجمل الغرف تبدأ من الأرضية. نختار كل سجادة في هيريتج لروحها وأصلها وملمسها الاستثنائي، ثم نضعها بعناية تستحقها مساحتك.", our_story: "اكتشف قصتنا <span>←</span>", benefit_1: "حرفيون مهرة", benefit_1_copy: "صُنعت بأيدٍ أتقنت الحرفة عبر الأجيال.", benefit_2: "أصالة موثقة", benefit_2_copy: "لكل قطعة إرث وأصل موثق.", benefit_3: "خامات طبيعية", benefit_3_copy: "أجود أنواع الحرير والصوف والألياف.", benefit_4: "خدمة خاصة", benefit_4_copy: "استشارة تصميم من الاختيار حتى التركيب.", custom_kicker: "تصميم خاص", custom_title: "قصتك،<br /><i>منسوجة يدوياً.</i>", custom_copy: "ابدأ بغرفة أو ذكرى أو رسم. سيحوّلها استوديو التصميم لدينا إلى سجادة صنعت خصيصاً لحياتك.", step_1: "اختر المقاس والتناسب", step_2: "حدد الألوان والخامات", step_3: "صقل النقش مع مصممينا", step_4: "إنتاج يدوي وتوصيل عالمي", custom_cta: "صمم سجادتك <span>←</span>", visualizer_kicker: "شاهد الفرق", visualizer_title: "غرفة <i>مكتملة.</i>", visualizer_copy: "حرّك المؤشر لترى كيف تثبّت السجادة المناسبة تفاصيل المكان وتغيّر إحساسه.", gallery_kicker: "في المكان", gallery_title: "صنع لغرف<br /><i>لها رؤيتها.</i>", gallery_cta: "شاهد مزيداً من المشاريع <span>←</span>", gallery_1: "فيلا خاصة، جدة", gallery_2: "مجلس عصري", gallery_3: "فندق بوتيك", gallery_4: "إقامة الروضة", gallery_5: "مكتب خاص", about_kicker: "إرثنا", about_title: "بيتٌ<br /><i>للحكايات الجميلة.</i>", about_copy: "أصبحت هيريتج كاربتس واحدة من الوجهات الموثوقة في جدة للسجاد اليدوي الفاخر، مع مجموعات فارسية وتركية وحرير بلجيكي وتصاميم خاصة. تجمع كل قطعة بين الحرفية التقليدية والديكورات العصرية لتجسّد الفن والتراث والجودة الاستثنائية.", meet_us: "تعرف على هيريتج <span>←</span>", stat_1: "سنة من الخبرة", stat_2: "سجادة فاخرة", stat_3: "عميل سعيد", stat_4: "صناعة بعناية", testimonials_kicker: "كلمات العملاء", testimonials_title: "انطباع<br /><i>يدوم.</i>", quote_1: "“فاقت الجودة توقعاتنا. أصبحت سجادة الحرير الفارسي محور منزلنا.”", quote_2: "“استشارة احترافية وحرفية استثنائية. وجدنا تماماً ما تحتاجه المساحة.”", quote_3: "“معرض جميل، وفريق متفهم، ومجموعة استثنائية ونادرة بحق.”", client_1: "عميلة خاصة، جدة", client_2: "مصممة داخلية", client_3: "مالك فيلا، مكة", journal_kicker: "المجلة", journal_title: "ملاحظات حول<br /><i>جمال العيش.</i>", journal_cta: "عرض كل المقالات <span>←</span>", article_1: "كيف تختار سجادة فارسية", article_2: "الحرير أم الصوف؟ دليل عملي", article_3: "العناية بالسجاد اليدوي", contact_kicker: "زر هيريتج", contact_title: "ابدأ<br /><i>بمحادثة.</i>", contact_copy: "احجز استشارة خاصة، أو رتّب معاينة في المنزل، أو زرنا ودع السجاد يتحدث عن نفسه.", whatsapp: "تواصل عبر واتساب <span>↗</span>", phone: "اتصل بنا", email: "البريد الإلكتروني", showrooms: "المعارض", showroom_1: "طريق الأمير سلطان", showroom_2: "طريق المدينة", hours_1: "السبت–الخميس، ١٠ص–١٠م", hours_2: "السبت–الخميس، ١٠ص–١٠م", map: "عرض المواقع على خرائط Google", footer_text: "فن العيش بجمال، من الأرض إلى الأعلى.", newsletter_label: "قليل من الجمال في بريدك", newsletter_placeholder: "بريدك الإلكتروني", footer_explore: "استكشف", footer_service: "خدمة العملاء", footer_visit: "زرنا", footer_follow: "تابعنا", footer_consultation: "احجز استشارة", footer_delivery: "التوصيل والتركيب", footer_care: "العناية بالسجاد", footer_trade: "برنامج التجارة", rights: "جميع الحقوق محفوظة.", privacy: "الخصوصية", terms: "الشروط", made_in: "بكل فخر من جدة، المملكة العربية السعودية"
  }
};

const header = $(".site-header");
const backTop = $(".back-top");
const menu = $(".menu-toggle");
const nav = $(".nav-links");
const searchPanel = $(".search-panel");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 28);
  backTop.classList.toggle("visible", window.scrollY > 650);
  const parallax = $(".parallax");
  if (parallax && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) parallax.style.transform = `translateY(${window.scrollY * .18}px)`;
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
  document.body.classList.toggle("menu-open", !open);
});
$$('.nav-links a').forEach((link) => link.addEventListener("click", () => { menu.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); document.body.classList.remove("menu-open"); }));

$(".theme-toggle").addEventListener("click", () => {
  const enabled = document.body.classList.toggle("dark");
  localStorage.setItem("heritage-theme", enabled ? "dark" : "light");
});
if (localStorage.getItem("heritage-theme") === "dark") document.body.classList.add("dark");

function updateLanguage(language) {
  const dict = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  $$('[data-i18n]').forEach((el) => { const key = el.dataset.i18n; if (dict[key]) el.innerHTML = dict[key]; });
  $$('[data-i18n-placeholder]').forEach((el) => { const key = el.dataset.i18nPlaceholder; if (dict[key]) el.placeholder = dict[key]; });
  $(".lang-toggle").textContent = language === "ar" ? "English" : "العربية";
  localStorage.setItem("heritage-language", language);
}
$(".lang-toggle").addEventListener("click", () => updateLanguage(document.documentElement.lang === "ar" ? "en" : "ar"));
if (localStorage.getItem("heritage-language") === "ar") updateLanguage("ar");

$(".search-toggle").addEventListener("click", () => { searchPanel.classList.add("open"); searchPanel.setAttribute("aria-hidden", "false"); document.body.classList.add("search-open"); setTimeout(() => $("#site-search").focus(), 150); });
function closeSearch() { searchPanel.classList.remove("open"); searchPanel.setAttribute("aria-hidden", "true"); document.body.classList.remove("search-open"); }
$(".search-close").addEventListener("click", closeSearch);
searchPanel.addEventListener("click", (e) => { if (e.target === searchPanel) closeSearch(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSearch(); });

const searchIndex = [
  { title: "Persian Silk Collection", group: "Qum, Tabriz & Naein", href: "#collections" },
  { title: "Turkish Heritage", group: "Ottoman inspired hand-knotted rugs", href: "#collections" },
  { title: "Belgian Natural Silk", group: "Contemporary European elegance", href: "#collections" },
  { title: "Antique & Collector Rugs", group: "Rare tribal and oriental pieces", href: "#collections" },
  { title: "Bespoke Rug Design", group: "Custom size, pattern and material", href: "#custom" }
];
$("#site-search").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  const results = $(".search-results");
  if (!query) { results.innerHTML = ""; return; }
  const found = searchIndex.filter((item) => `${item.title} ${item.group}`.toLowerCase().includes(query));
  results.innerHTML = found.length ? found.map((item) => `<a class="result-link" href="${item.href}">${item.title}</a>`).join("") : "No matching collection found.";
  $$(".result-link", results).forEach((link) => link.addEventListener("click", closeSearch));
});

$$('.filter-chip').forEach((chip) => chip.addEventListener("click", () => {
  $$(".filter-chip").forEach((item) => item.classList.remove("is-active"));
  chip.classList.add("is-active");
  const category = chip.dataset.filter;
  $$(".collection-card").forEach((card) => card.classList.toggle("is-hidden", category !== "all" && card.dataset.category !== category));
}));

const range = $(".comparison-range");
const after = $(".comparison-after");
const handle = $(".comparison-handle");
function updateComparison(value) { after.style.width = `${value}%`; handle.style.left = `${value}%`; }
range.addEventListener("input", (event) => updateComparison(event.target.value));

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); } }), { threshold: .11 });
$$('.reveal').forEach((element) => revealObserver.observe(element));

const countObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (!entry.isIntersecting) return;
  const number = entry.target; const target = Number(number.dataset.count); const duration = 1300; const start = performance.now();
  const tick = (now) => { const progress = Math.min((now - start) / duration, 1); number.textContent = Math.floor(target * (1 - Math.pow(1 - progress, 3))).toLocaleString(); if (progress < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick); countObserver.unobserve(number);
}), { threshold: .7 });
$$('[data-count]').forEach((number) => countObserver.observe(number));

let slide = 0;
function moveTestimonials(direction) { const cards = $$(".testimonial"); const mobile = window.innerWidth <= 760; const max = mobile ? cards.length - 1 : 0; slide = Math.max(0, Math.min(max, slide + direction)); $(".testimonials-track").style.transform = mobile ? `translateX(-${slide * 100}%)` : "translateX(0)"; }
$(".testimonial-prev").addEventListener("click", () => moveTestimonials(-1));
$(".testimonial-next").addEventListener("click", () => moveTestimonials(1));
window.addEventListener("resize", () => { if (window.innerWidth > 760) { slide = 0; $(".testimonials-track").style.transform = "translateX(0)"; } });

$(".back-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
$("#year").textContent = new Date().getFullYear();
$(".newsletter").addEventListener("submit", () => { const message = $(".newsletter-message"); message.textContent = document.documentElement.lang === "ar" ? "شكراً لانضمامك إلى هيريتج." : "Thank you — welcome to Heritage."; });

if (window.Motion && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.Motion.animate(".hero-content", { opacity: [0, 1] }, { duration: .45, easing: "ease-out" });
}
