import Paginate from "@/components/paginate";
import { MDXFrontmatter, getAllBlogs, getBlogFromSlug } from "@/lib/markdown";
import { notFound } from "next/navigation";
import { cache } from "react";
import { formatDate } from "@/lib/utils";

type PageProps = {
  params: {
    slug: string;
  };
};

const cachedGetMdx = cache(getBlogFromSlug);

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.frontmatter.slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const blog = await cachedGetMdx(slug);
  if (!blog) return null;
  return {
    title: blog.frontmatter.title,
    description: blog.frontmatter.description,
  };
}

export default async function SpecificBlogPage({
  params: { slug },
}: PageProps) {
  const blog = await cachedGetMdx(slug);
  if (!blog) return notFound();
  const { frontmatter, content } = blog;
  return (
    <div className="w-full">
      <FrontMatter {...frontmatter} />
      <div className="prose prose-lg dark:prose-invert prose-neutral py-8 prose-code:text-base dark:prose-code:text-zinc-50/95 prose-code:text-[#354150] dark:prose-code:bg-[#282828] dark:prose-pre:bg-[#282828] prose-pre:font-code prose-headings:font-medium underline-offset-2">
        {content}
      </div>
      <Paginate slug={slug} />
    </div>
  );
}

function FrontMatter({ published, title }: MDXFrontmatter) {
  return (
    <div className="flex flex-col">
      <h3 className="text-4xl font-semibold mb-2">{title}</h3>
      <div className="flex flex-row items-center">
        <p className="text-muted-foreground text-[15px]">
          {formatDate(published)}
        </p>
      </div>
    </div>
  );
}
