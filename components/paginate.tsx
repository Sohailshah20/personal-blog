import { getPrevNextBlog } from "@/lib/markdown";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default async function Paginate({ slug }: { slug: string }) {
  const { next, prev } = await getPrevNextBlog(slug);
  return (
    <div className="flex flex-row items-center justify-between mt-6">
      <div>
        {prev && (
          <>
            <h3 className="font-semibold text-base">Previous Article</h3>
            <Link
              className={cn(buttonVariants({ variant: "link" }), "text-base p-0")}
              href={`/blog/${prev.slug}`}
            >
              {prev.title}
            </Link>
          </>
        )}
      </div>
      <div className="flex flex-col items-end">
      {next && (
        <>
          <h3 className="font-semibold text-base">Next Article</h3>
          <Link
            className={cn(buttonVariants({ variant: "link" }), "text-base p-0")}
            href={`/blog/${next.slug}`}
            >
            {next.title}
          </Link>
            </>
      )}
      </div>
    </div>
  );
}
