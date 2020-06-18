import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, FlatList, SafeAreaView, Image } from 'react-native'

import { Row, Col } from '../../components/Grid'
import { CardTouchable } from '../../components'
import States from '../../components/States'

import { loadUsers } from '../../services/user'

import { SCREEN_NAMES } from '../../constants'

const Users = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { data, loading } = useSelector(state => state.user.users)

  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  const renderCard = ({ item }) => (
    <CardTouchable
      key={String(item.id)}
      onPress={() => navigation.navigate(SCREEN_NAMES.userDetails, { ...item })}
    >
      <Row>
        <Col>
          <Image style={styles.avatar} source={{ uri: item.avatar }} />
        </Col>
        <Col style={styles.content}>
          <Text style={styles.firstName}>
            {item.first_name}
          </Text>
          <Text style={styles.email}>
            {item.email}
          </Text>
        </Col>
      </Row>
    </CardTouchable>
  )

  return (
    <SafeAreaView>
      <States loading={loading} description="Loading users. Wait...">
        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={(item) => String(item.id)}
        />
      </States>
    </SafeAreaView>
  )
}

export default Users

const styles = StyleSheet.create({
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  firstName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#555',
  },
  email: {
    color: '#555',
    opacity: 0.7,
    flex: 1,
    marginTop: 4,
  }
})
