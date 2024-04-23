import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, SafeAreaView } from "react-native";
import { StyleSheet, View, Text } from "react-native-web";

function StatusBarView() {
    const [hidden,setHidden] = useState(false)
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar hidden={hidden}/>
      <View style={styles.someView}>
        <Text>Hello</Text>
        <Button title = "Hide Status Bar" 
        onPress={()=>setHidden(true)}/>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  someView: {
    backgroundColor: "#99f",
  },
});
export default StatusBarView;


