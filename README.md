# Portfolio_mk1

Portfolio personnel / CV statique multi-pages créé avec HTML, CSS et JavaScript vanilla. (Oui, ce README a été généré par une IA.)

## 📸 Captures d'écran

### Page d'accueil
![Homepage](https://github.com/user-attachments/assets/2d98dc58-545e-4576-b9eb-1e2d063a3bab)

### Page Projets
![Projects Page](https://github.com/user-attachments/assets/9418a332-74a6-4ac0-9b53-573e905bffce)

### Page Hobbies
![Hobbies Page](https://github.com/user-attachments/assets/0781fdb5-1cde-4267-aef0-198872952a55)

### Page Contact
![Contact Page](https://github.com/user-attachments/assets/795f9ca9-2121-4f89-b727-ce080650413d)

## 🎨 Caractéristiques

- **Design moderne** : Thème sombre avec dégradés élégants
- **Glassmorphism** : Cartes avec effet de verre dépoli
- **Animations** : Effets de survol et animations fluides
- **Effet lumineux** : Lumière douce qui suit le curseur de la souris
- **Responsive** : S'adapte à tous les écrans (mobile, tablette, desktop)
- **Multi-pages** : Index, CV, Projets, Hobbies, Contact
- **Système modulaire** : Pages hobbies extensibles avec modules réutilisables
- **Bilingue** : Support complet français/anglais avec sélecteur de langue
- **Thèmes** : Basculement entre mode sombre et clair
- **Effets saisonniers** : Particules animées qui changent automatiquement selon la saison (hiver ❄️, printemps 🌸, été 🍃, automne 🍂)
- **Étoiles volantes** : Animation d'étoiles en arrière-plan en mode sombre
- **Optimisé** : Réduction automatique des effets sur mobile et respect de prefers-reduced-motion

## 📄 Pages

1. **index.html** - Page d'accueil avec présentation
2. **cv.html** - CV détaillé avec expériences et compétences
3. **projects.html** - Présentation des projets réalisés
4. **hobbies.html** - Page principale des hobbies avec liens vers les sous-pages
5. **contact.html** - Formulaire de contact et informations

### Pages Hobbies (sous-pages modulaires)
- **hobbies/jeux-video.html** - Passion gaming et setups
- **hobbies/peinture-figurines.html** - Créations et peintures
- **hobbies/escalade.html** - Aventures et ascensions
- **hobbies/jeux-societe.html** - Ludothèque et reviews

## 🚀 Utilisation

### Visualisation locale

Ouvrez simplement le fichier `index.html` dans votre navigateur web.

### Déploiement sur GitHub Pages

1. Activez GitHub Pages dans les paramètres du repository
2. Sélectionnez la branche principale comme source
3. Votre site sera disponible à l'adresse : `https://[username].github.io/Portfolio_mk1/`

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique et accessible
- **CSS3** - Styles avancés avec animations et glassmorphism
  - `style.css` - Styles principaux du portfolio avec thème sombre/clair
  - `modules.css` - Styles pour les modules réutilisables des pages hobbies
  - Variables CSS pour personnalisation facile
  - Animations et transitions fluides
  - Support du mode `prefers-reduced-motion`
- **JavaScript Vanilla** - Interactivité sans framework
  - `main.js` - Fonctionnalités principales (navigation, animations, thèmes, i18n)
  - `translations.js` - Système de traduction FR/EN complet
  - Gestion d'état avec localStorage
  - Intersection Observer pour animations au scroll
  - Support PWA-ready
- **Google Fonts (Inter)** - Typographie moderne et lisible
- **YouTube API** - Intégration de vidéos avec lazy loading

## 📁 Structure du projet

```
Portfolio_mk1/
├── index.html          # Page d'accueil avec hero section et présentation
├── cv.html             # CV avec compétences, expériences et formation
├── projects.html       # Projets réalisés avec descriptions
├── hobbies.html        # Page Hobbies principale avec galerie
├── contact.html        # Formulaire de contact et FAQ
├── hobbies/
│   ├── jeux-video.html          # Sous-page gaming avec galerie et vidéos
│   ├── peinture-figurines.html  # Sous-page peinture de figurines
│   ├── escalade.html            # Sous-page escalade
│   └── jeux-societe.html        # Sous-page jeux de société
├── css/
│   ├── style.css       # Styles principaux (navigation, cartes, animations, thèmes)
│   └── modules.css     # Styles pour modules hobbies réutilisables
├── js/
│   ├── main.js         # Logique principale (navigation, effets, thèmes, i18n)
│   └── translations.js # Traductions complètes FR/EN
├── favicon.ico         # Icône du site
├── README.md           # Documentation principale
└── MODULES_README.md   # Documentation du système modulaire hobbies
```

## ✨ Fonctionnalités principales

### Interface utilisateur
- Navigation responsive avec menu hamburger animé
- Effet de lumière douce qui suit le curseur de la souris
- Cartes glassmorphism avec animations et effets hover
- Bouton scroll-to-top avec animation
- Animations de scroll pour révéler le contenu
- Smooth scrolling pour les liens d'ancrage
- Design dark moderne avec support du mode clair

### Internationalisation
- **Support bilingue complet** : Français et Anglais
- Sélecteur de langue dans la navigation (FR / EN)
- Sauvegarde de la préférence de langue dans localStorage
- Traductions pour toutes les pages (accueil, CV, projets, hobbies, contact)
- Détection automatique de la langue du navigateur

### Thèmes et animations
- **Basculement Dark/Light mode** avec bouton dédié
- Sauvegarde du thème dans localStorage
- **Effets saisonniers automatiques** en mode clair avec détection de la saison :
  - ❄️ **Hiver** (Déc-Fév) : Flocons de neige bleus sur fond bleu clair
  - 🌸 **Printemps** (Mars-Mai) : Pétales de fleurs roses sur fond rose
  - 🍃 **Été** (Juin-Août) : Petites feuilles vertes sur fond bleu clair
  - 🍂 **Automne** (Sept-Nov) : Feuilles oranges/marron sur fond orange
- **Étoiles volantes animées** en mode sombre (effet spatial)
- Animations CSS fluides et performantes
- **Optimisations mobiles** : Réduction automatique du nombre de particules sur mobile
- **Pause automatique** : Les animations se mettent en pause quand l'onglet n'est pas actif
- Support de `prefers-reduced-motion` pour l'accessibilité

### Système modulaire pour pages hobbies
- **Modules réutilisables** (voir MODULES_README.md)
  - Module texte avec effet glow sur les titres
  - Module galerie d'images responsive avec lazy loading
  - Module vidéo YouTube avec ratio 16:9
  - Module citation avec style élégant
  - Module séparateur personnalisable
  - Bouton retour vers la page hobbies
- 4 pages hobby complètes : Jeux vidéo, Peinture de figurines, Escalade, Jeux de société
- Galerie photo et vidéo sur la page hobbies principale

### Page CV
- Téléchargement du CV en PDF
- Barres de compétences animées avec niveaux
- Section expérience professionnelle
- Section formation académique
- Section langues parlées
- Profil développeur détaillé

### Page Contact
- Formulaire de contact avec validation
- Intégration mailto pour l'envoi d'emails
- Section FAQ avec 4 questions fréquentes
- Liens vers réseaux sociaux (GitHub, LinkedIn)
- Notifications visuelles pour les actions

### Easter Egg
- **Mode UwU** : Transforme 'r' et 'l' en 'w' sur tout le site
- Activable en cliquant sur le point dans le footer
- Sauvegarde de l'état dans localStorage

## 📝 Personnalisation

Pour personnaliser le portfolio :

1. **Contenu** : Modifiez le texte dans les fichiers HTML
2. **Traductions** : Ajustez les traductions dans `js/translations.js`
3. **Couleurs** : Personnalisez les variables CSS dans `:root` (fichier `css/style.css`)
4. **Images** : Remplacez les URLs d'images dans les pages
5. **Vidéos** : Modifiez les IDs YouTube dans les iframes
6. **Nouveau hobby** : Créez une nouvelle page en suivant le guide dans `MODULES_README.md`
7. **Thème** : Modifiez les couleurs pour les modes dark et light dans `style.css`

## 🎨 Variables CSS personnalisables

```css
:root {
    /* Couleurs principales */
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    
    /* Fond dark mode */
    --dark-bg: #0f172a;
    --darker-bg: #020617;
    
    /* Texte */
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
}
```

## 🌐 Fonctionnalités internationales

Le site supporte actuellement :
- 🇫🇷 Français (par défaut)
- 🇬🇧 Anglais

Pour ajouter une nouvelle langue :
1. Ajoutez les traductions dans `js/translations.js`
2. Créez les fonctions d'application dans `main.js`
3. Ajoutez le bouton de langue dans la navigation

## 📱 Compatible

- ✅ Chrome / Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Tablettes
- ✅ Support des modes sombre et clair
- ✅ Support de `prefers-reduced-motion` pour l'accessibilité

## 🎯 Fonctionnalités accessibles

- Navigation au clavier complète
- Support du lecteur d'écran
- Attributs ARIA appropriés
- Respect des préférences utilisateur (`prefers-reduced-motion`)
- Contraste de couleurs conforme WCAG
- Images avec texte alternatif descriptif
- Formulaires avec labels appropriés

## 🚀 Performance

- Lazy loading des images et vidéos
- Animations optimisées avec `requestAnimationFrame`
- CSS moderne avec variables et optimisations
- Pas de dépendances externes (framework-free)
- Mise en pause des animations quand la page n'est pas visible
- Gestion optimisée de la mémoire pour les effets visuels

## 📄 Licence

Ce projet est libre de droits pour un usage personnel.

---

Créé avec ❤️ et du code propre
