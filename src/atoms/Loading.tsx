/* eslint-disable react/require-default-props */
import React from 'react';
import {
  LoadingContainer,
  LoadingSpinner,
} from '../styles/atoms/LoadingStyles';
import { LoadingProps } from '../types/props';

function Loading(props: LoadingProps): JSX.Element {
  return (
    <>
      <LoadingContainer
        style={
          props.heightExternal ? { height: `${props.heightExternal}` } : { height: '100vh' }
        }
      >
        <LoadingSpinner {...props} />
      </LoadingContainer>
    </>
  );
}

export default Loading;
