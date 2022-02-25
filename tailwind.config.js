module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#27DDF2',
        'medium-blue': '#172333',
        'bold-blue': '#0E1420',
        'light-gray': '#E6E6EE',
        'medium-gray': '#888D93',
        'bold-gray': '#303C42',
        'medium-white': '#F4FAFB',
        'medium-orange': '#FB7C03',
      },
      spacing: {
        '100': '27rem',
      },
      fontSize: {
        '2.5xl': '1.7rem'
      }
    },
  },
  plugins: [],
}
