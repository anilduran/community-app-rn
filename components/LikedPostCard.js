import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function LikedPostCard() {

    const [isLiked, setIsLiked] = useState(true)

  return (
    <View style={styles.postContainer}>
      <View style={styles.communityContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.communityInnerContainer,
            pressed ? { opacity: 0.5 } : undefined,
          ]}
        >
          <Image
            source={require("../assets/images/react_native.png")}
            style={styles.communityImage}
          />
          <Text style={styles.communityNameText}>Community</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [pressed ? { opacity: 0.5 } : undefined]}
          onPress={() => setIsLiked(!isLiked)}
        >
          <Ionicons name={isLiked ? 'heart' : 'heart-outline'} size={40} color={isLiked ? 'orangered' : 'black'} />
        </Pressable>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.postInnerContainer,
          pressed ? { opacity: 0.5 } : undefined,
        ]}
      >
        <Image
          source={require("../assets/images/react_native.png")}
          style={styles.postImage}
        />
        <Text style={styles.postTitle}>Title</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    rowGap: 10,
  },
  communityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  communityInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  communityImage: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
  communityNameText: {},
  postInnerContainer: {
    rowGap: 10
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 6,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
