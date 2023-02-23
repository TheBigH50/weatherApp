/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      transitionDelay: {
        10: "10ms",
      },
      keyframes: {
        wiggleANDpulse: {
          "0%, 100%": { opacity: 1, transform: "rotate(-3deg)" },
          "25%": { opacity: 0.7 },
          "50%": { opacity: 1, transform: "rotate(3deg)" },
          "75%": { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
};
