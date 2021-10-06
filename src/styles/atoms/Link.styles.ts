import styled from 'styled-components';
import { LinkProps } from '../../types/props';

const width: string = '150px';
const height: string = '50px';


const LinkStyles = styled.a<Pick<LinkProps, 'background' | 'ct' | 'bgh' | 'cth' | 'cn'>>`
  display: grid;
  width: ${width};
  height: ${height};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: ${({ theme, background }) => theme[background]};
  color: ${({ theme, ct }) => theme[ct]};
  &:hover, &:focus {
    background-color: ${({ theme, bgh }) => theme[bgh]};
    color: ${({ theme, cth }) => theme[cth]};
  }
`;

export default LinkStyles;
