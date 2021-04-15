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
  }>;

  images: Array<{ title: string; image: string }> | any;
}

export interface SectionModalProps extends imgProps {
  name: string;
  path: string;
  description: string;
  closeModal: () => void;
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
