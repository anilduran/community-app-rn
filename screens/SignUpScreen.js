import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import TextField from "../components/TextField";
import PrimaryButton from "../components/PrimaryButton";
import ClearButton from "../components/ClearButton";

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);

  let passwordLeadingIcon = (
    <Ionicons name="lock-closed-outline" size={20} />
  );

  if (password) {
    passwordLeadingIcon = (
      <Pressable
        style={({ pressed }) => [pressed ? { opacity: 0.5 } : undefined]}
        onPress={() => setIsPassword(!isPassword)}
      >
        {isPassword ? (
          <Ionicons name="eye-off-outline" size={20} />
        ) : (
          <Ionicons name="eye-outline" size={20} />
        )}
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextField
        leadingIcon={<Ionicons name="person-outline" size={20} />}
        trailingIcon={
          username && (
            <ClearButton onPress={() => setUsername("")} />
          )
        }
        placeholder="Enter a username"
        value={username}
        onChangeText={(e) => setUsername(e)}
        autoCapitalize="none"
      />

      <TextField
        leadingIcon={<Ionicons name="mail-outline" size={20} />}
        trailingIcon={
          email && (
            <ClearButton onPress={() => setEmail("")} />
          )
        }
        placeholder="Enter an email"
        value={email}
        onChangeText={(e) => setEmail(e)}
        autoCapitalize="none"
      />

      <TextField
        leadingIcon={passwordLeadingIcon}
        trailingIcon={password && <ClearButton onPress={() => setPassword("")} />}
        placeholder="Enter a password"
        value={password}
        onChangeText={(e) => setPassword(e)}
        autoCapitalize="none"
        secureTextEntry={isPassword}
      />

      <PrimaryButton text="Sign Up" onPress={() => console.log("sign up")} />

      <View style={{ flexDirection: "row", columnGap: 5 }}>
        <Text>Do you have an account?</Text>
        <Pressable
          onPress={() => navigation.navigate("SignIn")}
          style={({ pressed }) => [pressed ? { opacity: 0.5 } : undefined]}
        >
          <Text style={{ fontWeight: "bold" }}>Sign in.</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 16,
    rowGap: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
