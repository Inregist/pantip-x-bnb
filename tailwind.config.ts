import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pantip: {
          50: '#F4F3FF',
          100: '#EBE9FE',
          200: '#D9D6FE',
          300: '#BDB4FE',
          400: '#9B8AFB',
          500: '#7C66FC',
          600: '#6D55FA',
          700: '#5C46E8',
          800: '#4C38C7',
          900: '#3E2DA2',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
