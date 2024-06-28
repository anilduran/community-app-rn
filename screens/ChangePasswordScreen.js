import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import PrimaryButton from '../components/PrimaryButton'
import TextField from '../components/TextField'
import ClearButton from '../components/ClearButton'

export default function ChangePasswordScreen() {

    const navigation = useNavigation()

    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>


        <TextField
            leadingIcon={<Ionicons name='lock-closed-outline' size={20} />}
            trailingIcon={password && <ClearButton onPress={() => setPassword('')} />}
            placeholder='Enter your new password'
            value={password}
            onChangeText={(e) => setPassword(e)}
            autoCapitalize='none'
            secureTextEntry={true}
        />


        <TextField
            leadingIcon={<Ionicons name='lock-closed-outline' size={20} />}
            trailingIcon={rePassword && <ClearButton onPress={() => setRePassword('')} />}
            placeholder='Enter your new password again'
            value={rePassword}
            onChangeText={(e) => setRePassword(e)}
            autoCapitalize='none'
            secureTextEntry={true}
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