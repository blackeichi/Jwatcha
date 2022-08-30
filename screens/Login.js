import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

const GobackBtn = styled.TouchableOpacity`
  padding: 10px;
`;
const InputBox = styled.View`
  height: 85%;
  justify-content: center;
  position: relative;
`;
const Label = styled.Text`
  color: white;
`;
const LoginInput = styled.TextInput`
  padding: 10px 15px;
  margin-right: 40px;
  font-size: 20px;
  border: 1px solid white;
  color: white;
`;
const CancelInput = styled.TouchableOpacity`
  background-color: gray;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  position: absolute;
  right: 0;
`;
export const Login = ({ navigation: { goBack } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordInput = useRef();
  const onNext = () => {
    passwordInput.current.focus();
  };
  return (
    <View style={{ flex: 1, backgroundColor: "black", paddingHorizontal: 10 }}>
      <GobackBtn onPress={() => goBack()}>
        <FontAwesomeIcon size={25} style={{ color: "white" }} icon={faXmark} />
      </GobackBtn>
      <InputBox>
        <Label>이메일</Label>
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
        <CancelInput style={{}}>
          <FontAwesomeIcon size={20} icon={faXmark} />
        </CancelInput>
        <LoginInput
          ref={passwordInput}
          placeholder="비밀번호..."
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          returnKeyType="done"
          placeholderTextColor={"rgba(255,255,255,0.3)"}
        />
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </InputBox>
    </View>
  );
};
