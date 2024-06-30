import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import CommentCard from "../components/CommentCard";
import PrimaryButton from "../components/PrimaryButton";

export default function PostDetailScreen() {
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
          source={require("../assets/images/react_native.png")}
          style={styles.image}
        />
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.infoButton,
                pressed ? { opacity: 0.5 } : undefined,
              ]}
              onPress={() => navigation.navigate("UserDetail")}
            >
              <Image
                source={require("../assets/images/react_native.png")}
                style={styles.profilePhoto}
              />
              <Text style={styles.usernameText}>Username</Text>
            </Pressable>
          </View>

          <Text style={styles.title}>Post Title</Text>
          <Text style={styles.content}>Post contnet</Text>
          <Text style={styles.commentsTitle}>Comments - 23</Text>
          <CommentCard />
        </View>
      </ScrollView>
      <ActionsSection />
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
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  infoButton: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 99,
  },
  usernameText: {
    fontWeight: "bold",
    fontSize: 14,
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
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 48,
    columnGap: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

function ActionsSection() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View style={styles.actionsContainer}>
      <PrimaryButton text="Leave a comment" style={{ flex: 1 }} />
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
  );
}
