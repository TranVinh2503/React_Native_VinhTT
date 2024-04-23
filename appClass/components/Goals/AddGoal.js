import React from "react";
import { View, Text, TouchableOpacity, TextInput,Modal } from "react-native";
import { useState } from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
function AddGoal({addGoal}) {
    const [newGoal, setNewGoal] = useState("");
    const [modalVisible,setModalVisible] = useState(false)

    return (   

    <View style={styles.top}>
        <Pressable onPress={()=>setModalVisible(true)}>
            <Text>Open Model</Text>
        </Pressable>
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
            <View style={[{
                alignItems:'center',
                justifyContent:'center',
                marginTop:50,
            },styles.top]}>
        <Text>Input Goals:</Text>
        <TextInput value = {newGoal} onChangeText={setNewGoal} style={styles.input}  placeholder="Enter your goal"/>
        <TouchableOpacity style={styles.button} onPress={()=>{
            addGoal(newGoal)
            setNewGoal('')
            setModalVisible(false)
            }}>
          <Text> Add</Text>
        </TouchableOpacity>
        </View>
        </Modal>
    </View> );
}

export default AddGoal;

const styles= {
    top: {
        flex: 1,
        paddingTop: 10,
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      button: {
        borderWidth: 2,
        borderRadius:10,
        backgroundColor: "#E96479",
        with:100,
        padding: 5,
      },
      input: {
        borderWidth: 2,
        borderRadius:10,
        height:40,
        width: 150,
      },
}