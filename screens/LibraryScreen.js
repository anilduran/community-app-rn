import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function LibraryScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <ListItem
          leadingIcon={<Ionicons name="people-outline" size={20} />}
          text="Your communities"
          onPress={() => navigation.navigate("Communities")}
        />

        <ListItem
          leadingIcon={<Ionicons name="book-outline" size={20} />}
          text="Your posts"
          onPress={() => navigation.navigate("Posts")}
        />

        <ListItem
          leadingIcon={
            <Ionicons name="chatbubble-ellipses-outline" size={20} />
          }
          text="Your comments"
          onPress={() => navigation.navigate("Comments")}
        />

        <ListItem
          leadingIcon={<Ionicons name="chatbubbles-outline" size={20} />}
          text="Your messages"
          onPress={() => navigation.navigate("Messages")}
        />

        <ListItem
          leadingIcon={<Ionicons name='heart-outline' size={20} />}
          text='Liked posts'
          onPress={() => navigation.navigate('LikedPosts')}
        />
      </View>
    </ScrollView>
  );
}

function ListItem({ leadingIcon, text, ...props }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.listItemContainer,
        pressed ? { opacity: 0.5 } : undefined,
      ]}
      {...props}
    >
      <View style={{ flexDirection: "row", columnGap: 10 }}>
        {leadingIcon}
        <Text>{text}</Text>
      </View>
      <View style={{ flexDirection: "row", columnGap: 10 }}>
        <View style={{ backgroundColor: "black", borderRadius: 99 }}>
          <Text style={{ color: "white", padding: 3, fontSize: 12 }}>10</Text>
        </View>
        <Ionicons name="chevron-forward" size={16} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    rowGap: 10,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 6,
    backgroundColor: "white",
  },
});
