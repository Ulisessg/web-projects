export default function getBlogs(): Promise<any> {
  const endpoint = 'https://web-projects-api.vercel.app/api/blog/last-entries?limit=10';

  return window
    .fetch(endpoint, {
      method: 'GET',
      redirect: 'follow',
    })
    .then((res) => res.text());
}
