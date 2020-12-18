import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Audio } from 'expo-av'



const balloon = '../assets/mp3/Balloon-Pop.mp3'

const SoundScreen = () => {
  const [sound, setSound] = useState()

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(require(balloon))
    setSound(sound)
    await sound.playAsync()
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return (
    <View>
      <Text>SOUND BOARD GOES HERE</Text>
      <Button title='POP BALLOON' onPress={playSound} />
    </View>
  )
}

export default SoundScreen

const styles = StyleSheet.create({})
