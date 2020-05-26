import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'

import { Boxes, Cards, Home, IMC } from '../screens/'

const Stack = createStackNavigator()

const Routes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Boxes" component={Boxes} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="IMC" component={IMC} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
