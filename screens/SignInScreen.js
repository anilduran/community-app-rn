import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../components/PrimaryButton";
import TextField from "../components/TextField";

export default function SignInScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextField
        leadingIcon={<Ionicons name="mail-outline" size={20} />}
        trailingIcon={
          email && (
            <Pressable
              style={({ pressed }) => [pressed ? { opacity: 0.5 } : undefined]}
              onPress={() => setEmail("")}
            >
              <Ionicons name="close" size={20} />
            </Pressable>
          )
        }
        placeholder="Enter your email"
        value={email}
        onChangeText={(e) => setEmail(e)}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextField
        leadingIcon={<Ionicons name="lock-closed-outline" size={20} />}
        trailingIcon={
          password && (
            <Pressable
              style={({ pressed }) => [pressed ? { opacity: 0.5 } : undefined]}
              onPress={() => setPassword("")}
            >
              <Ionicons name="close" size={20} />
            </Pressable>
          )
        }
        placeholder="Enter your password"
        value={password}
        onChangeText={(e) => setPassword(e)}
        autoCapitalize="none"
      />

      <PrimaryButton text="Sign In" onPress={() => navigation.navigate('Home')} />

      <View style={{ flexDirection: "row", columnGap: 5 }}>
        <Text>Do you not have an account?</Text>
        <Pressable
          onPress={() => navigation.navigate("SignUp")}
          style={({ pressed }) => [pressed ? { opacity: 0.5 } : undefined]}
        >
          <Text style={{ fontWeight: "bold" }}>Sign up.</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
    rowGap: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
