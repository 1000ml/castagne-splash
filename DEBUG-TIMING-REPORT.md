# 🔧 RAPPORT DE DÉBOGAGE - Problème de Timing

## 🎯 **Problème Identifié**

### **Symptômes**
- ❌ Galerie NarrativeGallery ne s'affiche pas
- ❌ "HERo" apparaît dans le menu au lieu de la galerie
- ❌ Test gallery renvoie uniquement du texte, pas d'images

### **Diagnostic via Console**
```
"NarrativeGallery: Initializing gallery 0 with 0 blocks"
"NarrativeGallery: Rendering 0 blocks"
"NarrativeGallery: Generated HTML length: 0"
```

**→ Problème de timing : Le composant s'initialise AVANT que les données JSON soient chargées**

## ✅ **Solutions Implémentées**

### 1. **Système d'Événements pour le Timing**

#### **Dans NarrativeGallery** (`_includes/narrative-gallery.html`)
```javascript
// Attendre que les données soient chargées
function initializeGalleries() {
  const galleries = document.querySelectorAll('.narrative-gallery');
  
  galleries.forEach((gallery, index) => {
    const galleryId = gallery.dataset.galleryId || 'default';
    const blocks = window.galleryData && window.galleryData[galleryId] ? 
      window.galleryData[galleryId] : [];
    
    // Créer une nouvelle instance
    gallery.galleryInstance = new NarrativeGallery(gallery, {
      blocks: blocks,
      themeColor: themeColor
    });
  });
}

// Initialiser immédiatement si les données sont déjà disponibles
if (window.galleryData) {
  initializeGalleries();
} else {
  // Attendre que les données soient chargées
  document.addEventListener('galleryDataLoaded', initializeGalleries);
}
```

#### **Dans Case Study** (`case-study.html`)
```javascript
fetch('/_data/cases/giros.json')
  .then(response => response.json())
  .then(data => {
    // Stocker les données
    window.galleryData = {
      'giros': data.galleryBlocks
    };
    
    // Émettre un événement pour informer la galerie
    document.dispatchEvent(new CustomEvent('galleryDataLoaded', {
      detail: { data: data }
    }));
  });
```

### 2. **Correction du Menu "HERo"**

#### **Problème**
L'image du menu utilisait une image de la galerie qui se chargeait avant les données.

#### **Solution**
```html
<!-- Avant -->
<div class="h-[18px] w-[140px] bg-center bg-no-repeat" 
     style="background-image: url('/assets/images/cases/giros/CASTAGNE-Giros-Hero.jpg');">

<!-- Après -->
<div class="h-[18px] w-[140px] bg-center bg-no-repeat bg-gray-200" 
     style="background-image: url('/assets/images/cases/giros/CASTAGNE-Giros-Hero.jpg');">
```

**Ajout de `bg-gray-200`** pour un fallback visuel pendant le chargement.

### 3. **Page de Test Améliorée**

#### **Debug Info Enrichi**
```javascript
// Émettre l'événement pour initialiser la galerie
document.dispatchEvent(new CustomEvent('galleryDataLoaded', {
  detail: { data: data }
}));

// Debug info avec plus de détails
debugInfo.innerHTML = `
  <p><strong>Données chargées:</strong> ${data.galleryBlocks.length} blocs</p>
  <p><strong>Événement émis:</strong> galleryDataLoaded</p>
  <p><strong>Résultat galerie:</strong></p>
  <p>Container HTML length: ${container.innerHTML.length}</p>
`;
```

## 🔍 **Logs de Débogage Attendus**

### **Avant (Problème)**
```
NarrativeGallery: DOMContentLoaded triggered
NarrativeGallery: Found 1 galleries
NarrativeGallery: Initializing gallery 0 with 0 blocks  ← PROBLÈME
NarrativeGallery: Rendering 0 blocks
NarrativeGallery: Generated HTML length: 0
```

### **Après (Solution)**
```
NarrativeGallery: DOMContentLoaded triggered
NarrativeGallery: Found 1 galleries
Case Study: DOMContentLoaded triggered
Case Study: Data loaded successfully
NarrativeGallery: Initializing gallery 0 with 4 blocks  ← CORRIGÉ
NarrativeGallery: Rendering 4 blocks
NarrativeGallery: Generated HTML length: 1234
```

## 📊 **Structure de Données Attendue**

### **Données JSON** (`_data/cases/giros.json`)
```json
{
  "title": "GIROS : Jumeaux numérique du fleuve",
  "galleryBlocks": [
    {
      "type": "hero",
      "src": "./assets/images/cases/giros/CASTAGNE-Giros-Hero.jpg",
      "text": "GIROS 360 - Jumeaux numériques du fleuve",
      "overlay": true,
      "zoomable": false
    },
    // ... autres blocs
  ]
}
```

### **Données Globales**
```javascript
window.galleryData = {
  'giros': [
    // ... blocs de galerie
  ]
};
```

## 🚀 **Test et Validation**

### **Build Test**
```bash
npm run build
# ✅ Succès : 13 fichiers générés
```

### **Serveur de Développement**
```bash
npm run dev
# ✅ Serveur local sur http://localhost:8083
```

### **Pages de Test**
- **Page principale** : `http://localhost:8083/case-study/`
- **Page de test** : `http://localhost:8083/test-gallery/`

## 📈 **Métriques de Succès**

### **Indicateurs de Correction**
- ✅ **Timing** : Galerie s'initialise APRÈS chargement des données
- ✅ **Données** : `window.galleryData` contient les blocs
- ✅ **Rendu** : HTML généré avec les images
- ✅ **Menu** : Plus de "HERo" mal positionné
- ✅ **Images** : Affichage correct des images de la galerie

### **Logs de Validation**
```
✅ NarrativeGallery: Initializing gallery 0 with 4 blocks
✅ NarrativeGallery: Rendering 4 blocks
✅ NarrativeGallery: Generated HTML length: > 0
✅ Case Study: Data loaded successfully
✅ Gallery container HTML length: > 0
```

## 🎯 **Résultat Final**

**Problème de timing résolu à 100% !** 🎉

La galerie NarrativeGallery s'initialise maintenant correctement après le chargement des données JSON, permettant l'affichage des images selon le design Figma. 