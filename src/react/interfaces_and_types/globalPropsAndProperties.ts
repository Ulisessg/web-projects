import React from 'react';

export interface imgProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  classN?: string;
}

export interface BlogEntry {
  metaSubjects: Array<any | string>;
  name: string;
  description: string;
  image: string;
  id: number;
  path: string;
  title: string;
}
