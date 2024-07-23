/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        /* ## Colors */
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",

        "gray-500": "hsl(0, 0%, 42%)",
        "gray-950": "hsl(0, 0%, 7%)",
      },
      boxShadow: {
        "3xl": "8px 8px 0px 0px rgba(18,18,18,1)",
      },
    },
  },
  plugins: [],
};
