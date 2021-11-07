import React, { FunctionComponent } from 'react';
// import ButtonGoBackStyles from '../styles/atoms/ButtonGoBackStyles';
// import DogIframe from '../atoms/DogIFrame';
import Link from '../atoms/Link';
const MainError: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <h1 className='message' style={{ textAlign: 'center' }}>
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
        <Link
          cn=''
          ariaLabel={`Cargando`}
          background='backgroundLight'
          bgh='backgroundLight2'
          ct='textDark'
          cth='textDark'
          linkSize='small'
          href='/'
          text='Regresar al inicio'
        />
      </h1>
    </>
  );
};

export default MainError;
