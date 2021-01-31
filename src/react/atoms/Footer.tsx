import React from 'react';

import '../../styles/atoms/footer.styl';

function Footer(): JSX.Element {
  return (
    <footer className='footer'>
      <div>
        <nav>
          <ul className='header__ul' id='secciones'>
            <li className='ul__li'>
              <p>
                <a
                  aria-label='Mi Twitter'
                  className='ul__li--a'
                  href='https://twitter.com/Ulises5G'
                >
                  Twitter
                </a>
              </p>
            </li>
            <li className='ul__li'>
              <p>
                <a
                  aria-label='Mi perfil de platzi'
                  className='ul__li--a'
                  href='https://platzi.com/p/UlisesSG/'
                >
                  Perfil de platzi
                </a>
              </p>
            </li>
            <li className='ul__li'>
              <p>
                <a
                  aria-label='Mi LinkedIn'
                  className='ul__li--a'
                  href='https://www.linkedin.com/in/ulisessg/'
                >
                  LinkedIn
                </a>
              </p>
            </li>
            <li className='ul__li'>
              <p>
                <a
                  aria-label='Mi repositorio de GitHub'
                  className='ul__li--a'
                  href='https://github.com/Ulisessg'
                >
                  GitHub
                </a>
              </p>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className='LI-profile-badge'
        data-version='v1'
        data-size='medium'
        data-locale='es_ES'
        data-type='vertical'
        data-theme='light'
        data-vanity='ulisessg'
      >
        <a
          className='LI-simple-link'
          href='https://mx.linkedin.com/in/ulisessg?trk=profile-badge'
        >
          Ulises Antonio Sámano Galván
        </a>
      </div>
    </footer>
  );
}

export default Footer;
