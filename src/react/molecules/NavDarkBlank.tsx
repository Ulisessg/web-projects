import React from 'react';
import NavProps from '../interfaces_and_types/molecules/NavProps';
import LinkDarkBlank from '../atoms/LinkDarkBlank';
import NavLigthStyles from '../../styles/molecules/NavLigthStyles';

function NavDarkBlank({ paths, dir }: NavProps) {
  return (
    <>
      <NavLigthStyles dir={dir}>
        <ul>
          {paths.map((path) => (
            <li key={path.label}>
              <p>
                <LinkDarkBlank
                  label={path.label}
                  path={path.path}
                  text={path.text}
                />
              </p>
            </li>
          ))}
        </ul>
      </NavLigthStyles>
    </>
  );
}

export default NavDarkBlank;
