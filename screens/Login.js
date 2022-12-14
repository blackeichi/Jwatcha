import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useRef, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Theme } from "../styled";
import auth from "@react-native-firebase/auth";

export const GobackBtn = styled.TouchableOpacity`
  padding: 10px;
`;
export const InputBox = styled.View`
  height: 85%;
  justify-content: center;
`;
export const Label = styled.Text`
  color: white;
  font-size: 24px;
  padding: 20px 15px;
`;
export const LoginInput = styled.TextInput`
  padding: 10px 15px;
  margin-right: 40px;
  font-size: 20px;
  color: white;
`;
export const CancelInput = styled.TouchableOpacity`
  background-color: gray;
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  position: absolute;
  right: 10px;
  top: 25%;
`;
export const LoginBtn = styled.TouchableOpacity`
  position: absolute;
  padding: 10px;
  right: 0;
`;
export const ErrorMessage = styled.Text`
  color: ${(props) => props.color};
  padding: 0 15px;
  font-size: 15px;
`;
export const LoginText = styled.Text`
  color: ${(props) => props.color};
  font-size: 20px;
`;
export const JoinBtn = styled.TouchableOpacity`
  padding-left: 10px;
  width: 200px;
`;
export const JoinText = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  text-decoration: underline;
`;

export const Login = ({ navigation: { goBack, navigate } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const passwordInput = useRef();
  const onNext = () => {
    passwordInput.current.focus();
  };
  const onSubmit = () => {
    if (email === "" || password === "") {
      return setError("내용을 입력하지 않으셨어요.");
    }
    if (!email.includes("@")) {
      return setError("이메일 형식이 옳바르지 않습니다.");
    }
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      setError("로그인 정보가 옳바르지 않습니다.");
    }
  };
  const ClearEmail = () => {
    setEmail("");
  };
  const ClearPassword = () => {
    setPassword("");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "black", paddingHorizontal: 10 }}>
      <GobackBtn onPress={() => goBack()}>
        <FontAwesomeIcon size={25} style={{ color: "white" }} icon={faXmark} />
      </GobackBtn>
      <InputBox>
        <Label>로그인</Label>
        <View style={{ position: "relative" }}>
          <LoginInput
            autoFocus={true}
            placeholder="email@address.com"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            value={email}
            returnKeyType="next"
            onChangeText={(text) => setEmail(text)}
            onSubmitEditing={onNext}
            placeholderTextColor={"rgba(255,255,255,0.3)"}
          />
          <CancelInput onPress={ClearEmail}>
            <FontAwesomeIcon size={20} icon={faXmark} />
          </CancelInput>
        </View>

        <View style={{ position: "relative" }}>
          <LoginInput
            ref={passwordInput}
            placeholder="비밀번호"
            autoCapitalize="none"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            returnKeyType="done"
            placeholderTextColor={"rgba(255,255,255,0.3)"}
            onSubmitEditing={onSubmit}
            style={{ marginTop: 15 }}
          />
          <CancelInput onPress={ClearPassword} style={{ top: "59%" }}>
            <FontAwesomeIcon size={20} icon={faXmark} />
          </CancelInput>
        </View>
        {error ? (
          <ErrorMessage color={Theme.pinkColor}>{error}</ErrorMessage>
        ) : null}
      </InputBox>
      <LoginBtn>
        <LoginText onPress={onSubmit} color={Theme.pinkColor}>
          완료
        </LoginText>
      </LoginBtn>
      <JoinBtn onPress={() => navigate("Join")}>
        <JoinText>회원가입하기</JoinText>
      </JoinBtn>
    </View>
  );
};
