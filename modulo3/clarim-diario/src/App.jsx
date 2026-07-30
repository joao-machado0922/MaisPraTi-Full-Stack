import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './App.css';

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
      </Routes>
    </>
  )
}

export default App

