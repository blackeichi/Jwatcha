import { Button, Text, TouchableOpacity, View } from "react-native";
import auth from "@react-native-firebase/auth";
const InNav = () => {
  const onLogout = () => {
    auth().signOut();
  };
  return (
    <TouchableOpacity onPress={onLogout}>
      <Text>home</Text>
    </TouchableOpacity>
  );
};

export default InNav;
