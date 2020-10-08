import React from 'react';
import ReactDom from 'react-dom';

//Styles

//Components
const Blog = lazy(() => import('../templates/Blog'));

ReactDom.render(
  <>
    <Blog />
  </>,
  document.getElementById('root'),
);
