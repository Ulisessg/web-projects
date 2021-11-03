import React from 'react';
// import SkipLink from '../atoms/SkipLink';
import LinkProps from '../interfaces_and_types/atoms/LinkProps';
import { HeaderContainer, NavStyles } from '../styles/molecules/HeaderStyles';
import Link from '../atoms/Link';
import { useRouter } from 'next/router';

function Header(): JSX.Element {
  const router = useRouter();
  const headerPaths: Array<LinkProps> = [
    {
      text: 'About',
      label: 'Sobre mí',
      path: '/',
    },
    {
      text: 'Blog',
      label: 'Blog sobre tecnología',
      path: '/blog',
    },
    {
      text: 'GitHub',
      label: 'Mi cuenta en GitHub',
      path: 'https://github.com/Ulisessg',
    },
    {
      text: 'Gists',
      label: 'Piezas de código que comparto',
      path: '/gist',
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
                <li key={`${element.path}`}>
                  <Link
                    cn='as'
                    ariaLabel={`Cargando ${element.text}`}
                    background='backgroundLight'
                    bgh='backgroundLight2'
                    ct='textDark'
                    cth='textDark'
                    linkSize='small'
                    href={element.path}
                    text={element.text}
                    noShadow={true}
                    noSpinner={router.pathname === element.path}
                  />
                </li>
              );
            })}
          </ul>
        </NavStyles>
      </HeaderContainer>
    </>
  );
}

export default Header;
