import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native'

export default function FeedScreen() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}> 
    
      <View style={styles.postContainer}>
        <Pressable style={({ pressed }) => [styles.communityContainer, pressed ? { opacity: 0.5 } : undefined]} onPress={() => navigation.navigate('CommunityDetail')}>
          <Image source={require('../assets/images/swiftui.jpg')} style={styles.communityImage} />
          <Text style={styles.communityNameText}>Community Name</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [styles.postInnerContainer, pressed ? { opacity: 0.5 } : undefined]} onPress={() => navigation.navigate('PostDetail')}>
          <Image source={require('../assets/images/swiftui.jpg')} style={styles.image} />
          <Text style={styles.postTitle}>Post Title</Text>
        </Pressable>
      </View>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  postContainer: {
    rowGap: 10
  },
  communityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10
  },
  communityImage: {
    width: 40,
    height: 40,
    borderRadius: 999
  },
  communityNameText: {
    fontSize: 12,
  },
  postInnerContainer: {
    rowGap: 10
  },  
  image: {
    width: '100%',
    height: 200,
    borderRadius: 6
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 20
  }
})