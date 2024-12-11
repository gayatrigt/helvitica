// lib/fonts.ts
import localFont from 'next/font/local'

// Regular Helvetica Family
const helveticaRegular = localFont({
  src: '../public/fonts/helvitica/Helvetica.ttf',
  variable: '--font-helvetica-regular'
})

const helveticaBold = localFont({
  src: '../public/fonts/helvitica/Helvetica-Bold.ttf',
  variable: '--font-helvetica-bold'
})

const helveticaOblique = localFont({
  src: '../public/fonts/helvitica/Helvetica-Oblique.ttf',
  variable: '--font-helvetica-oblique'
})

const helveticaBoldOblique = localFont({
  src: '../public/fonts/helvitica/Helvetica-BoldOblique.ttf',
  variable: '--font-helvetica-bold-oblique'
})

const helveticaLight = localFont({
  src: '../public/fonts/helvitica/helvetica-light-587ebe5a59211.ttf',
  variable: '--font-helvetica-light'
})

const helveticaCompressed = localFont({
  src: '../public/fonts/helvitica/helvetica-compressed-5871d14b6903a.otf',
  variable: '--font-helvetica-compressed'
})

const helveticaRoundedBold = localFont({
  src: '../public/fonts/helvitica/helvetica-rounded-bold-5871d05ead8de.otf',
  variable: '--font-helvetica-rounded-bold'
})

// Helvetica Neue Family
const helveticaNeueUltraLight = localFont({
  src: '../public/fonts/neu/HelveticaNeueUltraLight.otf',
  variable: '--font-helvetica-neue-ultra-light'
})

const helveticaNeueUltraLightItalic = localFont({
  src: '../public/fonts/neu/HelveticaNeueUltraLightItalic.otf',
  variable: '--font-helvetica-neue-ultra-light-italic'
})

const helveticaNeueThin = localFont({
  src: '../public/fonts/neu/HelveticaNeueThin.otf',
  variable: '--font-helvetica-neue-thin'
})

const helveticaNeueThinItalic = localFont({
  src: '../public/fonts/neu/HelveticaNeueThinItalic.otf',
  variable: '--font-helvetica-neue-thin-italic'
})

const helveticaNeueLight = localFont({
  src: '../public/fonts/neu/HelveticaNeueLight.otf',
  variable: '--font-helvetica-neue-light'
})

const helveticaNeueLightItalic = localFont({
  src: '../public/fonts/neu/HelveticaNeueLightItalic.otf',
  variable: '--font-helvetica-neue-light-italic'
})

const helveticaNeueRoman = localFont({
  src: '../public/fonts/neu/HelveticaNeueRoman.otf',
  variable: '--font-helvetica-neue-roman'
})

const helveticaNeueItalic = localFont({
  src: '../public/fonts/neu/HelveticaNeueItalic.ttf',
  variable: '--font-helvetica-neue-italic'
})

const helveticaNeueMedium = localFont({
  src: '../public/fonts/neu/HelveticaNeueMedium.otf',
  variable: '--font-helvetica-neue-medium'
})

const helveticaNeueMediumItalic = localFont({
  src: '../public/fonts/neu/HelveticaNeueMediumItalic.otf',
  variable: '--font-helvetica-neue-medium-italic'
})

const helveticaNeueBold = localFont({
  src: '../public/fonts/neu/HelveticaNeueBold.otf',
  variable: '--font-helvetica-neue-bold'
})

const helveticaNeueBoldItalic = localFont({
  src: '../public/fonts/neu/HelveticaNeueBoldItalic.otf',
  variable: '--font-helvetica-neue-bold-italic'
})

const helveticaNeueHeavy = localFont({
  src: '../public/fonts/neu/HelveticaNeueHeavy.otf',
  variable: '--font-helvetica-neue-heavy'
})

const helveticaNeueHeavyItalic = localFont({
  src: '../public/fonts/neu/HelveticaNeueHeavyItalic.otf',
  variable: '--font-helvetica-neue-heavy-italic'
})

const helveticaNeueBlack = localFont({
  src: '../public/fonts/neu/HelveticaNeueBlack.otf',
  variable: '--font-helvetica-neue-black'
})

const helveticaNeueBlackItalic = localFont({
  src: '../public/fonts/neu/HelveticaNeueBlackItalic.otf',
  variable: '--font-helvetica-neue-black-italic'
})

export const helvetica = {
  regular: helveticaRegular,
  bold: helveticaBold,
  oblique: helveticaOblique,
  boldOblique: helveticaBoldOblique,
  light: helveticaLight,
  compressed: helveticaCompressed,
  roundedBold: helveticaRoundedBold
}

export const helveticaNeue = {
  ultraLight: helveticaNeueUltraLight,
  ultraLightItalic: helveticaNeueUltraLightItalic,
  thin: helveticaNeueThin,
  thinItalic: helveticaNeueThinItalic,
  light: helveticaNeueLight,
  lightItalic: helveticaNeueLightItalic,
  roman: helveticaNeueRoman,
  italic: helveticaNeueItalic,
  medium: helveticaNeueMedium,
  mediumItalic: helveticaNeueMediumItalic,
  bold: helveticaNeueBold,
  boldItalic: helveticaNeueBoldItalic,
  heavy: helveticaNeueHeavy,
  heavyItalic: helveticaNeueHeavyItalic,
  black: helveticaNeueBlack,
  blackItalic: helveticaNeueBlackItalic
}