/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
}
