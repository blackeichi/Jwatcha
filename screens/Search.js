import React, { useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { moviesApi, TvApi } from "../api";
import Row from "../components/Row";

const Container = styled.ScrollView`
  background-color: black;
`;

const SearchBar = styled.TextInput`
  background-color: white;
  padding: 10px 15px;
  border-radius: 15px;
  width: 90%;
  margin: 10px auto;
`;
const Title = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  padding: 0 20px;
`;
const Title2 = styled(Title)`
  margin-bottom: 10px;
`;

const Search = () => {
  const [query, setQuery] = useState("");
  const onChangeText = (text) => {
    setQuery(text);
  };
  const {
    isLoading: moviesLoading,
    data: moviesData,
    refetch: searchMovies,
  } = useQuery(["searchMovies", query], moviesApi.searchMovie, {
    enabled: false,
  });
  const {
    isLoading: tvLoading,
    data: tvData,
    refetch: searchTvs,
  } = useQuery(["searchTvs", query], TvApi.searchTv, {
    enabled: false,
  });
  const onSubmit = () => {
    if (query === "") {
      return;
    }
    searchMovies();
    searchTvs();
  };
  return (
    <Container>
      <SearchBar
        placeholder="Search for Movie or TV Show"
        placeholderTextColor="grey"
        returnKeyType="search"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
      />
      {moviesLoading || tvLoading ? (
        <ActivityIndicator style={{ marginTop: 30, marginBottom: 30 }} />
      ) : null}
      {moviesData || tvData ? (
        <View style={{ alignItems: "center" }}>
          <Title>"{query}" 검색 결과</Title>
        </View>
      ) : null}

      {moviesData ? (
        <>
          <Title2>영화</Title2>
          <FlatList
            data={moviesData.results}
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
                fullData={item}
              />
            )}
          />
        </>
      ) : null}

      {tvData ? (
        <>
          <Title2>TV프로그램</Title2>
          <FlatList
            data={tvData.results}
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
                fullData={item}
              />
            )}
          />
        </>
      ) : null}
    </Container>
  );
};
export default Search;
//배우검색하기
//detail
