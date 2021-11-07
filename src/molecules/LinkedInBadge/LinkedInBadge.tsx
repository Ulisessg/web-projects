/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from 'react';
import {
  LinkedInBadgeContainer,
  LinkedInBadgeBackground,
  LinkedInBadgeDescription,
  LinkedInBadgeGoProfileContainer,
} from './LinkedinBadgeStyles';
import Link from '@/atoms/Link';

// Background image https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flinkedin%20cover.jpeg?alt=media&token=7af29779-027c-4d39-b97e-819707fac55c

// LinkedIn logo https://static-exp1.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_93x21_v2.png

const LinkedInBadge: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <LinkedInBadgeContainer>
        <LinkedInBadgeBackground>
          <figure aria-label='Ulises Antonio Samano Galvan'>
            <img
              role='presentation'
              loading='lazy'
              src='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FUlises%20Antonio%20Samano%20Galvan.jpg?alt=media&token=67d05c1b-f0c5-49df-9138-59a68072e9f4'
              alt=''
              className='linkedin-badge--image'
            />
          </figure>
        </LinkedInBadgeBackground>
        <Link
          ariaLabel='Cargando perfil de LinkedIn'
          background='backgroundLight'
          bgh='backgroundLight2'
          ct='textDark'
          cn=''
          cth='textDark'
          href='https://www.linkedin.com/in/ulisessg/'
          linkSize='medium'
          text='Ulises Antonio Samano Galvan'
        />
        <LinkedInBadgeDescription className='linkedin-badge--description'>
          Full Stack Developer / Nerd / Student at Platzi Master.
        </LinkedInBadgeDescription>

        <LinkedInBadgeGoProfileContainer className='linkedin-badge--go-profile'>
          <Link
            ariaLabel='Cargando perfil de LinkedIn'
            background='backgroundLight'
            bgh='backgroundLight2'
            ct='textDark'
            cn=''
            cth='textDark'
            href='https://www.linkedin.com/in/ulisessg/'
            linkSize='medium'
            text='Ver perfil de LinkedIn'
          />
        </LinkedInBadgeGoProfileContainer>
        <figure aria-label='LinkedIn Logo'>
          <img
            role='presentation'
            loading='lazy'
            alt=''
            src='https://static-exp1.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_93x21_v2.png'
          />
        </figure>
      </LinkedInBadgeContainer>
    </>
  );
};

export default LinkedInBadge;
