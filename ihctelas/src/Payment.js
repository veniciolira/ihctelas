import React, { useState } from 'react';
import './App.css';  // Estilo para a tela de pagamento

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleFinalizePayment = () => {
    // Simulação da navegação para outra página, apenas para demonstração
    alert(`Pagamento realizado com método: ${paymentMethod}`);
  };

  const handleGoBack = () => {
    window.location.href = '/profile';  // Navega para a página de perfil
  };

  return (
    <div className="payment-container">
      <h1>Pagamento</h1>
      
      <div className="payment-form">
        <input type="text" placeholder="Nome impresso no cartão" />
        <input type="text" placeholder="Número do cartão" />
        <input type="text" placeholder="Validade (MM/AAAA)" />
        <input type="text" placeholder="Código de segurança (CVV)" />
        
        {/* Seleção do método de pagamento */}
        <select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
          <option value="">Escolha o método de pagamento</option>
          <option value="creditCard">Cartão de Crédito</option>
          <option value="pix">PIX</option>
        </select>

        {/* Condição para exibir o parcelamento se for Cartão de Crédito */}
        {paymentMethod === 'creditCard' && (
          <select>
            <option value="1">1x</option>
            <option value="2">2x</option>
            <option value="3">3x</option>
          </select>
        )}

        <button className="btn finalize-btn" onClick={handleFinalizePayment}>Finalizar Pagamento</button>
        {/* Botão de voltar para o perfil */}
        <button className="btn back-btn" onClick={handleGoBack}>Voltar</button>
      </div>
    </div>
  );
};

export default Payment;
