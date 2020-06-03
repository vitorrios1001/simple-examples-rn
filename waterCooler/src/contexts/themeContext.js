import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext({})

export const TypesTheme = {
  light: 'light',
  dark: 'dark',
}

const THEME = {
  [TypesTheme.light]: {
    type: TypesTheme.light,
    colors: {
      primary: '#0AD3FF',
      secondary: '#FFF',
    },
    statusBarColor: '#0AD3FF',
  },
  [TypesTheme.dark]: {
    type: TypesTheme.dark,
    colors: {
      primary: '#FFF',
      secondary: '#0AD3FF',
    },
    statusBarColor: '#0AD3FF',
  },
}

export const ThemeProvider = ({ children }) => {
  const [themeSelected, setTheme] = useState(THEME.light)

  const changeTheme = () => {
    setTheme(themeSelected.type === TypesTheme.light ? THEME[TypesTheme.dark] : THEME[TypesTheme.light])
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: themeSelected,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  return context
}

export default ThemeContext
