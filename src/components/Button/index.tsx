import { TouchableOpacityProps } from "react-native"
import * as S from "./styles"


interface ButtonProps extends TouchableOpacityProps {
  text: string;
}
export function Button ({text,...rest}:ButtonProps){
  return( <S.Buttton {...rest}>
    <S.ButtonText>{text}</S.ButtonText>
  </S.Buttton>)
}