import { FC, ReactElement } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { customTheme } from './theme/customTheme'
import DashboardPage from './pages/dashboard'

// App is a functional component and it returns a React element

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline /> {/* Reset the default CSS value base on the theme we passed into the ThemeProvider */}
      <DashboardPage />
    </ThemeProvider>
  )
}

export default App
