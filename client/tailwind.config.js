/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        card: "repeat(auto-fill, minmax(150px, 1fr))",
      },
      backgroundColor: {
        primary: "#02A676",
        secondary: "#008C72",
        color1: "#3490dc",
        color2: "#f6993f",
      },
    },
  },
  plugins: [],
};
