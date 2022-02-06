module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      "roboto": ["Roboto"]
    }
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}
