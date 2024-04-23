import { useState } from "react";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import ToolbarButton from "./ToolbarButton";
import { createImageMessage, createLocationMessage, createTextMessage } from "../../utils/MessageUtils";
import * as Location from 'expo-location'
import * as ImagePicker from 'expo-image-picker';



function Toolbar({ addMessage }) {
  const [text, setText] = useState();

  return (
    <View style={styles.toolbar}>
      <View style={styles.leftContainer}>
        <ToolbarButton title={"📷"} onPress={ async ()=>{
            let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                quality: 1,
              });              
            if(!result.canceled){
                addMessage(createImageMessage(result.assets[0].uri))
            }else{
                alert('You did not select any image')
            }
           
        }} />
        <ToolbarButton title={"📍"} onPress={async () =>{
        let {status} = await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted'){
            console.log('Permission to access location was denied');
            return
        }
        let location = await Location.getCurrentPositionAsync({})
        addMessage(createLocationMessage({
            latitude : location.coords.latitude,
            longitude: location.coords.longitude
        }))
    }} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Type something here...."}
          value={text}
          blurOnSubmit={false}
          onChangeText={(text) => setText(text)}
          onSubmitEditing={() => {
            addMessage(createTextMessage(text));
            setText("");
          }}
        />
      </View>
      <View style={styles.rightContainer}>
        <ToolbarButton
          title={"➤"}
          onPress={()=>{
            addMessage(createTextMessage(text));
            setText("");
          }}
        />
      </View>
    </View>
  );
}

export default Toolbar;

const styles = StyleSheet.create({
  toolbar: {
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    marginLeft: 20,
  },
  input: {
    width: "95%",
    borderWidth: 2,
    borderColor: "#F6F1F1",
    borderRadius: 10,
    backgroundColor: "#F6F1F1",
    height: 40,
  },
});
