import Typography from "typography"

const typography = new Typography({
  baseFontSize: '16px',
  scaleRatio: 3.5,
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['300', '400', '700'],
    },
  ],
  bodyFontFamily: ['Raleway', 'sans-serif'],
})

export default typography