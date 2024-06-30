import { View, Text, StyleSheet, FlatList, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import ClearButton from "../components/ClearButton";

export default function SearchScreen() {
  const categories = ["HTML", "CSS", "JavaScript", "Rust", "NodeJS", "Kotlin", "PHP", "Python"];

  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e)}
          autoCapitalize="none"
        />
        {searchText && <ClearButton onPress={() => setSearchText("")} />}
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable style={({ pressed }) => [styles.categoryContainer, pressed ? { opacity: 0.5 } : undefined]}>
            <Text style={styles.categoryText}>{item}</Text>
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    rowGap: 10
  },
  categoryContainer: {
    // width: 100,
    flex: 1,
    height: 150,
    justifyContent: "center",
    backgroundColor: "orangered",
    borderRadius: 6,
    margin: 10,
  },
  categoryText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },  
  inputContainer: {
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 30,
    padding: 16,
    backgroundColor: "white",
    flexDirection: "row",
    columnGap: 10,
  },
  input: {
    flex: 1
  },
});
