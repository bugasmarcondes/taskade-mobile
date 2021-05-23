import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Text, View } from "../components/Themed";
import ToDoItem from "../components/ToDoItem";

export default function TabOneScreen() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      id: "1",
      content: "Buy milk",
      isCompleted: false,
    },
    {
      id: "2",
      content: "Buy cereals",
      isCompleted: false,
    },
    {
      id: "3",
      content: "Pour milk",
      isCompleted: false,
    },
  ]);

  const createNewItem = (atIndex: number) => {
    const newTodos = [...todos];
    newTodos.splice(atIndex, 0, {
      id: Math.random().toString(),
      content: "",
      isCompleted: false,
    });
    setTodos(newTodos);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 130 : 0}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.title}
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
        />
        <FlatList
          data={todos}
          renderItem={({ item, index }) => (
            <ToDoItem todo={item} onSubmit={() => createNewItem(index + 1)} />
          )}
          style={{ width: "100%" }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 12,
  },
  title: {
    width: "100%",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom: 12,
  },
});
