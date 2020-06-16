import React from 'react'
import { StatusBar } from 'react-native'
import { useTheme, TypesTheme } from '../../contexts/themeContext'

const StatusBarStyled = () => {
  const { theme } = useTheme()

  const { colors, type } = theme

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={colors.primary}
        barStyle={type === TypesTheme.light ? 'light-content' : 'dark-content'}
      /> 
    </>
  )
}

export default StatusBarStyled
