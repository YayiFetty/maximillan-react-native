import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function GoalsInput(props) {
  const [textinput, setTextInput] = useState("");

  function AddText(texting) {
    setTextInput(texting);
  }

  function AddGoals() {
    if (textinput.trim() === "") {
      return alert("Please enter the Goals");
    }
    props.onAddGoals(textinput);
    setTextInput("");
  }

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "#aaa",
        borderBottomWidth: 4,
        paddingBottom: 30,
      }}
    >
      <View
        style={{
          width: "76%",
          borderWidth: 3,
          borderColor: "blue",
          marginRight: 4,
        }}
      >
        <TextInput
          value={textinput}
          onChangeText={AddText}
          placeholder="Enter the Goals..."
        />
      </View>
      <Button title="Add Goals" onPress={() => AddGoals()} />
    </View>
  );
}
