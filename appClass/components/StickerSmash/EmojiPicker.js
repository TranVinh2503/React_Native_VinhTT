import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

/*
isVisible: a boolean that determines whether the modal is visible or not.
onClose: a function that closes the modal.
children: used later to display a list of emoji.
*/
function EmojiPicker({isVisible,children,onClose}) {
/*
The <Modal>:  component displays a title and a close button.
Its "visible" prop takes the value of isVisible and controls if the modal is open or closed.
Its "transparent" prop is a boolean value that determines whether the modal fills the entire view.
Its "animationType" prop determines how it enters and leaves the screen. In this case, it is sliding from the bottom of the screen.
Lastly, the "<EmojiPicker>" onClose prop is called when the user presses the close <Pressable>.
*/
    return ( 
      <Modal animationType="slide" transparent={true} visible = {isVisible}>
        <View style={styles.modalContent}>
          <View style ={styles.titleContainer}>
            <Text  style={styles.title}>Choose a sticker</Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name ='close' color='#fff' size ={22}/>
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
     );
}

export default EmojiPicker;
const styles = StyleSheet.create({
    modalContent: {
      height: '25%',
      width: '100%',
      backgroundColor: '#25292e',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    },
    titleContainer: {
      height: '16%',
      backgroundColor: '#464C55',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 16,
    },
    pickerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 50,
      paddingVertical: 20,
    },
  });
  