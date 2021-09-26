import styled from 'styled-components';

const BlogAuthorCardStyles = styled.section`
  width: 90%;
  display: grid;
  margin: 0 auto;
  justify-content: space-around;
  & > img {
    justify-self: center;
  }
  .blog-author-card-images-image {
    width: 50px;
    cursor: pointer;
  }
  .blog-author-card-images-link {
    width: 50px;
  }
  .blog-author-card {
    display: flex;
    justify-content: space-between;
  }
`;

export default BlogAuthorCardStyles;
