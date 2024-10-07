import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { NavbarLinks } from "./index";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBagIcon } from "lucide-react";

interface Props {
    className?: string;
}

export const Navbar: React.FC<Props> = async ({ className }) => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <nav
            className={cn(
                "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between",
                className,
            )}>
            <div className="flex items-center">
                <Link href={"/"}>
                    <h1 className="text-black font-bold text-xl lg:text-3xl">
                        como
                        <span className="text-primary font-extrabold">
                            Shoes
                        </span>
                    </h1>
                </Link>

                <NavbarLinks />
            </div>

            <div className="flex items-center">
                {user ? (
                    <Link
                        href={"/bag"}
                        className="group p-2 flex items-center mr-2">
                        <ShoppingBagIcon className="h-6 w-6 text-gray-600 group-hover:text-gray-500 transition-all" />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                            5
                        </span>
                    </Link>
                ) : (
                    <h1>not autenticated</h1>
                )}
            </div>
        </nav>
    );
};
