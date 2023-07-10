/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode:"class",
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      xs: {min: "350px", max: "640px"},
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
