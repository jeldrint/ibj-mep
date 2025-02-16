import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        varela: 'Varela',
        varelaRound: 'Varela Round',
        roboto: 'Roboto',
        playfair: 'Playfair Display SC',
        openSans: 'Open Sans',
        montserrat: 'Montserrat',
        poppins: 'Poppins',
        lato: 'Lato',
      },
      animationDuration: {
         "1.5s": "1.5s",
         "2s": "2s",
      },
   },
  },
  plugins: [
   require('tailwindcss-animate')
  ],
}

