import { Book, Coins, ForkKnife, Gift, Popcorn, UserSwitch } from 'phosphor-react'
import './style.css'

export function CostEmployeeAll(){
  return(
    <div className='cost-employee-all'>
      <div className='cards'>
        <div className="card">
          <div className="icon">
            <Coins size={24}/>
          </div>
          <p>Salário</p>
        </div>
        <div className="card">
          <div className="icon">
            <ForkKnife size={24}/>
          </div>
          <p>VT + VR</p>
        </div>
        <div className="card">
          <div className="icon">
            <Book size={24}/>
          </div>
          <p>Treinamentos</p>
        </div>
      </div>
      <div className='cards'>
        <div className="card">
          <div className="icon">
            <Gift size={24}/>
          </div>
          <p>13° Salário</p>
        </div>
        <div className="card">
          <div className="icon">
            <Popcorn size={24}/>
          </div>
          <p>Férias</p>
        </div>
        <div className="card">
          <div className="icon">
            <UserSwitch size={24}/>
          </div>
          <p>Substituição</p>
        </div>
      </div>
    </div>
  )
}