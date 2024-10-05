import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
    MoreHorizontal,
    PlusCircle,
    UserIcon,
    Pencil,
    PackageX,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
}

const ProductsRoute: React.FC<Props> = () => {
    return (
        <>
            <div className="flex items-center justify-end">
                <Button
                    asChild
                    className="flex items-center gap-x-2 "
                    variant={"default"}>
                    <Link href="/dashboard/products/create">
                        <PlusCircle className="w-5 h-5" />
                        <span>Add Product</span>
                    </Link>
                </Button>
            </div>

            <Card className="mt-5">
                <CardHeader>
                    <CardTitle className="text-2xl">Products</CardTitle>
                    <CardDescription>
                        Manage your products and view their sales performance
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">
                                    Image
                                </TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <UserIcon className="h-10 w-10" />
                                </TableCell>
                                <TableCell>Nike air</TableCell>
                                <TableCell className="text-green-600 font-semibold tracking-wide">
                                    Active
                                </TableCell>
                                <TableCell>$299.00</TableCell>
                                <TableCell>2024/01/01</TableCell>
                                <TableCell className="text-end">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                size={"icon"}
                                                variant={"ghost"}>
                                                <MoreHorizontal className="w-4 h-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel>
                                                Actions
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="flex items-center gap-2">
                                                <Pencil size={16} />
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="flex items-center gap-2">
                                                <PackageX size={16} />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    );
};

export default ProductsRoute;
