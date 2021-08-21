import axios, { AxiosResponse } from 'axios';

import { GistResponse } from '../interfaces_and_types/globalPropsAndProperties';

export default function getGists(): Promise<AxiosResponse<GistResponse>> {
  return axios.get('https://web-projects-api.vercel.app/api/gist?limit=15');
}
