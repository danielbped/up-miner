import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { Cards } from '../services/Cards';
import '../scss/Details/details.css';

function Details(props) {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const selectedCard = Cards.find((card) => Number(card.id) === Number(id));

  return (
    <section className="details">
      <div className="details__back">
        <Link
          className="details__back__link-to-main"
          to="/"
        >
          <Icon.ArrowLeft/>
          <p
            className="details__back__link-to-main__text"
          >
            Histórico Empresarial
          </p>
        </Link>
      </div>
      <div className="details__graphs">
        <img
          className="details__graphs__image"
          src={selectedCard.graphPaths[0].path}
          alt={ `Gráfico ${selectedCard.name}` }
        />
        <img
          className="details__graphs__image"
          src={selectedCard.graphPaths[1].path}
          alt={ `Gráfico ${selectedCard.name}` }
        />
      </div>
      <div className="details__description">
        <p
          className="details__description__text"
        >
          { selectedCard.description }
        </p>
      </div>
      <div className="details__price-button">
        <div
          className="details__price-button__price"
        >
          <span
            className="details__price-button__price__real"
          >
            R$
          </span>
          <span
            className="details__price-button__price__value"
          >
            { selectedCard.price }
          </span>
        </div>
        <button
          className="details__price-button__button"
        >
          Habilitar
        </button>
      </div>
    </section>
  );
};

export default Details;