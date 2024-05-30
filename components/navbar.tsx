import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Anchor from "./anchor";

const NAV_ITEMS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between">
      <div className="flex flex-row gap-4 items-center h-32">
        {NAV_ITEMS.map((item) => (
          <Anchor
            className={cn(
              buttonVariants({ variant: "link" }),
              "m-0 p-0 text-[18px] text-inherit "
            )}
            activeClassName="underline text-primary"
            key={item.href}
            href={item.href}
            absolute
          >
            {item.title}
          </Anchor>
        ))}
      </div>
    </nav>
  );
}
