import React from 'react';
import Script from 'next/script';

function FacebookComments({ path }: { path: string; }): JSX.Element {
  return (
    <>
      <div id="fb-root" />
      <Script strategy="lazyOnload" async defer crossOrigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v11.0" nonce="en2QEFOL" />
      <div style={{ margin: '0 auto' }}>
        <div className="fb-comments" data-href={path} data-numposts="5" />
      </div>
    </>
  );
}

export default FacebookComments;
