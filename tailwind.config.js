module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx','./public/**/*.html'],
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
    },
  },
  plugins: [],
}