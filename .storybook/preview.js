import React from 'react'
import { ThemeProvider } from '@mui/material'
import { CssBaseline } from '@mui/material'
import { theme } from '../src/constants/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
]
