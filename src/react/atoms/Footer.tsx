import React from 'react';

import '../../styles/atoms/footer.styl';

const Footer = () => {
  const textMailTo = 'Haz click para contactarme';
  const justTheEmail = 'Email: ukisessg@gmail.com';

  let text;

  if (navigator.registerProtocolHandler) {
    text = textMailTo;
  } else {
    text = justTheEmail;
  }

  return (
    <footer className='footer'>
      {text === textMailTo ? (
        <a
          className='footer--link'
          href='mailto:ukisessg@gmail.com'
          aria-label={text}
          title={text}
        >
          {text}
        </a>
      ) : (
        <p className='footer--link' aria-label={text} title={text}>
          {text}
        </p>
      )}
    </footer>
  );
};

export default Footer;
