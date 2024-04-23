import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Title from "../components/GuessNumber/Title";
import PrimaryButton from "../components/GuessNumber/PrimaryButton";
import { TextInput } from "react-native";
import { useState } from "react";

function GameStartScreen({confirmAction}) {
  const [enteredNumber,setEnteredNumber] = useState('')
  console.log(enteredNumber);
  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>
      <View style={styles.guessContainer}>
        <Text style={styles.promptText}>Enter a Number</Text>
        <TextInput style={styles.numberInput} 
                    onChangeText={setEnteredNumber}
                    value={enteredNumber}
        />

        <View style={styles.buttonView}>
          <View style={styles.button}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={()=>{
              confirmAction(enteredNumber)
              console.log(enteredNumber);
            }}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default GameStartScreen;

const styles = StyleSheet.create({
  container: {

    flex: 1,
    paddingTop: 50,
  },
  guessContainer: {
    backgroundColor: "#92003d",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
  },
  promptText: {
    fontSize: 24,
    color: "#ffdf2c",
  },
  numberInput: {
    width: 100,
    marginVertical: 20,
    paddingVertical: 6,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 34,
    fontWeight: "bold",
    color: "#ffdf2c",
    textDecorationLine: 'underline',
  },
  buttonView: {
    flexDirection: "row",
    width: "65%",
    justifyContent: "space-between",
    paddingVertical:15
  },
  button: {
    width:'42%'
  },
});
