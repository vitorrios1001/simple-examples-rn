import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { stylesDefault } from '../../assets/styles/default'
import { Title, Body } from '../ui/typograph'

const CardMulticolor = ({
  color = '#800080',
  title = ' 6 places elements',
  time = '15:00',
  location = 'in this city',
  price = '8$ pour 2h',
  user = 'dede',
}) => {
  return (
    <View style={[stylesDefault.ROW, stylesDefault.SHADOW, styles.container]}>
      <View style={[stylesDefault.COLUMN, styles.time, { backgroundColor: color }]}>
        <Title fontSize={18} color="#FFF">{time}</Title>
      </View>
      <View style={[stylesDefault.COLUMN, styles.content]}>
        <View style={[stylesDefault.ROW, styles.contentTitle]}>
          <Title color={color} fontSize={16}>Title</Title>
          <Body color="#555">{title}</Body>
        </View>
        <View style={[stylesDefault.ROW, styles.location]}>
          <Image style={styles.icon} source={require('../../assets/images/pin.png')} />
          <Body color="#999">
            {location}
          </Body>
        </View>
        <View style={styles.price}>
          <Body color="#0000FF">
            {price}
          </Body>
        </View>
        <View style={[stylesDefault.ROW, styles.user]}>
          <Image style={styles.avatar} source={require('../../assets/images/avatar.png')} />
          <Body color="#999">
            {user}
          </Body>
        </View>
      </View>
    </View>
  )
}

export default CardMulticolor

const styles = StyleSheet.create({
  container: {
    margin: 8,
    backgroundColor: '#FFF',
    borderRadius: 16,
  },
  time: {
    justifyContent: 'center',
    padding: 16,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  content: {
    padding: 12,
  },
  contentTitle: {
    alignItems: 'center',
    marginBottom: 4,
  },
  location: {
    marginBottom: 4,
  },
  descriptionLocation: {
    marginLeft: 4,
  },
  price: {
    marginBottom: 4,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 2,
  },
  avatar: {
    width: 25,
    height: 25,
    marginHorizontal: 2,
  },
})
