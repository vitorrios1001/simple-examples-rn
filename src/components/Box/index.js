import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const Box = ({ color = '#222' }) => {
  return (
    <View style={[styles.box, { backgroundColor: color}]}  />
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
  }
})
