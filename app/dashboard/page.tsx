import { DashboardNavigation } from "@/components/dashboard/index";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DollarSign } from "lucide-react";
import React from "react";

interface Props {
    className?: string;
}

const Dashboard: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("grid gap-4 md:grid-cols-2 md:gap-8", className)}>
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
        </div>
    );
};

export default Dashboard;
