"use client";

import { buttonProps } from "@/app/lib/interfaces";
import { useFormStatus } from "react-dom";
import { Button } from "./button";

export function DeleteItem({ text, variant }: buttonProps) {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled className="font-medium text-primary text-end">
                    Removing...
                </Button>
            ) : (
                <Button
                    variant={variant}
                    type="submit"
                    className="font-medium text-primary text-end">
                    {text}
                </Button>
            )}
        </>
    );
}
