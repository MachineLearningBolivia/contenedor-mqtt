/** @type {import('tailwindcss').Config} */
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
export default {
  presets: [tailwindConfig],
  content: ['./index.html', './**/*.vue', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  theme: {

    extend: {
      colors: {
        primary: {
          50: '#f5f9ff',
          100: '#e9f3ff',
          200: '#c8e0ff',
          300: '#a6ccff',
          400: '#6ea1ff',
          500: '#3375ff',
          600: '#004f91',
          700: '#264ebf',
          800: '#1d3f99',
          900: '#001120',
        }
      },
    },
  },
  plugins: [],
};

