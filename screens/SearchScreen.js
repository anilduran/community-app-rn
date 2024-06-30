import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import ClearButton from "../components/ClearButton";

export default function SearchScreen() {
  const categories = ["HTML", "CSS", "JavaScript"];

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
          <View style={styles.categoryContainer}>
            <Text style={{ textAlign: "center" }}>{item}</Text>
          </View>
        )}
        numColumns={2}
      />

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  categoryContainer: {
    // width: 100,
    flex: 1,
    height: 200,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 6,
    margin: 16,
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
