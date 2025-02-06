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
      animation: {
         "fade-in-left": "fadeInLeft 1s ease-in-out",
         "fade-in-right": "fadeInRight 1s ease-in-out",
         "fade-in-top": "fadeInUp 1s ease-in-out",
         "fade-in-bottom": "fadeInDown 1s ease-in-out",
         "fade-in-left-lg": "fadeInLeft 1.5s ease-in-out",
         "fade-in-right-lg": "fadeInRight 1.5s ease-in-out",
         "fade-in-top-lg": "fadeInUp 1.5s ease-in-out",
         "fade-in-bottom-lg": "fadeInDown 1.5s ease-in-out"
      },
      keyframes: {
         fadeInLeft: {
            "0%": { opacity: '0', transform: 'translateX(30%)' },
            "100%": { opacity: '1', transform: 'translateX(0%)' },
         },
         fadeInRight: {
            "0%": { opacity: '0', transform: 'translateX(-30%)' },
            "100%": { opacity: '1', transform: 'translateX(0%)' },
         },
         fadeInUp: {
            "0%": { opacity: '0', transform: 'translateY(40%)' },
            "100%": { opacity: '1', transform: 'translateY(0%)' },
         },
         fadeInDown: {
            "0%": { opacity: '0', transform: 'translateY(-40%)' },
            "100%": { opacity: '1', transform: 'translateY(0%)' },
         },
      }
   },
  },
  plugins: [
   require('tailwindcss-animate')
  ],
}

