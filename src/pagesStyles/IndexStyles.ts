import styled from 'styled-components';
import { slice } from '../styles/keyframes';

export const IndexNav = styled.nav`
  margin: 40px 0;
  animation: ${slice} 0.8s;
  .index_nav {
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    justify-content: space-around;
    @media screen and (max-width: 690px) {
      flex-direction: column;
    }
  }
`;
