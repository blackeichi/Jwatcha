import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Text } from "react-native";
import Begin from "../screens/Begin";

const Nav = createNativeStackNavigator();
const OutNav = () => {
  return (
    <Nav.Navigator screenOptions={{ presentation: "modal" }}>
      <Nav.Screen
        name="Begin"
        options={{
          title: "Watcha",
          headerTitleAlign: "center",
          headerRight: () => (
            <Text style={{ fontSize: 17, fontWeight: "800", color: "white" }}>
              로그인
            </Text>
          ),
          headerTitleStyle: {
            fontWeight: "800",
            fontSize: 26,
          },
          headerTintColor: "#FF0558",
        }}
        component={Begin}
      />
    </Nav.Navigator>
  );
};

export default OutNav;
