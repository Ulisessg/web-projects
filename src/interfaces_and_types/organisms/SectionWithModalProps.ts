import { imgProps } from '../globalPropsAndProperties';

interface SectionWithModalProps {
  sections: {
    sections: {
      id: number;
      name: string;
      path: string;
      description: string;
      elementId?: string;
      cover: imgProps;
    };

    key?: any;
    images?: Array<{ src: string; alt: string }>;
  };
}

export default SectionWithModalProps;
