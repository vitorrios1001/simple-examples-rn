import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, FlatList, SafeAreaView, Image, TouchableOpacity, ActivityIndicator, View } from 'react-native'

import { Row, Col } from '../../components/Grid'
import { CardTouchable } from '../../components'
import States from '../../components/States'

import { loadUsers } from '../../services/userService'

import { SCREEN_NAMES } from '../../constants'

const Users = () => {
  const [page, setPage] = useState(1)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { data, loading } = useSelector(state => state.user.users)

  useEffect(() => {
    dispatch(loadUsers(page))
  }, [page])

  const loadMore = () => {
    setPage(page + 1)
  }

  const renderCard = ({ item }) => (
    <CardTouchable
      key={String(item.id)}
      onPress={() => navigation.navigate(SCREEN_NAMES.userDetails, { id: item.id })}
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
        <Col>
          <View style={[styles.status, { backgroundColor: item.active ? 'green' : 'red' }]} />
        </Col>
      </Row>
    </CardTouchable>
  )

  const renderFooter = () => {
    if (data.length === 0) {
      return null
    }

    return (
      <Col align="center">
        <ActivityIndicator size="large" />
        <Text style={{ fontSize: 16 }}>Loading more...</Text>
      </Col>
    )
  }

  return (
    <SafeAreaView>
      <States loading={loading && data.length === 0} description="Loading users. Wait...">
        <FlatList
          data={data}
          renderItem={renderCard}
          onEndReached={loadMore}
          onEndReachedThreshold={0.2}
          keyExtractor={(item, index) => String(`${item.id}-${index}`)}
          ListFooterComponent={renderFooter}
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
  },
  buttonFooter: {
    backgroundColor: 'blue',
    width: 200,
    padding: 8,
  },
  textButton: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center'
  },
  status: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
})
