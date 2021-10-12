import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as CardList from '../services/Cards';
import '../scss/Cards/cards.css';
import Context from '../context/Context';

function Cards() {
  const { filters } = useContext(Context);
  const { filtered, order } = filters;
  const cardsFiltered = filtered === 'Todos' ? CardList.Cards : CardList.Cards.filter((card) => card.name.includes(filtered));
  const sortedItems = order !== '' ? cardsFiltered.sort((a, b) => a[order] - b[order]) : cardsFiltered.sort((a, b) => a.id - b.id);

  return (
    <section className="cards">
      { sortedItems.map(({ id, name, imagePath, description, price }) => (
        name !== 'Todos' && id !== 10 &&
        <div
          className="cards__card-item"
          key={ id }
        >
          <div
            className="cards__card-item__name-image"
          >
            <div
              className="cards__card-item__name-image__image"
            >
              { imagePath }
            </div>
            <div
              className="cards__card-item__name-image__name"
            >
              { name }
            </div>
          </div>
          <div
            className="cards__card-item__description"
          >
            { description }
          </div>
          <button
            className="cards__card-item__button" type="button"
          >
            <Link
              className="cards__card-item__button__link"
              to={`/detalhes/${id}`}
            >
              { `R$ ${price}` }
              <span
                className="cards__card-item__button__more"
              >
                Saiba mais
              </span>
            </Link>
          </button>
        </div>
      ))}
    </section>
  );
};

export default Cards;