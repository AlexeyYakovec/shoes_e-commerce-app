"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./button";
import { Loader2, ShoppingBag } from "lucide-react";

export function ShoppingBagButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled size={"lg"} className="w-full mt-5 text-white">
                    <Loader2 className=" mr-5 h-5 w-5 animate-spin" /> Please
                    wait
                </Button>
            ) : (
                <Button size={"lg"} className="w-full mt-5 text-white">
                    <ShoppingBag className=" mr-5 h-5 w-5" /> Add to bag
                </Button>
            )}
        </>
    );
}
