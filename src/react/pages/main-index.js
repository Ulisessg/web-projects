import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';

import { Helmet } from 'react-helmet';
import Icon from '../../images/favicon.png';

//Styles
import '../../styles/default-styles.styl';

//Componets
const Main = lazy(() => import('../templates/Main'));

ReactDom.render(
  <>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Helmet>
        <title>Ulises Dev</title>
        <meta
          name='description'
          content='Portafolio de @Ulises5G ulisessg Ulises Antonio Samano Galvan'
        />
        <link rel='icon' type='image/vnd.microsoft.icon' href={Icon} />
      </Helmet>
      <Main />
    </Suspense>
  </>,
  document.getElementById('root'),
);
