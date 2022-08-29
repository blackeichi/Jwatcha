import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import Begin from "../screens/Begin";
import { useRecoilState, useRecoilValue } from "recoil";
import { scrolled } from "../atom";
import { Theme } from "../styled";

const Nav = createNativeStackNavigator();
const OutNav = () => {
  const scrollY = useRecoilValue(scrolled);
  return (
    <Nav.Navigator
      screenOptions={{
        presentation: "modal",
      }}
    >
      <Nav.Screen
        name="Begin"
        options={{
          title: "Watcha",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "800",
                  color: "white",
                }}
              >
                로그인
              </Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: scrollY > 20 ? "black" : "transparent",
            position: "absolute",
            top: 0,
          },
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: "800",
            fontSize: 26,
          },
          headerTintColor: Theme.pinkColor,
        }}
        component={Begin}
      />
    </Nav.Navigator>
  );
};

export default OutNav;
