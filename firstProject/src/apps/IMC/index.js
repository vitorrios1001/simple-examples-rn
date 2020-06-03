import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import { Input } from '../../components/Forms'
import { Body, Title } from '../../components/ui/typograph'

const initialForm = {
  peso: null,
  altura: null,
}

const IMC = () => {
  const [form, setForm] = useState(initialForm)
  const [result, setResult] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleCalc = () => {
    try {
      setLoading(true)
      const { peso, altura } = form
      
      let pesoF, alturaF;

      pesoF = parseFloat(peso.replace(',', '.'))
      alturaF = parseFloat(altura.replace(',', '.'))

      const res = pesoF / (alturaF * alturaF)

      setTimeout(() => {
        setResult(res.toFixed(4))
        setLoading(false)
      }, 2000)
    } catch (error) {
      alert('Ocorreu um erro ao tentar calcular seu IMC')
    }
  }

  return (
    <ScrollView>
      <Title>
        Calculo de IMC
      </Title>
      <Body>Peso</Body>
      <Input value={form.peso} onChangeText={text => setForm({ ...form, peso: text })} />
      <Body>Altura</Body>
      <Input value={form.altura} onChangeText={text => setForm({ ...form, altura: text })} />

      <View style={styles.containerButton}>
        <TouchableOpacity disabled={loading} style={styles.button} onPress={handleCalc}>
          {
            loading ? (
              <ActivityIndicator size="large" color="#FFF" />
            ) : (
              <Title color="#FFF">
                Calcular
              </Title>
            )
          }
        </TouchableOpacity>
      </View>

      <View style={styles.containerResult}>
        <Title>Resultado</Title>
        <Text style={styles.result}>{result}</Text>
      </View>
    </ScrollView>
  )
}

export default IMC

const styles = StyleSheet.create({
  containerButton: {
    padding: 8,
  },
  button: {
    height: 60,
    width: '100%',
    backgroundColor: '#483D8B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerResult: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 24,
  },
  result: {
    fontSize: 72,
  },
})
