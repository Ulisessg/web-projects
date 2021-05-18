import axios from 'axios';

export default function getGists() {
  return axios.get('https://web-projects-api.vercel.app/api/gist?limit=15');
}
