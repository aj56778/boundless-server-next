const { heroui } = require("@heroui/theme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};
