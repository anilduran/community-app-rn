import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import * as ImagePicker from "expo-image-picker";

import TextField from "../components/TextField";
import ClearButton from "../components/ClearButton";
import PrimaryButton from "../components/PrimaryButton";
import GreenCategoryItem from "../components/GreenCategoryItem";
import RedCategoryItem from "../components/RedCategoryItem";

export default function CreateCommunityScreen() {
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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Create Community</Text>

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
          onChangeText={(e) => setName(e)}
          autoCapitalize="none"
        />

        <TextField
          trailingIcon={
            description && <ClearButton onPress={() => setDescription("")} />
          }
          placeholder="Enter a description"
          value={description}
          onChangeText={(e) => setDescription(e)}
          autoCapitalize="none"
        />

        <Text style={styles.categoriesTitle}>Select Categories</Text>

        <View style={styles.categoriesContainer}>
          <RedCategoryItem text="Category 1" />
          <RedCategoryItem text="Category 1" />
          <RedCategoryItem text="Category 1" />
          <RedCategoryItem text="Category 1" />
          <RedCategoryItem text="Category 1" />
        </View>

        <Text style={styles.categoriesTitle}>Selected Categories</Text>

        <View style={styles.categoriesContainer}>
          <GreenCategoryItem text="Category 1" />
          <GreenCategoryItem text="Category 1" />
          <GreenCategoryItem text="Category 1" />
          <GreenCategoryItem text="Category 1" />
          <GreenCategoryItem text="Category 1" />
        </View>

        <PrimaryButton text="Create" />
      </View>
    </ScrollView>
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
  categoriesTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 10,
    columnGap: 10,
    borderWidth: 1.5,
    borderColor: "black",
    padding: 16,
    borderRadius: 6,
  },
});
