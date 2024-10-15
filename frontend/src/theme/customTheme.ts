import { createTheme, ThemeOptions } from '@mui/material'

// createTheme: Create a custom theme by inheriting from the default MUI theme
// and override the passing value

// ThemeOptions: Interface for MUI themes.

export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: 'rgba(168,85,247,.80)',
      main: 'rgba(168,85,247,.65)',
      dark: 'rgba(168,85,247,.28)'
    },
    background: {
      paper: '#151515',
      default: 'rgba(0,0,0,.96)'
    }
  }
})
