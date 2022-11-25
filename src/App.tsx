import { BrowserRouter, HashRouter } from 'react-router-dom';
import { AppRoutes } from './App.routes'
import { Footer } from './components/Footer'
import { Menu } from './components/Menu'

import './styles/global.css'

export function App() {

  window.addEventListener("scroll", showBackToTopButtonOnScroll);

  function showBackToTopButtonOnScroll() {
    if (scrollY > 400) {
      document.getElementById("buttonUp")?.classList.add("show");
    } else {
      document.getElementById("buttonUp")?.classList.remove("show");
    }
  }

  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}
