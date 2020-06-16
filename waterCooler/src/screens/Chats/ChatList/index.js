import React from 'react'
import { StyleSheet, FlatList, ScrollView } from 'react-native'

import Chat from '../../../components/Chat'

import data from './data'

const ChatList = () => {
  const renderItem = ({ item }, index) => (
    <Chat key={index} {...item} />
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

export default ChatList

const styles = StyleSheet.create({})
