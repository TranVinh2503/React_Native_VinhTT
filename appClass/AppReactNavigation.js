import { useEffect, useState } from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  AppState,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate("Profile")}
      />
    );
  };
  const ProfileScreen = ({ navigation, route }) => {
    return (
      <View style={styles.container}>
        <Text>This is ProfileScreen</Text>
        <Button title="Go home" onPress={() => navigation.navigate("Home")} />
      </View>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
