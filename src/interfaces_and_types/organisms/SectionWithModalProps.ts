import { imgProps } from '../globalPropsAndProperties';

interface SectionWithModalProps {
  sections: Array<{
    id: number;
    name: string;
    path: string;
    description: string;
    elementId?: string;
    cover: imgProps;
    key?: any;
    images?: Array<imgProps>;
  }>;
}

export default SectionWithModalProps;
