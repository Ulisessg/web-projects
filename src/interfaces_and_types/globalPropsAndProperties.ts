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
  lastUpdate?: string;
}

export interface LinkProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  label: string;
  path: string;
  text: string;
}

export interface GistResponse {
  error: boolean;
  message: Array<{
    subjects: Array<string>;
    image: string;
    description: string;
    title: string;
    githubLink: string;
    id: number;
    name: string;
    likes: number;
  }>;
}

export interface gistTransformed {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  name: string;
  description: string;
}
