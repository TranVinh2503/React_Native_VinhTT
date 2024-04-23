import { StatusBar } from 'expo-status-bar';
import {View,Text,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native'

function PrimaryButton({children,onPress}) {
    return (
                <TouchableOpacity activeOpacity={0.6} style={styles.touBar} onPress={onPress}>
                    <View style={styles.btnContainer}>
                    <Text style={styles.btnText}>{children}</Text>
                </View>
                </TouchableOpacity>
                
            )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    touBar:{
    },
    btnContainer:{
        backgroundColor : "#a90c68",
        borderRadius: 30,
        padding:10,

    },
    btnText:{
        fontSize:18,
        color:'#fff',
        textAlign:'center'
    }
})