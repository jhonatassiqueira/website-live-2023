import { Navigate, Route, Routes } from 'react-router-dom'
import { Abertura } from './pages/Abertura'
import { AreaTi } from './pages/AreaTi'
import { BpoFinanceiro } from './pages/BpoFinanceiro'
import { Contato } from './pages/Contato'
import { Ecommerce } from './pages/Ecommerce'
import { Home } from './pages/Home'
import { ObrigadoForm } from './pages/ObrigadoForm'
import { PJ } from './pages/PJ'
import { Planos } from './pages/Planos'
import { Representante } from './pages/Representante'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/area-ti' element={<AreaTi />} />
      <Route path='/ecommerce' element={<Ecommerce />} />
      <Route path='/prestador-de-servicos' element={<PJ />} />
      <Route path='/representante-comercial' element={<Representante />} />
      <Route path='/abertura-empresa' element={<Abertura />} />
      <Route path='/bpo-financeiro' element={<BpoFinanceiro />} />
      <Route path='/planos' element={<Planos />} />
      <Route path='/contato' element={<Contato />} />
      <Route path='/obrigado' element={<ObrigadoForm />} />

      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}