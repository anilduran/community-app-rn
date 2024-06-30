import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostCard from "../components/PostCard";

export default function PostsScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    rowGap: 20
  }
});
