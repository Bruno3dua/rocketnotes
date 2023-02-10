import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi"

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocketnotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu Login</h2>
                <Input
                    placeholder="Email"
                    type="email"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />
                
                <Button title="Entrar" />

                <a href="#">Criar Conta</a>
            </Form>
            <Background />
        </Container>
    )
}