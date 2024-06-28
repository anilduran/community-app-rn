import { View, Text, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ClearButton({ style, ...props }) {
  return (
    <Pressable
      style={({ pressed }) => [style, pressed ? { opacity: 0.5 } : undefined]}
      {...props}
    >
      <Ionicons name="close" size={16} color="black" />
    </Pressable>
  );
}
