import React, { useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import PassagensDetails from './PassagensDetails';
import MyTrips from './MinhasViajens';
import MyPackages from './MyPackages';
import BuyPackages from './ComprarPacotes';
import Payment from './Payment';
import AdminLogin from './LoginAdm';
import RegisterTravelAndPackage from './RegisterTravelAndPackage'; // Certifique-se que o nome está correto

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

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPage(path);
  };

  switch (currentPage) {
    case '/register':
      return <Register />;
    case '/':
      return <Login />;
    case '/profile':
      return <Profile />;
    case '/passagens':
      return <PassagensDetails />;
    case '/my-trips':
      return <MyTrips />;
    case '/my-packages':
      return <MyPackages />;
    case '/buy-packages':
      return <BuyPackages />;
    case '/payment':
      return <Payment />;
    case '/admin-login':
      return <AdminLogin />;
    case '/cadastro-viagens': // Nova rota para Cadastro de Viagem e Pacote
      return <RegisterTravelAndPackage />;
    default:
      return <h1>Carregando... um momento.... calma aí...</h1>;
  }
}

export default App;
