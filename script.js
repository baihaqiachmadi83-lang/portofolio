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
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const rootElement = document.documentElement;

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
      themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap');
      themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Ganti ke mode terang' : 'Ganti ke mode gelap');
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
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      try {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (!savedTheme) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      } catch (err) {}
    });
  }

  // --------------------------------------------------------------------------
  // 2. STICKY NAVBAR & SCROLL SHADOW
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // --------------------------------------------------------------------------
  // 3. MOBILE MENU TOGGLE & ACCESSIBILITY
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu(open) {
    const shouldOpen = typeof open === 'boolean' ? open : !mobileNav.classList.contains('open');
    if (shouldOpen) {
      mobileNav.classList.add('open');
      mobileMenuBtn.classList.add('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    } else {
      mobileNav.classList.remove('open');
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  }

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Close when a navigation item is clicked
    mobileNavLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        toggleMobileMenu(false);
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        toggleMobileMenu(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        toggleMobileMenu(false);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. ACTIVE NAVIGATION LINK HIGHLIGHTING VIA INTERSECTION OBSERVER
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          desktopNavLinks.forEach(function (link) {
            const href = link.getAttribute('href');
            if (href === '#' + currentId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  // --------------------------------------------------------------------------
  // 5. SCROLL REVEAL ANIMATIONS (WITH PREFERS-REDUCED-MOTION SUPPORT)
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // If reduced motion is requested by user, display everything immediately
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  } else if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback for very old browsers
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  // --------------------------------------------------------------------------
  // 6. TOAST NOTIFICATION & COPY-TO-CLIPBOARD FOR EMAIL
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
      src: 'assets/images/project-02-slide-1.png',
      alt: 'Preview MANTUL — Dashboard Utama',
      tabLabel: 'Dashboard',
      caption: 'Dashboard Utama — Ringkasan progres, streak & sapaan personal'
    },
    {
      src: 'assets/images/project-02-slide-2.png',
      alt: 'Preview MANTUL — Materi Kosakata',
      tabLabel: 'Material',
      caption: 'Materi Kosakata Interaktif — Flashcard visual dengan audio & kartu kata'
    },
    {
      src: 'assets/images/project-02-slide-3.png',
      alt: 'Preview MANTUL — Learning Path',
      tabLabel: 'Learning Path',
      caption: 'Peta Kurikulum Paket C — 3 Unit terstruktur (Vocabulary, Speaking, Reading)'
    },
    {
      src: 'assets/images/project-02-slide-exercise.png',
      alt: 'Preview MANTUL — Exercise Interaktif',
      tabLabel: 'Exercise',
      caption: 'Exercise Interaktif — Match & Connect: hubungkan kata bahasa Inggris ke artinya'
    },
    {
      src: 'assets/images/project-02-slide-4.png',
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

  function setMantulSlide(index) {
    if (!galleryMainImg || index < 0 || index >= MANTUL_SLIDES.length) return;
    currentMantulSlide = index;
    const slide = MANTUL_SLIDES[index];

    // Smooth subtle fade transition
    galleryMainImg.classList.add('fade-out');
    setTimeout(function () {
      galleryMainImg.src = slide.src;
      galleryMainImg.alt = slide.alt;
      galleryMainImg.classList.remove('fade-out');
    }, 140);

    if (galleryCurrentIdx) {
      galleryCurrentIdx.textContent = '0' + (index + 1);
    }
    if (galleryCaption) {
      galleryCaption.textContent = slide.caption;
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
      if (i === index) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
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

  console.log('Portfolio Annuril Baihaqi Achmadi loaded successfully.');
})();
