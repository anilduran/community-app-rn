import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CommunityDetailScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={({ pressed }) => [
              { marginRight: 10 },
              pressed ? { opacity: 0.5 } : undefined,
            ]}
            onPress={() => navigation.navigate('UpdateCommunity')}
          >
            <Ionicons name="pencil" size={20} color={"orangered"} />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              { marginRight: 10 },
              pressed ? { opacity: 0.5 } : undefined,
            ]}
            onPress={() => {
              Alert.alert('Are you sure?', 'Are you sure you want to delete this community?', [
                {
                  text: 'Yes',
                  style: 'destructive',
                  onPress: () => {
                    console.log('yes')
                  }
                },
                {
                  text: 'No',
                  style: 'cancel',
                  onPress: () => {
                    console.log('no')
                  } 
                }
              ], {
                cancelable: true
              })
            }}
          >
            <Ionicons name="trash" size={20} color={"orangered"} />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              { marginRight: 0 },
              pressed ? { opacity: 0.5 } : undefined,
            ]}
            onPress={() => navigation.navigate('CreatePost')}
          >
            <Ionicons name="add" size={20} color={"orangered"} />
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/swiftui.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>Community Name</Text>
      <Text style={styles.description}>Community Description</Text>

      <Pressable
        style={({ pressed }) => [
          styles.card,
          pressed ? { opacity: 0.5 } : undefined,
        ]}
        onPress={() => navigation.navigate('PostDetail')}
      >
        <View></View>
        <Image
          source={require("../assets/images/swiftui.jpg")}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Post Title</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
    paddingHorizontal: 16,
  },
  description: {
    color: "gray",
    marginTop: 5,
    paddingHorizontal: 16,
  },
  card: {
    padding: 16,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 6,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
});
