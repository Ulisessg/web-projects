import React from 'react';
import ReactDom from 'react-dom';

import '../../styles/default-styles.styl';
import Error from '../templates/Error';

ReactDom.render(
  <>
    <Error />
  </>,
  document.getElementById('root'),
);
