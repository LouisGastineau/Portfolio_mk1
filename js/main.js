// ===========================
// Initialize all functionality when DOM is loaded
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initI18n();
    initThemeToggle();
    initMouseLight();
    initBackgroundStars();
    initMobileMenu();
    initActiveNavLink();
    initContactForm();
    initSmoothScroll();
    initScrollAnimations();
    initDownloadCVButton();
    initUwuMode();
    initScrollToTop();
    initSkillBars();
    initImageModal();
    initParticleVisibilityControl();
});

// ===========================
// Internationalization (i18n)
// ===========================

let currentLanguage = 'fr';

function initI18n() {
    // Get saved language or detect browser language
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language || navigator.userLanguage;
    const detectedLang = browserLang.startsWith('en') ? 'en' : 'fr';
    
    // Use saved language, or browser language, or default to French
    currentLanguage = savedLang || detectedLang || 'fr';
    
    // Apply translations
    applyTranslations(currentLanguage);
    
    // Create language switcher
    createLanguageSwitcher();
}

function createLanguageSwitcher() {
    // Create language switcher container
    const langSwitcher = document.createElement('div');
    langSwitcher.className = 'language-switcher';
    langSwitcher.setAttribute('role', 'group');
    langSwitcher.setAttribute('aria-label', 'Language selection');
    
    // Create FR button
    const frButton = document.createElement('button');
    frButton.textContent = 'FR';
    frButton.className = 'lang-btn';
    frButton.setAttribute('aria-label', 'Français');
    if (currentLanguage === 'fr') {
        frButton.classList.add('active');
    }
    frButton.addEventListener('click', () => switchLanguage('fr'));
    
    // Create separator
    const separator = document.createElement('span');
    separator.textContent = ' / ';
    separator.className = 'lang-separator';
    
    // Create EN button
    const enButton = document.createElement('button');
    enButton.textContent = 'EN';
    enButton.className = 'lang-btn';
    enButton.setAttribute('aria-label', 'English');
    if (currentLanguage === 'en') {
        enButton.classList.add('active');
    }
    enButton.addEventListener('click', () => switchLanguage('en'));
    
    // Append buttons to switcher
    langSwitcher.appendChild(frButton);
    langSwitcher.appendChild(separator);
    langSwitcher.appendChild(enButton);
    
    // Insert switcher into navigation
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        navContainer.appendChild(langSwitcher);
    }
}

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if ((lang === 'fr' && btn.textContent === 'FR') || 
            (lang === 'en' && btn.textContent === 'EN')) {
            btn.classList.add('active');
        }
    });
    
    // Apply translations
    applyTranslations(lang);
}

function applyTranslations(lang) {
    // Get current page
    const currentPage = getCurrentPage();
    
    // Update document attributes
    document.documentElement.setAttribute('lang', lang);
    
    // Get translation object for current page
    const t = translations[lang];
    
    // Apply navigation translations
    applyNavTranslations(t.nav);
    
    // Apply page-specific translations
    switch(currentPage) {
        case 'index':
            applyHomeTranslations(t.home);
            break;
        case 'cv':
            applyCVTranslations(t.cv);
            break;
        case 'projects':
            applyProjectsTranslations(t.projects);
            break;
        case 'contact':
            applyContactTranslations(t.contact);
            break;
        case 'hobbies':
            applyHobbiesTranslations(t.hobbies);
            break;
    }
    
    // Apply footer translations
    applyFooterTranslations(t.footer);
    
    // Apply common translations
    applyCommonTranslations(t.common);
    
    // Re-apply uwu mode if it was active
    if (uwuModeActive) {
        originalTexts.clear();
        activateUwuMode();
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);
    
    if (page === '' || page === 'index.html') return 'index';
    if (page === 'cv.html') return 'cv';
    if (page === 'projects.html') return 'projects';
    if (page === 'contact.html') return 'contact';
    if (page === 'hobbies.html') return 'hobbies';
    
    return 'index';
}

function applyNavTranslations(nav) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html') link.textContent = nav.home;
        else if (href === 'cv.html') link.textContent = nav.cv;
        else if (href === 'projects.html') link.textContent = nav.projects;
        else if (href === 'hobbies.html') link.textContent = nav.hobbies;
        else if (href === 'contact.html') link.textContent = nav.contact;
    });
}

function applyHomeTranslations(home) {
    // Update meta
    document.title = home.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', home.metaDescription);
    
    // Hero section
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) heroTitle.textContent = home.heroTitle;
    
    const heroSubtitle = document.querySelector('.hero-content p');
    if (heroSubtitle) heroSubtitle.textContent = home.heroSubtitle;
    
    const heroCta = document.querySelector('.hero-content .cta-button');
    if (heroCta) heroCta.textContent = home.heroCta;
    
    // VSCode window translations
    const vscodePassion = document.querySelector('[data-i18n="vscodePassion"]');
    if (vscodePassion) vscodePassion.textContent = `'${home.vscodePassion}'`;
    
    const vscodeReturn = document.querySelector('[data-i18n="vscodeReturn"]');
    if (vscodeReturn) vscodeReturn.textContent = `'${home.vscodeReturn}'`;
    
    // About section
    const aboutTitle = document.querySelector('#about h2');
    if (aboutTitle) aboutTitle.textContent = home.aboutTitle;
    
    const aboutPs = document.querySelectorAll('#about .text-description');
    if (aboutPs.length >= 2) {
        aboutPs[0].textContent = home.aboutP1;
        aboutPs[1].textContent = home.aboutP2;
    }
    
    const valuesTitle = document.querySelector('#about h3');
    if (valuesTitle) valuesTitle.textContent = home.valuesTitle;
    
    const valuesList = document.querySelectorAll('#about .feature-list li');
    if (valuesList.length >= 5) {
        valuesList[0].textContent = home.valuesInnovation;
        valuesList[1].textContent = home.valuesExcellence;
        valuesList[2].textContent = home.valuesCollaboration;
        valuesList[3].textContent = home.valuesLearning;
        valuesList[4].textContent = home.valuesPerformance;
    }
    
    // Skills section
    const skillsTitle = document.querySelector('.section-alternate.right h2');
    if (skillsTitle) skillsTitle.textContent = home.skillsTitle;
    
    const skillsSubtitle = document.querySelector('.section-alternate.right .section-subtitle');
    if (skillsSubtitle) skillsSubtitle.textContent = home.skillsSubtitle;
    
    const categoryTitles = document.querySelectorAll('.category-title');
    if (categoryTitles.length >= 3) {
        categoryTitles[0].textContent = home.skillsFrontend;
        categoryTitles[1].textContent = home.skillsBackend;
        categoryTitles[2].textContent = home.skillsTools;
    }
    
    // Target skill section descriptions specifically
    const skillSection = document.querySelector('.section-alternate.right');
    if (skillSection) {
        const skillDescs = skillSection.querySelectorAll('.text-description');
        if (skillDescs.length >= 3) {
            skillDescs[0].textContent = home.skillsFrontendDesc;
            skillDescs[1].textContent = home.skillsBackendDesc;
            skillDescs[2].textContent = home.skillsToolsDesc;
        }
    }
    
    // CTA section
    const ctaTitle = document.querySelector('.card-cta h2');
    if (ctaTitle) ctaTitle.textContent = home.ctaTitle;
    
    const ctaSubtitle = document.querySelector('.card-cta .section-subtitle');
    if (ctaSubtitle) ctaSubtitle.textContent = home.ctaSubtitle;
    
    const ctaButton = document.querySelector('.card-cta .cta-button');
    if (ctaButton) ctaButton.textContent = home.ctaButton;
}

function applyCVTranslations(cv) {
    // Update meta
    document.title = cv.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', cv.metaDescription);
    
    // Header
    const pageTitle = document.querySelector('.section-header h1');
    if (pageTitle) pageTitle.textContent = cv.pageTitle;
    
    const pageSubtitle = document.querySelector('.section-header p');
    if (pageSubtitle) pageSubtitle.textContent = cv.pageSubtitle;
    
    // Profile
    const profileTitle = document.querySelector('.profile-card h2');
    if (profileTitle) profileTitle.textContent = cv.profileTitle;
    
    const profileDesc = document.querySelector('.profile-description');
    if (profileDesc) profileDesc.textContent = cv.profileDesc;
    
    // Experience
    const expTitle = document.querySelectorAll('.cv-section h2')[0];
    if (expTitle) expTitle.textContent = cv.experienceTitle;
    
    const expJob1Title = document.querySelector('.cv-item h3');
    if (expJob1Title) expJob1Title.textContent = cv.experienceJob1Title;
    
    const expJob1Period = document.querySelector('.cv-item .date');
    if (expJob1Period) expJob1Period.textContent = cv.experienceJob1Period;
    
    const expJob1Company = document.querySelector('.cv-item p strong');
    if (expJob1Company) expJob1Company.textContent = cv.experienceJob1Company;
    
    const expJob1Items = document.querySelectorAll('.cv-item ul li');
    if (expJob1Items.length >= 2) {
        expJob1Items[0].textContent = cv.experienceJob1Desc1;
        expJob1Items[1].textContent = cv.experienceJob1Desc2;
    }
    
    // Education
    const eduTitle = document.querySelectorAll('.cv-section h2')[1];
    if (eduTitle) eduTitle.textContent = cv.educationTitle;
    
    const eduItems = document.querySelectorAll('.cv-item');
    if (eduItems.length >= 3) {
        const edu1 = eduItems[1];
        const edu1Title = edu1.querySelector('h3');
        const edu1Period = edu1.querySelector('.date');
        const edu1School = edu1.querySelector('p strong');
        const edu1Desc = edu1.querySelector('.profile-description');
        
        if (edu1Title) edu1Title.textContent = cv.educationDegree1Title;
        if (edu1Period) edu1Period.textContent = cv.educationDegree1Period;
        if (edu1School) edu1School.textContent = cv.educationDegree1School;
        if (edu1Desc) edu1Desc.textContent = cv.educationDegree1Desc;
        
        const edu2 = eduItems[2];
        const edu2Title = edu2.querySelector('h3');
        const edu2Period = edu2.querySelector('.date');
        const edu2School = edu2.querySelector('p strong');
        const edu2Desc = edu2.querySelector('.profile-description');
        
        if (edu2Title) edu2Title.textContent = cv.educationDegree2Title;
        if (edu2Period) edu2Period.textContent = cv.educationDegree2Period;
        if (edu2School) edu2School.textContent = cv.educationDegree2School;
        if (edu2Desc) edu2Desc.textContent = cv.educationDegree2Desc;
    }
    
    // Skills
    const skillsTitle = document.querySelectorAll('.cv-section h2')[2];
    if (skillsTitle) skillsTitle.textContent = cv.skillsTitle;
    
    const skillsCategoryTitles = document.querySelectorAll('.skills-category-title');
    if (skillsCategoryTitles.length >= 3) {
        skillsCategoryTitles[0].textContent = cv.skillsCategoryLang;
        skillsCategoryTitles[1].textContent = cv.skillsCategoryFramework;
        skillsCategoryTitles[2].textContent = cv.skillsCategoryTools;
    }
    
    // Languages
    const langTitle = document.querySelectorAll('.cv-section h2')[3];
    if (langTitle) langTitle.textContent = cv.languagesTitle;
    
    const langItems = document.querySelectorAll('.language-item');
    if (langItems.length >= 3) {
        const fr = langItems[0];
        const en = langItems[1];
        const es = langItems[2];
        
        const frName = fr.querySelector('.language-name');
        const frLevel = fr.querySelector('.language-level');
        if (frName) frName.textContent = cv.languageFrench;
        if (frLevel) frLevel.textContent = cv.languageFrenchLevel;
        
        const enName = en.querySelector('.language-name');
        const enLevel = en.querySelector('.language-level');
        if (enName) enName.textContent = cv.languageEnglish;
        if (enLevel) enLevel.textContent = cv.languageEnglishLevel;
        
        const esName = es.querySelector('.language-name');
        const esLevel = es.querySelector('.language-level');
        if (esName) esName.textContent = cv.languageSpanish;
        if (esLevel) esLevel.textContent = cv.languageSpanishLevel;
    }
    
    // Download button
    const downloadBtn = document.querySelector('.download-cv-btn');
    if (downloadBtn) downloadBtn.textContent = cv.downloadCV;
}

function applyProjectsTranslations(projects) {
    // Update meta
    document.title = projects.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', projects.metaDescription);
    
    // Header
    const pageTitle = document.querySelector('.section-header h1');
    if (pageTitle) pageTitle.textContent = projects.pageTitle;
    
    const pageSubtitle = document.querySelector('.section-header p');
    if (pageSubtitle) pageSubtitle.textContent = projects.pageSubtitle;
    
    // Intro
    const introDesc = document.querySelector('.intro-description');
    if (introDesc) introDesc.textContent = projects.introDesc;
    
    // Projects
    const projectTitles = document.querySelectorAll('.section-alternate h2');
    if (projectTitles.length >= 2) {
        projectTitles[0].textContent = projects.project1Title;
        projectTitles[1].textContent = projects.project2Title;
    }
    
    const projectDescs = document.querySelectorAll('.project-description');
    if (projectDescs.length >= 2) {
        projectDescs[0].textContent = projects.project1Desc;
        projectDescs[1].textContent = projects.project2Desc;
    }
    
    const viewProjectButtons = document.querySelectorAll('.section-alternate .cta-button');
    viewProjectButtons.forEach(btn => {
        btn.textContent = projects.viewProject;
    });
    
    // CTA
    const ctaTitle = document.querySelector('.card-cta h2');
    if (ctaTitle) ctaTitle.textContent = projects.ctaTitle;
    
    const ctaSubtitle = document.querySelector('.card-cta .section-subtitle');
    if (ctaSubtitle) ctaSubtitle.textContent = projects.ctaSubtitle;
    
    const ctaButton = document.querySelector('.card-cta .cta-button');
    if (ctaButton) ctaButton.textContent = projects.ctaButton;
}

function applyContactTranslations(contact) {
    // Update meta
    document.title = contact.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', contact.metaDescription);
    
    // Header
    const pageTitle = document.querySelector('.section-header h1');
    if (pageTitle) pageTitle.textContent = contact.pageTitle;
    
    const pageSubtitle = document.querySelector('.section-header p');
    if (pageSubtitle) pageSubtitle.textContent = contact.pageSubtitle;
    
    // Form
    const formTitle = document.querySelector('.contact-form h2');
    if (formTitle) formTitle.textContent = contact.formTitle;
    
    const labels = document.querySelectorAll('.form-group label');
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    if (labels.length >= 4) {
        labels[0].textContent = contact.formNameLabel;
        labels[1].textContent = contact.formEmailLabel;
        labels[2].textContent = contact.formSubjectLabel;
        labels[3].textContent = contact.formMessageLabel;
    }
    
    if (inputs.length >= 4) {
        inputs[0].setAttribute('placeholder', contact.formNamePlaceholder);
        inputs[1].setAttribute('placeholder', contact.formEmailPlaceholder);
        inputs[2].setAttribute('placeholder', contact.formSubjectPlaceholder);
        inputs[3].setAttribute('placeholder', contact.formMessagePlaceholder);
    }
    
    const submitBtn = document.querySelector('.contact-form .btn');
    if (submitBtn) submitBtn.textContent = contact.formSubmit;
    
    // Contact info
    const emailTitle = document.querySelector('.contact-info h3');
    if (emailTitle) emailTitle.textContent = contact.emailTitle;
    
    // Social
    const socialTitle = document.querySelector('.social-section h2');
    if (socialTitle) socialTitle.textContent = contact.socialTitle;
    
    // FAQ
    const faqTitle = document.querySelector('.faq-section h2');
    if (faqTitle) faqTitle.textContent = contact.faqTitle;
    
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length >= 4) {
        const faq1 = faqItems[0];
        const faq1Q = faq1.querySelector('h3');
        const faq1A = faq1.querySelector('p');
        if (faq1Q) faq1Q.textContent = contact.faq1Question;
        if (faq1A) faq1A.textContent = contact.faq1Answer;
        
        const faq2 = faqItems[1];
        const faq2Q = faq2.querySelector('h3');
        const faq2A = faq2.querySelector('p');
        if (faq2Q) faq2Q.textContent = contact.faq2Question;
        if (faq2A) faq2A.textContent = contact.faq2Answer;
        
        const faq3 = faqItems[2];
        const faq3Q = faq3.querySelector('h3');
        const faq3A = faq3.querySelector('p');
        if (faq3Q) faq3Q.textContent = contact.faq3Question;
        if (faq3A) faq3A.textContent = contact.faq3Answer;
        
        const faq4 = faqItems[3];
        const faq4Q = faq4.querySelector('h3');
        const faq4A = faq4.querySelector('p');
        if (faq4Q) faq4Q.textContent = contact.faq4Question;
        if (faq4A) faq4A.textContent = contact.faq4Answer;
    }
}

function applyHobbiesTranslations(hobbies) {
    // Update meta
    document.title = hobbies.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', hobbies.metaDescription);
    
    // Header
    const pageTitle = document.querySelector('.section-header h1');
    if (pageTitle) pageTitle.textContent = hobbies.pageTitle;
    
    const pageSubtitle = document.querySelector('.section-header p');
    if (pageSubtitle) pageSubtitle.textContent = hobbies.pageSubtitle;
    
    // Intro
    const introDesc = document.querySelector('.intro-description');
    if (introDesc) introDesc.textContent = hobbies.introDesc;
    
    // Hobby titles and descriptions
    const hobbyCards = document.querySelectorAll('.hobby-card-link');
    if (hobbyCards.length >= 4) {
        const titles = [hobbies.hobby1Title, hobbies.hobby2Title, hobbies.hobby3Title, hobbies.hobby4Title];
        const descs = [hobbies.hobby1Desc, hobbies.hobby2Desc, hobbies.hobby3Desc, hobbies.hobby4Desc];
        
        hobbyCards.forEach((card, index) => {
            const title = card.querySelector('h2');
            const desc = card.querySelector('.text-description');
            if (title && index < titles.length) title.textContent = titles[index];
            if (desc && index < descs.length) desc.textContent = descs[index];
        });
    }
    
    // "Discover more" links
    const discoverLinks = document.querySelectorAll('.hobby-link-text');
    discoverLinks.forEach(link => {
        link.textContent = hobbies.discoverMore;
    });
}

function applyFooterTranslations(footer) {
    const footerPs = document.querySelectorAll('footer p');
    if (footerPs.length >= 1) {
        footerPs[0].innerHTML = footer.copyright;
    }
    
    const footerLinks = document.querySelectorAll('footer a');
    if (footerLinks.length >= 2) {
        footerLinks[0].textContent = footer.github;
        footerLinks[1].textContent = footer.linkedin;
    }
}

function applyCommonTranslations(common) {
    const scrollToTop = document.getElementById('scroll-to-top');
    if (scrollToTop) {
        scrollToTop.setAttribute('aria-label', common.scrollToTop);
    }
    
    // Translate back buttons on hobby pages
    const t = translations[currentLanguage];
    if (t.hobbies && t.hobbies.backButton) {
        const backButtons = document.querySelectorAll('[data-i18n="backButton"]');
        backButtons.forEach(btn => {
            btn.textContent = t.hobbies.backButton;
        });
    }
}

// ===========================
// Theme Toggle (Dark/Light Mode)
// ===========================

function initThemeToggle() {
    // Get saved theme from localStorage or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Set season attribute if in light mode
    if (savedTheme === 'light') {
        const season = getCurrentSeason();
        document.documentElement.setAttribute('data-season', season);
    }
    
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    
    const themeIcon = document.createElement('span');
    themeIcon.className = 'theme-icon';
    themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    
    themeToggle.appendChild(themeIcon);
    
    // Append theme toggle to body (will be positioned fixed at bottom left via CSS)
    document.body.appendChild(themeToggle);
    
    // Initialize seasonal particles if light theme
    if (savedTheme === 'light') {
        initSeasonalParticles();
    }
    
    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
        
        // Toggle particles and stars
        if (newTheme === 'light') {
            const season = getCurrentSeason();
            document.documentElement.setAttribute('data-season', season);
            initSeasonalParticles();
            hideStars();
        } else {
            document.documentElement.removeAttribute('data-season');
            removeParticles();
            showStars();
        }
    });
    
    // Hide or show stars based on initial theme
    if (savedTheme === 'light') {
        hideStars();
    }
}

// ===========================
// Seasonal Particle Effects
// ===========================

let particleInterval = null;
const particles = [];
const particleTimeouts = [];
// Controls both particle creation and animation state when tab is hidden
let isTabHidden = false;

// Detect current season based on month (Northern Hemisphere)
// Cache the season to avoid creating new Date objects repeatedly
let cachedSeason = null;
let cachedSeasonDate = null;

function getCurrentSeason() {
    const now = new Date();
    const today = now.toDateString();
    
    // Return cached season if we're still on the same day
    if (cachedSeasonDate === today && cachedSeason) {
        return cachedSeason;
    }
    
    const month = now.getMonth(); // 0-11
    let season;
    if (month >= 2 && month <= 4) season = 'spring'; // March, April, May
    else if (month >= 5 && month <= 7) season = 'summer'; // June, July, August
    else if (month >= 8 && month <= 10) season = 'fall';   // September, October, November
    else season = 'winter'; // December, January, February
    
    // Cache the result
    cachedSeason = season;
    cachedSeasonDate = today;
    
    return season;
}

// Check if device is mobile using feature detection
function isMobileDevice() {
    // Use feature detection instead of user agent sniffing
    // Check for touch capability and screen size
    return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0)) 
        && window.innerWidth < 768;
}

// Get particle configuration based on season
function getParticleConfig(season) {
    const isMobile = isMobileDevice();
    const baseInterval = isMobile ? 800 : 300; // Reduce frequency on mobile
    
    const configs = {
        winter: {
            emoji: '❄',
            className: 'particle-winter',
            color: '#38bdf8',
            interval: baseInterval,
            drift: [-50, 100]
        },
        spring: {
            emoji: '🌸',
            className: 'particle-spring',
            color: '#ec4899',
            interval: baseInterval,
            drift: [-30, 60]
        },
        summer: {
            emoji: '🍃',
            className: 'particle-summer',
            color: '#22c55e',
            interval: baseInterval,
            drift: [-40, 80]
        },
        fall: {
            emoji: '🍂',
            className: 'particle-fall',
            color: '#f97316',
            interval: baseInterval,
            drift: [-60, 120]
        }
    };
    
    return configs[season];
}

function initSeasonalParticles() {
    // Don't create particles if reduced motion is preferred
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    // Clear existing particles first
    removeParticles();
    
    const season = getCurrentSeason();
    const config = getParticleConfig(season);
    
    // Create particles periodically
    particleInterval = setInterval(() => {
        if (!isTabHidden) {
            createParticle(config);
        }
    }, config.interval);
}

function createParticle(config) {
    const particle = document.createElement('div');
    particle.className = `seasonal-particle ${config.className}`;
    particle.textContent = config.emoji;
    
    // Random horizontal position
    const startPosition = Math.random() * window.innerWidth;
    particle.style.left = startPosition + 'px';
    
    // Random size
    const size = 0.5 + Math.random() * 1;
    particle.style.fontSize = size + 'em';
    
    // Random horizontal drift
    const [minDrift, maxDrift] = config.drift;
    const drift = minDrift + Math.random() * (maxDrift - minDrift);
    particle.style.setProperty('--drift', drift + 'px');
    
    // Random duration (5-10 seconds)
    const duration = 5 + Math.random() * 5;
    particle.style.animationDuration = duration + 's';
    
    // Random delay for staggered effect
    const delay = Math.random() * 2;
    particle.style.animationDelay = delay + 's';
    
    // Set particle color
    particle.style.color = config.color;
    
    document.body.appendChild(particle);
    particles.push(particle);
    
    // Remove particle after animation completes
    const timeoutId = setTimeout(() => {
        if (particle.parentElement) {
            particle.remove();
            const index = particles.indexOf(particle);
            if (index > -1) {
                particles.splice(index, 1);
            }
        }
    }, (duration + delay) * 1000);
    
    particleTimeouts.push(timeoutId);
}

function removeParticles() {
    // Clear the interval
    if (particleInterval) {
        clearInterval(particleInterval);
        particleInterval = null;
    }
    
    // Clear all pending timeouts
    particleTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
    particleTimeouts.length = 0;
    
    // Remove all existing particles
    particles.forEach(particle => {
        if (particle.parentElement) {
            particle.remove();
        }
    });
    particles.length = 0;
    
    // Also remove any orphaned particles
    document.querySelectorAll('.seasonal-particle').forEach(el => el.remove());
}

// Pause/resume particles when tab visibility changes
function initParticleVisibilityControl() {
    document.addEventListener('visibilitychange', () => {
        isTabHidden = document.hidden;
        
        if (document.hidden) {
            // Pause animations by adding a class
            particles.forEach(particle => {
                particle.style.animationPlayState = 'paused';
            });
        } else {
            // Resume animations
            particles.forEach(particle => {
                particle.style.animationPlayState = 'running';
            });
        }
    });
}

// Legacy function names for backwards compatibility
function initSnowflakes() {
    initSeasonalParticles();
}

function removeSnowflakes() {
    removeParticles();
}

// ===========================
// Mouse-follow light effect
// ===========================

function initMouseLight() {
    // Create mouse light element
    const mouseLight = document.createElement('div');
    mouseLight.id = 'mouse-light';
    document.body.appendChild(mouseLight);

    let mouseX = 0;
    let mouseY = 0;
    let lightX = 0;
    let lightY = 0;
    const speed = 0.15; // Smooth following speed

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        mouseLight.style.opacity = '1';
    });

    // Hide light when mouse leaves window
    document.addEventListener('mouseleave', () => {
        mouseLight.style.opacity = '0';
    });

    // Smooth animation loop
    function animate() {
        // Calculate distance and interpolate
        const distX = mouseX - lightX;
        const distY = mouseY - lightY;
        
        lightX += distX * speed;
        lightY += distY * speed;
        
        // Update light position
        mouseLight.style.left = `${lightX}px`;
        mouseLight.style.top = `${lightY}px`;
        
        requestAnimationFrame(animate);
    }

    animate();
}

// ===========================
// Background flying stars effect
// ===========================

function initBackgroundStars() {
    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return; // Don't create stars if reduced motion is preferred
    }

    const numStars = 20; // Number of stars
    const STAR_SPEED = 0.5; // Speed multiplier for star movement
    const STAR_SIZE = 5; // Size of stars in pixels
    const stars = [];
    let animationFrameId = null;

    // Create stars
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'background-star';
        document.body.appendChild(star);

        // Random initial position (accounting for star size to prevent edge cutoff)
        const starData = {
            element: star,
            x: Math.random() * (window.innerWidth - STAR_SIZE),
            y: Math.random() * (window.innerHeight - STAR_SIZE),
            // Random velocity for smooth movement
            vx: (Math.random() - 0.5) * STAR_SPEED,
            vy: (Math.random() - 0.5) * STAR_SPEED,
            // Random animation delay for twinkling
            delay: Math.random() * 3
        };

        star.style.left = `${starData.x}px`;
        star.style.top = `${starData.y}px`;
        star.style.animationDelay = `${starData.delay}s`;

        stars.push(starData);
    }

    // Animate stars
    function animateStars() {
        stars.forEach(star => {
            // Update position
            star.x += star.vx;
            star.y += star.vy;

            // Bounce off edges, accounting for star size to prevent visual artifacts
            if (star.x <= 0 || star.x >= window.innerWidth - STAR_SIZE) {
                star.vx *= -1;
                star.x = Math.max(0, Math.min(window.innerWidth - STAR_SIZE, star.x));
            }
            if (star.y <= 0 || star.y >= window.innerHeight - STAR_SIZE) {
                star.vy *= -1;
                star.y = Math.max(0, Math.min(window.innerHeight - STAR_SIZE, star.y));
            }

            // Apply new position
            star.element.style.left = `${star.x}px`;
            star.element.style.top = `${star.y}px`;
        });

        animationFrameId = requestAnimationFrame(animateStars);
    }

    animateStars();

    // Pause animation when page is hidden to save resources
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        } else {
            if (animationFrameId === null) {
                animateStars();
            }
        }
    });

    // Handle window resize (debounced for performance)
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            stars.forEach(star => {
                // Keep stars within new bounds, accounting for star size
                star.x = Math.min(star.x, window.innerWidth - STAR_SIZE);
                star.y = Math.min(star.y, window.innerHeight - STAR_SIZE);
                // Update DOM positions immediately
                star.element.style.left = `${star.x}px`;
                star.element.style.top = `${star.y}px`;
            });
        }, 150); // Debounce resize events
    });
}

// Helper function to hide stars
function hideStars() {
    const stars = document.querySelectorAll('.background-star');
    stars.forEach(star => {
        star.style.display = 'none';
    });
}

// Helper function to show stars
function showStars() {
    const stars = document.querySelectorAll('.background-star');
    stars.forEach(star => {
        star.style.display = '';
    });
}

// ===========================
// Mobile Navigation Toggle
// ===========================

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle) return;

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate menu icon
        const spans = menuToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const navActions = document.querySelector('.nav-actions');
        if (!navActions?.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ===========================
// Active Navigation Link
// ===========================

function initActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (href === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        }
    });
}

// ===========================
// Contact Form Handler
// ===========================

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link with form data
        const mailtoLink = `mailto:louisgastineau@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        const t = translations[currentLanguage];
        showNotification(t.notifications.emailOpening, 'success');
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
        }, 1000);
    });
}

// ===========================
// Notification System
// ===========================

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    
    // Set background color based on type
    let backgroundColor;
    switch(type) {
        case 'success':
            backgroundColor = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
            break;
        case 'error':
            backgroundColor = 'linear-gradient(135deg, #ef4444, #dc2626)';
            break;
        case 'info':
            backgroundColor = 'linear-gradient(135deg, #3b82f6, #2563eb)';
            break;
        default:
            backgroundColor = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
    }
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${backgroundColor};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===========================
// Smooth Scroll for Anchor Links
// ===========================

function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Don't prevent default for empty anchors
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===========================
// Scroll Animation Observer
// ===========================

function initScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and grid items
    const animatedElements = document.querySelectorAll('.card, .gallery-item, .cv-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===========================
// Download CV Button Handler
// ===========================

function initDownloadCVButton() {
    const downloadBtn = document.getElementById('download-cv-btn');
    
    if (!downloadBtn) return;

    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Download the PDF file from the public folder
        const pdfPath = 'public/CV%20Louis%20Gastineau%202025%20EKOD-1.pdf';
        
        // Create download link
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'CV_Louis_Gastineau.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        const t = translations[currentLanguage];
        showNotification(t.notifications.cvDownloading, 'success');
    });
}

// ===========================
// UwU Mode Easter Egg
// ===========================

let uwuModeActive = false;
const originalTexts = new Map();

function initUwuMode() {
    const uwuTrigger = document.getElementById('uwu-trigger');
    
    if (!uwuTrigger) return;

    // Load saved uwu mode state from localStorage
    const savedUwuMode = localStorage.getItem('uwuMode');
    if (savedUwuMode === 'true') {
        uwuModeActive = true;
        activateUwuMode();
    }

    uwuTrigger.addEventListener('click', () => {
        uwuModeActive = !uwuModeActive;
        
        // Save uwu mode state to localStorage
        localStorage.setItem('uwuMode', uwuModeActive.toString());
        
        const t = translations[currentLanguage];
        if (uwuModeActive) {
            activateUwuMode();
            showNotification(t.notifications.uwuActivated, 'info');
        } else {
            deactivateUwuMode();
            showNotification(t.notifications.uwuDeactivated, 'info');
        }
    });
}

function activateUwuMode() {
    // Get all text nodes in the document
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                // Skip script and style tags
                if (node.parentElement.tagName === 'SCRIPT' || 
                    node.parentElement.tagName === 'STYLE') {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        }
    );

    const textNodes = [];
    let currentNode;
    
    while ((currentNode = walker.nextNode()) !== null) {
        if (currentNode.nodeValue.trim().length > 0) {
            textNodes.push(currentNode);
        }
    }

    // Replace 'r' and 'R' with 'w' and 'W'
    textNodes.forEach(node => {
        const originalText = node.nodeValue;
        originalTexts.set(node, originalText);
        
        const uwuText = originalText
            .replace(/r/g, 'w')
            .replace(/R/g, 'W')
            .replace(/l/g, 'w')
            .replace(/L/g, 'W');
        
        node.nodeValue = uwuText;
    });
}

function deactivateUwuMode() {
    // Restore original texts
    originalTexts.forEach((originalText, node) => {
        if (node.parentElement) {
            node.nodeValue = originalText;
        }
    });
    
    originalTexts.clear();
}

// ===========================
// Scroll to Top Button
// ===========================

function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    if (!scrollToTopBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// Skill Bars Animation
// ===========================

function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    
    if (skillBars.length === 0) return;

    // Intersection Observer for animating skill bars when they come into view
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const level = entry.target.getAttribute('data-level');
                // Delay animation slightly for visual effect
                setTimeout(() => {
                    entry.target.style.width = level + '%';
                    entry.target.classList.add('animated');
                }, 100);
            }
        });
    }, observerOptions);
    
    // Observe all skill bars
    skillBars.forEach(bar => observer.observe(bar));
}

// ===========================
// Image Modal / Lightbox
// ===========================

function initImageModal() {
    // Get all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length === 0) return;

    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-label', 'Image viewer');
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'image-modal-content';
    
    const modalImage = document.createElement('img');
    modalImage.alt = '';
    
    const modalCaption = document.createElement('div');
    modalCaption.className = 'image-modal-caption';
    
    modalContent.appendChild(modalImage);
    modalContent.appendChild(modalCaption);
    
    // Create close button
    const closeButton = document.createElement('button');
    closeButton.className = 'image-modal-close';
    closeButton.innerHTML = '×';
    closeButton.setAttribute('aria-label', 'Close');
    
    // Create navigation buttons
    const prevButton = document.createElement('button');
    prevButton.className = 'image-modal-nav image-modal-prev';
    prevButton.innerHTML = '‹';
    prevButton.setAttribute('aria-label', 'Previous image');
    
    const nextButton = document.createElement('button');
    nextButton.className = 'image-modal-nav image-modal-next';
    nextButton.innerHTML = '›';
    nextButton.setAttribute('aria-label', 'Next image');
    
    // Append to modal
    modal.appendChild(closeButton);
    modal.appendChild(prevButton);
    modal.appendChild(nextButton);
    modal.appendChild(modalContent);
    
    // Append to body
    document.body.appendChild(modal);
    
    // Store current image index
    let currentIndex = 0;
    const images = [];
    
    // Collect all images from gallery items
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption p');
        
        if (img) {
            images.push({
                src: img.src,
                alt: img.alt,
                caption: caption ? caption.textContent : ''
            });
            
            // Add click event to open modal
            item.addEventListener('click', () => {
                currentIndex = index;
                openModal();
            });
        }
    });
    
    // Function to update modal image display
    function updateModalImage(index) {
        const image = images[index];
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalCaption.textContent = image.caption;
    }
    
    // Function to open modal
    function openModal() {
        if (images.length === 0) return;
        
        updateModalImage(currentIndex);
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Show/hide navigation buttons based on image count
        if (images.length <= 1) {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        } else {
            prevButton.style.display = 'flex';
            nextButton.style.display = 'flex';
        }
    }
    
    // Function to close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Function to show previous image
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateModalImage(currentIndex);
    }
    
    // Function to show next image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateModalImage(currentIndex);
    }
    
    // Event listeners
    closeButton.addEventListener('click', closeModal);
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            e.preventDefault();
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            showNextImage();
        }
    });
}
