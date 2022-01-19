import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const BlogImageStyles = styled.img`
  width: 80%;
  margin: 50px auto;
  box-shadow: 1px 3px 12px -6px #bcbdb0;
  border-radius: 15px;
`;

const BlogImage: FunctionComponent = () => {
  return <BlogImageStyles />;
};
export default BlogImage;
