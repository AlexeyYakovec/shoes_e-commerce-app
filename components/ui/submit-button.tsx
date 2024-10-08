"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./button";
import { Loader2 } from "lucide-react";
import { buttonProps } from "@/app/lib/interfaces";

export function SubmitButton({ text, variant }: buttonProps) {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button className="mr-auto" disabled variant={variant}>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please Wait
                </Button>
            ) : (
                <Button className="mr-auto" variant={variant} type="submit">
                    {text}
                </Button>
            )}
        </>
    );
}
