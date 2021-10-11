import React, { useState } from 'react';
import { Cover } from '../services/Cover'
import '../scss/Header/header.css';

function Header() {
  const [coverPath, setCoverPath] = useState(0);
  const changeCoverPath = () => coverPath === 0 ? setCoverPath(1) : setCoverPath(0);
  setTimeout(() => changeCoverPath(), 10000);
  const { imagePath } = Cover[coverPath];
  
  return (
    <header className={`header${coverPath !== 0 ? '__black' : ''}`}>
    <img className="header__image" src={ imagePath } alt='' />
      <div className="header__first-container">
        <h1 className="header__first-container__title">
          <span className="header__first-container__title__logo" >upMiner</span> | <span className="header__first-container__title__name">Histórico Empresarial</span>
        </h1>
        <p className="header__first-container__description">O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos
        relevantes de uma empresa desde o seu ano de fundação.</p>
      </div>
      <div className="header__second-container">
        <span className="header__second-container__real">R$</span><span className="header__second-container__value">40,00</span>
        <button className="header__second-container__button" type="button">
          Saiba Mais
        </button>
      </div>
    </header>
  );
};

export default Header;