/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      backgroundImage: {
        'background1': "url('/assets/images/2.png')",
        'background2': "url('/assets/images/3.png')",
        'background3': "url('/assets/images/4.png')"
      }
    },
  },
  plugins: [],
};