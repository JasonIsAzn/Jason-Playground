/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_grey: "#121212",
        grey: {
          "yellow-5": "#1d1d16", // 12% yellow mixed
        },
        primary_yellow: {
          DEFAULT: "#ECE75F",
        },
      },
    },
  },

  plugins: [],
};
