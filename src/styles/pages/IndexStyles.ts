import styled from 'styled-components';

export const IndexNav = styled.nav`
  margin: 40px 0;
  .index_nav {
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    justify-content: space-around;
    @media screen and (max-width: 690px){
      flex-direction: column;
    }
  }
`;