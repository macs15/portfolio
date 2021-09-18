module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ['14px', '22px'],
      base: ['16px', '32px'],
      sm: ['20px', '32px'],
      md: ['24px', '38px'],
      lg: ['32px', '50px'],
      xl: ['40px', '64px']
    },
    extend: {
      colors: {
        primary: '#7F5AF0',
        thin: "#6648C0",
        accent: '#2CB67D',
        paragraph: '#94A1B2',
        secondary: '#72757E',
        gray: '#16161A'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
