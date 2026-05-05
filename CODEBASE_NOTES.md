# Codebase Notes – Portfolio_mk1

> Read this file at the start of every task. Update it at the end of each task with any new knowledge.

---

## Stack & Constraints

- **Pure HTML / CSS / JS vanilla** – no framework, no build tool, no package manager.
- **GitHub Pages** compatible (static files served as-is).
- **FontAwesome 6.5.1** loaded from CDN for icons.
- **Google Fonts – Inter** (400/500/600/700) loaded from CDN.
- No linter, no test suite, no CI beyond GitHub Actions (if any).

---

## File Map

```
/
├── index.html          # Home (hero, about, skills, CTA)
├── cv.html             # Résumé (profile, experience, skills, education, languages)
├── projects.html       # Projects showcase
├── hobbies.html        # Hobbies gallery hub (4 hobby cards)
├── contact.html        # Contact form (mailto) + FAQ
├── favicon.ico
│
├── hobbies/
│   ├── jeux-video.html         # Template to copy for new hobby pages
│   ├── peinture-figurines.html
│   ├── escalade.html
│   └── jeux-societe.html
│
├── css/
│   ├── style.css       # Global styles, CSS variables, dark/light theme, all animations
│   └── modules.css     # Reusable module styles for hobby sub-pages only
│
├── js/
│   ├── main.js         # All JS logic (i18n, theme, effects, form, modal…)
│   └── translations.js # `const translations = { fr: {...}, en: {...} }`
│
├── public/
│   ├── CV Louis Gastineau 2025 EKOD-1.pdf   # Downloaded via encoded URL
│   └── imgs/                                # Local photos (used in hobby pages)
│       ├── IMG20250406170017.jpg
│       ├── IMG20250406170021.jpg
│       ├── IMG20250621231016.jpg
│       ├── IMG20250621231125.jpg
│       ├── IMG_20250531_182415.jpg
│       ├── IMG_20250531_182526.jpg
│       ├── IMG_20250721_201015.jpg
│       ├── IMG_20250721_201139.jpg
│       └── IMG_20250721_201153.jpg
│
├── MODULES_README.md   # Guide: how to create a new hobby page
└── CODEBASE_NOTES.md   # This file
```

---

## CSS Variables (`:root` / `[data-theme="light"]`)

| Variable | Dark (default) | Light |
|---|---|---|
| `--primary-color` | `#6366f1` (indigo) | `#4338ca` |
| `--secondary-color` | `#8b5cf6` (violet) | `#6d28d9` |
| `--accent-color` | `#ec4899` (rose) | `#be185d` |
| `--dark-bg` | `#0f172a` | `#dbeafe` |
| `--darker-bg` | `#020617` | `#eff6ff` |
| `--text-primary` | `#f1f5f9` | `#0c0a09` |
| `--text-secondary` | `#cbd5e1` | `#44403c` |
| `--glass-bg` | `rgba(15,23,42,0.6)` | `rgba(255,255,255,0.8)` |
| `--glass-border` | `rgba(255,255,255,0.1)` | `rgba(100,116,139,0.3)` |

**Theme switching:** `[data-theme]` attribute on `<html>` (not `body.light-mode`).  
Saved in `localStorage` key `theme` (`'dark'` or `'light'`).

---

## i18n System

### How it works
1. All visible text lives in `js/translations.js` inside `const translations = { fr:{…}, en:{…} }`.
2. HTML uses `data-i18n="key"` attributes **but** most translations are applied via explicit DOM queries in `main.js` (not via a generic `data-i18n` loop — the system is **manual per-function**).
3. `applyTranslations(lang)` dispatches to page-specific functions via `getCurrentPage()`.
4. Language saved in `localStorage` key `language`.

### Translation key structure

| Key root | Page |
|---|---|
| `nav` | Navigation links (all pages) |
| `home` | `index.html` |
| `cv` | `cv.html` |
| `projects` | `projects.html` |
| `contact` | `contact.html` |
| `hobbies` | `hobbies.html` + back-button on sub-pages |
| `footer` | Footer (all pages) |
| `common` | Scroll-to-top aria-label |
| `notifications` | Toast messages |

### Adding new text
1. Add the key to **both** `translations.fr` and `translations.en`.
2. Update the relevant `applyXxxTranslations()` function in `main.js` to apply it to the DOM.
3. Note: `getCurrentPage()` only recognises top-level pages (`index`, `cv`, `projects`, `contact`, `hobbies`). Hobby sub-pages all fall through to `'index'` — only the back-button and common/footer translations are applied there.

### Adding a new language
1. Add `xx: {…}` to `translations` copying the `fr` structure.
2. Add a new button in `createLanguageSwitcher()`.

---

## JavaScript – Key Functions (`js/main.js`)

| Function | When called | Notes |
|---|---|---|
| `initI18n()` | DOMContentLoaded | Reads localStorage, calls `applyTranslations` + `createLanguageSwitcher` |
| `createLanguageSwitcher()` | inside initI18n | Injects FR/EN buttons into `.nav-container` |
| `switchLanguage(lang)` | button click | Saves to localStorage, re-applies translations |
| `applyTranslations(lang)` | on language switch | Routes to page-specific functions |
| `getCurrentPage()` | inside applyTranslations | Uses `window.location.pathname` |
| `initThemeToggle()` | DOMContentLoaded | Creates checkbox toggle, reads `localStorage.theme`, switches dark/light |
| `initSnowflakes()` | on light theme | Creates falling snowflake elements; respects `prefers-reduced-motion` |
| `initBackgroundStars()` | DOMContentLoaded | Creates 20 floating `.background-star` divs; pauses when tab hidden |
| `initMouseLight()` | DOMContentLoaded | Creates `#mouse-light` div that follows cursor |
| `initMobileMenu()` | DOMContentLoaded | Hamburger `.menu-toggle` → toggles `.nav-links.active` |
| `initActiveNavLink()` | DOMContentLoaded | Adds `.active` class to current page's nav link |
| `initContactForm()` | DOMContentLoaded | `#contact-form` submit → builds `mailto:` URI |
| `initScrollAnimations()` | DOMContentLoaded | `IntersectionObserver` on `.card`, `.gallery-item`, `.cv-item` |
| `initSkillBars()` | DOMContentLoaded | Animates `.skill-bar-fill[data-level]` width on scroll |
| `initImageModal()` | DOMContentLoaded | Lightbox for `.gallery-item` images |
| `initDownloadCVButton()` | DOMContentLoaded | `#download-cv-btn` → downloads PDF from `public/` |
| `initUwuMode()` | DOMContentLoaded | Easter egg `#uwu-trigger`; state in `localStorage.uwuMode` |
| `initScrollToTop()` | DOMContentLoaded | `#scroll-to-top` button appears after 300px scroll |
| `showNotification(msg, type)` | various | Creates fixed toast (auto-removes after 3s); types: `success`, `error`, `info` |

**Pattern for a new feature:**
```js
function initMyFeature() {
    const el = document.querySelector('.my-class');
    if (!el) return; // guard – function is called on every page
    // …
}
// Register in the DOMContentLoaded block at the top of main.js
```

---

## Hobby Sub-Pages

- Located in `hobbies/` directory.
- Use **both** `css/style.css` AND `css/modules.css` (paths are `../css/…`).
- Nav links point to `../index.html`, `../cv.html`, etc.
- Back-button: `<a href="../hobbies.html" class="back-button" data-i18n="backButton">Retour aux hobbies</a>`
- Available modules: `.module-text`, `.module-gallery` (with `.gallery-grid` > `.gallery-item`), `.module-video` (with `.video-grid` > `.video-item > .video-wrapper > iframe`), `.module-quote`, `.module-separator`.
- Template to copy: `hobbies/jeux-video.html`.
- After creating a sub-page, add a card on `hobbies.html` and translations under the `hobbies` key.

---

## localStorage Keys

| Key | Values | Used by |
|---|---|---|
| `language` | `'fr'` \| `'en'` | i18n system |
| `theme` | `'dark'` \| `'light'` | theme toggle |
| `uwuMode` | `'true'` \| `'false'` | UwU easter egg |

---

## Contact

- Email: `louisgastineau@gmail.com`
- Form uses `mailto:` (no backend).
- CV PDF: `public/CV Louis Gastineau 2025 EKOD-1.pdf` — encoded as `public/CV%20Louis%20Gastineau%202025%20EKOD-1.pdf` in JS.

---

## Common Pitfalls

1. **Text not translated** → Check the key exists in **both** `translations.fr` and `translations.en`, and that the `applyXxxTranslations()` function actually sets it on the DOM.
2. **Hobby sub-page translations not applied** → `getCurrentPage()` returns `'index'` for `hobbies/*.html`; only `common` + `footer` + `backButton` translations are applied automatically.
3. **Style broken on mobile** → Grids switch from 3 → 1 column via media queries in `style.css` / `modules.css`.
4. **Scroll animation not triggering** → `initScrollAnimations()` observes `.card`, `.gallery-item`, `.cv-item`; add the right class or extend the selector.
5. **Theme attribute** → Use `[data-theme="light"]` on `<html>`, not `.light-mode` on `<body>`.
6. **New JS function not running** → Register it in the `DOMContentLoaded` block at the top of `main.js`.
7. **PDF filename has spaces** → URL-encode when referencing in code.

---

## Task Log

| Date | Task Summary |
|---|---|
| 2026-05-05 | Initial creation of this file; full codebase exploration. |
