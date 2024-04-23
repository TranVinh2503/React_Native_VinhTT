import react from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import ImageViewer from "./ImageViewer";
import Button from "./Button";
import * as ImagePicker from "expo-image-picker";
import IconButton from "./IconButton";
import CircleButton from "./CircleButton";
import EmojiPicker from "./EmojiPicker";
import EmojiList from "./EmojiList";
import EmojiSicker from "./EmojiSticker"
/*
API of result object in line 16 
{
  "assets": [
    {
      "assetId": null,
      "base64": null,
      "duration": null,
      "exif": null,
      "height": 4800,
      "rotation": null,
      "type": "image",
      "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%username%252Fsticker-smash-47-beta/ImagePicker/77c4e56f-4ccc-4c83-8634-fc376597b6fb.jpeg",
      "width": 3200
    }
  ],
  "canceled": false,
  "cancelled": false
}
*/

const PlaceholderImage = require("./images/backgroundImageStickerSmash.jpg");

export default function () {
  const [selectedImage, setSelectedImage] = useState(null);
  // True when user picks an image from the media library
  const [showAppOption, setShowAppOption] = useState(false);

  // use for modal
  const [isModalVisible, setIsModalVisible] = useState(false);

    const [pickedEmoji,setPickedEmoji] = useState(null)

  const pickImageAsync = async () => {
    // LaunchImageLibraryAsync receives an object in which different options are specified. This object is an ImagePicker. We can pass the object to specify different options when invoking the method.
    //When allowsEditing is set to true, the user can crop the image during the selection process on Android and iOS but not on the web.
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOption(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const onReset = () => {
    setShowAppOption(false);
  };
  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  const onSaveImageAsync = async () => {};
  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          PlaceholderImage={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji !== null ? <EmojiSicker imageSize ={40} stickerSource={pickedEmoji}/> : null}
      </View>
      {showAppOption ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOption(true)}
          />
        </View>
      )}
      <EmojiPicker
        isVisible={isModalVisible}
        onClose={onModalClose}
      >
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    color: "#fff",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 2,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
