import React from 'react'

import { Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { SCREEN_NAMES, ROUTES } from '../../constants'

const Home = ({ navigation }) => {
  const renderMenuScreens = (
    ROUTES
      .filter(route => route.isMenu)
      .map(({ name }) => (
        <TouchableOpacity
          key={name}
          onPress={() => navigation.navigate(name)}
          style={styles.button}
        >
          <Text style={styles.textButton}>
            {name}
          </Text>
        </TouchableOpacity>
    ))
  )

  return (
    <SafeAreaView style={styles.container}>
      {renderMenuScreens}
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
    margin: 16,
  },
  textButton: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: '700',
    textAlign: 'center',
  },
})
