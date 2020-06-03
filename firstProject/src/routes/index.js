import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Boxes, Cards, Home, IMC, ListCards, Posts } from '../screens/'

const Stack = createStackNavigator()

const Routes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        
        <Stack.Screen name="Boxes" component={Boxes} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="IMC" component={IMC} />
        <Stack.Screen name="List" component={ListCards} />
        <Stack.Screen name="Posts" component={Posts} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
