import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100vw;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  height: 10vh;
  background-color: ${({ theme }) => theme.backgroundLight};
  box-shadow: 0px 3px 6px 0px #e0e0e0;

  & ul {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const NavStyles = styled.nav`
  width: 100vw;
  .header-list {
    display: flex;
  }
`;


