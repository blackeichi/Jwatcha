import { BlurView } from "expo-blur";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-web-swiper";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { moviesApi } from "../api";
import { makeImgPath } from "../utils";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  background-color: black;
`;
const SwiperView = styled.View`
  flex: 1;
`;
const Bgimg = styled.Image`
  width: 100%;
  height: 100%;
`;

const Movies = () => {
  const { isLoading: PopLoading, data: PopMovies } = useQuery(
    "PopMovies",
    moviesApi.PopMovies
  );
  return (
    <Container>
      <Swiper
        loop
        timeout={3.5}
        controlsEnabled={false}
        containerStyle={{ width: "100%", height: SCREEN_HEIGHT / 4 }}
      >
        <SwiperView style={{ backgroundColor: "red" }}></SwiperView>
        <SwiperView style={{ backgroundColor: "blue" }}></SwiperView>
        <SwiperView style={{ backgroundColor: "red" }}></SwiperView>
        <SwiperView style={{ backgroundColor: "blue" }}></SwiperView>
      </Swiper>
    </Container>
  );
};
export default Movies;
