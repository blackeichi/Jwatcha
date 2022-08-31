import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import OutNav from "./navigators/OutNav";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { Theme } from "./styled";
import InNav from "./navigators/InNav";
export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      console.log("Log In : ", isLoggedIn);
    });
  }, []);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={Theme}>
          <NavigationContainer>
            {isLoggedIn ? <InNav /> : <OutNav />}
          </NavigationContainer>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
