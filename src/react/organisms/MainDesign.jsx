import React, { lazy } from 'react';
import { sectionsDesign } from '../../localData.json';

import '../../styles/organisms/mainDesign-styles.styl';

const Sections = lazy(() => import('./Sections'));

const MainDesign = () => {
  return (
    <main className='main' id='main'>
      <section>
        <h1 className='main__welcome'>
          Hola persona curiosa
          <span role='img' aria-label='emoji'>
            😄
          </span>
        </h1>
        <br />
        <p>
          <strong className='main__links'>
            Estas son las reglas, componentes y pruebas que utilizo para crear
            todos mis productos, si hay algo que te interese úsalo con
            confianza.
          </strong>
        </p>
        <br />
        <p>
          <strong className='main__links'>
            Si hay algún error, falla en la accesibilidad o deseas colaborar
            puedes comentármelo por&nbsp;
            <p className='highlight'>
              <a
                href='https://twitter.com/Ulises5G'
                target='_blank'
                rel='noreferrer'
                className='highlight--link'
              >
                Twitter
              </a>
            </p>
            &nbsp;ó puedes ir al&nbsp;
            <p className='highlight'>
              <a
                href='https://github.com/Ulisessg/web-projects'
                target='_blank'
                rel='noreferrer'
                className='highlight--link'
              >
                repositorio del proyecto.
              </a>
            </p>
          </strong>
        </p>
      </section>
      <Sections sections={sectionsDesign} />
    </main>
  );
};

export default MainDesign;
