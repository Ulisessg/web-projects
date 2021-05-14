export default function transformGistsInfo(gists: {
  error: boolean;
  message: Array<any>;
}) {
  const gitstsTransformated = gists.message.map((gist) => {
    const trasformatedGist = {
      id: gist.description,
      image: gist.image,
      title: gist.title,
      name: gist.githubLink,
      description: gist.description,
    };

    return trasformatedGist;
  });

  return gitstsTransformated;
}