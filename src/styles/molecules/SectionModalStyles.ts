import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { boxShadowColor } from '../variables';

const blured = keyframes`
  100% {
    filter: blur(8px)
  }
`;

const unblur = keyframes`
  100% {
    filter: blur(0px)
  }
`;

const appears = keyframes`
  100% {
    filter: blur(0px)
  }
`;

const disapear = keyframes`
  100% {
    filter: blur(8px)
  }
`;

export const SectionModalContainer = styled.section`
  position: fixed;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -ms-flex-direction: column;
  align-content: space-between;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #fafafa;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  width: 80vw;
  height: 98%;
  padding: 20px;
  border-radius: 20px;
  animation: ${appears} 0.2s;
`;

export const SectionModalImageContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  width: 100%;
`;

export const SectionModalTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ExternalStyles = createGlobalStyle`
  .blur-body {
    animation: ${blured} 0.2s;
    -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
    -moz-animation-fill-mode: forwards; /* FF 5+ */
    -o-animation-fill-mode: forwards; /* Not implemented yet */
    -ms-animation-fill-mode: forwards; /* IE 10+ */
    animation-fill-mode: forwards; /* When the spec is finished */
  }
  .section-modal--img {
    object-fit: contain;
    width: 150px;
    box-shadow: 1px 3px 12px -6px ${boxShadowColor};
    border-radius: 20px;
    @media screen and (min-height: 350px){
      width: 218px;
    };
  }
  .delete-blur-body {
    animation: ${unblur} 0.2s;
    -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
    -moz-animation-fill-mode: forwards; /* FF 5+ */
    -o-animation-fill-mode: forwards; /* Not implemented yet */
    -ms-animation-fill-mode: forwards; /* IE 10+ */
    animation-fill-mode: forwards;
  }
  .disapear-modal{
    animation: ${disapear} 0.2s
  }

  .modal-container{
    position: relative
    z-index 999;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
  }

  .section-modal-link {
    margin: 5px 0;
  }
`;
