import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { stylesDefault as sd } from '../../assets/styles/default'
import { useTheme } from '../../contexts/themeContext'

const Header = ({ left, center, right }) => {
  const { theme } = useTheme()

  const { colors } = theme

  return (
    <SafeAreaView style={[
      sd.ROW,
      styles.container,
      {
        backgroundColor: colors.primary,
      },
      ]}
    >
      <View style={styles.left}>
        {left}
      </View>
      <View style={styles.center}>
        {center}
      </View>
      <View style={styles.right}>
        {right}
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    minHeight: 60,
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
  },
  center: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  right: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
  },
})
