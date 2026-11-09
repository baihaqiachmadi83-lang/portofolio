/**
 * PORTFOLIO CLIENT APPLICATION — ANNURIL BAIHAQI ACHMADI
 * Education × Technology × AI
 * Pure Vanilla JavaScript — Zero dependencies
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. THEME MANAGEMENT (DARK / LIGHT MODE & LOCALSTORAGE)
  // --------------------------------------------------------------------------
  const THEME_STORAGE_KEY = 'annuril_portfolio_theme';
  const LANGUAGE_STORAGE_KEY = 'annuril_portfolio_language';
  const CURSOR_STORAGE_KEY = 'annuril_portfolio_custom_cursor';
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const rootElement = document.documentElement;
  const languageButtons = document.querySelectorAll('.lang-btn');
  let currentLanguage = 'id';

  const translations = {
    id: {
      'nav.home': 'Beranda',
      'nav.main': 'Navigasi utama',
      'nav.projects': 'Proyek & Riset',
      'nav.about': 'Tentang',
      'nav.skills': 'Keahlian',
      'nav.experience': 'Pengalaman',
      'nav.education': 'Pendidikan',
      'nav.contact': 'Kontak',
      'nav.openMenu': 'Buka menu',
      'nav.closeMenu': 'Tutup menu',
      'details.view': 'Lihat Detail',
      'details.dialogLabel': 'Informasi detail',
      'details.close': 'Tutup detail',
      'projects.prototype': 'Prototipe Akademik',
      'slide.previous': 'Slide sebelumnya',
      'slide.next': 'Slide berikutnya',
      'slide.announcement': 'Bagian ',
      'slide.navigation': 'Navigasi slide',
      'cursor.toggle': 'Kursor khusus',
      'cursor.enabled': 'Kursor khusus aktif',
      'cursor.disabled': 'Kursor khusus nonaktif',
      'section.skills': 'COMPETENCIES // KEAHLIAN',
      'section.home': 'BERANDA // PROFIL',
      'section.contact': 'CONNECT // KOMUNIKASI',
      'gallery.dashboard': 'Dashboard',
      'gallery.material': 'Materi',
      'gallery.path': 'Alur Belajar',
      'gallery.exercise': 'Latihan',
      'gallery.game': 'Zona Permainan',
      'gallery.caption0': 'Dashboard utama — Ringkasan progres dan materi belajar.',
      'gallery.caption1': 'Materi kosakata interaktif — Flashcard visual dengan audio dan kartu kata.',
      'gallery.caption2': 'Peta kurikulum Paket C — Unit terstruktur untuk Vocabulary, Speaking, dan Reading.',
      'gallery.caption3': 'Latihan interaktif — Hubungkan kata bahasa Inggris dengan artinya.',
      'gallery.caption4': 'Zona permainan dan latihan — Speed Quiz, Sentence Builder, dan Memory Match.',
      'gallery.alt0': 'Pratinjau MANTUL — Dashboard utama',
      'gallery.alt1': 'Pratinjau MANTUL — Materi kosakata',
      'gallery.alt2': 'Pratinjau MANTUL — Alur belajar',
      'gallery.alt3': 'Pratinjau MANTUL — Latihan interaktif',
      'gallery.alt4': 'Pratinjau MANTUL — Zona permainan',
      'gallery.thumb0': 'Pilih slide 1: Dashboard',
      'gallery.thumb1': 'Pilih slide 2: Materi',
      'gallery.thumb2': 'Pilih slide 3: Alur Belajar',
      'gallery.thumb3': 'Pilih slide 4: Latihan',
      'gallery.thumb4': 'Pilih slide 5: Zona Permainan',
      'hero.field': 'Education, Research & Digital Learning',
      'hero.headlineId': 'Education, Research & Digital Learning',
      'hero.descriptionId': 'Saya memadukan latar belakang pendidikan bahasa Inggris dengan riset pendidikan, desain pembelajaran, dan pengembangan media digital untuk menciptakan pengalaman belajar yang relevan, interaktif, dan mudah diakses.',
      'hero.ctaPrimary': 'Lihat Proyek',
      'hero.ctaSecondary': 'Hubungi Saya',
      'hero.highlightEducationLabel': '01 // PENDIDIKAN',
      'hero.highlightInstitutionLabel': '02 // INSTITUSI',
      'hero.highlightFocusLabel': '03 // FOKUS',
      'hero.highlightEducation': 'Pendidikan Bahasa Inggris',
      'hero.highlightFocus': 'Digital Learning',
      'hero.profileLabel': 'Profil Profesional',
      'hero.floatTitle': 'Instructional Design',
      'hero.floatSub': 'Digital learning for nonformal education',
      'section.about': 'PROFILE // TENTANG SAYA',
      'section.projects': 'WORKS // PROYEK',
      'section.experience': 'EXPERIENCE // PENGALAMAN',
      'section.education': 'EDUCATION // PENDIDIKAN',
      'about.title': 'Tentang Saya',
      'about.researchTitle': 'Riset Pendidikan',
      'about.researchDesc': 'Mengidentifikasi kebutuhan melalui observasi, wawancara, dan kajian literatur.',
      'about.analysisTitle': 'Analisis & Evaluasi',
      'about.analysisDesc': 'Menganalisis tema wawancara dan persentase penilaian ahli untuk perbaikan produk.',
      'about.designTitle': 'Desain Pembelajaran',
      'about.designDesc': 'Menyusun tujuan, materi, dan aktivitas belajar sesuai kebutuhan peserta didik.',
      'about.mediaTitle': 'Media Digital',
      'about.mediaDesc': 'Mengembangkan media web/mobile serta memanfaatkan AI dengan pemeriksaan hasil.',
      'skills.title': 'Keahlian',
      'skills.subtitle': 'Kompetensi yang relevan dengan pengembangan materi pembelajaran, media digital, dan teknologi pendidikan.',
      'skills.designTitle': 'Perancangan Pembelajaran',
      'skills.designBadge': 'Lesson planning',
      'skills.designDesc': 'Merancang materi dan aktivitas belajar yang terstruktur untuk mendukung pencapaian tujuan pembelajaran bahasa Inggris.',
      'skill.design1': 'Lesson planning',
      'skill.design2': 'Materi bahasa Inggris',
      'skill.design3': 'Alur belajar bertahap',
      'skill.design4': 'Aktivitas dan latihan',
      'skills.mediaTitle': 'Pengembangan Media Digital',
      'skills.mediaBadge': 'Modul digital',
      'skills.mediaDesc': 'Mengembangkan modul digital, konten interaktif, dan media belajar berbasis web yang responsif serta mudah diakses.',
      'skill.media1': 'Modul digital',
      'skill.media2': 'Konten interaktif',
      'skill.media3': 'Media belajar berbasis web',
      'skill.media4': 'Desain responsif',
      'skills.techTitle': 'Teknologi Pendukung',
      'skills.techBadge': 'HTML, CSS, JavaScript',
      'skills.techDesc': 'Menerapkan HTML, CSS, JavaScript, LocalStorage, GitHub Pages, dan pengembangan berbantuan AI dalam proses pembuatan produk pembelajaran.',
      'skill.techAI': 'AI',
      'skills.researchTitle': 'Riset dan Penulisan',
      'skills.researchBadge': 'Literature review',
      'skills.researchDesc': 'Menyusun tinjauan literatur, mengolah informasi akademik, serta menulis karya ilmiah dengan pendekatan yang sistematis.',
      'skill.research1': 'Tinjauan literatur',
      'skill.research2': 'Riset pendidikan',
      'skill.research3': 'Penulisan akademik',
      'projects.title': 'Proyek & Riset',
      'projects.subtitle': 'Produk skripsi MANTUL dan rencana pengembangan lanjutannya untuk pembelajaran bahasa Inggris di pendidikan nonformal.',
      'projects.mantulTitle': 'MANTUL: Mandiri Tunas English Learning',
      'projects.mantulContext': 'Produk skripsi pembelajaran bahasa Inggris untuk peserta didik Paket C',
      'projects.mantulProblemLabel': 'Kebutuhan pengguna',
      'projects.mantulProblem': 'Peserta didik pendidikan nonformal membutuhkan akses materi yang fleksibel untuk mendukung pembelajaran di luar waktu tatap muka.',
      'projects.mantulGoalLabel': 'Kontribusi',
      'projects.mantulGoal': 'Merancang materi dan produk, mengumpulkan data, menganalisis wawancara secara tematik/deskriptif, serta menghitung persentase validasi.',
      'projects.mantulScopeLabel': 'Materi',
      'projects.mantulScope': 'Vocabulary, Speaking, dan Reading.',
      'projects.techLabel': 'Teknologi',
      'projects.mantulButton': 'Lihat demo produk pertama',
      'projects.mantulStatus': 'Selesai dikembangkan · Validasi ahli · Uji coba terbatas',
      'experience.title': 'Pengalaman',
      'experience.subtitle': 'Pengalaman dalam pengajaran bahasa Inggris, dukungan administrasi pendidikan, dan komunikasi hasil penelitian.',
      'education.title': 'Pendidikan',
      'education.subtitle': 'Latar belakang pendidikan, fokus penelitian skripsi, dan minat riset.',
      'education.interestTitle': 'Minat Riset & Pengembangan',
      'education.r1': 'Pendidikan Bahasa',
      'education.r2': 'Riset dan Evaluasi Pembelajaran',
      'education.r3': 'Teknologi Pendidikan',
      'education.r4': 'Desain Pembelajaran',
      'education.r5': 'AI dalam Pendidikan',
      'contact.title': 'Mari Berdiskusi & Berkolaborasi',
      'contact.subtitle': 'Saya terbuka untuk peluang magang, pekerjaan, dan kolaborasi dalam pendidikan, riset, serta pengembangan pembelajaran digital. Silakan hubungi saya untuk berdiskusi lebih lanjut.',
      'contact.channel': 'Kanal Komunikasi',
      'contact.intro': 'Silakan hubungi saya melalui email atau jaringan profesional untuk mendiskusikan peluang kerja sama atau proyek teknologi pendidikan.',
      'contact.emailTitle': 'Email',
      'contact.copy': 'Salin',
      'contact.open': 'Buka',
      'contact.actionTitle': 'Kirim Pesan Langsung',
      'contact.actionDesc': 'Klik tombol di bawah untuk membuka aplikasi email atau menyalin alamat email ke clipboard.',
      'contact.openMail': 'Buka Aplikasi Email',
      'contact.copyEmail': 'Salin Alamat Email',
      'footer.tagline': 'Digital Learning Content Development · Instructional Design',
      'footer.top': 'Kembali ke Atas',
      'footer.made': 'Dibuat dengan HTML, CSS, dan JavaScript'
    },
    en: {
      'nav.home': 'Home',
      'nav.main': 'Main navigation',
      'nav.projects': 'Projects & Research',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.contact': 'Contact',
      'nav.openMenu': 'Open menu',
      'nav.closeMenu': 'Close menu',
      'details.view': 'View Details',
      'details.dialogLabel': 'Detailed information',
      'details.close': 'Close details',
      'projects.prototype': 'Academic Prototype',
      'slide.previous': 'Previous slide',
      'slide.next': 'Next slide',
      'slide.announcement': 'Section ',
      'slide.navigation': 'Slide navigation',
      'cursor.toggle': 'Custom cursor',
      'cursor.enabled': 'Custom cursor enabled',
      'cursor.disabled': 'Custom cursor disabled',
      'section.skills': 'COMPETENCIES // SKILLS',
      'section.home': 'HOME // PROFILE',
      'section.contact': 'CONNECT // CONTACT',
      'gallery.dashboard': 'Dashboard',
      'gallery.material': 'Materials',
      'gallery.path': 'Learning Path',
      'gallery.exercise': 'Exercise',
      'gallery.game': 'Game Zone',
      'gallery.caption0': 'Main dashboard — A summary of learning progress and materials.',
      'gallery.caption1': 'Interactive vocabulary materials — Visual flashcards with audio and word cards.',
      'gallery.caption2': 'Paket C curriculum map — Structured units for Vocabulary, Speaking, and Reading.',
      'gallery.caption3': 'Interactive exercise — Match English words with their meanings.',
      'gallery.caption4': 'Game zone and practice — Speed Quiz, Sentence Builder, and Memory Match.',
      'gallery.alt0': 'MANTUL preview — Main dashboard',
      'gallery.alt1': 'MANTUL preview — Vocabulary materials',
      'gallery.alt2': 'MANTUL preview — Learning path',
      'gallery.alt3': 'MANTUL preview — Interactive exercise',
      'gallery.alt4': 'MANTUL preview — Game zone',
      'gallery.thumb0': 'Select slide 1: Dashboard',
      'gallery.thumb1': 'Select slide 2: Materials',
      'gallery.thumb2': 'Select slide 3: Learning Path',
      'gallery.thumb3': 'Select slide 4: Exercise',
      'gallery.thumb4': 'Select slide 5: Game Zone',
      'hero.field': 'Education, Research & Digital Learning',
      'hero.headlineId': 'Education, Research & Digital Learning',
      'hero.descriptionId': 'I combine my background in English language education with educational research, instructional design, and digital media development to create learning experiences that are relevant, interactive, and accessible.',
      'hero.ctaPrimary': 'View Projects',
      'hero.ctaSecondary': 'Contact Me',
      'hero.highlightEducationLabel': '01 // EDUCATION',
      'hero.highlightInstitutionLabel': '02 // INSTITUTION',
      'hero.highlightFocusLabel': '03 // FOCUS',
      'hero.highlightEducation': 'English Language Education',
      'hero.highlightFocus': 'Digital Learning',
      'hero.profileLabel': 'Professional Profile',
      'hero.floatTitle': 'Instructional Design',
      'hero.floatSub': 'Digital learning for nonformal education',
      'section.about': 'PROFILE // ABOUT',
      'section.projects': 'WORKS // PROJECTS',
      'section.experience': 'EXPERIENCE // EXPERIENCE',
      'section.education': 'EDUCATION // EDUCATION',
      'about.title': 'About Me',
      'about.researchTitle': 'Educational Research',
      'about.researchDesc': 'Identifying needs through observation, interviews, and literature review.',
      'about.analysisTitle': 'Analysis & Evaluation',
      'about.analysisDesc': 'Analyzing interview themes and expert-rating percentages to improve products.',
      'about.designTitle': 'Instructional Design',
      'about.designDesc': 'Developing learning objectives, materials, and activities to meet learner needs.',
      'about.mediaTitle': 'Digital Media',
      'about.mediaDesc': 'Developing web/mobile media and using AI while reviewing its outputs.',
      'skills.title': 'Skills',
      'skills.subtitle': 'Relevant competencies in learning material development, digital media, and educational technology.',
      'skills.designTitle': 'Instructional Design',
      'skills.designBadge': 'Lesson planning',
      'skills.designDesc': 'Designing structured learning materials and activities that support the achievement of English learning goals.',
      'skill.design1': 'Lesson planning',
      'skill.design2': 'English learning materials',
      'skill.design3': 'Progressive learning flow',
      'skill.design4': 'Activities and practice',
      'skills.mediaTitle': 'Digital Learning Media',
      'skills.mediaBadge': 'Digital modules',
      'skills.mediaDesc': 'Developing digital modules, interactive content, and responsive web-based learning media that are easy to access.',
      'skill.media1': 'Digital modules',
      'skill.media2': 'Interactive content',
      'skill.media3': 'Web-based learning media',
      'skill.media4': 'Responsive design',
      'skills.techTitle': 'Supporting Technologies',
      'skills.techBadge': 'HTML, CSS, JavaScript',
      'skills.techDesc': 'Applying HTML, CSS, JavaScript, LocalStorage, GitHub Pages, and AI-assisted development in the production of learning tools.',
      'skill.techAI': 'AI',
      'skills.researchTitle': 'Research and Writing',
      'skills.researchBadge': 'Literature review',
      'skills.researchDesc': 'Conducting literature reviews, processing academic information, and writing scholarly work with a systematic approach.',
      'skill.research1': 'Literature review',
      'skill.research2': 'Educational research',
      'skill.research3': 'Academic writing',
      'projects.title': 'Projects & Research',
      'projects.subtitle': 'The MANTUL thesis product and its proposed continuation for English learning in nonformal education.',
      'projects.mantulTitle': 'MANTUL: Mandiri Tunas English Learning',
      'projects.mantulContext': 'An English-learning thesis product for Paket C learners',
      'projects.mantulProblemLabel': 'User needs',
      'projects.mantulProblem': 'Nonformal learners need flexible access to learning materials that can be used outside classroom time.',
      'projects.mantulGoalLabel': 'Contribution',
      'projects.mantulGoal': 'Designing the materials and product, collecting data, conducting thematic/descriptive interview analysis, and calculating validation percentages.',
      'projects.mantulScopeLabel': 'Materials',
      'projects.mantulScope': 'Vocabulary, Speaking, and Reading.',
      'projects.techLabel': 'Technology',
      'projects.mantulButton': 'View the first product demo',
      'projects.mantulStatus': 'Development completed · Expert validation · Limited trial',
      'experience.title': 'Experience',
      'experience.subtitle': 'Experience in English language teaching, educational administration support, and communicating research findings.',
      'education.title': 'Education',
      'education.subtitle': 'Educational background, thesis research focus, and research interests.',
      'education.interestTitle': 'Research & Development Interests',
      'education.r1': 'Language Education',
      'education.r2': 'Learning Research & Evaluation',
      'education.r3': 'Educational Technology',
      'education.r4': 'Instructional Design',
      'education.r5': 'AI in Education',
      'contact.title': 'Let’s Discuss & Collaborate',
      'contact.subtitle': 'I am open to internship, employment, and collaboration opportunities in education, research, and digital learning development. Please contact me to discuss further.',
      'contact.channel': 'Communication Channels',
      'contact.intro': 'Please contact me through email or professional networks to discuss collaboration opportunities or educational technology projects.',
      'contact.emailTitle': 'Email',
      'contact.copy': 'Copy',
      'contact.open': 'Open',
      'contact.actionTitle': 'Send a Direct Message',
      'contact.actionDesc': 'Click the button below to open your email client or copy the email address to the clipboard.',
      'contact.openMail': 'Open Email App',
      'contact.copyEmail': 'Copy Email Address',
      'footer.tagline': 'Digital Learning Content Development · Instructional Design',
      'footer.top': 'Back to Top',
      'footer.made': 'Built with HTML, CSS, and JavaScript'
    }
  };

  function applyTranslations(language) {
    const langData = translations[language] || translations.id;
    currentLanguage = language === 'en' ? 'en' : 'id';
    document.documentElement.lang = language === 'en' ? 'en' : 'id';
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(langData, key)) {
        element.textContent = langData[key];
      }
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (element) {
      const key = element.dataset.i18nAria;
      if (Object.prototype.hasOwnProperty.call(langData, key)) {
        element.setAttribute('aria-label', langData[key]);
      }
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (element) {
      const key = element.dataset.i18nAlt;
      if (Object.prototype.hasOwnProperty.call(langData, key)) {
        element.setAttribute('alt', langData[key]);
      }
    });
    document.querySelectorAll('[data-id][data-en]').forEach(function (element) {
      element.textContent = element.getAttribute(language === 'en' ? 'data-en' : 'data-id');
    });
    document.querySelectorAll('[data-id-aria][data-en-aria]').forEach(function (element) {
      element.setAttribute('aria-label', element.getAttribute(language === 'en' ? 'data-en-aria' : 'data-id-aria'));
    });
    document.querySelectorAll('[data-id-alt][data-en-alt]').forEach(function (element) {
      element.setAttribute('alt', element.getAttribute(language === 'en' ? 'data-en-alt' : 'data-id-alt'));
    });
    const pageTitle = document.querySelector('title[data-id][data-en]');
    if (pageTitle) pageTitle.textContent = pageTitle.getAttribute(language === 'en' ? 'data-en' : 'data-id');
    const pageDescription = document.querySelector('meta[name="description"][data-id][data-en]');
    if (pageDescription) pageDescription.content = pageDescription.getAttribute(language === 'en' ? 'data-en' : 'data-id');
    const mobileMenuButton = document.getElementById('mobileMenuBtn');
    if (mobileMenuButton) {
      const isOpen = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-label', langData[isOpen ? 'nav.closeMenu' : 'nav.openMenu']);
    }
    const slideControls = document.getElementById('slideControls');
    if (slideControls) slideControls.setAttribute('aria-label', langData['slide.navigation']);
    const languageSwitch = document.querySelector('.lang-switch');
    if (languageSwitch) {
      languageSwitch.dataset.active = currentLanguage;
      languageSwitch.setAttribute('aria-label', language === 'en' ? 'Language selection' : 'Pilihan bahasa');
    }
    const activeId = window.location.hash.slice(1) || 'home';
    const slideIdOrder = ['home', 'projects', 'about', 'skills', 'experience', 'education', 'contact'];
    const activeIndex = slideIdOrder.indexOf(activeId);
    const currentSlideName = document.getElementById('slideName');
    if (currentSlideName && activeIndex >= 0) {
      currentSlideName.textContent = translations[currentLanguage]['nav.' + activeId];
    }
    if (themeToggleBtn) {
      const isDark = rootElement.getAttribute('data-theme') === 'dark';
      const label = currentLanguage === 'en'
        ? (isDark ? 'Switch to light mode' : 'Switch to dark mode')
        : (isDark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap');
      themeToggleBtn.setAttribute('title', label);
      themeToggleBtn.setAttribute('aria-label', label);
    }

    languageButtons.forEach(function (button) {
      const isActive = button.dataset.lang === language;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    try { localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage); } catch (e) {}
  }

  function getPreferredLanguage() {
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (stored === 'id' || stored === 'en') return stored;
    } catch (e) {}
    return 'id';
  }

  if (languageButtons.length > 0) {
    languageButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const selected = button.dataset.lang || 'id';
        applyTranslations(selected);
      });
    });
    applyTranslations(getPreferredLanguage());
  }

  /**
   * Determine preferred theme from localStorage or system setting
   */
  function getInitialTheme() {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
    } catch (e) {
      console.warn('localStorage not accessible for theme persistence:', e);
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  /**
   * Apply theme to root element and persist
   */
  function setTheme(theme) {
    rootElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (e) {
      // Graceful fallback if localStorage is disabled
    }

    if (themeToggleBtn) {
      const label = currentLanguage === 'en'
        ? (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')
        : (theme === 'dark' ? 'Ganti ke mode terang' : 'Ganti ke mode gelap');
      themeToggleBtn.setAttribute('title', label);
      themeToggleBtn.setAttribute('aria-label', label);
    }
  }

  // Initialize theme
  const currentTheme = getInitialTheme();
  setTheme(currentTheme);

  // Toggle theme on button click
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const current = rootElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(current);
    });
  }

  // Listen to OS system color-scheme changes if no manual override
  if (window.matchMedia) {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateSystemTheme = function (e) {
      try {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (!savedTheme) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      } catch (err) {}
    };
    if (colorSchemeQuery.addEventListener) colorSchemeQuery.addEventListener('change', updateSystemTheme);
    else if (colorSchemeQuery.addListener) colorSchemeQuery.addListener(updateSystemTheme);
  }

  // --------------------------------------------------------------------------
  // 2. PRESENTATION SLIDES & ACCESSIBLE NAVIGATION
  // --------------------------------------------------------------------------
  const main = document.querySelector('main');
  const slideOrder = ['home', 'projects', 'about', 'skills', 'experience', 'education', 'contact'];
  const slideLabels = {
    id: ['Beranda', 'Proyek & Riset', 'Tentang', 'Keahlian', 'Pengalaman', 'Pendidikan', 'Kontak'],
    en: ['Home', 'Projects & Research', 'About', 'Skills', 'Experience', 'Education', 'Contact']
  };
  const slideControls = document.getElementById('slideControls');
  const slidePrevious = document.getElementById('slidePrevious');
  const slideNext = document.getElementById('slideNext');
  const slideCount = document.getElementById('slideCount');
  const slideName = document.getElementById('slideName');
  const slideAnnouncement = document.getElementById('slideAnnouncement');
  const transitionOverlay = document.querySelector('.slide-transition-overlay');
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const allNavLinks = document.querySelectorAll('.nav-links .nav-link, .mobile-nav-link');
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const slides = slideOrder.map(function (id) {
    return document.getElementById(id);
  }).filter(Boolean);
  let activeSlideId = '';
  let transitionTimeout = 0;
  const transitionDuration = prefersReducedMotion ? 0 : 440;

  function toggleMobileMenu(open) {
    if (!mobileMenuBtn || !mobileNav) return;
    const shouldOpen = typeof open === 'boolean' ? open : !mobileNav.classList.contains('open');
    mobileNav.classList.toggle('open', shouldOpen);
    mobileMenuBtn.classList.toggle('active', shouldOpen);
    mobileMenuBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    mobileMenuBtn.setAttribute('aria-label', translations[currentLanguage][shouldOpen ? 'nav.closeMenu' : 'nav.openMenu']);
  }

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleMobileMenu();
    });
    document.addEventListener('click', function (event) {
      if (navbar && !navbar.contains(event.target)) toggleMobileMenu(false);
    });
  }

  function syncSlideControls(index, id) {
    if (slideCount) slideCount.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
    if (slideName) slideName.textContent = slideLabels[currentLanguage][index] || id;
    if (slidePrevious) slidePrevious.disabled = index === 0;
    if (slideNext) slideNext.disabled = index === slides.length - 1;
    allNavLinks.forEach(function (link) {
      const isActive = link.getAttribute('href') === '#' + id;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function settleSlideTransition() {
    window.clearTimeout(transitionTimeout);
    if (main) main.classList.remove('slide-transition-active');
    if (transitionOverlay) transitionOverlay.classList.remove('is-active');
    slides.forEach(function (slide) {
      slide.classList.remove('slide-entering', 'slide-leaving');
      const active = slide.id === activeSlideId;
      slide.hidden = !active;
      slide.inert = !active;
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
  }

  function activateSlide(id, options) {
    const settings = options || {};
    const target = slides.find(function (slide) { return slide.id === id; });
    if (!target || (detailDialog && detailDialog.open)) return;
    const previousId = activeSlideId;
    if (previousId === id) {
      if (settings.updateHash && window.location.hash !== '#' + id) {
        window.history.pushState(null, '', '#' + id);
      }
      if (settings.focus) target.querySelector('h1, h2').focus({ preventScroll: true });
      return;
    }

    settleSlideTransition();
    const previous = slides.find(function (slide) { return slide.id === previousId; });
    const targetIndex = slides.indexOf(target);
    const previousIndex = slides.findIndex(function (slide) { return slide.id === previousId; });
    const direction = targetIndex >= previousIndex ? 'forward' : 'backward';

    activeSlideId = id;
    target.hidden = false;
    target.inert = true;
    target.setAttribute('aria-hidden', 'true');
    target.classList.add('slide-entering');
    if (previous) {
      previous.classList.add('slide-leaving');
      if (previous.contains(document.activeElement)) document.activeElement.blur();
      previous.inert = true;
      previous.setAttribute('aria-hidden', 'true');
    }
    if (main) {
      main.dataset.direction = direction;
      main.classList.add('slide-transition-active');
    }
    if (transitionOverlay) transitionOverlay.classList.add('is-active');
    syncSlideControls(targetIndex, id);
    if (slideAnnouncement) slideAnnouncement.textContent = translations[currentLanguage]['slide.announcement'] + String(targetIndex + 1) + ': ' + slideLabels[currentLanguage][targetIndex];

    if (settings.updateHash && window.location.hash !== '#' + id) {
      window.history.pushState(null, '', '#' + id);
    }
    if (settings.closeMenu) toggleMobileMenu(false);

    transitionTimeout = window.setTimeout(function () {
      if (previous) {
        previous.hidden = true;
        previous.classList.remove('slide-leaving');
      }
      target.inert = false;
      target.setAttribute('aria-hidden', 'false');
      target.classList.remove('slide-entering');
      if (main) main.classList.remove('slide-transition-active');
      if (transitionOverlay) transitionOverlay.classList.remove('is-active');
      if (settings.focus) {
        const heading = target.querySelector('h1, h2');
        if (heading) heading.focus({ preventScroll: true });
      }
    }, transitionDuration);
  }

  if (main && slides.length === slideOrder.length && slideControls && slidePrevious && slideNext) {
    slides.forEach(function (slide) {
      main.insertBefore(slide, slideControls);
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-roledescription', currentLanguage === 'en' ? 'slide' : 'slide');
      const heading = slide.querySelector('h1, h2');
      if (heading) heading.setAttribute('tabindex', '-1');
      slide.querySelectorAll('.reveal-on-scroll').forEach(function (element) {
        element.classList.add('revealed');
      });
    });
    document.body.classList.add('slide-mode');
    const requestedId = window.location.hash.slice(1);
    const initialId = slideOrder.includes(requestedId) ? requestedId : 'home';
    activeSlideId = initialId;
    slides.forEach(function (slide) {
      const isActive = slide.id === initialId;
      slide.hidden = !isActive;
      slide.inert = !isActive;
      slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });
    syncSlideControls(slideOrder.indexOf(initialId), initialId);
    if (!window.location.hash) window.history.replaceState(null, '', '#home');

    allNavLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        const destination = link.getAttribute('href').slice(1);
        if (!slideOrder.includes(destination) || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        activateSlide(destination, { updateHash: true, focus: true, closeMenu: true });
      });
    });

    slidePrevious.addEventListener('click', function () {
      const index = slideOrder.indexOf(activeSlideId);
      if (index > 0) activateSlide(slideOrder[index - 1], { updateHash: true, focus: true });
    });
    slideNext.addEventListener('click', function () {
      const index = slideOrder.indexOf(activeSlideId);
      if (index < slideOrder.length - 1) activateSlide(slideOrder[index + 1], { updateHash: true, focus: true });
    });
    function syncSlideFromLocation() {
      const nextId = window.location.hash.slice(1);
      if (slideOrder.includes(nextId)) activateSlide(nextId, { focus: true });
    }
    window.addEventListener('hashchange', syncSlideFromLocation);
    window.addEventListener('popstate', syncSlideFromLocation);
    document.addEventListener('keydown', function (event) {
      if (detailDialog && detailDialog.open) {
        if (event.key === 'Escape') {
          event.preventDefault();
          detailDialog.close();
        }
        return;
      }
      const target = event.target;
      if (target instanceof Element && target.closest('input, textarea, select, button, a, [role="tab"], [contenteditable="true"]')) return;
      let destinationIndex = slideOrder.indexOf(activeSlideId);
      if (event.key === 'ArrowRight') destinationIndex += 1;
      else if (event.key === 'ArrowLeft') destinationIndex -= 1;
      else if (event.key === 'Home') destinationIndex = 0;
      else if (event.key === 'End') destinationIndex = slideOrder.length - 1;
      else return;
      event.preventDefault();
      destinationIndex = Math.max(0, Math.min(slideOrder.length - 1, destinationIndex));
      if (slideOrder[destinationIndex] !== activeSlideId) {
        activateSlide(slideOrder[destinationIndex], { updateHash: true, focus: true });
      }
    });

    let touchStartX = 0;
    let touchStartY = 0;
    main.addEventListener('touchstart', function (event) {
      const target = event.target;
      if (target instanceof Element && target.closest('.gallery-tabs-wrap, .gallery-stage, .gallery-thumbs-grid, .slide-controls')) return;
      const touch = event.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    }, { passive: true });
    main.addEventListener('touchend', function (event) {
      const target = event.target;
      if (target instanceof Element && target.closest('.gallery-tabs-wrap, .gallery-stage, .gallery-thumbs-grid, .slide-controls')) return;
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      if (Math.abs(deltaX) < 70 || Math.abs(deltaX) < Math.abs(deltaY) * 1.3) return;
      const index = slideOrder.indexOf(activeSlideId);
      const nextIndex = index + (deltaX < 0 ? 1 : -1);
      if (nextIndex >= 0 && nextIndex < slideOrder.length) {
        activateSlide(slideOrder[nextIndex], { updateHash: true, focus: true });
      }
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // 3. PROJECT & EXPERIENCE DETAIL DIALOG
  // --------------------------------------------------------------------------
  const detailDialog = document.getElementById('detailDialog');
  const detailDialogTitle = document.getElementById('detailDialogTitle');
  const detailDialogBody = document.getElementById('detailDialogBody');
  const detailDialogClose = document.getElementById('detailDialogClose');
  let detailDialogOpener = null;

  function openDetailDialog(trigger) {
    if (!detailDialog || !detailDialogTitle || !detailDialogBody) return;
    const type = trigger.dataset.detailTrigger;
    const source = type === 'project'
      ? trigger.closest('.project-card')
      : trigger.closest('.timeline-card');
    if (!source) return;
    const heading = source.querySelector(type === 'project' ? '.project-title' : '.timeline-title');
    const detailClone = source.cloneNode(true);
    detailClone.removeAttribute('id');
    detailClone.classList.remove('reveal-on-scroll');
    detailClone.querySelectorAll('[id]').forEach(function (element) {
      element.removeAttribute('id');
    });
    detailClone.querySelectorAll('[data-detail-trigger]').forEach(function (button) { button.remove(); });
    if (type === 'project') {
      const sourceImage = source.querySelector('.gallery-stage img, .project-visual-inner img');
      const visualWrapper = detailClone.querySelector('.project-visual-wrapper--gallery, .project-visual-wrapper, .project-visual-inner');
      if (sourceImage && visualWrapper) {
        const screenshot = document.createElement('div');
        screenshot.className = 'detail-project-screenshot';
        const image = document.createElement('img');
        image.src = sourceImage.currentSrc || sourceImage.src;
        image.alt = sourceImage.alt;
        screenshot.appendChild(image);
        visualWrapper.replaceWith(screenshot);
      }
    }
    detailDialogTitle.textContent = heading ? heading.textContent : translations[currentLanguage]['details.dialogLabel'];
    detailDialogBody.replaceChildren(detailClone);
    detailDialogOpener = trigger;
    detailDialog.showModal();
    if (detailDialogClose) detailDialogClose.focus();
    applyTranslations(currentLanguage);
  }

  document.querySelectorAll('[data-detail-trigger]').forEach(function (trigger) {
    trigger.addEventListener('click', function () { openDetailDialog(trigger); });
  });
  if (detailDialog && detailDialogClose) {
    detailDialogClose.addEventListener('click', function () { detailDialog.close(); });
    detailDialog.addEventListener('click', function (event) {
      if (event.target === detailDialog) detailDialog.close();
    });
    detailDialog.addEventListener('close', function () {
      if (detailDialogOpener && detailDialogOpener.isConnected) detailDialogOpener.focus();
      detailDialogBody.replaceChildren();
    });
  }

  // --------------------------------------------------------------------------
  // 4. OPTIONAL CUSTOM CURSOR
  // --------------------------------------------------------------------------
  const cursorToggleBtn = document.getElementById('cursorToggleBtn');
  const customCursor = document.getElementById('customCursor');
  const customCursorDot = customCursor && customCursor.querySelector('.custom-cursor-dot');
  const customCursorRing = customCursor && customCursor.querySelector('.custom-cursor-ring');
  const precisePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const cursorMotionAllowed = !prefersReducedMotion;
  let cursorEnabled = precisePointer && cursorMotionAllowed;
  let cursorTargetX = 0;
  let cursorTargetY = 0;
  let cursorRingX = 0;
  let cursorRingY = 0;
  let cursorFrame = 0;
  let cursorVisible = false;

  try {
    if (localStorage.getItem(CURSOR_STORAGE_KEY) === 'disabled') cursorEnabled = false;
  } catch (error) {}

  function updateCursorToggle() {
    if (!cursorToggleBtn) return;
    cursorToggleBtn.setAttribute('aria-pressed', cursorEnabled ? 'true' : 'false');
    const label = translations[currentLanguage][cursorEnabled ? 'cursor.enabled' : 'cursor.disabled'];
    cursorToggleBtn.setAttribute('aria-label', label);
    cursorToggleBtn.setAttribute('title', label);
  }

  function applyCursorPreference() {
    const canUseCursor = Boolean(cursorEnabled && precisePointer && cursorMotionAllowed && customCursorDot && customCursorRing);
    document.documentElement.classList.toggle('custom-cursor-active', canUseCursor);
    if (customCursor) customCursor.classList.toggle('is-visible', canUseCursor && cursorVisible);
    updateCursorToggle();
  }

  function animateCursorRing() {
    cursorRingX += (cursorTargetX - cursorRingX) * 0.22;
    cursorRingY += (cursorTargetY - cursorRingY) * 0.22;
    if (customCursorRing) customCursorRing.style.transform = 'translate3d(' + cursorRingX + 'px, ' + cursorRingY + 'px, 0) translate(-50%, -50%)';
    if (Math.abs(cursorTargetX - cursorRingX) > 0.1 || Math.abs(cursorTargetY - cursorRingY) > 0.1) {
      cursorFrame = window.requestAnimationFrame(animateCursorRing);
    } else {
      cursorFrame = 0;
    }
  }

  if (precisePointer && cursorMotionAllowed && customCursor && customCursorDot && customCursorRing) {
    if (cursorToggleBtn) cursorToggleBtn.hidden = false;
    document.addEventListener('pointermove', function (event) {
      cursorTargetX = event.clientX;
      cursorTargetY = event.clientY;
      customCursorDot.style.transform = 'translate3d(' + cursorTargetX + 'px, ' + cursorTargetY + 'px, 0) translate(-50%, -50%)';
      cursorVisible = true;
      applyCursorPreference();
      if (!cursorFrame) cursorFrame = window.requestAnimationFrame(animateCursorRing);
    }, { passive: true });
    document.addEventListener('pointerover', function (event) {
      if (event.target instanceof Element && event.target.closest('input, textarea, [contenteditable="true"]')) {
        customCursor.classList.add('is-input');
      }
      if (event.target instanceof Element && event.target.closest('a, button, [role="button"]')) {
        customCursor.classList.add('is-hovering');
      }
    });
    document.addEventListener('pointerout', function (event) {
      if (event.target instanceof Element && event.target.closest('input, textarea, [contenteditable="true"]')) {
        customCursor.classList.remove('is-input');
      }
      if (event.target instanceof Element && event.target.closest('a, button, [role="button"]')) {
        customCursor.classList.remove('is-hovering');
      }
    });
    document.addEventListener('click', function () {
      if (cursorEnabled) {
        customCursor.classList.remove('is-clicking');
        void customCursor.offsetWidth;
        customCursor.classList.add('is-clicking');
        window.setTimeout(function () { customCursor.classList.remove('is-clicking'); }, 280);
      }
    });
    document.addEventListener('pointerleave', function () {
      cursorVisible = false;
      applyCursorPreference();
    });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        cursorVisible = false;
        applyCursorPreference();
      }
    });
    applyCursorPreference();
  } else {
    if (cursorToggleBtn) cursorToggleBtn.hidden = true;
  }

  if (cursorToggleBtn && precisePointer && cursorMotionAllowed) {
    cursorToggleBtn.addEventListener('click', function () {
      cursorEnabled = !cursorEnabled;
      try { localStorage.setItem(CURSOR_STORAGE_KEY, cursorEnabled ? 'enabled' : 'disabled'); } catch (error) {}
      applyCursorPreference();
    });
  }

  // --------------------------------------------------------------------------
  // 5. TOAST NOTIFICATION & COPY-TO-CLIPBOARD
  // --------------------------------------------------------------------------
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimeout;

  function showToast(message) {
    if (!toastNotice) return;
    if (toastMessage && message) {
      toastMessage.textContent = message;
    }
    toastNotice.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      toastNotice.classList.remove('show');
    }, 3000);
  }

  const EMAIL_ADDRESS = 'baihaqiachmadi83@gmail.com';

  function copyEmailToClipboard() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL_ADDRESS).then(function () {
        showToast('Alamat email berhasil disalin ke clipboard: ' + EMAIL_ADDRESS);
      }).catch(function () {
        fallbackCopyText(EMAIL_ADDRESS);
      });
    } else {
      fallbackCopyText(EMAIL_ADDRESS);
    }
  }

  function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('Alamat email berhasil disalin ke clipboard!');
    } catch (err) {
      showToast('Silakan salin email secara manual: ' + text);
    }
    document.body.removeChild(textArea);
  }

  const btnCopyEmailMini = document.getElementById('btnCopyEmailMini');
  const btnCopyEmailLarge = document.getElementById('btnCopyEmailLarge');

  if (btnCopyEmailMini) {
    btnCopyEmailMini.addEventListener('click', copyEmailToClipboard);
  }
  if (btnCopyEmailLarge) {
    btnCopyEmailLarge.addEventListener('click', copyEmailToClipboard);
  }

  // --------------------------------------------------------------------------
  // 7. SAMPLE DOCUMENTS MODAL LOGIC
  // --------------------------------------------------------------------------
  const btnOpenDocsModal = document.getElementById('btnOpenDocsModal');
  const docModalOverlay = document.getElementById('docModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function openDocModal() {
    if (!docModalOverlay) return;
    docModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeDocModal() {
    if (!docModalOverlay) return;
    docModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (btnOpenDocsModal) btnOpenDocsModal.focus();
  }

  if (btnOpenDocsModal && docModalOverlay) {
    btnOpenDocsModal.addEventListener('click', openDocModal);
  }

  if (modalCloseBtn && docModalOverlay) {
    modalCloseBtn.addEventListener('click', closeDocModal);
  }

  if (docModalOverlay) {
    docModalOverlay.addEventListener('click', function (e) {
      if (e.target === docModalOverlay) {
        closeDocModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && docModalOverlay.classList.contains('active')) {
        closeDocModal();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. BACK TO TOP BUTTON SMOOTH SCROLL
  // --------------------------------------------------------------------------
  const btnBackToTop = document.getElementById('btnBackToTop');
  if (btnBackToTop) {
    btnBackToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 9. PROJECT 02 MULTI-VIEW GALLERY CONTROLLER (MANTUL APP TOUR)
  // --------------------------------------------------------------------------
  const MANTUL_SLIDES = [
    {
      src: 'project-02-slide-1.png',
      alt: 'Preview MANTUL — Dashboard Utama',
      tabLabel: 'Dashboard',
      caption: 'Dashboard Utama — Ringkasan progres, streak & sapaan personal'
    },
    {
      src: 'project-02-slide-2.png',
      alt: 'Preview MANTUL — Materi Kosakata',
      tabLabel: 'Material',
      caption: 'Materi Kosakata Interaktif — Flashcard visual dengan audio & kartu kata'
    },
    {
      src: 'project-02-slide-3.png',
      alt: 'Preview MANTUL — Learning Path',
      tabLabel: 'Learning Path',
      caption: 'Peta Kurikulum Paket C — 3 Unit terstruktur (Vocabulary, Speaking, Reading)'
    },
    {
      src: 'project-02-slide-exercise.png',
      alt: 'Preview MANTUL — Exercise Interaktif',
      tabLabel: 'Exercise',
      caption: 'Exercise Interaktif — Match & Connect: hubungkan kata bahasa Inggris ke artinya'
    },
    {
      src: 'project-02-slide-4.png',
      alt: 'Preview MANTUL — Game Zone',
      tabLabel: 'Game Zone',
      caption: 'Game Zone & Latihan — Speed Quiz, Sentence Builder & Memory Match'
    }
  ];

  let currentMantulSlide = 0;
  const galleryMainImg = document.getElementById('galleryMainImg');
  const galleryCurrentIdx = document.getElementById('galleryCurrentIdx');
  const galleryCaption = document.getElementById('galleryCaption');
  const galleryTabs = document.querySelectorAll('.gallery-tab-btn');
  const galleryThumbs = document.querySelectorAll('.gallery-thumb-item');
  const galleryPrevBtn = document.getElementById('galleryPrevBtn');
  const galleryNextBtn = document.getElementById('galleryNextBtn');
  let galleryImageTimeout = 0;

  function setMantulSlide(index) {
    if (!galleryMainImg || index < 0 || index >= MANTUL_SLIDES.length) return;
    currentMantulSlide = index;
    const slide = MANTUL_SLIDES[index];

    // Smooth subtle fade transition
    window.clearTimeout(galleryImageTimeout);
    galleryMainImg.classList.add('fade-out');
    galleryImageTimeout = window.setTimeout(function () {
      galleryMainImg.src = slide.src;
      const altKey = 'gallery.alt' + index;
      galleryMainImg.dataset.i18nAlt = altKey;
      galleryMainImg.dataset.idAlt = translations.id[altKey];
      galleryMainImg.dataset.enAlt = translations.en[altKey];
      galleryMainImg.alt = translations[currentLanguage][altKey];
      galleryMainImg.classList.remove('fade-out');
    }, 140);

    if (galleryCurrentIdx) {
      galleryCurrentIdx.textContent = '0' + (index + 1);
    }
    if (galleryCaption) {
      const captionKey = 'gallery.caption' + index;
      galleryCaption.dataset.i18n = captionKey;
      galleryCaption.textContent = translations[currentLanguage][captionKey];
    }

    galleryTabs.forEach(function (tab, i) {
      if (i === index) {
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
      } else {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
      }
    });

    galleryThumbs.forEach(function (thumb, i) {
      const active = i === index;
      thumb.classList.toggle('active', active);
      thumb.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  if (galleryTabs.length > 0) {
    galleryTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        const idx = parseInt(tab.getAttribute('data-slide'), 10);
        if (!isNaN(idx)) setMantulSlide(idx);
      });
    });
  }

  if (galleryThumbs.length > 0) {
    galleryThumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        const idx = parseInt(thumb.getAttribute('data-slide'), 10);
        if (!isNaN(idx)) setMantulSlide(idx);
      });
    });
  }

  if (galleryPrevBtn) {
    galleryPrevBtn.addEventListener('click', function () {
      const prev = (currentMantulSlide - 1 + MANTUL_SLIDES.length) % MANTUL_SLIDES.length;
      setMantulSlide(prev);
    });
  }

  if (galleryNextBtn) {
    galleryNextBtn.addEventListener('click', function () {
      const next = (currentMantulSlide + 1) % MANTUL_SLIDES.length;
      setMantulSlide(next);
    });
  }
  if (galleryMainImg) setMantulSlide(currentMantulSlide);

  console.log('Portfolio Annuril Baihaqi Achmadi loaded successfully.');
})();
