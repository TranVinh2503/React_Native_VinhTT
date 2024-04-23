import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

export default ({ children }) => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textTitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    marginBottom:20,
    borderWidth: 3,
    borderRadius: 2,
    padding: 16,
    borderColor: '#eee',
    // alignSelf:'flex-center',
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
  },
  textTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 'bold',
    textAlign: "center",
  },
});
