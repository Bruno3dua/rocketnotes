import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiUser, FiMail, FiLock } from "react-icons/fi"

export function SignUp() {
    return (
        <Container>
            <Background />
            <Form>
                <h1>Rocketnotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="Email"
                    type="email"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    autoComplete= "on"
                />
                
                <Button title="Cadastrar-se" />

                <a href="#">Voltar para o login</a>
            </Form>
        </Container>
    )
}