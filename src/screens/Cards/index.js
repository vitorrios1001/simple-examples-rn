import React from 'react';

import { SafeAreaView, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Title, Body } from '../../components/ui/typograph';
import { Card } from '../../components';

const App = () => {

  const renderCards = () => (
    [1,2,3].map(card => (
      <Card key={card}>
        <View style={styles.containerImage}>
          <Image source={require('../../assets/images/react-native.png')} style={styles.image}/>
        </View>

        <View>
          <Title>{data.content.title}</Title>
          <Body>{data.content.description}</Body>
        </View>
      </Card>
    ))
  )

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>

       {renderCards()}
        
      </ScrollView>
    </SafeAreaView>
  );
};

const data = {
  content: {
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam.',
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: '100%',
    padding: 16
  },
  containerImage: {
    width: '100%',
    height: 200,
    padding: 8,
  },  
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default App;
