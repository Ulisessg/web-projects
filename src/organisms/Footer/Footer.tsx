/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from 'react';
import LinkedInBadge from '@/molecules/LinkedInBadge';
import {
  FooterElement,
  FooterContainer,
  Quote,
  FollowMe,
  SocialMediaContainer,
  OtherLinks,
  CoffeeQuote,
  CssStyles,
} from './FooterStyles';
import Link from '@/atoms/Link';
import { footerPaths } from '../../states/index';

const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <CssStyles />
      <FooterElement id='contact'>
        <FooterContainer>
          <figure aria-label='Mi logo'>
            <img
              role='presentation'
              loading='lazy'
              alt=''
              className='logo-footer'
              src='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flogo-192x192.png?alt=media&token=1a4aa1ca-1846-41b3-9005-9c4dc5c4d888'
            />
          </figure>
          <Quote className='footer__quote'>
            Si puedes imaginarlo puedes programarlo 💚
          </Quote>

          {/* Social media */}
          <FollowMe className='footer__quote-follow-me'>
            Sigueme en mis redes sociales
          </FollowMe>

          <SocialMediaContainer className='footer__social'>
            <a
              className='social-media-link'
              href='https://www.facebook.com/Ulises5G'
            >
              <img
                loading='lazy'
                src='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Ffacebook.png?alt=media&token=69833032-271c-4f43-a2d4-c621350b2e54'
                alt='Logo de Facebook'
                className='social-media--logo'
              />
            </a>
            <a
              className='social-media-link'
              href='https://twitter.com/Ulises5G'
            >
              <img
                loading='lazy'
                src='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Ftwitter.png?alt=media&token=539518e5-e18b-4cc4-a41e-498b68caf60b'
                alt='Logo de twitter'
                className='social-media--logo'
              />
            </a>
            <a className='social-media-link' href='https://github.com/Ulisessg'>
              <img
                loading='lazy'
                src='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FGitHub-logo.png?alt=media&token=f7d795cd-d7db-4b35-a2f4-0dca3070dd1b'
                alt='Logo de github'
                className='social-media--logo'
              />
            </a>
          </SocialMediaContainer>

          {/* Contact and info */}

          {/* <div style={{ justifySelf: 'center' }}> */}
          <LinkedInBadge />

          <OtherLinks className='footer__other-links'>
            {footerPaths.map((path) => {
              return (
                <Link
                  key={path.label}
                  ariaLabel={`Cargando ${path.text}`}
                  background='backgroundDark'
                  bgh='backgroundLight2'
                  cn='footer_links'
                  ct='textDark'
                  cth='textDark'
                  href={path.path}
                  linkSize='medium'
                  text={path.text}
                  noShadow={true}
                />
              );
            })}
          </OtherLinks>
          {/* </div> */}

          <CoffeeQuote className='coffe-quote'>
            Hecho con amor, café y amor al café 💚
          </CoffeeQuote>
        </FooterContainer>
      </FooterElement>
    </>
  );
};

export default Footer;
