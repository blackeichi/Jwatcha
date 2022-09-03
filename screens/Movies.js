import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { moviesApi } from "../api";
import Slide from "../components/Slide";
import { makeImgPath } from "../utils";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Container = styled.ScrollView`
  background-color: black;
`;

const Movies = () => {
  const { isLoading: Toploading, data: Topdata } = useQuery(
    "TopMovies",
    moviesApi.TopMovies
  );
  return (
    //<Container>
    <Swiper
      horizontal
      loop
      autoplay
      autoplayTimeout={3.5}
      showsButtons={false}
      showsPagination={false}
      containerStyle={{
        marginBottom: 40,
        width: "100%",
        height: SCREEN_HEIGHT / 4,
      }}
    >
      {Topdata?.results.map((movie) => (
        <View key={movie.id} style={{ backgroundColor: "blue" }}></View>
      ))}
    </Swiper>
    //</Container>
    /*           {TopMovies?.results?.map((movie) => (
            <>
              <Text style={{ color: "white" }}>test</Text>
              <Slide
                key={movie.id}
                backdropPath={movie.backdrop_path}
                posterPath={movie.poster_path}
                originalTitle={movie.original_title}
                voteAverage={movie.vote_average}
                overview={movie.overview}
              />
            </>
          ))} */
  );
};
export default Movies;
