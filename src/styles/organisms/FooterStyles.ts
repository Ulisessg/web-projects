import styled, { createGlobalStyle } from 'styled-components';
import { backgroundDark, boxShadowColor } from '../variables';

export const FooterElement = styled.footer`
  height: auto;
  background-color: ${backgroundDark};
  width: 100vw;
  box-shadow: 0px -3px 8px 0px ${boxShadowColor};
`;

export const FooterContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  justify-items: center;
  text-align: center;

  // Areas

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'logo quoteMine'
      'socialMediaTitle socialMediaTitle'
      'socialMediaImages socialMediaImages'
      'badge extraLinks'
      'loveQuote loveQuote';

    .logo-footer {
      grid-area: logo;
    }

    .footer__quote {
      grid-area: quoteMine;
    }
    .footer__quote-follow-me {
      grid-area: socialMediaTitle;
    }

    .footer__social {
      grid-area: socialMediaImages;
    }
    .footer__other-links {
      grid-area: extraLinks;
    }
    .footer-linkedin-badge {
      grid-area: badge;
    }
    .footer__quote-follow-me {
      grid-area: socialMediaTitle;
    }
    .coffe-quote {
      grid-area: loveQuote;
    }
  }
`;

export const Quote = styled.h3`
  color: white;
  text-align: center;
  margin: 40px 0 10px 0;
  padding: 17px;
  align-self: center;
`;

export const FollowMe = styled.h3`
  color: white;
  text-align: center;
  margin: 40px 0 10px 0;
  padding: 17px;
`;

export const SocialMediaContainer = styled.div`
  width: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: space-around;

  .social-media-link {
    width: 40px;
    height: 40px;
    &:hover,
    &:focus {
      border: 1px solid white;
      padding: 0;
    }
  }
`;

export const OtherLinks = styled.div`
  margin-top: 30px;
`;

export const CoffeQuote = styled.h3`
  color: white;
  text-align: center;
  margin: 40px 0 10px 0;
  padding: 17px;
`;

export const CssStyles = createGlobalStyle`
.logo-footer {
    width: 180px;
    margin: 30px auto;
  }
  .social-media--logo {
    width: 40px;
    height: 40px;

  }
  .foooter-linkedin-badge {
      width: 240px;
  }


`;
