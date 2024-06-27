import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function PrimaryButton({text, style, ...props}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        style,
        pressed ? { opacity: 0.5 } : undefined,
      ]}
      {...props}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 6,
    backgroundColor: "black",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
