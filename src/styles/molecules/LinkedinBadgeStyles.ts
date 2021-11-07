import styled from 'styled-components';
import { backgroundLight } from '../variables';

export const LinkedInBadgeContainer = styled.section`
  width: 250px;
  height: 500px;
  margin-top: 50px;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  background-color: aliceblue;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding-bottom: 15px;

  border-radius: 20px;
  border: 1px solid black;
`;

export const LinkedInBadgeBackground = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
  justify-content: center;
  figure {
    & img {
      border-radius: 100%;
      width: 100px;
      margin: 0 auto;
      border: 4px solid white;
    }
  }
`;

export const LinkedInBadgeDescription = styled.p`
  padding: 10px;
`;

export const LinkedInBadgeGoProfileContainer = styled.div`
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
