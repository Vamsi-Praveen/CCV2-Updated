export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:'Poppins,sans-serif'
      },
      animation:{
        scroll:'scroll 1.5s ease-in-out infinite',
        scrollSmall:'scroll-small 1.5s ease-in-out infinite',
      },
      keyframes:{
        'scroll':{
          '0%,100%':{ transform : 'translateY(15px)'},
          '50%':{ transform : 'translateY(0px)'}
        },
        'scroll-small':{
          '0%,100%':{ transform : 'translateY(8px)'},
          '50%':{ transform : 'translateY(0px)'}
        }
      }
    },
  },
  plugins: [],
}

