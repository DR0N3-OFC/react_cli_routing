import { MdLock, MdEmail, MdPerson } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Column, DeclaroText, LoginText, Row, SubtitleSignUp, Title, TitleSignUp, Wrapper, FazerLoginText } from "./styles";
import { IFormData } from "./types";

const schema = yup.object({
    name: yup.string().min(5, 'Insira um nome válido').matches(/[A-Z]+[a-z]/, 'Please enter valid name').required(),
    email: yup.string().email("E-mail inválido").required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  }).required();

const SignUp = () => {

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    
    const onSubmit = (data:IFormData) => console.log(data);

    const navigate = useNavigate();

    const handleSignIn = () => {
        if (isValid)
            navigate("/feed");
    }

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
                    <TitleSignUp>Comece agora grátis</TitleSignUp>
                    <SubtitleSignUp>Crie sua conta e make the change._</SubtitleSignUp>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome Completo" type="text" leftIcon={<MdPerson />} />
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail />} />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Criar minha conta" variant="secondary" type="submit" onClick={handleSignIn} />
                    </form>
                    <Column>
                        <DeclaroText>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </DeclaroText>
                        <Row>
                            <LoginText>Já tenho conta.</LoginText>
                            <Link to="/login" style={FazerLoginText}>Fazer Login.</Link>
                        </Row>
                    </Column>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { SignUp }