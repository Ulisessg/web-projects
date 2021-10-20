import React, { FunctionComponent } from 'react';
import H2Styles from '../styles/atoms/H2Styles';

import H2Props from '../interfaces_and_types/atoms/H2Props';

const H2: FunctionComponent<H2Props> = ({ text, className }: H2Props) => {
  return <H2Styles className={className || ''}>{text}</H2Styles>;
};

export default H2;
