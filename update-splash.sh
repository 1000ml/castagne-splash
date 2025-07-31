#!/bin/bash

echo "🚀 Mise à jour du splash screen..."

# Demander un message de commit
echo "💬 Entrez un message de commit (ou appuyez sur Entrée pour 'Update splash screen'):"
read commit_message

# Utiliser un message par défaut si aucun n'est fourni
if [ -z "$commit_message" ]; then
    commit_message="Update splash screen"
fi

# Build du projet
echo "📦 Build en cours..."
npm run build

# Vérifier que le build a réussi
if [ $? -eq 0 ]; then
    echo "✅ Build réussi !"
    
    # Ajouter tous les changements
    git add .
    
    # Commit avec le message fourni
    git commit -m "$commit_message"
    
    # Pousser vers GitHub
    echo "🌐 Push vers GitHub..."
    git push
    
    echo ""
    echo "🎉 Mise à jour terminée !"
    echo "📋 Votre site sera mis à jour automatiquement sur Netlify dans quelques minutes."
    echo "🔗 Repository: https://github.com/1000ml/castagne-splash"
    
else
    echo "❌ Erreur lors du build"
    exit 1
fi 