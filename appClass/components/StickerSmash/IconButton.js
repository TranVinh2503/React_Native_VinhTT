import {Pressable, StyleSheet,Text} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
function IconButton({icon,label,onPress}) {
    return ( 
        <Pressable style={styles.iconButton} onPress={onPress} >
            <MaterialIcons name={icon} size={24} color="#fff"/>
            <Text style={styles.iconButtonLabel} >{label}</Text>
        </Pressable>
     );
}

export default IconButton;
const styles = StyleSheet.create({
    iconButton: {
      alignItems:'center',
      justifyContent:'center'
    },
    iconButtonLabel: {
      color:"#fff",
      marginTop:12,
    },
  });