import styled from 'styled-components';

export const ImageSliderStyles = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -ms-flex-direction: column;
  & img {
    width: 230px;
    margin: 0 auto;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  margin-top: 20px;
  .image-slider--button {
    margin-left: 5px;
  }
`;
