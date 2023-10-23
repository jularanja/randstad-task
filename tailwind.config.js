/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',"./node_modules/flowbite/**/*.js",'./index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0F1941',
        secondary:'#4d91e1 !important',
        white:'#ffffff',
      
      },
    },
  },
  plugins: [ require('flowbite/plugin')],
  safelist: [
    'primary',
    'secondary',
  ],
}

