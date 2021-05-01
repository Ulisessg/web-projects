import React, { useEffect, useState } from 'react';
import NavLigthNoBlank from '../molecules/NavLigthNoBlank';
import LinkProps from '../interfaces_and_types/atoms/LinkProps';

const mediaQuery = window.matchMedia('(min-width: 650px)');

function DynamicNav({ paths }: { paths: Array<LinkProps> }): JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(mediaQuery.matches);

  useEffect(() => {
    mediaQuery.addEventListener('change', () => {
      if (mediaQuery.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, [mediaQuery]);

  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <NavLigthNoBlank dir={isMobile ? 'row' : 'column'} paths={paths} />
      </div>
    </>
  );
}

export default DynamicNav;
