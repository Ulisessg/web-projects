export default function getGists() {
  // @ts-check
  const request = fetch('https://web-projects-api.vercel.app/api/gist?limit=15', {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((res) => res.json());

  return request;
}
