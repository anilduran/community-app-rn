import { Pressable, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function GreenCategoryItem({ text }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.greenCategoryItem,
        pressed ? { opacity: 0.5 } : undefined,
      ]}
    >
      <Text style={styles.greenCategoryItemText}>{text}</Text>
      <Ionicons name="close" size={12} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  greenCategoryItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "green",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  greenCategoryItemText: {
    fontSize: 12,
    color: "white",
  },
});
