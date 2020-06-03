import React from 'react'
import { StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'

import { Body } from '../../components/typograph'

import ContactList from './ContactsList'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { useTheme } from '../../contexts/themeContext'
import SwitchTheme from '../../components/SwitchTheme'

const Contacts = ({ navigation }) => {
  const { theme } = useTheme()

  const { colors } = theme
  
  const toggleCancel = () => navigation.goBack()

  const renderButtonBack =  (
    <TouchableOpacity onPress={toggleCancel} >
      <Body color={colors.secondary} >Cancel</Body>
    </TouchableOpacity>
  )

  const renderButtonNewMessage = (
    <TouchableOpacity>
      <Body color={colors.secondary} fontSize={20}>New Message</Body>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView>
      <Header
        left={renderButtonBack}
        center={renderButtonNewMessage}
      />
      <Search />
      <SwitchTheme />
      <ContactList />
    </SafeAreaView>
  )
}

export default Contacts
