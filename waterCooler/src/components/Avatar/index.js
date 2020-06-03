import React from 'react'
import { StyleSheet, Image } from 'react-native'


const Avatar = ({ image }) => {
  return (
    <Image
      source={image}
      style={styles.image}
    />
  )
}

export default Avatar

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  }
})
