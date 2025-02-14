import { View, Text, Pressable } from "react-native";
import React from "react";

export default function GoalsItems(props) {
  function onDelete() {
    props.onDelete(props.id);
  }

  return (
    <Pressable
      onPress={onDelete}
      android_ripple={{ color: "red" }}
      style={({ pressed }) => [pressed && { opacity: 0.5 }]}
    >
      <View
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: 400 }}>{props.text}</Text>
      </View>
    </Pressable>
  );
}
