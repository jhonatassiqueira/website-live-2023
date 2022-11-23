import { Helmet } from "react-helmet";
import { Imagem } from "../components/Imagem";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import { Wrapper } from "../components/Wrapper";
import { WrapperCol } from "../components/WrapperCol";

export function ObrigadoForm(){
  return(
    <>
      <Helmet>
        <title>Live Contabilidade | Obrigado por entrar em contato conosco</title>
        <meta name="description" content="Live Contabilidade - Obrigado por entrar em contato conosco!" />
        <link rel="canonical" href="https://www.livecontabilidade.com.br/obrigado" />
        <meta property="og:description" content="Live Contabilidade - Obrigado por entrar em contato conosco!" />
        <meta property="og:url" content="https://www.livecontabilidade.com.br/obrigado" />
      </Helmet>

      <Wrapper id="hero" className="wrapper-thanks bg-gradient">
        <WrapperCol className="col-a">
          <Title>Muito obrigado</Title>
          <SubTitle>Recebemos sua mensagem, logo entraremos em contato</SubTitle>
        </WrapperCol>
        <WrapperCol className="col-b">
          <Imagem src="./src/img/TI2.png"></Imagem>
        </WrapperCol>
      </Wrapper>
    </>
  )
}