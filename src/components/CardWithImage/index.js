import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Title, Body } from '../ui/typograph'
import Footer from './Footer'
import { stylesDefault } from '../../assets/styles/default'

const CardWithImage = ({
  time,
  title,
  content,
  reads,
  views,
  comments,
  color,
  image,
}) => {
  return (
    <View style={[stylesDefault.COLUMN, stylesDefault.SHADOW, styles.container]}>
      <View style={styles.header}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={[stylesDefault.COLUMN, styles.containerContent]}>
        <View style={styles.headerContent}>
          <Title textAlign="center" fontSize={16} color={color}>
            {time}
          </Title>
          <Title textAlign="center" fontSize={32}>
            {title}
          </Title>
        </View>
        <View style={styles.content}>
          <Body color="#999" fontSize={18} textAlign="center">
            {content}
          </Body>
        </View>
      </View>
      <Footer
        views={views}
        reads={reads}
        comments={comments}
        color={color}
      />
    </View>
  )
}

export default CardWithImage

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    margin: 16,
  },
  image: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  containerContent: {
    alignItems: 'center',
    minHeight: 200,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
  },
  headerContent: {
    paddingTop: 16,
  },
  content: {
    padding: 24,
  },
})
