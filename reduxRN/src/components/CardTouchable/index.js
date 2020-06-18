import React from 'react'
import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'

const Card = ({
  children,
  onPress,
  style,
}) => {
  if (onPress) {
    return (
      <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
        {children}
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={[styles.card, style]}>
      {children}
    </SafeAreaView>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
})
