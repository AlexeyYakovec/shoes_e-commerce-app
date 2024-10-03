import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const links = [
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
        name: "Categories",
        href: "/dashboard/categories",
    },
];

export const DashboardNavigation = () => {
    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className=" text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 font-semibold">
                    {link.name}
                </Link>
            ))}
        </>
    );
};
