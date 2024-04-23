import { useEffect, useState } from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  AppState,
} from "react-native";
import {
  createImageMessage,
  createTextMessage,
  createLocationMessage,
} from "./utils/MessageUtils";
import Status from "./components/Message/Status";
import MessageList from "./components/Message/MessageList";
import FullScreenImage from "./components/Message/FullScreenImage";
import Toolbar from "./components/Message/Toolbar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    // Error saving data
  }
};

export default function App() {
  const [fullscreenImageId, setFullscreenImageId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    if (appState.match(/inactive|background/)) {
      console.log("Saving: " + JSON.stringify(messages));
      storeData("messagesData", messages);
    }
  }, [appState]);

  useEffect(() => {
    (async () => {
      const jsonData = await AsyncStorage.getItem("messagesData");
      console.log("Loaded: " + jsonData);
      setMessages(jsonData ? JSON.parse(jsonData) : []);
    })();
    const sub = AppState.addEventListener("change", setAppState);
    return () => {
      sub.remove();
    };
  }, []);

  const deleteMessage = (id) => {
    const newMessages = messages.filter((m) => m.id != id);
    setMessages(newMessages);
  };

  const getMessageById = (id) => {
    return messages.find((item) => item.id == id);
  };

  const dismissFullscreenImage = () => {
    setFullscreenImageId(null);
    return true;
  };
  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <View style={styles.container}>
      <Status />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, paddingBottom: 30 }}
      >
        <MessageList
          messages={messages}
          deleteMessage={deleteMessage}
          setFullscreenImageId={setFullscreenImageId}
        />
        <Toolbar addMessage={addMessage} />
      </KeyboardAvoidingView>

      {fullscreenImageId ? (
        <FullScreenImage
          item={getMessageById(fullscreenImageId)}
          dismissFullscreenImage={dismissFullscreenImage}
        />
      ) : (
        false
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
