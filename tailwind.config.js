module.exports = {
  purge: ["./pages/**/*.tsx", "./layouts/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Zilla Slab", "serif"],
      },
      colors: {
        "glongas-green": "#5EBE92",
        "glongas-green-dark": "#137649",
      },
      width: {
        container: "750px",
      },
    },
  },
  variants: {
    extend: { scale: ["group-hover"] },
  },
  plugins: [require("@tailwindcss/typography")],
};
