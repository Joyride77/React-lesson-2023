/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myred: "#FA320A",
        search: "rgba(0,0,0,0.4)",
      },
      fontFamily: {
        body: ["Roboto Condensed"],
      },
    },
  },
  plugins: [],
};
