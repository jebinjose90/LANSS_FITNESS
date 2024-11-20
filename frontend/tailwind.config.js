/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'], // Add Oswald as a custom font
      },
      colors: {
        color1: 'var(--color1)',
        color2: 'var(--color2)',
        color3: 'var(--color3)',
        'scrollbar-thumb': 'var(--color3)',
        'scrollbar-track': 'var(--color3)',
      },
      spacing: {
        'scrollbar-width': '0.25rem',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
