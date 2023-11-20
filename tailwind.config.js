/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-party': "url('assets/background/images/Splash_Screen_Background_Party.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
} 