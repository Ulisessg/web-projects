import React from 'react';
import { connect } from 'react-redux';

import '../../styles/organisms/mainDesign-styles.styl';

import Sections from './Sections';

const MainDesign = ({ sections, images }) => {
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
          Estas son las reglas, componentes y pruebas que utilizo para crear
          todos mis productos, si hay algo que te interese úsalo con confianza.
        </p>
        <br />
        <p>
          Si hay algún error, falla en la accesibilidad o deseas colaborar
          puedes comentármelo por&nbsp;
          <span className='highlight'>
            <a
              href='https://twitter.com/Ulises5G'
              target='_blank'
              rel='noreferrer'
              className='highlight--link'
              title='Mi twitter'
            >
              Twitter
            </a>
          </span>
          &nbsp;ó puedes ir al&nbsp;
          <span className='highlight'>
            <a
              href='https://github.com/Ulisessg/web-projects'
              target='_blank'
              rel='noreferrer'
              className='highlight--link'
              title='Repositorio del proyecto en Github'
            >
              repositorio del proyecto.
            </a>
          </span>
        </p>
      </section>
      <Sections images={images} sections={sections} />
    </main>
  );
};

const mapStateToProps = ({ sections, images }) => {
  return {
    sections,
    images,
  };
};

export default connect(mapStateToProps, null)(MainDesign);
