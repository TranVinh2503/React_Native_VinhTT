import { Alert } from "react-native";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";

export default function MessageList({ messages, deleteMessage, setFullscreenImageId }) {

    const renderMessageBody = ({ type, text, uri, coordinate }) => {
        switch (type) {
            case 'text':
                return (
                    <View style={styles.messageBubble}>
                        <Text style={styles.messageText}>{text}</Text>
                    </View>
                );
            case 'image':
                return (
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: uri }}
                    />
                );
            case 'location':
                return (
                    <MapView
                        style={{
                            width: 240,
                            height: 180
                        }}
                        initialRegion={{
                            ...coordinate,
                            latitudeDelta: 0.08,
                            longitudeDelta: 0.04
                        }}
                    />
                );
            default:
                return (<Text></Text>);
        }
    }

    const onPressMessage = ({ id, type }) => {
        switch (type) {
            case 'text':
                Alert.alert(
                    'Delete message?',
                    'Are you sure you want to permanently delete this message?',
                    [
                        { text: 'Cancel', style: 'cancel' },
                        {
                            text: 'Delete', style: 'destructive',
                            onPress: () => deleteMessage(id)
                        }
                    ]
                );
                break;
            case 'image':
                setFullscreenImageId(id);
                break;
        }
    }

    const renderMessageItem = ({ item, deleteMessage }) => {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                activeOpacity={0.65}
                onPress={() => onPressMessage(item)}
            >
                {renderMessageBody(item)}
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            inverted
            style={styles.container}
            data={messages.slice().reverse()}
            renderItem={renderMessageItem}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
        margin: 3,
        alignItems: 'flex-end'
    },
    messageBubble: {
        backgroundColor: '#3063ef',
        paddingHorizontal: 15,
        paddingVertical: 9,
        borderRadius: 18
    },
    messageText: {
        fontSize: 17,
        color: '#eee'
    },
    imageStyle: {
        width: 200,
        height: 200,
        borderRadius: 8
    }
});