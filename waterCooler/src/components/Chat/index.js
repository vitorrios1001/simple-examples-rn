import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { stylesDefault as sd } from '../../assets/styles/default'

import { Title, Body } from '../typograph'

import Avatar from '../Avatar'

const Chat = ({
  avatar,
  name,
  dateLastUpdate,
  lastChat,
  describeContact,
}) => {
  return (
    <View style={[sd.ROW, styles.container]}>
      <Avatar image={avatar} />
      <View style={[sd.ROW, styles.containerContent]}>
        <View style={[sd.COLUMN, styles.content]}>

          <View style={[sd.ROW, styles.header]}>
            <Title fontSize={16}>
              {name}
            </Title>
            <Body fontSize={14} color="#888">
              {dateLastUpdate}
            </Body>
          </View>

         
          <Body fontSize={14} color={describeContact ? '#777' : undefined}>
            {lastChat || describeContact}
          </Body>
      
        </View>
        <View style={[sd.COLUMN, styles.containerButton]}>
          <Icon name="chevron-right" color="#555" />
        </View>
      </View>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginTop: 8,
    padding: 4,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginHorizontal: 12,
  },
  containerContent: {
    justifyContent: 'space-between',
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 8,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  containerButton: {
    width: 15,
    justifyContent: 'center',
  },  
})
