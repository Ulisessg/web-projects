import { GistResponse, gistTransformed } from '../interfaces_and_types/globalPropsAndProperties';

export default function transformGistsInfo(gists: GistResponse):
  Array<gistTransformed> {
  const gitstsTransformated = gists.message.map((gist) => {
    const trasformatedGist = {
      id: gist.description,
      image: {
        src: gist.image,
        alt: `Portdada de ${gist.title}`,
      },
      title: gist.title,
      name: `/gists/${gist.name}`,
      description: gist.description,
    };

    return trasformatedGist;
  });

  return gitstsTransformated;
}
