import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function CommunitiesScreen() {

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable style={({ pressed }) => pressed ? { opacity: 0.5 } : undefined} onPress={() => navigation.navigate('CreateCommunity')}>
                    <Ionicons name='add' color='orangered' size={24} />
                </Pressable>
            )
        })
    }, [navigation])

  return (
    <View style={styles.container}>
      <Pressable style={({ pressed }) => [pressed ? { opacity: 0.5 } : undefined]} onPress={() => navigation.navigate('CommunityDetail')}>
        <Image source={require('../assets/images/swiftui.jpg')} style={styles.image}  />
        <Text style={styles.cardTitle}>Community Name</Text>
        <Text style={styles.cardText}>
            Community description
        </Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 6
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10
    },
    cardText: {
        color: 'gray',
        marginTop: 5
    }
})