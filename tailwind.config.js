/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        coffee: {
          dark: '#6d4c41',
          medium: '#8d6e63',
          light: '#a98266',
          highlight: 'rgba(109, 76, 65, 0.06)',
        },
        green: {
          primary: '#3d8b3d',
        },
      },
    },
  },
  plugins: [],
}