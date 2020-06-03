import React from 'react'

import { StyleSheet, Text } from 'react-native'

const Body = ({
  children,
  color = '#555',
  fontSize = 16,
  textAlign = 'left',
}) => {
  return (
    <Text style={[{ color, fontSize, textAlign }]}>
      {children}
    </Text>
  )
}

const Title = ({
  children,
  color = '#555',
  fontSize = 24,
  textAlign = 'left',
}) => {
  return (
    <Text style={[styles.title, { color, fontSize, textAlign, }]}>
      {children}
    </Text>
  )
}

export { Title, Body }

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
})
