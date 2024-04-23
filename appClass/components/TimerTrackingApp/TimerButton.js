import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

function TimerButton({ color, title, small, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { borderColor: color }]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          small ? styles.small : styles.large,
          { color },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default TimerButton;

const styles = StyleSheet.create({
  button: {
    marginTop: "3%",
    minWidth: "33%",
    borderWidth: 3,
    borderRadius: 5,
    textAlign:'center'
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  small: {
    padding: 3,
    fontSize: 15,
  },
  large: {
    padding: 6,
    fontSize: 18,
  },
});
