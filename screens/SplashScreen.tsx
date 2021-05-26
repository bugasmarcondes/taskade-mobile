import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkUser = async () => {
      // uncomment to test removing the token, i.e.: signin out
      // await removeTokenForTest();
      if (await isAuthenticated()) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("SignIn");
      }
    };
    checkUser();
  }, []);

  const removeTokenForTest = async () => {
    await AsyncStorage.removeItem("token");
  };

  const isAuthenticated = async () => {
    const token = await AsyncStorage.getItem("token");
    return !!token;
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator />
    </View>
  );
};

export default SplashScreen;
