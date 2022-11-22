/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
     extend: { 
      fontFamily: {
        'mely': 'Barlow',
        'mel': 'Fraunces',
      },
  
      backgroundImage: {
        'landing-image': "url('/images/mobile/image-gallery-orange.jpg')",
      },
     
    },
    },
    plugins: [],
    } 
