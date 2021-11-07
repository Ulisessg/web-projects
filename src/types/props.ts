import { AnchorHTMLAttributes, HTMLAttributes } from 'react';

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
