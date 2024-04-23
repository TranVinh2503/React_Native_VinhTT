import React, {useState, useEffect} from 'react';
import {View,StyleSheet,Text} from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import { StatusBar } from "expo-status-bar";
function Status() {
    const [isConnected, setIsConnected] = useState(true)
    const backgroundColor = isConnected ? 'white' : 'red'
    useEffect(()=>{
        const unsubscribe = NetInfo.addEventListener(
            state => setIsConnected(state.isConnected)
        )
        return () =>{
            unsubscribe()
        }
    },[])
    return ( 
        <View style = {styles.messageContainer}>
    <StatusBar  
    backgroundColor={backgroundColor}
    barStyle = {isConnected ? 'dark-content':'light-content'}
    animated= {false}
    />
    {!isConnected && (
        <View style = {styles.bubble}>
            <Text style = {styles.text}>
                No network connection
            </Text>
        </View>
    ) }
    
  </View>
     );
}

export default Status;
const styles = StyleSheet.create({
    messageContainer:{
        zIndex: 1,
        position:'absolute',
        top:50,
        right:0,
        left:0,
        height:80,
        alignItems: 'center'
    },
    bubble: {
        backgroundColor:'red',
        borderRadius:20,

    },
    text: {
        backgroundColor:'red'

    }

});