# GitHub Copilot Instructions – Portfolio_mk1

Portfolio statique multi-pages en HTML/CSS/JS vanilla. Aucun framework, aucun outil de build.

---

## Architecture en un coup d'œil

| Fichier / Dossier | Rôle |
|---|---|
| `index.html` | Page d'accueil (hero, à propos, compétences, CTA) |
| `cv.html` | CV (profil, expériences, compétences, formation, langues) |
| `projects.html` | Projets réalisés |
| `hobbies.html` | Page hobbies principale avec galerie |
| `contact.html` | Formulaire mailto + FAQ |
| `hobbies/*.html` | Sous-pages hobbies (jeux-video, peinture-figurines, escalade, jeux-societe) |
| `css/style.css` | Styles globaux, thème dark/light, variables CSS, animations |
| `css/modules.css` | Styles des modules réutilisables pour les pages hobbies |
| `js/main.js` | Toute la logique JS (i18n, thèmes, animations, formulaires…) |
| `js/translations.js` | Objet `translations` avec toutes les chaînes FR/EN |
| `public/imgs/` | Images locales (photos personnelles) |
| `public/CV *.pdf` | CV téléchargeable |
| `MODULES_README.md` | Guide pour créer une nouvelle page hobby |

---

## Système i18n (internationalisation)

**Règle fondamentale** : tout le texte visible passe par `js/translations.js`. Ne jamais coder du texte en dur dans le HTML (sauf structure/icônes).

### Ajouter ou modifier du texte

1. Modifier `js/translations.js` – objet `translations.fr` ET `translations.en` :
   ```js
   fr: { home: { heroTitle: "Bienvenue sur mon Portfolio" } }
   en: { home: { heroTitle: "Welcome to my Portfolio" } }
   ```
2. Dans le HTML, utiliser l'attribut `data-i18n="<clé>"` :
   ```html
   <h1 data-i18n="home.heroTitle"></h1>
   ```
3. La fonction `applyTranslations(lang)` dans `main.js` applique toutes les traductions automatiquement.

### Clés de traduction par page

| Page | Clé racine |
|---|---|
| index.html | `home` |
| cv.html | `cv` |
| projects.html | `projects` |
| contact.html | `contact` |
| hobbies.html | `hobbies` |
| Navigation | `nav` |

### Ajouter une nouvelle langue

1. Ajouter `xx: { ... }` dans `translations` (`js/translations.js`) en copiant la structure `fr`
2. Ajouter une fonction `applyXxTranslations()` dans `js/main.js`
3. Ajouter le bouton dans `createLanguageSwitcher()` (`js/main.js`)

---

## CSS – Variables et conventions

Toutes les couleurs et tailles sont des variables CSS définies dans `css/style.css` → `:root` :

```css
--primary-color: #6366f1;    /* Indigo */
--secondary-color: #8b5cf6;  /* Violet */
--accent-color: #ec4899;     /* Rose (soft skills, accents) */
--dark-bg: #0f172a;
--darker-bg: #020617;
--text-primary: #f1f5f9;
--text-secondary: #cbd5e1;
```

**Conventions CSS :**
- Thème dark par défaut ; thème clair via classe `.light-mode` sur `<body>`
- Glassmorphism sur les cartes : `background: rgba(...)`, `backdrop-filter: blur(...)`
- Animations au scroll : classe `.animate-on-scroll` → `.animated` ajoutée par `IntersectionObserver`
- Préférence utilisateur : `@media (prefers-reduced-motion: reduce)` désactive les animations
- Ne pas modifier la structure de `modules.css` sans vérifier l'impact sur toutes les pages `hobbies/*.html`

---

## JavaScript – Fonctions clés de `main.js`

| Fonction | Description |
|---|---|
| `initI18n()` | Détecte/charge la langue, applique les traductions, crée le sélecteur |
| `applyTranslations(lang)` | Dispatch vers les fonctions par page |
| `initThemeToggle()` | Gère dark/light mode + localStorage |
| `initSnowflakes()` | Flocons de neige en mode clair |
| `initBackgroundStars()` | Étoiles animées en mode sombre |
| `initMouseLight()` | Effet de lumière qui suit le curseur |
| `initMobileMenu()` | Menu hamburger responsive |
| `initContactForm()` | Validation + ouverture mailto |
| `initScrollAnimations()` | IntersectionObserver pour révéler les éléments |
| `initSkillBars()` | Animation des barres de compétences (cv.html) |
| `initImageModal()` | Modal pour les images (hobbies) |
| `initUwuMode()` | Easter egg – transforme r/l en w |
| `initDownloadCVButton()` | Téléchargement PDF depuis `public/` |

**Pattern standard pour une nouvelle fonctionnalité :**
```js
function initMaFonctionnalite() {
    const element = document.querySelector('.ma-classe');
    if (!element) return; // garde pour pages où l'élément n'existe pas
    // ... logique
}
// Appeler dans le DOMContentLoaded listener en haut du fichier
```

---

## Ajouter une page hobby

Guide complet dans `MODULES_README.md`. Résumé :

1. Copier `hobbies/jeux-video.html` → `hobbies/mon-hobby.html`
2. Modifier `<title>` et `.section-header`
3. Composer avec les modules : `.module-text`, `.module-gallery`, `.module-video`, `.module-quote`, `.module-separator`
4. Ajouter une carte sur `hobbies.html`
5. Ajouter les traductions dans `js/translations.js` sous la clé `hobbies`

---

## Pièges courants

- **Texte non traduit** → vérifier que la clé `data-i18n` existe dans `translations.fr` ET `translations.en`
- **Style cassé sur mobile** → tester avec DevTools (les grilles passent de 3 à 1 colonne)
- **Animation qui ne se déclenche pas** → vérifier que la classe `.animate-on-scroll` est présente sur l'élément
- **CV PDF introuvable** → le fichier est dans `public/`, son nom contient des espaces, penser à encoder l'URL si nécessaire
- **Images locales** → stockées dans `public/imgs/`, chemins relatifs depuis la racine
- **localStorage** : clés utilisées : `language`, `theme`, `uwuMode`
