interface BlogEntry {
  metaSubjects: Array<any | string>;
  name: string;
  description: string;
  image: string;
  id: number;
  path: string;
  title: string;
}

// eslint-disable-next-line import/prefer-default-export
export const getBlogs = () => async (dispatch) => {
  const urlBlog: string =
    'https://web-projects-api.ulisessg.vercel.app/api/blog/last-entries';

  window
    .fetch(urlBlog)
    .then((res) => res.json())
    .then((entries) => {
      const response = entries.message.map((doc: any) => {
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
        return newDocument;
      });
      dispatch({
        type: 'GET_BLOGS',
        payload: response,
      });
    })
    .catch(() => {
      dispatch({
        type: 'GET_BLOGS',
        payload: [{ error: true }],
      });
    });
};
