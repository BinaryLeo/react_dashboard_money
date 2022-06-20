const { borderRadius } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand:{
          300: '#01537E',
          500:'#01537E',

        }
      },
      borderRadius:{
        md:'4px',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
}
