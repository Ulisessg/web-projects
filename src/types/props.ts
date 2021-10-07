import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';


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
  size: 'small' | 'medium' | 'large' | 'xl';
}
