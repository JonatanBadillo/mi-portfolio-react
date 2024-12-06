/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          600: '#2a2a2a', 
          700: '#212121',
          800: '#1a1a1a',
        },
        primary: {
          400: '#your-color-value',
          500: '#60a5fa',
        }
      },
    },
  },
  plugins: [],
}