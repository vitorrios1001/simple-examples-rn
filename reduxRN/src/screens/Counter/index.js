import React from 'react'

import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { Actions } from '../../store/ducks/counter'

const Counter = () => {
  const dispatch = useDispatch()
  const { count } = useSelector((state) => state.counter)
  
  const handleMore = () => {
    dispatch(Actions.more())
  }

  const handleLess = () => {
    dispatch(Actions.less())
  }

  const handleReset = () => {
    dispatch(Actions.reset())
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleMore} style={styles.button}>
          <Text style={styles.textButton}>
            + More
          </Text>
        </TouchableOpacity>
        <Text style={styles.result}>
          {count}
        </Text>
        <TouchableOpacity onPress={handleLess} style={styles.button}>
          <Text style={styles.textButton}>
            - Less
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleReset} style={[styles.button, { width: '100%' }]}>
        <Text style={styles.textButton}>
          Reset
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    padding: 16,
    backgroundColor: 'blue',
    width: 200,
  },
  textButton: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: '700',
    textAlign: 'center',
  },
  result: {
    paddingVertical: 32,
    fontSize: 64,
    color: '#555'
  }
})
