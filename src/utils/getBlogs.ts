import axios, { AxiosResponse } from 'axios';
import { BlogEntryRaw } from '../interfaces_and_types/globalPropsAndProperties';

interface blogResponse {
  error: boolean;
  message: Array<BlogEntryRaw>;
}

export default function getBlogs(): Promise<AxiosResponse<blogResponse>> {
  return axios.get('https://web-projects-api.vercel.app/api/blog/last-entries?limit=10');
}
