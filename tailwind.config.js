/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation:{
        spin: 'spin 3s  infinite'
      }

    },

    fontFamily:{
      jura: ['jura'],
    }
  },
  plugins: [],
}

