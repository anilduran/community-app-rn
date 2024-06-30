import { Image, StyleSheet, Text, View } from "react-native";

export default function CommentCard() {
  return (
    <View style={styles.commentCard}>
      <Image
        source={require("../assets/images/react_native.png")}
        style={styles.commentImage}
      />
      <View>
        <Text style={styles.commentTitle}>user 1</Text>
        <Text style={styles.commentText}>comment text</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
