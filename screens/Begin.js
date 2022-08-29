import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import { scrolled } from "../atom";
import { useSetRecoilState } from "recoil";
import { moviesApi } from "../api";
import { useQuery } from "react-query";
import { makeImgPath } from "../utils";
import LinearGradient from "react-native-linear-gradient";
import { Theme } from "../styled";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Wrapper = styled.View``;
const BgImg = styled.ImageBackground`
  width: 100%;
`;
const HomeBox = styled.View`
  width: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 400;
`;
const HomeBox_Title = styled.Text`
  font-size: 32px;
  width: 60%;
  font-weight: 800;
  text-align: center;
  color: white;
  word-break: keep-all;
  font-family: "sans-serif-condensed";
`;
const HomeBox_Btn = styled.TouchableOpacity`
  background-color: #ff0558;
  padding: 11px 22px;
  border-radius: 6px;
  margin: 20px 0;
`;

const Begin = () => {
  const { isLoading, data: PopMovies } = useQuery(
    "PopMovies",
    moviesApi.PopMovies
  );
  const setScrollY = useSetRecoilState(scrolled);
  const handleScroll = (event) => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };
  return (
    <ScrollView onScroll={handleScroll}>
      {PopMovies?.results?.slice(0, 3).map((movie) => (
        <Wrapper key={movie.id}>
          <BgImg
            style={{ height: SCREEN_HEIGHT }}
            source={{ uri: makeImgPath(movie.poster_path) }}
          >
            <LinearGradient
              colors={[
                "rgba(0,0,0,0.7)",
                "rgba(0,0,0,0.5)",
                "rgba(0,0,0,0.3)",
                "rgba(0,0,0,0.8)",
                "rgba(0,0,0,1)",
                "rgba(0,0,0,1)",
              ]}
              style={{ height: "100%", width: "100%" }}
            ></LinearGradient>
          </BgImg>
          <View
            style={{
              width: "100%",
              height: SCREEN_HEIGHT / 3,
              backgroundColor: "black",
            }}
          ></View>
        </Wrapper>
      ))}
      <HomeBox>
        <HomeBox_Title>지금 무료로</HomeBox_Title>
        <HomeBox_Title>무제한 감상 시작</HomeBox_Title>
        <Text style={{ color: "white", paddingVertical: 20 }}>
          영화, 드라마, 예능 등 10만 편의 작품
        </Text>
        <HomeBox_Btn>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "800" }}>
            2주 무료 이용
          </Text>
        </HomeBox_Btn>
      </HomeBox>
    </ScrollView>
  );
};

export default Begin;
