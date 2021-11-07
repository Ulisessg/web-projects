import React, { FunctionComponent } from 'react';
import H2Styles from '../styles/atoms/H2Styles';
import { H2Props } from '../types/props';

const H2: FunctionComponent<H2Props> = (props: H2Props) => {
  return <H2Styles {...props}>{props.text}</H2Styles>;
};

export default H2;
