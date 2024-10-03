import { DashboardNavigation } from "@/components/dashboard/index";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
    className?: string;
}

const Dashboard: React.FC<Props> = ({ className }) => {
    return <div className={cn("", className)}></div>;
};

export default Dashboard;
