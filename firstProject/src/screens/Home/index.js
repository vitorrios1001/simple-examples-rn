import React from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native'

const menus = [
  { name: 'Boxes' },
  { name: 'IMC' },
  { name: 'Cards' },
  { name: 'List' },
  { name: 'Posts' },
]

const WIDTH = Dimensions.get('window').width

const Home = ({ navigation }) => {

  const columns = 2

  return (
    <ScrollView>
      <FlatList
        data={menus}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemMenu, { width: (WIDTH-16)/columns}]}
            onPress={() => navigation.navigate(item.name)}
          >
            <Text style={styles.textMenu}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        style={styles.list}
        numColumns={2}
        keyExtractor={item => item.name}
      />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flex: 1,
  },
  itemMenu: {
    padding: 16,
    margin: 4,
    height: 120,
    borderRadius: 8,
    backgroundColor: '#6959CD',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textMenu: {
    fontSize: 36,
    color: '#FFF',
  },
})
