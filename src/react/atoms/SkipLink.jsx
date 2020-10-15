import React from 'react';

import '../../styles/atoms/skipLink.styl';

const SkipLink = () => (
  <>
    <div className='skip-link'>
      <p>
        <a className='skip-link--link' href='#main'>
          Contenido principal
        </a>
      </p>
      <p>
        <a className='skip-link--link' href='#secciones'>
          Secciones de la página
        </a>
      </p>
    </div>
  </>
);

export default SkipLink;
