import React, { useState } from 'react';
import { HeartStyles, OtherStyles } from '../styles/atoms/HeartStyles';

function Heart({ url, name }: {
  url: string;
  name: string | undefined;
}): JSX.Element {
  const [isLiked, setIsLiked] = useState<string | undefined>(window.localStorage.getItem('liked'));
  const [clicksCounter, setClicksCounter] = useState<number>(0);

  function updateLike(): void {
    setClicksCounter(clicksCounter + 1);

    // Void lot of clicks
    if (clicksCounter >= 3) {
      window.localStorage.setItem('liked', 'true');
      return;
    }

    if (`${window.localStorage.getItem('liked')}` === 'true') {
      window.localStorage.setItem('liked', 'false');
      setIsLiked('false');
    } else {
      // Add like
      fetch(url, { method: 'POST', body: JSON.stringify({ name }) }).then(() => {
        setIsLiked('true');
        window.localStorage.setItem('liked', 'true');
      }).catch(() => {
        setIsLiked('false');
      });
    }
  }

  return (
    <>
      <OtherStyles />
      <HeartStyles onClick={updateLike} className={isLiked === 'true' && 'liked'} />
    </>
  );
}

export default Heart;