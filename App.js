import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import GoalsInput from "./components/GoalsInput";
import GoalsItems from "./components/GoalsItems";

export default function App() {
  const [goals, setGoals] = useState([]);

  const AddGoals = (textinput) => {
    setGoals((newGoals) => [
      ...newGoals,
      { text: textinput, id: Math.random().toString() },
    ]);
  };
  const onDelete = (id) => {
    setGoals((newGoals) => newGoals.filter((go) => go.id !== id));
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ddd",
        paddingTop: 50,
        paddingHorizontal: 20,
      }}
    >
      <GoalsInput onAddGoals={AddGoals} />

      <View style={{ flex: 4, marginTop: 10 }}>
        <FlatList
          data={goals}
          renderItem={({ item }) => {
            return (
              <GoalsItems id={item.id} onDelete={onDelete} text={item.text} />
            );
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
