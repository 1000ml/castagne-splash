# Images GIROS - Cas d'étude

Ce dossier contient les images exportées du design Figma pour le cas d'étude GIROS.

## Couleur du thème

**Couleur principale** : `#AEC8D3` (bleu-gris)

## Images utilisées dans la galerie

### Images principales
- `CASTAGNE-Giros-Hero.jpg` - Image principale GIROS (875x562px)
- `CASTAGNE-Giros-Dragage.jpg` - Interface de simulation (611x411px)
- `CASTAGNE-Giros-Render.jpg` - Démonstration en temps réel (875x494px)

### Images de grille
- `CASTAGNE-Giros-website.jpg` - Plateforme web GIROS (329x487px)
- `CASTAGNE-Giros-Industriel.jpg` - Infrastructure portuaire (438x288px)
- `CASTAGNE-Giros-nature.jpg` - Écosystème naturel (434x288px)
- `CASTAGNE-Giros-buoy.jpg` - Bouée de surveillance (436x494px)
- `CASTAGNE-Giros-Dataviz.jpg` - Visualisation des métriques (436x494px)
- `CASTAGNE-Giros-passes.jpg` - Détail des passes (875x560px)

### Images de recherche
- `CASTAGNE-Giros-research1.jpg` - Recherche phase 1 (441x583px)
- `CASTAGNE-Giros-research2.jpg` - Timeline du projet (426x583px)

### Image de footer
- `CASTAGNE-Giros-FooterField.jpg` - Image de fond du footer (1920x600px)

## Composition de la galerie

La galerie NarrativeGallery suit exactement la composition du design Figma :

1. **Hero** - Image principale GIROS
2. **Full Width** - Interface de dragage
3. **Full Width** - Rendu de démonstration
4. **Grid Asymmetric** - Website (gauche) + Industriel + Nature (droite)
5. **Grid Equal** - Buoy + Dataviz
6. **Full Width** - Passes détail
7. **Grid Equal** - Research1 + Research2

## Types de blocs

### Structure des blocs
La galerie utilise les types de blocs suivants :

- `hero` - Image pleine largeur
- `full-width` - Image pleine largeur
- `grid-asymmetric` - Deux colonnes asymétriques
- `grid-equal` - Deux colonnes égales

### Images avec fond intégré
Ces images ont le fond coloré et les marges intégrés directement dans l'image :
- `CASTAGNE-Giros-website.jpg` - Plateforme web GIROS avec fond coloré intégré
- `CASTAGNE-Giros-Dataviz.jpg` - Visualisation des métriques avec fond coloré intégré

### Configuration des images

#### Propriétés disponibles
- `overlay: true/false` - Affiche la description au survol
- `zoomable: true/false` - Permet ou non le zoom au clic (lightbox)
- `isVideo: true/false` - Affiche une vidéo au lieu d'une image (autoplay, loop, muted)

#### Comportement par défaut
- **Images zoomables** : Clic pour ouvrir le lightbox, icône 🔍 au survol
- **Images non-zoomables** : Pas de clic, pas d'icône 🔍, mais description visible au survol
- **Vidéos** : Autoplay, loop, muted, pas de zoom

#### Configuration GIROS
- **Non-zoomables** : Hero, interface de dragage, render, website, industriel, nature, dataviz, research2
- **Zoomables** : Buoy, passes, research1

## Utilisation

Ces images sont référencées dans le fichier `_data/giros-case.json` et utilisées par le composant `NarrativeGallery`.

## Sources

Les images proviennent du design Figma et sont servies localement depuis `./assets/images/cases/giros/`.

## Remplacement

Pour remplacer une image :
1. Placez la nouvelle image dans ce dossier
2. Mettez à jour le chemin dans `_data/giros-case.json`
3. Assurez-vous que les dimensions correspondent aux spécifications

## Format recommandé

- **Format** : PNG ou JPG
- **Optimisation** : Compressées pour le web
- **Responsive** : Images vectorielles ou haute résolution pour le redimensionnement 