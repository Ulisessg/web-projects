import { createGlobalStyle } from 'styled-components';

const BlogPostsStyles = createGlobalStyle`
.blog-wrapper {
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  align-content: space-around;
  justify-content: center;
  margin: 0 auto;
}
.link {
  color: #020400;
  height: auto;
  width: auto;
}
.link:focus,
.link:hover {
  background-color: #007db3;
  color: #fafafa;
}
#blog {
  margin-top: 10vh;
  width: 90%;
  width: 90vw;
  text-align: left;
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
#blog * {
  margin-top: 15px;
}

#blog a {
  color: #2e06ff;
}

#blog a:focus,
#blog a:hover {
  color: #000000;
}
h1 {
  margin-bottom: 10vh;
  font-size: 1.8rem;
}

h2 {
  text-align: center
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
  width: 100%;
  line-height: 1.6;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1.5em;
  height: 20vh;
}

pre,
code,
kbd,
samp {
  font-size: 0.98em;
}

pre {
  height: auto;
  width: 100%;
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: break-word;
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

h1 {
  color: #020400;
  text-align: center;
  margin-top: 20vh;
}
.link {
  text-decoration: underline;
  text-decoration-color: #020400;
}
main {
  margin-bottom: 10vh;
}

#blog li {
  text-align: left;
}

#blog li > p {
  text-align: left;
  display: inline;
}

#blog li {
  list-style: inside;
}

footer {
  margin-top: 50px
}
`;

export default BlogPostsStyles;
