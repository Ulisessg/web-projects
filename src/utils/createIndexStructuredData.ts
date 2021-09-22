export default function createIndexStructuredData(): string {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    image: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FUlises%20Antonio%20Samano%20Galvan.jpg?alt=media&token=67d05c1b-f0c5-49df-9138-59a68072e9f4',
    jobTitle: 'Web UI Developer - Globant',
    name: 'Ulises Antonio Sámano Galván',
    url: 'https://ulisessg.com',
  };
  const structuredDataJson = JSON.stringify(structuredData);
  return structuredDataJson;
}
