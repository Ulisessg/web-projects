import { ReactNode } from 'react';

interface HeadProps {
  canonicalUrl: string;
  description: string;
  keywords: string;
  title: string;
  image: string;
  type: 'article' | 'website' | 'profile';
  locale: 'es_MX' | 'en_US';
  imageAlt: string;
  children?: ReactNode;
}

export default HeadProps;
