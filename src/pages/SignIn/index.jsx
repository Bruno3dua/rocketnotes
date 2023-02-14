import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi"

import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom"

export function SignIn() {

    const data = useAuth()
    console.log("Meu Contexto =>", data)

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
                    autoComplete="on"
                />

                <Button title="Entrar" />

                <Link to="/register">Criar Conta</Link>
            </Form>
            <Background />
        </Container>
    )
}