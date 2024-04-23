import { useState } from "react";
import TimerButton from "./TimerButton";
import TimerForm from "./TimerForm";
import { StyleSheet, View, Text, Button } from 'react-native';
import { newTimer } from "../utils/TimerUtils";

function ToggableTimerForm(props) {
    const [isOpen,setIsOpen]= useState(false)

    const submitCreate = (data)=>{
        const t = newTimer(data)
        props.submitCreateTimer(t)
    }

    return ( <View style={[
        styles.container,
        !isOpen && styles.buttonPadding
    ]}
        >
            {isOpen ? <TimerForm submitAction= {submitCreate}  closeForm = {() => setIsOpen(false)}            
            /> : <TimerButton onPress={() => {
                setIsOpen(true)
            }} title = "+" color= 'black'/>}

    </View> );
}

export default ToggableTimerForm;

const styles = {
    container:{

    }
}