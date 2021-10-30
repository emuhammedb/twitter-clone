module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:{
          base: "#1DA1F2",
          dark: "#0C85D0",
          light: "#4DB5F5",
        },
        gray: {
          dark: "#657786",
          light: "#AAB8C2",
          extraLight: "#E1E8ED",
          lightest: "#F5F8FA",
        },
        black: "hsl(210, 13%, 9%)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}