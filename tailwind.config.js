/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        'primary': {
          DEFAULT: '#FF7F00',
          dark: '#E67300',
          light: '#FF9933',
          50: '#FFF2E5',
          100: '#FFE5CC',
          200: '#FFCC99',
          300: '#FFB266',
          400: '#FF9933',
          500: '#FF7F00',
          600: '#E67300',
          700: '#CC6600',
          800: '#B35900',
          900: '#994D00'
        }
      },
      fontFamily: {
        sans: ['Microgramma', 'Chakra Petch', 'sans-serif'],
        display: ['Microgramma', 'Chakra Petch', 'sans-serif'],
      },
      boxShadow: {
        'neumorph': '12px 12px 24px #0a0a0a, -12px -12px 24px #262626',
        'neumorph-sm': '5px 5px 10px #0a0a0a, -5px -5px 10px #262626',
        'neumorph-inset': 'inset 5px 5px 10px #0a0a0a, inset -5px -5px 10px #262626',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};