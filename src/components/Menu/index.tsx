import { List, X } from 'phosphor-react'
import { Button } from '../Button';
import './style.css'

import Logo from '../../img/logotipos/Live.png';
import { Link } from 'react-router-dom';

export function Menu(){

  function openMenu(){
    document.querySelector('body')?.classList.add('menu-expanded');
  }

  function closeMenu(){
    document.querySelector('body')?.classList.remove('menu-expanded');
  }

  return(
    <nav id='navigation'>
      <div className="wrapper">
        <a href="/" className='logo'>
          <img src={ Logo } alt="logotipo-da-live-contabilidade" />
        </a>

        <div className="menu">
          <ul>
            <li>
              <a>Segmentos
                <ul>
                  <li>
                    <Link to="/area-ti">Área de TI</Link>
                  </li>
                  <li>
                    <Link to="/ecommerce">E-commerce</Link>
                  </li>
                  <li>
                    <Link to="/prestador-de-servicos">Prestador de Serviços</Link>
                  </li>
                  <li>
                    <Link to="/representante-comercial">Representante Comercial</Link>
                  </li>
                </ul>
              </a>
            </li>
            <li>
              <a>Contrate
                <ul>
                  <li>
                    <Link to="/abertura-empresa">Abra sua empresa</Link>
                  </li>
                  <li>
                    <a href="https://cardsinova.gfsis.com.br/gestaofacil/loja/index?local=9&indicacao=43431&idProduto=12&videoconferencia=sim&ocultarValidacao=sim" target="_blank">Certificado e-CPF A1</a>
                  </li>
                  <li>
                    <a href="https://cardsinova.gfsis.com.br/gestaofacil/loja/index?local=9&indicacao=43431&idProduto=24&videoconferencia=sim&ocultarValidacao=sim" target="_blank">Certificado e-CNPJ A1</a>
                  </li>
                  <li>
                    <a href="https://lp.cora.com.br/afiliados/live-contabilidade/" target="_blank">Conta Bancária Gratuita</a>
                  </li>
                  <li>
                    <Link to="/bpo-financeiro">Terceirização Financeira</Link>
                  </li>
                  <li>
                    <Link to="/planos">Planos</Link>
                  </li>
                </ul>
              </a>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>

          <a href="https://vip.acessorias.com/livecontabilidade" className='btn-client' target="_blank">Área do Cliente</a>

          <Button url='/contato' className='bg-orange-900'>Quero a Live como minha parceira!</Button>
        </div>

        <List className='open-menu' size={32} onClick={openMenu}/>
        <X className='close-menu' size={32} onClick={closeMenu}/>
      </div>
    </nav>
  )
}