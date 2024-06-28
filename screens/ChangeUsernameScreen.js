import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import TextField from '../components/TextField'
import PrimaryButton from '../components/PrimaryButton'
import Ionicons from '@expo/vector-icons/Ionicons'
import ClearButton from '../components/ClearButton'

export default function ChangeUsernameScreen() {

    const [username, setUsername] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Username</Text>
      <TextField
        leadingIcon={<Ionicons name='person-outline' size={20} />}
        trailingIcon={username && <ClearButton onPress={() => setUsername('')} />}
        placeholder='Enter a new username'
        value={username}
        onChangeText={(e) => setUsername(e)}
        autoCapitalize='none'
      />
      <PrimaryButton text='Change' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        rowGap: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
})