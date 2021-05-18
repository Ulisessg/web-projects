import axios from 'axios';

export default function getBlogs() {
  return axios.get('https://web-projects-api.vercel.app/api/blog/last-entries?limit=10');
}
