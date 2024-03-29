/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#65B2C6',
        secondary: '#1E1E1E',
        alternative: '#F5F5F5',
        navbar: "#F2F2F2"
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        xxl: '1680px',
        tv: '1920px'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
