import React from 'react';
import ReactDom from 'react-dom';
//Temporal imports 🤖
import { Helmet } from 'react-helmet';
import icon from '../../../public/favicon.ico';

import '../../styles/default-styles.styl';

ReactDom.render(
  <>
    <Helmet>
      <link rel='icon' type='image/vnd.microsoft.icon' href={icon} />
      <meta name='description' content='Noticias de tecnologia' />
    </Helmet>
    <h1>Hello Blog</h1>
  </>,
  document.getElementById('root'),
);
