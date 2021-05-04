/* eslint-disable react/require-default-props */
import React from 'react';
import LazyImage from './Img';
import {
  LinkedInBadgeContainer,
  LinkedInBadgeBackground,
  LinkedInBadgeName,
  LinkedInBadgeDescription,
  LinkedInBadgeGoProfileContiner,
  ClsStyles,
} from '../../styles/molecules/LinkedinBadgeStyles';

// Background image https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flinkedin%20cover.jpeg?alt=media&token=7af29779-027c-4d39-b97e-819707fac55c

// LinkedIn logo https://static-exp1.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_93x21_v2.png

function LinkedInBadge({ classN }: { classN?: string }): JSX.Element {
  return (
    <>
      <ClsStyles />
      <LinkedInBadgeContainer
        className={classN ? `linkedin-badge ${classN}` : 'linkedin-badge'}
      >
        <LinkedInBadgeBackground className="linkedin-badge--background">
          <LazyImage
            src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Fme.jfif?alt=media&token=6f3e9ef4-df67-462c-bba5-0d2bea0e2076"
            alt="Ulises Antonio Sámano Galván"
            classN="linkedin-badge--image"
          />
        </LinkedInBadgeBackground>
        <a
          className="linkedin-badge--name"
          href="https://mx.linkedin.com/in/ulisessg?trk=profile-badge"
        >
          <strong>
            <LinkedInBadgeName>Ulises Antonio Sámano Galván</LinkedInBadgeName>
          </strong>
        </a>

        <LinkedInBadgeDescription className="linkedin-badge--description">
          Frontend / Backend / Nerd / Student at Platzi Master.
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
