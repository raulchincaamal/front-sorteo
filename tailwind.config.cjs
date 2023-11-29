/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-macro': '#0047ba',
        'secondary-macro': '#4b5468',
        'gray-macro': '#A1ADC0',
        'gray-400-macro': '#DEE3EA',
        'midnight-macro': '#555E6B'
      },
      height: {
        '81': '21rem'
      },
      margin: {
        '40': "8.75rem",
      },
      backgroundImage: {
        'winner': 'url("/src/assets/img/winner-background.png")',
        'form': 'url("/src/assets/img/form-background.png")'
      }
    },
  },
  plugins: [],
}