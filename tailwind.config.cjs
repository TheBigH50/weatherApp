/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      transitionDelay: {
        '10': '10ms'
      }
    },
  },
  plugins: [],
}
