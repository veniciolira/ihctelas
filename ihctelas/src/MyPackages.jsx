import React from 'react';
import './App.css';

const MyPackages = () => {
  const packages = [
    {
      id: 1,
      destination: 'Rio de Janeiro, RJ',
      date: '15/03/2025',
      price: 'R$ 1.500,00',
    },
    {
      id: 2,
      destination: 'Gramado, RS',
      date: '25/07/2025',
      price: 'R$ 2.300,00',
    },
    {
      id: 3,
      destination: 'Salvador, BA',
      date: '10/12/2025',
      price: 'R$ 1.800,00',
    },
  ];

  const handleBackToProfile = () => {
    window.location.href = '/profile'; // Navegar para o perfil
  };

  const handleReservePackage = () => {
    window.location.href = '/payment'; // Navegar para a página de pagamento
  };

  return (
    <div className="mypackages-container">
      <h1>Meus Pacotes</h1>
      <p>Aqui estão seus pacotes de viagem:</p>
      <div className="packages-list">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-item">
            <p><strong>Destino:</strong> {pkg.destination}</p>
            <p><strong>Data:</strong> {pkg.date}</p>
            <p><strong>Valor:</strong> {pkg.price}</p>
            {/* Botão para reservar pacote */}
            <button onClick={handleReservePackage}>Reservar Pacote</button>
          </div>
        ))}
      </div>
      {/* Botão Voltar para o perfil */}
      <button className="back-to-profile-button" onClick={handleBackToProfile}>
        Voltar
      </button>
    </div>
  );
};

export default MyPackages;
