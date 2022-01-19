import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { H2Props } from '@/props';

const H2Styles = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

const H2: FunctionComponent<H2Props> = (props: H2Props) => {
  return <H2Styles {...props}>{props.text}</H2Styles>;
};

export default H2;
