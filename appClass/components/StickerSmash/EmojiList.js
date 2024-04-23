import { useState } from "react";
import { StyleSheet, FlatList, Image, Platform, Pressable } from "react-native";
function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    require("./images/sad.png"),
    require("./images/smile.png"),
    require("./images/star.png"),
    require("./images/thinking.png"),
    require("./images/emoji.png"),
    require("./images/glasses.png"),
    require("./images/love.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS == "web" ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}
          >
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
}

export default EmojiList;

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
