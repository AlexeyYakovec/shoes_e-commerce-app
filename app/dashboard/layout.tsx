import React from "react";

import { DashboardNavigation } from "@/components/dashboard/index";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, UsersRound } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

interface Props {
    children: React.ReactNode;
}

async function DashboardLayout({ children }: Props) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || user.email !== "pajiaduh2222@gmail.com") {
        return redirect("/");
    }
    return (
        <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white ">
                <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-medium lg:gap-6">
                    <DashboardNavigation />
                </nav>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            className="shrink-0 md:hidden"
                            variant="outline"
                            size="icon">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={"left"}>
                        <nav className="grid gap-6 text-lg font font-medium mt-5">
                            <DashboardNavigation />
                        </nav>
                    </SheetContent>
                </Sheet>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant={"secondary"}
                            size={"default"}
                            className="rounded-full">
                            <UsersRound className="w-5 h-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="font-medium" asChild>
                            <LogoutLink>Logout</LogoutLink>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <main className="my-6">{children}</main>
        </div>
    );
}

export default DashboardLayout;
