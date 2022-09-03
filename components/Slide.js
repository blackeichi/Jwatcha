import react from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { makeImgPath } from "../utils";

const SwiperView = styled.View`
  flex: 1;
  background-color: white;
`;
const Bgimg = styled.Image``;

const Slide = (
  backdropPath,
  posterPath,
  originalTitle,
  voteAverage,
  overview
) => {
  return (
    <SwiperView>
      <Bgimg
        style={StyleSheet.absoluteFill}
        source={{ uri: makeImgPath(backdropPath) }}
      />
    </SwiperView>
  );
};
export default Slide;
