import { View, Text, StyleSheet } from "react-native";
import Title from "../components/GuessNumber/Title";
import LogItem from "../components/GuessNumber/LogItem";
import { ScrollView } from "react-native";
import PrimaryButton from "../components/GuessNumber/PrimaryButton";
import { useEffect, useState } from "react";

/**
 * @requires min and max are integers
 */
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function GamePlayScreen({ userNumber, informGameOver }) {
  const [G, setG] = useState();
  const [L, setL] = useState(1);
  const [H, setH] = useState(99);
  const [guesses, setGuesses] = useState(0);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // call informGameOver if the guess is correct
    const tmp = getRandomInt(L, H);
    const tmpGuesses = guesses + 1;
    if (tmp == userNumber) {
      informGameOver(tmpGuesses);
    }
    const newLogs = logs.slice();
    newLogs.push({
      no: logs.length + 1,
      value: tmp,
    });
    setLogs(newLogs);
    setG(tmp);
    setGuesses(tmpGuesses);
  }, [L, H]);

  const updateGuess = (direction) => {
    if (direction == "higher" && userNumber > G) {
      setL(G + 1);
    } else if (direction == "lower" && userNumber < G) {
      setH(G - 1);
    } else if (userNumber != G) {
      console.log("invalid");
    } else {
      console.log("game over");
    }
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess {guesses}</Title>
      <View style={styles.mainGamePlay}>
        <View style={styles.guessingArea}>
          <Text style={styles.numberGuessed}>{G}</Text>
        </View>
        <View style={styles.controlArea}>
          <Text style={styles.titleControlArea}>Higher or lower?</Text>
          <View style={styles.buttonView}>
            <View style={styles.button}>
              <PrimaryButton onPress={() => updateGuess("lower")}>
                -
              </PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton onPress={() => updateGuess("higher")}>
                +
              </PrimaryButton>
            </View>
          </View>
        </View>
        <View>
          <ScrollView>
            <View style={styles.logItemContainer}>
              {logs.map((e) => {
                return <LogItem key={e.no} no={e.no} value={e.value} />;
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default GamePlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  mainGamePlay: {
    flex: 6,
  },
  resultArea: {
    flex: 4,
  },
  guessingArea: {
    padding: 20,
    borderWidth: 3,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 20,
    borderColor: "#ffdf2c",
    textAlign: "center",
    alignItems: "center",
  },
  numberGuessed: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffdf2c",
  },
  controlArea: {
    padding: 20,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#92003d",
    textAlign: "center",
    alignItems: "center",
  },
  titleControlArea: {
    fontSize: 23,
    color: "#ffdf2c",
    marginBottom: 20,
  },
  buttonView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    width: "48%",
  },
  logItemContainer: {
    padding: 10,
  },
});
