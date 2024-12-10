import React from 'react';
import './App.css';

const BuyPackages = () => {
  // Pacotes disponíveis para compra
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

  // Função para navegar até a página de pagamento
  const handleBuyPackage = () => {
    window.location.href = '/payment'; // Navegação para a página de pagamento
  };

  return (
    <div className="buy-packages-container">
      <h1>Comprar Pacotes</h1>
      <p>Escolha o pacote de viagem que deseja comprar:</p>
      <div className="packages-list">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-item">
            <p><strong>Destino:</strong> {pkg.destination}</p>
            <p><strong>Data:</strong> {pkg.date}</p>
            <p><strong>Valor:</strong> {pkg.price}</p>
            <button className="buy-package-btn" onClick={handleBuyPackage}>
              Comprar Pacote
            </button>
          </div>
        ))}
      </div>

      {/* Botão de Voltar */}
      <button className="back-btn" onClick={() => window.history.back()}>
        Voltar
      </button>
    </div>
  );
};

export default BuyPackages;
