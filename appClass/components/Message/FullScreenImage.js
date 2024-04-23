import { useEffect } from "react";
import { Image } from "react-native";
import { BackHandler } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native";

export default function FullScreenImage({ item, dismissFullscreenImage }) {
    useEffect(() => {
        const sub = BackHandler.addEventListener(
            'hardwareBackPress',
            dismissFullscreenImage
        );
        return () => { sub.remove(); }
    }, []);
    return (
        <TouchableHighlight
            style={styles.fullscreenOverlay}
            onPress={dismissFullscreenImage}>
            <Image
                style={styles.fullscreenImage}
                source={{ uri: item.uri }} />
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    fullscreenOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black',
        zIndex: 2,
    },
    fullscreenImage: {
        flex: 1,
        resizeMode: 'contain',
    }
});
