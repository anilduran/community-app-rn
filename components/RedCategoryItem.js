import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RedCategoryItem({ text }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.redCategoryItem,
        pressed ? { opacity: 0.5 } : undefined,
      ]}
    >
      <Text style={styles.redCategoryItemText}>{text}</Text>
      <Ionicons name="checkmark" size={12} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  redCategoryItem: {
    backgroundColor: "darkred",
    flexDirection: "row",
    columnGap: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  redCategoryItemText: {
    color: "white",
    fontSize: 12,
  },
});
