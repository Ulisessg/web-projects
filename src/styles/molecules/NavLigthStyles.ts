import styled from 'styled-components';

interface props {
  dir: 'column' | 'row';
}

const NavLigthStyles = styled.nav<props>`
  width: 100%;
  height: 100%;
  & ul {
    height: 100%;
    width: 100%;
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex-direction: ${({ dir }) => (dir === 'column' ? 'column' : 'row')};
    justify-content: space-around;

    & li {
      align-self: center;
      margin-bottom: ${({ dir }) => (dir === 'column' ? '20px' : '0px')};
    }
  }
`;

export default NavLigthStyles;
