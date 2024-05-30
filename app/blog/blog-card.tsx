import { MDXFrontmatter } from "@/lib/markdown";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
type BlogCardProps = MDXFrontmatter;

export default async function Blog({ slug, title, published }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <p className="mb-[0.15rem]">{title}</p>
      <span className="text-muted-foreground text-[15px]">
        {formatDate(published)}
      </span>
    </Link>
  );
}
