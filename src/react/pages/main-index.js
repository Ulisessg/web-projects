import React from 'react';
import ReactDom from 'react-dom';
//Temporal imports 🤖
import { Helmet } from 'react-helmet';
import icon from '../../../public/favicon.ico';

import '../../styles/default-styles.styl';

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
    <h1>Hello Main</h1>
  </>,
  document.getElementById('root'),
);
