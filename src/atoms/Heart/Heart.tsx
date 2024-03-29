import React, { useState, FunctionComponent } from 'react';
import { HeartProps } from '@/props';

import styled, { createGlobalStyle } from 'styled-components';

const HeartStyles = styled.button<{ className: string }>`
  appearance: auto;
  width: 60px;
  height: 70px;
  border-radius: 15px;
  border: 1px solid grey;
  &::before {
    content: '❤';
    font-size: 2.8rem;
    color: tomato;
    text-align: center;
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.backgroundLight};
  }
  &:active {
    transform: scale(0.86);
  }
`;

const OtherStyles = createGlobalStyle`
  .liked {
    &::before {
      color: green;
    }
  }
`;

const Heart: FunctionComponent<HeartProps> = ({ url, name }: HeartProps) => {
  const [isLiked, setIsLiked] = useState<any>(
    typeof window !== 'undefined' && window.localStorage.getItem(name)
  );
  const [clicksCounter, setClicksCounter] = useState<number>(0);

  const updateLike = (): any => {
    setClicksCounter(clicksCounter + 1);

    // Void lot of clicks
    if (clicksCounter >= 3) {
      window.localStorage.setItem(name, 'true');
      return;
    }

    if (`${window.localStorage.getItem(name)}` === 'true') {
      window.localStorage.setItem(name, 'false');
      setIsLiked('false');
    } else {
      // Add like
      fetch(url, { method: 'POST', body: JSON.stringify({ name }) })
        .then(() => {
          setIsLiked('true');
          window.localStorage.setItem(name, 'true');
        })
        .catch(() => {
          setIsLiked('false');
        });
    }
  };

  return (
    <>
      <OtherStyles />
      <HeartStyles
        aria-label='Like a esta publicación'
        onClick={updateLike}
        className={isLiked === 'true' ? 'liked' : ''}
      />
    </>
  );
};

export default Heart;
