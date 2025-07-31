module.exports = function(eleventyConfig) {
  // Copier les assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("_data");
  
  // Configuration optimisée pour le développement
  eleventyConfig.setServerOptions({
    liveReload: true,
    domDiff: true,
    port: 8080
  });
  
  // Ne surveiller que les fichiers essentiels 
  eleventyConfig.setWatchThrottleWaitTime(1000); // Attendre 1s entre les rebuilds
  
  // Collection pour les case studies
  eleventyConfig.addCollection("cases", function(collectionApi) {
    const casesDir = "_data/cases";
    const fs = require('fs');
    const path = require('path');
    
    try {
      const files = fs.readdirSync(casesDir);
      return files
        .filter(file => file.endsWith('.json'))
        .map(file => {
          const caseId = path.basename(file, '.json');
          const filePath = path.join(casesDir, file);
          const content = fs.readFileSync(filePath, 'utf8');
          const data = JSON.parse(content);
          return {
            id: caseId,
            ...data
          };
        });
    } catch (error) {
      console.error('Erreur lors de la lecture des cases:', error);
      return [];
    }
  });
  
  // Shortcodes pour composants complexes
  eleventyConfig.addShortcode("metricCard", function(data) {
    return `<div class="metric-card bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:border-[#2D9CDB]/30">
      <h3 class="text-lg font-semibold text-[#2D9CDB] mb-2">${data.label}</h3>
      <div class="value text-3xl font-bold text-[#F5EBD9] mb-2">${data.value}</div>
      <p class="text-sm text-neutral-400">${data.description}</p>
    </div>`;
  });

  eleventyConfig.addShortcode("narrativeBlock", function(data) {
    return `<div class="narrative-block bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 transition-all duration-500 hover:border-[#2D9CDB]/20">
      <h3 class="text-xl font-bold text-[#F5EBD9] mb-4">${data.title}</h3>
      <p class="text-neutral-300 leading-relaxed mb-4">${data.content}</p>
      ${data.cta ? `<a href="${data.cta.url}" class="inline-flex items-center px-6 py-3 bg-[#2D9CDB] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#2D9CDB]/80 hover:scale-105">${data.cta.text}</a>` : ''}
    </div>`;
  });

  eleventyConfig.addShortcode("sectionDivider", function(theme = "dark") {
    const colors = theme === "light" ? "from-neutral-100 to-neutral-200" : "from-neutral-900 to-neutral-800";
    return `<div class="section-divider h-1 bg-gradient-to-r ${colors} my-16"></div>`;
  });
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
}; 