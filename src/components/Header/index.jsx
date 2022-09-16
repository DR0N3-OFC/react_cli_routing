import logo from '../../assets/logo-dio.svg';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
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

const Header = ({autenticado}) => {
    
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
                {autenticado ? (<>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/86325711?v=4' />
                ) : (
                    <>
                        <MenuRight href='#'>Nome</MenuRight>
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