import styled from 'styled-components';

const ShareMediaStyles = styled.section`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  overflow: visible !important;
  @media screen and (min-width: 400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;

  }
`;

export default ShareMediaStyles;
