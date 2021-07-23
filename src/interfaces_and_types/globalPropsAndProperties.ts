import React from 'react';

export interface imgProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  classN?: string;
}

export interface BlogEntry {
  metaSubjects: Array<string>;
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  id: number;
  path: string;
  title: string;
  language?: 'en' | 'es';
}

export interface BlogEntryRaw {
  metaSubjects: Array<string>;
  name: string;
  title: string;
  metaDescription: string;
  seoCardUrl: string;
  content: string;
  visits: number;
  id: number;
  language: 'es' | 'en';
  likes: number;
  publicationDate?: string;
}

export interface LinkProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  label: string;
  path: string;
  text: string;
}
