import react, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Detail = ({
  navigation,
  route: {
    params: { params },
  },
}) => {
  useEffect(() => {
    navigation.setOptions({
      title: "original_title" in params ? "Movie" : "TV Show",
    });
  }, []);
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text>Detail</Text>
    </View>
  );
};
export default Detail;
