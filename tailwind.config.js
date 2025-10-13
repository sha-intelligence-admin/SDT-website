/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx,mdx}',
    './app/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#171717',
        primary: '#000000',
        secondary: '#476dd2',
      },
      fontFamily: {
        'sans': ['Google Sans Text', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}