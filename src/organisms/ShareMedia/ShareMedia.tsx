/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
import React, { FunctionComponent } from 'react';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import ShareMediaStyles from './ShareMediaStyles';
import { ShareMediaProps } from '@/props';

const Heart = dynamic(() => import('@/atoms/Heart'), { ssr: false });

const ShareMedia: FunctionComponent<ShareMediaProps> = (
  props: ShareMediaProps
): JSX.Element => {
  // eslint-disable-next-line no-return-assign
  return (
    <>
      {/* Facebook share script */}
      <div id='fb-root' />
      <Script
        async
        defer
        crossOrigin='anonymous'
        src='https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v11.0'
        nonce='PBBx30mF'
      />
      {/* Close Facebook share script */}
      {/* Twitter Share script */}

      <Script strategy='lazyOnload' id='Share-media'>
        {`window.twttr = (function (d, s, id) {
          let js; const fjs = d.getElementsByTagName(s)[0];
          const t = window.twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = 'https://platform.twitter.com/widgets.js';
          fjs.parentNode.insertBefore(js, fjs);

          t._e = [];
          t.ready = function (f) {
            t._e.push(f);
          };

          return t;
        }(document, 'script', 'twitter-wjs'))`}
      </Script>

      <ShareMediaStyles>
        <div>
          <Heart name={props.documentNameForLike} url={props.addLikePath} />
        </div>
        {/* Facebook share div */}
        <div
          className='fb-share-button'
          data-href={`https://ulisessg.com${props.path}`}
          data-layout='box_count'
          data-size='large'
        >
          <a
            target='_blank'
            href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse'
            className='fb-xfbml-parse-ignore'
            rel='noreferrer'
          >
            Compartir en Facebook
          </a>
        </div>
        <div>
          <a
            target='_blank'
            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://ulisessg.com${props.path}`}
            rel='noreferrer'
          >
            <img
              loading='lazy'
              alt='Compartir en LinkedIn Logo'
              src='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fblogs%2Fshare%20social%20media%2FLinkedIn%20share%20logo.png?alt=media&token=0be89f71-48aa-46bd-9c36-82c0e6e355f3'
              width='80px'
              height='auto'
            />
          </a>
        </div>
        {/* Twitter Share */}
        <div>
          <a
            target='_blank'
            className='twitter-share-button'
            href='https://twitter.com/intent/tweet?via=Ulises5G'
            data-size='large'
            rel='noreferrer'
          >
            Tweet
          </a>
        </div>
      </ShareMediaStyles>
    </>
  );
};

export default ShareMedia;
