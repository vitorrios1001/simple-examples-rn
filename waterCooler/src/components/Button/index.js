import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Title } from '../typograph'
import { COLORS } from '../../constants/theme'
import { useTheme } from '../../contexts/themeContext'

const Button = ({ onPress, children, outlined }) => {
  const { theme } = useTheme()

  const { colors, type } = theme

  return (
    <TouchableOpacity
      style={[
        styles.commonButton,
        styles.buttonSignUp,
        {
          borderColor: colors.secondary,
          backgroundColor: colors.secondary,
        },
        outlined ? {
          backgroundColor: colors.primary
        } : undefined,
      ]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  commonButton: {
    height: 40,
    width: 250,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  outlined: {
    backgroundColor: COLORS.primary,
  },
})
