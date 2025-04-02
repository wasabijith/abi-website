module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: '#FFD700', // Custom yellow color
        primaryBlack: '#1A1A1A', // Dark black for contrast
        secondaryGray: '#000000', // A secondary dark gray color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // You can also use 'Poppins' or 'Roboto'
      },
    },
  },
  plugins: [],
}
