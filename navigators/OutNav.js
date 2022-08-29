import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Text } from "react-native";
import Begin from "../screens/Begin";
import { useRecoilState, useRecoilValue } from "recoil";
import { scrolled } from "../atom";

const Nav = createNativeStackNavigator();
const OutNav = () => {
  const scrollY = useRecoilValue(scrolled);
  return (
    <Nav.Navigator screenOptions={{ presentation: "modal" }}>
      <Nav.Screen
        name="Begin"
        options={{
          title: "Watcha",
          headerTitleAlign: "center",
          headerRight: () => (
            <Text
              style={{
                fontSize: 17,
                fontWeight: "800",
                color: scrollY > 20 ? "white" : "black",
              }}
            >
              로그인
            </Text>
          ),
          headerStyle: {
            backgroundColor: scrollY > 20 ? "black" : "white",
          },
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
