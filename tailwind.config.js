const colors = require("tailwindcss/colors");

module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: colors.red,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      primary: "#012A4A",
      secondary: "#014f86",
      third: "#468faf",
      fourth: "#a9d6e5",
      five: "#2A6F97",
      purple_slider: "#572f8e",
      pink_slider: "#AA538D",
      red_slider: "#E82429",
      green_slider: "#295F63",
      purple_circle1: "#972C9C",
      purple_circle2: "#812EA6",
      pink_circle1: "#A28096",
      pink_circle2: "#8F4677",
      red_circle1: "#EC6D71",
      red_circle2: "#38090B",
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://i.blogs.es/e1feab/google-fotos/450_1000.jpg')"
      },
      fontFamily: {
        "merri": ["Merriweather", "sans-serif"],
      },
    },
  },
};
