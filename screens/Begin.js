import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import { scrolled } from "../atom";
import { useSetRecoilState } from "recoil";
import { moviesApi } from "../api";
import { useQuery } from "react-query";
import { Slide } from "../components/Slide";

const TextView = styled.View`
  width: 100px;
  height: 200px;
  background-color: tomato;
`;

const Begin = () => {
  const { isLoading, data } = useQuery("PopMovies", moviesApi.PopMovies);
  //데이터끊기
  const setScrollY = useSetRecoilState(scrolled);
  const handleScroll = (event) => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };
  return (
    <ScrollView onScroll={handleScroll}>
      <Slide Image={data} />
    </ScrollView>
  );
};

export default Begin;
