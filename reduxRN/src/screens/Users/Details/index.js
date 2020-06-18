import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { StyleSheet, Text, Linking, Image, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { CardTouchable } from '../../../components'
import { Col, Row } from '../../../components/Grid'
import States from '../../../components/States'

import { loadUserById } from '../../../services/user'

const UserDetails = (props) => {
  const route = useRoute()
  const dispatch = useDispatch()
  const { id } = route.params

  const { data: user, loading } = useSelector((state) => state.user.userDetails)

  useEffect(() => {
    dispatch(loadUserById(id))
  }, [])

  const handleSendEmail = async () => {
    await Linking.openURL(`mailto:${user.email}?subject=SendMail&body=Description`)
  }

  console.log('details', user)

  return (
    <CardTouchable style={styles.container}>
      <States loading={loading}>
        <View style={{ flex: 1 }}>
          <Row justify="center">
            <Image style={styles.avatar} source={{ uri: user.avatar }} />
          </Row>
          <Row style={styles.contentItem} justify="center">
            <Col align="center">
              <Text style={styles.label}>User</Text>
              <Text style={styles.name}>{user.last_name}, {user.first_name}</Text>
            </Col>
          </Row>
          <Row justify="center">
            <Col align="center">
              <Text style={styles.label}>Email</Text>
              <Text style={styles.email}>{user.email}</Text>
            </Col>
          </Row>
        </View>

        <Row style={styles.footer}>
          <Button 
            title="Send email"
            onPress={handleSendEmail}
          />
        </Row>
      </States>
    </CardTouchable>
  )
}

export default UserDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    height: 160,
    width: 160,
    borderRadius: 80,
    marginVertical: 32,
  },
  contentItem: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    opacity: 0.7,
  },
  label: {
    color: '#333',
    opacity: 0.5,
  },
  footer: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 8,
  },
  button: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: 'blue',
    width: '100%',
  },
  textButton: {
    color: '#FFF',
  }
})
