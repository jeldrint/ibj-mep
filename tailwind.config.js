/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        varela: 'Varela, san-serif',
        varelaRound: 'Varela Round, san-serif',
        roboto: 'Roboto, san-serif',
        playfair: 'Playfair Display SC, san-serif',
        openSans: 'Open Sans, san-serif',
        montserrat: 'Montserrat, san-serif',
        poppins: 'Poppins, san-serif',
        lato: 'Lato, san-serif',
        lineaBasic: 'linea-basic-10'
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

