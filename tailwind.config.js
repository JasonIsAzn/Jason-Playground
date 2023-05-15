/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_grey: "#121212",
        grey: {
          "yellow-12": "#2C2C1B", // 12% yellow mixed
        },
        primary_yellow: {
          DEFAULT: "#ECE75F",
        },
      },
    },
  },

  plugins: [],
};
