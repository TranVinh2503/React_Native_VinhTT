import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createContext,useContext } from "react";
import {HomeAContext} from './context/HomeAContext'


function HomeScreenA({ navigation }) {
    // const props = useContext(HomeAContext)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is Home A</Text>
        <Text>Param1: {props.param1}</Text>
        <Text>Param2: {props.param2}</Text>
        <Button
          title="Go to HomeB"
          onPress={() => navigation.navigate("HomeB")}
        />
      </View>
    );
}

export default HomeScreenA;