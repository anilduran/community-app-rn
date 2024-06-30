import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import CommunityCard from "../components/CommunityCard";

export default function CommunitiesScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={({ pressed }) => (pressed ? { opacity: 0.5 } : undefined)}
          onPress={() => navigation.navigate("CreateCommunity")}
        >
          <Ionicons name="add" color="orangered" size={24} />
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    rowGap: 20
  },
});
