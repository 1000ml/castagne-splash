// Main JavaScript for CASTAGNE website
document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Expand data button functionality
  const expandDataBtn = document.getElementById('expandDataBtn');
  const expandedData = document.getElementById('expandedData');
  
  if (expandDataBtn && expandedData) {
    expandDataBtn.addEventListener('click', function() {
      const isExpanded = expandedData.classList.contains('hidden');
      
      if (isExpanded) {
        expandedData.classList.remove('hidden');
        expandedData.style.animation = 'slideUp 0.5s ease-out';
        expandDataBtn.querySelector('span').textContent = 'Masquer les données';
      } else {
        expandedData.style.animation = 'slideDown 0.5s ease-out';
        setTimeout(() => {
          expandedData.classList.add('hidden');
        }, 500);
        expandDataBtn.querySelector('span').textContent = 'Voir plus de données';
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.metric-card, .narrative-block').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });

  // SUPPRIMÉ : Parallax effect (n'était pas dans le code original)

  // Add hover effects for metric cards
  document.querySelectorAll('.metric-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) translateY(0)';
    });
  });

  // Project filtering functionality
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectRows = document.querySelectorAll('.project-row');
  
  if (filterTabs.length > 0) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active tab
        filterTabs.forEach(t => {
          t.classList.remove('active', 'bg-[#2D9CDB]', 'text-white');
          t.classList.add('bg-neutral-800', 'text-[#F5EBD9]');
        });
        this.classList.add('active', 'bg-[#2D9CDB]', 'text-white');
        this.classList.remove('bg-neutral-800', 'text-[#F5EBD9]');
        
        // Filter projects
        projectRows.forEach(row => {
          const projectType = row.getAttribute('data-type');
          if (filter === 'all' || projectType === filter) {
            row.style.display = 'table-row';
            row.style.opacity = '1';
          } else {
            row.style.display = 'none';
            row.style.opacity = '0';
          }
        });
      });
    });
  }

  // Add loading animation for page + gestion resize
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
  });
  
  // SUPPRIMÉ : Gestion resize pour parallax (n'existait pas originalement)

  // Console welcome message
  console.log(`
    🎉 Bienvenue sur CASTAGNE !
    
    🚀 Site vitrine construit avec :
    - 11ty (Eleventy)
    - TailwindCSS
    - Netlify CMS
    
    📊 Données structurées pour l'IA
    🎨 Design moderne et responsive
    ⚡ Performance optimisée
    
    👨‍💻 Développé avec ❤️
  `);
});

// Utility functions
const utils = {
  // Format numbers with commas
  formatNumber: (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  
  // Debounce function
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  // Check if element is in viewport
  isInViewport: (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
};

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = utils;
} 