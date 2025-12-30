# Portfolio_mk1

Portfolio personnel / CV statique multi-pages créé avec HTML, CSS et JavaScript vanilla. (Oui, ce README a été généré par une IA.)

## 🎨 Caractéristiques

- **Design moderne** : Thème sombre avec dégradés élégants
- **Glassmorphism** : Cartes avec effet de verre dépoli
- **Animations** : Effets de survol et animations fluides
- **Effet lumineux** : Lumière douce qui suit le curseur de la souris
- **Responsive** : S'adapte à tous les écrans (mobile, tablette, desktop)
- **Multi-pages** : Index, CV, Projets, Hobbies, Contact
- **Système modulaire** : Pages hobbies extensibles avec modules réutilisables

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

- **HTML5** - Structure sémantique
- **CSS3** - Styles avec animations et glassmorphism
  - `style.css` - Styles principaux du portfolio
  - `modules.css` - Styles pour les modules réutilisables des pages hobbies
- **JavaScript Vanilla** - Interactivité sans framework
- **Google Fonts (Inter)** - Typographie moderne

## 📁 Structure du projet

```
Portfolio_mk1/
├── index.html          # Page d'accueil
├── cv.html             # Page CV
├── projects.html       # Page Projets
├── hobbies.html        # Page Hobbies principale
├── contact.html        # Page Contact
├── hobbies/
│   ├── jeux-video.html          # Sous-page gaming
│   ├── peinture-figurines.html  # Sous-page peinture
│   ├── escalade.html            # Sous-page escalade
│   └── jeux-societe.html        # Sous-page jeux de société
├── css/
│   ├── style.css       # Styles principaux
│   └── modules.css     # Styles pour modules hobbies
├── js/
│   └── main.js         # Scripts JavaScript
├── README.md           # Documentation principale
└── MODULES_README.md   # Documentation système modulaire
```

## ✨ Fonctionnalités principales

- Navigation responsive avec menu hamburger
- Effet de lumière qui suit le curseur
- Cartes glassmorphism avec animations
- **Système modulaire pour pages hobbies** (voir MODULES_README.md)
  - Module texte avec effet glow
  - Module galerie d'images responsive
  - Module vidéo YouTube
  - Module citation
  - Module séparateur
- Galerie d'images responsive
- Vidéos YouTube intégrées
- Formulaire de contact interactif
- Scroll animations
- Design dark moderne

## 📝 Personnalisation

Pour personnaliser le portfolio :

1. **Contenu** : Modifiez le texte dans les fichiers HTML
2. **Couleurs** : Ajustez les variables CSS dans `:root` (fichier `css/style.css`)
3. **Images** : Remplacez les URLs dans les pages hobbies
4. **Vidéos** : Modifiez les liens YouTube dans les pages hobbies
5. **Nouveau hobby** : Créez une nouvelle page en suivant le guide dans `MODULES_README.md`

## 🎨 Variables CSS personnalisables

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    --dark-bg: #0f172a;
    --darker-bg: #020617;
}
```

## 📱 Compatible

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📄 Licence

Ce projet est libre de droits pour un usage personnel.

---

Créé avec ❤️ et du code propre
