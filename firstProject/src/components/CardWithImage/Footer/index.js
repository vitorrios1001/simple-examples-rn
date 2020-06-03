import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { Title, Body } from '../../ui/typograph'
import { stylesDefault } from '../../../assets/styles/default'

const Footer = ({
  views,
  reads,
  comments,
  color,
}) => {
  const fontColor = '#FFF'

  return (
    <View style={[stylesDefault.ROW, styles.container, { backgroundColor: color }]}>
      <View style={[stylesDefault.COLUMN, styles.item]}>
        <View style={[stylesDefault.ROW]}>
          <Title color={fontColor}>
            {reads}
          </Title>
          <Title fontSize={16} color={fontColor}>
            m
          </Title>
        </View>
        <Body color={fontColor}>
          READ
        </Body>
      </View>
      <View style={[stylesDefault.COLUMN, styles.item, styles.borderHorizontal]}>
        <Title color={fontColor}>
          {views}
        </Title>
        <Body color={fontColor}>
          VIEWS
        </Body>
      </View>
      <View style={[stylesDefault.COLUMN, styles.item]}>
        <Title color={fontColor}>
          {comments}
        </Title>
        <Body color={fontColor}>
          COMMENTS
        </Body>
      </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 80,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  item: {
    alignItems: 'center',
    flex: 3,
  },
  borderHorizontal: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#999',
  },
})
