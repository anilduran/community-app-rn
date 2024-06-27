import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CreateCommunityScreen() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter title"
          style={styles.input}
          value={name}
          onChangeText={(e) => setName(e)}
        />
        {name ? (
          <Pressable
            style={({ pressed }) => [pressed ? { opacity: 0.5 } : undefined]}
            onPress={() => setName("")}
          >
            <Ionicons name="close" size={16} color="black" />
          </Pressable>
        ) : undefined}
      </View>
      <Pressable style={({ pressed}) => [styles.button, pressed ? {opacity: 0.5} : undefined]}>
        <Text style={styles.buttonText}>Create</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: "black",
    padding: 16,
    borderRadius: 6,
    backgroundColor: "white",
    flexDirection: "row",
  },
  input: {
    flex: 1,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 6,
    padding: 16,
    marginTop: 10
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
});
