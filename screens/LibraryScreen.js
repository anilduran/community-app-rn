import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function LibraryScreen() {

    const navigation = useNavigation()

  return (
    <View>
      <Text>LibraryScreen</Text>
      <Pressable onPress={() => navigation.navigate('Communities')}>
        <Text>Your communities</Text>
      </Pressable>
    </View>
  )
}