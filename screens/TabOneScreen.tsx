import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Checkbox from "../components/Checkbox";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  const [value, setValue] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Checkbox isChecked={value} onPress={() => setValue(!value)} />
        <TextInput
          style={{
            flex: 1,
            fontSize: 18,
            color: "white",
            marginLeft: 12,
          }}
          multiline
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
