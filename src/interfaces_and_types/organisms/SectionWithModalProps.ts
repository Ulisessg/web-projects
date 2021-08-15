import { imgProps } from '../globalPropsAndProperties';

interface SectionWithModalProps {
  sections: Array<{
    id: number;
    name: string;
    path: string;
    description: string;
    elementId?: string;
    cover: imgProps;
    key?: string | number;
    images?: Array<imgProps>;
  }>;
}

export default SectionWithModalProps;
