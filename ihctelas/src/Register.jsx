import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password === confirmPassword) {
      window.location.href = '/profile'; // Redireciona para o perfil após o cadastro
    } else {
      alert('As senhas não coincidem');
    }
  };

  const handleGoBack = () => {
    window.history.back(); // Volta para a página anterior
  };

  return (
    <div className="register-container">
      <h1>Cadastro</h1>
      <input
        type="text"
        placeholder="Digite seu nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="CPF ou CNPJ"
        value={cpfCnpj}
        onChange={(e) => setCpfCnpj(e.target.value)}
      />
      <input
        type="date"
        placeholder="Data de nascimento"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Repita sua senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Cadastrar</button>

      <button onClick={handleGoBack}>Voltar</button> {/* Botão Voltar */}
    </div>
  );
};

export default Register;
