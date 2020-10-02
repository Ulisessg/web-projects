import React from 'react';
import ReactDom from 'react-dom';

//Default Styles
import '../../styles/default-styles.styl';
//App
import Design from '../templates/Design';

ReactDom.render(
  <>
    <Design />
  </>,
  document.getElementById('root'),
);
