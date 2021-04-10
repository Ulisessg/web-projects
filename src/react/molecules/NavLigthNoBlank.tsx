import React from 'react';
import NavLigthStyles from '../../styles/molecules/NavLigthStyles';
import LinkLigthNoBlank from '../atoms/LinkLigthNoBlank';
import NavProps from '../interfaces_and_types/molecules/NavProps';

function NavLigthRow({ paths, dir }: NavProps) {
  return (
    <>
      <NavLigthStyles dir={dir}>
        <ul>
          {paths.map((path) => (
            <li key={path.label}>
              <p>
                <LinkLigthNoBlank
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

export default NavLigthRow;
