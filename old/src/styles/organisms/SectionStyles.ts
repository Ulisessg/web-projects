import styled from 'styled-components';
import { boxShadowColor } from '../variables';

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  border-radius: 20px;
  box-shadow: 0px 2.3px 4px 0px ${boxShadowColor};
`;

export const ImageContainer = styled.figure`
  padding: 15px;
  width: 100%;
  height: auto;
  & img {
    width: 100%;
    height: auto;
    box-shadow: 1px 3px 12px -6px ${boxShadowColor};
    object-fit: cover;
    -o-object-fit: cover;
    border-radius: 20px;
  }
`;

export const Title = styled.caption`
  text-align: center;
  text-align: -webkit-center;
  margin: 15px 0px;
`;

export const Description = styled.p`
  width: 90%;
  text-align: -webkit-left;
  text-align: left;
`;
