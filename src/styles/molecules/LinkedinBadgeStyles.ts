import styled, { createGlobalStyle } from 'styled-components';
import { backgroundLight } from '../variables';

export const LinkedInBadgeContainer = styled.section`
  width: 100%;
  height: 400px;
  margin-top: 50px;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  background-color: aliceblue;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const LinkedInBadgeBackground = styled.div`
  background-image: url(https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flinkedin%20cover.jpeg?alt=media&token=7af29779-027c-4d39-b97e-819707fac55c);
  background-position: center;
  margin: 0 auto;
  width: 100%;
  display: flex;
  padding: 15px;
  & > img {
    border-radius: 100%;
    width: 100px;
    margin: 0 auto;
    border: 4px solid white;
  }
`;

export const LinkedInBadgeName = styled.h3`
  color: black;
  &:hover,
  &:focus {
    color: ${backgroundLight};
  }
  font-size: 1.3rem;
  padding: 0 10px;
`;

export const LinkedInBadgeDescription = styled.p`
  padding: 10px;
`;

export const LinkedInBadgeGoProfileContiner = styled.div`
  border: 1px solid ${backgroundLight};
  padding: 3px;
`;

export const LinkedInBadgeGoProfileLink = styled.a`
  padding: 7px;
  font-size: 1.5rem;
  color: ${backgroundLight};
  &:hover,
  &:focus {
    color: black;
  }
`;
