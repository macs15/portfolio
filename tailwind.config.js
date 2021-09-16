module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#7F5AF0',
      accent: '#2CB67D',
    },
    fontSize: {
      xs: ['14px', '22px'],
      base: ['16px', '26px'],
      sm: ['20px', '32px'],
      md: ['24px', '38px'],
      lg: ['32px', '50px'],
      xl: ['40px', '64px'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
