/* eslint-disable react/require-default-props */
import React from 'react';
import LazyImage from './Img';
import {
  LinkedInBadgeContainer,
  LinkedInBadgeBackground,
  LinkedInBadgeName,
  LinkedInBadgeDescription,
  LinkedInBadgeGoProfileContiner,
} from '../styles/molecules/LinkedinBadgeStyles';

// Background image https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flinkedin%20cover.jpeg?alt=media&token=7af29779-027c-4d39-b97e-819707fac55c

// LinkedIn logo https://static-exp1.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_93x21_v2.png

function LinkedInBadge({ classN }: { classN?: string; }): JSX.Element {
  return (
    <>
      <LinkedInBadgeContainer
        className={classN ? `linkedin-badge ${classN}` : 'linkedin-badge'}
      >
        <LinkedInBadgeBackground>
          <LazyImage
            src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Fulises5G.jfif?alt=media&token=bbe0eb8b-ee31-4ef1-a444-452691ca8f67"
            alt="Ulises Antonio Samano Galvsn"
            classN="linkedin-badge--image"
          />
        </LinkedInBadgeBackground>
        <a
          className="linkedin-badge--name"
          href="https://mx.linkedin.com/in/ulisessg?trk=profile-badge"
        >
          <strong>
            <LinkedInBadgeName>Ulises Antonio Samano Galvan</LinkedInBadgeName>
          </strong>
        </a>

        <LinkedInBadgeDescription className="linkedin-badge--description">
          Full Stack Developer / Nerd / Student at Platzi Master.
        </LinkedInBadgeDescription>

        <LinkedInBadgeGoProfileContiner className="linkedin-badge--go-profile">
          <a href="https://mx.linkedin.com/in/ulisessg?trk=profile-badge">
            Ver perfil
          </a>
        </LinkedInBadgeGoProfileContiner>
        <LazyImage
          classN=""
          alt="Linkedin Logo"
          src="https://static-exp1.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_93x21_v2.png"
        />
      </LinkedInBadgeContainer>
    </>
  );
}

export default LinkedInBadge;
