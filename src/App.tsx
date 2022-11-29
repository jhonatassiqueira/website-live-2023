import { useEffect } from 'react';
import { HashRouter as Router, useLocation } from 'react-router-dom'
import { AppRoutes } from './App.routes'
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';

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

  function ScrollToTop(){
    const { pathname } = useLocation();
    
    useEffect(()=> {
      window.scrollTo(0,0);
    }, [pathname]);

    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <Menu />
      <AppRoutes />
      <Footer />
    </Router>
  )
}
