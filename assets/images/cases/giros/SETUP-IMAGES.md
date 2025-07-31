# Configuration des Images GIROS

## État actuel

Les images utilisent actuellement des placeholders d'Unsplash pour le développement. Pour utiliser les vraies images du design Figma, suivez ces étapes :

## Option 1 : Serveur local Figma (Recommandé)

1. **Démarrer le serveur Figma** :
   ```bash
   # Le serveur doit être accessible sur http://localhost:3845
   # Les images seront disponibles sur http://localhost:3845/assets/
   ```

2. **Mettre à jour les URLs** dans `_data/giros-case.json` :
   ```json
   {
     "galleryBlocks": [
       {
         "type": "hero",
         "src": "http://localhost:3845/assets/768f0a497e5568dc9177edba7f4c51b0f284993a.png",
         "text": "GIROS 360 - Jumeaux numériques du fleuve",
         "overlay": true
       }
       // ... autres blocs
     ]
   }
   ```

## Option 2 : Téléchargement des images

1. **Exécuter le script de téléchargement** :
   ```bash
   node download-giros-images.js
   ```

2. **Mettre à jour les chemins** pour utiliser les images locales :
   ```json
   {
     "galleryBlocks": [
       {
         "type": "hero",
         "src": "./assets/images/cases/giros/hero-main.png",
         "text": "GIROS 360 - Jumeaux numériques du fleuve",
         "overlay": true
       }
       // ... autres blocs
     ]
   }
   ```

## Option 3 : Hébergement externe

1. **Uploader les images** sur un service comme :
   - AWS S3
   - Cloudinary
   - Imgur
   - GitHub (dans le repo)

2. **Mettre à jour les URLs** avec les nouveaux liens

## Images requises

| Nom du fichier | Dimensions | Description |
|----------------|------------|-------------|
| hero-main.png | 886x570px | Image principale GIROS |
| mockup-interface.png | 611x411px | Interface de simulation |
| full-width-detail.png | 875x494px | Démonstration en temps réel |
| grid-large.png | 329x487px | Plateforme web GIROS |
| grid-small-1.png | 438x288px | Infrastructure portuaire |
| grid-small-2.png | 434x288px | Écosystème naturel |
| grid-equal-1.png | 436x494px | Laboratoire d'innovation |
| grid-equal-2.png | 436x494px | Visualisation des métriques |
| passes-detail.png | 875x560px | Détail des passes |
| research-1.png | 441x583px | Recherche phase 1 |
| research-2.png | 426x583px | Timeline du projet |

## URLs Figma originales

```javascript
const figmaUrls = {
  'hero-main.png': 'http://localhost:3845/assets/768f0a497e5568dc9177edba7f4c51b0f284993a.png',
  'mockup-interface.png': 'http://localhost:3845/assets/7578d697f625f4eb93865a0bd35b9c6bffcf81b1.png',
  'full-width-detail.png': 'http://localhost:3845/assets/80fb8acc7dda9e7f091143e49c8100b99b9d611b.png',
  'grid-large.png': 'http://localhost:3845/assets/95430aa5aa6e0f4c2866c1e5ab821646eae18847.png',
  'grid-small-1.png': 'http://localhost:3845/assets/f5094ac9394da6ded44c7d0539d60fa20ec992cb.png',
  'grid-small-2.png': 'http://localhost:3845/assets/b18685d0a5b4379fa624af9e0f8a24a707034d77.png',
  'grid-equal-1.png': 'http://localhost:3845/assets/89fcf1df3be0adf68a7d6ea82b97e93496e89f82.png',
  'grid-equal-2.png': 'http://localhost:3845/assets/bb802870fd11b1e337add182495983c63a914770.png',
  'passes-detail.png': 'http://localhost:3845/assets/0d4137f0072be4bbb9c30f76e2532e8ec14fd708.png',
  'research-1.png': 'http://localhost:3845/assets/3d08560a5dd458200c3749d253d22544c3c34dea.png',
  'research-2.png': 'http://localhost:3845/assets/d429c83237662f2325a821aeebf46eaf0eb664ff.png'
};
```

## Test

Après avoir configuré les images, testez la page en ouvrant `preview.html` et en cliquant sur l'onglet "GIROS Complète". 