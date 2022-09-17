import logo from '../../assets/logo-dio.svg';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = () => {
    
    const { user, handleSignOut } = useContext(AuthContext);

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login');
    }
    const handleClickSignUp = () => {
        navigate('/signup');
    }
    const handleClickHome = () => {
        navigate('/');
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio" onClick={handleClickHome}/>
                {user.id ? (<>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>) : null}
            </Row>
            <Row>
                {user.id ? (
                    <>
                        <UserPicture src='https://avatars.githubusercontent.com/u/86325711?v=4' />
                        <a href="#" onClick={handleSignOut}>Sair</a>
                    </>
                    ) : (
                    <>
                        <MenuRight href='#'>Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSignIn} />
                        <Button title="Cadastrar" onClick={handleClickSignUp} />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }