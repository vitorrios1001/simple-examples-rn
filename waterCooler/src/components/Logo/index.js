import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Body, Title } from '../typograph'
import { stylesDefault as sd } from '../../assets/styles/default'
import { useTheme } from '../../contexts/themeContext'

const Logo = () => {
  const { theme } = useTheme()

  const { colors } = theme

  return (
    <View style={[sd.COLUMN, styles.containerLogo]}>
      <Title fontSize={48} color={colors.secondary} style={styles.title}>
        Water Cooler
      </Title>
      <Body color={colors.secondary} style={styles.description}>
        enterprise messaging
      </Body>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
  containerLogo: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 32,
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  }
})
