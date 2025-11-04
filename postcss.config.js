/**
 * PostCSS Configuration
 * This file is necessary if you were running a local Tailwind CSS build process,
 * as it allows PostCSS plugins to process the CSS output.
 */
module.exports = {
  plugins: {
    // 1. Tailwind CSS plugin
    tailwindcss: {},
    // 2. Autoprefixer ensures vendor prefixes are added for cross-browser compatibility
    autoprefixer: {},
  },
};
