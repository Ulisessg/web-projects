interface SectionProps {
  id: any;
  name: string;
  images?: Array<{
    src: string;
    alt: string;
  }>;
  cover: {
    src: string;
    alt: string;
  };
  path: string;
  description: string;
}

export default SectionProps;
