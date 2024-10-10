import { DashboardNavigation } from "@/components/dashboard/index";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";
import React from "react";

const Dashboard = () => {
    return (
        <>
            <div
                className={cn(
                    "grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4",
                )}>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>Total Revueve</CardTitle>
                        <DollarSign className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">$100.000</p>
                        <p className="text-xs text-muted-foreground">
                            Based on 100 Charges
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>Total Sales</CardTitle>
                        <ShoppingBag className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">+50</p>
                        <p className="text-xs text-muted-foreground">
                            Total Sales on como Shoes
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>Total Products</CardTitle>
                        <PartyPopper className="h-4 w-4 text-indigo-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">37</p>
                        <p className="text-xs text-muted-foreground">
                            Total Products created
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>Total Users</CardTitle>
                        <User2 className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">120</p>
                        <p className="text-xs text-muted-foreground">
                            Total Users Singed Up
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
                <Card className="xl:col-span-2">
                    <CardHeader>
                        <CardTitle>Transactions</CardTitle>
                        <CardDescription>
                            Recent Transactions from your store
                        </CardDescription>
                    </CardHeader>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent sales</CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden sm:flex h-9 w-9">
                                <AvatarFallback>JW</AvatarFallback>
                            </Avatar>

                            <div className="grid gap-1">
                                <p className="text-sm font-bold">
                                    Aleksey Yakovets
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    yakovec8952@gmail.com
                                </p>
                            </div>

                            <p className="font-bold ml-auto">+1,999.00</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden sm:flex h-9 w-9">
                                <AvatarFallback>JW</AvatarFallback>
                            </Avatar>

                            <div className="grid gap-1">
                                <p className="text-sm font-bold">
                                    Aleksey Yakovets
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    test@gmail.com
                                </p>
                            </div>

                            <p className="font-bold ml-auto">+1,999.00</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Dashboard;
