export default function createIndexStructuredData(): string {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    email: 'mailto:ukisessg@gmail.com',
    image: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FUlises%20Antonio%20Samano%20Galvan.jpg?alt=media&amp;token=67d05c1b-f0c5-49df-9138-59a68072e9f4',
    jobTitle: 'Web UI Developer',
    name: 'Ulises Antonio Samano Galvan',
    url: 'https://ulisessg.com',
  };
  const structuredDataJson = JSON.stringify(structuredData);
  return structuredDataJson;
}
