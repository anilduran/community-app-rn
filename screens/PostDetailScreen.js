import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PostDetailScreen() {
  const [isLiked, setIsLiked] = useState(false);

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
            onPress={() => navigation.navigate("UpdatePost")}
          >
            <Ionicons name="pencil" size={20} color="orangered" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [pressed ? { opacity: 0.5 } : undefined]}
          >
            <Ionicons name="trash" size={20} color="orangered" />
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView bounces={false}>
      <Image
        source={require("../assets/images/swiftui.jpg")}
        style={styles.image}
      />
      <View style={styles.container}>
      <Text style={styles.title}>Post Title</Text>
        <Text style={styles.content}>Post contnet</Text>
        <Text style={styles.commentsTitle}>Comments - 23</Text>
        <View style={styles.commentCard}>
          <Image
            source={require("../assets/images/swiftui.jpg")}
            style={styles.commentImage}
          />
          <View>
            <Text style={styles.commentTitle}>user 1</Text>
            <Text style={styles.commentText}>comment text</Text>
          </View>
        </View>
      </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 48,
          columnGap: 10,
          backgroundColor: 'white',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed ? { opacity: 0.5 } : undefined,
          ]}
        >
          <Text style={styles.buttonText}>Leave a comment</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [pressed ? { opacity: 0.5 } : undefined]}
          onPress={() => setIsLiked(!isLiked)}
        >
          <Ionicons
            name={isLiked ? "heart" : "heart-outline"}
            size={36}
            color="orangered"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
  },
  content: {
    color: "gray",
    marginTop: 5,
  },
  commentsTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  },
  commentCard: {
    flexDirection: "row",
    columnGap: 10,
    marginTop: 10,
  },
  commentImage: {
    width: 40,
    height: 40,
    borderRadius: 99,
  },
  commentTitle: {
    fontWeight: "bold",
  },
  commentText: {
    color: "gray",
  },
  button: {
    backgroundColor: "black",
    padding: 16,
    borderRadius: 6,
    flex: 1,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
