// Prints out the typography css so we can copy into typography.css and like not have that fucking FOUC.

const Typography = require('typography')

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.55,
  headerFontFamily: ['Space Mono', 'monospace'],
  bodyFontFamily: ['Space Mono', 'monospace'],
})

if (require.main === module) {
  ;(async () => {
    let css = typography.toString()
    console.log(css)
  })()
}
