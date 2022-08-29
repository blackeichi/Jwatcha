import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import OutNav from "./navigators/OutNav";
import { RecoilRoot } from "recoil";
export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      console.log(isLoggedIn);
    });
  }, []);
  return (
    <RecoilRoot>
      <NavigationContainer>
        {isLoggedIn ? null : <OutNav />}
      </NavigationContainer>
    </RecoilRoot>
  );
}
