import React, { FunctionComponent } from 'react';
// import SkipLink from '../atoms/SkipLink';
import { LinkData } from '../types/props';
import { HeaderContainer, NavStyles } from '../styles/molecules/HeaderStyles';
import Link from '../atoms/Link';
import { useRouter } from 'next/router';

const Header: FunctionComponent = () => {
  const router = useRouter();
  const headerPaths: Array<LinkData> = [
    {
      text: 'About',
      ariaLabel: 'Sobre mí',
      href: '/',
    },
    {
      text: 'Blog',
      ariaLabel: 'Blog sobre tecnología',
      href: '/blog',
    },
    {
      text: 'GitHub',
      ariaLabel: 'Mi cuenta en GitHub',
      href: 'https://github.com/Ulisessg',
    },
    {
      text: 'Gists',
      ariaLabel: 'Piezas de código que comparto',
      href: '/gist',
    },
  ];

  return (
    <>
      {/* <SkipLink /> */}
      <HeaderContainer>
        <NavStyles role='navigation' aria-label='Páginas de interés'>
          <ul className='header-list'>
            {headerPaths.map((element) => {
              return (
                <li key={`${element.href}`}>
                  <Link
                    cn='as'
                    ariaLabel={`Cargando ${element.text}`}
                    background='backgroundLight'
                    bgh='backgroundLight2'
                    ct='textDark'
                    cth='textDark'
                    linkSize='small'
                    href={element.href}
                    text={element.text}
                    noShadow={true}
                    noSpinner={router.pathname === element.href}
                  />
                </li>
              );
            })}
          </ul>
        </NavStyles>
      </HeaderContainer>
    </>
  );
};

export default Header;
