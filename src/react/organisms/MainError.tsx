import React from 'react';
import ButtonGoBackStyles from '../../styles/atoms/ButtonGoBackStyles';
import DogIframe from '../atoms/DogIFrame';

function MainError(): JSX.Element {
  function goBack() {
    window.history.back();
  }

  return (
    <>
      <h1 className="message">
        Página no encontrada o en proceso de construcción&nbsp;
        <span role="img" aria-label="emoji ingeniera">
          👷‍♀️
        </span>
        <span role="img" aria-label="emoji señal de construcción">
          🚧
        </span>
        <span role="img" aria-label="emoji ingeniero">
          👷‍♂️
        </span>
      </h1>

      <ButtonGoBackStyles
        title="Regresar a la página anterior"
        type="button"
        onClick={goBack}
      >
        Regresar a la página anterior
      </ButtonGoBackStyles>

      <h2>O mejor ve a este perrito 💚</h2>
      <DogIframe />
    </>
  );
}

export default MainError;
