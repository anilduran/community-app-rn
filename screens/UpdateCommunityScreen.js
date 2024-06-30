import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import TextField from "../components/TextField";
import ClearButton from "../components/ClearButton";
import * as ImagePicker from "expo-image-picker";

export default function UpdateCommunityScreen() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Community</Text>

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
        trailingIcon={name && <ClearButton onPress={() => setName("")} />}
        placeholder="Enter a name"
        value={name}
        onChangeText={(e) => setName("")}
        autoCapitalize="none"
      />

      <TextField
        trailingIcon={
          description && <ClearButton onPress={() => setDescription("")} />
        }
        placeholder="Enter a description"
        value={description}
        onChangeText={(e) => setDescription("")}
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
    backgroundColor: "lightgray",
    justifyContent: "center",
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
