import { Helmet } from "react-helmet";
import { Button } from "../components/Button";
import { ButtonUp } from "../components/ButtonUp";
import { Depositions } from "../components/Depositions";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Imagem } from "../components/Imagem";
import { Legend } from "../components/Legend";
import { List } from "../components/ListCheck";
import { Menu } from "../components/Menu";
import { PhraseCallToAction } from "../components/PhraseCallToAction";
import { Questions } from "../components/Questions";
import { StepByStepOpening } from "../components/StepByStepOpening";
import { SubTitle } from "../components/SubTitle";
import { Text } from "../components/Text";
import { Title } from "../components/Title";
import { WhatsApp } from "../components/WhatsApp";
import { Wrapper } from "../components/Wrapper";
import { WrapperCol } from "../components/WrapperCol";

export function Abertura(){
  return(
    <>
      <Helmet>
        <title>Live Contabilidade realizando seu sonho de ter seu próprio negócio!</title>
        <meta name="description" content="Live Contabilidade - Realize o sonho de ter seu próprio negócio!" />
        <link rel="canonical" href="https://www.livecontabilidade.com.br/abertura-empresa" />
        <meta property="og:description" content="Live Contabilidade - Realize o sonho de ter seu próprio negócio!" />
        <meta property="og:url" content="https://www.livecontabilidade.com.br/abertura-empresa" />
      </Helmet>
      
      <Menu />
      <WhatsApp url="https://api.whatsapp.com/send?phone=5511961485582&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20contador!" />
      <ButtonUp />
      
      <Wrapper id="hero">
        <WrapperCol className="col-a">
          <Title>Economize <Legend>tempo</Legend> e <Legend>dinheiro</Legend> na abertura da sua empresa</Title>
          <SubTitle><Legend>Cuidamos de tudo para você</Legend> e garantimos o melhor enquadramento para o seu negócio, economizando milhares de reais em impostos!</SubTitle>

          <Button url="#form-contact" className="bg-orange-900">Quero abrir minha empresa!</Button>
        </WrapperCol>
        <WrapperCol className="col-b">
          <Imagem className="mt-46" src="/img/Abertura1.png" alt="homem-segurando-uma-caneta-e-um-contrato-para-assinatura" />
        </WrapperCol>
      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-b">
          <Imagem className="mt-24" src="/img/Abertura2.png" alt="homem-preocupado-com-a-burocracia-de-abrir-uma-empresa-sem-contabilidade" />
        </WrapperCol>
        <WrapperCol className="col-a">
          <Title>Abrir uma empresa <Legend>não é uma tarefa fácil</Legend> e rápida</Title>
          <Text>Você conhece todo o processo para abertura de empresa?</Text>
          <Text>São diversos documentos, detalhes que devem ser observados, prazos, órgãos públicos... <Legend>a burocracia pode assustar e te deixar perdido.</Legend></Text>
          <Text>É por isso que é tão <Legend>importante estar acompanhado</Legend> de uma assessoria que realmente entende do assunto!</Text>
        </WrapperCol>
      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-a">
          <Imagem className="mt-24" src="/img/Abertura3.png" alt="checklist-de-atividades-que-o-contador-precisa-se-preocupar" />
        </WrapperCol>
        <WrapperCol className="col-b">
          <Title>Não é só sobre abrir uma empresa, mas é também fazer <Legend>escolhas inteligentes</Legend></Title>

          <Text>Você terá que tomar diversas decisões durante todo o processo:</Text>

          <List.List>
            <List.Item text="Qual é o melhor regime tributário?" />
            <List.Item text="Qual é o melhor tipo de sociedade?" />
            <List.Item text="Qual é o CNAE mais adequado?" />
            <List.Item text="Que tipo de empresa se enquadra melhor?" />
            <List.Item text="Em que cidade vou abrir minha empresa?" />
          </List.List>

          <Text>Então não podemos reforçar o suficiente: <Legend>é muito importante estar acompanhado</Legend> de uma assessoria que realmente entende do assunto e que já abriu <Legend>centenas de empresas!</Legend></Text>

          <Button url="#form-contact" className="bg-orange-900">Quero abrir minha empresa!</Button>
        </WrapperCol>

      </Wrapper>

      <PhraseCallToAction text="Para parceiro da Live, não existe burocracia!" />

      <Wrapper>
        <WrapperCol className="col-b">
          <Imagem className="mt-24" src="/img/Abertura4.png" alt="relatorios-com-o-planejamento-inicial-da-empresa" />
        </WrapperCol>
        <WrapperCol className="col-a">
          <Title><Legend>Nossa assessoria está preparada</Legend> para abrir a sua empresa da forma mais rápida e barata</Title>
          <Text>Temos uma equipe de especialistas que entende cada parte deste processo. Vamos cuidar de tudo para você.</Text>
          <Text><Legend>Para parceiro da Live, não existe burocracia!</Legend></Text>
        </WrapperCol>

      </Wrapper>

      <StepByStepOpening />

      <Wrapper>
        <WrapperCol className="col-a">
          <Imagem className="mt-24" src="/img/Abertura5.png" alt="uma-pessoa-calculando-o-dinheiro-economizado" />
        </WrapperCol>
        <WrapperCol className="col-b">
          <Title>Nossos especialistas vão <Legend>economizar o seu dinheiro!</Legend></Title>
          <Text>Ao enquadrar sua empresa no regime tributário ou no CNAE errado, você poderá pagar até 3 vezes mais impostos!</Text>
          <Text>Nós temos a expertise de mais de 200 empresas abertas. Saberemos exatamente o melhor caminho a ser seguido, <Legend>reduzindo seus impostos ao mínimo possível.</Legend></Text>
        </WrapperCol>
        
      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-b">
          <Imagem className="mt-24" src="/img/Abertura6.png" alt="empresario-olhando-no-relogio-o-tempo-que-economizou-contratando-a-live" />
        </WrapperCol>
        <WrapperCol className="col-a">
          <Title><Legend>Seu tempo vale ouro!</Legend> Gaste ele com atividades que importam para o seu negócio</Title>
          <Text>Tentar fazer este processo de abertura sem a devida assessoria vai te custar muito tempo. Você como empresário sabe bem: seu tempo é dinheiro!</Text>
          <Text>Deixe nas mãos de quem tem mais de 15 anos de mercado, nos resolveremos para você.</Text>

          <Button url="#form-contact" className="bg-orange-900">Quero abrir minha empresa!</Button>
        </WrapperCol>

      </Wrapper>

      <Depositions url="#form-contact" callToAction="Quero abrir minha empresa!" />
      <Form service="Abertura de Empresa" idForm={21262018} />
      <Questions />

      <Footer />
    </>
  )
}