import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../src/GlobalStyles'

const theme = {
  main: '#42BBFF',
  mainDark: '#061C4B',
  mainDark2: '#154A89',
  black: '#0E0E0E',
  white: '#FCFCFC',
  background: '#FBFCFF',

  gray90: '#F0F0F0',
  gray80: '#C5C5C5',
  gray70: '#A7A7A7',
  gray60: '#8A8A8A',
  gray50: '#6D6D6D',
  gray40: '#575757',
  gray30: '#414141',
  gray20: '#2C2C2C',
  gray10: '#161616',

  blue90: '#D9F1FF',
  blue80: '#B3E4FF',
  blue70: '#8ED6FF',
  blue60: '#68C9FF',
  blue50: '#42BBFF',
  blue40: '#3584CC',
  blue30: '#285599',
  blue20: '#1A2F66',
  blue10: '#0D1833',
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
