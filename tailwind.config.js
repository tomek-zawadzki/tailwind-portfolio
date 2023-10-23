/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        md: "744px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
};
