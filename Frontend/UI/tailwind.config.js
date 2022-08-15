/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Content/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require("@tailwindcss/forms")({
      strategy: 'class',
    })
  ],
  daisyui: {
    themes: ['business', 'corporate', 'halloween', 'emerald', 'aqua', 'fantasy'],
  },
};
