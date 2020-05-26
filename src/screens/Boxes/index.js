import React from 'react';

import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Box } from '../../components';

const Boxes = () => {
  const colors = ['#fac945', '#b48989', '#de3689']

  const renderBoxs = () => (
    colors.map((color, idx) => (
      <TouchableOpacity key={idx} onPress={() => alert(`A cor do card é: ${color}`)}>
        <Box color={color} />
      </TouchableOpacity>
    ))
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBoxList}>
        {renderBoxs()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: '100%',
    padding: 16
  },
  containerBoxList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});

export default Boxes;
