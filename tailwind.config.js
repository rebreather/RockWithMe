/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,cjs,mjs,}'],
  content: [],
  theme: {
    extend: {
      scale: {
        '130': '1.3',
      },
      colors: {
        'rosequarts': '#F7CAC9',
        'serenity': '#92A8D1',
      }
    },
  },
  plugins: [],
}

