import React from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'

import ChatList from './ChatList'
import Search from '../../components/Search'
import Header from '../../components/Header'
import SwitchTheme from '../../components/SwitchTheme'
import IconTheme from '../../components/IconTheme'
import StatusBarStyled from '../../components/StatusBarStyled'

const Chats = ({ navigation }) => {
  const renderFakeLogo = (
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <IconTheme name="cloud" size={42} />
    </TouchableOpacity>
  )

  const renderFakeAdd = (
    <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
      <IconTheme name="plus" size={20} />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBarStyled />
      <Header
        center={renderFakeLogo}
        right={renderFakeAdd}
      />
      <Search />
      <SwitchTheme />
      <ChatList />
    </SafeAreaView>
  )
}

export default Chats
