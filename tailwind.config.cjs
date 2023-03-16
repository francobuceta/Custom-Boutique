/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#65B2C6',
        secondary: '#1E1E1E',
        alternative: '#F5F5F5',
      },
      screens: {
        md: '768px',
        lg: '1440px',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
