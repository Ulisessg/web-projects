/* eslint-disable react/require-default-props */
import React from 'react';
import LazyImage from './Img';

import '../../styles/molecules/LinkedinBadge.styl';
// Background image https://static-exp1.licdn.com/sc/h/856xpihrituhwdjrua9z5u5na

// LinkedIn logo https://static-exp1.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_93x21_v2.png

function LinkedInBadge({ classN }: { classN?: string }): JSX.Element {
  return (
    <>
      <section
        className={classN ? `linkedin-badge ${classN}` : 'linkedin-badge'}
      >
        <div className="linkedin-badge--background">
          <LazyImage
            src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Fme.jfif?alt=media&token=6f3e9ef4-df67-462c-bba5-0d2bea0e2076"
            alt="Ulises Antonio Sámano Galván"
            classN="linkedin-badge--image"
          />
        </div>
        <a
          className="linkedin-badge--name"
          href="https://mx.linkedin.com/in/ulisessg?trk=profile-badge"
        >
          <h3>Ulises Antonio Sámano Galván</h3>
        </a>

        <p className="linkedin-badge--description">
          Frontend / Backend / Nerd / Student at Platzi Master.
        </p>
        <div className="linkedin-badge--go-profile">
          <a href="https://mx.linkedin.com/in/ulisessg?trk=profile-badge">
            Ver perfil
          </a>
        </div>
        <LazyImage
          classN=""
          alt="Linkedin Logo"
          src="https://static-exp1.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_93x21_v2.png"
        />
      </section>
    </>
  );
}

export default LinkedInBadge;
