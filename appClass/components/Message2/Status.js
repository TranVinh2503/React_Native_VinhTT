import {View,Text,StyleSheet,StatusBar} from 'react-native'
import { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'
export default function Status(){
    const [isConnected, setIsConnected] = useState(true)
    const backgroundColor = isConnected ? 'white' : 'red'
    useEffect(()=>{
        const unsubscribe  = NetInfo.addEventListener(
            state => setIsConnected(state.isConnected)
        )
        return ()=>{
            unsubscribe()
        }
    },[])
    return (
        <View style= {styles.container}>
            <StatusBar 
                backgroundColor={backgroundColor}
                barStyle={isConnected ? 'dark-content': 'light-content'}
                animated = {false}
            />
            {
                !isConnected && (
                    <View style = {styles.bubble}> 
                        <Text style = {styles.text}>No network connection</Text>
                    </View>
                )
            }


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        zIndex:1,
        position: 'absolute',
        top:20,
        left: 0,
        right:0,
        height:80,
        alignItems:'center'
    },
    bubble:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor:'red'
    },
    text:{
        color: 'white'
    }
    
})