/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue-100": "hsl(219, 30%, 18%)",
        "dark-blue-200": "hsl(217, 28%, 15%)",
        "dark-blue-300": "hsl(218, 28%, 13%)",
        "dark-blue-400": "hsl(216, 53%, 9%)",
        "blue": "hsl(198, 60%, 50%)",
        "cyan": "hsl(176, 68%, 64%)",
        "light-red": "hsl(0, 100%, 63%)"
      }
    },
  },
  plugins: [],
}
