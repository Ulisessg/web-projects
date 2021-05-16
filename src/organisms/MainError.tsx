import React from 'react';
// import ButtonGoBackStyles from '../styles/atoms/ButtonGoBackStyles';
// import DogIframe from '../atoms/DogIFrame';

function MainError(): JSX.Element {
  // function goBack() {
  //   window.history.back();
  // }

  return (
    <>
      <h1 className="message" style={{ textAlign: 'center' }}>
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

    </>
  );
}

export default MainError;
