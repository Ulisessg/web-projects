/* eslint-disable react/require-default-props */
import React from 'react';
import {
  LoadingContainer,
  LoadingSpinner,
} from '../../styles/atoms/LoadingStyles';

function Loading({ heightExternal }: { heightExternal?: string }): JSX.Element {
  //

  return (
    <>
      <LoadingContainer
        style={
          heightExternal ? { height: `${heightExternal}` } : { height: '100vh' }
        }
      >
        <LoadingSpinner className="loading-spinner" />
      </LoadingContainer>
    </>
  );
}

export default Loading;
