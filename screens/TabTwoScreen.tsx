import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ProjectItem from "../components/ProjectItem";
import { View } from "../components/Themed";

export default function TabTwoScreen() {
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "Project 1",
      createdAt: "1d",
    },
    {
      id: "2",
      title: "Project 2",
      createdAt: "2d",
    },
    {
      id: "3",
      title: "Project 3",
      createdAt: "3d",
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        renderItem={({ item }) => <ProjectItem project={item} />}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
