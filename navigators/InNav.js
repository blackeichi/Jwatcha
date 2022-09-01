import { Button, Text, TouchableOpacity, View } from "react-native";
import auth from "@react-native-firebase/auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tvs from "../screens/Tvs";
import Search from "../screens/Search";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSearch,
  faTv,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";

const nav = createBottomTabNavigator();

const InNav = () => {
  const onLogout = () => {
    auth().signOut();
  };
  return (
    <nav.Navigator
      screenOptions={{
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
        },
        headerTitleStyle: {
          color: "white",
        },
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
          tabBarIcon: ({ color, size }) => {
            <FontAwesomeIcon
              icon={faTv}
              size={size}
              style={{ color: color }}
            />;
          },
        }}
      />
      <nav.Screen
        name="검색"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => {
            <FontAwesomeIcon
              icon={faSearch}
              size={size}
              style={{ color: color }}
            />;
          },
        }}
      />
    </nav.Navigator>
  );
};

export default InNav;
