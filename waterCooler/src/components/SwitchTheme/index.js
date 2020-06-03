import React from 'react'
import { Switch } from 'react-native'
import { useTheme, TypesTheme} from '../../contexts/themeContext'

const SwitchTheme = () => {
  const { theme, changeTheme } = useTheme()

  const { colors, type } = theme

  return (
    <>
      <Switch
        thumbColor={{ false: colors.primary, true: colors.secondary }}
        trackColor={{ false: colors.secondary, true: colors.primary }}
        value={type === TypesTheme.dark}
        onValueChange={() => changeTheme()}
      />
    </>
  )
}

export default SwitchTheme
