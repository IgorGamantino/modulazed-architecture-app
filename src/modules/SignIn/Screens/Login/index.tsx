import { Button } from "../../../../components/Button"
import { Input } from "../../../../components/Input"
import * as S from "./styles"

export function Login() {
  return (
    <S.Container>
        <S.Title>Faça seu login</S.Title>

      <S.Form>
      <Input placeholder="E-mail"/>
      <Input placeholder="Senha"/>
      <Button  text="Entrar"/>
      </S.Form>
    </S.Container>
      

  )
}