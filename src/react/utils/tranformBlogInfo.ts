export default function transformBlogInfo(blogs) {
  const blogsParsed = JSON.parse(blogs);

  const blogsTransformated = blogsParsed.message.map((blog) => {
    const blogTransformed = {
      id: blog.id,
      image: blog.seoCardUrl,
      title: blog.title,
      name: `/${blog.name}`,
      description: blog.metaDescription,
    };

    return blogTransformed;
  });
  return blogsTransformated;
}
