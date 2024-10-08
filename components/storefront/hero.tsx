import { cn } from "@/lib/utils";
import React from "react";

interface Props {
    className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("", className)}>
            <h1>Hello from the Hero</h1>
        </div>
    );
};
