import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import Begin from "../screens/Begin";
import { useRecoilValue } from "recoil";
import { scrolled } from "../atom";
import { Theme } from "../styled";
import { Login } from "../screens/Login";

const Nav = createNativeStackNavigator();
const OutNav = () => {
  const scrollY = useRecoilValue(scrolled);
  return (
    <Nav.Navigator
      screenOptions={{ presentation: "modal", animation: "slide_from_bottom" }}
    >
      <Nav.Screen
        name="Begin"
        options={{
          title: "Watcha",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: scrollY > 20 ? "black" : "transparent",
          },
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: "800",
            fontSize: 24,
          },
          headerTintColor: Theme.pinkColor,
        }}
        component={Begin}
      />
      <Nav.Screen
        options={{
          headerShown: false,
          headerBackVisible: true,
        }}
        name="Login"
        component={Login}
      />
    </Nav.Navigator>
  );
};

export default OutNav;
