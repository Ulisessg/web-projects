import React from 'react';
import Script from 'next/script';
import dynamic from 'next/dynamic';

const Heart = dynamic(() => import('../atoms/Heart'), { ssr: false });

function ShareMedia({
  path,
  title,
  description,
  addLikePath,
  documentNameForLike,
}:
  {
    path: string;
    title: string;
    description: string;
    addLikePath: string;
    documentNameForLike: string;
  }): JSX.Element {
  return (
    <>
      {/* Facebook share script */}
      <div id="fb-root" />
      <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v11.0" nonce="PBBx30mF" />
      {/* Close Facebook share script */}

      <section style={{ marginTop: '15px', display: 'flex', alignItems: 'center' }}>
        <div>
          <Heart name={documentNameForLike} url={addLikePath} />
        </div>
        {/* Facebook share div */}
        <div className="fb-share-button" data-href={`https://ulisessg.com${path}`} data-layout="box_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore" rel="noreferrer">Compartir en Facebook</a></div>
        <div>
          <a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=https://ulisessg.com${path}&title=${title}&summary=${description}`} rel="noreferrer"><img alt="Compartir en LinkedIn Logo" src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fblogs%2Fshare%20social%20media%2FLinkedIn%20share%20logo.png?alt=media&token=0be89f71-48aa-46bd-9c36-82c0e6e355f3" width="90px" height="auto" /></a>
        </div>
      </section>
    </>
  );
}

export default ShareMedia;
