import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Login, Contacts  } from '../screens'

import ChatTabs from './chatTabs'

const Stack = createStackNavigator()

const defaultConfig = {
  header: () => null,
}

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={defaultConfig} name="Login" component={Login} />
        <Stack.Screen options={defaultConfig} name="Chats" component={ChatTabs}/>
        <Stack.Screen options={defaultConfig} name="Contacts" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
