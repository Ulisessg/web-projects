import React from 'react';
import NavProps from '../interfaces_and_types/molecules/NavProps';
import LinkLigthNoBlankThin from '../atoms/LinkLigthNoBlankThin';
import NavLigthStyles from '../../styles/molecules/NavLigthStyles';

function NavDarkBlank({ paths, dir }: NavProps) {
  return (
    <>
      <NavLigthStyles dir={dir}>
        <ul>
          {paths.map((path) => (
            <li key={path.label}>
              <p>
                <LinkLigthNoBlankThin
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
