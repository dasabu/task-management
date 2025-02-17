import { FC, ReactElement } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { customTheme } from './theme/customTheme'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import ComposeContext from './context/Compose.context'
import { rootContext } from './context/root.context'
import Dashboard from './pages/Dashboard'

const queryClient = new QueryClient()

// App is a functional component and it returns a React element
const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />{' '}
          {/* Reset the default CSS value base on the theme we passed into the ThemeProvider */}
          <Dashboard />
        </ThemeProvider>
      </ComposeContext>
    </QueryClientProvider>
  )
}

export default App
