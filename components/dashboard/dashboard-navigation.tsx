"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Dashboard",
        href: "/dashboard",
    },
    {
        name: "Orders",
        href: "/dashboard/orders",
    },
    {
        name: "Products",
        href: "/dashboard/products",
    },
    {
        name: "Banner Picture",
        href: "/dashboard/banner",
    },
];

export const DashboardNavigation = () => {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                        ` text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 font-semibold ${
                            link.href === pathname
                                ? "text-black font-bold"
                                : "text-muted-foreground hover:text-foreground"
                        }`,
                    )}>
                    {link.name}
                </Link>
            ))}
        </>
    );
};
