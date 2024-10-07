import { cn } from "@/lib/utils";
import Link from "next/link";
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
                        className="font-medium hover:text-gray-400 transition-all">
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
};
