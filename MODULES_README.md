# Modules Réutilisables pour Pages Hobbies

Ce système de modules permet de créer facilement de nouvelles pages de hobbies en copiant et en remplissant des templates prédéfinis.

## Structure

```
hobbies/
├── jeux-video.html (exemple complet)
├── peinture-figurines.html
├── escalade.html
├── jeux-societe.html
└── [nouveau-hobby].html (à créer)

css/
└── modules.css (styles pour tous les modules)
```

## Modules Disponibles

### 1. Module Texte (`.module-text`)
Pour du contenu textuel avec titres, paragraphes et listes.

```html
<div class="module module-text">
    <h2>Titre Principal</h2>
    <p>Votre texte ici...</p>
    
    <h3>Sous-titre</h3>
    <ul>
        <li>Point 1</li>
        <li>Point 2</li>
    </ul>
</div>
```

**Fonctionnalités:**
- Titres avec effet glow automatique
- Support des paragraphes, listes à puces et numérotées
- Fond glassmorphism avec effet hover

### 2. Module Galerie d'Images (`.module-gallery`)
Pour afficher une galerie d'images avec légendes.

```html
<div class="module module-gallery">
    <h2>Titre de la Galerie</h2>
    <div class="gallery-grid">
        <div class="gallery-item">
            <img src="URL_IMAGE" alt="Description" loading="lazy">
            <div class="gallery-caption">
                <p>Légende de l'image</p>
            </div>
        </div>
        <!-- Ajouter plus d'images ici -->
    </div>
</div>
```

**Fonctionnalités:**
- Grid responsive (3 colonnes desktop, 1 mobile)
- Effet hover avec zoom sur l'image
- Légendes qui apparaissent au hover
- Lazy loading automatique

### 3. Module Vidéo YouTube (`.module-video`)
Pour intégrer des vidéos YouTube via iframe.

```html
<div class="module module-video">
    <h2>Titre de la Section Vidéo</h2>
    <div class="video-grid">
        <div class="video-item">
            <div class="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/VIDEO_ID" 
                    title="Titre de la vidéo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    loading="lazy">
                </iframe>
            </div>
            <div class="video-title">
                <h3>Titre affiché</h3>
            </div>
        </div>
        <!-- Ajouter plus de vidéos ici -->
    </div>
</div>
```

**Fonctionnalités:**
- Ratio 16:9 automatique
- Grid responsive (2 colonnes desktop, 1 mobile)
- Lazy loading des iframes
- Effet hover avec élévation

### 4. Module Séparateur (`.module-separator`)
Pour séparer visuellement les sections.

```html
<div class="module module-separator">
    <div class="separator-icon"><i class="fa-solid fa-star"></i></div>
    <div class="separator-line"></div>
</div>
```

**Options d'icônes (FontAwesome) :**
- `<i class="fa-solid fa-star"></i>` (étoile)
- `<i class="fa-solid fa-music"></i>` (note de musique)
- `<i class="fa-solid fa-plane"></i>` (avion)
- `<i class="fa-solid fa-heart"></i>` (coeur)
- `<i class="fa-solid fa-gamepad"></i>` (manette)

### 5. Module Citation (`.module-quote`)
Pour afficher des citations inspirantes.

```html
<div class="module module-quote">
    <p>"Votre citation ici..."</p>
    <cite>— Auteur</cite>
</div>
```

**Fonctionnalités:**
- Bordure colorée à gauche
- Style italique pour le texte
- Auteur en couleur accent

### 6. Bouton Retour (`.back-button`)
Pour revenir à la page hobbies principale.

```html
<a href="../hobbies.html" class="back-button">Retour aux hobbies</a>
```

**Fonctionnalités:**
- Flèche automatique (←)
- Effet hover avec translation
- Style cohérent avec le design

## Comment Créer une Nouvelle Page Hobby

### Étape 1: Copier le Template
Copiez `hobbies/jeux-video.html` et renommez-le (ex: `musique.html`)

### Étape 2: Modifier l'En-tête
```html
<head>
    <title>Portfolio - [Nom du Hobby]</title>
    <!-- Garder le reste identique -->
</head>
```

### Étape 3: Personnaliser le Contenu
1. Changez le titre et l'icône dans `.section-header`
2. Ajoutez vos modules dans l'ordre souhaité
3. Remplissez avec votre contenu

### Étape 4: Ajouter la Carte sur hobbies.html
```html
<a href="hobbies/nom-hobby.html" style="text-decoration: none;">
    <div class="card" style="cursor: pointer;">
        <h2><i class="fa-solid fa-bullseye"></i> Votre Hobby</h2>
        <p style="color: var(--text-secondary); line-height: 1.8; margin-top: 1rem;">
            Description courte...
        </p>
        <p style="color: var(--primary-color); margin-top: 1.5rem; font-weight: 600;">
            En savoir plus →
        </p>
    </div>
</a>
```

## Ordre Recommandé des Modules

1. **Back Button** (en haut)
2. **Section Header** (titre + sous-titre)
3. **Module Texte** (introduction)
4. **Séparateur** (optionnel)
5. **Galerie OU Vidéo** (contenu visuel)
6. **Citation** (optionnel)
7. **Module Texte** (détails supplémentaires)
8. **Vidéo OU Galerie** (deuxième contenu visuel)
9. **Back Button** (en bas)

## Conseils d'Utilisation

### Images
- Utilisez des URLs d'images en haute qualité
- Format recommandé: 800px de large minimum
- Toujours ajouter `loading="lazy"` pour les performances
- Utilisez des alt text descriptifs

### Vidéos YouTube
- Remplacez `VIDEO_ID` par l'ID de la vidéo (après `watch?v=`)
- Gardez l'attribut `loading="lazy"`
- Les vidéos sont automatiquement responsive

### Texte
- Utilisez des paragraphes courts pour la lisibilité
- Les listes à puces sont idéales pour énumérer des points
- Les sous-titres (h3) aident à structurer le contenu

### Responsive
- Tous les modules sont automatiquement responsive
- Testez sur mobile avec les DevTools du navigateur
- Les grilles s'adaptent automatiquement (3→1 colonnes)

## Compatibilité

- HTML5 Vanilla (pas de framework)
- CSS3 avec variables
- JavaScript minimal (navigation, effets)
- GitHub Pages compatible
- Pas de build nécessaire
- Responsive par défaut
- Lazy loading intégré
- Accessibilité (prefers-reduced-motion)

## Exemples Complets

Consultez les pages existantes pour des exemples complets:
- `hobbies/jeux-video.html` - Galerie setup + vidéos gaming
- `hobbies/peinture-figurines.html` - Galerie créations + tutoriels
- `hobbies/escalade.html` - Galerie ascensions + techniques
- `hobbies/jeux-societe.html` - Galerie ludothèque + reviews

## Support

Le design est cohérent avec le reste du portfolio:
- Thème sombre avec dégradés
- Effets glassmorphism
- Animations douces
- Effets hover premium
- Text glow sur les titres
