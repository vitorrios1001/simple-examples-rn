import React from 'react'
import { StyleSheet, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { Card } from '../../components'

const menus = [
  { name: 'Boxes' },
  { name: 'IMC' },
  { name: 'Cards' },
]

const Home = ({ navigation }) => {

  // const renderMenus = () => (
  //   menus.map((menu, idx) => (
  //     <TouchableOpacity onPress={() => navigation.navigate(menu.name)} >
  //       <Card>
  //         <Text>
  //           {menu.name}
  //         </Text>
  //       </Card>
  //     </TouchableOpacity>
  //   ))
  // )

  return (
    <ScrollView>
      <FlatList
        data={menus}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.name)} >
            <Card>
              <Text>
                {item.name}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
        numColumns={2}
        keyExtractor={item => item.name}
      />
      {/* {renderMenus()} */}
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})
