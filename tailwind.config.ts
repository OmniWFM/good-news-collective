import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx,jk,jsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        cream: '#D4CABC',
        olive: '#616456',
        burgUndy: '#501A26',
      },
      fontFamily: {
        display: ['Bionzhe Display', 'sans-serif'],
        body: ['Marjourry Regular', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0': { opacity: '0', transform: 'translateY(40px)' },
          '100': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0': { opacity: '0' },
          '100': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;