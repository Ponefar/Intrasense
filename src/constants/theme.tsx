import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#FBC0B9',
      main: '#ED7465',
      dark: '#A02213',
    },
    secondary: {
      light: '#BABDFC',
      main: '#2C19CD',
      dark: '#1812A0',
    },
    text: {
      primary: '#F4F7FF',
      secondary: '#B5B9D9',
    },
    error: {
      light: '#FFE7E4',
      main: '#A02213',
    },
    warning: {
      light: '#FEF9D0',
      main: '#60590D',
    },
    success: {
      light: '#E7F4EC',
      main: '#18753C',
    },
    background: {
      default: '#fff',
    },
  },
})
