import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import PrimaryButton from "../components/PrimaryButton";

export default function ProfileScreen() {
  const navigation = useNavigation();

  const [image, setImage] = useState(null);

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
        <View style={styles.profileContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.profileImagePlaceholder,
              pressed ? { opacity: 0.5 } : undefined,
            ]}
            onPress={pickImage}
          >
            <Ionicons name="camera" color="white" size={20} />
          </Pressable>
          <View>
            <Text style={styles.usernameText}>Username</Text>
            <Text style={styles.emailText}>user@example.com</Text>
          </View>
        </View>

        {image && (
          <View style={{ rowGap: 10 }}>
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: 200, borderRadius: 6 }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                columnGap: 10,
              }}
            >
              <PrimaryButton
                text="Cancel"
                style={{ flex: 1, backgroundColor: "darkred" }}
                onPress={() => setImage(null)}
              />
              <PrimaryButton
                text="Update"
                style={{ flex: 1, backgroundColor: "green" }}
                onPress={() => setImage(null)}
              />
            </View>
          </View>
        )}

        <ListItem
          leadingIcon={<Ionicons name="person-outline" size={20} />}
          text="Change Username"
          onPress={() => navigation.navigate("ChangeUsername")}
        />
        <ListItem
          leadingIcon={<Ionicons name="mail-outline" size={20} />}
          text="Change Email"
          onPress={() => navigation.navigate("ChangeEmail")}
        />
        <ListItem
          leadingIcon={<Ionicons name="lock-closed-outline" size={20} />}
          text="Change Password"
          onPress={() => navigation.navigate("ChangePassword")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    rowGap: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
  },
  profileImagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: "orangered",
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {},
  usernameText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  emailText: {
    color: "gray",
  },
  listItem: {
    padding: 16,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    justifyContent: "space-between",
    borderRadius: 6,
  },
});

function ListItem({ text, leadingIcon, ...props }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.listItem,
        pressed ? { opacity: 0.5 } : undefined,
      ]}
      {...props}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}
      >
        {leadingIcon}
        <Text>{text}</Text>
      </View>
      <Ionicons name="chevron-forward" size={16} />
    </Pressable>
  );
}
