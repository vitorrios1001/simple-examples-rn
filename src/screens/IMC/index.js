import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import IMC from '../../apps/IMC';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <IMC />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: '100%',
    padding: 16
  },
});

export default App;
