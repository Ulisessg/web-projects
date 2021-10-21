import styled from 'styled-components';

const BlogPostsStyles = styled.main`
  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
  }

  .blog-wrapper {
    display: grid;
    display: -ms-grid;
    display: -moz-grid;
    align-content: space-around;
    justify-content: center;
    margin: 0 auto;
  }

  #blog {
    margin-top: 10vh;
    width: 90%;
    width: 90vw;
    text-align: left;
  }
  #blog > * {
    margin-top: 37px;
  }

  @media screen and (min-width: 900px) {
    #blog {
      width: 80%;
      width: 80vw;
    }
  }
  #blog li {
    margin: 20px 0 20px 30px;
  }

  #blog a {
    /* color: ${({ theme }) => theme.backgroundLight2}; */
    color: inherit;
  }

  #blog a:focus,
  #blog a:hover {
    color: ${({ theme }) => theme.textDark2};
  }
  h1 {
    margin-bottom: 10vh;
    font-size: 1.8rem;
    color: #020400;
    text-align: center;
    margin-top: 20vh;
  }

  .blog-presentation-container {
    display: grid;
  }

  blockquote {
    font-size: 1.2rem;
    font-style: italic;
    width: 100%;
    margin: 50px auto;
    color: #252323;
    padding: 20px;
    border-left: 8px solid #176085;
    line-height: 1.4;
    position: relative;
    background: #ededed;
    border-left: 10px solid #176085;
  }
  @media screen and (min-width: 900px) {
    blockquote {
      width: 95%;
    }
  }
  pre {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid #007db3;
    color: #666;
    display: inline-block;
    line-height: 1.6;
    margin-bottom: 1.6em;
    width: 100%;
    overflow: scroll;
    padding: 1em 1.5em;
    height: 40vh;
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  @media all and (hover: none) {
    pre {
      height: auto;
    }
  }

  pre,
  code,
  kbd,
  samp {
    font-size: 0.98em;
  }

  b,
  strong {
    font-weight: bold;
  }

  dfn {
    font-style: italic;
  }

  ins {
    background: #ff9;
    color: #000;
    text-decoration: none;
  }

  mark {
    background: #ff0;
    color: #000;
    font-style: italic;
    font-weight: bold;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  dd {
    margin: 0 0 0 2em;
  }

  #blog img {
    width: 100%;
    border: 0;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td {
    vertical-align: top;
  }

  @media screen and (max-width: 900px) {
    pre {
      padding: 20px auto;
    }
  }

  .link {
    text-decoration: underline;
    text-decoration-color: #020400;
  }
  main {
    margin-bottom: 10vh;
  }

  #blog li > p {
    text-align: left;
    display: inline;
  }

  ul > li {
    list-style: inside;
  }

  ol > li {
    list-style: decimal;
  }

  footer {
    margin-top: 50px;
  }
`;

export default BlogPostsStyles;
