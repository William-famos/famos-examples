/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        '---gray-700': "#0D0D0D",
        '---gray-600': "#1A1A1A",
        '---gray-500': "#262626",
        '---gray-400':"#333333",
        '---gray-300': "#808080",
        '---gray-200': "#D9D9D9",
        '---gray-100':"#F2F2F2",
        '---green-500':"#00875f",
        '---green-300':"#00837E",
        
        danger:'#F75A68',

        blueDark: '#1E6F9F',
        bluey: '#4EA8DE',
        purpleDark: '#5E60CE',
        purple: '#8284FA',

        '--gray-100': "#e1e1e6",
        '--gray-300': "#c4c4cc",
        '--gray-400': "#8d8d99",
        '--gray-500':'#7c7c8a',
        '--gray-600':"#323238",
        '--gray-700': "#29292e",
        '--gray-800': "#202024",
        '--gray-900':"#121214",
        
        '--green-300':"#00837E",
        '--green-500':"#00875f",
        '--green-700':'#015f43',

        '--red-500':'#F75A68',
        '---red-500':'#ab222e',
        '--red-700':'#7a1921',
        
        '---yellow-500':'#fba94c',

        'grandBlue' : '#015fa3'
      }
    },
  },
  plugins: [],
}

