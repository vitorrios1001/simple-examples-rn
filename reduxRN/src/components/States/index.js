import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { Row, Col } from '../Grid'

const States = ({ children, loading, description = '' }) => {
  
  if (loading) {
    return (
      <Col style={styles.loader}>
        <ActivityIndicator size="large" color="blue" />
        <Text style={styles.description}>
          {description || 'Loading data. Wait...'}
        </Text>
      </Col>
    )
  }

  return children
}

export default States

const styles = StyleSheet.create({
  loader: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  description: {
    color: '#555',
    opacity: 0.7,
    textAlign: 'center',
    marginTop: 16,
  },
})
