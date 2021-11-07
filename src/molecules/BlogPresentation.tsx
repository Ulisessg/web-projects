import React, { FunctionComponent } from 'react';

import { BlogPresentationProps } from '../types/props';

const BlogPresentation: FunctionComponent<BlogPresentationProps> = (
  props: BlogPresentationProps
) => (
  <>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </>
);

export default BlogPresentation;
