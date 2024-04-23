import { useEffect, useState } from "react";
import { AppState, StyleSheet, Text, View } from "react-native";
import {millisecondsToHuman} from '../utils/TimerUtils'
import TimerButton from "./TimerButton";

export default (props) => {
    const [isRunning, setIsRunning] = useState(props.isRunning);
    const [timestamp, setTimestamp] = useState(props.elapsed);
    const [startStop, setStartStop] = useState("s");
    let t = 0;
    const toggleRunning = () => {
        setIsRunning(!isRunning);
    };

    useEffect(() => {
        if (isRunning) {
            t = setTimeout(() => {
                setTimestamp(timestamp + 1000);
            }, 1000);
            console.log('timeout started (' + t + ')');
        } else {
            console.log('timeout cleared (' + t + ')');
            clearTimeout(t);
        }
    }, [isRunning, timestamp]);
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{props.title}</Text>
            <Text style={{ fontSize: 17 }}>{props.project}</Text>
            <Text style={{
                paddingTop: 10,
                paddingBottom: 24,
                textAlign: 'center',
                fontSize: 28,
                fontWeight: 'bold'
            }}>{millisecondsToHuman(timestamp)}</Text>
            <View style={styles.buttonGroup}>
                <TimerButton
                    small
                    title="Edit"
                    color="blue"
                    onPress={()=>{props.editAction({
                        elapsed:timestamp,
                        isRunning:isRunning
                    })}
                }
                />
                <TimerButton
                    small
                    title="Remove"
                    color="orange"
                    onPress={props.removeAction}
                />
            </View>
            <TimerButton title={isRunning ? "Stop" : "Start"} onPress={toggleRunning} color="green" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        borderWidth: 3,
        borderRadius: 6,
        padding: 15,
        borderColor: '#bbb'
    },
    buttonGroup: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});