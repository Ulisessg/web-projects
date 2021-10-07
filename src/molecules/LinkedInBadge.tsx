import React from 'react';
import LazyImage from './Img';
import {
  LinkedInBadgeContainer,
  LinkedInBadgeBackground,
  LinkedInBadgeName,
  LinkedInBadgeDescription,
  LinkedInBadgeGoProfileContiner,
} from '../styles/molecules/LinkedinBadgeStyles';
import Link from '../atoms/Link';

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
            src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FUlises%20Antonio%20Samano%20Galvan.jpg?alt=media&token=67d05c1b-f0c5-49df-9138-59a68072e9f4"
            alt="Ulises Antonio Samano Galvan"
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
          <Link
            ariaLabel=""
            background="backgroundLight"
            bgh="backgroundLight2"
            ct="textDark"
            cn=""
            cth="textDark"
            href=""
            linkSize="medium"
            text="Ver perfil de LinkedIn"
          />
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
