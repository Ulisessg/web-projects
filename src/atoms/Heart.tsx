import React, { useState } from 'react';
import { HeartStyles, OtherStyles } from '../styles/atoms/HeartStyles';

function Heart({ url, name }: {
  url: string;
  name: string | undefined;
}): JSX.Element {
  const [isLiked, setIsLiked] = useState<string | undefined>(typeof window !== 'undefined' && window.localStorage.getItem(name));
  const [clicksCounter, setClicksCounter] = useState<number>(0);

  function updateLike(): void {
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
      fetch(url, { method: 'POST', body: JSON.stringify({ name }) }).then(() => {
        setIsLiked('true');
        window.localStorage.setItem(name, 'true');
      }).catch(() => {
        setIsLiked('false');
      });
    }
  }

  return (
    <>
      <OtherStyles />
      <HeartStyles aria-label="Like a esta publicación" onClick={updateLike} className={isLiked === 'true' && 'liked'} />
    </>
  );
}

export default Heart;
