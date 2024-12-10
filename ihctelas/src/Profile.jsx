import React from 'react';
import './App.css';

const Profile = () => {
  const navigateTo = (path) => {
    window.history.pushState(null, null, path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  

  return (
    <div className="profile-container">
      <div className="greeting">Olá, o que iremos fazer hoje?</div>
      <div className="avatar-container">
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="avatar" />
      </div>
      <div className="button-container">
        <button className="profile-button" onClick={() => navigateTo('/passagens')}>Viajar</button>
        <button className="profile-button" onClick={() => navigateTo('/buy-packages')}>Comprar Pacotes</button>
        <button className="profile-button" onClick={() => navigateTo('/my-trips')}>Minhas Viagens</button>
        <button className="profile-button" onClick={() => navigateTo('/my-packages')}>Meus Pacotes</button>
        <button className="profile-button" onClick={() => navigateTo('/edit-profile')}>Editar Perfil</button>
      </div>
      <div className="logout-container">
        <button className="logout-button" onClick={() => navigateTo('/')}>Sair</button>
      </div>
    </div>
  );
};

export default Profile;
