# 🎨 Système de Thème Footer - Documentation

## Vue d'ensemble

Le système de thème footer de CASTAGNE Website applique dynamiquement des couleurs et images de fond selon le contexte de la page (homepage ou case study). Il y a **deux systèmes complémentaires** qui travaillent ensemble.

## 🏗️ Architecture

### 1. **footer-theme.js** (Page d'accueil)
- **Fichier** : `assets/js/footer-theme.js`
- **Utilisation** : Page d'accueil (`index.html`)
- **Configuration** : `_data/images-config.json` section "homepage"

### 2. **case-study.html** (Case Studies)
- **Fichier** : `case-study.html` (script intégré)
- **Utilisation** : Pages case studies avec paramètre `?case=xxx`
- **Configuration** : Fichiers JSON individuels dans `_data/cases/`

## 📁 Structure des fichiers

```
castagne-website/
├── _data/
│   ├── images-config.json        # Config homepage + case studies
│   └── cases/
│       ├── giros.json            # Données + thème Giros
│       ├── numinaforge.json      # Données + thème Numina
│       └── plaiad.json           # Données + thème Plaiad
├── _includes/
│   └── footer.html               # Template footer avec IDs
├── assets/js/
│   └── footer-theme.js           # Gestionnaire thème homepage
└── case-study.html               # Page + gestionnaire thème case studies
```

## 🎯 Éléments thématisés

### Blocs avec couleur de fond
```javascript
const footerBlocks = [
  '#logo-block',           // Logo CASTAGNE
  '#quicklinks-block',     // Menu Quicklinks  
  '#opensource-block',     // Drive Open Source
  '#legal-block',          // Terms & Conditions
  '#location-block',       // Our FabLab
  '#contact-block',        // "Let's spark something together"
  '#actions-block',        // Boutons CTA desktop
  '#actions-mobile-block'  // Boutons CTA mobile
];
```

### Boutons CTA spéciaux
```javascript
const ctaButtons = [
  '#book-intro-button',        // Bouton "Book Intro" desktop
  '#mobile-book-intro-button'  // Bouton "Book Intro" mobile
];
```

### Autres éléments
- **Textes** : Titres, liens, descriptions
- **Icônes SVG** : LinkedIn, WhatsApp, Signal, etc.
- **Logo CASTAGNE** : Filtres CSS pour adaptation couleur
- **Footer background** : Image ou couleur de fond

## ⚙️ Configuration

### Homepage (`images-config.json`)
```json
{
  "homepage": {
    "themeColor": "#1a1c1b",
    "footer": {
      "backgroundImage": "#1A1C1B",     // Couleur unie ou URL image
      "backgroundColor": "#E9D8B8",     // Couleur des blocs
      "textColor": "#5B5240"            // Couleur du texte
    }
  }
}
```

### Case Studies (`_data/cases/giros.json`)
```json
{
  "themeColor": "#AEC8D3",
  "acknowledgments": {
    "details": {
      "colors": {
        "text": "#2C5F73"              // Couleur du texte
      },
      "footerImage": "./assets/images/cases/giros/footer.jpg"
    }
  }
}
```

## 🔄 Fonctionnement

### Sur index.html
1. **footer-theme.js** se charge automatiquement
2. Détecte qu'on est sur la homepage (pas de paramètre `?case=`)
3. Charge la config "homepage" depuis `images-config.json`
4. Applique le thème beige avec transitions fluides

### Sur case-study.html
1. Récupère le paramètre `?case=xxx` de l'URL
2. Charge le fichier `_data/cases/xxx.json`
3. Extrait `themeColor` et `acknowledgments.details.colors.text`
4. **Désactive footer-theme.js** pour éviter les conflits
5. Applique le thème du case study

## 🎨 Exemples de thèmes

| Case Study | Couleur de fond | Couleur de texte | Usage |
|------------|----------------|------------------|-------|
| **Homepage** | `#E9D8B8` (beige) | `#5B5240` (marron clair) | Page d'accueil |
| **Giros** | `#AEC8D3` (bleu clair) | `#2C5F73` (bleu foncé) | Case study Giros |
| **Numina** | `#F0E6D6` (beige rosé) | `#8B4513` (marron) | Case study Numina |
| **Plaiad** | `#E8D5E8` (violet clair) | `#6C3341` (violet foncé) | Case study Plaiad |

## 🛠️ Maintenance

### Ajouter un nouveau case study
1. Créer `_data/cases/nouveau-case.json`
2. Définir `themeColor` et `acknowledgments.details.colors.text`
3. Optionnel : Ajouter `acknowledgments.details.footerImage`

### Modifier le thème homepage
1. Éditer `_data/images-config.json` section "homepage"
2. Modifier `backgroundColor`, `textColor`, `backgroundImage`

### Débugger les thèmes
1. Ouvrir la console navigateur
2. Vérifier les logs : "Applying footer blocks theme", "Applied theme to...", etc.
3. S'assurer qu'aucun conflit CSS n'override les styles

## ⚠️ Points d'attention

### Conflits entre systèmes
- **case-study.html désactive footer-theme.js** ligne 517-520
- Ne jamais charger les deux systèmes simultanément

### Boutons "Book Intro"
- **Classes par défaut** : `bg-white text-black` (base)
- **Thème appliqué** : Remplace les couleurs par celles du thème
- Traitement différent des autres CTAs (SVG uniquement)

### Responsive
- **Desktop** : `#actions-block` et `#book-intro-button`
- **Mobile** : `#actions-mobile-block` et `#mobile-book-intro-button`
- Les deux sont thématisés par le système

## 📋 Checklist de vérification

- [ ] Thème homepage appliqué sur `/`
- [ ] Thème case study appliqué sur `/case-study.html?case=xxx`
- [ ] Bloc actions mobile thématisé
- [ ] Boutons "Book Intro" avec couleur de fond
- [ ] Transitions fluides entre thèmes
- [ ] Pas de conflits dans la console
- [ ] Responsive fonctionne (desktop + mobile)

---

**Dernière mise à jour** : Décembre 2024  
**Auteur** : Claude (Assistant IA) + Laurent Castagne