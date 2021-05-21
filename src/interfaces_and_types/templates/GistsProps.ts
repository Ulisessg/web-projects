import SectionProps from '../organisms/SectionProps';

interface GistsProps {
  gists: Array<SectionProps>;
  isPageOrSection: 'page' | 'section';
}

export default GistsProps;
