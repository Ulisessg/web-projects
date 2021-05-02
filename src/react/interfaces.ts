export interface imgProps {
  src: string;
  alt: string;
  classN?: string;
}

export interface SectionWithModalProps {
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

export interface SectionModalProps {
  name: string;
  path: string;
  description: string;
  closeModal: () => void;
  images?: Array<imgProps>;
}

export interface BlogEntry {
  metaSubjects: Array<any | string>;
  name: string;
  description: string;
  image: string;
  id: number;
  path: string;
  title: string;
}

export interface transformBlogInfoParams {
  blogs: Array<any>;
}
