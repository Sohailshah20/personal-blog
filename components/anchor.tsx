"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";


type AnchorTagType = ComponentProps<typeof Link> & {
    activeClassName?: string,
    absolute?: boolean
}

export default function Anchor({ href, className, activeClassName, children, absolute, ...rest }: AnchorTagType) {
    const pathname = usePathname()
    let isActive = pathname === href

    if (absolute) {
        const hrefBase = href.toString().split("/")[1]
        const pathBase = pathname.split("/")[1]
        isActive = pathBase == hrefBase
    }

    return <Link {...rest} href={href}
        className={cn(className, isActive && activeClassName)}
    >{children}</Link>

}