import { imgProps } from '../globalPropsAndProperties';

interface SectionModalProps {
  name: string;
  path: string;
  description: string;
  closeModal: () => void;
  images?: Array<imgProps>;
}

export default SectionModalProps;
