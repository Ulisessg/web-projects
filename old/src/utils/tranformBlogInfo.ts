import { BlogEntryRaw, BlogEntry } from '../interfaces_and_types/globalPropsAndProperties';

export default function transformBlogInfo(blogs: { message: BlogEntryRaw[]; }): Array<BlogEntry> {
  const blogsTransformated: Array<BlogEntry> = blogs.message.map((blog) => {
    const blogTransformed: BlogEntry = {
      id: blog.id,
      image: {
        src: blog.seoCardUrl,
        alt: `Portada de ${blog.title}`,
      },
      title: blog.title,
      name: blog.name,
      description: blog.metaDescription,
      metaSubjects: blog.metaSubjects,
      language: blog.language,
      path: blog.language === 'es' ? `/${blog.name}` : `/en/${blog.name}`,
    };

    return blogTransformed;
  });

  return blogsTransformated;
}
