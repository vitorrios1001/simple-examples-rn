import React from 'react'

import Routes from './routes'
import { ThemeProvider } from './contexts/themeContext'

const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}

export default App

