/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        red: {
          500: '#FF0000',
          600: '#FF1A1A',
          700: '#FF3333',
        },
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.red.500), 0 0 20px theme(colors.red.500)',
        'neon-lg': '0 0 10px theme(colors.red.500), 0 0 30px theme(colors.red.500)',
      },
    },
  },
  plugins: [],
};