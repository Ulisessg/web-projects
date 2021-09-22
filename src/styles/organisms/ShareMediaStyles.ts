import styled from 'styled-components';

const ShareMediaStyles = styled.section`
  margin-top: 15px;
  display: grid;
  flex-direction: column !important;
  width: auto;
  position: static;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  overflow: visible !important;
  @media screen and (min-width: 1024px) {
    display: flex;
    position: fixed;
    align-items: center;
    width: auto;
    left: 89%;
    & > div {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
  }
  & > * > img {
    width: 100% !important;
  }
  }

`;

export default ShareMediaStyles;
