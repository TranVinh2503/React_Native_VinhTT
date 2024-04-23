import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreenA from "./components/NavigationWeek12/HomeScreenA";
import HomeScreenB from "./components/NavigationWeek12/HomeScreenB";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  function HomeScreen() {
    return (
        <Stack.Navigator initialRouteName="HomeB">
          <Stack.Screen name="HomeA" component={HomeScreenA} />
          <Stack.Screen name="HomeB" component={HomeScreenB} />
        </Stack.Navigator>
    );
  }

  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
