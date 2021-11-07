import React, { FunctionComponent } from 'react';
import { LoadingContainer, LoadingSpinner } from './LoadingStyles';
import { LoadingProps } from '@/props';

const Loading: FunctionComponent<LoadingProps> = (props: LoadingProps) => {
  return (
    <>
      <LoadingContainer
        style={
          props.heightExternal
            ? { height: `${props.heightExternal}` }
            : { height: '100vh' }
        }
      >
        <LoadingSpinner {...props} />
      </LoadingContainer>
    </>
  );
};

export default Loading;
