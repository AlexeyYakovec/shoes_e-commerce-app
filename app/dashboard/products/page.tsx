import prisma from "@/app/lib/db";
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
import { cn } from "@/lib/utils";

import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
    MoreHorizontal,
    PlusCircle,
    UserIcon,
    Pencil,
    PackageX,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
}

async function getData() {
    const data = await prisma.product.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return data;
}

const ProductsRoute: React.FC<Props> = async () => {
    const data = await getData();

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
                            {data.map((item) => {
                                return (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <Image
                                                alt="Product Image"
                                                height={64}
                                                width={64}
                                                src={item.images[0]}
                                                className="rounded-md object-cover h-16 w-16"
                                            />
                                        </TableCell>
                                        <TableCell> {item.name} </TableCell>
                                        <TableCell
                                            className={cn(
                                                "font-semibold",
                                                `${
                                                    item.status === "published"
                                                        ? "text-green-500"
                                                        : "text-red-500"
                                                }`,
                                            )}>
                                            {item.status}
                                        </TableCell>
                                        <TableCell>${item.price}</TableCell>
                                        <TableCell>
                                            {new Intl.DateTimeFormat(
                                                "en-US",
                                            ).format(item.createdAt)}
                                        </TableCell>
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
                                                    <DropdownMenuItem asChild>
                                                        <Link
                                                            href={`/dashboard/products/${item.id}`}
                                                            className="flex items-center gap-2">
                                                            <Pencil size={16} />
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="flex items-center gap-2">
                                                        <PackageX size={16} />
                                                        <Link
                                                            href={`/dashboard/products/${item.id}/delete`}>
                                                            Delete
                                                        </Link>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    );
};

export default ProductsRoute;
