import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Form/form.css';

function SendForm() {
  return (
    <section className="send-form">
      <p className="send-form__text">
        Muito obrigado por escolher o nosso serviço! Nossa equipe entrará em contato com você em alguns instantes.
      </p>
      <Link
        to="/"
      >
        <button
          className="send-form__button"
          type="button"
        >
          Página Inicial
        </button>
      </Link>
    </section>
  )
};

export default SendForm;