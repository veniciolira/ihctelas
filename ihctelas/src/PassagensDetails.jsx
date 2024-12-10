import React, { useState } from 'react';
import './App.css';

const PassagensDetails = () => {
  const [showPassagens, setShowPassagens] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSearchPassagens = () => {
    setShowPassagens(true);
  };

  const handleReservePassagem = () => {
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 2000); // Esconde o popup após 2 segundos
  };

  return (
    <div className="passagens-container">
      <h1>Passagens</h1>
      <input type="text" placeholder="Origem" />
      <input type="text" placeholder="Destino" />
      <input type="date" />
      <select>
        <option value="leito">Leito</option>
        <option value="semi-leito">Semi-leito</option>
      </select>
      <button onClick={handleSearchPassagens}>Buscar</button>
      {showPassagens && (
        <div className="passagens-list">
          <div className="passagem">
            <p>Origem: São Paulo - Destino: Rio de Janeiro</p>
            <p>Data: 01/12/2024 - Horário: 10:00</p>
            <button onClick={handleReservePassagem}>Reservar</button>
          </div>
          <div className="passagem">
            <p>Origem: São Paulo - Destino: Rio de Janeiro</p>
            <p>Data: 01/12/2024 - Horário: 14:00</p>
            <button onClick={handleReservePassagem}>Reservar</button>
          </div>
        </div>
      )}
      <button className="back-to-profile-button" onClick={() => window.location.href = '/profile'}>
        Voltar
      </button>
      {popupVisible && <div className="popup">Passagem Reservada!</div>}
    </div>
  );
};

export default PassagensDetails;
