import { FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from 'phosphor-react'
import { Wrapper } from '../Wrapper'
import './style.css'

import Logo from '../../img/logotipos/Live.png';

export function Footer(){
  return(
    <Wrapper id='footer'>
      <a href="/" className='logotipo'>
        <img src={ Logo } alt="logotipo-da-live-contabilidade" />
      </a>

      <div>  
        <p>Live Contabilidade 2022</p>
        <p>Todos os direitos reservados</p>
      </div>

      <ul>
        <li>
          <a href="https://www.instagram.com/live.contabilidade/" target="_blank">
            <InstagramLogo size={32}/>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/liveassessoriacontabil" target="_blank">
            <FacebookLogo size={32} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCKmGSfOuidLglX7MaJ-5EyA" target="_blank">
            <YoutubeLogo size={32} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/live-contabilidade/" target="_blank">
            <LinkedinLogo size={32} />
          </a>
        </li>
      </ul>
    </Wrapper>
  )
}