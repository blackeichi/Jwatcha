import { BlurView } from "@react-native-community/blur";
import { useNavigation } from "@react-navigation/native";
import react from "react";
import { StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import { makeImgPath } from "../utils";

const SwiperView = styled.View`
  flex: 1;
  background-color: white;
`;
const Bgimg = styled.Image``;
const ContentBox = styled.View`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const ContentImg = styled.Image`
  width: 110px;
  height: 160px;
`;
const Content = styled.View`
  width: 60%;
`;
const ContentTitle = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const ContentOverview = styled.Text`
  color: white;
  font-size: 14px;
  margin-bottom: 10px;
`;
const ContentRating = styled.Text`
  color: white;
`;

const Slide = ({
  backdropPath,
  posterPath,
  originalTitle,
  voteAverage,
  overview,
  fullData,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", { params: { ...fullData } });
  };
  return (
    <SwiperView>
      <Bgimg
        style={StyleSheet.absoluteFill}
        source={{ uri: makeImgPath(backdropPath) }}
      />
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="dark"
        blurAmount={2}
        reducedTransparencyFallbackColor="white"
      ></BlurView>
      <TouchableWithoutFeedback onPress={goToDetail}>
        <ContentBox>
          <ContentImg source={{ uri: makeImgPath(posterPath) }} />
          <Content>
            <ContentTitle>{originalTitle}</ContentTitle>
            <ContentOverview>
              {overview.slice(0, 80)}
              {overview.length > 80 ? "..." : null}
            </ContentOverview>
            <ContentRating>⭐ {voteAverage}/10</ContentRating>
          </Content>
        </ContentBox>
      </TouchableWithoutFeedback>
    </SwiperView>
  );
};
export default Slide;
