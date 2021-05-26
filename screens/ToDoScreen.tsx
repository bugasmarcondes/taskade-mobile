import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { gql, useQuery } from "@apollo/client";
import { RouteProp, useRoute } from "@react-navigation/native";
import { View } from "../components/Themed";
import ToDoItem from "../components/ToDoItem";
import { RootStackParamList } from "../types";

const GET_PROJECT = gql`
  query getTaskList($id: ID!) {
    getTaskList(id: $id) {
      id
      title
      createdAt
      todos {
        id
        content
        isCompleted
      }
    }
  }
`;

export default function ToDoScreen() {
  const [project, setProject] = useState({
    todos: [],
  });
  const [title, setTitle] = useState("");
  const route = useRoute<RouteProp<RootStackParamList, "ToDoScreen">>();
  const { data, error, loading } = useQuery(GET_PROJECT, {
    variables: { id: route.params.id },
  });

  useEffect(() => {
    if (error) {
      Alert.alert("Error fetching project", error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setProject(data.getTaskList);
      setTitle(data.getTaskList.title);
    }
  }, [data]);

  const createNewItem = (atIndex: number) => {
    // const newTodos = [...todos];
    // newTodos.splice(atIndex, 0, {
    //   id: Math.random().toString(),
    //   content: "",
    //   isCompleted: false,
    // });
    // setTodos(newTodos);
  };

  if (!project) {
    return null;
  }

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
          data={project.todos}
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
