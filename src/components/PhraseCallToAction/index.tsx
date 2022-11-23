import { Title } from "../Title";
import { Wrapper } from "../Wrapper";
import { WrapperCol } from "../WrapperCol";

import './style.css'


interface PhraseCallToActionProps{
  text: string;
}
export function PhraseCallToAction(props: PhraseCallToActionProps){
  return(
    <Wrapper className="bg-gradient col-full" id="phrase-call-to-action">
      <WrapperCol className="col-full-a">
        <Title>{props.text}</Title>
        <svg width="291" height="8" viewBox="0 0 291 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6C113.519 1.83196 176.865 1.40349 290 2.54467" stroke="white" stroke-width="4"/>
        </svg>
      </WrapperCol>
    </Wrapper>
  )
}