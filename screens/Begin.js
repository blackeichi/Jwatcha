import React, { useEffect, useState } from "react";
import {
  Animated,
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
import { useRecoilState, useSetRecoilState } from "recoil";
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
  font-weight: 800;
  text-align: center;
  color: white;
  word-break: keep-all;
  font-family: "sans-serif-condensed";
`;
const HomeBox_Title2 = styled(HomeBox_Title)`
  font-size: 26px;
`;
const HomeBox_Btn = styled.TouchableOpacity`
  background-color: #ff0558;
  padding: 11px 22px;
  border-radius: 6px;
  margin: 20px 0;
`;
const AnimatedBox = styled.View`
  position: absolute;
  width: 100%;
  background-color: #ff0558;
  padding: 11px 22px;
  border-radius: 6px;
  bottom: -70;
`;
const AnimatedBtn = Animated.createAnimatedComponent(AnimatedBox);

const Begin = () => {
  const { isLoading, data: PopMovies } = useQuery(
    "PopMovies",
    moviesApi.PopMovies
  );
  const [BtnY, setBtnY] = useState(new Animated.Value(0));
  const [ScrollY, setScrollY] = useRecoilState(scrolled);
  const [down, setDown] = useState(false);
  const handleScroll = (event) => {
    setScrollY(event.nativeEvent.contentOffset.y);
    if (ScrollY > 560) {
      setDown(true);
    } else {
      setDown(false);
    }
  };

  useEffect(() => {
    Animated.timing(BtnY, {
      toValue: ScrollY > 560 ? -70 : 0,
      useNativeDriver: true,
      duration: 100,
    }).start();
  }, [down]);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView onScroll={handleScroll}>
        {PopMovies?.results?.slice(0, 2).map((movie) => (
          <Wrapper key={movie.id}>
            <BgImg
              style={{ height: SCREEN_HEIGHT }}
              source={{ uri: makeImgPath(movie.poster_path) }}
            >
              <LinearGradient
                colors={[
                  "rgba(0,0,0,1)",
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
                height: SCREEN_HEIGHT / 3.5,
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
          <HomeBox_Title2 style={{ marginTop: SCREEN_HEIGHT / 2 }}>
            다양한 디바이스에서
          </HomeBox_Title2>
          <HomeBox_Title2>자유롭게 감상</HomeBox_Title2>
          <Text style={{ color: "rgba(255,255,255,0.6)" }}>
            PC, 태블릿, 폰, 크롬캐스트, TV
          </Text>
          <Text style={{ color: "rgba(255,255,255,0.6)" }}>
            어디서나 최고의 화질로
          </Text>
          <HomeBox_Title2 style={{ marginTop: SCREEN_HEIGHT / 2 }}>
            6억개 평가 데이터 기반
          </HomeBox_Title2>
          <HomeBox_Title2>정확한 추천</HomeBox_Title2>
          <Text style={{ color: "rgba(255,255,255,0.6)" }}>
            취향에 안 맞는 작품에
          </Text>
          <Text style={{ color: "rgba(255,255,255,0.6)" }}>
            두 시간을 낭비할 순 없으니까
          </Text>
        </HomeBox>
      </ScrollView>
      <TouchableOpacity>
        <AnimatedBtn style={{ transform: [{ translateY: BtnY }] }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 15,
              fontWeight: "800",
            }}
          >
            2주 무료 이용
          </Text>
        </AnimatedBtn>
      </TouchableOpacity>
    </View>
  );
};

export default Begin;
//
