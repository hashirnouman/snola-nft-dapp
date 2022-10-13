const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#FA4E69",
        dark_purple: "#031233",
        light_purple: "#7A6DE7",
        garident_color: "#E28571",
      },
      backgroundImage: {
        "hero-image": "url('/images/hero.jpg')",
      },
      
    },
  },
  plugins: [],
};
