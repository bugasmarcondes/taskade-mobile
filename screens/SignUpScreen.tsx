import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMutation, gql } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SIGN_UP_MUTATION = gql`
  mutation signUp($email: String!, $password: String!, $name: String!) {
    signUp(input: { email: $email, password: $password, name: $name }) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  // mutation[0], function that triggers the mutation
  // mutation[1], result object with { data, error, loading }
  const [signUp, { data, error, loading }] = useMutation(SIGN_UP_MUTATION);

  if (error) {
    Alert.alert("Error signing up. Try again");
  }
  if (data) {
    AsyncStorage.setItem("token", data.signUp.token).then(() => {
      navigation.navigate("Home");
    });
  }

  const onSubmit = () => {
    signUp({
      variables: {
        name,
        email,
        password,
      },
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Vadim"
        value={name}
        onChangeText={setName}
        style={{
          color: "white",
          fontSize: 18,
          width: "100%",
          marginVertical: 10,
        }}
      />
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
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        {loading && <ActivityIndicator />}
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Sign Up
        </Text>
      </Pressable>
      <Pressable
        disabled={loading}
        onPress={() => navigation.navigate("SignIn")}
        style={{
          height: 50,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text style={{ color: "#e33062", fontSize: 18, fontWeight: "bold" }}>
          Already have an account? Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpScreen;
