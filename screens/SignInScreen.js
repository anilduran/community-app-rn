import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../components/PrimaryButton";
import TextField from "../components/TextField";
import ClearButton from "../components/ClearButton";

export default function SignInScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);

  let passwordLeadingIcon = <Ionicons name="lock-closed-outline" size={20} />;

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
      <Text style={styles.title}>Sign In</Text>

      <TextField
        leadingIcon={<Ionicons name="mail-outline" size={20} />}
        trailingIcon={email && <ClearButton onPress={() => setEmail("")} />}
        placeholder="Enter your email"
        value={email}
        onChangeText={(e) => setEmail(e)}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextField
        leadingIcon={passwordLeadingIcon}
        trailingIcon={
          password && <ClearButton onPress={() => setPassword("")} />
        }
        placeholder="Enter your password"
        value={password}
        onChangeText={(e) => setPassword(e)}
        autoCapitalize="none"
        secureTextEntry={isPassword}
      />

      <PrimaryButton
        text="Sign In"
        onPress={() => navigation.navigate("Home")}
      />

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
