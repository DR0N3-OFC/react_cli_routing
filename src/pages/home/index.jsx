import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, TextContent, TitleHighlight, Title } from "./styles"
import bannerImage from "../../assets/banner.svg";

const Home = () => {

    const navigate = useNavigate();
    const handleClickSignUp = () => {
        navigate('/signup');
    }

    return(<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente
                        <br />
                    </TitleHighlight>
                    o seu futuro glogal agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo 
                    desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignUp}/>
            </div>
            <div>
                <img src={bannerImage} alt="Imagem principal" />
            </div>
        </Container>
    </>)
}

export { Home }