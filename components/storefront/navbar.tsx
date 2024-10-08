import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { NavbarLinks, UserDropdown } from "./index";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBagIcon } from "lucide-react";
import { ModeToggle } from "../ui/mode-toggle";
import { Button } from "../ui/button";
import {
    LoginLink,
    RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

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
                    <h1 className="text-inherit font-bold text-xl lg:text-3xl">
                        como
                        <span className="text-primary font-extrabold">
                            Shoes
                        </span>
                    </h1>
                </Link>

                <NavbarLinks />
            </div>

            <div className="flex items-center">
                <ModeToggle className="mr-12" />
                {user ? (
                    <>
                        <Link
                            href={"/bag"}
                            className="group p-2 flex items-center mr-4">
                            <ShoppingBagIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-600 group-hover:transition-all" />
                            <span className="ml-1 text-sm font-medium text-inherit group-hover:opacity-50">
                                5
                            </span>
                        </Link>
                        <UserDropdown
                            name={user.given_name as string}
                            email={user.email as string}
                            userImage={
                                user.picture ??
                                `https://avatar.vercel.sh/${user.given_name}`
                            }
                        />
                    </>
                ) : (
                    <div className="hidden md:flex md:flex-1 md:items-center md:justify-end">
                        <Button variant={"ghost"}>
                            <LoginLink>Sign in</LoginLink>
                        </Button>
                        <span className="h-6 w-px bg-gray-200"></span>
                        <Button variant={"ghost"}>
                            <RegisterLink>Create Account</RegisterLink>
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
};
