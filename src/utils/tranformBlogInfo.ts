export default function transformBlogInfo(blogs: any): any {
  const blogsTransformated = blogs.message.map((blog) => {
    const blogTransformed = {
      id: blog.id,
      image: {
        src: blog.seoCardUrl,
        alt: `Portada de ${blog.title}`,
      },
      title: blog.title,
      name: blog.language === 'es' ? `/${blog.name}` : `/en/${blog.name}`,
      description: blog.metaDescription,
    };

    return blogTransformed;
  });
  return blogsTransformated;
}
