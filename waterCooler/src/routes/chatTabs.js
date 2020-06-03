import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { Chats} from '../screens'

const Tab = createMaterialBottomTabNavigator()

const EmptyTab = () => (
  <View>
    <Text>Fake</Text>
  </View>
)

const ChatTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={Chats}  
        options={{
          tabBarIcon: 'wechat'
        }}
      />
      <Tab.Screen name="EmptyTab1" component={EmptyTab} 
        options={{
          tabBarIcon: 'group'
        }}
      />
      <Tab.Screen name="EmptyTab2" component={EmptyTab}  
        options={{
          tabBarIcon: 'widgets'
        }}
      />
      <Tab.Screen name="EmptyTab3" component={EmptyTab}  
        options={{
          tabBarIcon: 'webpack'
        }}
      />
    </Tab.Navigator>
  )
}

export default ChatTabs

const styles = StyleSheet.create({})
