import React from 'react';

import '../../styles/atoms/footer.styl';

const Footer = () => {
  return (
    <footer className='footer'>
      <a
        className='footer--link'
        href='mailto:ukisessg@gmail.com'
        aria-label='Email de contacto'
        title='Email de contacto'
      >
        Contacto
      </a>
    </footer>
  );
};

export default Footer;
