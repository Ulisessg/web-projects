import React, { FunctionComponent } from 'react';

type Props = {
  title: string;
  description: string;
};

const BlogPresentation: FunctionComponent<Props> = ({ title, description }: Props) => (
  <>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </>
);

export default BlogPresentation;
