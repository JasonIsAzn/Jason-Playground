/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        bg_grey: "#121212",
        grey: {
          "yellow-5": "#1d1d16", // 12% yellow mixed
        },
        primary_yellow: {
          DEFAULT: "#ECE75F",
          dark: "#8B8000",
        },
      },
      scale: {
        "-100": "-1",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
