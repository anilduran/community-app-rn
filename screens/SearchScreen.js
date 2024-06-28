import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

export default function SearchScreen() {
  const categories = ["HTML", "CSS", "JavaScript"];

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Text style={{ textAlign: 'center' }}>{item}</Text>
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
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    margin: 16
  },
});
