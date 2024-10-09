"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
    className?: string;
}

export const navbarLinks = [
    {
        id: 0,
        name: "Home",
        href: "/",
    },
    {
        id: 1,
        name: "All Products",
        href: "/products/all",
    },
    {
        id: 2,
        name: "Men",
        href: "/products/men",
    },
    {
        id: 3,
        name: "Women",
        href: "/products/women",
    },
    {
        id: 4,
        name: "Kids",
        href: "/products/kids",
    },
];

export const NavbarLinks: React.FC<Props> = ({ className }) => {
    const location = usePathname();

    return (
        <div
            className={cn(
                "hidden md:flex justify-center items-center gap-x-6 ml-12",
                className,
            )}>
            {navbarLinks.map((link) => {
                return (
                    <Link
                        href={link.href}
                        key={link.id}
                        className={cn(
                            location === link.href
                                ? "bg-muted"
                                : "hover:bg-muted hover:bg-opacity-75",
                            "text-base",
                            "group p-2 font font-medium rounded-md hover:text-gray-400 transition-all",
                        )}>
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
};
