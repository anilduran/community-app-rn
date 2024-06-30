import { Image, Pressable, StyleSheet, Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function CommunityCard() {

    const navigation = useNavigation()

    return (
        <Pressable style={({ pressed }) => [pressed ? { opacity: 0.5 } : undefined]} onPress={() => navigation.navigate('CommunityDetail')}>
        <Image source={require('../assets/images/react_native.png')} style={styles.image}  />
        <Text style={styles.cardTitle}>Community Name</Text>
        <Text style={styles.cardText}>
            Community description
        </Text>
      </Pressable>
    )
}

const styles = StyleSheet.create({
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