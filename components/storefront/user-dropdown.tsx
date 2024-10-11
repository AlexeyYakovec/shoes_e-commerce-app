import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

interface Props {
    email: string;
    name: string;
    userImage: string;
}

export const UserDropdown: React.FC<Props> = ({ email, name, userImage }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={"ghost"}
                    className="relative w-10 h-10 rounded-full">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src={userImage} alt="User Image" />
                        <AvatarFallback>
                            {name ? name.slice(0, 3) : ""}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="start" forceMount>
                <DropdownMenuLabel className="flex flex-col space-y-2">
                    <p className="text-sm font-medium leading-none">{name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                        {email}
                    </p>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {(email === "alekseyyakovets8952@gmail.com" ||
                    email === "vt.yakovets@gmail.com") && (
                    <DropdownMenuItem>
                        <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                )}

                <DropdownMenuItem asChild>
                    <LogoutLink className="cursor-pointer">Log out</LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
