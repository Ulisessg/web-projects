export default function getBlogs(): Promise<any> {
  const endpoint: string =
    'https://web-projects-api.vercel.app/api/blog/last-entries';

  return window
    .fetch(endpoint, {
      method: 'GET',
      redirect: 'follow',
    })
    .then((res) => res.text());
}
