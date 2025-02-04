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
      animation: {
         "fade-in-left": "fadeInLeft 1.5s ease",
         "fade-in-right": "fadeInRight 1.5s ease-in-out infinite",
         "fade-in-top": "fadeInUp 2s ease",
         "fade-in-bottom": "fadeInDown 1.5s ease-in-out infinite"
      },
      keyframes: {
         fadeInLeft: {
            "0%": { opacity: '0', transform: 'translateX(30%)' },
            "100%": { opacity: '1', transform: 'translateX(0%)' },
         },
         fadeInRight: {
            "0%": { opacity: '0', transform: 'translateX(90%)' },
            "100%": { opacity: '1', transform: 'translateX(0%)' },
         },
         fadeInUp: {
            "0%": { opacity: '0', transform: 'translateY(30%)' },
            "100%": { opacity: '1', transform: 'translateY(0%)' },
         },
         fadeInDown: {
            "0%": { opacity: '0', transform: 'translateX(70%)' },
            "100%": { opacity: '1', transform: 'translateX(30%)' },
         },
      }
   },
  },
  plugins: [],
}

