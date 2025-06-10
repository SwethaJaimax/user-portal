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
      },
      screens: {
        'custom-md': '900px', // Custom 900px breakpoint
        xs: '480px',
        'custom-1080': '1080px',
      },
      
    },
  },
  plugins: [],
}

