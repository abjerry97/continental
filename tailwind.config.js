/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-party': "url('assets/background/images/Splash_Screen_Background_Party.png')",
        'header-party': "url('assets/background/images/Header_Screen_Background_Party.png')",
        'landing-party': "url('assets/background/images/Landing/Landing_Screen_Background_Party.png')",
      }
    }
  },
  plugins: [],
} 