module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Open Sans']
      },
      colors :{
        nittim : "#11CDEF"
      }, 
      gridTemplatesColumns:{
        "1/5":"1fr 5fr"
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
