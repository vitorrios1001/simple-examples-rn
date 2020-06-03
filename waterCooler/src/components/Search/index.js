import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { COLORS } from '../../constants/theme'
import { useTheme, TypesTheme } from '../../contexts/themeContext'
import { useRoute, useNavigation } from '@react-navigation/native'

const Search = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const { theme } = useTheme()
  const [text, setText] = useState('')

  useEffect(() => {
    const hasText = Boolean(text)   
    const routeName = route.name

    // console.log(hasText, routeName)

    // if (hasText && routeName !== 'Contacts') {
    //   navigation.navigate('Contacts')
    // } else if (!hasText && routeName !== 'Chats') {
    //   navigation.goBack()
    // }

  }, [text, route.name])
  
  const { colors } = theme

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <TextInput
        onChangeText={(textChanged) => setText(textChanged)}
        style={[
          styles.input,
          {
            backgroundColor: '#FFF',
            borderColor: colors.secondary,
            borderWidth: 1,
          }]}
        placeholder="Search for User Name"
        value={text}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 8,
    minHeight: 50,
  },
  input: {
    display: 'flex',
    flex: 1,
    // backgroundColor: '#FFF',
    borderRadius: 8,
    fontSize: 14,
    padding: 4,
    textAlign: 'center',
  },
})
