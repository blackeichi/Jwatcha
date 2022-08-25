import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: 800;
`;
const LoginBtn = styled.Text``;

const Begin = () => (
  <>
    <Header>
      <Title>Watcha</Title>
      <LoginBtn>로그인</LoginBtn>
    </Header>
  </>
);

export default Begin;
