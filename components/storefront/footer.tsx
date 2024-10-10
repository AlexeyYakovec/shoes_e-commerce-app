import React from "react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
    return (
        <footer
            className={cn(
                "mt-16 mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                className,
            )}>
            <div className="border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                <p className="text-xs leading-5 text-gray-700 text-left">
                    &copy; 2024 comoShoes. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};
