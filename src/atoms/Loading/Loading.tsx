import React, { FunctionComponent } from 'react';
import { LoadingProps } from '@/props';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
`;

const LoadingSpinner = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid;
  animation: ${spin} 0.8s linear infinite;
`;

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
