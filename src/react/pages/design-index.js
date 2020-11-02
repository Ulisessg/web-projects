import React from 'react';
import ReactDom from 'react-dom';
//This line is mandatory
// eslint-disable-next-line no-unused-vars
import Regenerator from 'regenerator-runtime';
//App
import Design from '../templates/Design';

ReactDom.render(
  <>
    <Design />
  </>,
  document.getElementById('root'),
);
