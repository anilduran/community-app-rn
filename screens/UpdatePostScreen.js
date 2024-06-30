import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import TextField from "../components/TextField";
import ClearButton from "../components/ClearButton";
import PrimaryButton from "../components/PrimaryButton";
import * as ImagePicker from "expo-image-picker";

export default function UpdatePostScreen() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Post</Text>

      {image ? (
        <Pressable
          style={({ pressed }) => [pressed ? { opacity: 0.5 } : undefined]}
          onPress={pickImage}
        >
          <Image source={{ uri: image }} style={styles.image} />
        </Pressable>
      ) : (
        <Pressable
          style={({ pressed }) => [
            styles.imagePlaceholder,
            pressed ? { opacity: 0.5 } : undefined,
          ]}
          onPress={pickImage}
        >
          <Text style={styles.imagePlaceholderText}>Pick an image</Text>
        </Pressable>
      )}

      <TextField
        trailingIcon={title && <ClearButton onPress={() => setTitle("")} />}
        placeholder="Enter a title"
        value={title}
        onChangeText={(e) => setTitle(e)}
        autoCapitalize="none"
      />

      <TextField
        trailingIcon={content && <ClearButton onPress={() => setContent("")} />}
        placeholder="Enter content"
        value={content}
        onChangeText={(e) => setContent(e)}
        autoCapitalize="none"
      />

      <PrimaryButton text="Update" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    rowGap: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  imagePlaceholder: {
    width: "100%",
    height: 250,
    borderRadius: 6,
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
  imagePlaceholderText: {
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 6,
  },
});
