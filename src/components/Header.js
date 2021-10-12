import React, { useState } from 'react';
import { Cover } from '../services/Cover'
import '../scss/Header/header.css';
import { Cards } from '../services/Cards';

function Header() {
  const [coverPath, setCoverPath] = useState(0);
  const changeCoverPath = () => coverPath === 0 ? setCoverPath(1) : setCoverPath(0);
  setTimeout(() => changeCoverPath(), 10000);
  const { imagePath } = Cover[coverPath];
  const promoCard = Cards.find((card) => Number(card.id) === 10)
  
  return (
    <header
      className={`header${coverPath !== 0 ? '__black' : ''}`}
    >
    <img
      className="header__image"
      src={ imagePath }
      alt=''
    />
      <div
        className="header__first-container"
      >
        <h1
          className="header__first-container__title"
        >
          <span
            className="header__first-container__title__logo"
          >
            upMiner
          </span>
          {" | "}
          <span
            className="header__first-container__title__name"
          >
            { promoCard.name }
          </span>
        </h1>
        <p
          className="header__first-container__description"
        >
          { promoCard.description }
        </p>
      </div>
      <div
        className="header__second-container"
      >
        <span
          className="header__second-container__real"
        >
          R$
        </span>
        <span
          className="header__second-container__value"
        >
          { promoCard.price }
        </span>
        <button
          className="header__second-container__button"
          type="button"
        >
          Saiba Mais
        </button>
      </div>
    </header>
  );
};

export default Header;