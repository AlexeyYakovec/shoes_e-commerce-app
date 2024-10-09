import { cn } from "@/lib/utils";
import React from "react";

interface Props {
    className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between",
                className,
            )}>
            Footer
        </div>
    );
};
