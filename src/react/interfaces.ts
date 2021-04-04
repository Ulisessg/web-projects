export interface imgProps {
  src: string;
  alt: string;
  classN: string;
}

export interface SectionWithModalProps {
  sections: Array<{
    id: number;
    name: string;
    path: string;
    description: string;
    elementId?: string;
  }>;

  images: Array<{ title: string; image: string }> | any;
}

export interface SectionModalProps extends imgProps {
  name: string;
  path: string;
  description: string;
  closeModal: () => void;
}
