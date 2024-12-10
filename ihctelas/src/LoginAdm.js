import React, { useState } from 'react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validação das credenciais do administrador
    if (email === 'adm@adm' && password === '123') {
      window.location.href = '/cadastro-viagens'; // Redireciona para a página de cadastro de viagens
    } else {
      alert('Email ou senha incorretos');
    }
  };

  const handleGoBack = () => {
    window.history.back(); // Volta para a página anterior
  };

  return (
    <div className="login-container">
      <h1>Login de Administrador</h1>
      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGoBack}>Voltar</button> {/* Botão Voltar */}
    </div>
  );
};

export default AdminLogin;
