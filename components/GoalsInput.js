import { View, Text, TextInput, Button, Modal, Image } from "react-native";
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

  function Toggle() {
    props.onToggle();
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 40,
          backgroundColor: "#311b6b",
        }}
      >
        <Image
          style={{ width: 140, height: 40 }}
          source={require("../assets/splash-icon.png")}
        />
        <View
          style={{
            width: "90%",
            borderWidth: 3,
            borderColor: "blue",
            marginRight: 4,
            borderRadius: 8,
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
          <TextInput
            value={textinput}
            onChangeText={AddText}
            placeholder="Enter the Goals..."
            style={{ padding: 12 }}
          />
        </View>

        <View style={{ flexDirection: "row", gap: 5, margin: 10 }}>
          <View>
            <Button title="Add Goals" onPress={AddGoals} color="#3e04e4" />
          </View>
          <View>
            <Button title="Cancel" onPress={Toggle} color="#f003e3" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
