import { View,StyleSheet } from "react-native"
import Status from "./components/Message/Status"
import { createImageMessage, createLocationMessage, createTextMessage } from "./utils/MessageUtils"

export default function App(){

    const [messages, setMessages] = useState([
        createImageMessage('https://unsplash.it/300/300'),
        createTextMessage('World'),
        createTextMessage('Hello'),
        createLocationMessage({
            latitude: 37.78825,
            longitude:-122.4324,
        })
    ])

    const renderMessageItem = (item)=>{
        return (
            <View>
                
            </View>
        )
    }

   
    return (
        <View style= {styles.container}>
            <Status/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    
    
})