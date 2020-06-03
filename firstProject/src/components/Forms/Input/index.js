import React from 'react'
import { StyleSheet, TextInput, Keyboard } from 'react-native'

const Input = (props) => {
  return (
    <TextInput
      style={styles.text}
      keyboardType="number-pad"
      {...props}
    />
  )
}

export default Input

const styles = StyleSheet.create({
  text: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: '#999',
    padding: 8,
    fontSize: 32,
    margin: 8,
    borderRadius: 8,
  },
})
