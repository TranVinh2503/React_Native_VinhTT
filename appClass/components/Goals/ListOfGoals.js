import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
import AddGoal from "./AddGoal";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
export default function ListOFGoals() {
  const [goals, setGoals] = useState([]);

  const deleteGoal = (index) => {
    const newGoal = goals.filter((e, i) => i != index);
    setGoals(newGoal);
  };

  const addGoal = (newGoal) => {
    setGoals((currentGoals) => [...currentGoals, newGoal]);
  };
  return (
    <View style={styles.root}>
      <AddGoal addGoal={addGoal} />
      <View style={styles.bottom}>
        <Text>List of Goals</Text>
        <FlatList
          data={goals}
          renderItem={(obj) => (
            <View>
              <Pressable onPress={() => deleteGoal(obj.index)}>
                <Text style={styles.textList} key={obj.index}>
                  {obj.item}
                </Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
}
const styles = {
  root: {
    flex: 1,
    paddingTop: 50,
    marginHorizontal: 5,
  },
  button: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#E96479",
    with: 100,
    padding: 5,
  },
  bottom: {
    flex: 4,
    backgroundColor: "#F9DBBB",
  },
  textList: {
    margin: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#E96479",
  },
};
