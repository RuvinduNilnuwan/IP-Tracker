module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-back": "url('bgimg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
