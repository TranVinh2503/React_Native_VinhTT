import {StyleSheet,Image} from "react-native"

export default function ImageViewer({PlaceholderImage,selectedImage}) {
    const imageSource = selectedImage !== null ? {uri:selectedImage}: PlaceholderImage
    return ( 
        <Image  source = {imageSource} 
        style={styles.image}/>
     );
}

const styles = StyleSheet.create({
    image:{
        width:350,
        height:440,
        borderRadius:18,
    }
})