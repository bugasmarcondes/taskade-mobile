import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet } from "react-native";
import ProjectItem from "../components/ProjectItem";
import { View } from "../components/Themed";

const MY_PROJECTS = gql`
  query myTaskLists {
    myTaskLists {
      id
      title
      createdAt
    }
  }
`;

export default function ProjectsScreen() {
  const [projects, setProjects] = useState([]);

  const { data, error, loading } = useQuery(MY_PROJECTS);

  useEffect(() => {
    if (error) {
      Alert.alert("Error fetching projects", error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setProjects(data.myTaskLists);
    }
  }, [data]);

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
