import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = ({ children }) => {
  return (
    <View style={styles.containerCard}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  containerCard: {
    borderRadius: 8,
    borderColor: '#888',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 8,
  }
})
