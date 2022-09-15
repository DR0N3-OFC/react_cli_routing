import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from "./styles"

import { FiThumbsUp } from "react-icons/fi";

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://wallpaperaccess.com/full/677790.jpg" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/86325711?v=4" />
                <div>
                    <h4>Bruno Raphael Facundo</h4>
                    <p>Há 3 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Site DIO</h4>
                <p>Projeto realizado durante o curso de React Developer da DIO.<strong>Saiba mais...</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 7
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card}