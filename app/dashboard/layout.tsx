import React from "react";

import { DashboardNavigation } from "@/components/dashboard/index";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, UsersRound } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white">
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
                </DropdownMenu>
            </header>
            {children}
        </div>
    );
};

export default DashboardLayout;
