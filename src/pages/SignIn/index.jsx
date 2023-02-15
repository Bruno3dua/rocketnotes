import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi"

import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom"

export function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

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
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="on"
                />

                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register">Criar Conta</Link>
            </Form>
            <Background />
        </Container>
    )
}