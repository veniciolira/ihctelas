import React from 'react';

const PackageForm = () => {
  return (
    <div>
      <h1>Cadastro de Pacotes</h1>
      <input type="text" placeholder="Digite a origem da viagem" />
      <input type="text" placeholder="Digite o destino da viagem" />
      <input type="number" placeholder="Valor do pacote (R$)" />
      <input type="date" placeholder="Data de ida" />
      <input type="date" placeholder="Data de volta" />
      <select>
        <option value="">Tipo de assento</option>
        <option value="conventional">Convencional</option>
        <option value="semi-bed">Semi-leito</option>
        <option value="bed">Leito</option>
      </select>
      <button>Salvar Pacote</button>
    </div>
  );
};

export default PackageForm;
