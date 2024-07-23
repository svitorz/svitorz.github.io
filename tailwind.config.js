/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html}"],
  theme: {
    extend: {
      colors:
        { 
        'mauve': { DEFAULT: '#a7b0ca', 100: '#1c202e', 200: '#37405c', 300: '#53608a', 400: '#7885ae', 500: '#a7b0ca', 600: '#b8bfd4', 700: '#c9cfdf', 800: '#dbdfea', 900: '#edeff4' },
        'tropical_indigo': { DEFAULT: '#414073', 100: '#0d0d17', 200: '#1a1a2e', 300: '#272745', 400: '#34335b', 500: '#414073', 600: '#59589d', 700: '#8180b7', 800: '#abaacf', 900: '#d5d5e7' }, 
        'ultra_violet': { DEFAULT: '#00916e', 100: '#001d16', 200: '#00392c', 300: '#005642', 400: '#007258', 500: '#00916e', 600: '#00d8a6', 700: '#23ffcc', 800: '#6cffdd', 900: '#b6ffee' },  
        'space_cadet': { DEFAULT: '#e8fccf', 100: '#325606', 200: '#64ad0b', 300: '#94f122', 400: '#bef679', 500: '#e8fccf', 600: '#ecfdd9', 700: '#f1fde2', 800: '#f6feec', 900: '#fafef5' }, 
        'pale_azure': { DEFAULT: '#495159', 100: '#0f1012', 200: '#1d2124', 300: '#2c3136', 400: '#3b4148', 500: '#495159', 600: '#697480', 700: '#8d97a1', 800: '#b3bac1', 900: '#d9dce0' }

      }
      
    },
  },
  plugins: [],
}

