import React from 'react';
import NavProps from '../interfaces_and_types/molecules/NavProps';
import NavLightStyles from '../styles/molecules/NavLigthStyles';
import LinkLightBlank from '../atoms/LinkLigthBlank';

function NavLightBlank({ dir, paths }: NavProps): JSX.Element {
  return (
    <>
      <NavLightStyles dir={dir}>
        <ul>
          {paths.map((path) => (
            <li key={path.path}>
              <LinkLightBlank
                label={path.label}
                path={path.path}
                text={path.text}
              />
            </li>
          ))}
        </ul>
      </NavLightStyles>
    </>
  );
}

export default NavLightBlank;
