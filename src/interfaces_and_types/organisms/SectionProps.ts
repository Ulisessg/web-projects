import { imgProps } from '../globalPropsAndProperties';

type SectionProps = {
  id: number;
  name: string;
  path: string;
  description: string;
  elementId?: string;
  cover: imgProps;
  key?: any;
  images?: Array<imgProps>;
};

export default SectionProps;
