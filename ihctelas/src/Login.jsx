import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validação das credenciais do usuário
    if (email === 'eu@eu' && password === '123') {
      window.location.href = '/profile'; // Redireciona para o perfil do usuário
    } else {
      alert('Email ou senha incorretos');
    }
  };

  const handleAdminLoginRedirect = () => {
    // Apenas redireciona para a página de login do administrador
    window.location.href = '/admin-login'; // Página de login do administrador
  };

  return (
    <div className="login-container">
      <h1>Viajaê!</h1>
      <p>Facilitamos sua viagem</p>
      <input
        type="email"
        placeholder="Digite aqui seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Digite aqui sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      <button onClick={handleAdminLoginRedirect}>Login de Administrador</button> {/* Botão que leva para a página de login do admin */}

      <button onClick={() => window.location.href = '/register'}>Cadastre-se</button> {/* Botão Cadastre-se */}
    </div>
  );
};

export default Login;
