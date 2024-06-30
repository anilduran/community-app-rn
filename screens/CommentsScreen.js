import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React from "react";

export default function CommentsScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  itemContainer: {
    rowGap: 10,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 6,
    borderBottomWidth: 0.2,
    borderBottomColor: 'gray'
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  communityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10
  },  
  communityText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 12,
    color: "gray",
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "orangered",
    borderRadius: 99,
  },
});

function ListItem() {
  return (
    <Pressable style={({pressed}) => [styles.itemContainer, pressed ? {opacity: 0.5} : undefined]} onPress={() => console.log('post')}>
      <View style={styles.infoContainer}>
        <Pressable style={({pressed}) => [styles.communityContainer, pressed ? {opacity: 0.5} : undefined]} onPress={() => console.log('community')}>
          <View style={styles.image}></View>
          <Text style={styles.communityText}>Community</Text>
        </Pressable>
        <View style={{ flex: 1 }}></View>
        <Text style={styles.dateText}>28.06.2023</Text>
      </View>

      <Text>Comment text</Text>
    </Pressable>
  );
}
