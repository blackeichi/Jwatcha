import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Detail from "../screens/Detail";
import InfoScreen from "./InfoScreen";

const nav = createNativeStackNavigator();

const InNav = () => (
  <nav.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <nav.Screen
      options={{ headerShown: false }}
      name="InfoScreen"
      component={InfoScreen}
    />
    <nav.Screen
      options={{
        headerStyle: { backgroundColor: "black" },
        headerTitleAlign: "center",
        headerTitleStyle: { color: "white" },
        headerTintColor: "white",
      }}
      name="Detail"
      component={Detail}
    />
  </nav.Navigator>
);
export default InNav;
