/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B4332',
        accent: '#2D6A4F',
        muted: '#D8F3DC',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
