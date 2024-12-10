import React, { useState } from 'react';

const RegisterTravelAndPackage = () => {
  // States para os formulários de Viagem e Pacote
  const [travelName, setTravelName] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [travelPrice, setTravelPrice] = useState('');
  const [packageName, setPackageName] = useState('');
  const [packagePrice, setPackagePrice] = useState('');
  const [packageDescription, setPackageDescription] = useState('');
  const [packageTravelDate, setPackageTravelDate] = useState('');

  // Função para formatar números como moeda (R$)
  const formatCurrency = (value) => {
    const formattedValue = value.replace(/\D/g, ''); // Remove tudo que não é número
    return `R$ ${formattedValue.replace(/(\d)(\d{2})$/, '$1,$2')}`; // Formata para o padrão de moeda
  };

  // Funções para lidar com o cadastro
  const handleRegisterTravel = () => {
    // Validação e processo de cadastro da viagem
    if (travelName && destination && departureDate && travelPrice) {
      alert('Viagem cadastrada com sucesso!');
      // Processar o cadastro da viagem
      setTravelName('');
      setDestination('');
      setDepartureDate('');
      setTravelPrice('');
    } else {
      alert('Por favor, preencha todos os campos da viagem.');
    }
  };

  const handleRegisterPackage = () => {
    // Validação e processo de cadastro do pacote
    if (packageName && packagePrice && packageDescription && packageTravelDate) {
      alert('Pacote cadastrado com sucesso!');
      // Processar o cadastro do pacote
      setPackageName('');
      setPackagePrice('');
      setPackageDescription('');
      setPackageTravelDate('');
    } else {
      alert('Por favor, preencha todos os campos do pacote.');
    }
  };

  // Função de logout que redireciona para a tela de login
  const handleLogout = () => {
    window.location.href = '/login'; // Redireciona para a tela de login
  };

  return (
    <div className="register-container">
      <h1>Cadastro de Viagem e Pacote</h1>
      
      {/* Formulário de Cadastro de Viagem */}
      <div className="form-container">
        <h2>Cadastrar Viagem</h2>
        <input
          type="text"
          placeholder="Nome da Viagem"
          value={travelName}
          onChange={(e) => setTravelName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destino"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Valor da Viagem"
          value={travelPrice}
          onChange={(e) => setTravelPrice(formatCurrency(e.target.value))}
        />
        <button onClick={handleRegisterTravel}>Adicionar Viagem</button>
      </div>

      {/* Formulário de Cadastro de Pacote */}
      <div className="form-container">
        <h2>Cadastrar Pacote</h2>
        <input
          type="text"
          placeholder="Nome do Pacote"
          value={packageName}
          onChange={(e) => setPackageName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Preço do Pacote"
          value={packagePrice}
          onChange={(e) => setPackagePrice(formatCurrency(e.target.value))}
        />
        <textarea
          placeholder="Descrição do Pacote"
          value={packageDescription}
          onChange={(e) => setPackageDescription(e.target.value)}
        />
        <input
          type="date"
          value={packageTravelDate}
          onChange={(e) => setPackageTravelDate(e.target.value)}
        />
        <button onClick={handleRegisterPackage}>Adicionar Pacote</button>
      </div>

      {/* Botão de Logout */}
      <button onClick={handleLogout}>Sair</button> 
    </div>
  );
};

export default RegisterTravelAndPackage;
