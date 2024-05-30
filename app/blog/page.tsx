import { getAllBlogs } from "@/lib/markdown";
import BlogCard from "./blog-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Sohail",
  description:"Explore personal blogs chronicling my coding journey, filled with insights, challenges, and solutions."
};

export default async function BlogIndexPage() {
  const blogs = await getAllBlogs();
  return (
    <div>
      <h3 className="mb-8 text-4xl font-semibold">Explore my blogs</h3>
      <div className="flex flex-col gap-5">
        {blogs.map(({ frontmatter }) => (
          <BlogCard key={frontmatter.slug} {...frontmatter} />
        ))}
      </div>
    </div>
  );
}
