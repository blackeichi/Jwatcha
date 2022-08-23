import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Begin from "../screens/Begin";

const Nav = createNativeStackNavigator();

const OutNav = () => (
  <Nav.Navigator screenOptions={{ presentation: "modal", headerShown: false }}>
    <Nav.Screen name="Begin" component={Begin} />
  </Nav.Navigator>
);

export default OutNav;
