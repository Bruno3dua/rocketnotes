import { Container, Links, Content } from "./styles.js"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tags } from "../../components/Tags"
import { ButtonText } from "../../components/ButtonText"

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir a nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum necessitatibus
            cumque magni accusamus voluptatibus? Odit quidem explicabo nulla. Necessitatibus architecto
            nostrum ullam blanditiis voluptates debitis delectus eos quia illo!
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://rocketseat.com.br/</a></li>
              <li><a href="#">https://rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tags title="express" />
            <Tags title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>

      </main>
    </Container>
  )
}