import React, { useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useQuery, useQueryClient } from "react-query";
import styled from "styled-components/native";
import { TvApi } from "../api";
import Row from "../components/Row";

const TvScroll = styled.FlatList``;
const Title = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0;
  margin-top: 40px;
  padding: 0 20px;
`;

const Tvs = () => {
  const { isLoading: Poploading, data: Popdata } = useQuery(
    ["Tvs", "PopTvs"],
    TvApi.PopTv
  );
  const { isLoading: Toploading, data: Topdata } = useQuery(
    ["Tvs", "TopTvs"],
    TvApi.TopTv
  );
  const { isLoading: latestloading, data: latestdata } = useQuery(
    ["Tvs", "latestTvs"],
    TvApi.latestTv
  );
  const { isLoading: onAirloading, data: onAirdata } = useQuery(
    ["Tvs", "onAirTvs"],
    TvApi.onAirTv
  );
  const loading = Poploading || Toploading || latestloading || onAirloading;
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    queryClient.refetchQueries(["Tvs"]);
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
          <Title>왓챠 익스클루시브</Title>
          <TvScroll
            data={Popdata.results}
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
                originalTitle={item.original_name}
                voteAverage={item.vote_average}
              />
            )}
          />
          <Title>왓챠 최고 인기작</Title>
          <TvScroll
            data={Topdata.results}
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
                originalTitle={item.original_name}
                voteAverage={item.vote_average}
              />
            )}
          />
          <Title>실시간 방영</Title>
          <TvScroll
            data={onAirdata.results}
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
                originalTitle={item.original_name}
                voteAverage={item.vote_average}
              />
            )}
          />
          <Title>새로운 에피소드</Title>
          <TvScroll
            data={latestdata.results}
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
                originalTitle={item.original_name}
                voteAverage={item.vote_average}
              />
            )}
          />
        </>
      }
    />
  );
};
export default Tvs;
