import React from 'react';

const MinhasViagens = () => {
  return (
    <div className="viagens-container">
      <h1>Minhas Viagens</h1>
      <div className="viagens-list">
        <div className="viagem">
          <p><strong>Destino:</strong> São Paulo</p>
          <p><strong>Data:</strong> 01/12/2024</p>
          <p><strong>Status:</strong> Confirmado</p>
          {/* Botão para reservar pacote com navegação para a página de pagamento */}
          <button onClick={() => window.location.href = '/payment'}>Reservar viagem</button>
        </div>
        <div className="viagem">
          <p><strong>Destino:</strong> Rio de Janeiro</p>
          <p><strong>Data:</strong> 25/01/2025</p>
          <p><strong>Status:</strong> Cancelado</p>
          {/* Botão para reservar pacote com navegação para a página de pagamento */}
          <button onClick={() => window.location.href = '/payment'}>Reservar viagem</button>
        </div>
      </div>
      {/* Botão Voltar para a página anterior */}
      <button onClick={() => window.history.back()}>Voltar</button>
    </div>
  );
};

export default MinhasViagens;
