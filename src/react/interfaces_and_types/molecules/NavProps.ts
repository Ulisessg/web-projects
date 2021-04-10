import LinkProps from '../atoms/LinkProps';

interface NavProps {
  paths: Array<LinkProps>;
  dir: 'column' | 'row';
}

export default NavProps;
