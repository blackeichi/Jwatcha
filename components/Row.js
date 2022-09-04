import { useNavigation } from "@react-navigation/native";
import react from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { makeImgPath } from "../utils";

const ContentBox = styled.TouchableOpacity`
  align-items: center;
`;
const ContentImg = styled.Image`
  width: 110px;
  height: 160px;
`;
const ContentTitle = styled.Text`
  color: white;
  font-size: 13px;
  font-weight: 700;
  margin-top: 5px;
`;
const ContentRating = styled.Text`
  color: white;
`;

const Row = ({ posterPath, originalTitle, voteAverage }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail");
  };
  return (
    <ContentBox onPress={goToDetail}>
      <ContentImg source={{ uri: makeImgPath(posterPath) }}></ContentImg>
      <ContentTitle>
        {originalTitle?.slice(0, 10)}
        {originalTitle?.length > 11 ? "..." : null}
      </ContentTitle>
      <ContentRating>
        {voteAverage > 0 ? `⭐️ ${voteAverage}/10` : `Coming soon`}
      </ContentRating>
    </ContentBox>
  );
};
export default Row;
