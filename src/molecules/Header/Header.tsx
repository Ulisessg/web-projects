import React, { FunctionComponent } from 'react';
// import SkipLink from '../atoms/SkipLink';
import { LinkData } from '@/props';
import Link from '@/atoms/Link';
import { useRouter } from 'next/router';

import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100vw;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  height: 10vh;
  /* background-color: ${({ theme }) => theme.textLight}; */
  background-color: #8080;
  box-shadow: 0px 3px 6px 0px #e0e0e0;

  & ul {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

const NavStyles = styled.nav`
  width: 100vw;
  .header-list {
    display: flex;
  }
`;

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
