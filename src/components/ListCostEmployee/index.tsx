import { Book, Coins, UserSwitch } from 'phosphor-react'
import './style.css'

export function ListCostEmployee(){
  return(
    <ul className='list-cost-employee'>
      <li>
        <div className="icon">
          <Coins size={24}/>
        </div>
        <span>Aumentar os custos (salário, VT, VR, Férias, 13º salário, etc.);</span>
      </li>
      <li>
        <div className="icon">
          <Book size={24}/>
        </div>
        <span>Se preocupar com treinamentos e gestão do conhecimento;</span>
      </li>
      <li>
        <div className="icon">
          <UserSwitch size={24}/>
        </div>
        <span>Contratar outro funcionário para cobrir férias e ausências;</span>
      </li>
    </ul>
  )
}