import React from 'react';

import '../../styles/atoms/buttonGoBack.styl';

function MainError() {
  function goBack() {
    window.history.back();
  }

  return (
    <>
      <main id='main'>
        <h1 className='message'>
          Página no encontrada o en proceso de construcción&nbsp;
          <span role='img' aria-label='emoji ingeniera'>
            👷‍♀️
          </span>
          <span role='img' aria-label='emoji señal de construcción'>
            🚧
          </span>
          <span role='img' aria-label='emoji ingeniero'>
            👷‍♂️
          </span>
        </h1>
        <button
          title='Regresar a la página anterior'
          className='button-back'
          type='button'
          onClick={goBack}
        >
          Regresar a la página anterior
        </button>
        <span />
      </main>
    </>
  );
}

export default MainError;
