# Portfolio_mk1

Oui ce Readme a été principalement ecrit par une ia 
Portfolio personnel / CV statique multi-pages créé avec HTML, CSS et JavaScript vanilla.

## Démarrage rapide

Aucune installation requise. Ouvrez simplement `index.html` dans votre navigateur.

```bash
# Cloner le projet
git clone https://github.com/LouisGastineau/Portfolio_mk1.git

# Ouvrir dans le navigateur
open index.html   # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

> **Déploiement GitHub Pages** : Activez GitHub Pages dans les paramètres du dépôt (branche principale) → disponible sur `https://VOTRE_NOM_UTILISATEUR.github.io/Portfolio_mk1/`

## Screenshots

| Page d'accueil | Projets |
|---|---|
| ![Homepage](https://github.com/user-attachments/assets/2d98dc58-545e-4576-b9eb-1e2d063a3bab) | ![Projects Page](https://github.com/user-attachments/assets/9418a332-74a6-4ac0-9b53-573e905bffce) |

| Hobbies | Contact |
|---|---|
| ![Hobbies Page](https://github.com/user-attachments/assets/0781fdb5-1cde-4267-aef0-198872952a55) | ![Contact Page](https://github.com/user-attachments/assets/795f9ca9-2121-4f89-b727-ce080650413d) |

## Structure du projet

```
Portfolio_mk1/
├── index.html          # Page d'accueil – hero, à propos, compétences
├── cv.html             # CV – expériences, compétences, formation
├── projects.html       # Projets réalisés
├── hobbies.html        # Page hobbies principale avec galerie
├── contact.html        # Formulaire de contact et FAQ
├── hobbies/
│   ├── jeux-video.html          # Sous-page gaming
│   ├── peinture-figurines.html  # Sous-page peinture de figurines
│   ├── escalade.html            # Sous-page escalade
│   └── jeux-societe.html        # Sous-page jeux de société
├── css/
│   ├── style.css       # Styles principaux (navigation, cartes, animations, thèmes)
│   └── modules.css     # Styles pour modules hobbies réutilisables
├── js/
│   ├── main.js         # Logique principale (navigation, effets, thèmes, i18n)
│   └── translations.js # Toutes les traductions FR/EN
├── public/
│   ├── imgs/           # Images locales (photos personnelles)
│   └── CV Louis Gastineau 2025 *.pdf  # CV téléchargeable
├── favicon.ico
├── README.md           # Ce fichier
├── MODULES_README.md   # Guide du système modulaire hobbies
└── .github/
    └── copilot-instructions.md  # Instructions pour GitHub Copilot
```

## Caractéristiques

| Fonctionnalité | Détail |
|---|---|
| **Design** | Thème sombre/clair, glassmorphism, dégradés |
| **Responsive** | Mobile, tablette, desktop |
| **Bilingue** | Français / Anglais (auto-détection navigateur) |
| **Animations** | Étoiles (dark), flocons de neige (light), effets hover |
| **Effet curseur** | Lumière douce qui suit la souris |
| **Accessibilité** | ARIA, `prefers-reduced-motion`, contraste WCAG |
| **Performance** | Lazy loading, `requestAnimationFrame`, zéro dépendance |

## Comment faire des modifications courantes

### Modifier le contenu texte
Tout le texte affiché passe par le système i18n. Modifiez **uniquement** `js/translations.js` :

```js
// js/translations.js
const translations = {
    fr: {
        home: {
            heroTitle: "Bienvenue sur mon Portfolio",  // ← modifiez ici
            // ...
        }
    },
    en: {
        home: {
            heroTitle: "Welcome to my Portfolio",     // ← et la version anglaise
        }
    }
}
```

### Modifier les couleurs
Toutes les couleurs sont des variables CSS dans `css/style.css` :

```css
:root {
    --primary-color: #6366f1;    /* Indigo – couleur principale */
    --secondary-color: #8b5cf6;  /* Violet */
    --accent-color: #ec4899;     /* Rose – soft skills, accents */
    --dark-bg: #0f172a;
    --darker-bg: #020617;
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
}
```

### Ajouter une compétence
Dans `index.html`, repérez la section `#skills` et ajoutez une `<span class="tag">` dans la bonne carte. Puis ajoutez la traduction dans `js/translations.js` avec la clé `data-i18n` correspondante.

### Ajouter un projet
Dans `projects.html`, dupliquez une `.card` existante. Mettez à jour le texte directement dans `js/translations.js` sous la clé `projects`.

### Mettre à jour le CV PDF
Remplacez le fichier dans `public/` et mettez à jour le nom du fichier dans `js/translations.js` (clé `cv.downloadCV`) et dans `js/main.js` (`initDownloadCVButton`).

### Ajouter une page hobby
Voir le guide complet dans **[MODULES_README.md](MODULES_README.md)** :
1. Copiez `hobbies/jeux-video.html` → renommez
2. Personnalisez le contenu avec les modules disponibles
3. Ajoutez la carte sur `hobbies.html`

## Technologies

- **HTML5** – Structure sémantique
- **CSS3** – Variables, animations, glassmorphism, `prefers-reduced-motion`
- **JavaScript Vanilla** – Pas de framework, pas de build nécessaire
- **Google Fonts** – Police Inter
- **YouTube embed** – Intégration iframes avec lazy loading

## Internationalisation (i18n)

Le système de traduction est entièrement géré dans `js/translations.js` et appliqué par `js/main.js`.

**Ajouter une nouvelle langue :**
1. Ajoutez un objet `xx: { ... }` dans `translations` (`js/translations.js`)
2. Créez les fonctions `applyXxTranslations()` dans `js/main.js` sur le modèle existant
3. Ajoutez le bouton dans `createLanguageSwitcher()` (`js/main.js`)

**Langues actuelles :** Français (défaut), Anglais

## Compatibilité navigateurs

Chrome · Firefox · Safari · Edge · iOS Safari · Chrome Mobile

## Licence

Ce projet est libre de droits pour un usage personnel.

---

Créé avec passion et du code propre
