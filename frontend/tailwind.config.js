/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '460px',
      xs: '340px',
      md: '660px',
      lg: '750px',
      xl: '1600px',
    },
    colors: {
      'purple': '#7169CC',
      'light-blue': '#44DDFF',
      'pink': '#EBCBFF',
      'dark-blue':'#001835'
    },
    extend: {
      fontFamily: {
        nunito: [ "Nunito", "sans-serif"]
      }
    },
  },
  plugins: [],
}

