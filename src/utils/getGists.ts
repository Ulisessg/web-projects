export default function getGists() {
  // @ts-check
  const request = fetch('https://web-projects-api.vercel.app/api/gist', {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((res) => res.json());

  return request;
}
