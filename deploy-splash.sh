#!/bin/bash

echo "🚀 Déploiement du splash screen sur Netlify..."

# Build du projet
echo "📦 Build en cours..."
npm run build

# Vérifier que le build a réussi
if [ $? -eq 0 ]; then
    echo "✅ Build réussi !"
    
    # Copier la configuration splash
    cp netlify-splash.toml _site/netlify.toml
    
    echo "🌐 Déploiement en cours..."
    echo ""
    echo "📋 Instructions :"
    echo "1. Allez sur https://app.netlify.com/"
    echo "2. Cliquez sur 'Add new site' > 'Deploy manually'"
    echo "3. Glissez-déposez le dossier '_site'"
    echo "4. Votre site sera accessible immédiatement !"
    echo ""
    echo "🔗 Ou utilisez la CLI Netlify :"
    echo "npx netlify-cli deploy --dir=_site --prod"
    
else
    echo "❌ Erreur lors du build"
    exit 1
fi 