import { BlogEntryRaw } from '../interfaces_and_types/globalPropsAndProperties';

interface createStructuredDataReturn {
  date: string;
  structuredData: string;
}

export default function createBlogsStructuredData(info: BlogEntryRaw): createStructuredDataReturn {
  const dateSplitted: Array<string> = info.publicationDate?.split('-');
  const blogDate: Date = new Date(
    parseInt(dateSplitted[0], 10),
    parseInt(dateSplitted[1], 10),
    parseInt(dateSplitted[2], 10),
  );
  const date = blogDate.toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dateFormated = blogDate.toJSON().slice(0, 10);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${info.title} | UlisesSG`,
    datePublished: dateFormated,
    image: info.seoCardUrl,
    articleBody: info.content.replace(/<[^>]*>?/gm, ''),
    publisher: {
      '@type': 'Organization',
      logo: {
        '@type': 'ImageObject',
        url: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flogo-192x192.png?alt=media&token=1a4aa1ca-1846-41b3-9005-9c4dc5c4d888',
      },
      name: 'Ulises Antonio Samano Galvan',
    },
    about: { '@type': 'CreativeWork' },
    author: {
      '@type': 'Person',
      name: 'Ulises Antonio Samano Galvan',
      jobTitle: 'Web UI Developer',
      url: 'https://ulisessg.com',
    },
  };
  const structuredDataJson = JSON.stringify(structuredData);
  // console.log(structuredDataJson);

  return {
    date,
    structuredData: structuredDataJson,
  };
}
