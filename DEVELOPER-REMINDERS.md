# 🧠 Rappels Développeur - CASTAGNE Website

## 🎨 Système de Thème Footer

### Points clés à retenir
- **2 systèmes** : `footer-theme.js` (homepage) + `case-study.html` (case studies)
- **Ne JAMAIS les activer simultanément** - case-study.html désactive footer-theme.js
- **Bloc mobile** : Toujours inclure `#actions-mobile-block` dans les listes de thématisation
- **Boutons Book Intro** : Ont besoin de classes par défaut `bg-white text-black`

### Configuration rapide
```json
// Homepage theme
"homepage": { "footer": { "backgroundColor": "#E9D8B8", "textColor": "#5B5240" }}

// Case study theme  
"themeColor": "#AEC8D3", 
"acknowledgments": { "details": { "colors": { "text": "#2C5F73" }}}
```

## 🏗️ Architecture Générale

### Structure Jekyll
- **Layouts** : `_includes/` pour les composants réutilisables
- **Données** : `_data/` pour les configurations JSON
- **Assets** : `assets/` pour JS, CSS, images

### Composants Footer
- **Template** : `_includes/footer.html`
- **Thème JS** : `assets/js/footer-theme.js`
- **Config** : `_data/images-config.json`

## 📱 Responsive Design

### Breakpoints Figma
- **Desktop** : 1240px+
- **Tablette** : 768px - 1239px  
- **Mobile** : 767px-

### Éléments dupliqués
- **Actions CTA** : Version desktop (`#actions-block`) + mobile (`#actions-mobile-block`)
- **Book Intro** : `#book-intro-button` + `#mobile-book-intro-button`

## 🔧 Debugging Rapide

### Console logs à vérifier
```javascript
"Applied background to #logo-block: #E9D8B8"
"Applied theme to Book Intro button: #E9D8B8 #5B5240"
"Footer theme manager désactivé pour éviter les conflits"
```

### Erreurs courantes
- ❌ **Thème pas appliqué** → Vérifier IDs dans HTML
- ❌ **Bouton transparent** → Ajouter classes par défaut
- ❌ **Mobile cassé** → Inclure `#actions-mobile-block`
- ❌ **Conflits** → S'assurer qu'un seul système est actif

## 🎯 Case Studies

### Structure données
```json
{
  "id": "giros",
  "themeColor": "#AEC8D3",
  "galleryBlocks": [...],
  "acknowledgments": {
    "details": {
      "colors": { "text": "#2C5F73" },
      "footerImage": "./assets/images/cases/giros/footer.jpg"
    }
  }
}
```

### URL Pattern
- **Homepage** : `/` → Thème homepage
- **Case Study** : `/case-study.html?case=giros` → Thème Giros

## 📝 Bonnes Pratiques

### Ajout nouveau case study
1. Créer `_data/cases/nouveau.json`
2. Définir `themeColor` + `acknowledgments.details.colors.text`
3. Tester sur `/case-study.html?case=nouveau`

### Modification thème
1. **Homepage** : Éditer `_data/images-config.json`
2. **Case study** : Éditer `_data/cases/xxx.json`
3. Vérifier console pour logs d'application

### CSS Cleanup
- Éviter `!important` sauf exceptions
- Préférer les variables CSS pour les thèmes
- Tester responsive sur tous breakpoints

## 🚨 Vigilance

### Avant déploiement
- [ ] Thèmes appliqués sur toutes pages
- [ ] Mobile/desktop fonctionnent
- [ ] Console sans erreurs
- [ ] Transitions fluides
- [ ] Boutons CTA visibles

### Performance
- Images optimisées (WebP recommandé)
- CSS minimifié en production
- Scripts chargés de manière asynchrone quand possible

---

**Usage** : Coller ces rappels dans un nouveau prompt pour reprendre le contexte rapidement  
**Màj** : Décembre 2024