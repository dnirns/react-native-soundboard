import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = ({ navigation }) => {
  const nav = (component) => {
    navigation.navigate(component)
  }

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title='SOUNDS' onPress={() => nav('Sounds')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
