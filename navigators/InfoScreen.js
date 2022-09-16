import { Alert, Button, Text, TouchableOpacity, View } from "react-native";
import auth from "@react-native-firebase/auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tvs from "../screens/Tvs";
import Search from "../screens/Search";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faRightToBracket,
  faSearch,
  faTv,
  faUser,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components/native";
import React from "react";

const nav = createBottomTabNavigator();

const HeaderBtn = styled.TouchableOpacity`
  margin-right: 15px;
`;

const InfoScreen = () => {
  const onLogout = () => {
    auth().signOut();
  };
  const onClickBtn = () => {
    Alert.alert("로그아웃", "정말 로그아웃 하시겠어요?", [
      {
        text: "아니요",
        onPress: () => null,
        style: "cancel",
      },
      { text: "네", onPress: () => auth().signOut() },
    ]);
  };
  return (
    <nav.Navigator
      screenOptions={{
        unmountOnBlur: true,
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
        },
        headerStyle: {
          backgroundColor: "black",
          height: 50,
        },
        headerTitleStyle: {
          color: "white",
        },
        headerRight: () => (
          <>
            <HeaderBtn onPress={onClickBtn}>
              <FontAwesomeIcon
                size={20}
                icon={faRightToBracket}
                style={{ color: "white" }}
              />
            </HeaderBtn>
          </>
        ),
      }}
    >
      <nav.Screen
        name="영화"
        component={Movies}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon
              icon={faVideoCamera}
              size={size}
              style={{ color: color }}
            />
          ),
        }}
      />
      <nav.Screen
        name="TV프로그램"
        component={Tvs}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faTv} size={size} style={{ color: color }} />
          ),
        }}
      />
      <nav.Screen
        name="검색"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon
              icon={faSearch}
              size={size}
              style={{ color: color }}
            />
          ),
        }}
      />
    </nav.Navigator>
  );
};

export default InfoScreen;
