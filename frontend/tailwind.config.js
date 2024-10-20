/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        color1: 'var(--color1)',
        color2: 'var(--color2)',
        color3: 'var(--color3)'
      },
    },
  },
  plugins: [],
};
