import React from 'react';
import H2Styles from '../styles/atoms/H2Styles';

import H2Props from '../interfaces_and_types/atoms/H2Props';

function H2({ text, className }: H2Props): JSX.Element {
  return (
    <H2Styles className={className || ''}>{text}</H2Styles>
  );
}

export default H2;
