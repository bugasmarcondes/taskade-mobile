import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const onSubmit = () => {};

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="vadim@notjust.dev"
        value={email}
        onChangeText={setEmail}
        style={{
          color: "white",
          fontSize: 18,
          width: "100%",
          marginVertical: 10,
        }}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          color: "white",
          fontSize: 18,
          width: "100%",
          marginVertical: 10,
        }}
      />
      <Pressable
        onPress={onSubmit}
        style={{
          backgroundColor: "#e33062",
          height: 50,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Sign In
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("SignUp")}
        style={{
          height: 50,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text style={{ color: "#e33062", fontSize: 18, fontWeight: "bold" }}>
          New here? Sign up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInScreen;
