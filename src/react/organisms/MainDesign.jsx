import React, { lazy } from 'react';
import { sectionsDesign } from '../../localData.json';

import '../../styles/organisms/MainDesign.styl';

const Sections = lazy(() => import('./Sections'));

const MainDesign = () => {
  return (
    <main className='main'>
      <h1 className='main__welcome'>
        Hola persona curiosa
        <span role='img' aria-label='emoji'>
          😄
        </span>
      </h1>
      <div>
        <br />
        <p>
          <strong>
            Estas son las reglas, componentes y pruebas que utilizo para crear
            todos mis productos, si hay algo que te interese úsalo con
            confianza.
          </strong>
        </p>
        <br />
        <p>
          <strong className='main__links'>
            Si hay algún error o deseas colaborar puedes comentarmelo por&nbsp;
            <a
              href='https://twitter.com/Ulises5G'
              target='_blank'
              rel='noreferrer'
              className='highlight'
            >
              Twitter
            </a>
            &nbsp;ó puedes ir al&nbsp;
            <a
              href='https://github.com/Ulisessg/web-projects'
              target='_blank'
              rel='noreferrer'
              className='highlight'
            >
              repositorio del proyecto.
            </a>
          </strong>
        </p>
        <Sections sections={sectionsDesign} />
      </div>
    </main>
  );
};

export default MainDesign;
