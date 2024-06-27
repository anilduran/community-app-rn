import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function TextField({ leadingIcon, trailingIcon, style, ...props }) {
  return (
    <View style={styles.inputContainer}>
      {leadingIcon}
      <TextInput
        style={[styles.input, style]}
        {...props}
      />
      {trailingIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "black",
    padding: 16,
    backgroundColor: "white",
    flexDirection: "row",
    columnGap: 10,
  },
  input: {
    flex: 1,
  },
});
