import { Text, View, Pressable, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome"
function Button({ label,theme, onPress }) {
  if(theme == "primary"){
    return (
    <View style={styles.containerPrimary}>
        <Pressable style={styles.button} onPress={onPress}>
        <FontAwesome 
            name ="picture-o" 
            size = {18}
            color = "#25292e"
            style={styles.buttonIcon}
        />
      
        <Text style={styles.buttonLabelPrimary}>{label}</Text>
      </Pressable>
    </View>
  );
    }
  return(
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

export default Button;

const styles = StyleSheet.create({
    container:{
        width: 200,
        height: 30,
        margin: 20,
        padding: 2,
    },
  containerPrimary: {
    height:40,
    width:250,
    borderWidth: 4,
    borderColor:"#ffd33d",
    borderRadius: 10,
    backgroundColor: "#FCFFE7",

  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabelPrimary: {
    color: "#2B3467",
    fontSize: 23,
  },
  buttonLabel:{
    color:"white",
    fontSize: 16,
  },
  buttonIcon:{
    paddingRight:8,
    

  }
});
