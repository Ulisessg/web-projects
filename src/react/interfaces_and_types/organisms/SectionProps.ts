interface SectionProps {
  id: any;
  name: string;
  images?: Array<{
    src: string;
    alt: string;
  }>;
  cover: {
    image: string;
    title: string;
  };
  path: string;
  description: string;
}

export default SectionProps;
