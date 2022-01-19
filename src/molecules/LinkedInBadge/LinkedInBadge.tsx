/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from 'react';
import Link from '@/atoms/Link';
import styled from 'styled-components';
import { backgroundLight } from 'styles/variables';

const LinkedInBadgeContainer = styled.section`
  width: 250px;
  height: 500px;
  margin-top: 50px;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  background-color: aliceblue;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding-bottom: 15px;

  border-radius: 20px;
  border: 1px solid black;
`;

const LinkedInBadgeBackground = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
  justify-content: center;
  figure {
    & img {
      border-radius: 100%;
      width: 100px;
      margin: 0 auto;
      border: 4px solid white;
    }
  }
`;

const LinkedInBadgeDescription = styled.p`
  padding: 10px;
`;

const LinkedInBadgeGoProfileContainer = styled.div`
  padding: 3px;
`;

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
