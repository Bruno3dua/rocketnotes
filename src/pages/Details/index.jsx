import { Container } from "./style.js"
import { Button } from "../../components/Button"

export function Details() {

  return (
    <Container>
      <h1>Details</h1>
      <Button title="Entrar" />
      <Button title="Cadastrar" />
      <Button title="Voltar" />
    </Container>
  )
}