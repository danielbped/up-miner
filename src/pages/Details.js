import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { Cards } from '../services/Cards';
import '../scss/Details/details.css';

function Details(props) {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const selectedCard = Cards.find((card) => Number(card.id) === Number(id));
  const [graph, setGraph] = useState(0);

  const handleSetGraph = (value) => {
    if (graph >= 0 && graph < 2) return setGraph(2);
    else if (graph >= 2) return setGraph(0);
    setGraph(value);
  }

  setTimeout(() => handleSetGraph(graph + 1), 10000);

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
        <button
          type="button"
          className="details__graphs__button"
          onClick={ () => handleSetGraph(graph - 1) }
        >
          <Icon.ArrowLeftCircle />
        </button>
        <img
          className="details__graphs__image"
          src={selectedCard.graphPaths[graph].path}
          alt={ `Gráfico ${selectedCard.name}` }
        />
        <img
          className="details__graphs__image"
          src={selectedCard.graphPaths[graph + 1].path}
          alt={ `Gráfico ${selectedCard.name}` }
        />
        <button
          type="button"
          className="details__graphs__button"
          onClick={ () => handleSetGraph(graph + 1) }
        >
          <Icon.ArrowRightCircle />
        </button>
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
        <Link to='/contato'>
          <button
            className="details__price-button__button"
          >
            Habilitar
          </button>
        </Link>
        </div>
    </section>
  );
};

export default Details;