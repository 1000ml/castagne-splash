# 🎯 CASTAGNE - Site Vitrine

Site vitrine moderne pour CASTAGNE, plateforme d'analyse de données narratives, construit avec **11ty (Eleventy)** et **Netlify CMS**.

## 🚀 Technologies

- **11ty (Eleventy)** - Static site generator
- **TailwindCSS** - Framework CSS utilitaire
- **Netlify CMS** - Interface d'administration headless
- **JavaScript vanilla** - Interactions côté client
- **Architecture composant-first** - Composants modulaires et réutilisables

## 📁 Architecture

```
castagne-website/
├── _includes/          # Composants réutilisables
│   ├── base.html      # Layout principal
│   ├── navigation.html # Navigation responsive
│   ├── hero-claim.html # Section héro
│   ├── narrative-data.html # Bloc données narratives
│   ├── data-snapshot.html # Snapshot des données
│   ├── section-divider.html # Séparateurs
│   └── footer.html    # Footer
├── _data/             # Données structurées
│   ├── site.json      # Configuration globale
│   ├── snapshot.json  # Données du snapshot
│   ├── narrative.json # Données narratives
│   └── navigation.json # Menu
├── admin/             # Configuration Netlify CMS
│   ├── config.yml     # Configuration CMS
│   └── index.html     # Interface d'administration
├── assets/            # CSS, JS, images
│   └── js/
│       └── main.js    # JavaScript principal
├── index.html         # Page principale
├── .eleventy.js       # Configuration 11ty
├── package.json       # Dépendances
└── README.md          # Documentation
```

## 🎨 Design System

### Couleurs
- **Fond** : `bg-neutral-950` (noir très foncé)
- **Texte principal** : `text-[#F5EBD9]` (beige)
- **Accents** : `text-[#2D9CDB]` (bleu électrique)

### Typographie
- **Inter** : Police principale (clean, moderne)
- **Space Grotesk** : Titres (tech, futuriste)

### Animations
- Transitions Tailwind (opacity, scale, transform)
- Animations au scroll avec Intersection Observer
- Effets de hover et focus

## 🛠️ Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation locale

1. **Cloner le repository**
```bash
git clone https://github.com/1000ml/castagne-website.git
cd castagne-website
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:8080`

### Commandes disponibles

```bash
# Développement
npm run dev          # Serveur de développement avec hot reload

# Production
npm run build        # Build du site statique

# CMS local
npm run cms          # Serveur CMS local (optionnel)
```

## 📊 Structure des Données

### Configuration du site (`_data/site.json`)
```json
{
  "title": "CASTAGNE",
  "description": "Description du projet",
  "hero": {
    "title": "Titre principal",
    "subtitle": "Sous-titre accrocheur",
    "description": "Description détaillée",
    "cta": {
      "primary": "Bouton principal",
      "secondary": "Bouton secondaire"
    }
  }
}
```

### Métriques (`_data/snapshot.json`)
```json
{
  "metrics": [
    {
      "label": "Métrique",
      "value": "100%",
      "description": "Description",
      "trend": "+15%",
      "icon": "📊"
    }
  ]
}
```

### Données narratives (`_data/narrative.json`)
```json
{
  "blocks": [
    {
      "title": "Titre du bloc",
      "content": "Contenu détaillé",
      "icon": "🧠",
      "features": ["Fonctionnalité 1", "Fonctionnalité 2"],
      "cta": {
        "text": "Action",
        "url": "#lien"
      }
    }
  ]
}
```

## 🎛️ Netlify CMS

### Accès à l'administration
- URL : `https://votre-site.netlify.app/admin`
- Authentification via Netlify Identity

### Collections disponibles
1. **Configuration du Site** - Informations générales
2. **Métriques** - Données du snapshot
3. **Données Narratives** - Contenu des blocs
4. **Navigation** - Menu et liens

### Workflow de publication
- Mode éditorial activé
- Rôles : admin, editor, author
- Prévisualisation en temps réel

## 🔧 Personnalisation

### Ajouter un nouveau composant

1. **Créer le fichier** `_includes/nouveau-composant.html`
```html
<section class="nouveau-composant">
  <h2>{{ title }}</h2>
  <p>{{ content }}</p>
</section>
```

2. **Ajouter les données** dans `_data/`
3. **Inclure dans une page**
```html
{% include "nouveau-composant.html" %}
```

### Modifier les styles

Les styles sont gérés via TailwindCSS. Pour des styles personnalisés :

1. **Dans le layout** (`_includes/base.html`)
2. **Via les classes Tailwind**
3. **CSS personnalisé** dans la balise `<style>`

### Ajouter des interactions JavaScript

1. **Dans** `assets/js/main.js`
2. **Utiliser les utilitaires** disponibles
3. **Observer les patterns** existants

## 🚀 Déploiement

### Netlify (Recommandé)

1. **Connecter le repository GitHub**
2. **Configuration automatique** détectée
3. **Variables d'environnement** (si nécessaire)
4. **Déploiement automatique** à chaque push

### Configuration Netlify

```toml
# netlify.toml
[build]
  publish = "_site"
  command = "npm run build"

[[redirects]]
  from = "/admin/*"
  to = "/admin/index.html"
  status = 200
```

### Variables d'environnement
```bash
# .env (optionnel)
NETLIFY_CMS_LOCAL_BACKEND=true
```

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints Tailwind** :
  - `sm:` 640px+
  - `md:` 768px+
  - `lg:` 1024px+
  - `xl:` 1280px+

## ⚡ Performance

### Optimisations incluses
- **HTML statique** généré
- **CSS optimisé** avec Tailwind
- **JavaScript minimal** et efficace
- **Images optimisées** (à configurer)
- **Lazy loading** (à implémenter)

### Métriques cibles
- **Lighthouse Score** : 90+
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s

## 🔍 SEO

### Métadonnées automatiques
- **Title** et **description** dynamiques
- **Open Graph** tags
- **Twitter Cards**
- **Sitemap** (à générer)

### Structure sémantique
- **HTML5** valide
- **ARIA labels** pour l'accessibilité
- **Schema.org** markup (à ajouter)

## 🛡️ Sécurité

- **Pas de JavaScript côté serveur**
- **CSP headers** (à configurer)
- **HTTPS** obligatoire
- **Validation des données** CMS

## 🤝 Contribution

### Workflow Git
1. **Fork** le repository
2. **Branch** feature : `git checkout -b feature/nouvelle-fonctionnalite`
3. **Commit** : `git commit -m "feat: ajouter nouvelle fonctionnalité"`
4. **Push** : `git push origin feature/nouvelle-fonctionnalite`
5. **Pull Request**

### Standards de code
- **ESLint** (à configurer)
- **Prettier** (à configurer)
- **Conventional Commits**

## 📞 Support

- **Issues GitHub** : [https://github.com/1000ml/castagne-website/issues](https://github.com/1000ml/castagne-website/issues)
- **Email** : contact@castagne.com
- **Documentation** : Ce README

## 📄 Licence

MIT License - Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

**CASTAGNE** - Transformez vos données narratives en insights actionnables 🚀 