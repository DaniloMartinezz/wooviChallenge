/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: '#4D4D4D',
          secondary: '#AFAFAF',
          light: '#B2B2B2',
          green: '#03D69D',
          white: '#FFFFFF',
        },
        border: '#E5E5E5',
        flagblue: '#133A6F',
      },
      spacing: {
        '6': '1.5rem',
      },
      transformOrigin: {
        'left': 'left',
      },
      borderRadius: {
        'md': '0.375rem',
      },
      fontSize: {
        'xs': '0.75rem',
      },
    },
  },
  plugins: [],
}
