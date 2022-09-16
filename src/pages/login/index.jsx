import { MdLock, MdEmail } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Column, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import { api } from "../../services/api";

const schema = yup.object({
    email: yup.string().email("E-mail inválido").required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  }).required();

const Login = () => {
    
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1) {
                navigate('/feed');
            } else {
                alert('E-mail ou senha inválidos.')
            }
        } catch {
            alert("Ocorreu um erro, tente novamente.");
        }
    };

    return(<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias 
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Já tem cadastro?</TitleLogin>
                    <SubtitleLogin>Faça o seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail />} />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }