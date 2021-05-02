export interface imgProps {
  src: string;
  alt: string;
  classN?: string;
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
