/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: { 
      backgroundImage: {
        'orange': "url('/images/mobile/image-stand-out.jpg')",
        'footer-texture': "url('/img/footer-texture.png')", 
        'lol':"url('/images/desktop/image-photography.jpg')",
        'mdr':"url('/images/desktop/image-graphic-design.jpg')"
              
      
      } ,
      colors: {
        'regal-blue': '#243c5a',
      }, 
   
    },
  },
  plugins: [], 
}
