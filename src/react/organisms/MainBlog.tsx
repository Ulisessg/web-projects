import React, { useEffect, useState } from 'react';

import SectionWithImg from '../atoms/SectionWithImg';

interface BlogEntry {
  metaSubjects: Array<any | string>;
  name: string;
  description: string;
  image: string;
  id: number;
  path: string;
  title: string;
}

function MainBlog(): JSX.Element {
  const [lastEntries, setBlogContent] = useState([]);

  let blogRequested = false;

  const urlBlog: string =
    'https://web-projects-api.ulisessg.vercel.app/api/blog/last-entries';

  // Get blog
  useEffect(() => {
    window
      .fetch(urlBlog)
      .then((res) => {
        blogRequested = true;
        return res.json();
      })
      .then((entries) => {
        const newData: BlogEntry[] = [];
        const test = entries.message;
        test.map((doc: any) => {
          // Rename fields
          const newDocument: BlogEntry = {
            metaSubjects: doc.metaSubjects,
            name: doc.title,
            description: doc.metaDescription,
            image: doc.seoCardUrl,
            id: doc.id,
            path: `/${doc.name}`,
            title: 'Imagen de portada',
          };
          newData.push(newDocument);
        });
        setBlogContent(newData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [blogRequested]);

  return (
    <>
      <main className='main' id='main'>
        <section className='sections'>
          <SectionWithImg images={lastEntries} sections={lastEntries} />
        </section>
      </main>
    </>
  );
}

export default MainBlog;
