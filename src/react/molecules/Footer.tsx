import React from 'react';

import '../../styles/molecules/footer.styl';
import Nav from '../atoms/Nav';
import LinkedInBadge from './LinkedInBadge';
import LazyImage from './Img';

interface Path {
  id: number;
  name: string;
  description: string;
  path: string;
}

function Footer(): JSX.Element {
  const footerPaths: Array<Path> = [
    {
      id: 1,
      description: 'Mi perfil de Platzi',
      name: 'Perfil de platzi',
      path: 'https://platzi.com/p/UlisesSG/',
    },
    {
      id: 2,
      description: 'Curriculum',
      name: 'Curriculum',
      path:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FFullstack%20React%20Developer%20-%20Ulises%20Antonio%20Samano%20Galvan.pdf?alt=media&token=a4b86dfa-b4ef-4f63-be7e-50e39d1970b6',
    },
    {
      id: 3,
      description: 'Perfil de Hacker Rank',
      name: 'HackerRank',
      path: 'https://www.hackerrank.com/ukisessg',
    },
  ];

  return (
    <footer className="footer" id="contacto">
      <div className="footer__container">
        <LazyImage
          alt="Ulises Antonio Samano Galvan"
          src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flogo-192x192.png?alt=media&token=1a4aa1ca-1846-41b3-9005-9c4dc5c4d888"
          classN="footer--logo"
        />
        <h3 className="footer__quote">
          Si puedes imaginarlo puedes programarlo 💚
        </h3>

        {/* Social media */}

        <h3 className="footer__quote follow-me">
          Sigueme en mis redes sociales
        </h3>

        <div className="footer__social">
          <a href="https://www.facebook.com/Ulises5G">
            <LazyImage
              src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Ffacebook.png?alt=media&token=69833032-271c-4f43-a2d4-c621350b2e54"
              alt="Logo de Facebook"
              classN="footer__social--logo"
            />
          </a>
          <a href="https://twitter.com/Ulises5G">
            <LazyImage
              src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Ftwitter.png?alt=media&token=539518e5-e18b-4cc4-a41e-498b68caf60b"
              alt="Logo de twitter"
              classN="footer__social--logo"
            />
          </a>
          <a href="https://github.com/Ulisessg">
            <LazyImage
              src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FGitHub-logo.png?alt=media&token=f7d795cd-d7db-4b35-a2f4-0dca3070dd1b"
              alt="Logo de github"
              classN="footer__social--logo"
            />
          </a>
        </div>

        <LinkedInBadge />

        {/* Other links */}
        <div className="footer__other-links">
          <Nav paths={footerPaths} backgroundIsLigth={false} col blank />
        </div>

        <h3 className="footer__quote coffe-quote">
          Hecho con amor, café y amor al café 💚
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
