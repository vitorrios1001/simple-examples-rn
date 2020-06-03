import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import { useTheme } from '../../contexts/themeContext'

const IconTheme = ({
  name,
  size,
  color,
}) => {
  const { theme } = useTheme()

  const { colors } = theme

  return (
    <>
      <Icon
        name={name}
        size={size || 22}
        color={color || colors.secondary}
      />
    </>
  )
}

export default IconTheme
