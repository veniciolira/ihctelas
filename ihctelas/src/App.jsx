import React, { useEffect, useState } from 'react';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import MinhasViagens from './MinhasViagens';
import MeusPacotes from './MeusPacotes';
import ComprarPacotes from './ComprarPacotes';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  if (currentPage === '/register') {
    return <Register />;
  } else if (currentPage === '/') {
    return <Login />;
  } else if (currentPage === '/profile') {
    return <Profile />;
  } else if (currentPage === '/minhas-viagens') {
    return <MinhasViagens />;
  } else if (currentPage === '/meus-pacotes') {
    return <MeusPacotes />;
  } else if (currentPage === '/comprar-pacotes') {
    return <ComprarPacotes />;
  }

  return (
    <div>
      <h1>Carregando...</h1>
    </div>
  );
}

export default App;
