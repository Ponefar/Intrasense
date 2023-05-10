import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { theme } from '../src/constants/theme'

import '../src/styles/styles.css'
import '../src/styles/fonts.css'
import ScrollToTop from '@/components/scrollToTop/ScrollToTop'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
