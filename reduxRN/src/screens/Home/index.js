import React from 'react'

import { Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { SCREEN_NAMES } from '../../constants'

const Home = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.counter)} style={styles.button}>
        <Text style={styles.textButton}>
          Counter
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home

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
})
