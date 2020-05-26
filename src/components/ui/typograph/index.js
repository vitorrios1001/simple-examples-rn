import React from 'react'

import { StyleSheet, Text } from 'react-native'

const Body = ({ children, color }) => {
  return (
    <Text style={[styles.common, styles.body, { color: color }]}>
      {children}
    </Text>
  )
}

const Title = ({ children, color }) => {
  return (
    <Text style={[styles.common, styles.title, { color: color }]}>
      {children}
    </Text>
  )
}

export { Title, Body }

const styles = StyleSheet.create({
  common: {
    color: '#222',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
})
