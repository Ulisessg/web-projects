import React from 'react';

import '../styles/atoms/skipLink.styl';

const SkipLink: React.FC = () => (
  <>
    <div className="skip-link">
      <span className="skip-link--p">
        <a
          aria-label="Contenido principal"
          className="skip-link--link"
          href="#main"
        >
          Contenido principal
        </a>
      </span>
      <span className="skip-link--p">
        <a
          aria-label="Otras páginas"
          className="skip-link--link"
          href="#secciones"
        >
          Otras páginas
        </a>
      </span>
    </div>
  </>
);

export default SkipLink;
