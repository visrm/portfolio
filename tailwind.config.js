const { white } = require("color-name");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./public/index.html",
  ],
  theme: {
    colors: {
      gray: "#0d1717",
      white: "#f0f0f0",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
