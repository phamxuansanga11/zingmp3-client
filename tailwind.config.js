/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-color": "#ffffff",
        "purple-primary": "#170f23",
        "sideBar-color": "#231b2e",
        "sideBarActive-color": "#3a3344",
        "menuText-color": "#DADADA",
        "text-purple-color": "#c273ed",
      },
    },
  },
  variants: {},
  plugins: [],
};
