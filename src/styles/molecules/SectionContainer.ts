import styled from 'styled-components';

const SectionContainer = styled.section`
  width: 90vw;
  margin-top: 50px;
  @media screen and (min-width: 700px) {
    display: -ms-grid;
    display: -moz-grid;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    -ms-grid-column: 1fr 1fr;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    -ms-grid-columns: 1fr 1fr 1fr;
  }
`;

export default SectionContainer;
