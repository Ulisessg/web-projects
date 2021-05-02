import { imgProps } from '../globalPropsAndProperties';

interface SectionWithModalProps {
  sections: Array<{
    id: number;
    name: string;
    path: string;
    description: string;
    elementId?: string;
    cover: imgProps;
  }>;

  images: Array<{ src: string; alt: string }>;
}

export default SectionWithModalProps;
