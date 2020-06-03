import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'

import Logo from '../../components/Logo'
import Button from '../../components/Button'
import Switch from '../../components/SwitchTheme'
import { Title } from '../../components/typograph'

import { stylesDefault as sd } from '../../assets/styles/default'
import { useTheme, TypesTheme } from '../../contexts/themeContext'
import StatusBarStyled from '../../components/StatusBarStyled'

const Login = ({ navigation }) => {
  const { theme, changeTheme } = useTheme()

  const { colors, type } = theme

  return (
    <View style={[sd.COLUMN, styles.container, { backgroundColor: colors.primary }]}>
      <StatusBarStyled />
      
      <View style={[styles.containerLogo,]}>
        <Logo />
      </View>

      <Switch
        value={type === TypesTheme.dark}
        onChangeValue={() => changeTheme()}
      />

      <View style={styles.containerButtons}>
        <Button onPress={() => navigation.navigate('Chats')}>
          <Title color={colors.primary} >Sign Up</Title>
        </Button>
        <Button outlined onPress={() => navigation.navigate('Chats')}>
          <Title color={colors.secondary} >Login</Title>
        </Button>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerButtons: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  }, 
  commonButton: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  containerLogo: {
    display: 'flex',
    alignItems: 'center',
  }
})
