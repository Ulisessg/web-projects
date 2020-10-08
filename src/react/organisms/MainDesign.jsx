import React, { lazy } from 'react';
import { sectionsDesign } from '../../localData.json';

const Sections = lazy(() => import('./Sections'));

const MainDesign = () => {
  return (
    <main className='main'>
      <h1>
        Hola persona curiosa
        <span role='img' aria-label='emoji'>
          😄
        </span>
      </h1>
      <div>
        <br />
        <h4>Bienvenida a mi sistema de diseño.</h4>
        <h4>
          Estas son las reglas, componentes y pruebas que utilizo para crear
          todos mis productos, si hay algo que te interese úsalo con confianza.
        </h4>
        <br />
        <p>
          Si hay algún error o deseas colaborar puedes comentarmelo en&nbsp;
          <a
            href='https://twitter.com/Ulises5G'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#fabb' }}
          >
            Twitter
          </a>
          &nbsp;ó puedes ir al&nbsp;
          <a
            href='https://github.com/Ulisessg/web-projects'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#fabb' }}
          >
            repositorio del proyecto
          </a>
        </p>
        <Sections sections={sectionsDesign} />
      </div>
    </main>
  );
};

export default MainDesign;
