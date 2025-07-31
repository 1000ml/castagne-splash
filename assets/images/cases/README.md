# 📁 Organisation des Images des Cases

## Structure des dossiers

```
assets/images/cases/
├── giros/                    # Case GIROS 360
│   ├── hero-main.png        # Image principale (886x570)
│   ├── mockup-interface.png # Mockup avec fond coloré
│   ├── grid-large.png       # Grande image pour grille asymétrique
│   ├── grid-small-1.png     # Petite image 1
│   ├── grid-small-2.png     # Petite image 2
│   ├── interface-left.png   # Interface principale
│   ├── mockup-right.png     # Mockup mobile
│   ├── full-width-detail.png # Image pleine largeur
│   ├── grid-equal-1.png     # Grille égale - item 1
│   ├── grid-equal-2.png     # Grille égale - item 2
│   └── images-config.json   # Configuration des images
└── README.md                # Ce fichier
```

## 📋 Instructions pour ajouter vos images

### 1. **Placez vos images** dans le dossier correspondant :
- Pour le case GIROS : `assets/images/cases/giros/`
- Pour un nouveau case : `assets/images/cases/[nom-du-case]/`

### 2. **Nommez vos images** selon la convention :
- `hero-main.png` - Image principale du case
- `mockup-interface.png` - Mockup avec fond coloré
- `grid-large.png` - Grande image pour grilles
- `grid-small-1.png`, `grid-small-2.png` - Petites images
- `interface-left.png`, `mockup-right.png` - Images pour grilles mixtes
- `full-width-detail.png` - Image pleine largeur
- `grid-equal-1.png`, `grid-equal-2.png` - Images pour grilles égales

### 3. **Formats recommandés** :
- **PNG** pour les captures d'écran et interfaces
- **SVG** pour les icônes et logos
- **JPG** pour les photos (si nécessaire)

### 4. **Tailles recommandées** :
- **Hero** : 886x570px
- **Grid items** : 441x583px
- **Mockups** : Adaptées au contenu
- **Full-width** : 875px de large (hauteur libre)

## 🎨 Types de blocs disponibles

### 1. **Hero** - Image principale
```json
{
  "type": "hero",
  "src": "./assets/images/cases/giros/hero-main.png",
  "text": "Description de l'image",
  "overlay": true
}
```

### 2. **Mockup Overlay** - Mockup avec fond coloré
```json
{
  "type": "mockup-overlay",
  "src": "./assets/images/cases/giros/mockup-interface.png",
  "text": "Description du mockup",
  "backgroundColor": "#AEC8D3",
  "padding": "89px 132px"
}
```

### 3. **Grid Asymmetric** - Grande + 2 petites
```json
{
  "type": "grid-asymmetric",
  "left": {
    "src": "./assets/images/cases/giros/grid-large.png",
    "text": "Description grande image",
    "overlay": true
  },
  "right": [
    {
      "src": "./assets/images/cases/giros/grid-small-1.png",
      "text": "Description petite image 1",
      "overlay": true
    },
    {
      "src": "./assets/images/cases/giros/grid-small-2.png",
      "text": "Description petite image 2",
      "overlay": true
    }
  ]
}
```

### 4. **Grid Mockup** - Image + Mockup
```json
{
  "type": "grid-mockup",
  "left": {
    "src": "./assets/images/cases/giros/interface-left.png",
    "text": "Description interface",
    "overlay": true
  },
  "right": {
    "src": "./assets/images/cases/giros/mockup-right.png",
    "text": "Description mockup",
    "backgroundColor": "#AEC8D3",
    "padding": "50px"
  }
}
```

### 5. **Full Width** - Image pleine largeur
```json
{
  "type": "full-width",
  "src": "./assets/images/cases/giros/full-width-detail.png",
  "text": "Description détaillée",
  "overlay": true
}
```

### 6. **Grid Equal** - Grille 2 colonnes égales
```json
{
  "type": "grid-equal",
  "items": [
    {
      "src": "./assets/images/cases/giros/grid-equal-1.png",
      "text": "Description item 1",
      "overlay": true
    },
    {
      "src": "./assets/images/cases/giros/grid-equal-2.png",
      "text": "Description item 2",
      "overlay": true
    }
  ]
}
```

## 🚀 Prochaines étapes

1. **Extrayez les images** du Figma
2. **Placez-les** dans le dossier `assets/images/cases/giros/`
3. **Nommez-les** selon la convention ci-dessus
4. **Testez** dans la preview

Les images seront automatiquement intégrées dans le composant `NarrativeGallery` ! 🎉 