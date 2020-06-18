import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Row = ({
  children,
  style,
  justify = 'flex-start',
  align = 'flex-start',
}) => {
  return (
    <View
      style={[
        styles.row,
        {
          alignItems: align,
          justifyContent: justify,
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

const Col = ({
  children,
  style,
  justify = 'flex-start',
  align = 'flex-start',
}) => {
  return (
    <View
      style={[
        styles.col,
        {
          alignItems: align,
          justifyContent: justify,
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

export { Row, Col }

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
  }
})
