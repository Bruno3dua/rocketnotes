import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout }  from "./styles";

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/bruno3dua.png" alt="User photo" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Bruno Eduardo</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}