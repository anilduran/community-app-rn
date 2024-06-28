import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import PrimaryButton from '../components/PrimaryButton'
import TextField from '../components/TextField'
import ClearButton from '../components/ClearButton'

export default function ChangeEmailScreen() {

    const [email, setEmail] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Email</Text>

        <TextField
            leadingIcon={<Ionicons name='mail-outline' size={20} />}
            trailingIcon={email && <ClearButton onPress={() => setEmail('')} />}
            placeholder='Enter your new email'
            value={email}
            onChangeText={(e) => setEmail(e)}
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