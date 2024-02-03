/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        customColorBase: "#feb602",
        customColorLight: "#ffe39e",
        customColorDark: "#efc96b", // Replace with your desired color code
      },
    },
  },
  plugins: [],
};
