import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'

export default function MessagesScreen() {
  return (
    <ScrollView>
      <View>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  listItemContainer: {
    padding: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: 'gray'
  },
  usernameText: {
    fontWeight: 'bold',
    fontSize: 14
  },
  messageText: {
    color: 'gray',
    fontSize: 12
  },
  dateText: {
    color: 'gray',
    fontSize: 12,
  }
})


function ListItem() {


  return(
    <Pressable style={({ pressed }) => [styles.listItemContainer, pressed ? {opacity: 0.5}: undefined]}>
      <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: 'orangered' }}>

      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.usernameText}>Username</Text>
        <Text style={styles.messageText}>Last image</Text>
      </View>

      <Text style={styles.dateText}>28.06.2024</Text>

    </Pressable>
  )
}