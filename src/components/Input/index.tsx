import { TextInputProps, View } from "react-native";
import * as S from "./styles";
import { ReactNode } from "react";



interface InputProps extends TextInputProps {
  icon?: ReactNode;
}

export function Input({icon,...rest}:InputProps){
  return (
    <S.Container>
      <S.InputComponent {...rest} placeholderTextColor="#666360"/>
    </S.Container>
  )
}