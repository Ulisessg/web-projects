import React, { FunctionComponent } from 'react';
import { SkipLinkContainer, LinkContainer } from './SkipLinkStyles';
import Link from '@/atoms/Link';

const SkipLink: FunctionComponent = () => (
  <>
    <SkipLinkContainer>
      <LinkContainer>
        <Link
          ariaLabel='Contenido principal'
          className='skip-link--link'
          href='#main'
          background='backgroundLight'
          bgh='backgroundLight2'
          ct='textDark2'
          cth='textDark2'
          text='Contenido principal'
          linkSize='medium'
          cn=''
        />
      </LinkContainer>
      <LinkContainer>
        <Link
          ariaLabel='Otras páginas'
          className='skip-link--link'
          background='backgroundLight'
          bgh='backgroundLight2'
          ct='textDark2'
          cth='textDark2'
          text='Contenido principal'
          linkSize='medium'
          cn=''
          href='#secciones'
        >
          Otras páginas
        </Link>
      </LinkContainer>
    </SkipLinkContainer>
  </>
);

export default SkipLink;
