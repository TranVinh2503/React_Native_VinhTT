import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/GuessNumber/Title";
import PrimaryButton from "../components/GuessNumber/PrimaryButton";

function GameOverScreen({userNumber,noOfGuesses,restartGame}) {
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.pictureContainer}>
        <Image
          style={styles.picture}
          source={require("../assets/success.png")}
        />
      </View>

      <Text style={styles.result}>
        Your phone needed
        <Text style= {{fontWeight:'bold',color:'#75073d'}}>{" " + userNumber + " "}</Text>
        rounds to guess the number
        <Text style= {{fontWeight:'bold',color:'#75073d'}}>{" " + noOfGuesses + "."}</Text>
      </Text>
      <View>
        <PrimaryButton onPress={()=>restartGame()}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex:1,
    padding:20
  },
  pictureContainer: {
    width: 200,
    height: 200,
    borderRadius: 300,
    borderWidth: 2,
    overflow: "hidden",
  },
  picture: {
    width: "100%",
    height: "100%",
  },
  result: {
    padding: 20,
    textAlign:'center',
    fontSize:20,
  },
});
