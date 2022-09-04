import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import { useQuery, useQueryClient } from "react-query";
import styled from "styled-components/native";
import { moviesApi } from "../api";
import Row from "../components/Row";
import Column from "../components/Column";
import Slide from "../components/Slide";
import { makeImgPath } from "../utils";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const NowPlayingScroll = styled.FlatList`
  margin-bottom: 20px;
`;
const UpcomingScroll = styled.FlatList`
  padding-left: 20px;
`;
const Title = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0;
  padding: 0 20px;
`;

const Movies = () => {
  const { isLoading: Toploading, data: Topdata } = useQuery(
    ["movies", "TopMovies"],
    moviesApi.TopMovies
  );
  const { isLoading: NowLoaing, data: Nowdata } = useQuery(
    ["movies", "NowPlayingMovies"],
    moviesApi.NowPlayingMovies
  );
  const { isLoading: UpcomingLoaing, data: Upcomingdata } = useQuery(
    ["movies", "UpcomingMovies"],
    moviesApi.UpcomingMovies
  );
  const Top = Topdata?.results.slice(0, 8);
  const loading = Toploading || NowLoaing || UpcomingLoaing;
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    queryClient.refetchQueries(["movies"]);
    setRefreshing(false);
  };
  return loading ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      onRefresh={onRefresh}
      refreshing={refreshing}
      ListHeaderComponentStyle={{ backgroundColor: "black" }}
      ListHeaderComponent={
        <>
          <Swiper
            horizontal
            loop
            autoplay
            autoplayTimeout={4.5}
            showsButtons={false}
            showsPagination={false}
            containerStyle={{
              marginBottom: 40,
              width: "100%",
              height: SCREEN_HEIGHT / 4,
              backgroundColor: "white",
            }}
          >
            {Top.map((movie) => (
              <Slide
                key={movie.id}
                backdropPath={movie.backdrop_path}
                posterPath={movie.poster_path}
                originalTitle={movie.original_title}
                voteAverage={movie.vote_average}
                overview={movie.overview}
              />
            ))}
          </Swiper>
          <Title>현재 상영중인 영화</Title>

          <NowPlayingScroll
            data={Nowdata.results}
            horizontal
            contentContainerStyle={{
              paddingHorizontal: 20,
            }}
            ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
            showsHorizontalScrollIndicator={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Row
                posterPath={item.poster_path}
                originalTitle={item.original_title}
                voteAverage={item.vote_average}
              />
            )}
          />
          <Title>상영 예정 영화</Title>
          <UpcomingScroll
            data={Upcomingdata.results}
            showsHorizontalScrollIndicator={true}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
            renderItem={({ item }) => (
              <Column
                posterPath={item.poster_path}
                originalTitle={item.original_title}
                releaseDate={item.release_date}
                overview={item.overview}
              />
            )}
          />
        </>
      }
    ></FlatList>
  );
};
export default Movies;
