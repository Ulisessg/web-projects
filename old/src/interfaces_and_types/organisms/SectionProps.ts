import { imgProps } from '../globalPropsAndProperties';

interface sectionProps {
  id: number | string;
  title: string;
  description: string;
  name: string;
  image: imgProps;
  path?: string;
  loadingLabel: string;
}

export default sectionProps;
