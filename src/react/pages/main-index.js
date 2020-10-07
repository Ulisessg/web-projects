import React from 'react';
import ReactDom from 'react-dom';
//Temporal imports 🤖
import { Helmet } from 'react-helmet';
import icon from '../../../public/favicon.ico';

//Styles
import '../../styles/default-styles.styl';
import '../../styles/pages/redirect.styl';

ReactDom.render(
  <>
    <Helmet>
      <title>Ulises Dev</title>
      <meta
        name='description'
        content='Portafolio de @Ulises5G ulisessg Ulises Antonio Samano Galvan'
      />
      <link rel='icon' type='image/vnd.microsoft.icon' href={icon} />
    </Helmet>
    <h1>
      Work in progress...
      <span role='img' aria-label='emoji'>
        😀
      </span>
    </h1>
    <br />
    <a href='/design' className='link'>
      <h1>Actualmente estoy trabajando en un sistema de diseño</h1>
    </a>
  </>,
  document.getElementById('root'),
);
