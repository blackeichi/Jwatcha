import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import { scrolled } from "../atom";
import { useSetRecoilState } from "recoil";
import { moviesApi } from "../api";
import { useQuery } from "react-query";
import { makeImgPath } from "../utils";

const TextView = styled.View`
  width: 100px;
  height: 200px;
  background-color: tomato;
`;
const BgImg = styled.Image``;

const Begin = () => {
  const { isLoading, data } = useQuery("PopMovies", moviesApi.PopMovies);

  const setScrollY = useSetRecoilState(scrolled);
  const handleScroll = (event) => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };
  return (
    <ScrollView onScroll={handleScroll}>
      {data.map((movie) => (
        <View key={movie.id}>
          <BgImg
            style={StyleSheet.absoluteFill}
            source={{ uri: makeImgPath(movie.backdrop_path) }}
          ></BgImg>
        </View>
      ))}
    </ScrollView>
  );
};

export default Begin;
