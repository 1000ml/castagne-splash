# 🚀 Déploiement Git + Netlify - Splash Screen

## ✅ Configuration terminée

### **Repository GitHub :**
- ✅ **URL** : https://github.com/1000ml/castagne-splash
- ✅ **Branch** : `main`
- ✅ **Build** : Automatique via Netlify

## 📋 Étapes pour connecter Netlify

### **1. Aller sur Netlify :**
- Ouvrez https://app.netlify.com/
- Cliquez sur "Add new site" > "Deploy with Git"

### **2. Connecter GitHub :**
- Choisissez "GitHub"
- Autorisez Netlify à accéder à vos repositories
- Sélectionnez `1000ml/castagne-splash`

### **3. Configuration du build :**
- **Branch to deploy** : `main`
- **Base directory** : (laissez vide)
- **Build command** : `npm run build`
- **Publish directory** : `_site`

### **4. Déployer :**
- Cliquez sur "Deploy site"
- Votre site sera en ligne en quelques minutes !

## 🔄 Mises à jour automatiques

### **Script de mise à jour :**
```bash
./update-splash.sh
```

### **Ou manuellement :**
```bash
# Modifier vos fichiers
npm run build
git add .
git commit -m "Votre message"
git push
```

## 🌐 URLs de votre site

Une fois déployé, votre site sera accessible à :
- **Page d'accueil** : `https://votre-site.netlify.app/` (redirige vers splash)
- **Accès direct** : `https://votre-site.netlify.app/splash/`

## ⚙️ Configuration automatique

Le fichier `netlify.toml` configure automatiquement :
- ✅ **Redirection** : `/` → `/splash/`
- ✅ **Build** : `npm run build`
- ✅ **Publish** : `_site`
- ✅ **Headers** : Sécurité et cache optimisé

## 🎯 Avantages du déploiement Git

- ✅ **Mises à jour automatiques** : Chaque push déclenche un nouveau déploiement
- ✅ **Historique** : Toutes les modifications sont tracées
- ✅ **Collaboration** : Possibilité de travailler à plusieurs
- ✅ **Rollback** : Possibilité de revenir à une version précédente
- ✅ **Previews** : Prévisualisation des changements avant déploiement

## 🚨 Troubleshooting

### **Problème : Build échoue**
- Vérifiez que `npm run build` fonctionne localement
- Consultez les logs de build dans Netlify

### **Problème : Images ne se chargent pas**
- Vérifiez que les chemins commencent par `/assets/`
- Assurez-vous que les images sont dans le repository

### **Problème : Redirection ne fonctionne pas**
- Vérifiez le fichier `netlify.toml`
- Attendez quelques minutes pour que les changements se propagent

## 📞 Support

- **Repository** : https://github.com/1000ml/castagne-splash
- **Netlify** : https://app.netlify.com/
- **Documentation** : https://docs.netlify.com/ 