import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import CardMulticolor from '../../components/CardMulticolor'
import { ScrollView } from 'react-native-gesture-handler'

const ListCards = () => {
  const cards = [
    {
      color: '#800080',
      title: ' 6 places elements',
      time: '15:00',
      location: 'in this city',
      price: '8$ pour 2h',
      user: 'dede',
    },
    {
      color: '#808080',
      title: ' 6 places elements',
      time: '15:00',
      location: 'in this city',
      price: '8$ pour 2h',
      user: 'dede',
    },
    {
      color: '#000080',
      title: ' 6 places elements',
      time: '15:00',
      location: 'in this city',
      price: '8$ pour 2h',
      user: 'dede',
    },
    {
      color: '#800080',
      title: ' 6 places elements',
      time: '15:00',
      location: 'in this city',
      price: '8$ pour 2h',
      user: 'dede',
    },
    {
      color: '#800080',
      title: ' 6 places elements',
      time: '15:00',
      location: 'in this city',
      price: '8$ pour 2h',
      user: 'dede',
    },
    {
      color: '#808080',
      title: ' 6 places elements',
      time: '15:00',
      location: 'in this city',
      price: '8$ pour 2h',
      user: 'dede',
    },
    {
      color: '#000080',
      title: ' 6 places elements',
      time: '15:00',
      location: 'in this city',
      price: '8$ pour 2h',
      user: 'dede',
    },
    {
      color: '#800080',
      title: ' 6 places elements',
      time: '15:00',
      location: 'in this city',
      price: '8$ pour 2h',
      user: 'dede',
    },
  ]

  const renderList = () => (
    cards.map((card, idx) => (
      <CardMulticolor key={idx} {...card} />
    ))
  )

  return (
    <SafeAreaView>
      <ScrollView>
        {renderList()}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ListCards

const styles = StyleSheet.create({})
