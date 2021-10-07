import styled from 'styled-components';
import { LinkProps } from '../../types/props';

const width: string = '214px';
const height: string = '70px';

const LinkStyles = styled.a<Pick<LinkProps, 'background' | 'ct' | 'bgh' | 'cth' | 'cn' | 'size'>>`
  display: grid;
  width: ${({ size, theme }) => theme.buttonSizes[size]};
  height: ${height};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 20px auto;
  padding: 10px;
  background-color: ${({ theme, background }) => theme[background]};
  text-align: center;
  color: ${({ theme, ct }) => theme[ct]};
  /* background transition */
  transition: background-color ease-in 0.2s;
  -webkit-transition: background-color ease-in 0.2s;
  -o-transition: background-color ease-in 0.2s;
  /* color transition */
  transition: color ease-out 0.1s;
  -webkit-transition: color ease-out 0.1s;
  -o-transition: color ease-out 0.1s;

  &:hover, &:focus {
    background-color: ${({ theme, bgh }) => theme[bgh]};
    color: ${({ theme, cth }) => theme[cth]};
  }
`;

export default LinkStyles;
