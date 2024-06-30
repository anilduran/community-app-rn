
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function PostCard() {
    const navigation = useNavigation();

  return (
    <View style={styles.postContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.communityContainer,
          pressed ? { opacity: 0.5 } : undefined,
        ]}
        onPress={() => navigation.navigate("CommunityDetail")}
      >
        <Image
          source={require("../assets/images/react_native.png")}
          style={styles.communityImage}
        />
        <Text style={styles.communityNameText}>Community Name</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.postInnerContainer,
          pressed ? { opacity: 0.5 } : undefined,
        ]}
        onPress={() => navigation.navigate("PostDetail")}
      >
        <Image
          source={require("../assets/images/react_native.png")}
          style={styles.image}
        />
        <Text style={styles.postTitle}>Post Title</Text>
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
    columnGap: 10,
  },
  communityImage: {
    width: 50,
    height: 50,
    borderRadius: 999,
  },
  communityNameText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  postInnerContainer: {
    rowGap: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 6,
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
