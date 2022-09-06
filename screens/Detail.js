import {
  faInternetExplorer,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import react, { useEffect } from "react";
import {
  ActivityIndicator,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { moviesApi, TvApi } from "../api";
import { makeImgPath } from "../utils";

const BgImg = styled.ImageBackground`
  width: 100%;
  height: 250px;
  background-position: center;
`;
const Content = styled.View`
  flex-direction: row;
  margin-top: 100px;
  padding: 0 20px;
`;
const Poster = styled.Image`
  width: 150px;
  height: 200px;
`;
const Title = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: 600;
  margin-left: 10px;
  top: 140px;
  width: 50%;
`;
const SubContent = styled.View`
  padding: 0 20px;
`;
const Overview = styled.Text`
  color: white;
  margin: 20px 0;
`;
const VideoBtn = styled.TouchableOpacity`
  flex-direction: row;
  margin: 5px 0;
`;
const BtnText = styled.Text`
  color: white;
  margin-left: 5px;
`;
const Browser = styled.Text`
  color: white;
  font-weight: 700;
  margin: 0 5px;
`;
const Detail = ({
  navigation,
  route: {
    params: { params },
  },
}) => {
  useEffect(() => {
    navigation.setOptions({
      title: "original_title" in params ? "Movie" : "TV Show",
    });
  }, []);
  const isMovie = "original_title" in params;
  const { isLoading, data } = useQuery(
    [isMovie ? "movies" : "tv", params.id],
    isMovie ? moviesApi.detailMovie : TvApi.detailTv
  );
  const openYTLink = async (videoID) => {
    const baseUrl = `https://m.youtube.com/watch?v=${videoID}`;
    await Linking.openURL(baseUrl);
    //await WebBrowser.openBrowserAsync(baseUrl);
  };
  const openBrowser = async () => {
    await Linking.openURL(data.homepage);
  };
  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <ScrollView style={{ backgroundColor: "black", flex: 1 }}>
      <BgImg
        source={{ uri: makeImgPath(params.backdrop_path) }}
        style={StyleSheet.absoluteFill}
      >
        <LinearGradient
          colors={[
            "rgba(0,0,0,1)",
            "rgba(0,0,0,0.5)",
            "rgba(0,0,0,0.3)",
            "rgba(0,0,0,0.5)",
            "rgba(0,0,0,1)",
          ]}
          style={{ height: "100%", width: "100%" }}
        />
      </BgImg>
      <Content>
        <Poster source={{ uri: makeImgPath(params.poster_path) }} />
        <Title>{params.title}</Title>
      </Content>
      <SubContent>
        <Overview>{params.overview}</Overview>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginBottom: 10,
            alignItems: "center",
          }}
          onPress={() => openBrowser()}
        >
          <FontAwesomeIcon
            color="#005792"
            size={20}
            icon={faInternetExplorer}
          />
          <Browser>공식 홈페이지</Browser>
          <FontAwesomeIcon color="white" size={12} icon={faArrowRight} />
        </TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <FontAwesomeIcon color="red" size={20} icon={faYoutube} />
          <Browser>관련 영상</Browser>
        </View>

        {data?.videos?.results?.slice(0, 7).map((video) =>
          video.site === "YouTube" ? (
            <VideoBtn key={video.key} onPress={() => openYTLink(video.key)}>
              <BtnText>
                ◾ {video.name.slice(0, 45)}{" "}
                {video.name.length > 45 ? "..." : ""}
              </BtnText>
            </VideoBtn>
          ) : null
        )}
      </SubContent>
    </ScrollView>
  );
};
export default Detail;
