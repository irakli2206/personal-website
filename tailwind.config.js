/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: ({ theme }) => ({
        'darkest': '#18181B',
        'dark': '#27272A',
        'primary': '#3B3B3B',
        'light': '#52525B',
        'lightest': '#A1A1AA',
        'text': '#D4D4D8',
        'transparent-text': 'rgba(212, 212, 216, 0.31)'
      }),
      fontFamily: {
        sans: ['Outfit']
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1600px'
      },
      boxShadow: {
        'mail-box': '0px 0px 8px 0px rgba(255, 255, 255, 0.25) inset',
        'button': '0px 0px 8px 0px rgba(161, 161, 170, 0.25) inset',
        'stack': '0px 0px 67px 0px rgba(24, 24, 27, 1) inset',
        'experience-card': '1px 1px 1px 0px rgba(255, 255, 255, 0.1) inset',
        'cursor': '0px 0px 3000px 300px rgba(39, 39, 42, 1)'
      },
      dropShadow: {
        'text': '0px 0px 6px rgba(255,255,255, 0.75)'
      },
    },
  },
  plugins: [],
}