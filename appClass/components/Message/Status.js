import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Status() {
    const [isConnected, setIsConnected] = useState(true);
    const backgroundColor = isConnected ? 'white' : 'red';
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(
            state => setIsConnected(state.isConnected)
        );
        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <View style={styles.messageContainer}>
            <StatusBar
                backgroundColor={backgroundColor}
                barStyle={isConnected ? 'dark-content' : 'light-content'}
                animated={false}
            />
            {
                !isConnected && (
                    <View style={styles.bubble}>
                        <Text style={styles.text}>No network connection</Text>
                    </View>
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        zIndex: 1,
        position: 'absolute',
        top: 20,
        right: 0,
        left: 0,
        height: 80,
        alignItems: 'center',
    },
    bubble: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: 'red',
    },
    text: {
        color: 'white',
    },
});