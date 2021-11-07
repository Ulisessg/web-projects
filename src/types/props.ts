import {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  ReactElement,
} from 'react';

/**
 * @param background: Background color
 * @param ct: Color text
 * @param bgh: Background color hover
 * @param cth: Color text hover
 * @param href: Link path
 * @param text: Link name
 * @param className: Link className
 */

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  background: 'backgroundLight' | 'backgroundLight2' | 'backgroundDark';
  ct: 'textLight' | 'textDark' | 'textDark2';
  bgh: 'backgroundLight' | 'backgroundLight2' | 'backgroundDark';
  cth: 'textLight' | 'textDark' | 'textDark2';
  href: string;
  text: string;
  cn: string;
  linkSize: 'small' | 'medium' | 'large' | 'xl';
  ariaLabel: string;
  noSpinner?: boolean;
  noShadow?: boolean;
}

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  heightExternal?: string;
}

export interface imgProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  classN?: string;
}

export interface SectionProps extends Pick<LinkProps, 'linkSize'> {
  id: number | string;
  title: string;
  description: string;
  name: string;
  image: imgProps;
  path?: string;
  loadingLabel: string;
}

export interface H2Props extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
  className?: string;
}

export interface HeartProps {
  url: string;
  name: string | any;
}

export interface RoundedImageProps extends imgProps {
  bottom?: string;
  widthMobile: string;
  widthTablet: string;
  widthLaptop: string;
  widthDesktop: string;
}

export type BlogAuthorCardProps = {
  publishDate: string;
  dateTime: string | undefined;
};

export type BlogPresentationProps = {
  title: string;
  description: string;
};

export type FacebookCommentsProps = { path: string };

export type HeadProps = {
  canonicalUrl: string;
  description: string;
  keywords: string;
  title: string;
  image: string;
  type: 'article' | 'website' | 'profile';
  locale: 'es_MX' | 'en_US';
  imageAlt: string;
  children?: ReactNode;
};

export type HeaderProps = {};

export interface LinkData
  extends Pick<LinkProps, 'text' | 'href' | 'ariaLabel'> {}

export type LayoutProps = { children: ReactElement<any> };

export type MainDesignProps = { sections: Array<SectionProps> };

export type ShareMediaProps = {
  path: string;
  addLikePath: string;
  documentNameForLike: any;
};

export type BlogProps = {
  blogEntries: Array<SectionProps>;
  isPageOrSection: 'page' | 'section';
};

export type GistsProps = {
  gists: Array<SectionProps>;
  isPageOrSection: 'page' | 'section';
};

export type GistsTemaplateProps = { data: any; githubCode: any };
