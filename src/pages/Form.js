import React, { useState } from 'react';
import Input from '../components/Input';
import SendForm from '../components/SendForm';
import '../scss/Form/form.css';

function Form() {
  const INITIAL_VALUE = {
    name: '',
    email: '',
    phone: '',
  };

  const [info, setInfo] = useState(INITIAL_VALUE);

  const [showBackButton, setShowBackButton] = useState(false);

  const handleSetInfo = ({ target: { name, value } }) => {
    setInfo({
      ...info,
      [name]: value,
    })
  };

  const handleSendForm = (e) => {
    e.preventDefault();
    setInfo(INITIAL_VALUE);
    setShowBackButton(true);
  }

  return (
    <main
      className="main-form"
    >
      <form 
        className="main-form__form"
      >
        <Input
          className="main-form__form__input"
          name="name"
          placeholder="Nome Completo"
          onChange={ handleSetInfo }
          value={ info.name }
        />
        <Input
          className="main-form__form__input"
          name="email"
          placeholder="E-mail"
          onChange={ handleSetInfo }
          value={ info.email }
        />
        <Input
          className="main-form__form__input"
          name="phone"
          placeholder="Telefone"
          onChange={ handleSetInfo }
          value={ info.phone }
        />
      <button
        className="main-form__form__button"
        onClick={ (e) => handleSendForm(e) }
      >
        Enviar
      </button>
      {showBackButton && <SendForm />}
      </form>
    </main>
  ); 
};

export default Form;