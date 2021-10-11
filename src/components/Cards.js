import React from 'react';
import * as CardList from '../services/Cards';
import '../scss/Cards/cards.css';

function Cards() {
  return (
    <section className="cards">
      { CardList.Cards.map(({ id, name, imagePath, description, price }) => (
        name !== 'Todos' && <div className="cards__card-item">
          <div className="cards__card-item__name-image">
            <div className="cards__card-item__name-image__image">
              { imagePath }
            </div>
            <div className="cards__card-item__name-image__name">
              { name }
            </div>
          </div>
          <div className="cards__card-item__description">
            { description }
          </div>
          <button className="cards__card-item__button" type="button">
            { `R$ ${price}` }
            <span className="cards__card-item__button__more">Saiba mais</span>
          </button>
        </div>
      ))}
    </section>
  );
};

export default Cards;