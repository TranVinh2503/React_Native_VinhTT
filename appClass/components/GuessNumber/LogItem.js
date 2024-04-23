import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
function LogItem({ no, value }) {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.no}>#{no}</Text>
      <Text style={styles.value}>Guessing Number: {value}</Text>
    </View>
  );
}

export default LogItem;

const styles = StyleSheet.create({
  btnContainer: {
    width: "95%",
    backgroundColor: "#dcb22e",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: "auto",
    justifyContent: "space-between",
    borderWidth: 2,
    borderRadius: 30,
    marginVertical:5,
  },
  no: {
    fontSize: 16,
    color: "#fff",
    textAlign: "left",
  },

  value: {
    fontSize: 16,
    color: "#fff",
    textAlign: "right",
  },
});
