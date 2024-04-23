//imageSize: a value defined inside the <App> component. We will use this value in the next chapter to scale the image's size when tapped.
//stickerSource: the source of the selected emoji image.
import { View, Image } from 'react-native';
function EmojiSticker({imageSize,stickerSource}) {
    return ( 
        <View style ={{top:-350}}>
            <Image
            source ={stickerSource}
            resizeMode = 'contain'
            style ={{width: imageSize, heigh: imageSize}}
            />
        </View>

     );
}

export default EmojiSticker;