import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Checkbox from "../Checkbox";

const ToDoItem = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 3 }}
    >
      <Checkbox
        isChecked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
      />
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
  );
};

export default ToDoItem;
