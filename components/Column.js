import { useNavigation } from "@react-navigation/native";
import react from "react";
import styled from "styled-components/native";
import { makeImgPath } from "../utils";
const Layout = styled.TouchableOpacity`
  flex-direction: row;
`;
const ContentImg = styled.Image`
  width: 110px;
  height: 160px;
  margin-right: 10px;
`;
const ColumnBox = styled.View`
  width: 65%;
`;

const Title = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: white;
`;
const Release = styled.Text`
  color: white;
  margin: 10px 0;
  font-size: 11px;
`;
const Overview = styled.Text`
  color: white;
`;
const Column = ({
  posterPath,
  originalTitle,
  releaseDate,
  overview,
  fullData,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", { params: { ...fullData } });
  };
  return (
    <Layout onPress={goToDetail}>
      <ContentImg source={{ uri: makeImgPath(posterPath) }}></ContentImg>
      <ColumnBox>
        <Title>{originalTitle}</Title>
        <Release>{releaseDate}</Release>
        <Overview>
          {overview !== "" && overview.length > 80
            ? `${overview.slice(0, 140)}...`
            : overview}
        </Overview>
      </ColumnBox>
    </Layout>
  );
};

export default Column;
