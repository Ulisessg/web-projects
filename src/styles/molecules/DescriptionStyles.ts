import styled from 'styled-components';
import { boxShadowColor } from '../variables';

export const Container = styled.div`
  display: grid;
  display: -moz-grid;
  display: -ms-grid;
  justify-items: center;
  margin-top: 5vh;
  text-align: center;
  & img {
    width: 150px;
    border-radius: 50%;
    box-shadow: 0px 3px 12px 0px ${boxShadowColor};

    @media screen and (min-width: 425px) {
      width: 160px;
    }
    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }
`;

export const DescriptionStyles = styled.h1`
  display: grid;
  display: -moz-grid;
  display: -ms-grid;
  margin-top: 20px;
  font-size: 2rem;
`;
// export default Container;
