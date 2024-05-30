import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h3 className="text-4xl mb-5 font-semibold">Page not found {":("} </h3>
      <Link className={buttonVariants()} href="/">
        Back to homepage
      </Link>
    </div>
  );
}
