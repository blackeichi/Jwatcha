import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import Begin from "../screens/Begin";

const Nav = createNativeStackNavigator();

const OutNav = () => (
  <Nav.Navigator screenOptions={{ presentation: "modal" }}>
    <Nav.Screen
      name="Begin"
      options={{
        title: "Watcha",
        headerTitleAlign: "center",
        headerRight: () => <Text>로그인</Text>,
        headerTitleStyle: {
          fontWeight: "800",
        },
        headerLargeTitle: true,
      }}
      component={Begin}
    />
  </Nav.Navigator>
);

export default OutNav;
