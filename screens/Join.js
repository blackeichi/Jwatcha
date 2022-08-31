import { faArrowLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useRef, useState } from "react";
import auth from "@react-native-firebase/auth";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Theme } from "../styled";
import {
  CancelInput,
  ErrorMessage,
  GobackBtn,
  InputBox,
  JoinBtn,
  JoinText,
  Label,
  LoginBtn,
  LoginInput,
  LoginText,
} from "./Login";

export const Join = ({ navigation: { goBack, navigate } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const passwordInput = useRef();
  const confirmPW = useRef();
  const onNext = () => {
    passwordInput.current.focus();
  };
  const onNext2 = () => {
    confirmPW.current.focus();
  };
  const onSubmit = async () => {
    if (email === "" || password === "" || password2 === "") {
      return setError("내용을 입력하지 않으셨어요.");
    }
    if (password !== password2) {
      return setError("비밀번호가 일치하지 않습니다.");
    }
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      setError("");
    } catch (e) {
      setError("해당 이메일/패스워드로 회원가입이 불가능합니다.");
    }
  };
  const ClearEmail = () => {
    setEmail("");
  };
  const ClearPassword = () => {
    setPassword("");
  };
  const ClearPassword2 = () => {
    setPassword2("");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "black", paddingHorizontal: 10 }}>
      <GobackBtn onPress={() => goBack()}>
        <FontAwesomeIcon
          size={25}
          style={{ color: "white" }}
          icon={faArrowLeftLong}
        />
      </GobackBtn>
      <InputBox>
        <Label>회원가입</Label>
        <View style={{ position: "relative" }}>
          <LoginInput
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
            returnKeyType="next"
            onSubmitEditing={onNext2}
            placeholderTextColor={"rgba(255,255,255,0.3)"}
          />
          <CancelInput onPress={ClearPassword}>
            <FontAwesomeIcon size={20} icon={faXmark} />
          </CancelInput>
        </View>
        <View style={{ position: "relative" }}>
          <LoginInput
            ref={confirmPW}
            placeholder="비밀번호 재확인"
            autoCapitalize="none"
            secureTextEntry
            value={password2}
            onChangeText={(text) => setPassword2(text)}
            returnKeyType="done"
            placeholderTextColor={"rgba(255,255,255,0.3)"}
            onSubmitEditing={onSubmit}
          />
          <CancelInput onPress={ClearPassword2}>
            <FontAwesomeIcon size={20} icon={faXmark} />
          </CancelInput>
        </View>
        {error ? (
          <ErrorMessage color={Theme.pinkColor}>{error}</ErrorMessage>
        ) : null}
      </InputBox>
      <LoginBtn onPress={onSubmit}>
        <LoginText color={Theme.pinkColor}>가입하기</LoginText>
      </LoginBtn>
      <JoinBtn onPress={() => navigate("Login")}>
        <JoinText>이미 계정이 있으신가요?</JoinText>
      </JoinBtn>
    </View>
  );
};
