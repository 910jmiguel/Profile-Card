/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'vs-dark': '#090b10',
        'vs-light': '#0f111a',
      }
    },
  },
  plugins: [],
}