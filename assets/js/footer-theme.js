// Gestionnaire de thèmes pour le footer dynamique
class FooterThemeManager {
  constructor() {
    this.currentTheme = null;
    this.transitionDuration = 300; // ms
    this.init();
  }

  init() {
    // Détecter le thème initial
    this.detectAndApplyTheme();
    
    // Écouter les changements d'URL pour les SPA
    window.addEventListener('popstate', () => {
      this.detectAndApplyTheme();
    });
    
    // Écouter les changements de case-study
    document.addEventListener('caseStudyChanged', (event) => {
      this.applyThemeForCaseStudy(event.detail.caseStudyId);
    });
  }

  detectAndApplyTheme() {
    const urlParams = new URLSearchParams(window.location.search);
    let caseStudyId = urlParams.get('case');
    
    if (!caseStudyId) {
      const caseStudyElements = document.querySelectorAll('[data-case-study]');
      if (caseStudyElements.length > 0) {
        caseStudyId = caseStudyElements[0].getAttribute('data-case-study');
      } else {
        const path = window.location.pathname;
        if (path.includes('case-study') || path.includes('cases')) {
          caseStudyId = 'giros';
        } else {
          caseStudyId = 'homepage'; // Par défaut homepage pour la page d'accueil
        }
      }
    }
    
    if (caseStudyId) {
      this.applyThemeForCaseStudy(caseStudyId);
    } else {
      this.applyDefaultTheme();
    }
  }

  async applyThemeForCaseStudy(caseStudyId) {
    try {
      const response = await fetch('/_data/images-config.json');
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (data[caseStudyId] && data[caseStudyId].footer) {
        this.applyTheme(data[caseStudyId].footer, caseStudyId);
      } else {
        this.applyDefaultTheme();
      }
    } catch (error) {
      console.error('Erreur lors du chargement de la configuration du footer:', error);
      this.applyDefaultTheme();
    }
  }

  applyTheme(themeConfig, themeId = 'default') {
    console.log('🎨 Applying theme:', themeId, themeConfig);
    
    if (this.currentTheme === themeId) {
      console.log('⚠️ Theme already applied:', themeId);
      return;
    }
    
    const footer = document.getElementById('dynamic-footer');
    if (!footer) {
      console.error('❌ Footer element not found (#dynamic-footer)');
      return;
    }

    console.log('✅ Footer element found, applying theme...');

    // Ajouter une classe de transition
    footer.classList.add('theme-transitioning');
    
    // Appliquer le background avec transition
    if (themeConfig.backgroundImage) {
      this.setBackgroundImage(themeConfig.backgroundImage);
    }
    
    // Appliquer les couleurs avec transition
    this.applyColorsWithTransition(themeConfig);
    
    // Mettre à jour le thème actuel
    this.currentTheme = themeId;
    
    console.log('✅ Theme applied successfully:', themeId);
    
    // Retirer la classe de transition après l'animation
    setTimeout(() => {
      footer.classList.remove('theme-transitioning');
    }, this.transitionDuration);
  }

  setBackgroundImage(imageUrl) {
    const footer = document.getElementById('dynamic-footer');
    if (!footer) return;
    
    // Vérifier si c'est une couleur (commence par #)
    if (imageUrl.startsWith('#')) {
      footer.style.backgroundImage = 'none';
      footer.style.backgroundColor = imageUrl;
    } else {
      // C'est une URL d'image
      const img = new Image();
      img.onload = () => {
        footer.style.backgroundImage = `url('${imageUrl}')`;
        footer.style.backgroundColor = 'transparent';
      };
      img.src = imageUrl;
    }
  }

  applyColorsWithTransition(themeConfig) {
    // Appliquer la couleur de fond aux blocs
    const blocks = [
      'logo-block', 'quicklinks-block', 'opensource-block', 
      'legal-block', 'location-block', 'contact-block', 'actions-block', 'actions-mobile-block'
    ];
    
    blocks.forEach(blockId => {
      const block = document.getElementById(blockId);
      if (block && themeConfig.backgroundColor) {
        // Appliquer directement avec !important pour éviter les conflits CSS
        block.style.setProperty('background-color', themeConfig.backgroundColor, 'important');
        console.log(`Applied background to ${blockId}:`, themeConfig.backgroundColor);
      } else if (block) {
        console.log(`Block found but no backgroundColor for ${blockId}`);
      } else {
        console.log(`Block not found: ${blockId}`);
      }
    });
    
    // Appliquer la couleur de texte à tous les textes
    const textElements = [
      'quicklinks-title', 'about-link', 'works-link', 'visual-link',
      'opensource-title', 'opensource-link', 'legal-link', 'legal-text',
      'location-title', 'address-link', 'contact-text'
    ];
    
    textElements.forEach(elementId => {
      const element = document.getElementById(elementId);
      if (element && themeConfig.textColor) {
        this.animateColor(element, 'color', themeConfig.textColor);
      }
    });
    
    // Appliquer la couleur de texte aux boutons CTA
    const ctaElements = [
      'contact-button', 'book-intro-button', 'mobile-book-intro-button'
    ];
    
    ctaElements.forEach(elementId => {
      const element = document.getElementById(elementId);
      if (element) {
        // LOGIQUE COHÉRENTE : textColor pour contraste visuel optimal
        // Bouton avec fond textColor et texte backgroundColor pour maximum de lisibilité
        if (themeConfig.textColor) {
          element.style.setProperty('background-color', themeConfig.textColor, 'important');
          console.log(`Applied background to ${elementId}:`, themeConfig.textColor);
        }
        if (themeConfig.backgroundColor) {
          element.style.setProperty('color', themeConfig.backgroundColor, 'important');
          console.log(`Applied color to ${elementId}:`, themeConfig.backgroundColor);
        }
      } else {
        console.log(`CTA element not found: ${elementId}`);
      }
    });
    
    // Appliquer la couleur de texte aux icônes
    const iconElements = [
      'about-icon', 'works-icon', 'visual-icon', 'location-icon',
      'calendar-icon', 'linkedin-icon', 'whatsapp-icon', 'signal-icon'
    ];
    
    iconElements.forEach(elementId => {
      const element = document.getElementById(elementId);
      if (element && themeConfig.textColor) {
        // Appliquer directement la couleur aux SVGs
        this.animateSvgColor(element, themeConfig.textColor);
      }
    });
    
    // Appliquer la couleur de texte au logo CASTAGNE
    const logoCastagne = document.getElementById('logo-castagne');
    if (logoCastagne && themeConfig.textColor) {
      this.animateSvgColor(logoCastagne, themeConfig.textColor);
    }
    
    // Appliquer la couleur de texte au logo CASTAGNE en fin de footer
    const castagneFooterSvg = document.getElementById('castagne-footer-svg');
    if (castagneFooterSvg && themeConfig.textColor) {
      // Appliquer la couleur aux paths du SVG inline
      this.animateSvgColor(castagneFooterSvg, themeConfig.textColor);
    }
  }

  animateColor(element, property, targetColor) {
    if (!element) return;
    
    const startColor = getComputedStyle(element)[property];
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.transitionDuration, 1);
      
      // Interpolation simple entre les couleurs
      const interpolatedColor = this.interpolateColor(startColor, targetColor, progress);
      element.style[property] = interpolatedColor;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }

  // Fonction spécifique pour les SVG inline
  animateSvgColor(element, targetColor) {
    if (!element) return;
    
    // Appliquer directement la couleur aux paths du SVG
    const paths = element.querySelectorAll('path');
    
    paths.forEach(path => {
      path.style.fill = targetColor;
      // Forcer la couleur même si elle est définie en dur dans le SVG
      path.setAttribute('fill', targetColor);
    });
    
    // Appliquer aussi au niveau de l'élément SVG principal
    element.style.fill = targetColor;
  }



  animateFilter(element, targetFilter) {
    if (!element) return;
    
    element.style.transition = `filter ${this.transitionDuration}ms ease-in-out`;
    element.style.filter = targetFilter;
    
    setTimeout(() => {
      element.style.transition = '';
    }, this.transitionDuration);
  }

  interpolateColor(color1, color2, factor) {
    // Conversion simple pour les couleurs hexadécimales
    if (color1.startsWith('#') && color2.startsWith('#')) {
      const r1 = parseInt(color1.slice(1, 3), 16);
      const g1 = parseInt(color1.slice(3, 5), 16);
      const b1 = parseInt(color1.slice(5, 7), 16);
      
      const r2 = parseInt(color2.slice(1, 3), 16);
      const g2 = parseInt(color2.slice(3, 5), 16);
      const b2 = parseInt(color2.slice(5, 7), 16);
      
      const r = Math.round(r1 + (r2 - r1) * factor);
      const g = Math.round(g1 + (g2 - g1) * factor);
      const b = Math.round(b1 + (b2 - b1) * factor);
      
      return `rgb(${r}, ${g}, ${b})`;
    }
    
    return color2; // Fallback
  }

  applyDefaultTheme() {
    const defaultConfig = {
      backgroundImage: '/assets/images/cases/giros/CASTAGNE-Giros-FooterField.jpg',
      backgroundColor: '#FFFFFF',
      textColor: '#000000'
    };
    
    this.applyTheme(defaultConfig, 'default');
  }

  // Méthode publique pour changer de thème
  changeTheme(caseStudyId) {
    this.applyThemeForCaseStudy(caseStudyId);
  }
}

// Initialiser le gestionnaire de thèmes
document.addEventListener('DOMContentLoaded', () => {
  console.log('Footer Theme Manager initializing...');
  window.footerThemeManager = new FooterThemeManager();
  console.log('Footer Theme Manager initialized');
});

// Fonction globale pour changer de thème (pour compatibilité)
function applyFooterTheme(themeConfig) {
  if (window.footerThemeManager) {
    // Créer un thème temporaire avec l'ID 'custom'
    const customTheme = {
      ...themeConfig,
      id: 'custom'
    };
    window.footerThemeManager.applyTheme(customTheme, 'custom');
  }
}

// Fonction pour appliquer le thème selon le case-study
function applyFooterThemeForCaseStudy(caseStudyId) {
  if (window.footerThemeManager) {
    window.footerThemeManager.changeTheme(caseStudyId);
  }
} 