import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CheckBoxProps {
  isChecked: boolean;
  onPress: () => void;
}

const Checkbox = (props: CheckBoxProps) => {
  const { onPress, isChecked } = props;
  const name = isChecked ? "checkbox-marked-outline" : "checkbox-blank-outline";
  return (
    <View>
      <Pressable onPress={onPress}>
        <MaterialCommunityIcons name={name} size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default Checkbox;
