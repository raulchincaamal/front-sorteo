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
        'secondary-macro': '#4b5468'
      },
      height: {
        '81': '21rem'
      },
    },
  },
  plugins: [],
}