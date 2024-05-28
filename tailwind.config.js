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
      white: "#ffffff",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
