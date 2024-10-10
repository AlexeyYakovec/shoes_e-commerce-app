"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./button";
import { Loader2 } from "lucide-react";

export function ChceckoutButton() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending ? (
                <Button disabled size="lg" className="w-full mt-5">
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Please
                    Wait
                </Button>
            ) : (
                <Button type="submit" size="lg" className="w-full mt-5">
                    Checkout
                </Button>
            )}
        </>
    );
}
