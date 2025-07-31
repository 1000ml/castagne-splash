# 🚀 Déploiement du Splash Screen sur Netlify

## 📋 Instructions rapides

### Option 1 : Déploiement manuel (Recommandé)

1. **Build du projet :**
   ```bash
   npm run build
   ```

2. **Aller sur Netlify :**
   - Ouvrez https://app.netlify.com/
   - Cliquez sur "Add new site" > "Deploy manually"

3. **Déployer :**
   - Glissez-déposez le dossier `_site` dans la zone de déploiement
   - Votre site sera accessible immédiatement !

### Option 2 : Utiliser le script automatique

```bash
./deploy-splash.sh
```

### Option 3 : CLI Netlify

```bash
# Installer la CLI Netlify
npm install -g netlify-cli

# Déployer
npx netlify-cli deploy --dir=_site --prod
```

## 🌐 Configuration

Le fichier `netlify-splash.toml` configure :
- ✅ **Redirection** : `/` → `/splash/` (page d'accueil)
- ✅ **Assets** : Accès aux images et CSS
- ✅ **Headers** : Sécurité et cache optimisé

## 📁 Structure du déploiement

```
_site/
├── splash/
│   └── index.html          # Votre page splash
├── assets/
│   └── images/
│       ├── Diaporama/      # Images du carrousel
│       ├── HERO-*.png      # Illustrations
│       └── footer/         # Icônes
└── netlify.toml           # Configuration Netlify
```

## 🔧 Personnalisation

### Changer l'URL de la page d'accueil :
Modifiez dans `netlify-splash.toml` :
```toml
[[redirects]]
  from = "/"
  to = "/splash/"  # Changez ici
  status = 200
```

### Ajouter un domaine personnalisé :
1. Dans Netlify, allez dans "Domain settings"
2. Ajoutez votre domaine
3. Configurez les DNS selon les instructions

## 🎯 Résultat

Votre splash screen sera accessible à :
- `https://votre-site.netlify.app/` (redirige vers splash)
- `https://votre-site.netlify.app/splash/` (accès direct)

## 🚨 Troubleshooting

### Problème : Images ne se chargent pas
- Vérifiez que les chemins dans `splash.html` commencent par `/assets/`
- Assurez-vous que les images existent dans `_site/assets/`

### Problème : CSS ne se charge pas
- Vérifiez que Tailwind CSS est bien chargé
- Les styles sont intégrés dans le fichier HTML

### Problème : Carrousel ne fonctionne pas
- Vérifiez la console du navigateur pour les erreurs JavaScript
- Les scripts sont intégrés dans le fichier HTML 