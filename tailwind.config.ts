import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontFamily:{
      'montserrat' : ["Montserrat","sans-serif"]
     },
     fontSize:{
      heading : "4.375rem",
      subheading : '2rem',
      mainHeading:"70px",
     },
     borderRadius:{
      btnRadius:"10px",
     },
     lineHeight: {
      subLeading: "3.2rem",
      mainLeading:"91px"
     },
     colors: {
      primary: "#2E2F2F", 
      secondry:"#252525",
      ternary: '#8CB83E',
      bgLight:"#24242480",
      textWhite:"#FFFFFF",
      bgbtn:"#EA5B43",
      transparent:"#e5e7eb",
      grayColor:"#757272",
      bgGray:"#F5F5F5",
    },
   
    },
  },
  plugins: [],
}


export default config
