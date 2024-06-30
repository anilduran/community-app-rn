import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import LikedPostCard from '../components/LikedPostCard'

export default function LikedPostsScreen() {
  return (
    <ScrollView>
        <View style={styles.container}>
            <LikedPostCard />
            <LikedPostCard />
            <LikedPostCard />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        rowGap: 20
    }
})