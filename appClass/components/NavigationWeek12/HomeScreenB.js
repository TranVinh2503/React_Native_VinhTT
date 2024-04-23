import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreenB({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>This is Home B</Text>
          <Button
            title="Go to HomeA"
            onPress={() => navigation.navigate("HomeA")}
          />
        </View>
      );
}

export default HomeScreenB;