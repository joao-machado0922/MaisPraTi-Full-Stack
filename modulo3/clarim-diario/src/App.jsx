import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './App.css';
import Materia from './pages/Materia/Materia';
import Footer from './components/Footer/Footer';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login';
import RotaProtegida from './components/RotaProtegida';
import Painel from './pages/Painel/Painel';

function App() {

  const [theme, setTheme] = useState(() => {
    const salvo = localStorage.getItem('tema') || 'light';

    if (salvo) return salvo;

    const preferenciaEscuro = window.matchMedia('(preferes-color-schema: dark)').matches;
    if (preferenciaEscuro) return 'dark';

    return 'light';
  });

  function alternarTema() {
    setTheme(t => (t === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('tema', theme);
  }, [theme]);

  return (
    <>
      <Header tema={theme} aoAlterarTema={alternarTema} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materia/:id" element={<Materia />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="painel" element={
          <RotaProtegida>
            <Painel />
          </RotaProtegida>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App

