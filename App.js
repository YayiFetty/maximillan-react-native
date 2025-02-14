import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import GoalsInput from "./components/GoalsInput";
import GoalsItems from "./components/GoalsItems";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function modalShow() {
    setModalVisible(true);
  }

  const AddGoals = (textinput) => {
    setGoals((newGoals) => [
      ...newGoals,
      { text: textinput, id: Math.random().toString() },
    ]);
  };

  const onDelete = (id) => {
    setGoals((newGoals) => newGoals.filter((go) => go.id !== id));
  };
  const onToggle = () => {
    setModalVisible(false);
  };
  return (
    <>
      <StatusBar />

      <View
        style={{
          flex: 1,

          paddingTop: 50,
          paddingHorizontal: 20,
        }}
      >
        <Button title="Open" color="blue" onPress={modalShow} />

        <GoalsInput
          onAddGoals={AddGoals}
          visible={modalVisible}
          onToggle={onToggle}
        />

        <View style={{ flex: 4, marginTop: 10 }}>
          <FlatList
            data={goals}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <GoalsItems id={item.id} onDelete={onDelete} text={item.text} />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({});
