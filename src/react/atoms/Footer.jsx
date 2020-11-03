import React from 'react';

import '../../styles/atoms/footer.styl';

const Footer = () => {
  return (
    <footer className='footer'>
      <a
        className='footer--link'
        href='mailto:ukisessg@gmail.com'
        title='Enlace de contacto'
      >
        Contacto
      </a>
    </footer>
  );
};

export default Footer;
