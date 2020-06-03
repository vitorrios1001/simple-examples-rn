import React from 'react'
import { StyleSheet, FlatList, ScrollView } from 'react-native'

import Chat from '../../../components/Chat'

import data from './data'

const ContactList = () => {
  const renderItem = ({ item }) => (
    <Chat {...item} />
  )

  return (
    <ScrollView>
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
      />
    </ScrollView>
  )
}

export default ContactList

const styles = StyleSheet.create({})
