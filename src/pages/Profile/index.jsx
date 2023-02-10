import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile() {
    return (
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </header>
            <Form>

                <Avatar>
                    <img
                        src="https://github.com/bruno3dua.png"
                        alt="User Photo"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    autoComplete="on"
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    autoComplete="on"
                />

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}